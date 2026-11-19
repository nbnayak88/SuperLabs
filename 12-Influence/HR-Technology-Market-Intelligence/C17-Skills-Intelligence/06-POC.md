# C17 — 20-Test POC

Pilot: 2–4 weeks, 200 synthetic workers, three countries, 100 skills, 20 roles, three evidence types and nonproduction SAP integration.

| ID | Test | Evidence |
|---|---|---|
| P01 | Import role skills | Timestamp, expected/actual, audit and reviewer sign-off |
| P02 | Normalize synonyms | Timestamp, expected/actual, audit and reviewer sign-off |
| P03 | Map multilingual terms | Timestamp, expected/actual, audit and reviewer sign-off |
| P04 | Self-declare skill | Timestamp, expected/actual, audit and reviewer sign-off |
| P05 | Infer skill from experience | Timestamp, expected/actual, audit and reviewer sign-off |
| P06 | Show evidence and confidence | Timestamp, expected/actual, audit and reviewer sign-off |
| P07 | Challenge false inference | Timestamp, expected/actual, audit and reviewer sign-off |
| P08 | Validate assessment evidence | Timestamp, expected/actual, audit and reviewer sign-off |
| P09 | Apply proficiency expiry | Timestamp, expected/actual, audit and reviewer sign-off |
| P10 | Handle employee transfer | Timestamp, expected/actual, audit and reviewer sign-off |
| P11 | Sync with Talent Intelligence Hub | Timestamp, expected/actual, audit and reviewer sign-off |
| P12 | Reconcile Employee Central identity | Timestamp, expected/actual, audit and reviewer sign-off |
| P13 | Recommend learning for skill gap | Timestamp, expected/actual, audit and reviewer sign-off |
| P14 | Match mobility opportunity | Timestamp, expected/actual, audit and reviewer sign-off |
| P15 | Aggregate workforce gaps | Timestamp, expected/actual, audit and reviewer sign-off |
| P16 | Evaluate synthetic-cohort fairness | Timestamp, expected/actual, audit and reviewer sign-off |
| P17 | Restrict unauthorized access | Timestamp, expected/actual, audit and reviewer sign-off |
| P18 | Replay API idempotently | Timestamp, expected/actual, audit and reviewer sign-off |
| P19 | Correct disputed skill | Timestamp, expected/actual, audit and reviewer sign-off |
| P20 | Export ontology and evidence | Timestamp, expected/actual, audit and reviewer sign-off |

Acceptance: 100% mandatory privacy, employee correction, provenance and AI safety tests; zero unsupported automated HR decisions; integration failures observable/replayable; ≥95% noncritical workflow success. Measure inference precision/recall and subgroup fairness on an approved labeled synthetic dataset, not vendor assertions.

Decision: discovery → SAP baseline → governance → demo → RFI/POC → five-year TCO → selection.

SuccessLabs lab: fictional industrial workforce maps technician-to-supervisor skills; learners correct a falsely inferred safety credential and defend evidence-based mobility matching.