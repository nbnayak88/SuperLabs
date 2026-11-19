# C01 90-Minute Presales Demonstration — SAP EC Reference

## Personas

CHRO (business outcomes); HR Operations Lead (transaction processing); Employee (self-service); Line Manager (approvals); EC Solution Architect (data/rules); Security Officer (permissions); Integration Lead (contracts); CFO/Procurement (TCO).

## Script

| Minutes | Scenario | Evidence to capture |
|---|---|---|
| 0–8 | Business outcome and architecture | Scope, deployment model, systems of record |
| 8–18 | Global employee record | Effective-dated person/employment/job views |
| 18–28 | Hire and future-dated start | Hire transaction, workflow, effective-date behavior |
| 28–38 | Transfer and manager change | Derived fields, history, organizational hierarchy |
| 38–48 | Position and organizational structure | Vacancy, reporting, legal entity/cost center |
| 48–58 | Employee/manager self-service | Mobile, approvals, delegation and usability |
| 58–68 | Security negative test | RBP restriction and audit trail |
| 68–78 | Integration and recovery | Delta event, retry, replay and downstream reconciliation |
| 78–85 | Reporting, AI and operations | KPI lineage, AI governance, monitoring |
| 85–90 | TCO and objections | Written licensing/implementation assumptions |

## Scripted challenge questions

- Show an approved future-dated hire that is visible through a workflow link but not yet searchable; explain effective-date, RBP and search behavior without guessing.
- Show what happens when a manager transfers between legal entities.
- Show duplicate prevention and error recovery for a rehire.
- Show how cost center data is sourced and maintained across systems.
- Show that an unauthorized manager cannot access sensitive fields.
- Show the change log and effective-dated correction of a historical record.

## Demo scoring

Business fit 25%; architecture credibility 25%; functional completion 25%; security/privacy 15%; usability 10%. Record failures and unproven claims; no vendor pre-scores.
