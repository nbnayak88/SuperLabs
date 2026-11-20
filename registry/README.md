# SuperLabs 20 — Phase 1 Canonical Registry

## Purpose
This directory is the machine-readable source of truth for 20 shared SuperLabs. It does not claim 20 deployed applications.

## Files
- `labs.json`: immutable IDs SL01–SL20, current official names, acronyms, folders and planned URLs.
- `../schemas/activity-contract.schema.json`: reusable activity contract for future implementations.

## Rules
1. **One lab, many contexts:** keep shared methods, engine and templates in SuperLabs; add domain-specific content packs by reference.
2. **No duplication:** Learning Township references lab IDs and content-pack paths. Never copy lab implementations into HR01–HR12 or GICS folders.
3. **Identity stability:** IDs are permanent. Do not renumber when display names change. Treat name changes as versioned governance decisions.
4. **Separation of concerns:** academy/stream/sector/level/format/platform/case study are context dimensions, not new labs.
5. **Honest status:** `scaffold`, `prototype`, `tested`, and `live` are distinct. Planned URLs are not verification of deployment.
6. **Assessment:** activities must define inputs, steps, artifacts, rubric, measurable outcomes and reflection prompts. Rubric weights should total 100.
7. **Compatibility:** preserve existing lab folders and their README links; do not rename or move existing packs.
8. **Validation:** enforce 20 unique IDs, 20 unique folder paths, matching folder numbering, valid schema, and no broken referenced content packs before publication.

## Next phase
Create the HR12 cross-mapping in Learning Township referencing these canonical IDs. Pilot HR02 with an existing Presales Precision Lab content pack. No HR stream folder changes are required in Phase 1.
