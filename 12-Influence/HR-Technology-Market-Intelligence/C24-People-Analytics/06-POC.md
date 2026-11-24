# 20-test POC

Pilot: 2–4 weeks, 500 synthetic workers, 3 entities, 24 months of history, nonproduction SAP interfaces. Establish independent expected metrics before execution.

| ID | Test | Acceptance evidence |
|---|---|---|
| P1 | Reconcile EC headcount to source | Expected versus actual, source lineage, audit and reviewer sign-off |
| P2 | Calculate FTE for part-time employment | Expected versus actual, source lineage, audit and reviewer sign-off |
| P3 | Deduplicate concurrent employment without losing assignments | Expected versus actual, source lineage, audit and reviewer sign-off |
| P4 | Reconstruct historical hierarchy | Expected versus actual, source lineage, audit and reviewer sign-off |
| P5 | Calculate monthly voluntary attrition | Expected versus actual, source lineage, audit and reviewer sign-off |
| P6 | Reconcile payroll labor costs to GL | Expected versus actual, source lineage, audit and reviewer sign-off |
| P7 | Combine recruitment and hire data | Expected versus actual, source lineage, audit and reviewer sign-off |
| P8 | Measure internal mobility | Expected versus actual, source lineage, audit and reviewer sign-off |
| P9 | Calculate absence rate with agreed denominator | Expected versus actual, source lineage, audit and reviewer sign-off |
| P10 | Filter dashboard by legal entity | Expected versus actual, source lineage, audit and reviewer sign-off |
| P11 | Deny cross-entity unauthorized access | Expected versus actual, source lineage, audit and reviewer sign-off |
| P12 | Suppress small cohorts including differencing attacks | Expected versus actual, source lineage, audit and reviewer sign-off |
| P13 | Block restricted exports | Expected versus actual, source lineage, audit and reviewer sign-off |
| P14 | Detect missing source data | Expected versus actual, source lineage, audit and reviewer sign-off |
| P15 | Validate refresh SLA | Expected versus actual, source lineage, audit and reviewer sign-off |
| P16 | Explain KPI lineage | Expected versus actual, source lineage, audit and reviewer sign-off |
| P17 | Backtest aggregate attrition model | Expected versus actual, source lineage, audit and reviewer sign-off |
| P18 | Test model bias and drift | Expected versus actual, source lineage, audit and reviewer sign-off |
| P19 | Replay failed feed without duplication | Expected versus actual, source lineage, audit and reviewer sign-off |
| P20 | Export governed data and metric definitions | Expected versus actual, source lineage, audit and reviewer sign-off |

Acceptance: 100% mandatory privacy, access, reconciliation and metric accuracy tests; zero unauthorized disclosures; at least 95% noncritical scenarios pass. Predictive models must beat agreed baseline on held-out data and pass governance review before use.

SuccessLabs simulation: OmniWorks Industrial Systems (fictional) investigates rising attrition and overtime across plants. Learners distinguish data errors, organizational changes and plausible business drivers, then propose measurable experiments without claiming causality.