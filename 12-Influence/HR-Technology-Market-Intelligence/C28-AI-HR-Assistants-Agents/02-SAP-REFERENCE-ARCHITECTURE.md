# SAP-first agentic HR architecture

Employee/manager → authenticated Joule or approved channel → intent and policy classification → grounded retrieval from approved HR knowledge → bounded agent/skill orchestration → authorization and confirmation gate → supported SuccessFactors API or workflow → result reconciliation → audit and evaluation.

| Layer | Reference | Control |
|---|---|---|
| Experience | Joule where supported | Accessible conversation and escalation |
| Identity | SAP Cloud Identity Services / enterprise IdP | User identity, least privilege, RBP verification |
| Knowledge | Approved policy repository and supported retrieval | Version, jurisdiction, source citation, ACL |
| Agent | Joule Studio skills/agents where entitled | Tool allowlist, bounded steps, typed inputs |
| AI runtime | Supported SAP Business AI/BTP AI services as applicable | Model governance, retention, evaluation |
| Actions | Supported EC/HR APIs, SAP Build Process Automation | Authorization, preview, confirmation, approval |
| Integration | SAP Integration Suite where needed | Idempotency, retry, monitoring |
| Assurance | Approved logs and evaluation pipeline | Redaction, audit, kill switch, incident response |

Do not assume Joule Studio can access every HR object or API, that all actions inherit RBP automatically, or that every model/runtime is included. Verify delegated identity and authorization end-to-end; never use a privileged service account to bypass employee permissions. Treat retrieved text as untrusted data. Separate system instructions from content, validate tool parameters server-side, deny unauthorized actions, cap execution, reconcile writes and require human review for consequential decisions.

Contract: actor ID, purpose, jurisdiction, intent, source/version, model/version, tool, authorization decision, confirmation, correlation ID, outcome, timestamp and retention class. Minimize personal data in logs. ADRs: channel, identity, knowledge, model, tools, approval, residency, evaluation, resilience, audit, incident response and exit.