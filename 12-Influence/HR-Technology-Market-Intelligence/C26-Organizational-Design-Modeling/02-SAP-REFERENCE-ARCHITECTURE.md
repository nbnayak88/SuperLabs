# SAP-first organizational design architecture

Enterprise strategy and capability map → EC effective-dated organizational and position baseline → isolated modeling project/scenarios → spans, layers, cost and governance analysis → stakeholder review → approved change set → supported EC publication → downstream synchronization and reconciliation → benefits tracking.

| Layer | Reference and control |
|---|---|
| Master structure | EC legal entity, business unit, division, department, cost center and position; distinguish person and position hierarchies |
| Modeling | Native EC Organizational Modeling 2H 2026 where enabled; specialist tool for unmet requirements |
| Cost and capacity | Finance and SAP Analytics Cloud planning where needed; reconcile planned and staffed FTE |
| Governance | Scenario owner, independent approver, effective date, consultation and conflict check |
| Execution | Supported publication only; unsupported changes use validated controlled processes |
| Integration | Verify Recruiting, Payroll, permissions, finance and other dependent systems |
| Assurance | Audit, reconciliation, exception remediation and benefits review |

Source: [SAP Learning](https://learning.sap.com/courses/sap-successfactors-employee-central-core-and-position-management/describing-key-sap-successfactors-employee-central-core-and-position-management-2h-2026-features-and-enhancements_a27e0fef-d71b-4aa0-81e7-21b407aff366); [enablement guidance](https://community.sap.com/t5/human-capital-management-blog-posts-by-sap/introducing-organizational-modeling-in-sap-successfactors-employee-central/bc-p/14503306); [Position Organization Chart](https://help.sap.com/docs/successfactors-employee-central/implementing-position-management/position-organization-chart).

Prerequisites: verify EC and Position Management, position-to-job synchronization, provisioning for preview/production, RBP, licenses, supported objects/operations and current release limitations. Do not assume automatic rollback, all-object writeback or unrestricted mass changes. Test preview first.

Contract: scenario/version, object type/ID, parent ID, relationship type, effective date, planned/staffed FTE, cost center, action, baseline version, approval and audit. Metrics: span = direct reports at agreed person/position grain; layers = hierarchy depth; vacancy = authorized unstaffed position per agreed definition. Protect privacy and consult affected employees where required; no automated adverse employment decisions.

ADRs: leading hierarchy, master ownership, scenario boundary, cost scope, matrix relationships, approvals, conflict detection, effective dating, downstream mapping, privacy, recovery and exit.