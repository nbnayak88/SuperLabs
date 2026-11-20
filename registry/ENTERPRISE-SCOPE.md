# Phase 1 — Seven-Academy Enterprise Scope

**Architecture:** 20 canonical SuperLabs × 7 enterprise academies, with zero duplicated lab engines.

## Registries
- [20 canonical labs](labs.json)
- [7 enterprise academies](academies.json)
- [Reusable activity contract](../schemas/activity-contract.schema.json)
- [Domain-agnostic context mapping schema](../schemas/context-mapping.schema.json)

## Domain codes
| Code | Academy | Weekly theme |
| --- | --- | --- |
| HR | Human Capital Capability Academy | Workforce Monday |
| CX | Customer Experience Capability Academy | Revenue Tuesday |
| FI | Finance Capability Academy | Finance Wednesday |
| PROC | Procurement Capability Academy | Procurement Thursday |
| SCM | Supply Chain Management Capability Academy | Supply Chain Friday |
| BTM | Business Transformation Management Capability Academy | Strategy Saturday |
| LIT | Leadership Capability Academy | Source Sunday |

## Separation of responsibilities
- **SuperLabs** owns the lab identity, reusable methodology, templates, assessment contract and future engines.
- **Academy** owns its curriculum streams, case studies, sector scenarios, levels, learning formats and contextual content packs.
- **Mapping registry** references a lab ID plus context dimensions. It never forks or copies a lab.
- **Learning Township** consumes mapping records and deep-links to the canonical SuperLabs implementation when available.

## Important scope constraints
- All seven academy IDs are registered; this does **not** mean their stream-by-stream mappings are finished.
- The Township folder names in `academies.json` are *unverified candidates*, not validated live paths. Resolve exact folders before Phase 2 linking.
- All 20 labs remain scaffolds unless independently validated; planned subdomains are not guaranteed deployed endpoints.
- Do not infer every academy has exactly 12 implemented streams or identical content; inspect each academy first.
- Avoid 20×7 cloned folders. Future context packs can be maintained by academy and reference lab IDs.

## Phase 1 acceptance
- Seven unique academy IDs: HR, CX, FI, PROC, SCM, BTM, LIT.
- Twenty unique canonical lab IDs SL01–SL20 shared by all seven.
- JSON Schema contract for a future academy/stream/sector/level/format mapping.
- Zero existing academy folders or lab engines modified by this expansion.

## Phase 2 boundary
Inventory exact Learning Township academy folders, then build mapping records incrementally. Begin with HR as the pilot while keeping the mapping schema domain-agnostic.
