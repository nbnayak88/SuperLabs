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
            f'<p>{html.escape(m.group(2))}</p></article>')

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

TITLE = sys.argv[3] if len(sys.argv) > 3 else 'Lead SAP SuccessFactors Consultant – Employee Central, Onboarding & Offboarding'
page = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dr. Niladri Bihari Nayak — Lead SAP SuccessFactors Consultant</title>
<meta name="description" content="Interactive CV: Lead SAP SuccessFactors Consultant specialising in Employee Central, Onboarding 2.0 and Offboarding. Filter the experience by focus area.">
<meta property="og:title" content="Dr. Niladri Bihari Nayak — Lead SAP SuccessFactors Consultant">
<meta property="og:description" content="Interactive CV — filter by focus area, search, print to PDF.">
<meta name="color-scheme" content="light dark">
<style>
:root{{
  --navy:#0c1238; --navy-2:#161d52; --mint:#6cc5a1; --mint-d:#1f8a64;
  --bg:#f5f7fb; --surface:#ffffff; --ink:#131936; --muted:#4b5373; --line:#dfe3ee;
  --chip:#eef1f8; --chip-on:#0c1238; --chip-on-ink:#ffffff; --mark:#e6f7ef;
  --shadow:0 1px 2px rgba(12,18,56,.06),0 8px 24px rgba(12,18,56,.06);
  --radius:14px; --maxw:1040px;
}}
:root[data-theme="dark"]{{
  --bg:#080c26; --surface:#10173f; --ink:#e8ecff; --muted:#aab2d6; --line:#252d63;
  --chip:#1a2255; --chip-on:#6cc5a1; --chip-on-ink:#08122b; --mark:#133a35;
  --shadow:0 1px 2px rgba(0,0,0,.4),0 8px 24px rgba(0,0,0,.35);
}}
@media (prefers-color-scheme: dark){{
  :root:not([data-theme="light"]){{
    --bg:#080c26; --surface:#10173f; --ink:#e8ecff; --muted:#aab2d6; --line:#252d63;
    --chip:#1a2255; --chip-on:#6cc5a1; --chip-on-ink:#08122b; --mark:#133a35;
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
.brand span{{color:var(--mint-d)}}
nav{{display:flex;gap:4px;margin-left:auto;overflow-x:auto;scrollbar-width:none}}
nav a{{text-decoration:none;font-size:14px;color:var(--muted);padding:6px 10px;border-radius:8px;white-space:nowrap}}
nav a:hover,nav a.on{{background:var(--chip);color:var(--ink)}}
.tools{{display:flex;gap:6px}}
.btn{{font:inherit;font-size:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:10px;padding:6px 12px;cursor:pointer}}
.btn:hover{{border-color:var(--mint-d)}}
.btn:focus-visible,.chip:focus-visible,summary:focus-visible,.path a:focus-visible,input:focus-visible{{outline:3px solid var(--mint);outline-offset:2px}}
/* hero */
.hero{{background:radial-gradient(1200px 400px at 85% -10%,rgba(108,197,161,.35),transparent 60%),linear-gradient(135deg,var(--navy),var(--navy-2));color:#fff;padding:56px 0 40px}}
.hero h1{{margin:0;font-size:clamp(32px,5vw,52px);line-height:1.1;letter-spacing:-.5px}}
.hero .hero-role{{margin:12px 0 4px;font-size:clamp(17px,2.2vw,22px);font-weight:600;color:var(--mint);max-width:30ch}}
.hero .sub{{margin:0;color:#cdd3f5;font-size:15px}}
.badges{{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}}
.badges span{{border:1px solid rgba(255,255,255,.28);padding:3px 12px;border-radius:99px;font-size:13px;color:#e9ecff}}
.stats{{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:30px}}
.stat{{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:12px;padding:14px 14px 12px}}
.stat b{{display:block;font-size:26px;line-height:1.1;color:#fff}}
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
section>.wrap>h2:before{{content:"";width:8px;height:22px;border-radius:3px;background:var(--mint)}}
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
  nav{{display:none}} .hero{{padding:40px 0 34px}} .stat:last-child{{grid-column:span 2}}
}}
@media (prefers-reduced-motion:reduce){{html{{scroll-behavior:auto}} .role summary:after{{transition:none}}}}
@media print{{
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
  <div class="brand">N. B. <span>Nayak</span></div>
  <nav aria-label="Sections">
    <a href="#summary">Summary</a><a href="#competencies">Focus areas</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a>
  </nav>
  <div class="tools">
    <button class="btn" id="theme" type="button" aria-label="Toggle dark mode">Theme</button>
    <button class="btn" id="print" type="button">Save as PDF</button>
  </div>
</div></header>

<div class="hero"><div class="wrap">
  <h1>Dr. Niladri Bihari Nayak</h1>
  <p class="hero-role">{html.escape(TITLE)}</p>
  <p class="sub">South Gurugram, India · SuccessLabs Academy — <em>Architecting Experiences for a Better World</em></p>
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
    ['summary','competencies','experience','credentials'].forEach(function(id){{var s=document.getElementById(id); if(s)io.observe(s);}});
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
