# C02 — POC Test Plan and Decision Gates

**Suggested pilot:** 2–4 weeks with synthetic employees, 3 countries, 2 languages, 50 HR cases, 20 knowledge articles, 4 agent queues. Assumptions only; adjust in discovery.

| ID | Scenario | Acceptance criterion |
|---|---|---|
| P01 | Employee self-service | Create and track case with correct employee identity |
| P02 | Knowledge deflection | Relevant, versioned policy and source displayed |
| P03 | Routing | Case reaches correct country/category queue |
| P04 | SLA | Business calendar, pause and escalation behave as specified |
| P05 | Agent resolution | Full timeline, handoff and employee notification |
| P06 | Restricted case | Unauthorized employee/agent cannot view case or metadata |
| P07 | Employee transfer | Current and historical manager/organization context correct |
| P08 | AI response | Answer grounded in approved source; uncertain query escalates |
| P09 | AI summarization | Accurate summary with human verification and audit |
| P10 | Omnichannel | Channel-originated case correlates without duplication |
| P11 | Workflow approval | Required human approval cannot be bypassed |
| P12 | Integration failure | Retry, replay, alerts and reconciliation work |
| P13 | Knowledge governance | Expired/unapproved policy excluded from answers |
| P14 | Analytics | SLA, FCR, reopen, backlog and CSAT independently reconciled |
| P15 | Migration/export | Sample case history and attachments exported with audit context |

## Suggested decision thresholds (not vendor promises)
- 100% mandatory privacy/security and case-integrity tests pass.
- 100% high-priority SLA events observable and auditable.
- 0 unauthorized sensitive-case disclosures.
- ≥95% noncritical scripted steps complete without workaround.
- All AI outputs requiring human approval remain gated.
- All integration failures are detectable; no silent case loss.

## Decision gates
G1 discovery sign-off → G2 architecture/privacy → G3 common scripted vendor demo → G4 POC and evidence scoring → G5 normalized 5-year TCO → G6 executive selection.

## Decision record
Business case | Vendor candidates | Analyst evidence | RFI scores | POC pass/fail | Privacy exceptions | Architecture fit | TCO | Selection | Approvers | Conditions.

## Training experiment
Simulate employee payroll query, confidential grievance, and country-specific policy request; have learners alternate between employee, HR agent, EC architect and security reviewer, then write an evidence-backed recommendation.
