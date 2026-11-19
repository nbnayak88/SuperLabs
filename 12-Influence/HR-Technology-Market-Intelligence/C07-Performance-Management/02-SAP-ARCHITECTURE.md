# C07 SAP Performance & Goals — Reference Architecture

## Logical value stream
Enterprise strategy → department priorities → approved employee goals → ongoing check-ins and feedback → employee self-review → manager review → calibration → acknowledgment and appeal → development planning → approved compensation input → people analytics.

## Capability layers
| Layer | SAP reference | Design control |
|---|---|---|
| Employee/organization | SuccessFactors Employee Central | Manager, job, effective date, legal entity |
| Goal planning | Performance & Goals | Goal library, alignment, weights, permissions |
| Continuous dialogue | Performance & Goals continuous performance capabilities | Check-ins, feedback, evidence ownership |
| Review | Performance forms and competencies | Templates, routing, rating scales |
| Calibration | SAP SuccessFactors Calibration where licensed | Population, access, rating rationale |
| Development | Succession & Development / Learning | Development plans and learning links |
| Rewards | Compensation / Variable Pay | Approved results, no premature transfer |
| Reporting | People Analytics and supported reporting | KPI definitions and row-level access |
| AI assistance | Available SAP Business AI functions | Human review, explainability, entitlement |
| Security | Role-Based Permissions and audit | Manager/HR visibility, segregation |
| Integration | Supported APIs/integration content | Idempotency, reconciliation, monitoring |

## Configuration proof points
Goal plan template; goal weights; form templates; rating scale; competencies; route map; permissions; calibration sessions; continuous performance activities; compensation mapping; effective-dated manager changes; form launch and completion; reporting.

## Design decisions
ADR01 annual vs continuous operating model; ADR02 goal ownership; ADR03 competency framework; ADR04 rating scale; ADR05 calibration governance; ADR06 review route maps; ADR07 employee acknowledgment and appeal; ADR08 manager transitions; ADR09 compensation linkage; ADR10 AI use and fairness; ADR11 data retention; ADR12 change and release controls.

## Sensitive risk scenarios
Manager transfer mid-cycle; employee leave; promotion and role change; rating inflation; inconsistent calibration; manager retaliation; protected-attribute inference; AI-generated unsupported feedback; unauthorized review access; compensation result mismatch.

## Data and integration contracts
Employee/person ID, employment ID, cycle ID, form ID, goal ID, manager effective date, rating/competency scale, status, approval timestamp, source version, integration event ID and audit record. Apply least privilege, encryption, retry and reconciliation.

## Human-led AI rule
AI can draft feedback or summarize documented evidence when supported and permitted; the employee/manager must validate factual accuracy. Never permit opaque AI-only ratings, promotion or termination decisions.
