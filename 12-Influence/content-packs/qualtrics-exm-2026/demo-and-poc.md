# EXM Presales Demo and POC Script

**Scenario:** SAP SuccessFactors Employee Central drives employee lifecycle listening for a fictional multi-country organization. Use only synthetic employees and feedback.  
**Audience:** CHRO, EX program lead, HRBP, line manager, EC/Integration architect, data privacy and procurement.  
**Duration:** 60-minute vendor demonstration plus optional hands-on POC.

## Script

| Minute | Step | Vendor must demonstrate | Acceptance evidence |
|---|---|---|---|
| 0–5 | Value story | Objectives, KPIs, survey governance | Business-outcome mapping |
| 5–15 | EC-triggered survey | Hire/transfer lifecycle event, eligibility, invitation, opt-out | Traced mock event |
| 15–25 | Survey experience | Mobile, multilingual, accessibility and anonymity messaging | Usable survey flow |
| 25–35 | Analytics | Trends, text themes, response distributions, subgroup suppression | Screenshots and privacy tests |
| 35–45 | Action planning | Manager recommendations, owner, due date, follow-up pulse | Closed-loop audit |
| 45–52 | Architecture | API/connector, data residency, SSO, errors, monitoring | Architecture/contract evidence |
| 52–60 | Commercial and Q&A | Licensing, implementation approach, TCO, export | Written responses |

## POC test cases

- **POC-01 New hire:** effective-dated employee record becomes eligible at configured event; no premature invite.
- **POC-02 Transfer:** manager and organization changes appear correctly without exposing prior team data.
- **POC-03 Low sample:** group below configured anonymity threshold has suppressed insight and free text.
- **POC-04 Duplicate:** repeat event does not send unauthorized duplicate invitation.
- **POC-05 Multilingual:** surveyed employee uses chosen locale; human reviewers assess translation quality.
- **POC-06 Sensitive text:** identifiable details are hidden or excluded per governed policy.
- **POC-07 Manager action:** assigned action is logged and reassessed against subsequent pulse.
- **POC-08 Incident:** API failure is detectable, retryable and auditable.
- **POC-09 Access:** manager sees only authorized aggregates; HRBP access is documented.
- **POC-10 Export:** results/actions can be exported according to agreed retention and deletion policy.

## Success conditions

- All mandatory privacy and access-control tests pass.
- Lifecycle event lineage can be demonstrated end to end.
- No unsupported connector claim is accepted without documentation or working integration.
- Vendors receive the same synthetic dataset, scripted questions and scoring rubric.
- Commercial claims are separated from technical scores.

## Presales role-play personas

- **EX Director:** prioritizes employee trust, response rates and demonstrable action.
- **CHRO:** focuses on retention, measurable outcomes and manager accountability.
- **EC Architect:** challenges delta replication, hierarchy, effective dates and security.
- **Privacy Officer:** probes reidentification, residency, AI processing and consent.
- **Procurement Lead:** compares five-year TCO, delivery risk and exit clauses.

## Feedback rubric

Each role rates business relevance, architectural credibility, evidence quality, experience quality and handling of objections on a 1–5 scale, with written observations and one next experiment.
