# Usage: python3 make_page.py <final.docx> <out/index.html> ["Banner title"] ["18+"]
# Generates the interactive CV page from the final Word CV. Public-safe: no phone, email or named clients.
import re, subprocess, html, json, sys, os

SRC = sys.argv[1]
OUT = sys.argv[2]
YEARS = sys.argv[4] if len(sys.argv) > 4 else '18+'
md = subprocess.run(['pandoc','-t','gfm','--wrap=none',SRC],capture_output=True,text=True,check=True).stdout
lines = [l for l in md.split('\n') if not l.startswith('> <img')]

# ---------- parse pandoc output into sections
SECTIONS = ['Professional Summary','Core Competencies','Professional Experience','Education','Certifications','Professional Memberships']
cur = None; sect = {}; roles = []; role = None; order = []
i = 0
while i < len(lines):
    l = lines[i].rstrip()
    if l.startswith('# '):
        t = l[2:].strip()
        if t in SECTIONS:
            cur = t; sect[cur] = []; role = None
        elif cur == 'Professional Experience':
            role = {'title': t, 'meta': '', 'bullets': []}; roles.append(role)
    elif l.startswith('- '):
        txt = l[2:].strip()
        if cur == 'Professional Experience' and role is not None:
            role['bullets'].append(txt)
        elif cur: sect[cur].append(txt)
    elif l and cur == 'Professional Experience' and role is not None and not role['meta'] and not l.startswith('#'):
        role['meta'] = l.replace('\\|','|')
    i += 1

# privacy defaults for the public page: no named clients
for r in roles:
    r['bullets'] = [b for b in r['bullets'] if not b.startswith('Key clients:')]

def inline(t):
    t = html.escape(t, quote=False)
    return re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', t)

TAGS = [
 ('ec',   r'\bEC\b|employee central|EC ↔|hire-to-'),
 ('onb',  r'onboarding'),
 ('off',  r'offboarding|termination|exit|rehire'),
 ('pay',  r'payroll|\bECP\b|final settlement|final-pay'),
 ('tal',  r'succession|career development|recruiting|learning|compensation|\bLMS\b|talent'),
 ('arch', r'architect|roadmap|governance|design authority|standards|leanix|aris|signavio|integration|s/4|togaf|low-code|enterprise'),
]
LABEL = {'ec':'Employee Central','onb':'Onboarding','off':'Offboarding','pay':'Payroll','tal':'Talent & Learning','arch':'Architecture & Integration'}
if os.environ.get('CV_TAGS') == 'cvp':   # Compensation & Variable Pay
    TAGS = [
     ('comp', r'compensation|salary|pay range|job pricing|merit|total rewards|worksheet|rewards'),
     ('var',  r'variable pay|bonus|incentive|\bLTI\b|equity'),
     ('pay',  r'payroll|\bECP\b|pay component|retro|off-cycle|salary packaging'),
     ('ec',   r'\bEC\b|employee central|position|job data'),
     ('perf', r'performance|goals|succession|talent|analytics'),
     ('arch', r'architect|roadmap|governance|design authority|standards|leanix|aris|signavio|integration|s/4|togaf|low-code|enterprise'),
    ]
    LABEL = {'comp':'Compensation','var':'Variable Pay & LTI','pay':'Payroll link','ec':'Employee Central link','perf':'Performance, Talent & Analytics','arch':'Architecture & Integration'}
if os.environ.get('CV_TAGS') == 'tal':   # Talent: Performance & Goals, Succession
    TAGS = [
     ('perf', r'performance|goal|calibration|competenc|review|feedback|check-in'),
     ('succ', r'succession|talent pool|nomination|readiness|9-box|career development|career-path|talent matrix'),
     ('ec',   r'\bEC\b|employee central|position|job data'),
     ('comp', r'compensation|learning|\bLMS\b|recruiting|onboarding'),
     ('ana',  r'people analytics|analytics|reporting|talent intelligence'),
     ('arch', r'architect|roadmap|governance|design authority|standards|leanix|aris|signavio|integration|s/4|togaf|low-code|enterprise'),
    ]
    LABEL = {'perf':'Performance & Goals','succ':'Succession & Development','ec':'Employee Central link','comp':'Compensation, Learning & Hiring','ana':'People Analytics','arch':'Architecture & Integration'}
if os.environ.get('CV_TAGS') in ('rcm','sr'):   # Recruiting Management / Marketing focus
    TAGS = [
     ('rcm',  r'recruiting management|\bRCM\b|requisition|candidate|offer|recruiter|pipeline|hiring|application'),
     ('rmk',  r'recruiting marketing|\bRMK\b|career[- ]site|talent communit|talent pool|campaign|employer-brand|nurtur|source-of-hire|landing'),
     ('hand', r'onboarding|employee central|\bEC\b|hand-?off|hand-?over|rehire|new-hire'),
     ('pay',  r'payroll|\bECP\b'),
     ('tal',  r'succession|career development|learning|compensation|\bLMS\b|talent'),
     ('arch', r'architect|roadmap|governance|design authority|standards|leanix|aris|signavio|integration|s/4|togaf|low-code|enterprise'),
    ]
    LABEL = {'rcm':'Recruiting Management','rmk':'Recruiting Marketing','hand':'Onboarding & EC hand-off','pay':'Payroll','tal':'Talent & Learning','arch':'Architecture & Integration'}
    if os.environ.get('CV_TAGS') == 'sr':   # SmartRecruiters / ATS focus
        TAGS[0] = ('rcm', r'smartrecruiters|\bATS\b|applicant-tracking|recruiting|requisition|candidate|offer|recruiter|pipeline|hiring')
        TAGS[1] = ('rmk', r'career[- ]site|talent communit|talent pool|campaign|employer-brand|nurtur|source-of-hire|landing')
        LABEL.update({'rcm':'SmartRecruiters & Recruiting','rmk':'Career sites & talent pools'})
def tags(t):
    tl = t
    out = [k for k,rx in TAGS if re.search(rx, tl, flags=re.I)]
    return out
def li(t, cls=''):
    tg = tags(re.sub(r'\*\*','',t))
    return f'<li class="item {cls}" data-tags="{" ".join(tg)}">{inline(t)}</li>'

# ---------- competencies: labelled -> cards, rest -> plain list
labelled, plain = [], []
for c in sect['Core Competencies']:
    m = re.match(r'\*\*(.+?):\*\*\s*(.*)', c)
    (labelled if m else plain).append(c)
def card(c):
    m = re.match(r'\*\*(.+?):\*\*\s*(.*)', c)
    tg = tags(c)
    return (f'<article class="card item" data-tags="{" ".join(tg)}"><h3>{html.escape(m.group(1))}</h3>'
            f'<p>{html.escape(m.group(2).replace("**", ""))}</p></article>')

# ---------- counts for chips
allitems = sect['Professional Summary'] + sect['Core Competencies'] + [b for r in roles for b in r['bullets']]
counts = {k:0 for k,_ in TAGS}
for t in allitems:
    for k in tags(re.sub(r'\*\*','',t)): counts[k]+=1
total = len(allitems)

# ---------- roles
def role_html(r, idx):
    m = r['meta']
    org, dates = '', ''
    if '|' in m:
        org, dates = [x.strip() for x in m.split('|',1)]
    elif re.search(r'\d{4}', m):
        dates = m.strip(); org = 'Independent'
    elif m: org = m
    bl = '\n'.join(li(b) for b in r['bullets'])
    rid = f'role-{idx}'
    return (f'<details class="role" id="{rid}" open><summary><span class="role-title">{html.escape(r["title"])}</span>'
            f'<span class="role-meta"><b>{html.escape(org)}</b><span class="dot">·</span>{html.escape(dates)}</span></summary>'
            f'<ul class="list">{bl}</ul><p class="empty" hidden>No highlights for this focus in this role.</p></details>'), org, dates

role_blocks = []; path = []
for idx, r in enumerate(roles):
    h, org, dates = role_html(r, idx); role_blocks.append(h)
    short = org if org else r['title']
    path.append((idx, short.replace(' Global Services',''), dates))
path_rev = list(reversed(path))  # chronological (oldest first)

def simple_list(items):
    return '<ul class="list">' + '\n'.join(f'<li>{inline(x)}</li>' for x in items) + '</ul>'

certs = sect['Certifications']
cert_chips = '\n'.join(f'<li class="chip-static">{html.escape(c.replace(" (Certified)","").replace("SAP SuccessFactors ","SF "))}</li>' for c in certs)

stats = [(YEARS,'years in SAP HCM & SuccessFactors'),('8×','SAP SuccessFactors certifications'),
         ('20,000+','employees in payroll environments'),('80+','integrated applications governed'),
         ('2,000+','training hours delivered')]
stat_html = '\n'.join(f'<div class="stat"><b>{a}</b><span>{b}</span></div>' for a,b in stats)

chips = [f'<button class="chip" data-filter="all" aria-pressed="true">All <i>{total}</i></button>'] + \
        [f'<button class="chip" data-filter="{k}" aria-pressed="false">{LABEL[k]} <i>{counts[k]}</i></button>' for k,_ in TAGS]
path_html = '\n'.join(
    f'<li><a href="#role-{idx}" data-role="role-{idx}"><b>{html.escape(n)}</b><span>{html.escape(d)}</span></a></li>'
    for idx,n,d in path_rev)

PROJECTS = [
 ('Leading utility','Middle East · Remote / hybrid','Enterprise architecture for a national-scale utility',
  ['Architected target-state solutions aligned to the utility\'s business and digital strategy','Decomposed and optimised end-to-end business processes across the utility value chain',
   'Governed domain architecture and architecture standards across a large application landscape','Modelled the application portfolio in LeanIX and rationalised overlapping applications',
   'Led the demand-management track to prioritise and route digital initiatives','Drove value realisation by tracking benefits against approved business cases',
   'Orchestrated RFI, RFP and RFQ processes with full transparency and compliance','Evaluated vendor proposals and analysed solution suitability before selection',
   'Chaired architecture review boards and documented design decisions','Mentored delivery teams on architecture principles, patterns and reuse']),
 ('Public sector · Digital government','Middle East · Remote','Digital transformation office',
  ['Evaluated digital use cases in emerging technologies with business and IT leaders','Designed solution architectures aligned to organisational objectives',
   'Built and ran a Change Management Academy to raise architecture and change capability','Led the value-realisation and demand-management tracks for the transformation office',
   'Integrated technology solutions with the national digital government authority to improve citizen services','Developed enterprise architecture frameworks and views in Alfabet and ARIS',
   'Managed vendor relationships and assessed project suitability','Coordinated RFI, RFP and RFQ cycles to ensure compliant sourcing',
   'Facilitated workshops to align stakeholders on target architecture and roadmaps','Presented architecture recommendations and trade-offs to senior leadership']),

 ('Engineering & consulting · Europe','Europe · Remote','SAP SuccessFactors Recruiting for a European engineering and consulting group',
  ['Designed the SuccessFactors Recruiting solution around the group\'s hiring model','Configured requisition templates, approval routes and candidate pipelines',
   'Set up job-posting and career-site flows for multiple countries','Mapped recruiting data to Employee Central to remove duplicate entry',
   'Aligned role-based permissions with recruiters, hiring managers and HR','Ran fit-gap workshops and recorded decisions for the design authority',
   'Coordinated SIT and UAT, and triaged defects through to closure','Directed cutover and go-live readiness checks',
   'Trained recruiters and hiring managers on the new process','Documented configuration and supported the team through hypercare']),
 ('Energy · Pipelines','Canada · Remote','SAP SuccessFactors Recruiting for a Canadian pipeline operator',
  ['Implemented SuccessFactors Recruiting for a major pipeline operator','Configured requisitions, application flows and offer steps for field and office roles',
   'Designed approval workflows that matched regulated-industry hiring controls','Integrated recruiting with Employee Central for a clean hire-to-onboard handoff',
   'Tuned candidate communications and email templates','Defined role-based permissions for recruiters and hiring managers',
   'Led SIT and UAT cycles and tracked defects to closure','Prepared cutover plans and validated data before go-live',
   'Trained HR users on recruiter and manager processes','Resolved post-go-live issues within agreed service levels']),
 ('Public sector · Southern Africa','Botswana · Remote','SAP SuccessFactors Recruiting for a government organisation',
  ['Assessed the public-sector hiring process against SuccessFactors standard capabilities','Designed a recruiting solution that met public-service hiring rules',
   'Configured requisitions, application forms and selection stages','Set up approval workflows for panels and committees',
   'Adapted the candidate experience for local requirements and languages','Defined role-based permissions to protect applicant data',
   'Coordinated testing cycles with business users and fixed defects','Planned data load and cutover activities',
   'Trained HR officers and hiring managers on the new process','Supported go-live and documented the solution for the client team']),
 ('Sports & entertainment','Switzerland · Remote','SAP SuccessFactors Recruiting for a leading European football club',
  ['Designed SuccessFactors Recruiting for a leading European football club','Configured requisitions and pipelines for playing, coaching and commercial roles',
   'Set up confidential approval flows for sensitive senior hires','Tailored the candidate experience to the club\'s brand',
   'Defined role-based permissions to protect candidate data','Integrated recruiting with the existing HR landscape',
   'Led testing cycles and resolved defects before launch','Planned cutover and validated data readiness',
   'Trained the HR team on recruiter and manager processes','Provided hypercare support after go-live']),
 ('Retail · Footwear','USA · Remote','Onboarding for a global footwear and apparel retailer',
  ['Delivered SAP SuccessFactors Onboarding as the primary module for the retailer','Configured onboarding processes, tasks, forms and document flows for new hires',
   'Optimised new-hire workflows with HR teams to speed up time to productivity','Mapped hiring-to-onboarding handoffs between Recruiting, Onboarding and Employee Central',
   'Tuned role-based permissions so each user saw only what they needed','Resolved onboarding defects and support tickets within agreed SLAs',
   'Coordinated test cycles and validated end-to-end new-hire scenarios','Documented configuration decisions and handed over runbooks to support teams',
   'Advised HR stakeholders on SuccessFactors release changes and their impact','Trained HR users and administrators on the onboarding process']),
 ('Industrial manufacturing','USA · Remote','Recruiting and Onboarding 2.0 for equipment makers',
  ['Provided end-to-end support for SAP SuccessFactors Recruiting and Onboarding 2.0','Optimised hiring and onboarding workflows with HR teams for greater efficiency',
   'Implemented process improvements that raised compliance and user satisfaction','Resolved issues quickly using deep product and integration expertise',
   'Supported Onboarding 2.0 for a second precision-engineering manufacturer','Configured requisition, application and offer steps in Recruiting',
   'Aligned onboarding tasks and activities to Employee Central data requirements','Validated changes through structured testing before each release',
   'Collaborated with HR operations to prioritise enhancements and fixes','Monitored the new-hire experience and recommended further improvements']),
 ('Advanced materials','USA · Remote','Recruiter Experience for a specialty-materials company',
  ['Provided end-to-end support for SAP SuccessFactors Recruiter Experience','Collaborated with HR teams and stakeholders to optimise recruiting workflows',
   'Implemented process improvements that strengthened compliance','Resolved defects and incidents promptly to protect user satisfaction',
   'Configured candidate pipelines, statuses and recruiter templates','Aligned role-based permissions with recruiter and hiring-manager responsibilities',
   'Coordinated testing and release readiness for each change','Advised stakeholders on release features and adoption options',
   'Documented configuration and support procedures for the HR team','Guided recruiters through the new experience with practical walkthroughs']),
 ('Energy services · Oil & gas','USA · Remote','Onboarding 2.0 for an oilfield services provider',
  ['Delivered end-to-end support for SAP SuccessFactors Onboarding 2.0','Collaborated with HR teams and stakeholders to optimise onboarding workflows',
   'Implemented process improvements for a smoother new-hire experience','Resolved issues quickly to raise user satisfaction and compliance',
   'Configured onboarding tasks, forms and compliance documents for field and office roles','Handled hand-offs between recruiting, onboarding and Employee Central',
   'Verified fixes and enhancements through regression testing','Tracked and cleared defects against service-level targets',
   'Documented process changes and shared them with HR operations','Advised on best practice for onboarding across a global workforce']),
 ('Financial services · Insurance','USA · Remote','Recruiting go-live for a retirement and insurance group',
  ['Led user acceptance testing (UAT) for Recruiter Experience and Candidate Experience','Led system integration testing (SIT) across the recruiting landscape',
   'Directed the final cutover plan and go-live for RX and CX','Fixed defects on time and within SLA for a seamless implementation',
   'Collaborated with cross-functional teams to deliver the project successfully','Coordinated test scripts, data and sign-offs with business testers',
   'Managed go-live readiness checks and go/no-go inputs','Triaged hypercare issues and drove them to closure',
   'Reported progress, risks and defect trends to project leadership','Handed over documentation and support guidance after go-live']),
 ('Education & community','India · Global · Remote','SuccessLabs Academy',
  ['Founded a community-driven learning platform from HR Tech to enterprise architecture','Designed role-based curricula for HR professionals and MBA HR students',
   'Delivered 2,000+ hours of SAP and architecture training','Mentored learners on career growth in HR technology and architecture',
   'Created video content on HR Tech, well-being and applied spirituality for a global audience','Simplified complex concepts into clear, practical lessons',
   'Volunteered at architecture industry conclaves as a speaker','Earned recognition as an SAP Authorized Trainer',
   'Built learning tools, including a mobile app for the Academy','Grew a community around humanised HR and enterprise architecture education']),
]
def pcard(sec,where,title,pts):
    return ('<article class="pcard"><span class="sector">'+html.escape(sec)+'</span><h3>'+html.escape(title)+'</h3><p class="where">'+html.escape(where)+'</p><ul>'
            +''.join('<li>'+html.escape(x)+'</li>' for x in pts)+'</ul></article>')
if os.environ.get('CV_TAGS') in ('rcm','sr'): PROJECTS.sort(key=lambda x: 'Recruiting' not in x[2])
proj_html = ''.join(pcard(*x) for x in PROJECTS)
FIRMS = [
 ('PwC','Industries: PSU · EPC · Telecom · Manufacturing · Chemical · Real estate · Home appliances · Automobile · Banking & financial services · Steel · Infrastructure & energy — India','SAP HCM implementations and managed services',
  ['Delivered 2 implementations and 12 application-management (AMS) projects','Gathered requirements for every issue, resolved it and briefed ABAP developers on new technical changes',
   'Resolved payroll queries on individual reimbursement (IT0589) such as medical, LTA and advance claims, plus ESS/MSS','Tested all ESS/MSS functionality after portal configuration by the EP consultant',
   'Handled Enterprise Compensation Management queries on job pricing and LTI','Designed the Learning Solution (LSO) training module and learning materials, and guided the EP/ESS team',
   'Configured TREX for talent search in E-Recruiting','Resolved Travel Management issues on per diem and out-of-pocket expenses',
   'Solved tickets on income tax, professional tax and HR-to-FI integration','Added value through process improvement with industry best practices',
   'Created LSMW programs for master-data uploads','Implemented SAP Notes for Union Budget and statutory changes','Trained new end users']),
 ('Wipro','Industries: Energy, Natural Resources & Utilities · Manufacturing & Hi-Tech · Retail & Consumer Goods — USA · UK · France · Mexico','SAP HCM project and internship engagements',
  ['Configured Negative Time Management: holiday calendars, groupings, work schedules, time recording and absence-quota generation','Worked on Personnel Administration, Organisational Management, Recruitment and UK Payroll support',
   'Configured Training and Event Management: business events, groups and types, time schedules, day types, locations and bookings','Uploaded training records and trainee details in bulk',
   'Maintained features such as ABKRS, TARIF, LGMST, SCHKZ and TMSTA to default values','Maintained processing, cumulation and evaluation classes to client specifications',
   'Created mock-ups and data-migration templates for custom infotypes and reports','Completed security testing to verify authorisations; loaded data in bulk using LSMW and BDC',
   'Prepared test cases for post-upgrade and year-end HCM testing','Prepared 200+ functional specifications for WRICEF objects, 10+ configuration documents and 5+ user manuals',
   'Maintained HCM master data and kept the system data clean']),
 ('Deloitte','Industry: Hospitality — India','SAP HCM implementation for a leading hospitality group',
  ['Conducted AS-IS/TO-BE workshops and gathered requirements with the RDS scoping questionnaire','Streamlined LSO, Time Management, Self Services and executive-payroll processes after fit-gap analysis',
   'Configured Negative Time Management, leave rules at ECC and ESS level, quota generation (PTQTA_00) and client validations','Configured all ESS/MSS components: launchpad, WebMo features, employee profile, leave and leave encashment, tax declaration, advances, loans, tax projection and executive salary packaging',
   'Coordinated the whole HCM test effort: functional, unit, UAT, integration and authorisation testing with the client audit team','Tested the portal with the EP consultant',
   'Trained leave, payroll and portal admins, LSO power users and the security and audit team; ran 5 batches of train-the-trainer and end-user training','Worked with the core process team to deliver an integrated system solution',
   'Prepared LSMW programs for data migration and cutover','Wrote 60+ functional specifications for custom objects (WRICEF) for the ABAP team',
   'Documented blueprint, configuration, UAT and training-cum-user manuals for all HCM sub-modules','Set up Workforce Process Management for payroll and legal reporting, bundling country-specific master data']),
 ('KPMG','Role: Enterprise Architect, HR Platforms','Enterprise architecture for HR technology',
  ['Reviewed and designed the HR tech roadmap and application portfolio for 80+ HR applications using ARIS and Alfabet from Software AG','Assessed and maximised use of SuccessFactors: Compensation, Recruiting, Learning, Performance, Employee Central and People Analytics',
   'Leveraged ServiceNow for HR service delivery, business impact analysis, business continuity planning and CMDB integration','Assessed low-code platforms such as Appian to fill gaps in the SuccessFactors suite',
   'Contributed to proofs of concept: HR document management, RPA use cases for HR and an enterprise data platform','Supported pre-sales evaluations of HR tools and led weekly change-request meetings',
   'Shaped hybrid-learning strategy, learning-tech transformation and learning-content strategy; enabled People Analytics use cases','Integrated HR systems with SAP S/4HANA Cloud and Workday core HR',
   'Implemented SAP Analytics Cloud, Replicon, SAP identity authentication with Azure, Integration Suite on BTP, Datasphere, Data Intelligence, GRC and engagement pricing','Served on the Architecture Review Board, Technology Design Council and Change Advisory Board']),
]
firm_html = ''.join(pcard(*x) for x in FIRMS)

TITLE = sys.argv[3] if len(sys.argv) > 3 else 'Lead SAP SuccessFactors Consultant, Employee Central, Onboarding and Offboarding'
page = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dr. Niladri Bihari Nayak — {html.escape(TITLE)}</title>
<meta name="description" content="Interactive CV: {html.escape(TITLE)}. Filter the experience by focus area.">
<meta property="og:title" content="Dr. Niladri Bihari Nayak — {html.escape(TITLE)}">
<meta property="og:description" content="Interactive CV — filter by focus area, search, print to PDF.">
<meta name="color-scheme" content="light dark">
<style>
:root{{
  --navy:#0c1238; --navy-2:#161d52; --mint:#a3e635; --mint-d:#15803d; --grad:linear-gradient(90deg,#a3e635,#4ade80 45%,#16a34a); --grad-d:linear-gradient(90deg,#65a30d,#16a34a 55%,#047857);
  --bg:#f5f7fb; --surface:#ffffff; --ink:#131936; --muted:#4b5373; --line:#dfe3ee;
  --chip:#eef1f8; --chip-on:#14532d; --chip-on-ink:#ffffff; --mark:#e8f8d4;
  --shadow:0 1px 2px rgba(12,18,56,.06),0 8px 24px rgba(12,18,56,.06);
  --radius:14px; --maxw:1040px;
}}
:root[data-theme="dark"]{{
  --bg:#080c26; --surface:#10173f; --ink:#e8ecff; --muted:#aab2d6; --line:#252d63;
  --chip:#1a2255; --chip-on:#a3e635; --chip-on-ink:#08122b; --mark:#1f3a14;
  --shadow:0 1px 2px rgba(0,0,0,.4),0 8px 24px rgba(0,0,0,.35);
}}
@media (prefers-color-scheme: dark){{
  :root:not([data-theme="light"]){{
    --bg:#080c26; --surface:#10173f; --ink:#e8ecff; --muted:#aab2d6; --line:#252d63;
    --chip:#1a2255; --chip-on:#a3e635; --chip-on-ink:#08122b; --mark:#1f3a14;
    --shadow:0 1px 2px rgba(0,0,0,.4),0 8px 24px rgba(0,0,0,.35);
  }}
}}
*{{box-sizing:border-box}}
html{{scroll-behavior:smooth;scroll-padding-top:72px}}
body{{margin:0;background:var(--bg);color:var(--ink);font:16px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased}}
a{{color:inherit}}
.wrap{{max-width:var(--maxw);margin:0 auto;padding:0 20px}}
/* top bar */
.bar{{position:sticky;top:0;z-index:20;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}}
.bar .wrap{{display:flex;align-items:center;gap:14px;height:56px}}
.brand{{font-weight:700;letter-spacing:.2px;white-space:nowrap}}
.brand{{display:flex;flex-direction:column;line-height:1.15}}
.brand b{{font-size:16px;background:var(--grad-d);-webkit-background-clip:text;background-clip:text;color:transparent}}
.brand small{{font-size:11.5px;font-weight:500;color:var(--muted);letter-spacing:.1px}}
:root[data-theme="dark"] .brand b{{background-image:var(--grad)}}
@media (prefers-color-scheme: dark){{:root:not([data-theme="light"]) .brand b{{background-image:var(--grad)}}}}
nav{{display:flex;gap:4px;margin-left:auto;overflow-x:auto;scrollbar-width:none}}
nav a{{text-decoration:none;font-size:14px;color:var(--muted);padding:6px 10px;border-radius:8px;white-space:nowrap}}
nav a:hover,nav a.on{{background:var(--chip);color:var(--ink)}}
.tools{{display:flex;gap:6px}}
.btn{{font:inherit;font-size:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:10px;padding:6px 12px;cursor:pointer}}
.btn:hover{{border-color:var(--mint-d)}}
.btn:focus-visible,.chip:focus-visible,summary:focus-visible,.path a:focus-visible,input:focus-visible{{outline:3px solid var(--mint);outline-offset:2px}}
/* hero */
.hero{{background:radial-gradient(1200px 400px at 85% -10%,rgba(132,204,22,.38),transparent 60%),linear-gradient(135deg,var(--navy),var(--navy-2));color:#fff;padding:56px 0 40px}}
.hero h1{{margin:0;font-size:clamp(32px,5vw,52px);line-height:1.1;letter-spacing:-.5px}}
.hero .hero-role{{margin:12px 0 4px;font-size:clamp(14px,2.1vw,21px);font-weight:700;white-space:nowrap;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}}
.tagline{{margin:2px 0 0;font-size:15px;font-style:italic;color:#d9f99d}}
.hero .sub{{margin:0;color:#cdd3f5;font-size:15px}}
.badges{{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}}
.badges span{{border:1px solid rgba(255,255,255,.28);padding:3px 12px;border-radius:99px;font-size:13px;color:#e9ecff}}
.stats{{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:30px}}
.stat{{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:12px;padding:14px 14px 12px}}
.stat b{{display:block;font-size:26px;line-height:1.1;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}}
.stat span{{display:block;margin-top:4px;font-size:12.5px;color:#cdd3f5;line-height:1.35}}
/* controls */
.controls{{margin:-22px auto 0;position:relative;z-index:5}}
.panel{{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);padding:16px}}
.panel h2{{margin:0 0 4px;font-size:15px}}
.panel p.hint{{margin:0 0 12px;font-size:13.5px;color:var(--muted)}}
.chips{{display:flex;flex-wrap:wrap;gap:8px}}
.chip{{font:inherit;font-size:14px;border:1px solid var(--line);background:var(--chip);color:var(--ink);padding:6px 12px;border-radius:99px;cursor:pointer}}
.chip i{{font-style:normal;opacity:.7;margin-left:4px;font-size:12px}}
.chip[aria-pressed="true"]{{background:var(--chip-on);color:var(--chip-on-ink);border-color:var(--chip-on)}}
.row{{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:14px}}
.search{{flex:1;min-width:220px;position:relative}}
.search input{{width:100%;font:inherit;padding:9px 12px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink)}}
.count{{font-size:13.5px;color:var(--muted)}}
/* sections */
section{{padding:34px 0 6px}}
section>.wrap>h2{{font-size:22px;margin:0 0 14px;letter-spacing:-.2px;display:flex;align-items:center;gap:10px}}
section>.wrap>h2:before{{content:"";width:8px;height:22px;border-radius:3px;background:linear-gradient(180deg,#a3e635,#15803d)}}
.list{{margin:0;padding:0;list-style:none;display:grid;gap:8px}}
.list li{{position:relative;padding:10px 14px 10px 34px;background:var(--surface);border:1px solid var(--line);border-radius:10px}}
.list li:before{{content:"";position:absolute;left:14px;top:18px;width:7px;height:7px;border-radius:50%;background:var(--mint-d)}}
.list strong{{background:linear-gradient(transparent 62%,var(--mark) 0)}}
.grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:12px}}
.card{{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:16px;box-shadow:var(--shadow)}}
.card h3{{margin:0 0 6px;font-size:16px;color:var(--mint-d)}}
:root[data-theme="dark"] .card h3{{color:var(--mint)}}
@media (prefers-color-scheme: dark){{:root:not([data-theme="light"]) .card h3{{color:var(--mint)}}}}
.card p{{margin:0;font-size:14.5px;color:var(--muted)}}
/* path */
.path{{list-style:none;margin:0 0 18px;padding:0;display:flex;gap:8px;overflow-x:auto}}
.path li{{flex:1;min-width:140px;position:relative}}
.path a{{display:block;text-decoration:none;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:10px 12px}}
.path a b{{display:block;font-size:14px}}
.path a span{{font-size:12.5px;color:var(--muted)}}
.path a:hover,.path a.on{{border-color:var(--mint-d);box-shadow:var(--shadow)}}
/* roles */
.role{{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);margin-bottom:12px;box-shadow:var(--shadow)}}
.role summary{{list-style:none;cursor:pointer;padding:14px 16px;display:flex;flex-wrap:wrap;gap:4px 14px;align-items:baseline}}
.role summary::-webkit-details-marker{{display:none}}
.role summary:after{{content:"▾";margin-left:auto;color:var(--muted);transition:transform .2s}}
.role:not([open]) summary:after{{transform:rotate(-90deg)}}
.role-title{{font-size:17px;font-weight:700}}
.role-meta{{font-size:14px;color:var(--muted)}}
.role-meta .dot{{margin:0 6px}}
.role .list{{padding:0 14px 14px}}
.empty{{margin:0;padding:0 16px 14px;color:var(--muted);font-size:14px}}
.is-hidden{{display:none!important}}
/* projects */
.proj{{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}}
.pcard{{background:var(--surface);border:1px solid var(--line);border-top:4px solid transparent;border-image:var(--grad) 1;border-radius:var(--radius);padding:16px;box-shadow:var(--shadow)}}
.pcard h3{{margin:8px 0 6px;font-size:16.5px}}
.sector{{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.3px;text-transform:uppercase;padding:3px 10px;border-radius:99px;background:var(--grad);color:#08210f}}
.pcard .where{{font-size:13px;color:var(--muted);margin:0 0 6px}}
.pcard ul{{margin:0;padding-left:18px;color:var(--muted);font-size:14.5px}}
.pcard li{{margin:3px 0}}
/* credentials */
.cols{{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}}
.cols .card h3{{color:var(--ink)}}
.chips-static{{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px}}
.chip-static{{background:var(--chip);border:1px solid var(--line);border-radius:99px;padding:4px 12px;font-size:13.5px}}
.plain{{margin:0;padding-left:18px;color:var(--muted);font-size:14.5px}}
footer{{margin:44px 0 60px;color:var(--muted);font-size:14px}}
footer .wrap{{border-top:1px solid var(--line);padding-top:18px;display:flex;flex-wrap:wrap;gap:8px 18px;justify-content:space-between}}
@media (max-width:860px){{
  .stats{{grid-template-columns:repeat(2,1fr)}} .grid,.cols{{grid-template-columns:1fr}}
  nav,.brand small{{display:none}} .hero .hero-role{{white-space:normal}} .proj{{grid-template-columns:1fr}} .hero{{padding:40px 0 34px}} .stat:last-child{{grid-column:span 2}}
}}
@media (prefers-reduced-motion:reduce){{html{{scroll-behavior:auto}} .role summary:after{{transition:none}}}}
@media print{{
  .proj{{grid-template-columns:1fr 1fr}} .pcard{{break-inside:avoid}}
  .bar,.controls,.path,.tools{{display:none!important}}
  body{{background:#fff;color:#000;font-size:11px}}
  .hero{{background:#0c1238!important;-webkit-print-color-adjust:exact;print-color-adjust:exact;padding:20px 0}}
  .is-hidden{{display:revert!important}} .role{{box-shadow:none;break-inside:avoid-page}}
  .role>.list,.role .empty{{display:grid}} details:not([open])>*:not(summary){{display:block}}
  section{{padding:14px 0 0}} .card{{box-shadow:none}}
}}
</style>
</head>
<body>
<header class="bar"><div class="wrap">
  <div class="brand"><b>Dr. Niladri Bihari Nayak</b><small>Architecting Experiences for a Better World</small></div>
  <nav aria-label="Sections">
    <a href="#summary">Summary</a><a href="#competencies">Focus areas</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#firms">Firms</a><a href="#credentials">Credentials</a>
  </nav>
  <div class="tools">
    <button class="btn" id="theme" type="button" aria-label="Toggle dark mode">Theme</button>
    <button class="btn" id="print" type="button">Save as PDF</button>
  </div>
</div></header>

<div class="hero"><div class="wrap">
  <h1>Dr. Niladri Bihari Nayak</h1>
  <p class="hero-role">{html.escape(TITLE)}</p>
  <p class="tagline">Architecting Experiences for a Better World</p>
  <p class="sub">South Gurugram, India · SuccessLabs Academy</p>
  <div class="badges"><span>8× SAP SuccessFactors certified</span><span>TOGAF certified</span><span>Doctorate in Strategic Management</span></div>
  <div class="stats">{stat_html}</div>
</div></div>

<div class="wrap controls"><div class="panel">
  <h2>Explore by focus</h2>
  <p class="hint">Pick a focus area to show only the highlights that match. Search narrows it further.</p>
  <div class="chips" role="group" aria-label="Focus filter">{"".join(chips)}</div>
  <div class="row">
    <div class="search"><input id="q" type="search" placeholder="Search the CV, e.g. workflow, S/4, training" aria-label="Search the CV"></div>
    <button class="btn" id="expand" type="button">Expand all</button>
    <button class="btn" id="collapse" type="button">Collapse all</button>
    <span class="count" id="count" role="status" aria-live="polite">Showing all {total} highlights</span>
  </div>
</div></div>

<section id="summary"><div class="wrap"><h2>Professional summary</h2>
<ul class="list">{"".join(li(t) for t in sect["Professional Summary"])}</ul></div></section>

<section id="competencies"><div class="wrap"><h2>Focus areas &amp; core competencies</h2>
<div class="grid">{"".join(card(c) for c in labelled)}</div>
<ul class="list">{"".join(li(t) for t in plain)}</ul></div></section>

<section id="experience"><div class="wrap"><h2>Professional experience</h2>
<ol class="path" aria-label="Career path, oldest to newest">{path_html}</ol>
{"".join(role_blocks)}
<p class="hint" style="color:var(--muted);font-size:13.5px">Client names are omitted on this public page.</p></div></section>

<section id="projects"><div class="wrap"><h2>Selected engagements by sector</h2>
<p class="hint" style="color:var(--muted);font-size:13.5px;margin:-4px 0 14px">Client names are withheld; engagements are labelled by sector and region.</p>
<div class="proj">{proj_html}</div></div></section>

<section id="firms"><div class="wrap"><h2>Consulting-firm experience by industry</h2>
<p class="hint" style="color:var(--muted);font-size:13.5px;margin:-4px 0 14px">Client names are withheld; work is shown by firm, industry and geography.</p>
<div class="proj">{firm_html}</div></div></section>

<section id="credentials"><div class="wrap"><h2>Credentials</h2>
<div class="cols">
  <article class="card"><h3>Certifications</h3><ul class="chips-static">{cert_chips}</ul></article>
  <article class="card"><h3>Education</h3>{simple_list(sect["Education"]).replace('class="list"','class="plain"')}</article>
  <article class="card"><h3>Professional memberships</h3>{simple_list(sect["Professional Memberships"]).replace('class="list"','class="plain"')}</article>
</div></div></section>

<footer><div class="wrap">
  <span>References and contact details available on request. Reach out via <a href="https://github.com/nbnayak88">GitHub</a>.</span>
  <span>Built by the <a href="https://github.com/nbnayak88/SuperLabs/blob/main/11-Scale/templates/sla-cv-maker/SKILL.md">sla-cv-maker</a> skill · <a href="https://github.com/nbnayak88/SuperLabs/tree/main/11-Scale">SCALE lab</a></span>
</div></footer>

<script>
(function(){{
  var chips=[].slice.call(document.querySelectorAll('.chip'));
  var items=[].slice.call(document.querySelectorAll('.item'));
  var roles=[].slice.call(document.querySelectorAll('.role'));
  var q=document.getElementById('q'), count=document.getElementById('count');
  var state={{filter:'all',text:''}};
  function norm(s){{return (s||'').toLowerCase();}}
  function apply(){{
    var shown=0, total=items.length, t=norm(state.text).trim();
    items.forEach(function(el){{
      var tags=(el.getAttribute('data-tags')||'').split(' ');
      var okF=state.filter==='all'||tags.indexOf(state.filter)>-1;
      var okT=!t||norm(el.textContent).indexOf(t)>-1;
      var ok=okF&&okT; el.classList.toggle('is-hidden',!ok); if(ok)shown++;
    }});
    roles.forEach(function(r){{
      var vis=r.querySelectorAll('.item:not(.is-hidden)').length;
      var empty=r.querySelector('.empty');
      r.classList.toggle('is-hidden',vis===0 && (state.filter!=='all'||t!==''));
      if(empty) empty.hidden=vis!==0;
    }});
    document.querySelectorAll('.path a').forEach(function(a){{
      var r=document.getElementById(a.getAttribute('data-role'));
      a.parentNode.classList.toggle('is-hidden',r&&r.classList.contains('is-hidden'));
    }});
    count.textContent=(state.filter==='all'&&!t)?('Showing all '+total+' highlights'):('Showing '+shown+' of '+total+' highlights');
  }}
  chips.forEach(function(c){{c.addEventListener('click',function(){{
    state.filter=c.getAttribute('data-filter');
    chips.forEach(function(x){{x.setAttribute('aria-pressed',x===c?'true':'false');}});
    apply();
  }});}});
  q.addEventListener('input',function(){{state.text=q.value;apply();}});
  document.getElementById('expand').addEventListener('click',function(){{roles.forEach(function(r){{r.open=true;}});}});
  document.getElementById('collapse').addEventListener('click',function(){{roles.forEach(function(r){{r.open=false;}});}});
  document.querySelectorAll('.path a').forEach(function(a){{a.addEventListener('click',function(){{
    var r=document.getElementById(a.getAttribute('data-role')); if(r) r.open=true;
  }});}});
  document.getElementById('print').addEventListener('click',function(){{
    roles.forEach(function(r){{r.open=true;}}); window.print();
  }});
  var root=document.documentElement, btn=document.getElementById('theme');
  try{{var saved=localStorage.getItem('cv-theme'); if(saved) root.setAttribute('data-theme',saved);}}catch(e){{}}
  btn.addEventListener('click',function(){{
    var cur=root.getAttribute('data-theme');
    if(!cur) cur=(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';
    var next=cur==='dark'?'light':'dark'; root.setAttribute('data-theme',next);
    try{{localStorage.setItem('cv-theme',next);}}catch(e){{}}
  }});
  var links=[].slice.call(document.querySelectorAll('nav a'));
  if('IntersectionObserver' in window){{
    var io=new IntersectionObserver(function(es){{es.forEach(function(e){{
      if(e.isIntersecting){{links.forEach(function(l){{l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id);}});}}
    }});}},{{rootMargin:'-40% 0px -55% 0px'}});
    ['summary','competencies','experience','projects','firms','credentials'].forEach(function(id){{var s=document.getElementById(id); if(s)io.observe(s);}});
  }}
  apply();
}})();
</script>
</body>
</html>
'''
os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT,'w',encoding='utf-8').write(page)
print('wrote',OUT,len(page),'bytes; items',total,'counts',counts)
