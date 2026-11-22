# Sales Product Tour — Observed Journey and SuccessLabs Adaptation

Source: https://www.sap.com/india/products/erp/s4hana/features/sales/product-tour.html

Inspection and authoring: 23 November 2026 (Asia/Kolkata).

## Purpose and outcome

A sales operations learner should be able to follow one customer promise across commercial and operational handoffs, inspect the evidence behind a decision and choose a useful next question without a presenter. The prototype uses Riya Sen, a fictional sales operations lead at OmniWorks Industrial Systems, serving fictional Northstar Utilities.

## Observed source journey

The source desktop entry provides an overview, Start the tour, six chapter controls and a large screenshot. Start opens Customer order management at 1/9. Next traverses 41 positions, with local counts of 9 / 7 / 6 / 4 / 6 / 9. A direct chapter selection starts at its first position. Previous from Billing 1/7 returned to Customer order management 1/9 in the observed run, rather than its last position. Previous from the first order position returned to Overview. These source behaviors are recorded as observed, not normalized.

Enlarge opens the current screenshot over a dark overlay, with Close returning focus to Enlarge. No enterprise operation was executed: the source is a visual presentation. The final analytics position repeats the preceding explanation and bottleneck image, disables Next and presents a next-step panel with demo, product exploration and restart actions. Restart returns to Customer order management 1/9. No demo request form was submitted.

### Evidence scope

E1: entry DOM and desktop image. E2: enlarged first order state and closed state. E3–E8: sequential chapter DOM observations. E9: settled desktop endpoint images for Orders 9/9, Billing 7/7, Returns 6/6, Pricing 4/4 and Rebates 6/6. E10: final Analytics 9/9 image and completion dialog. E11: restart, first-position Previous and chapter jump/back checks. These references identify the current-run browser observations; proprietary source screenshots are not redistributed in the public repository. Source mobile was not tested.

All positions below were reached and their text/counters observed. DOM readings sometimes preceded the settled image. In particular, a rapid order navigation capture showed 7/9 while the latest DOM reported 9/9; that image was rejected as evidence for 9/9, and a later settled screenshot confirmed 9/9. Intermediate image-by-image fidelity is unverified. Only the specified key states received settled visual inspection.

### Position ledger and mapping

Labels below are short paraphrases of the observed topic, not copied marketing descriptions. Prototype screens and explanations are original and may deliberately change emphasis.

| Position | Source chapter/local step | Visitor action | Source topic / visible result | Evidence and status | Original prototype screen |
| --- | --- | --- | --- | --- | --- |
| 1 | Customer order management 1/9 | Start | PDF extraction | E3; text/counter observed | Request extraction |
| 2 | Customer order management 2/9 | Next | Incomplete order | E3; text/counter observed | Order completeness |
| 3 | Customer order management 3/9 | Next | Order workspace | E3; text/counter observed | Order worklist |
| 4 | Customer order management 4/9 | Next | AI summary | E3; text/counter observed | Prepared order brief |
| 5 | Customer order management 5/9 | Next | Teams sharing | E3; text/counter observed | Collaboration brief |
| 6 | Customer order management 6/9 | Next | Process visualization | E3; text/counter observed | Order process |
| 7 | Customer order management 7/9 | Next | Lead capture | E3; text/counter observed | Lead context |
| 8 | Customer order management 8/9 | Next | Sales quotation | E3; text/counter observed | Quote review |
| 9 | Customer order management 9/9 | Next | Account order preview | E3 + E9; text/counter observed | Account order preview |
| 10 | Billing and invoicing 1/7 | Next | Billing documents | E4; text/counter observed | Billing worklist |
| 11 | Billing and invoicing 2/7 | Next | Billing due list | E4; text/counter observed | Billing due list |
| 12 | Billing and invoicing 3/7 | Next | Billing schedule | E4; text/counter observed | Billing schedule |
| 13 | Billing and invoicing 4/7 | Next | Preliminary bill | E4; text/counter observed | Preliminary invoice |
| 14 | Billing and invoicing 5/7 | Next | Split analysis | E4; text/counter observed | Split review |
| 15 | Billing and invoicing 6/7 | Next | Accounting handoff | E4; text/counter observed | Accounting handoff |
| 16 | Billing and invoicing 7/7 | Next | Journal drill-down | E4 + E9; text/counter observed | Journal trace |
| 17 | Customer returns 1/6 | Next | Return initiation | E5; text/counter observed | Return case |
| 18 | Customer returns 2/6 | Next | Referenced return | E5; text/counter observed | Referenced return |
| 19 | Customer returns 3/6 | Next | Return indicators | E5; text/counter observed | Return trends |
| 20 | Customer returns 4/6 | Next | Logistics decision | E5; text/counter observed | Return logistics |
| 21 | Customer returns 5/6 | Next | Credit request | E5; text/counter observed | Credit request |
| 22 | Customer returns 6/6 | Next | Credit process | E5 + E9; text/counter observed | Return process |
| 23 | Price management 1/4 | Next | Price records | E6; text/counter observed | Price condition |
| 24 | Price management 2/4 | Next | Condition data | E6; text/counter observed | Pricing calculation |
| 25 | Price management 3/4 | Next | Mass changes | E6; text/counter observed | Mass-change review |
| 26 | Price management 4/4 | Next | Excel import | E6 + E9; text/counter observed | Import preview |
| 27 | Sales rebate management 1/6 | Next | Agreement controls | E7; text/counter observed | Rebate agreement |
| 28 | Sales rebate management 2/6 | Next | Agreement flow | E7; text/counter observed | Rebate process |
| 29 | Sales rebate management 3/6 | Next | Accruals | E7; text/counter observed | Accrual calculation |
| 30 | Sales rebate management 4/6 | Next | Eligible volume | E7; text/counter observed | Eligible sales |
| 31 | Sales rebate management 5/6 | Next | Settlement summary | E7; text/counter observed | Settlement review |
| 32 | Sales rebate management 6/6 | Next | Agreement overview | E7 + E9; text/counter observed | Agreement portfolio |
| 33 | Sales analytics 1/9 | Next | Sales cockpit | E8; text/counter observed | Sales overview |
| 34 | Sales analytics 2/9 | Next | Solution value | E8; text/counter observed | Solution-order analysis |
| 35 | Sales analytics 3/9 | Next | Customer documents | E8; text/counter observed | Customer document view |
| 36 | Sales analytics 4/9 | Next | Incoming trend | E8; text/counter observed | Incoming order trend |
| 37 | Sales analytics 5/9 | Next | Sales volume | E8; text/counter observed | Sales volume bridge |
| 38 | Sales analytics 6/9 | Next | Prediction comparison | E8; text/counter observed | Projection review |
| 39 | Sales analytics 7/9 | Next | Plan comparison | E8; text/counter observed | Plan versus actual |
| 40 | Sales analytics 8/9 | Next | Demand bottlenecks | E8; text/counter observed | Demand bottlenecks |
| 41 | Sales analytics 9/9 | Next | Repeated end state | E8 + E10; text/counter observed | Connected sales review |

## Why this works without a product expert

The visitor chooses the pace and chapter. Each explanation accompanies a visible state, and Previous permits reconsideration. The next-step panel makes the ending explicit. A facilitator could add questions, context and live system execution; the visual tour itself supplies neither configuration practice nor evidence that the learner can perform a task.

## Original adaptation and intentional changes

The SuccessLabs version preserves overview, Start, direct chapter access, synchronized explanation and view, local and overall counters, Previous/Next, enlarge/zoom/close and restart. It uses original HTML tables and fictional records instead of distributing SAP images. It retains the source chapter counts for a clear mapping while authoring its own narrative. The final repeated image is replaced with an explicit connected-sales review. Previous is disabled at the first position and moves to the preceding chapter's final position at boundaries. Restart returns to the first order step. The final dialog says the final review was reached; it does not certify mastery or all-step visitation.

Three experiments operate entirely in the browser: filter orders needing attention, vary the sample per-kit discount and recalculate the net value, and change eligible sales volume to compare a 2% rebate accrual. Reference tables keep their labelled base values. AI-style extraction and summaries are prewritten illustrations. There is no SAP, Teams, pricing import, accounting, returns, settlement or messaging backend.

Official local logo, Comfortaa fonts with their license, exact tagline, centered original quote and 6px header reading-position bar follow the SuccessLabs visual standard. Reading position and journey position are separate and neither is a mastery score.

## Reusable learning blueprint

1. Choose a role, a business problem and a visible outcome.
2. Organize chapters around decisions and handoffs.
3. Author one short explanation and one meaningful state for each position.
4. Use realistic fictional data and make planned versus completed actions explicit.
5. Keep content data, view rendering and the navigation controller separate.
6. Test all positions and boundaries, direct selection, keyboard dialogs, narrow layout and restart.
7. Link to the source, record evidence limits and publish only original or authorized assets.

## Editable implementation

`src/tour.js` contains chapter data, step explanations and sample views. `src/App.jsx` renders the product and navigation. `src/styles.css` holds styling. Run `npm ci`, `npm run build` and `npm run test:sites`; the static client is in `dist/client/`. GitHub Pages uses relative assets under `sales-product-tour/`. All earlier tours are preserved.

Publication and validation outcomes are recorded in design-qa.md and LINKS.md after deployed checks.
