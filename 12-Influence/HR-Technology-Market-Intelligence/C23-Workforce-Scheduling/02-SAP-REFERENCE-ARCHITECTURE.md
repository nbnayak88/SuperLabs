# C23 — SAP-first Workforce Scheduling Architecture

## Logical flow
Employee Central person/job/location/contract → Time Off approved absences → demand signals (sales, production, patient/guest volume) → labor rules, skills and availability → scheduling optimizer or planner → supervisor review and approval → employee roster, bids and swaps → approved schedule integration to time tracking → time valuation and payroll → staffing and labor cost analytics.

| Layer | SAP-first or ecosystem reference | Design control |
|---|---|---|
| Workforce master | SAP SuccessFactors Employee Central | Employment status, site, role, contract, effective dates |
| Leave and availability | EC Time Off and approved input systems | Approved absences, availability, consent |
| Demand | ERP/POS/MES/service forecasting | Demand granularity, lineage and forecast accuracy |
| Optimization | Specialist scheduling engine where required | Labor law hard constraints, skills, cost, fairness |
| Roster UX | Scheduling application/employee mobile | Publication, swaps, notification, accessibility |
| Time | SAP SuccessFactors Time Tracking or supported alternative | Planned versus actual, time valuation |
| Payroll | ECP/SAP Payroll or other engine | Premium and overtime reconciliation |
| Integration | Supported APIs/SAP Integration Suite | Effective dating, event IDs, retries and monitoring |
| Analytics | Authorized workforce reporting | Coverage, labor spend, forecast bias and fairness |

## Canonical schedule contract
Employee/employment ID | legal entity | site | job/skill requirements | contract | time zone | schedule version | shift ID | start/end UTC and local | break | role | approval status | swap lineage | premium code | source event ID | last modified | audit.

## Architecture decision records
ADR01 demand source; ADR02 optimizer vs manual; ADR03 labor rules; ADR04 skill authority; ADR05 fairness; ADR06 absence integration; ADR07 schedule publication; ADR08 swaps; ADR09 time/payroll mapping; ADR10 privacy; ADR11 recovery; ADR12 export/exit.

## Safety and negative cases
Do not schedule uncertified worker for regulated role; do not violate rest periods; handle DST/overnight shifts; protect sensitive availability data; prohibit discriminatory proxy optimization; log human overrides; prevent duplicate schedule events; preserve legal approval workflows.