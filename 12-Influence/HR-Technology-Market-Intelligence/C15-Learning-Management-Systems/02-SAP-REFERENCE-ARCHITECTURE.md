# C15 — SAP-first LMS Architecture

## Logical flow
Employee Central identity, position, country and job → learner provisioning → role-based learning assignment → catalog/course/curriculum → digital or instructor-led enrollment → assessment and completion → certification/renewal → learning transcript → compliance reporting and skills/development feedback.

## Reference components
| Layer | SAP-first reference | Decision |
|---|---|---|
| Workforce master | SAP SuccessFactors Employee Central | Effective-dated employee, manager, organization |
| Learning administration | SAP SuccessFactors Learning | Items, curricula, programs, assignment profiles |
| Delivery | Content player and virtual/ILT integration | SCORM, AICC and other standard support by release |
| Assessment | LMS assessments or approved specialist | Attempts, validity, proctoring |
| Certification | Learning curricula and retraining | Expiration, requalification and evidence |
| Skills | Talent Intelligence Hub / Growth Portfolio | Validated skills evidence vs course completion |
| Talent development | Succession & Development | Development goals and learning linkage |
| Analytics | Learning reporting / People Analytics where supported | Auditable transcripts and outcomes |
| Integration | Supported APIs, connectors / SAP Integration Suite | Monitoring, reconciliation, retries |
| Identity | SSO, role-based permissions | Learner/admin/manager and external-user boundaries |
| AI | Licensed SAP/partner assistive functions | Human review, provenance, content validation |

## Canonical data
Person ID | employment ID | user ID | course/item ID | revision | curriculum ID | assignment source | enrollment ID | completion date | score | certification expiry | evidence ID | source system | audit timestamp.

## Architecture decisions
ADR01 LMS system of record; ADR02 identity sync; ADR03 learning assignment rules; ADR04 content standards; ADR05 external learners; ADR06 transcript migration; ADR07 certification evidence; ADR08 skills mapping; ADR09 AI content governance; ADR10 data residency; ADR11 integrations; ADR12 exit.

## Failure and control cases
A terminated worker remains active; certification is incorrectly renewed; completion duplicates after retry; SCORM status differs from LMS transcript; a manager views unauthorized learners; AI invents a compliance rule; external users see employee data.

## Key distinction
LMS completion is evidence of learning activity, not automatic proof of workplace proficiency or behavior change. Skills and outcome claims need additional validation.
