# Services Product Tour — Walkthrough and Learning Blueprint

Source: https://www.sap.com/india/products/erp/s4hana/features/services/product-tour.html

Inspection: 23 November 2026, Asia/Kolkata.

## Learning purpose

Help a services delivery learner connect customer commitments with project scope, capacity, solution fulfillment and billable delivery evidence. The original adaptation follows fictional Meera Rao at OmniWorks Industrial Systems, serving fictional Northstar Utilities through engagement PJ-240. No prior product expertise or sign-in is required.

## Observed source journey

The entry offers Overview, Start the tour, four chapter controls, a visual panel and business follow-up actions. Start opens customer projects at 1/8. Sequential Next visits 28 positions in four chapters, with local counts 8 / 7 / 6 / 7. Every position’s explanation and counter was read in this run. The source displays product screenshots; underlying enterprise operations were not executed.

Enlarge opens a screenshot overlay; Close returns to the tour. A capture made immediately after opening was stale and rejected; a subsequent capture confirmed the enlarged project-health state. Settled key images were inspected for project health, Projects 8/8, Resources 7/7, Bundles 6/6 and the ending. Intermediate images were not each independently verified. Source mobile was not inspected. No captured SAP images are redistributed.

The final Service 7/7 position repeats the preceding billing explanation and shows a next-step dialog over an invoicing process image. Next becomes disabled. The dialog offers demo, product exploration and restart. Restart returns to Projects 1/8. Previous at Projects 1/8 returns to Overview. Direct selection of Resources opens 1/7; Previous then returned to Projects 1/8 in this observed run. No commercial request was submitted.

## Position ledger and source-to-prototype mapping

E1: entry DOM and screenshot. E2: enlarged project-health screenshot and close. E3–E6: sequential chapter DOM observations. E7: settled chapter-end screenshots. E8: final dialog screenshot and ending DOM. E9: restart, direct selection and Previous checks. These labels refer to current-run browser observations; source captures are not public repository assets. Source topic labels below are concise paraphrases, while prototype screens and data are original.

| Position | Chapter / local position | Action | Observed source topic | Evidence / status | Original adaptation screen |
| --- | --- | --- | --- | --- | --- |
| 1 | Customer project management 1/8 | Start | Project health | E3; text/counter observed | Project health |
| 2 | Customer project management 2/8 | Next | Project details | E3; text/counter observed | Engagement brief |
| 3 | Customer project management 3/8 | Next | Template reuse | E3; text/counter observed | Template review |
| 4 | Customer project management 4/8 | Next | Work packages | E3; text/counter observed | Work packages |
| 5 | Customer project management 5/8 | Next | Costs and revenue | E3; text/counter observed | Cost and revenue plan |
| 6 | Customer project management 6/8 | Next | Contract models | E3; text/counter observed | Commercial structure |
| 7 | Customer project management 7/8 | Next | Unbilled work | E3; text/counter observed | Unbilled work review |
| 8 | Customer project management 8/8 | Next | Recognized performance | E3 + E7; text/counter observed | Project performance |
| 9 | Resource management 1/7 | Next | Staffing status | E4; text/counter observed | Staffing overview |
| 10 | Resource management 2/7 | Next | Resource requirements | E4; text/counter observed | Resource request |
| 11 | Resource management 3/7 | Next | AI resource insights | E4; text/counter observed | Prepared resource brief |
| 12 | Resource management 4/7 | Next | Resource comparison | E4; text/counter observed | Resource comparison |
| 13 | Resource management 5/7 | Next | Planned utilization | E4; text/counter observed | Capacity planning |
| 14 | Resource management 6/7 | Next | Resource profiles | E4; text/counter observed | Capability profile |
| 15 | Resource management 7/7 | Next | Utilization review | E4 + E7; text/counter observed | Utilization review |
| 16 | Bundled products and services 1/6 | Next | Mixed bundle | E5; text/counter observed | Solution bundle |
| 17 | Bundled products and services 2/6 | Next | Fulfillment links | E5; text/counter observed | Bundle fulfillment |
| 18 | Bundled products and services 3/6 | Next | Follow-up actions | E5; text/counter observed | Bundle follow-up |
| 19 | Bundled products and services 4/6 | Next | Invoice grouping | E5; text/counter observed | Billing grouping |
| 20 | Bundled products and services 5/6 | Next | Order financials | E5; text/counter observed | Bundle economics |
| 21 | Bundled products and services 6/6 | Next | Component margin | E5 + E7; text/counter observed | Bundle mix experiment |
| 22 | Service management 1/7 | Next | Service overview | E6; text/counter observed | Service overview |
| 23 | Service management 2/7 | Next | Order details | E6; text/counter observed | Service order details |
| 24 | Service management 3/7 | Next | Confirmations | E6; text/counter observed | Service confirmation |
| 25 | Service management 4/7 | Next | Contract terms | E6; text/counter observed | Service contract |
| 26 | Service management 5/7 | Next | Billing release | E6; text/counter observed | Billing release |
| 27 | Service management 6/7 | Next | Billing documents | E6; text/counter observed | Service billing preview |
| 28 | Service management 7/7 | Next | Repeated billing ending | E6 + E8; text/counter observed | Connected services review |

## Original learning adaptation

The SuccessLabs version preserves the interaction pattern: overview, explicit start, chapter access, synchronized explanation and product state, local and overall position, Previous/Next, enlarge, zoom, close and restart. It reuses the tested React tour engine and local brand assets from the existing sales tour in an isolated services route. Data and explanations live in src/tour.js; product rendering and navigation live in src/App.jsx; styles live in src/styles.css.

Intentional changes: an original final review replaces the repeated source billing ending; initial Previous is disabled; backward chapter transitions lead to the preceding chapter’s final position. Restart begins at Projects 1/8. Final position is clearly separated from mastery or all-steps visitation.

Original HTML screens use invented records and prepared examples. A project attention filter and three local calculations encourage exploration: effort versus fixed-fee margin, added weekly workload versus capacity, and managed-service cost versus bundle margin. Base reference tables remain labelled while experiment results change. AI-style resource summaries are prewritten. There is no live resource recommendation, personnel allocation, SAP connection, revenue-recognition engine, dispatch, messaging or invoice posting.

The official local logo, Comfortaa font files and license, exact tagline, centered original quote and separate 6px header reading bar apply the SuccessLabs brand. Reading position is not tour completion or learning evidence.

## Presenter-free learning and its limits

The visitor controls pace and chapter selection; a concise explanation identifies what to inspect in the accompanying state. Tables expose the fictional assumptions behind each decision. A facilitator can deepen this with challenge questions and real-system execution, which this visual presentation does not provide.

## Reusable blueprint

1. Pick a role, a customer problem and an observable outcome.
2. Divide the story by business decisions and handoffs.
3. Pair every explanation with a relevant, original state.
4. Make assumptions, simulated operations and evidence gaps visible.
5. Keep navigation independent of the chapter data and product renderer.
6. Verify every position, boundaries, dialogs, narrow layout and restart.
7. Publish the original implementation and record source evidence limits.

## Build and publication

Run npm ci, npm run build and npm run test:sites. Static client output is dist/client/. GitHub Pages uses relative assets in services-product-tour/. Previous tours remain intact. See design-qa.md for final verification and LINKS.md for the published documentation destinations. No automatic sync is created.
