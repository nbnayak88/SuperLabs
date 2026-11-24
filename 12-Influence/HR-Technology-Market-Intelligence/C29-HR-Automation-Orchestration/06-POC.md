# 20-test POC

Pilot 2–4 weeks, 100 synthetic hires, two countries, nonproduction SAP and mock IT/finance services. Establish independent expected results.

| ID | Scenario | Expected result |
|---|---|---|
| P1 | Hire event | Start one workflow per approved hire |
| P2 | Duplicate event | No duplicate workflow or downstream record |
| P3 | Country routing | Correct approved rule version |
| P4 | Manager approval | Only authorized approver can decide |
| P5 | Segregation | Initiator cannot bypass independent approval |
| P6 | EC read | Only permitted fields retrieved |
| P7 | IT provisioning | Create authorized test ticket once |
| P8 | Finance task | Route cost center validation |
| P9 | Parallel tasks | Join only after mandatory tasks complete |
| P10 | Timeout | Escalate without silent failure |
| P11 | API outage | Bounded retry and recover |
| P12 | Partial write | Reconcile and compensate where supported |
| P13 | RPA fallback | Detect changed UI and stop safely |
| P14 | Credential rotation | Continue using approved secret store |
| P15 | Privacy | Redact sensitive data from logs |
| P16 | Unauthorized action | Reject and audit |
| P17 | Version deployment | Existing instances follow documented migration policy |
| P18 | Cancellation | Stop pending tasks and reconcile completed actions |
| P19 | SLA reporting | Measure elapsed time and exceptions |
| P20 | Export and recovery | Export definitions and replay safely |

Acceptance: 100% mandatory security, approval, duplicate prevention and reconciliation tests; zero unauthorized writes; at least 95% noncritical scenarios. Measure median and p95 cycle time, manual touch time, exception rate and cost against baseline; no invented savings.

Applied experiment: fictional OmniWorks Industrial Systems hires technicians across plants. Learners model onboarding from approved EC hire through IT access, safety training and finance validation. Simulate duplicate events and failed provisioning, then demonstrate recovery and audit. Compare native workflow, SAP Build Process Automation and external orchestration.