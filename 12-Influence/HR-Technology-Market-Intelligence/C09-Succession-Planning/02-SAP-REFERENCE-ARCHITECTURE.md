# C09 — SAP-first Solution Architecture

## Logical flow
Employee Central positions, job roles and incumbent data → critical-position identification → Talent Search / talent pools → nomination with readiness → talent review and matrix calibration → approved succession plan → development/learning actions → bench-strength analytics → periodic refresh.

## SAP functional building blocks
| Layer | SAP component | Design decision |
|---|---|---|
| Workforce source | Employee Central | Position vs person model, effective dates |
| Role requirements | Job Profile Builder, skills/competencies, Growth Portfolio | Role mapping and skill evidence |
| Succession engine | Succession Org Chart, Position Tile, Lineage Chart | Position vs role/person nomination |
| Talent discovery | Talent Search and MDF Talent Pools | Nomination eligibility and pool ownership |
| Assessment | Matrix Grid Reports, Talent Cards, calibration/presentations | Performance/potential definitions and fairness |
| Readiness | Nomination readiness, emergency cover, rank | Governance and reviewer accountability |
| Development | Career Development Planning, Learning | Skill gap to development intervention |
| External pipeline | Recruiting integration where enabled | Candidate privacy and matching |
| AI | AI-assisted successor recommendations where licensed | AI units, permissions, explainability, human approval |
| Reporting | Story reports / supported analytics | Bench strength, risk and data access |
| Security | Role-Based Permissions and target populations | Sensitive succession flags, confidential notes |

## Important configuration prerequisites
MDF position-based nominations and talent pools require relevant Metadata Framework setup. Suggested successors and AI-assisted successor recommendations have feature, permission, Growth Portfolio/Career Worksheet and AI licensing prerequisites that differ by tenant and release; validate against current SAP documentation.

## Data model
Position ID | incumbent person ID | role/job code | criticality | nominee person ID | nomination method | readiness | emergency cover | risk of loss | impact of loss | competency gaps | approver | timestamp | source version.

## Architecture decision records
ADR01 position vs role/person nominations; ADR02 EC position master; ADR03 critical role policy; ADR04 readiness scale; ADR05 confidential access; ADR06 calibration and fairness; ADR07 AI-assisted recommendations; ADR08 development integration; ADR09 external candidates; ADR10 retention and audit.

## Security and ethical controls
No unapproved disclosure of potential, succession nomination, performance or loss-risk flags. Validate target-population RBP. Human talent committee confirms nominations and readiness. Monitor representational disparities without using protected attributes as improper selection criteria.

## Source
https://learning.sap.com/courses/sap-successfactors-succession-management-administration/using-the-succession-org-chart
