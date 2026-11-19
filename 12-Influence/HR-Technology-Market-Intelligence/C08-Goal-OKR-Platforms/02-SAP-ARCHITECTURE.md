# C08 — SAP-First Reference Architecture

## Strategy-to-execution flow
Enterprise strategy → enterprise objectives → business-unit/team OKRs → key-result metric contracts → check-ins and confidence → blockers/dependencies → governed actuals from ERP/CRM/finance/analytics → executive review → quarterly retrospective → next-cycle learning.

## Capability matrix
| Layer | SAP-first reference | Design decision |
|---|---|---|
| Employee goals | SAP SuccessFactors Performance & Goals | Individual goals, alignment, permissions |
| Enterprise planning | SAP Analytics Cloud, if licensed | KPI models, planning and metric sources |
| Strategy/OKR | SAP goal model or specialist platform | Depth of hierarchy, confidence and dependency tracking |
| Business actuals | SAP S/4HANA, SAC and approved sources | Authoritative KPI owner, timestamp, reconciliation |
| Collaboration | Supported workflow and communications | Check-in cadence and escalation |
| Analytics | Governed executive scorecard | KPI lineage, aggregation and role access |
| AI | Supported assistive features | Human approval, source grounding, no invented results |
| Integration | SAP Integration Suite or supported APIs as justified | Retry, idempotency, monitoring |
| Security | SSO, role-based permissions and audit | Confidential objectives and cross-team visibility |

## Core data objects
Objective ID; parent/linked objective; owner; team; cycle; KR ID; metric definition; unit; baseline; target; actual; confidence; source system; timestamp; dependency; check-in; approver; audit event.

## Architecture decisions
ADR01 OKR vs KPI vs MBO semantics; ADR02 cascading vs alignment; ADR03 SAP native vs specialist buy; ADR04 metric system of record; ADR05 employee performance boundary; ADR06 update cadence; ADR07 scoring and confidence; ADR08 confidential strategy; ADR09 AI and quality controls; ADR10 migration/exit.

## Anti-patterns
Treating every task as a key result; measuring outputs instead of outcomes; forced goal cascading; automated OKR-to-bonus conversion; unverified manual actuals; reporting green status despite blocked dependencies; assigning HR system as master for financial KPIs.

## Integration experiment
A strategic revenue objective links a sales conversion KR from CRM and margin KR from S/4HANA/SAC; a team objective aligns to it. Weekly check-in shows source timestamp, variance and corrective experiment, without writing KPI values back into the wrong source.
