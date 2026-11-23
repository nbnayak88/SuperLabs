# C23 — 20-Test Proof of Concept

**Pilot:** 2–4 weeks; 200 synthetic workers, three sites, two countries, two weeks of shifts, 15 roles, 30 skills, simulated demand and nonproduction SAP connections.

| ID | POC test | Acceptance evidence |
|---|---|---|
| P01 | Import worker availability and contract from EC | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P02 | Forecast hourly staffing demand from synthetic history | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P03 | Generate schedule satisfying minimum coverage | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P04 | Assign certified worker to regulated task | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P05 | Reject unqualified employee assignment | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P06 | Enforce minimum rest between shifts | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P07 | Respect maximum weekly hours and overtime | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P08 | Respect approved leave and absence | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P09 | Replan after unplanned sickness | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P10 | Fill open shift through controlled bidding | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P11 | Approve employee shift swap | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P12 | Apply fair weekend rotation across cohorts | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P13 | Explain optimization recommendation and trade-off | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P14 | Allow authorized manager override with audit | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P15 | Publish schedule to employee mobile view | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P16 | Sync approved schedule to time tracking | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P17 | Validate schedule premium mapping to payroll | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P18 | Prevent unauthorized employee location disclosure | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P19 | Replay failed integration without duplicate shift | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |
| P20 | Export schedules, decisions and configuration | Expected/actual schedule, rule trace, audit, integration log and reviewer sign-off |

## Suggested acceptance
100% mandatory legal, certification, privacy and schedule-to-pay integrity tests; zero unqualified regulated-role assignments; zero unapproved labor-law violations; no duplicate shifts on replay; ≥95% noncritical scenarios passed. Evaluate forecast error, labor coverage, overtime cost and fairness against an agreed synthetic baseline, without inventing vendor performance.

## Decision
Discovery → SAP baseline → labor and skills rules → demo → weighted RFI/POC → five-year TCO → selection.

## SuccessLabs applied simulation
**OmniWorks Industrial Systems Ltd.** (fictional): an industrial plant must maintain certified operator coverage through absenteeism and demand surges. Learners act as planner, shift supervisor, employee, compliance reviewer and SAP architect to compare automated schedules and explain trade-offs.