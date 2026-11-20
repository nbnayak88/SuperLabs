# C19 — SAP-first Architecture

Employee Central → canonical pay input → country mapping → global calendar and cutoff → local provider submission → local engine gross-to-net → results → exceptions and approvals → payment coordination → finance reconciliation → statutory evidence.

| Layer | Reference | Decision |
|---|---|---|
| HR master | Employee Central | Effective-dated employee data |
| Payroll engine | ECP/SAP Payroll or third-party | Country statutory calculation owner |
| Orchestration | Specialist hub or governed integration | Calendar, SLA, exceptions, approval |
| Integration | SAP Integration Suite or approved middleware | API, file, encryption, idempotency |
| Time/pay input | Approved source | Mapping and cutoff validation |
| Payments | Treasury/bank/licensed provider | Funding, FX, authorization |
| Finance | S/4HANA or other ledger | GL and liability reconciliation |
| Compliance | Local payroll specialists | Statutory filings and legal accountability |
| Analytics | Restricted operational reporting | Variances, SLA and errors |

Contract: person ID, country, provider, pay period, event ID, effective date, earning code, amount, currency, acknowledgment, run ID, gross/net, approval, payment ID, GL ID, audit.

ADRs: calculation ownership, local/global controls, provider contract, canonical schema, cutoffs, SLA, payment authorization, reconciliation, statutory owner, privacy, failover and exit.

Negative tests: duplicate provider submission, missed cutoff, unexplained net variance, unauthorized payment, cross-border privacy breach, provider outage and unreconciled GL.

Orchestration never removes local engine, statutory or bank authorization obligations.