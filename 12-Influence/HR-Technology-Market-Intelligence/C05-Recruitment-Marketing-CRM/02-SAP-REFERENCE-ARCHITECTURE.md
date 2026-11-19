# C05 SAP-first Reference Architecture

## Two solution paths
**A. SAP SuccessFactors Recruiting Candidate Experience:** Career Site Builder (CSB) → data capture forms → candidate profiles/talent pools → CRM email campaigns → Advanced Analytics → Recruiting ATS → onboarding/Employee Central.
**B. SmartRecruiters for SAP SuccessFactors:** Branded career experience → consented leads/talent communities → CRM campaigns and SMS/WhatsApp/email where supported → SmartRecruiters ATS → SAP SuccessFactors HCM integration.
Do not presume identical features, shared databases, a one-click migration or entitlement equivalence.

## Logical architecture
Paid/organic/referral/event channels → branded landing/career pages → privacy notice and consent → prospect identity and duplicate controls → segmentation/talent pools → campaign orchestration → response/engagement analytics → recruiter-reviewed conversion to ATS application → interview/offer (C04/C06) → hire → source-to-hire reporting.

## Capability and controls
| Layer | SAP-first reference | Decisions/evidence |
|---|---|---|
| Employer brand | CSB or SmartRecruiters career experience | Global/local sites, languages, accessibility, SEO |
| Lead capture | CSB data capture or SmartRecruiters CRM forms | Notice, purpose, consent, double opt-in where required |
| Identity | Candidate profile, ATS/CRM sync | Duplicate/merge, source provenance, deletion |
| Segmentation | Talent pools, tags, job families, skills | Explainable criteria, consent purpose |
| Campaigns | CRM bulk email or supported multichannel nurture | Templates, scheduling, unsubscribe, frequency caps |
| Personalization | Rules and supported AI | No sensitive/protected attribute targeting |
| Analytics | Recruiting Advanced Analytics / SmartRecruiters analytics | UTM governance, source attribution, funnel reconciliation |
| ATS handoff | Recruiting ATS or SmartRecruiters ATS | Candidate ID, consent lineage, stage and status |
| HR master | Employee Central on hire | Data minimization, future hire, duplicate prevention |
| Integration | Supported APIs/integration services | Retry, idempotency, latency, audit |
| Governance | Role permissions, privacy, retention, audit | Local law, access controls, vendor subprocessors |

## Key architecture decisions
ADR01 SAP legacy vs SmartRecruiters path; ADR02 prospect/ATS identity ownership; ADR03 consent and lawful basis; ADR04 localization and retention; ADR05 UTM/source attribution; ADR06 talent pool lifecycle; ADR07 channel/vendor contracts; ADR08 AI and fairness controls; ADR09 campaign throttling; ADR10 data migration and rollback; ADR11 reporting definitions; ADR12 operational ownership.

## Reference experiments
1. University event lead opts into engineering talent community, receives relevant campaign, later applies.
2. Silver-medalist candidate is re-engaged only within permitted consent/retention.
3. Candidate opts out after first email; all future channels suppress outreach.
4. Prospect converts to employee; candidate and EC identity reconcile without duplicate.
5. Candidate asks for deletion; legal retention exceptions are documented and enforced.

## Integration acceptance
Document object schema, identity key, source system, payload owner, field mapping, consent timestamp, campaign/source ID, error handling, replay, monitoring, reconciliation and audit.

## Privacy/AI risks
Avoid unlawful scraping, opaque candidate ranking, discriminatory lookalike audiences, unconsented SMS/WhatsApp, misleading attribution, excessive retention and automatic hiring decisions.
