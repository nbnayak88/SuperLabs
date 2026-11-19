# C10 — SAP-first Solution Architecture

## Logical value stream
Employee Central identity and job architecture → Talent Intelligence Hub skills ontology → employee Growth Portfolio and skills evidence → skill validation → opportunity catalog → explainable matching → employee interest/application → manager/recruiter approval → project, job or learning placement → skills refresh and mobility outcomes.

## Architecture matrix
| Layer | SAP reference | Design decisions |
|---|---|---|
| Employee identity | SuccessFactors Employee Central | Person/employment ID, manager, country |
| Skills foundation | Talent Intelligence Hub | Attributes, ontology, proficiency, governance |
| Employee profile | Growth Portfolio | Self-declared and inferred attributes, corrections |
| Opportunity catalog | Opportunity Marketplace | Jobs, projects, gigs, mentoring and learning as available |
| Career development | Career Development Planning | Career aspirations and pathways |
| Recruiting handoff | SuccessFactors Recruiting | Internal candidate application and status |
| Learning | SuccessFactors Learning | Learning recommendations and completions |
| Succession | Succession & Development | Confidential nominations separate from open marketplace |
| AI assistance | Supported SAP Business AI features | Entitlements, explainability, fairness, human approval |
| Analytics | Approved People Analytics / enterprise analytics | Internal fill, mobility, skill coverage |
| Integration | Supported APIs / SAP Integration Suite | Identity reconciliation, retry, monitoring |
| Security | Role-Based Permissions and privacy policy | Restricted skills, manager access, consent |

## Data contracts
Employee ID | employment ID | skill ID/version | proficiency | evidence source | confidence | validation status | opportunity ID/type | eligibility | application status | decision actor | audit event | timestamp.

## Critical architecture decisions
ADR01 skills taxonomy owner; ADR02 inference vs validated evidence; ADR03 employee correction; ADR04 marketplace scope; ADR05 approval and manager release; ADR06 fairness; ADR07 SAP vs specialist marketplace; ADR08 consent and retention; ADR09 analytics and KPI definitions; ADR10 migration and export.

## Risks and controls
Do not silently infer sensitive traits, assume inferred skills are certified, penalize employees for opting out, disclose succession nominations, auto-reject employees or conceal matching rationale. Provide alternate routes for employees with incomplete digital skill histories.

## Learning experiment
A maintenance engineer seeks a data-analytics gig. The marketplace proposes a match, highlights skill gaps and offers learning. The employee corrects an inaccurate inferred skill; manager approves a temporary assignment. Audit every transition.
