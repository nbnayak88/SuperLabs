# C12 — SAP-first Compensation Architecture

## Logical value stream
Employee Central job, grade, salary, manager and eligibility data → approved salary structure and market data → compensation cycle setup → budget allocation → merit and variable-pay recommendations → HR/finance validation → approvals → employee communication → approved HR/payroll update → analytics and audit.

## Layers
| Layer | SAP reference | Key control |
|---|---|---|
| Workforce master | Employee Central | Effective dates, FTE, legal entity, currency |
| Salary review | SuccessFactors Compensation | Templates, worksheets, guidelines, budgets |
| Incentive plan | SuccessFactors Variable Pay | Business goals, individual factors, eligibility |
| Performance input | Performance & Goals | Approved ratings, data lineage |
| Market pricing | Licensed survey/specialist source | Job matching, data aging and survey rights |
| Equity analytics | Approved compensation analytics | Cohort design, privacy and legal review |
| Approvals | Compensation planning workflows | Manager/HR/finance delegation and exceptions |
| HR/payroll output | Employee Central and applicable payroll | Effective dates, idempotent reconciliation |
| Reporting | Supported People Analytics/reporting | Restricted salary access |
| Integration | Supported APIs / SAP Integration Suite | Monitoring, retries and audit |
| AI | Available SAP/partner features | Human review; no opaque pay decisions |

## Canonical data
Person ID | employment ID | legal entity | country | currency | grade | range | current pay | effective date | FTE | plan ID | budget | recommended merit | bonus target | calculated award | approval status | payroll event ID | audit trail.

## Architecture decisions
ADR01 system of record; ADR02 merit vs variable pay ownership; ADR03 market data source and licensing; ADR04 multi-currency rules; ADR05 eligibility and proration; ADR06 equity governance; ADR07 performance linkage; ADR08 approval/segregation; ADR09 payroll handoff; ADR10 AI policy; ADR11 data retention; ADR12 commercial exit.

## Critical controls
No automatic pay change from unreviewed AI; strict role permissions; transparent budgets; separation of recommender/approver; country-specific legal review; validated pay equity methodology; payroll reconciliation before release; avoid exporting individual salaries to broad analytics audiences.

## Presales scenario
Fictional multinational runs annual merit and variable-pay cycles across three countries. Finance approves budgets, managers recommend increases, HR reviews equity and exceptions, and payroll receives only approved effective-dated changes.
