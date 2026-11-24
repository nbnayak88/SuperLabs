# SAP-first architecture

EC, Recruiting, Learning, Time, Payroll and Finance → authorized extraction → governed staging and identity resolution → effective-dated workforce model → KPI semantic layer → People Analytics / SAP Analytics Cloud dashboards → decision and action tracking.

Use native Story reporting for supported operational scenarios; evaluate SAP Analytics Cloud and an approved data platform for cross-source analytics. Validate supported connectors, permissions, licensing and refresh latency. Do not assume unrestricted replication or native predictive parity.

| Metric | Definition to validate |
|---|---|
| Headcount | Distinct active persons at snapshot date, with explicit population scope |
| FTE | Sum of employment FTE using agreed concurrent-employment policy |
| Turnover | Period leavers divided by agreed average headcount × 100 |
| Absence rate | Absent eligible hours / scheduled eligible hours × 100 |
| Internal mobility | Eligible internal moves / agreed eligible population × 100 |
| Labor cost | Reconciled payroll and employer costs with agreed finance scope |

Model dimensions: person pseudonym, employment, entity, effective date, job, organization, location, currency, metric version and source lineage. Preserve historical hierarchies and distinguish person from assignment grain.

Controls: least privilege, row-level security, small-cohort suppression, differencing protection, purpose limitation, retention, export restrictions, audit, model validation and human review. Avoid individual adverse employment decisions based solely on predictions. Correlation is not causation.

ADRs: source authority, grain, historical model, KPI ownership, currency, refresh, privacy, model governance, reconciliation, recovery and exit.