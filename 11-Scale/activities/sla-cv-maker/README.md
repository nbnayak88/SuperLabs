# SLA CV Maker — Architecture-Led Two-Page CV Activity

**Lab:** [SCALE — School of Career Acceleration Lab for Excellence](../../README.md) (Lab 11)  
**Type:** Activity + reusable Claude skill (`sla-cv-maker`)  
**Status:** Working method. Documentation and skill definition only; no hosted application is implied.

**SuccessLabs Academy** — *Architecting Experiences for a Better World*

## Challenge

Turn one master CV into a tailored, ATS-friendly, **exactly two-page** Word CV for any target role or topic, while keeping every verified fact intact and positioning the candidate through an **architecture lens**.

## Target audience and level

- Working professionals and students in SAP, Workday, Oracle and other enterprise-technology tracks moving from execution toward architectural roles.
- Level: Silver to Diamond (applies the Consultant-to-Architect positioning in job applications).

## Prerequisites

- A master CV in Word with a designed banner (name, title, contact details) and a bulleted body.
- A target job description, role title or topic.
- Verified career facts: employers, dates, clients, certifications, education, memberships.

## Duration

20 to 30 minutes per tailored CV, including the review pass.

## Inputs

| Input | Purpose |
|---|---|
| Master CV (`.docx`) | Source of all common content and the visual template |
| Job description or topic | Decides what leads each section |
| Years of experience (optional) | Stated in the summary; flagged if it conflicts with the dates |

## Steps

1. **Read the role.** List the primary modules, tools and deliverables in the job description.
2. **Set the title.** Update the banner title with seniority, role and topic keywords.
3. **Apply the architecture lens.** Add solution, enterprise and integration architecture framing to the summary, competencies and each role: design authority, target-state roadmaps, standards and governance, modelling and EA tooling, extension decisions, mentoring.
4. **Lead with the topic.** Put the JD's primary skills first in the summary, in the Core Competencies, and as the first bullets under each role. Keep all other modules lower down; never delete them.
5. **Protect the common content.** Employers, dates, client lists, education, certifications and memberships stay as in the master CV. Only order and emphasis change.
6. **Build in place.** Edit the master CV's own XML so the banner, fonts and layout survive. Replace oversized picture bullets with small text bullets.
7. **Fit two pages.** Page 2 should be at least about 80 percent full and must not spill to a third page. Shorten wording before removing content.
8. **Validate and render.** Validate the `.docx`, render both pages and check the banner, bullet size and page breaks.
9. **Publish the online version.** In the same run, generate an interactive GitHub Pages CV (focus filters, search, expandable roles, dark mode, save as PDF) from the final `.docx` using [`make_page.py`](../../templates/sla-cv-maker/make_page.py), omit phone, email and named clients by default, add it to the online CV index and publish it.
10. **Review claims.** List bullets phrased from adjacent experience and any years-versus-dates gap for the candidate to verify before sending.

## Output artifact

`<Name>_<Role_Topic>_CV.docx` — two pages, same design as the master CV.

Also produced in the same run: an interactive online version under [`cv/`](../../cv/README.md) (public-safe: no phone, email or named clients).

Deliver the Word file as `.docx` only. Converting a designed banner to `.doc` drops the banner and contact text; if a portal requires `.doc`, use Save As → Word 97-2003 in Word.

## Assessment rubric

| Criterion | Excellent (3) | Adequate (2) | Needs work (1) |
|---|---|---|---|
| Role fit | JD keywords lead summary, competencies and every role | Keywords present but not leading | Generic CV |
| Architecture lens | Architecture framing in every section, supported by real history | Architecture in summary only | Execution-only tone |
| Fact integrity | No invented metrics, clients or certifications | Minor unverified phrasing flagged | Unverified claims present |
| Online version | Interactive page published in the same run, identical content, tested in a browser, no personal contact data | Page published with minor drift | Missing or leaking private data |
| Layout | Exactly two pages, page 2 mostly full, banner intact | Two pages, uneven fill | Spills to a third page or damaged banner |
| Review hygiene | Verification list delivered with the file | Partial list | None |

## Measurable outcomes

- Pages: exactly 2.
- Online versions published per run: 1, with 0 phone numbers or email addresses on the page.
- Common-content items retained: 100 percent (employers, dates, clients, education, certifications, memberships).
- Invented figures or credentials: 0.
- JD primary skills appearing in the first bullet of each role: all roles.

## Reflection prompts

- Which bullets did you phrase from adjacent experience, and can you defend each one in an interview?
- What architecture decisions, standards or roadmaps can you add evidence for?
- Which modules did you push down, and would the next role need them first?

## Assets in this repository

- [`cv/`](../../cv/README.md) — published interactive online CVs.
- [`templates/sla-cv-maker/make_page.py`](../../templates/sla-cv-maker/make_page.py) — generator for the interactive page.
- [`templates/sla-cv-maker/SKILL.md`](../../templates/sla-cv-maker/SKILL.md) — the Claude skill definition, with personal details replaced by placeholders.

## Reuse notes

- Keep the master CV and its personal data private; supply it at run time instead of committing it here.
- Sector, platform and vendor context should come from interchangeable content packs, not hardcoded text.

[← SCALE lab](../../README.md) · [SuperLabs 20 directory](../../../README.md)
