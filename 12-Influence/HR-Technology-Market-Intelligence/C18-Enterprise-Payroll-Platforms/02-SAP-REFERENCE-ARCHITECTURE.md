# C18 — SAP-first Enterprise Payroll Architecture

## Logical value stream
Employee Central employment/pay data → controlled replication to ECP/SAP Payroll → time and absence inputs → payroll schema/rules/wage types → gross-to-net calculation → payroll exception and retro processing → payroll approval → bank payment output → finance posting → statutory reporting → reconciliation and employee pay statement.

| Layer | SAP-first reference | Decision/control |
|---|---|---|
| HR source | SAP SuccessFactors Employee Central | Effective-dated employment and pay components |
| Replication | Supported SAP integration/Cloud Integration | Employee data mapping, monitoring and replay |
| Payroll engine | Employee Central Payroll or SAP Payroll | Country payroll localization, wage types and schema |
| Time | EC Time/Time Tracking or approved source | Attendance, overtime, absence and cutoffs |
| Benefits | EC benefits or external administrator | Deduction codes, effective dating and validation |
| Controls | Payroll Control Center where applicable | Exception monitoring and segregation of duties |
| Payment | Bank interface/payment solution | Authorization, encryption, reconciliation |
| Finance | SAP S/4HANA FI/CO or target ledger | GL, cost center and posting reconciliation |
| Reporting | Country statutory reporting solutions | Tax, social security, filings and retention |
| Employee UX | Supported payslip/self-service | Confidential access and distribution |
| Analytics | Restricted payroll analytics | Cost, exceptions and variance |

## Data contract
Person ID | employment ID | legal entity | payroll area | pay group | country | effective date | wage type | amount/currency | time result | deduction | tax code | payroll period | run ID | gross | net | payment ID | GL document | audit timestamp.

## Architecture decisions
ADR01 country engine; ADR02 EC data authority; ADR03 localization; ADR04 replication; ADR05 time input; ADR06 retro/off-cycle; ADR07 controls; ADR08 bank payments; ADR09 GL; ADR10 statutory reporting; ADR11 data privacy; ADR12 migration and exit.

## Negative tests
Duplicate employee replication; unapproved bank file; missing statutory deduction; incorrect retro; orphaned payroll posting; unauthorized payslip access; negative net pay without review; stale cost center; failed integration replay.

## Country rule
Do not assume a garnishment feature or identical statutory payroll rule exists in every country. Local legal and payroll specialists must validate requirements.