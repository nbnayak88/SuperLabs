# C05 — 20-Test POC and Selection

**Pilot:** 2–4 weeks, synthetic 1,000 leads, 4 talent communities, 3 countries, 2 languages, 6 campaigns, 2 ATS handoff flows. Illustrative test scope, not vendor capacity.

| ID | Scenario | Pass condition |
|---|---|---|
| P01 | Branded landing page | Correct locale, brand and responsive layout |
| P02 | Accessibility | Critical candidate tasks accessible |
| P03 | Lead capture | Correct required fields and consent |
| P04 | Source attribution | UTM/source retained through conversion |
| P05 | Talent pool segmentation | Explainable eligible audience |
| P06 | Duplicate lead merge | Provenance and consent preserved |
| P07 | Email nurture | Approved trigger and template |
| P08 | Conditional journey | Correct branching and timing |
| P09 | Multichannel engagement | Channel-specific opt-in enforced |
| P10 | Global unsubscribe | Suppression across all relevant journeys |
| P11 | Candidate preference update | Immediate permitted-use change |
| P12 | AI-assisted draft | Human approval and audit |
| P13 | Bias/privacy negative test | Protected data not used unlawfully |
| P14 | Event lead import | Source and consent reconciled |
| P15 | Referral lead | Correct referral attribution |
| P16 | Lead-to-ATS conversion | No duplicate; status synchronized |
| P17 | CRM-to-HCM lineage | Hire identity/source reconciled where in scope |
| P18 | API failure/replay | No silent loss, no duplicate |
| P19 | Funnel analytics | Independent count and ROI reconciliation |
| P20 | Retention/deletion/export | Country-specific lifecycle and audit |

## Proposed gates (agree with buyer)
100% mandatory consent/privacy/security cases pass; zero unapproved campaign sends; zero autonomous hiring decisions; 100% failed integration events observable; ≥95% noncritical journey steps completed without workaround; source-to-hire metrics reconcile within an agreed tolerance.

## Decision stages
G1 discovery and lawful-basis approval → G2 SAP path and target architecture → G3 vendor demos → G4 POC evidence and RFI scoring → G5 normalized five-year TCO → G6 executive recommendation.

## Decision record
Business problem | SAP path | Shortlist | Analyst evidence | Weighted RFI | POC results | Privacy risks | Integration complexity | Cost assumptions | Selected platform | Sign-off.

## Learning lab
Run three experiments: passive-candidate nurture; consent withdrawal; and source-to-hire attribution. Assign learners as recruitment marketer, candidate, privacy reviewer and SAP integration architect. Evaluate decisions from evidence, not screenshots alone.
