# C18 — 20-Test POC and Decision

**Pilot:** 2–4 weeks; 200 synthetic employees, 2 pilot countries with verified engine availability, 3 pay groups, 2 payroll periods, 1 retro cycle, bank and finance test interfaces. Use country payroll experts to establish expected gross-to-net outputs.

| ID | Scenario | Acceptance evidence |
|---|---|---|
| P01 | Hire employee and replicate payroll master data | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P02 | Calculate standard monthly gross-to-net | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P03 | Calculate overtime and shift premium | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P04 | Apply statutory tax and contribution | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P05 | Process benefit and voluntary deduction | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P06 | Handle country-appropriate garnishment rule | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P07 | Calculate retroactive salary correction | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P08 | Process off-cycle bonus | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P09 | Process termination final settlement | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P10 | Reconcile time and absence input | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P11 | Run multi-currency payment | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P12 | Generate bank file with approval controls | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P13 | Post payroll results to finance GL | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P14 | Reconcile payroll-to-GL balances | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P15 | Generate employee pay statement | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P16 | Produce statutory report for pilot country | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P17 | Test payroll role segregation and privacy | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P18 | Replay failed master-data interface safely | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P19 | Compare parallel payroll expected vs actual | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |
| P20 | Export payroll history and demonstrate exit | Expected vs actual payroll calculation, logs, reconciliation and owner sign-off |

## Suggested acceptance
100% statutory, gross-to-net, privacy, payment approval and reconciliation mandatory tests pass; zero unauthorized or duplicate payments; all failed interfaces detectable/replayable; ≥95% noncritical scenarios without workaround. Statutory rates and legal applicability must be validated as of test date.

## Decision gates
Country scope → SAP payroll baseline → localization and controls → vendor demo → weighted RFI/POC → five-year TCO → executive selection.

## SuccessLabs learning experiment
A fictional multinational utility pays frontline and office workers. Learners play payroll lead, country tax expert, SAP architect and finance controller, investigate a retroactive wage correction, validate bank approval and reconcile GL postings.