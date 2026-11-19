---
name: sla-cv-maker
description: Build a tailored 2-page Word CV for any role or topic from the user's master CV template, keeping their common content and putting an architecture lens on it.
---

# sla-cv-maker

Use when the user supplies a job description, role title or topic and asks for a CV, or says "curate/tailor my CV for ...". Output, in one run, is (1) one tailored two-page `.docx` built by editing the user's own master CV in place, and (2) an interactive online version of the same CV published as a GitHub Pages page.

## 1. Inputs
- Target role, topic or JD text (required). If only a title is given, infer the focus areas and proceed.
- Years of experience if stated. Use the user's number; if it conflicts with the dates on the CV, flag it in one line after delivery.
- Master CV template (`.docx`) with banner, photo and contact details. Use the copy attached in the conversation; if none, ask for it. Never rebuild the design from scratch: the banner is a grouped drawing that only survives in-place XML editing.

## 2. Common content (never remove or distort; reorder and add emphasis only)
Keep every employer, date, client list, education entry, certification and membership exactly as in the master CV. Only add emphasis and new lead bullets above the originals.
- Section order stays: Professional Summary, Core Competencies, Professional Experience, Education, Certifications, Professional Memberships, "References available upon request". Add no new sections unless asked.
- Use only the user's own facts. Do not invent employers, clients, metrics, percentages or certifications.

## 3. Tailoring rules
1. Banner title: "<Seniority> <Role> - <Topic keywords> (<N>X Certified)". Keep it to two lines.
2. Architecture lens on every CV, whatever the topic: position the user as the architect who leads the topic. Add bullets on solution and enterprise architecture, design authority, integration architecture, target-state roadmaps, standards and governance, EA tooling and modelling, clean-core and extension decisions, and mentoring delivery teams, where the history supports them.
3. Topic focus: put the JD's primary modules and skills first in the summary, in Core Competencies (as bold-labelled bullets), and as the first one or two bullets under each role. Keep all other modules, lower down.
4. Mirror the JD's keywords for ATS, phrased as delivered scope only where the history supports it.
5. Where the JD asks for something the history only loosely supports, phrase it modestly in terms of adjacent work and tell the user which bullets to verify.
6. Exactly two pages. Page 2 should be at least about 80 percent full and must not spill to a third page. If it overflows, shorten summary and competency wording before removing anything. If it is short, add JD-relevant or architecture bullets.

## 3a. Build method (edit the template XML)
1. Copy the template, unzip, read `word/document.xml`.
2. Banner title text is duplicated in both `mc:Choice` and `mc:Fallback`; replace the title text nodes so both copies change. Escape `&` as `&amp;`.
3. Replace everything from the "Professional Summary" heading paragraph to the final `<w:sectPr>` with generated paragraphs; keep the original `sectPr`.
4. Clone the template's own paragraph formatting: Heading1 for sections and jobs (with `keepNext`), BodyText for date lines, ListParagraph with `numId 1` for bullets (left 609, hanging 291), Calibri 8 pt runs with bold key terms.
5. Bullet fix: picture bullets in `word/numbering.xml` render oversized in Word. Replace level 0 with a text bullet (U+2022, Calibri, size 16) and remove `lvlPicBulletId`.
6. Zip, strip folder entries (`zip -dq out.docx '*/'`), validate, convert to PDF, confirm exactly two pages, and view both pages.

## 4. Delivery
- Send the `.docx` only. Converting to `.doc` drops the banner, photo and contact text; if a portal needs `.doc`, use Save As "Word 97-2003" in Word.
- Final message in two or three lines: what changed, and the list of bullets and claims to verify. No recap of steps.

## 4a. Online version (interactive GitHub page), same run
Always produce the interactive page together with the `.docx`; do not wait to be asked. It is a self-contained, dependency-free HTML page served by GitHub Pages, not a markdown page.
1. Generate it from the final `.docx` so the two never drift apart: `python3 11-Scale/templates/sla-cv-maker/make_page.py <final.docx> 11-Scale/cv/<slug>/index.html "<banner title>" "<years>"`.
2. The page has: hero with stat tiles, focus filter chips with counts (Employee Central, Onboarding, Offboarding, Payroll, Talent & Learning, Architecture & Integration), search, career-path stepper, expandable roles, light/dark theme and a Save-as-PDF button.
3. Public-safe by default: no phone, email or named clients. Include them only if the user explicitly asks, and say so in the final message.
4. Test it in a headless browser before publishing: filter, search, theme toggle, expand/collapse, mobile width with no horizontal overflow, no console errors. Look at screenshots.
5. Publish into the configured repository folder (`11-Scale/cv/<slug>/index.html`), update the index at `11-Scale/cv/README.md`, commit on a branch and push it to `main`. Use `git`, not the GitHub GraphQL API. Do not commit the `.docx`.
6. Give the user the live link (`https://<owner>.github.io/<repo>/11-Scale/cv/<slug>/`) and the source link. The live link needs GitHub Pages enabled once for the repository (Settings, Pages, deploy from `main` / root).

## 5. Common mistakes
- Rebuilding the CV from scratch and losing the banner and photo.
- Editing only one copy of the banner title.
- Leaving picture bullets in place.
- Dropping modules or client lists to fit space.
- Adding invented metrics or certifications.
- Ending on a third page or a nearly empty second page.
- Publishing a phone number, email address or client names on a public page.
- Creating the `.docx` but not the interactive page.
- Writing the page by hand instead of generating it from the final `.docx`.
