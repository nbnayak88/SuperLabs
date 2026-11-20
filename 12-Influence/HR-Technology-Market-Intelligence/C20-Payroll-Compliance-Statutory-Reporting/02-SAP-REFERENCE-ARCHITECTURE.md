# C20 — SAP-first Architecture

Employee Central tax master → SAP Payroll/ECP or local engine → statutory calculation → filing preparation → maker-checker → government submission → acknowledgment/amendment → GL reconciliation → audit retention.

| Layer | Reference | Control |
|---|---|---|
| Master | Employee Central | Effective-dated tax IDs |
| Payroll | SAP ECP/Payroll localization | Country calculations |
| Reporting | Country statutory tools | Current formats/deadlines |
| Integration | SAP Integration Suite/APIs | Encryption, retry |
| Government | Approved channels | Submission evidence |
| Finance | S/4HANA or GL | Liability reconciliation |
| Governance | Local tax/legal expert | Interpretation and change control |
| Audit | Restricted archive | Retention |

Data: country, entity, employee, tax ID, period, taxable base, tax, employer contribution, filing ID, revision, acknowledgment, GL ID, timestamp.

ADRs: localization, statutory owner, update testing, channels, retro, reconciliation, approvals, privacy, retention, liability and exit.

Do not assume identical garnishment, tax exemptions or reporting in every country.