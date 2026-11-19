# C16 — SAP-first Reference Architecture

Employee Central identity → SAP Learning catalog/transcript → approved skills profile → SAP learning UX or optional LXP → search/recommendations → pathway and social learning → launch → completion reconciliation → validated skills evidence and analytics.

| Layer | Reference | Control |
|---|---|---|
| Identity | Employee Central | Effective-dated employment |
| LMS | SuccessFactors Learning | Formal transcripts and certification |
| Skills | Talent Intelligence Hub | Provenance and verification |
| LXP | SAP UX or specialist | Discovery and curation |
| Content | Licensed providers | Rights and entitlements |
| Collaboration | Approved communities | Moderation |
| Integration | APIs / SAP Integration Suite | SSO, retry, idempotency |
| Analytics | Restricted reporting | Engagement versus proficiency |
| AI | Approved assistance | Explainability and human override |

Data: person ID, content ID/version, provider, entitlement, skill ID, pathway, recommendation reason, completion source, evidence, consent and audit event.

ADRs: LXP necessity, LMS authority, rights, skills, AI, reconciliation, moderation, privacy, analytics, integration, migration, exit.

Negative tests: hallucinated course, unlicensed content, duplicate completion, stale links, unauthorized manager access, unsupported skill claims.