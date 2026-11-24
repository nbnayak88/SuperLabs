# SAP-first reference architecture

EC / Recruiting / Learning / Time / Payroll / ERP → supported APIs, events or secure files → Cloud Integration mapping and validation → target APIs or files → reconciliation and monitoring. API Management governs exposed APIs where appropriate; event services support asynchronous delivery where supported; Master Data Integration is evaluated for supported master data objects, not assumed to replicate every HR object.

| Layer | Design control |
|---|---|
| Source authority | EC for agreed worker objects; finance/ERP for agreed cost center authority |
| Contracts | Versioned OpenAPI, AsyncAPI or file schema; explicit effective dating |
| Connectivity | OAuth or other supported authentication, TLS, SFTP SSH host verification |
| Mapping | Canonical identifiers, code lists, time zones, null/delete semantics |
| Reliability | Durable state, bounded retries, idempotency, dead-letter handling |
| Security | Least privilege, secrets vault, key rotation, encryption, masked logs |
| Operations | Correlation IDs, reconciliation, alerts, ownership and recovery |

Prefer supported packaged integrations where fit is proven. Avoid assuming exactly-once transport; design idempotent business effects. For delta polling use documented API semantics, stable pagination and tested overlap/deduplication. For SFTP, private keys stay with the authenticating client; exchange public keys and verify host fingerprints through trusted channels. Do not share passwords or private keys. Verify endpoint ownership and supported authentication.

Canonical contract: source system, object type, person/employment ID, effective date, operation, version, event ID, correlation ID, schema version, timestamp and payload classification. ADRs: authority, pattern, contract, identity, mapping, ordering, retry, reconciliation, privacy, transport, monitoring and exit.