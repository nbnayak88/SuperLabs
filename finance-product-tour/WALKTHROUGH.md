# Finance Product Tour — Walkthrough and Learning Blueprint

SuccessLabs Academy | 23 November 2026

## Source and scope

Reference: [SAP Cloud ERP Finance Product Tour](https://www.sap.com/india/products/erp/s4hana/features/finance/product-tour.html).

The desktop marketing tour was opened and followed from Start the tour through all 42 displayed positions. Chapter jumps, a backward chapter boundary, the initial Previous control, Enlarge, Close and restart were exercised. This was exploration of the guided marketing presentation; no enterprise financial operation was executed.

The original adaptation is an OmniFinance learning workspace for fictional OmniVerse Energy. It helps a finance lead connect planning assumptions, close evidence, operational balances, reporting responsibilities and cash visibility. No actual SAP system, bank, tax authority or accounting ledger is connected.

## Visitor actions and observed behavior

1. Open Overview. A short introduction accompanies an optional overview video poster.
2. Select Start the tour. Planning opens at position 1 of 8.
3. Read one explanation and inspect the synchronized screenshot. The text and image describe a chosen capability rather than a live application session.
4. Use Next Step to follow each chapter. The source chapter lengths are 8, 9, 8, 8 and 9.
5. Select a chapter directly. The observed chapter selection begins at its first position.
6. Use Previous Step to revisit. At the first tour position it remained enabled and left the position unchanged. From the first close position it returned to the first planning position in this inspection, not the last planning position.
7. Select Enlarge screenshot. The larger overlay and Close control were observed and exercised.
8. Reach treasury position 9 of 9. Its explanation and image repeat position 8 while a next-step panel opens.
9. Inspect the final panel. It offers a demo request, further finance solutions and restart. No request was submitted.
10. Select Start tour again. Planning position 1 of 8 returns.

## All observed positions and adaptation mapping

The following short capability labels are paraphrases mapped to the original sample views. Every row was navigated in the source. Current-run DOM observations establish position, narrative and image label. Key chapter-ending, entry, completion and enlarge screenshots were inspected; this is not a full 42-screen visual-fidelity audit. Intermediate image pixels were not individually verified.

| Position | Chapter/local position | Capability mapped to original view | Navigation | Observation status |
| --- | --- | --- | --- | --- |
| 01 | Plan 1/8 | Driver-based planning | Next / chapter selection | Navigated |
| 02 | Plan 2/8 | Planning calendar | Next / chapter selection | Navigated |
| 03 | Plan 3/8 | Plan version comparison | Next / chapter selection | Navigated |
| 04 | Plan 4/8 | Variance review | Next / chapter selection | Navigated |
| 05 | Plan 5/8 | Connected profitability | Next / chapter selection | Navigated |
| 06 | Plan 6/8 | Profitability drill-down | Next / chapter selection | Navigated |
| 07 | Plan 7/8 | Overhead allocation | Next / chapter selection | Navigated |
| 08 | Plan 8/8 | Predictive scenario review | Next / chapter selection | Navigated |
| 09 | Close 1/9 | Parallel ledger view | Next / chapter selection | Navigated |
| 10 | Close 2/9 | Dimensional accounting | Next / chapter selection | Navigated |
| 11 | Close 3/9 | Asset valuation | Next / chapter selection | Navigated |
| 12 | Close 4/9 | Receipt reconciliation | Next / chapter selection | Navigated |
| 13 | Close 5/9 | Journal workflow | Next / chapter selection | Navigated |
| 14 | Close 6/9 | Document traceability | Next / chapter selection | Navigated |
| 15 | Close 7/9 | Close monitor | Next / chapter selection | Navigated |
| 16 | Close 8/9 | Intercompany reconciliation | Next / chapter selection | Navigated |
| 17 | Close 9/9 | Group reporting | Next / chapter selection | Navigated |
| 18 | Operate 1/8 | Receivables cockpit | Next / chapter selection | Navigated |
| 19 | Operate 2/8 | Collections worklist | Next / chapter selection | Navigated |
| 20 | Operate 3/8 | Dispute resolution | Next / chapter selection | Navigated |
| 21 | Operate 4/8 | Payables cockpit | Next / chapter selection | Navigated |
| 22 | Operate 5/8 | Discount review | Next / chapter selection | Navigated |
| 23 | Operate 6/8 | Payable ageing | Next / chapter selection | Navigated |
| 24 | Operate 7/8 | Bank processing rules | Next / chapter selection | Navigated |
| 25 | Operate 8/8 | Cash application | Next / chapter selection | Navigated |
| 26 | Comply 1/8 | Compliance cockpit | Next / chapter selection | Navigated |
| 27 | Comply 2/8 | Compliance analysis | Next / chapter selection | Navigated |
| 28 | Comply 3/8 | Statutory reporting workspace | Next / chapter selection | Navigated |
| 29 | Comply 4/8 | Electronic document review | Next / chapter selection | Navigated |
| 30 | Comply 5/8 | Electronic document flow | Next / chapter selection | Navigated |
| 31 | Comply 6/8 | Control issue review | Next / chapter selection | Navigated |
| 32 | Comply 7/8 | Reporting period review | Next / chapter selection | Navigated |
| 33 | Comply 8/8 | Submission readiness | Next / chapter selection | Navigated |
| 34 | Treasury 1/9 | Bank account overview | Next / chapter selection | Navigated |
| 35 | Treasury 2/9 | Cash-flow analysis | Next / chapter selection | Navigated |
| 36 | Treasury 3/9 | Liquidity planning | Next / chapter selection | Navigated |
| 37 | Treasury 4/9 | Payment monitor | Next / chapter selection | Navigated |
| 38 | Treasury 5/9 | Payment item flow | Next / chapter selection | Navigated |
| 39 | Treasury 6/9 | Bank communication | Next / chapter selection | Navigated |
| 40 | Treasury 7/9 | Treasury dashboard | Next / chapter selection | Navigated |
| 41 | Treasury 8/9 | Financial position review | Next / chapter selection | Navigated |
| 42 | Treasury 9/9 | Finance journey complete | Next / chapter selection | Navigated; completion panel |

## Why the tour can work without a presenter

The chapter list lets a visitor choose a relevant business area. One message and one product view reduce the amount to interpret at a time. Local counters bound each chapter; Next supports a continuous story. Enlarge supports inspection of dense screens. A final next-step panel makes it clear how to continue beyond the guided presentation.

A tour can explain a product's possibilities without proving a learner can operate the real system. Presenter-free discovery and hands-on proficiency remain different outcomes.

## What the adaptation implements

| Pattern | Finance adaptation |
| --- | --- |
| Overview entry | Original finance-workspace summary |
| Five chapter groups | Plan, Close, Operate, Comply and Treasury |
| 42 displayed positions | Counts derived from the model: 8 / 9 / 8 / 8 / 9 |
| Narrative plus screenshot | Original HTML finance views plus a short explanation |
| Direct chapter selection | Desktop accordion and compact narrow-screen selector |
| Previous and Next | Consecutive navigation across boundaries; Previous disabled at the beginning |
| Larger view | Labelled native dialog with zoom and close |
| Final panel and restart | Explicit finance summary, revisit choices and restart |

Intentional differences: the source's optional overview video is replaced with an original finance overview. The last position has a distinct connected-finance summary instead of repeating the prior treasury screen. Backward navigation follows consecutive positions across chapters. Fictional data, SuccessLabs branding and local Comfortaa replace the source's proprietary screens and corporate branding. Source screenshots and video are not redistributed as prototype assets.

## Three original learning experiments

1. Planning driver: change service volume between −20% and +20%. Revenue uses 1,000 base units at USD 12,000 each; variable cost is USD 7,000 per unit and fixed cost is USD 2m. The screen recomputes revenue, operating result and margin. At +20%, revenue is USD 14.40m, operating result USD 4.00m and margin 27.8%.
2. Receivables filter: choose all balances or overdue balances. The local display filters the fictional worklist. No collection message is sent.
3. Liquidity case: compare base receipts with a delayed-receipt illustration. Closing cash changes from USD 2.60m to USD 2.00m. This is a preconfigured local scenario, not AI forecasting.

These experiments are original additions. All values, records, internal targets, control priorities and reporting examples are fictional. No posting, payment, clearing, bank communication, tax filing, customer contact or automated financial decision occurs.

## Reusable architecture

The navigation engine is reused from the established SuccessLabs contract tour. Content and the original finance views are stored in `src/tour.js`, with one view per position. `src/App.jsx` renders the controller, accessible dialogs and local experiments. Shared experiment state keeps the normal and enlarged views consistent. Counts and chapter offsets come from data rather than repeated literals.

For another product: start with a role and a business problem; choose a visible outcome for each chapter; give each position one explanation and one relevant screen. Keep product evidence, inferred design choices and original experiments distinguishable. Treat tour position, reading progress and learning mastery separately.

## Verification and limits

Source desktop navigation reached all 42 positions. Optional video Play was activated and buffering/native controls were observed; full video playback was not evaluated. Source mobile layout was not captured. Prototype responsive checks use a 390 × 844 CSS-pixel embedded viewport, not physical-device or touch emulation.

Before handoff, verify all prototype positions, chapter jumps, both boundary directions, completion, restart, enlarge/zoom/close and the three local experiments. Check desktop and narrow layouts, locally served fonts/logo, application errors and the deployed route. See `design-qa.md` for final evidence and outcomes.

## Editable source and publication

The separate route is `finance-product-tour/` in `nbnayak88/SuperLabs`; it preserves the existing contract tour. Editable files are published in `finance-product-tour/source/`. Run `npm install`, then `npm run dev` from the source folder. `npm run build` emits `dist/client/`; publish that folder's contents. Relative assets support GitHub Pages subpaths. Keep `WALKTHROUGH.md` and `design-qa.md` with the published site.
