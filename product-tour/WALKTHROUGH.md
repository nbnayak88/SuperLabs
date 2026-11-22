# Self-guided product tours: observation and working prototype

SuccessLabs Academy | 22 November 2026 | Desktop browser inspection

## What was inspected

Source: [SAP Ariba Contract Intelligence by Icertis product tour](https://www.sap.com/india/products/spend-management/ariba-contract-intelligence-by-icertis/product-tour.html).

The public tour was opened, its cookie notice dismissed, Start Tour clicked, and its chapter navigation followed through the final completion panel. Restart and Enlarge were also exercised. This was inspection of the marketing tour, not a test of the underlying enterprise product.

## The visitor's sequence

1. Open the overview. Read the short introduction and see the portfolio image. Health: clear entry.
2. Click Start Tour. The first chapter expands and its first product image appears. Health: working.
3. Read one explanation; inspect the accompanying view. Health: concise; screenshot text can be small.
4. Use the right arrow to advance. The counter, explanation and product image change together. Health: working; image loading and animation can lag the text.
5. Use the left arrow to revisit. Chapter boundaries are linked in both directions. Health: working; first step has Previous disabled.
6. Select a chapter heading to jump directly. Health: working; the selected chapter starts at its first step.
7. Select Enlarge for a larger image. Health: working; a lightbox offers close and zoom/pan instructions.
8. Continue through the final chapter. Health: working; fifth position is a completion transition using the preceding image and text.
9. Read the final next-step panel. It offers a demo request, product page and restart. Health: clear next action. No demo request was submitted.
10. Choose Start tour again. Health: working; returns to the first creation step, rather than the overview.

## Every source tour position

These are brief descriptions of observed positions, not claims that the product functions were executed.

| Journey | Chapter step | Observed subject | Health |
| --- | --- | --- | --- |
| 01 | Create 1/4 | Source-data handoff | Navigated |
| 02 | Create 2/4 | Template selection | Navigated |
| 03 | Create 3/4 | Clause assembly | Navigated; stable screenshot incomplete |
| 04 | Create 4/4 | Bilingual document | Navigated |
| 05 | Collaborate 1/6 | Team conversation | Navigated |
| 06 | Collaborate 2/6 | Version comparison | Navigated |
| 07 | Collaborate 3/6 | Assisted redlining | Navigated |
| 08 | Collaborate 4/6 | Shared authoring | Navigated |
| 09 | Collaborate 5/6 | Reviewer groups | Navigated |
| 10 | Collaborate 6/6 | Supplier negotiation | Navigated |
| 11 | Approve 1/4 | Clause deviations | Navigated |
| 12 | Approve 2/4 | Risk signals | Navigated |
| 13 | Approve 3/4 | Final comparison | Navigated |
| 14 | Approve 4/4 | Approval routing | Navigated |
| 15 | Manage 1/5 | Obligation ownership | Navigated |
| 16 | Manage 2/5 | Contract questions | Navigated |
| 17 | Manage 3/5 | Role-focused dashboard | Navigated |
| 18 | Manage 4/5 | Linked amendments | Navigated |
| 19 | Manage 5/5 | Renewal and closure | Navigated |
| 20 | Connect 1/5 | Sourcing award | Navigated |
| 21 | Connect 2/5 | Commercial line items | Navigated |
| 22 | Connect 3/5 | Purchasing handoff | Navigated |
| 23 | Connect 4/5 | Price compliance | Navigated |
| 24 | Connect 5/5 | Completion transition | Navigated; same preceding image/text, completion panel opens |

## Why the pattern works

The visitor controls the pace and can choose a relevant chapter without waiting for a presenter. The left panel holds the explanation while the right panel supplies visual evidence. Local step counts make each chapter feel bounded. The larger view helps with dense enterprise screens. The ending connects exploration to an appropriate follow-up.

The mechanism is a guided presentation of product states. In the flow inspected, advancing the tour does not require operating the product UI inside its images. This reduces preparation and presenter dependence, while keeping visitors on a deliberately chosen story.

## What this prototype recreates

Five chapter groups, 24 positions (4 / 6 / 4 / 5 / 5), a single expanded chapter, synchronized narrative and product view, Previous/Next, chapter jumps, Enlarge, final completion and restart.

The sample product is OmniContract, with a fictional OmniVerse Energy services agreement. Screens are original semantic HTML, with fictional people and records. SAP/Icertis logos and proprietary screens are not distributed as prototype assets. SuccessLabs branding and locally served Comfortaa replace the reference's branding and typography. No live AI, signature, supplier messaging or contract processing is provided.

The final prototype position has an explicit journey summary instead of repeating the preceding commercial screen. The tour's progress indicator represents the current position, not mastery or proof that every step was studied. There is no data collection or backend submission.

## Reusable product-tour architecture

| Layer | Purpose | Current implementation |
| --- | --- | --- |
| Product story | Role, problem and outcome | Fictional procurement journey |
| Chapter model | A bounded set of capabilities | `src/tour.js` |
| Step model | Title, short explanation and screen label | Original content arrays |
| View layer | The relevant product state | `ProductScreen` in `src/App.jsx` |
| Tour controller | Current step and chapter navigation | React state with chapter offsets |
| Inspection layer | Larger product view | Native dialog with zoom controls |
| Ending | Meaningful next action and restart | Completion and planning dialogs |

For a new innovative product, keep the controller and replace the story, chapter data and screen components. Choose the role and outcome first. Give every step one question it answers and one screen that demonstrates the answer. Make realistic data and business decisions visible. An actual sandbox, analytics, progress persistence, personalization or sales handoff can be added separately when its purpose is agreed.

## Evidence and limits

Desktop source navigation was observed through all 24 positions. Key screenshots and DOM observations were collected; several rapid-transition captures showed loading states and were rejected as stable visual evidence. This is not a complete 24-screen visual-fidelity audit. The source used approximately 20px chapter headings in its own 72 Brand typeface, a blue active rail and a large right-hand screenshot card.

A full-page screenshot operation changed the source's viewport and reset the tour to overview; that observation is specific to this browser capture, not proof that ordinary user scrolling resets it. The prototype was tested in a 390 × 844 CSS-pixel embedded viewport, including tour entry and chapter selection, without horizontal page overflow. This verifies responsive layout, not a physical mobile device. Source mobile capture could not be verified: the available browser did not expose viewport emulation, and its developer tools were blocked by organization policy. No restriction was bypassed.

Local prototype preview was verified at the managed preview address. The `terminal.local` alias failed; the preview service's returned address worked. Browser screenshots and interaction observations, rather than build output alone, were used for prototype verification. See `design-qa.md` for the final check results and remaining mobile limitation.

## Run and publish

From `source/`, run `npm install` and `npm run dev`. `npm run build` produces the static client in `dist/client`. The published GitHub Pages folder contains the static client, its local font/logo assets, this walkthrough, QA notes and the editable source. Vite uses a relative base so it works beneath a repository subpath. No account keys are embedded.
