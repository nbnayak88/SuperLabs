# C19 — 20-Test POC

Pilot: 2–4 weeks, 200 synthetic workers, 3 countries, 2 engines, 2 providers, 2 periods and nonproduction SAP interfaces.

| ID | Test | Evidence |
|---|---|---|
| P01 | EC hire to providers | Expected/actual, acknowledgment, audit and sign-off |
| P02 | Country transfer | Expected/actual, acknowledgment, audit and sign-off |
| P03 | Variable pay mapping | Expected/actual, acknowledgment, audit and sign-off |
| P04 | Incomplete input rejection | Expected/actual, acknowledgment, audit and sign-off |
| P05 | Global cutoff calendar | Expected/actual, acknowledgment, audit and sign-off |
| P06 | Local approval | Expected/actual, acknowledgment, audit and sign-off |
| P07 | Input/output reconciliation | Expected/actual, acknowledgment, audit and sign-off |
| P08 | Net-pay variance detection | Expected/actual, acknowledgment, audit and sign-off |
| P09 | Gross-to-net ownership | Expected/actual, acknowledgment, audit and sign-off |
| P10 | Off-cycle coordination | Expected/actual, acknowledgment, audit and sign-off |
| P11 | Retro correction | Expected/actual, acknowledgment, audit and sign-off |
| P12 | Exception escalation | Expected/actual, acknowledgment, audit and sign-off |
| P13 | Multi-engine consolidation | Expected/actual, acknowledgment, audit and sign-off |
| P14 | GL reconciliation | Expected/actual, acknowledgment, audit and sign-off |
| P15 | Payment funding approval | Expected/actual, acknowledgment, audit and sign-off |
| P16 | Unauthorized payment block | Expected/actual, acknowledgment, audit and sign-off |
| P17 | Provider outage | Expected/actual, acknowledgment, audit and sign-off |
| P18 | Idempotent interface replay | Expected/actual, acknowledgment, audit and sign-off |
| P19 | Country privacy enforcement | Expected/actual, acknowledgment, audit and sign-off |
| P20 | Data export and exit | Expected/actual, acknowledgment, audit and sign-off |

Acceptance: 100% mandatory statutory ownership, payment approval, privacy, reconciliation and integrity tests; zero duplicate payment; all failures detectable and safely replayable; ≥95% noncritical tests pass.

Decision: country discovery → SAP baseline → operating model → vendor demo → weighted RFI/POC → five-year TCO → executive selection.

SuccessLabs experiment: fictional utility payroll across three countries with SAP ECP and third-party engine; learners investigate missed cutoff, net variance and failed provider feed.