# 20-test POC

Pilot 2–4 weeks, 2,000 synthetic workers, two entities, nonproduction EC and ERP/mock payroll endpoints. Confirm API access, licenses and object support before execution.

| ID | Scenario | Expected result |
|---|---|---|
| P1 | EC extraction | Reconcile authorized worker records |
| P2 | Effective dating | Preserve future and historical changes |
| P3 | Concurrent employment | Maintain distinct employment identifiers |
| P4 | Cost center synchronization | Map approved authoritative records |
| P5 | Code mapping | Reject unmapped mandatory values |
| P6 | API authorization | Deny unauthorized scope |
| P7 | Schema change | Reject incompatible contract safely |
| P8 | Delta extraction | No missed changes at watermark boundary |
| P9 | Duplicate event | No duplicate business effect |
| P10 | Out-of-order event | Apply documented ordering/version policy |
| P11 | SFTP exchange | Verify host key and approved SSH authentication |
| P12 | Key rotation | Demonstrate controlled credential replacement |
| P13 | Payroll transfer | Reconcile approved records and totals |
| P14 | Target outage | Bounded retries and dead-letter handling |
| P15 | Partial failure | Identify failed records and reconcile |
| P16 | Replay | Recover without duplicate writes |
| P17 | Privacy | Mask sensitive fields in logs |
| P18 | Peak volume | Meet agreed throughput and latency |
| P19 | Transport | Promote versioned configuration without secrets |
| P20 | Disaster recovery and exit | Restore service and export contracts and mappings |

Acceptance: 100% mandatory security, reconciliation, effective dating and duplicate prevention tests; zero unauthorized disclosures/writes; at least 95% noncritical tests. Measure latency, throughput, error rate and recovery against agreed targets; no invented vendor performance.

Applied experiment: fictional OmniVerse Energy integrates EC with S/4HANA, using supported cost center master data synchronization where available, Cloud Integration for worker data and secure file exchange for an external learning provider. Learners design contracts, configure test interfaces, inject failures, reconcile records and defend architecture decisions. This is a conceptual exercise, not a verified tenant configuration.