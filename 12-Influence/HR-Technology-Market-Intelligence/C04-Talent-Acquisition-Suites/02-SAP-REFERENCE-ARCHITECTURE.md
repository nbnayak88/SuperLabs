# C04 SAP Reference Architecture

## Two SAP deployment paths
**Path A:** SAP SuccessFactors Recruiting + Recruiting Marketing where licensed + SAP SuccessFactors Onboarding + SAP Employee Central.
**Path B:** SmartRecruiters for SAP SuccessFactors + integration to SAP SuccessFactors HCM/Employee Central and onboarding as contracted.
Validate coexistence, supported migration, tenant architecture, API/data ownership, subscription and roadmap **before** committing to a path.

## Logical value stream
Workforce demand / position → approved requisition → career site and campaigns → application and consent → screening and human review → structured interview → approved offer → onboarding → EC employee creation → analytics and retention.

## Architecture matrix
| Layer | SAP reference / integration | Decision |
|---|---|---|
| Workforce planning | EC positions, job classification, organization | Requisition source and headcount controls |
| Requisition | Recruiting / SmartRecruiters path | Templates, approval, budget, country |
| Attraction | Career site / Recruiting Marketing / CRM | Consent, tracking, employer brand |
| ATS | Application and status workflow | Duplicate matching, audit, candidate communications |
| Interviews | Interview scheduling, interviewer permissions | Calendar integration, time zones, accessibility |
| Assessment | Native features or validated partners | Bias, consent, data flow and evidence |
| AI assistance | Supported SAP Business AI features and entitlements | Human oversight, audit, no autonomous rejection |
| Offer | Offer approval, documents and e-signature integration | Pay policy, legal text, retention |
| Handoff | Onboarding and Employee Central | Identity match, future date, no duplicate employee |
| Integration | Supported APIs / SAP Integration Suite if justified | Contract, retry, idempotency, monitoring |
| Security | Roles, field permissions, SSO, privacy | Recruiter vs manager vs interviewer access |
| Analytics | Recruiting KPIs and approved enterprise analytics | Funnel definitions, row-level controls |

## SAP-specific configuration proof points
Requisition templates; application templates; candidate profiles; job requisition permissions; applicant status pipeline; interview assessment permission; scheduling prerequisites; offer approvals; EC integration; country-specific privacy and retention.

SAP documentation:
- https://help.sap.com/docs/SAP_SUCCESSFACTORS_RECRUITING/8477193265ea4172a1dda118505ca631/ec14e07b4f5b454fba59825426d7400f.html
- https://help.sap.com/docs/successfactors-recruiting/setting-up-and-maintaining-sap-successfactors-recruiting/premium-ai-features-for-recruiting
- https://learning.sap.com/courses/sap-successfactors-recruiting-recruiter-experience-academy/using-ai-in-sap-successfactors-recruiting_fe692003-a8d0-4160-81fa-687a6a82b3a8

## AI guardrails
Explicit opt-in where legally required; approved job-related criteria; no protected-attribute inference; human validation of generated questions; documented candidate accommodation; logging; bias tests; explainable recommendations; recruiter override; candidate appeal/escalation where applicable.

## Key architecture decision records
A01 SAP recruiting path | A02 candidate and person identity | A03 consent and retention | A04 interview/assessment ecosystem | A05 AI governance | A06 integration pattern | A07 global/local requisition templates | A08 analytics definitions | A09 legacy migration | A10 disaster recovery and operational ownership.
