# SAP-first architecture

Approved HR event → event validation and deduplication → process instance → decision table → parallel human/API tasks → approval gates → supported system actions → reconciliation → closure and SLA analytics.

| Layer | Reference | Control |
|---|---|---|
| HR source | SuccessFactors EC and native workflows | Effective dates, supported events, RBP |
| Orchestration | SAP Build Process Automation | State, human tasks, decisions, timers |
| Connectivity | SAP Integration Suite | Mapping, API security, retry, correlation |
| Automation | Supported API actions; desktop bots only for justified gaps | Least privilege, selector validation, fail closed |
| Identity | SAP Cloud Identity Services and enterprise IdP | Actor identity, service principal scope |
| Assurance | Approved monitoring and audit | Redaction, SLA, incident response |

Use native SuccessFactors workflow for supported single-system approvals; external orchestration for cross-system journeys. Verify connector and API capabilities, entitlement, identity propagation and supported event semantics. Do not assume distributed atomic transactions: use idempotency keys, durable state, reconciliation and explicit compensation where supported. Never bypass approvals or RBP via privileged bots.

Canonical process contract: event ID, employee reference, effective date, process/version, actor, decision version, task ID, approval, correlation ID, target response, state, retry count and audit reference. Minimize personal data. ADRs: native vs external, API vs RPA, event delivery, state, approvals, identity, exception strategy, compensation, deployment, monitoring and exit.