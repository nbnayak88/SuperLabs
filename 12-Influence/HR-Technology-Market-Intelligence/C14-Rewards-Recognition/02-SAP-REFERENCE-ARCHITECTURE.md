# C14 — SAP-first Reference Architecture

## Value stream
Employee Central identity and employment → recognition eligibility → peer/manager nomination → moderation and budget validation → approval → award ledger → merchant redemption → notification → country tax/payroll and finance → reconciliation and analytics.

| Layer | Reference | Architecture decision |
|---|---|---|
| Workforce master | SAP SuccessFactors Employee Central | Effective dates, legal entity, manager, country |
| Recognition | Specialist partner | Peer feed, awards, milestones, approval |
| Award ledger | Partner/finance | Points, reversals, liability and audit |
| Fulfillment | Local catalog and merchants | Country, currency, delivery and refunds |
| Payroll | SAP ECP/SAP Payroll or other target | Local taxable award classification |
| Finance | SAP S/4HANA or approved finance | Budget, cost center and reconciliation |
| Communications | Work Zone/Teams/Slack where supported | Employee consent and visibility |
| Integration | Supported API / SAP Integration Suite | Encryption, retries, idempotency |
| Analytics | Restricted reporting | Participation, concentration, cost and fairness |
| AI | Supported assistive tools | Human approval, no invented praise |

## Data contract
Employee ID | employment ID | country | award ID | award type | recognition reason | approver | points | currency | tax classification | redemption ID | fulfillment status | payroll event ID | finance posting | audit timestamp.

## ADRs
ADR01 SAP native vs partner; ADR02 eligibility; ADR03 award budget; ADR04 point liability; ADR05 country tax; ADR06 catalog fulfillment; ADR07 employee privacy; ADR08 moderation; ADR09 fraud; ADR10 reconciliation; ADR11 AI; ADR12 exit.

## Negative tests
Reciprocal point farming, duplicate redemption, unauthorized employee data, incorrect taxable award, orphaned balance, unsupported country redemption and AI-generated fabricated praise. Local tax law must be reviewed independently.