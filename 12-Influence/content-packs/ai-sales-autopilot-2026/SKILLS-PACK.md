# AI Sales Skills Pack — Gojiberry-style Autonomous Prospecting

Built for: SuccessLabs Academy / VELTRUM Systems (Dr. Niladri Bihari Nayak)
Reference product: https://gojiberry.ai/ (capabilities taken from its public homepage)
Note: the LinkedIn short link (lnkd.in/p/g2uyQ7GH) could not be opened (robots-blocked), so this pack is based on the Gojiberry site only.

---

## 1. What Gojiberry does (source capabilities)

| # | Capability | Gojiberry description |
|---|---|---|
| C1 | Website onboarding | Enter your site; agent learns offer, buyers, pitch |
| C2 | Buying/social signals (15+) | Competitor engagement, follows your company, activity in your space |
| C3 | Lookalike audiences | Prospect lists modeled on best customers |
| C4 | Warm lead sourcing | Leads auto-found from signals + lookalikes |
| C5 | Website visitor identification | Identify who visits your site |
| C6 | ICP filtering | Screen every prospect against ICP |
| C7 | Lead scoring | Rank by likelihood to convert, contact highest intent first |
| C8 | Email + phone enrichment | Waterfall across 15+ data providers |
| C9 | Multichannel campaigns | Email + LinkedIn/social, coordinated |
| C10 | AI personalization | Message based on company, activity, signal, timing |
| C11 | Automatic follow-ups | No manual sequence building |
| C12 | Autonomy modes | Fully autonomous / approval-first / Copilot |
| C13 | Reply drafting | Pre-written replies, one-click send |
| C14 | Unified inbox | All channels in one place |
| C15 | Conversion learning | Learns which messages/prospects convert |
| C16 | ICP refinement | Targeting updated over time |
| C17 | Industry benchmarking | Compare campaigns to top performers |
| C18 | CRM / MCP / API integrations | HubSpot, Pipedrive, Attio, Claude MCP |

---

## 2. Coverage map — what you already have vs what to build

### 2a. Already installed (use these; do not rebuild)

| Capability | Existing skill | Fit |
|---|---|---|
| C6, C7 ICP filter + scoring | `sales:lead-triage`, `sales:account-tiering` | Good for scoring a list you supply |
| C9, C10, C11 outreach + sequence | `sales:draft-outreach`, `marketing:email-sequence`, `brand-voice:enforce-voice` | Good for drafting; no autonomous sending |
| C13, C14 replies + inbox | `sales:inbox-sweep` | Customer email only, not prospect replies across channels |
| C2 (partial) signals on existing deals | `sales:deal-signals` | Watches your own book, not new prospects |
| C15 (partial) learning | `sales:win-loss-review`, `sales:customer-voice` | Needs closed-deal data |
| C18 CRM | `sales:crm-hygiene-check`, `sales:update-opportunity`, `sales:log-activity` | Needs a connected CRM |
| Research | `sales:account-research`, `sales:competitive-intelligence` | Good |
| Meetings | `sales:schedule-meeting`, `sales:call-prep`, `sales:call-summary` | Good |
| Objections / deals | `sales:handle-objection`, `sales:deal-review`, `sales:close-plan`, `sales:forecast`, `sales:pipeline-review` | Good |
| Routing | `sales:route-lead` | Good |
| Social posting | `postiz:postiz` | Content distribution |
| Your own | `b2b-training-lead-response`, `ccc-ilh-nx-learning-township` | Corporate training replies; course creation |
| Automation | Pabbly connector (already used for Bright Friday sync) | Good as the "runner" for the skills below |

### 2b. Gaps — new skills specified in this pack

| ID | New skill | Gojiberry capability | Section |
|---|---|---|---|
| S1 | `sales-icp-from-website` | C1, C6, C16 | 3.1 |
| S2 | `prospect-signal-scout` | C2, C4 | 3.2 |
| S3 | `lookalike-audience-builder` | C3 | 3.3 |
| S4 | `visitor-identification-playbook` | C5 | 3.4 |
| S5 | `contact-enrichment-waterfall` | C8 | 3.5 |
| S6 | `intent-lead-scorer` | C7 | 3.6 |
| S7 | `multichannel-sequence-builder` | C9, C10, C11 | 3.7 |
| S8 | `prospect-reply-copilot` | C13, C14 | 3.8 |
| S9 | `autonomy-guardrails` | C12 | 3.9 |
| S10 | `conversion-learning-loop` | C15, C16 | 3.10 |
| S11 | `sales-benchmark-report` | C17 | 3.11 |
| S12 | `sales-autopilot-orchestrator` | All | 3.12 |

Each spec below is written as a ready-to-save SKILL.md body.

---

## 3. Skill specifications

### 3.1 `sales-icp-from-website` (S1)
**Description:** Read a website or product page and produce an ICP, buyer personas, pitch angles and disqualifiers. Use when starting a new offer or refreshing targeting.

**Inputs:** URL(s) of the offer page, plus any past customer list.

**Steps**
1. Fetch the page and extract: offer, outcome promised, price signals, proof (testimonials, logos), who it is written for.
2. Draft the ICP as a table: industry/GICS sector, company size, geography, role/title, seniority, tech stack (e.g. SAP SuccessFactors, S/4HANA), trigger events.
3. Build 2-3 personas: pain, desired outcome, objection, preferred channel.
4. Write 3 pitch angles (pain-led, outcome-led, proof-led), each in one line.
5. List disqualifiers (who not to contact).
6. Output as a one-page ICP brief plus a JSON block other skills can read.

**Output:** `icp-brief.md` and `icp.json`.

**Your offers to run it on:** corporate SAP/EA training (B2B), Silver/Gold/Diamond membership (individual SAP professionals), Consultant-to-Architect 90-day roadmap (lead magnet), architecture consulting.

---

### 3.2 `prospect-signal-scout` (S2)
**Description:** Find people and companies showing buying intent, from public signals, and rank them. Use daily or on demand.

**Signal catalogue (15 to track)**
1. Engaged with a competitor's post (like, comment, share)
2. Engaged with your own posts
3. Follows your company or founder page
4. Posted about a problem you solve (keyword watch)
5. Changed job into a target role (e.g. new Head of HR Tech, new EA lead)
6. Company hiring for roles in your space (SAP consultants, payroll leads)
7. Company funding, acquisition or expansion news
8. New SAP/ERP programme announced (go-live, RFP, vendor selection)
9. Attended a webinar or event in your niche
10. Joined or posted in relevant communities
11. Visited your pricing or course page (see S4)
12. Opened or clicked an email, replied to a newsletter
13. Registered for a free course or lead magnet (Bright Friday, roadmap)
14. Leadership change at a target account
15. Competitor review, complaint or churn mention

**Steps**
1. Load `icp.json`. Pull signals from the sources available (web search, LinkedIn exports, Gmail, Google Sheets, CRM, Pabbly feeds).
2. For each hit, record: person, company, signal type, date, source link.
3. Dedupe against CRM and past outreach.
4. Hand the list to `intent-lead-scorer`.

**Output:** `signals-YYYY-MM-DD.csv`.

**Constraint:** use only public or first-party data. Do not scrape sites whose terms forbid it.

---

### 3.3 `lookalike-audience-builder` (S3)
**Description:** Model a list of new prospects on your best existing customers.

**Steps**
1. Take your 10-50 best customers or best-converting leads.
2. Extract the shared traits: role, sector, company size, tech stack, source channel, time-to-close.
3. Write 3-5 search definitions (job-title patterns, company filters, keyword sets).
4. Run them through available sources and return candidates with a similarity score (0-100) and the matching traits.
5. Exclude existing customers and anyone already contacted.

**Output:** `lookalikes.csv` plus a short note on which trait mix produced the best matches.

---

### 3.4 `visitor-identification-playbook` (S4)
**Description:** Set up and use website-visitor identification. Mostly a configuration and process skill because identification needs a third-party tracker.

**Steps**
1. Recommend the tracking layer (reverse-IP company tools, UTM + form capture, email-click tracking, LMS login events).
2. Define high-intent pages: pricing, membership, corporate training, case studies, booking page.
3. Write the rule: a visit to two or more high-intent pages in seven days creates a hot signal.
4. Route hot visitors to `contact-enrichment-waterfall` then `multichannel-sequence-builder`.
5. Add a consent and privacy note (cookie banner, DPDP/GDPR basis).

**Output:** tracking plan, rule set, Pabbly workflow outline.

---

### 3.5 `contact-enrichment-waterfall` (S5)
**Description:** Find a verified business email and phone for a prospect by trying several sources in order.

**Waterfall order (stop at first verified hit)**
1. CRM / existing records
2. Gmail and calendar history
3. Company website team and contact pages
4. Public profiles and press mentions
5. Pattern guess (first.last@domain) with verification
6. Paid provider APIs, if the user connects any

**Rules**
- Mark each field with source and confidence (verified / probable / guess).
- Never send to a "guess" without verification.
- Respect opt-outs and do-not-contact lists.

**Output:** enriched row with `email`, `phone`, `source`, `confidence`.

---

### 3.6 `intent-lead-scorer` (S6)
**Description:** Score and rank prospects by fit and intent, then say who to contact first.

**Model (100 points)**
- Fit (40): sector, size, role, tech stack, geography
- Intent (40): signal weight x recency (signals in last 7 days count double)
- Engagement (20): replies, opens, clicks, page visits

**Tiers:** A (80+) contact today, B (60-79) this week, C (40-59) nurture, D (<40) drop.

**Output:** ranked table with score breakdown and one-line reason, plus recommended channel and first message angle.

**Note:** `sales:lead-triage` can be used for the fit half; this skill adds the signal-recency layer.

---

### 3.7 `multichannel-sequence-builder` (S7)
**Description:** Build and personalise a coordinated email, LinkedIn and WhatsApp sequence with automatic follow-ups.

**Default 5-touch, 14-day cadence**
| Day | Channel | Purpose |
|---|---|---|
| 1 | LinkedIn connect note | Light, signal-referenced, no pitch |
| 2 | Email | Value first, one clear ask |
| 5 | LinkedIn message | Share a useful asset (checklist, roadmap) |
| 8 | Email | Proof point or case study |
| 14 | Email or WhatsApp (opted-in only) | Soft close, easy no |

**Personalisation inputs:** signal, company news, role, shared context.
**Rules:** under 90 words per email, one ask, no fake familiarity, apply `brand-voice:enforce-voice`.
**Stop conditions:** any reply, unsubscribe, or bounce.

**Output:** the sequence as drafts for review. Create email drafts through Gmail; do not send.

---

### 3.8 `prospect-reply-copilot` (S8)
**Description:** Triage replies from prospects across channels and pre-write the next response.

**Steps**
1. Classify each reply: interested, question, objection, not now, wrong person, unsubscribe.
2. For interested: draft reply proposing times (hand to `sales:schedule-meeting`).
3. For objection: call `sales:handle-objection`.
4. For not now: set a follow-up date and nurture tag.
5. For unsubscribe: mark do-not-contact immediately.

**Output:** a reply queue with draft, intent label and suggested next action.

---

### 3.9 `autonomy-guardrails` (S9)
**Description:** Control how much the sales agent may do without approval.

| Mode | Behaviour |
|---|---|
| Copilot | Drafts everything; user sends all |
| Approve-first | Agent queues messages; user approves in batch |
| Autonomous (limited) | Agent may send touch 1-2 to Tier A/B contacts within daily caps |

**Defaults:** start in Approve-first. Daily send cap, quiet hours (IST business hours), per-domain caps, never contact existing customers or do-not-contact list, always log to CRM, kill switch phrase "pause outreach".

**Output:** a policy block every other skill reads before sending.

---

### 3.10 `conversion-learning-loop` (S10)
**Description:** Learn from outcomes and update the ICP, scoring weights and message angles.

**Steps**
1. Weekly, collect: sent, opened, replied, booked, won, by segment, signal type, channel, message angle.
2. Compute reply rate and booking rate per cut.
3. Flag the top 3 and bottom 3 performers in each cut.
4. Propose changes: reweight signals, drop weak segments, retire weak angles, add new test variants.
5. Write the changes to `icp.json` and scoring weights only after the user approves.

**Output:** weekly learning memo with one A/B test to run next.

---

### 3.11 `sales-benchmark-report` (S11)
**Description:** Compare your campaign metrics with reasonable industry ranges.

**Steps**
1. Take your metrics (reply rate, positive reply rate, meeting rate, show rate).
2. Look up current published benchmarks for the sector via web search and cite them.
3. Show gap per metric and the most likely cause.

**Caveat:** benchmarks vary widely by source and audience. State sources and treat them as ranges, not targets.

---

### 3.12 `sales-autopilot-orchestrator` (S12)
**Description:** Run the whole prospecting loop end to end, daily or on demand.

**Pipeline**
```
sales-icp-from-website  (one time, refresh monthly)
        |
prospect-signal-scout + lookalike-audience-builder + visitor-identification-playbook
        |
contact-enrichment-waterfall
        |
intent-lead-scorer  -> Tier A/B/C/D
        |
autonomy-guardrails (check mode and caps)
        |
multichannel-sequence-builder  -> drafts / queue
        |
prospect-reply-copilot  -> sales:schedule-meeting -> sales:call-prep
        |
sales:log-activity / sales:update-opportunity (CRM)
        |
conversion-learning-loop (weekly) -> sales-benchmark-report (monthly)
```

**Daily run output:** "Today: N new signals, N Tier A leads, N drafts waiting for approval, N replies to answer."

**Scheduling:** run through a scheduled task in the morning (before 9 AM IST) and an end-of-day close using `sales:end-of-day`.

---

## 4. Suggested build order

1. S1 `sales-icp-from-website`: everything depends on it
2. S6 `intent-lead-scorer` and S9 `autonomy-guardrails`
3. S2 `prospect-signal-scout` and S5 `contact-enrichment-waterfall`
4. S7 `multichannel-sequence-builder` and S8 `prospect-reply-copilot`
5. S3, S4, S10, S11
6. S12 orchestrator last, once the parts work

## 5. Tools and connectors to wire in

| Need | Tool |
|---|---|
| Email drafts and reply reading | Gmail connector |
| Meetings | Google Calendar connector |
| Lead sheets and registrations | Google Sheets connector, Pabbly |
| Triggers, schedules, syncs | Pabbly workflows, scheduled tasks |
| CRM | Odoo (already in your Bright Friday sync), or HubSpot/Pipedrive/Attio if you adopt one |
| Social posting | Postiz |
| Research | Web search |

## 6. Compliance notes (read before automating outreach)

- LinkedIn's terms restrict automated connection and message tools; accounts can be restricted. Prefer manual send of AI-drafted messages or approved tools.
- India DPDP Act, GDPR (EU contacts) and CAN-SPAM require a lawful basis, a clear sender identity, and a working unsubscribe.
- WhatsApp outreach only to people who opted in.
- Keep an audit log of who was contacted, why, and from which signal.

## 7. Where Gojiberry still wins

This pack gives you the logic and drafts. Gojiberry also provides licensed data feeds, 15+ enrichment providers, and a hosted sending infrastructure with deliverability management. If you want those without building them, its Pro plan lists at $99/month ($59.40/month billed annually) and it supports Claude through MCP, so it can be used alongside these skills.
