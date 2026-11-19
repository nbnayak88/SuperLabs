# C06 — 20-Test POC and Decision Record

**Pilot assumptions:** 2–4 weeks, 50 fictional applicants, 5 job families, 3 assessment types, 2 countries, 2 interview panels; nonproduction SAP tenant and approved vendor sandbox. No real candidate data.

| ID | Scenario | Pass evidence |
|---|---|---|
| P01 | Create job-linked competency rubric | Timestamped result, reviewer and exception log |
| P02 | Generate job-related interview questions and review them | Timestamped result, reviewer and exception log |
| P03 | Reject inappropriate AI-generated question | Timestamped result, reviewer and exception log |
| P04 | Run structured panel interview | Timestamped result, reviewer and exception log |
| P05 | Capture independent interviewer ratings | Timestamped result, reviewer and exception log |
| P06 | Generate AI feedback summary and correct error | Timestamped result, reviewer and exception log |
| P07 | Run SHL-style assessment integration contract | Timestamped result, reviewer and exception log |
| P08 | Run technical coding assessment handoff | Timestamped result, reviewer and exception log |
| P09 | Prove validated score interpretation | Timestamped result, reviewer and exception log |
| P10 | Exercise candidate accommodation route | Timestamped result, reviewer and exception log |
| P11 | Exercise interview recording opt-out | Timestamped result, reviewer and exception log |
| P12 | Block unauthorized candidate assessment access | Timestamped result, reviewer and exception log |
| P13 | Enforce consent and retention | Timestamped result, reviewer and exception log |
| P14 | Test adverse-impact monitoring and remediation | Timestamped result, reviewer and exception log |
| P15 | Override AI recommendation with human rationale | Timestamped result, reviewer and exception log |
| P16 | Replay failed assessment result without duplication | Timestamped result, reviewer and exception log |
| P17 | Reconcile candidate identity and result provenance | Timestamped result, reviewer and exception log |
| P18 | Validate multilingual candidate experience | Timestamped result, reviewer and exception log |
| P19 | Reconcile interview and assessment analytics | Timestamped result, reviewer and exception log |
| P20 | Export evidence and evaluate vendor exit | Timestamped result, reviewer and exception log |

## Proposed acceptance gates
- 100% mandatory privacy, security, consent, accommodation and human-decision tests pass.
- 100% integration failures detectable and replayable without duplicate assessment records.
- Zero AI-only rejection or unapproved automated hiring decision.
- All assessment instruments have role-relevant validity/reliability documentation or are explicitly marked unvalidated and excluded from consequential use.
- ≥95% of noncritical scripted steps completed without workaround.
- Bias and subgroup testing plan approved; do not set simplistic fairness thresholds without statistical and legal review.

## Selection gates
G1 discovery → G2 validation/legal/security → G3 SAP feature-vs-buy architecture → G4 scripted demo → G5 POC → G6 normalized RFI and five-year TCO → G7 documented executive decision.

## Decision memo template
Business case | SAP reference path | Vendor shortlist | Research evidence | Instrument validity | Human oversight | RFI weighted score | POC outcomes | Integration risk | TCO | Selection | Conditions | Signatures.

## SuccessLabs experiential lab
Fictional hiring panel simulation: candidate, interviewer, AI copilot, psychologist and privacy reviewer. Compare unstructured vs structured interviews; record evidence and debrief on fairness, validity and human accountability.
