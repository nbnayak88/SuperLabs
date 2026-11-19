# C11 — SAP-first Solution Architecture

## Logical flow
Employee Central identity and role → succession/development gap → Career Development Plan → Learning pathway → optional coaching platform enrollment → coach matching → confidential coaching sessions → participant-owned action plan → approved nonconfidential progress signals → aggregate learning/leadership analytics.

## Architecture layers
| Layer | SAP reference | Control |
|---|---|---|
| Worker identity | Employee Central | Correct person/employment ID |
| Leadership development | Succession & Development / Career Development Planning | Development goals and competency gaps |
| Learning | SuccessFactors Learning | Curriculum, course, completion and access |
| Coaching delivery | Specialist partner where contracted | Coach credential, match, sessions, consent |
| Assessment | Validated 360/leadership assessment vendor | Psychometric quality and participant rights |
| AI support | Supported SAP/partner AI features | Human review and safe escalation |
| Integration | Approved APIs / SAP Integration Suite if justified | Minimal fields, monitoring and replay |
| Analytics | Authorized SAP/partner aggregate reporting | No private session notes or transcripts |
| Security | SSO, role permissions, separate coach access | Purpose limitation, confidentiality and retention |

## Confidentiality architecture
**Employer-accessible:** program enrollment, aggregate participation, approved completion milestones, voluntarily shared development actions.
**Coach/participant restricted:** session notes, personal disclosures, recordings, private reflections, individual assessments subject to consent and contractual rules.
**Exceptions:** define legally required disclosure, imminent safety concerns and jurisdiction-specific duties in policy; do not promise absolute secrecy.

## Integration contract
Employee ID, program ID, consent version, enrollment status, coach assignment status, permitted milestone, completion timestamp and integration event ID. Never sync private session transcript or unapproved sensitive disclosures into Employee Central or analytics.

## Architecture decisions
ADR01 SAP native vs specialist coaching; ADR02 coach qualification; ADR03 confidentiality boundary; ADR04 assessments and validity; ADR05 goal ownership; ADR06 success metrics; ADR07 AI assistance; ADR08 localization; ADR09 integration and residency; ADR10 five-year commercial model.

## AI governance
AI may assist with scheduling, learning recommendations and participant-reviewed coaching prompts. Prohibit unconsented analysis of private sessions, sensitive trait inference, automatic promotion recommendations or replacement of professional mental-health support.
