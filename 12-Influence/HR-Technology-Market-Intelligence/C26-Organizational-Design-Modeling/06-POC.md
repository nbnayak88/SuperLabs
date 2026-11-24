# 20-test POC

Pilot 2–4 weeks; 500 synthetic workers, 550 positions, three entities, two alternative scenarios and nonproduction SAP. Confirm Organizational Modeling enablement before testing native publishing.

| ID | Scenario | Expected evidence |
|---|---|---|
| P1 | Import baseline | Match source positions and units |
| P2 | Vacant positions | Preserve authorized unstaffed positions |
| P3 | Multiple incumbents | Reconcile staffed FTE without double count |
| P4 | Matrix relationships | Keep primary and secondary links distinct |
| P5 | Cycle detection | Reject circular hierarchy |
| P6 | Scenario isolation | No live changes before authorized publication |
| P7 | Create unit | Validate supported object and associations |
| P8 | Move unit | Preserve valid descendants |
| P9 | Move position | Validate parent and reporting impact |
| P10 | Deactivate unit | Identify active dependent records |
| P11 | Span metrics | Calculate direct reports using agreed grain |
| P12 | Layer metrics | Calculate depth from agreed root |
| P13 | Cost model | Reconcile loaded cost and one-time transition costs |
| P14 | Scenario comparison | Compare two independently versioned options |
| P15 | Approval | Deny unauthorized publication |
| P16 | Effective dates | Validate future-dated changes |
| P17 | Concurrent change | Detect stale baseline before publication |
| P18 | Downstream sync | Verify supported position/job synchronization and interfaces |
| P19 | Privacy | Deny unauthorized employee and position detail |
| P20 | Recovery and export | Reconcile partial failure and export versioned evidence |

Acceptance: 100% mandatory hierarchy, privacy, approval, isolation and reconciliation tests; zero unauthorized publication; at least 95% noncritical scenarios pass. Record operation support and explicit gaps. No production publication.

Applied experiment: fictional OmniCapital Financial Group consolidates shared services. Baseline eight managers supervising 48 individual contributors (mean span 6); scenario proposes six managers supervising the same 48 (mean span 8). Learners assess workload, control segregation, service coverage, cost and employee impact; compare with a decentralized model rather than assuming larger spans are better. Defend the approved design to simulated CHRO/CFO and execute only in preview.