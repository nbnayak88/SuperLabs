# C04 100-Minute Role-Based Demonstration

## Personas
Hiring manager; recruiter; candidate; interviewer; talent acquisition leader; EC architect; privacy officer; integration lead; procurement.

## Demo sequence
| Minutes | Scene | Proof |
|---|---|---|
| 0–8 | Business context and SAP portfolio path | Named SKUs, architecture and boundaries |
| 8–18 | Position-linked requisition and approval | Budget and manager routing |
| 18–28 | Multilingual career site and application | Mobile/accessibility and consent |
| 28–38 | CRM sourcing and talent pool | Campaign, consent and attribution |
| 38–50 | Recruiter screening and shortlist | Explainable criteria, human override |
| 50–62 | Interview scheduling and structured evaluation | Calendar, interview scorecard |
| 62–72 | AI-assisted interviewer preparation | Approved questions, review and audit |
| 72–82 | Offer approval and generation | Pay policy and signature |
| 82–90 | Onboarding/Employee Central handoff | Future-dated hire, identity reconciliation |
| 90–96 | Security, analytics and failure recovery | Negative permissions and retry |
| 96–100 | Commercial and migration questions | Written licensing/transition assumptions |

## Required live challenge tests
1. Candidate applies to two requisitions; show duplicate identity behavior.
2. Interviewer cannot see confidential compensation or unrelated candidates.
3. AI proposes an inappropriate question; interviewer rejects and corrects it.
4. Requisition crosses legal entities and requires reapproval.
5. Offer accepted for future start; EC receives correct effective date.
6. Middleware fails once; event replays without duplicate employee.
7. Candidate requests data deletion; demonstrate lawful retention exceptions and audit.
8. Show precise difference between legacy SAP SuccessFactors Recruiting and SmartRecruiters for SAP SuccessFactors.

## Demo score
Business-process completion 30%; architecture and integration 25%; privacy/fairness 20%; user experience 15%; implementation evidence 10%.
