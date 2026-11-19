# C06 SAP-First Architecture and Governance

## Logical flow
SAP SuccessFactors Recruiting requisition + job competencies → candidate consent → interview scheduling → AI-assisted question draft (licensed/configured) → human-reviewed structured interview → assessment vendor via approved integration → interviewer ratings and assessment results → controlled feedback insights → human hiring panel decision → audited ATS status.

## Capability layers
| Layer | SAP reference | Specialist integration / control |
|---|---|---|
| Requisition/competencies | SuccessFactors Recruiting | Approved job analysis and rubric |
| Interview scheduling | Recruiting / Microsoft Teams where configured | Calendar, time zone, accessibility |
| Question generation | SAP Business AI assisted interview questions | AI units, permissions, feature flags; human review |
| Interview evidence | Interview Central and feedback workflow | Consent-based recording/transcription where vendor contracted |
| Assessments | Approved third-party provider | Validity, reliability, norm groups, accommodations |
| Result integration | Supported Recruiting integration or middleware | Candidate/requisition keys, retries, audit |
| Feedback synthesis | Supported AI interview feedback insights | Human correction, no opaque rejection |
| Security/privacy | Recruiting permissions, IAM and policy | Minimal data, retention, restricted roles |
| Decision | Recruiter/hiring panel | Documented human approval and appeal path |

## SAP feature prerequisites
SAP Help identifies AI unit licensing, enabled AI services settings, interview settings, relevant AI permissions and Microsoft Teams integration for assisted interview questions. Feedback insights also have permissions and feature enablement prerequisites. Verify current tenant release, SKU and availability before a live demo.

## Integration contract
Candidate ID | Requisition ID | Assessment request ID | Consent reference | Assessment type/version | Start/completion time | Result and confidence | Accommodations (restricted) | Reviewer | Audit ID | Error status. Use idempotent event handling, signed vendor contracts, monitored retries and reconciliation.

## Security and AI control gates
1. Approved job-related criteria and validation evidence before assessment use.
2. Notice, consent and optional recording controls.
3. Restricted access to scores, transcripts and sensitive candidate data.
4. No protected-attribute inference, emotion inference or unsupported personality claims.
5. Human review of generated questions and feedback; corrections traceable.
6. Independent adverse-impact review and reasonable accommodation.
7. No AI-only shortlisting/rejection; hiring panel remains accountable.
8. Retention, deletion, legal hold and residency per jurisdiction.
9. Vendor audit, model changes and subprocessor register.
10. Negative tests for prompt injection, hallucination and unsupported conclusions.

## Architecture decisions
ADR01 SAP feature vs specialist buy | ADR02 assessment validity | ADR03 integration ownership | ADR04 recording consent | ADR05 fairness monitoring | ADR06 AI entitlements | ADR07 data residency | ADR08 candidate identity | ADR09 human oversight | ADR10 five-year TCO.

## Example business cases
Graduate cognitive assessment; engineering coding challenge; frontline situational judgment; leadership structured interview; multilingual candidate accommodation; AI-assisted human interviewer with evidence-backed scoring.
