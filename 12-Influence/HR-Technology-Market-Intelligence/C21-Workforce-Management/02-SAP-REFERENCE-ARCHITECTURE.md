# C21 — SAP-first Workforce Management Architecture

Employee Central person/job/location → working time and leave configuration → demand/coverage planning → workforce schedule → time capture → labor rule and premium calculation → manager exception approval → payroll-ready time results → payroll/finance reconciliation → workforce analytics.

| Layer | SAP-first reference | Control |
|---|---|---|
| Workforce master | Employee Central | Effective-dated job, contract, site |
| Time and absence | SuccessFactors Time Tracking and EC Time Off | Time valuation, leave and approvals |
| Advanced WFM | Licensed specialist partner if needed | Demand, skills, optimization and shifts |
| Capture | Supported web/mobile/device integration | Identity, device and location privacy |
| Labor rules | Configured country/contract rules | Breaks, overtime, union terms |
| Payroll | ECP/SAP Payroll or approved engine | Wage-type mapping and cutoff |
| Integration | Supported APIs / SAP Integration Suite | Replay, monitoring and reconciliation |
| Analytics | Authorized workforce reports | Labor cost, coverage and compliance |

## Canonical contract
Person/employment ID | site | job | contract | time zone | shift ID | planned start/end | actual start/end | break | absence | overtime | premium | approval | payroll code | cost center | source event ID | audit.

## ADRs
Time authority; scheduling engine; labor rule ownership; device/privacy; absence; time valuation; payroll mapping; overtime; approval; data residency; integration recovery; vendor exit.

## Negative tests
Missed punch, duplicate device event, underage/ineligible shift, break violation, incorrect daylight-saving offset, unapproved overtime, unauthorized location tracking, payroll double-counting and stale employment status.