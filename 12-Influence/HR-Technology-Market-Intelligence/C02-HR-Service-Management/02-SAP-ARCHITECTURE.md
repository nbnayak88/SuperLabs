# C02 — SAP Reference Architecture and HR Service Operating Model

## Logical architecture
Employee / manager → Work Zone (optional unified entry point), SuccessFactors HR support or approved Teams/email channel → knowledge search/Joule (where entitled) → SAP SuccessFactors Enterprise Service Management ticket and routing → HR agent desktop → governed Employee Central employee context → resolution and employee notification → operational analytics and service improvement.

SAP Build Process Automation and SAP Integration Suite are optional extensibility layers where justified; they are not presumed mandatory for every service.

## Service taxonomy
L0 Employee Services → L1 Personal Data / Employment / Pay & Benefits / Time & Leave / Talent & Learning / Policy & Letters / Mobility / Employee Relations → L2 request type → L3 country and legal-entity variants.

Define separate restricted handling for medical, grievance, harassment, investigations, immigration and disciplinary cases. Sensitive case categories may require a specialist solution or independent repository.

## Architecture layers
| Layer | SAP-first capability | Decision and control |
|---|---|---|
| Employee entry | SuccessFactors self-service; optional Work Zone | One front door, accessible channels |
| Knowledge | Governed HR knowledge and search | Versioning, owner, country applicability |
| AI | Joule and supported ESM AI features | Human-led, citations, safe fallback |
| Case engine | SAP SuccessFactors ESM | Category, priority, assignment, state, SLA |
| Agent operations | ESM agent desktop | Queue ownership, handoff, notes, templates |
| Employee context | SuccessFactors Employee Central | Minimal necessary data, effective dates |
| Workflow | ESM workflow; optional SAP Build | Approval separation, traceability |
| Integration | Supported interfaces and middleware | Retry, idempotency, monitoring |
| Reporting | ESM analytics/reporting | SLA, backlog, containment, access |
| Security | SSO, permissions, audit, retention | Sensitive-case segmentation |

## Example case lifecycle
Created → Classified → Assigned → In Progress → Pending Employee/Third Party → Resolved → Confirmed/Closed → Reopened (if applicable). Define SLA clocks and pause rules explicitly; do not assume these statuses are out-of-box labels.

## Design decisions
1. Case system of record and employee data source of truth.
2. Data minimization and sensitive-case segregation.
3. Service catalog ownership and country localization.
4. Knowledge article approval and retirement.
5. Channel routing, deduplication and case correlation.
6. SLA calendars, holidays, priority and escalation.
7. AI permissions, prompt injection defense, human review and audit.
8. Data residency, retention, export and legal hold.
9. Migration from Employee Central Service Center if applicable.
10. Integration incident management and disaster recovery.

## Presales reference scenario
Synthetic global enterprise: 8,000 employees, 5 countries, 3 languages, 4 HR service tiers, 30 categories and 150 knowledge articles. These are **POC assumptions**, not customer facts or SAP product limits.
