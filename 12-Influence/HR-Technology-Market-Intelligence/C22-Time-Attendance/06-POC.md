# C22 — 20-Test POC

Pilot: 2–4 weeks, 150 synthetic workers, two countries, three sites, nonproduction EC and payroll, simulated clock devices.

| ID | Scenario | Evidence |
|---|---|---|
| P01 | EC employee replication | Expected/actual, rule trace, audit, sign-off |
| P02 | Web clock-in/out | Expected/actual, rule trace, audit, sign-off |
| P03 | Clock device ingestion | Expected/actual, rule trace, audit, sign-off |
| P04 | Offline mobile sync | Expected/actual, rule trace, audit, sign-off |
| P05 | Duplicate punch rejection | Expected/actual, rule trace, audit, sign-off |
| P06 | Missing punch correction | Expected/actual, rule trace, audit, sign-off |
| P07 | Manager approval | Expected/actual, rule trace, audit, sign-off |
| P08 | Daily overtime | Expected/actual, rule trace, audit, sign-off |
| P09 | Weekly overtime | Expected/actual, rule trace, audit, sign-off |
| P10 | Shift premium | Expected/actual, rule trace, audit, sign-off |
| P11 | Break and rest rule | Expected/actual, rule trace, audit, sign-off |
| P12 | Overnight shift | Expected/actual, rule trace, audit, sign-off |
| P13 | DST transition | Expected/actual, rule trace, audit, sign-off |
| P14 | Absence overlap | Expected/actual, rule trace, audit, sign-off |
| P15 | Retro time correction | Expected/actual, rule trace, audit, sign-off |
| P16 | Payroll cutoff | Expected/actual, rule trace, audit, sign-off |
| P17 | Wage type mapping | Expected/actual, rule trace, audit, sign-off |
| P18 | Privacy access denial | Expected/actual, rule trace, audit, sign-off |
| P19 | Idempotent API replay | Expected/actual, rule trace, audit, sign-off |
| P20 | Historical export | Expected/actual, rule trace, audit, sign-off |

Acceptance: 100% mandatory statutory, privacy, approvals and payroll integrity tests; zero duplicate payable events; ≥95% noncritical workflows; recover failed interfaces without double pay.

SuccessLabs simulation: fictional OmniWorks rotating-shift technician with missed punch, overtime and overlapping leave. Learners trace correction and payroll result.