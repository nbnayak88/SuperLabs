# C17 — SAP-first Skills Architecture

Employee Central identity/job → role skill requirements → Talent Intelligence Hub ontology → self-declared/inferred/assessed signals → evidence and confidence validation → governed Growth Portfolio → Learning, career development and mobility → workforce analytics.

| Layer | Reference | Control |
|---|---|---|
| Identity | Employee Central | Effective-dated worker and role |
| Skills | Talent Intelligence Hub | Taxonomy and stewardship |
| Profile | Growth Portfolio | Employee review and correction |
| Inference | Licensed SAP/partner AI | Confidence, lineage, bias testing |
| Verification | Assessment/manager/credential | Evidence and expiry |
| Learning | SuccessFactors Learning | Skill gap pathways |
| Mobility | Opportunity Marketplace / partner | Explainable matching |
| Integration | APIs / SAP Integration Suite | Idempotency, monitoring |
| Analytics | Authorized reports | Aggregate gaps and quality |

Contract: person ID, employment ID, role, skill ID, taxonomy version, proficiency, evidence type/source, confidence, validation status, assessor, last validated, expiry, consent and audit.

ADRs: ontology ownership, evidence standard, inference threshold, employee appeal, fairness, SAP integration, privacy, analytics, migration and exit.

Negative tests: hallucinated certification, duplicate synonym, biased recommendation, stale evidence, unauthorized manager access and automated promotion from inferred skill.