# C13 — SAP-first Benefits Administration Architecture

## Logical flow
Employee Central person, employment, legal entity, job, location and dependents → country plan catalog → eligibility and enrollment window → employee election/life event → contribution and employer cost → approval/verification → carrier or TPA integration → payroll deduction → reconciliation → reporting and service.

## Capability architecture
| Layer | SAP-first reference | Design decision |
|---|---|---|
| Workforce master | SuccessFactors Employee Central | Effective-dated employee and dependent data |
| Benefits | Employee Central benefits features where supported | Country-specific configuration and localization |
| Enrollment UX | SAP self-service or specialist platform | Plan choice, dependent verification, accessibility |
| Provider administration | Carrier, TPA, pension administrator | APIs, files, SLAs, reconciliation |
| Payroll | SAP Payroll/ECP or other payroll target | Deduction code, taxability, effective date, retro |
| Integration | SAP Integration Suite or approved middleware | Encryption, mapping, idempotency, retry |
| Analytics | Restricted HR/benefits reporting | Cost, participation, errors; privacy |
| Case support | HR service delivery or benefits vendor | Complex case resolution and escalation |
| AI assistance | Approved SAP/partner capabilities | Explain benefits, cite plan rules, human escalation |
| Security | RBP, IAM, privacy controls | Sensitive dependent/health data minimization |

## Country-by-country design matrix
Country | statutory schemes | voluntary schemes | SAP native support | specialist provider | payroll target | carrier format | local consent | residency | compliance owner | gap.

## Canonical contract
Person ID | employment ID | legal entity | plan ID | coverage tier | dependent reference | eligibility event | enrollment start/end | contribution amount/currency | payroll deduction code | effective date | carrier transaction ID | acknowledgment | audit event.

## Critical decisions
ADR01 SAP native vs external administrator; ADR02 country coverage; ADR03 eligibility and dependent rules; ADR04 plan-year transition; ADR05 payroll deduction ownership; ADR06 carrier integration; ADR07 retroactive corrections; ADR08 sensitive data; ADR09 consent/retention; ADR10 reporting; ADR11 service support; ADR12 five-year exit.

## Negative tests
Ineligible dependent enrollment; duplicate carrier election; stale eligibility after transfer; payroll deduction mismatch; disclosure of dependent medical data; expired enrollment window; AI inventing coverage terms; unacknowledged carrier update.

## Legal caution
Statutory benefits, continuation coverage, taxation and data protection vary by jurisdiction and effective date. Do not apply US-specific COBRA or HIPAA requirements outside their legal scope.
