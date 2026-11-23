# C21 — 20-Test POC

Pilot: 2–4 weeks, 200 synthetic employees, 3 sites, 2 countries, multiple shifts, nonproduction SAP Employee Central and payroll interface.

| ID | Scenario | Evidence |
|---|---|---|
| P01 | Replicate employee from EC | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P02 | Create site shift schedule | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P03 | Apply labor coverage requirement | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P04 | Check required skills | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P05 | Capture mobile clock-in | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P06 | Capture clock-device event | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P07 | Correct missed punch | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P08 | Apply overtime premium | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P09 | Enforce break and rest rule | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P10 | Record absence and reschedule | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P11 | Swap shifts with approval | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P12 | Handle union-specific rule | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P13 | Reconcile time to payroll wage types | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P14 | Process retro time correction | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P15 | Enforce manager approval | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P16 | Restrict sensitive time data | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P17 | Test mobile accessibility | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P18 | Replay failed payroll interface idempotently | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P19 | Report labor cost and staffing gaps | Expected/actual, labor rule trace, approval and payroll reconciliation |
| P20 | Export historical time and schedule records | Expected/actual, labor rule trace, approval and payroll reconciliation |

Acceptance: all mandatory labor compliance, privacy, payroll correctness and approval tests pass; zero unauthorized wage payment; no unapproved shift-rule violation; ≥95% noncritical workflows pass; interface failures recover without duplicate pay.

Decision: discovery → SAP time baseline → workforce rules → vendor demo → RFI/POC → five-year TCO → selection.

**SuccessLabs simulation:** fictional industrial group with rotating shifts. Learners act as planner, supervisor, time administrator and payroll architect to resolve understaffing, missed punches and overtime premium discrepancies.