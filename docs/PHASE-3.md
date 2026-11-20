# Phase 3 — Seven-domain contextual starter packs and shared explorer

## Published assets
- [Shared explorer](../explorer.html) — static HTML application that reads registry, mappings and context packs.
- [Academy registry](../registry/academies.json) and [canonical lab registry](../registry/labs.json).
- Seven content packs: `content-packs/{HR,CX,FI,PROC,SCM,BTM,LIT}/starter-activities.json`.
- 84 starter activities: 12 for each of seven verified academy streams.

## Usage
Open `explorer.html` through a web server rooted at the SuperLabs repository. Select academy, stream and SuperLab. The page fetches the JSON files and displays suggested core labs and a contextual starter activity. Local `file://` access may block fetch; a hosted static site is required for normal browser use.

## Evidence and scope
- All starter activities are **draft learning-design scaffolds**, not production-ready interactive lab engines.
- Activities use one suggested core lab each, with other canonical labs accessible in the explorer.
- The activity packs currently contain generic challenge framing tailored by workstream title; enterprise case evidence, detailed platform walkthroughs and learner testing are pending.
- Sector-, level- and format-specific packs are future expansions, not 84×11×6×8 pre-generated duplicates.
- This phase does not edit Learning Township pages or deploy a verified GitHub Pages site.

## Validated in this phase
- 7 academy mapping files × 12 streams each = 84 stream IDs.
- 7 starter packs × 12 activities each = 84 activities.
- Each activity's stream matches the corresponding mapping, and its lab is in that stream's core list.
- All assessment rubric weights sum to 100.
- `explorer.html` was read back from GitHub after commit.

## Next acceptance gates
1. Verify GitHub Pages publishing and browser loading.
2. Add navigation links from each academy's Learning Township entry page, without copying labs.
3. Review priority recommendations with domain owners.
4. Create rich sector-specific case packs and hands-on assessments; test actual learner flows.
