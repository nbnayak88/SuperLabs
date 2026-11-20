# Phase 2 — Cross-Academy SuperLabs Mapping

## Verified inventory
Seven Learning Township academy directories were inspected. Each contains 12 workstream directories: 84 streams total.

## Published mapping registries
- [HR — 12 streams](./hr.json) — Township: `01-HR-Human-Capital-Capability-Academy-Workforce-Monday`
- [CX — 12 streams](./cx.json) — Township: `02-CRM-Customer-Experience-Capability-Academy-Revenue-Tuesday`
- [FI — 12 streams](./fi.json) — Township: `03-FI-Finance-Capability-Academy-Finance-Wednesday`
- [PROC — 12 streams](./proc.json) — Township: `04-PROC-Procurement-Capability-Academy-Procurement-Thursday`
- [SCM — 12 streams](./scm.json) — Township: `05-SCM-Supply-Chain-Management-Capability-Academy-Supply-Chain-Friday`
- [BTM — 12 streams](./btm.json) — Township: `06-BTM-Business-Transformation-Capability-Academy-Transformation-Saturday`
- [LIT — 12 streams](./lit.json) — Township: `07-LIT-Leadership-and-Identity-Transformation-Capability-Academy-Source-Sunday`

## How to consume
1. Read `registry/labs.json` for SL01–SL20 identities.
2. Read `registry/academies.json` for the academy and its verified Township directory.
3. Read `mappings/<academy-id>.json` for the 12 stream folders, proposed core labs, and other available labs.
4. Render canonical SuperLabs links using the lab's existing `folder` property. Never copy the lab implementation into Township.
5. Treat priorities as recommendations until curriculum owners review them. No activity/content-pack/sector/level mapping has yet been implemented.

## Scope and quality gates
- 7 academies × 12 actual streams = 84 mapped streams.
- Each stream references four suggested core labs and the remaining 16 as available, with no lab duplication.
- Mapping priority and domain content packs are **not** proof of functioning interactive activities.
- No GitHub Pages route, deep link, navigation integration or activity assessment was deployed by this phase.
- Next implementation increment: curriculum review of suggested priorities, per-sector/level context packs, and consumer navigation integration in Learning Township.
