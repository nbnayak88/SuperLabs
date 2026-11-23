# C22 — SAP-first Architecture

Employee Central employment and work schedule → SAP Time Tracking and EC Time Off → web/mobile/clock events → validation/deduplication → time valuation and premiums → corrections and manager approval → payroll wage-type mapping → ECP/SAP Payroll or other engine → reconciliation and audit.

| Layer | Reference | Control |
|---|---|---|
| Worker master | Employee Central | Effective dates and time zone |
| Time | SuccessFactors Time Tracking | Time recording and valuation |
| Absence | EC Time Off | Leave consistency |
| Capture | Supported devices/mobile | Identity and privacy |
| Rules | Country/contract configuration | Overtime, breaks, holidays |
| Payroll | ECP/SAP Payroll or partner | Wage types, cutoffs, retro |
| Integration | Supported APIs / Integration Suite | Idempotency and monitoring |
| Reporting | Authorized analytics | Exceptions and cost |

Contract: person ID, employment ID, site, time zone, event ID, source, UTC/local timestamp, schedule, break, absence, approval, valuation rule, premium, wage type, period and audit.

ADRs: recording type, system of record, device, offline sync, labor rules, DST, approval, absence, payroll, privacy, recovery and exit.

Negative tests: duplicate clock, missing punch, DST ambiguity, unapproved overtime, absence overlap, unauthorized geolocation and post-cutoff correction. Local labor experts must validate statutory rules.