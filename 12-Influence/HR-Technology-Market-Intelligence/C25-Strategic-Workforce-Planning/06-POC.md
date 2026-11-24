# 20-test POC

Pilot: 2–4 weeks, 500 synthetic workers, three entities, 12 job families, 24 months actuals and 36-month horizon. Nonproduction interfaces only.

| ID | Scenario | Expected result |
|---|---|---|
| P1 | Baseline reconciliation | Match source totals at agreed snapshot |
| P2 | FTE capacity | 100 workers at 0.8 FTE = 80 FTE |
| P3 | Demand drivers | 1200 units / 100 units per FTE = 12 FTE |
| P4 | Supply roll-forward | 100 + 10 hires - 8 exits = 102 |
| P5 | Gap calculation | Demand 120 minus supply 102 = 18 |
| P6 | Skill gap | Compare qualified capacity with required capacity |
| P7 | Growth scenario | Change demand without altering approved baseline |
| P8 | Contraction scenario | Recalculate cost and surplus |
| P9 | Attrition sensitivity | Compare low/base/high assumptions |
| P10 | Hiring lead time | Delay capacity until start date |
| P11 | Reskilling | Respect training duration and completion assumptions |
| P12 | Intervention portfolio | Compare hire/train/contract cost and timing |
| P13 | Currency conversion | Reconcile against approved FX rates |
| P14 | Finance alignment | Match approved cost scope to budget |
| P15 | Version approval | Reject unauthorized publication |
| P16 | Actual versus plan | Trace variance to source and assumptions |
| P17 | Privacy | Deny unauthorized and small-cohort disclosure |
| P18 | Audit | Trace assumption changes to approver |
| P19 | Recovery | Replay failed feed without duplicates |
| P20 | Exit | Export plan, assumptions and metric dictionary |

Acceptance: 100% mandatory reconciliation, privacy, approval and scenario isolation tests; at least 95% noncritical tests; independent expected values and documented tolerances. Forecasts are assumptions, not guarantees.

Applied experiment: OmniGrid Utilities (fictional) expands renewable generation. Demand 120 qualified technician FTE, opening supply 100, hires 10 and exits 8: gap 18 FTE before interventions. Learners compare reskilling, hiring and contracting, including qualification constraints, lead time and full costs; document assumptions and defend a plan to CHRO/CFO.