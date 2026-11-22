# Procurement product tour — observation and implementation journal

Reviewed 23 November 2026 (India). Source: https://www.sap.com/india/products/erp/s4hana/features/procurement/product-tour.html

## What the user actually does

Open Overview, select Start the tour, then use Previous Step / Next Step. The source expands one chapter at a time and updates the narrative and product screenshot. Next at a chapter boundary opens the next chapter. There are five chapters and 37 positions: 9 / 8 / 6 / 7 / 7. Direct chapter selection is available. Enlarge opens an image overlay with Close. At invoice step 7, a “Ready to take the next step?” panel offers demo, related solutions and Start tour again. Restart returns to the first data-driven step. Commercial forms were not submitted.

## Observed steps (paraphrased)

| Position | Chapter | Local counter | Action | Result / capability | Evidence | Status |
|---|---|---|---|---|---|---|
| 1 | Data-driven procurement | Step 1 of 9 | Start tour | Find the next procurement task | Desktop DOM narrative, counter and image alternative | Observed |
| 2 | Data-driven procurement | Step 2 of 9 | Next Step | Read the exception dashboard | Desktop DOM narrative, counter and image alternative | Observed |
| 3 | Data-driven procurement | Step 3 of 9 | Next Step | Inspect spend concentration | Desktop DOM narrative, counter and image alternative | Observed |
| 4 | Data-driven procurement | Step 4 of 9 | Next Step | Compare supplier performance | Desktop DOM narrative, counter and image alternative | Observed |
| 5 | Data-driven procurement | Step 5 of 9 | Next Step | Review approval bottlenecks | Desktop DOM narrative, counter and image alternative | Observed |
| 6 | Data-driven procurement | Step 6 of 9 | Next Step | Explain no-touch processing | Desktop DOM narrative, counter and image alternative | Observed |
| 7 | Data-driven procurement | Step 7 of 9 | Next Step | Spot a late delivery | Desktop DOM narrative, counter and image alternative | Observed |
| 8 | Data-driven procurement | Step 8 of 9 | Next Step | Find off-contract spend | Desktop DOM narrative, counter and image alternative | Observed |
| 9 | Data-driven procurement | Step 9 of 9 | Next Step | Watch contract consumption | Desktop DOM narrative, counter and image alternative | Observed |
| 10 | Operational procurement | Step 1 of 8 | Next Step | Start from a buyer home | Desktop DOM narrative, counter and image alternative | Observed |
| 11 | Operational procurement | Step 2 of 8 | Next Step | Choose a compliant catalog item | Desktop DOM narrative, counter and image alternative | Observed |
| 12 | Operational procurement | Step 3 of 8 | Next Step | Give a direct request its source | Desktop DOM narrative, counter and image alternative | Observed |
| 13 | Operational procurement | Step 4 of 8 | Next Step | Review request defaults | Desktop DOM narrative, counter and image alternative | Observed |
| 14 | Operational procurement | Step 5 of 8 | Next Step | Choose the approval route | Desktop DOM narrative, counter and image alternative | Observed |
| 15 | Operational procurement | Step 6 of 8 | Next Step | Track request approval | Desktop DOM narrative, counter and image alternative | Observed |
| 16 | Operational procurement | Step 7 of 8 | Next Step | Compare delivery assumptions | Desktop DOM narrative, counter and image alternative | Observed |
| 17 | Operational procurement | Step 8 of 8 | Next Step | Trace the purchasing chain | Desktop DOM narrative, counter and image alternative | Observed |
| 18 | Sourcing | Step 1 of 6 | Next Step | Build a sourcing opportunity | Desktop DOM narrative, counter and image alternative | Observed |
| 19 | Sourcing | Step 2 of 6 | Next Step | Investigate contract leakage | Desktop DOM narrative, counter and image alternative | Observed |
| 20 | Sourcing | Step 3 of 6 | Next Step | Explain a price variance | Desktop DOM narrative, counter and image alternative | Observed |
| 21 | Sourcing | Step 4 of 6 | Next Step | Inspect the RFQ worklist | Desktop DOM narrative, counter and image alternative | Observed |
| 22 | Sourcing | Step 5 of 6 | Next Step | Compare supplier quotations | Desktop DOM narrative, counter and image alternative | Observed |
| 23 | Sourcing | Step 6 of 6 | Next Step | Plan a contract renewal | Desktop DOM narrative, counter and image alternative | Observed |
| 24 | Supplier management | Step 1 of 7 | Next Step | Open the supplier workspace | Desktop DOM narrative, counter and image alternative | Observed |
| 25 | Supplier management | Step 2 of 7 | Next Step | Read the balanced scorecard | Desktop DOM narrative, counter and image alternative | Observed |
| 26 | Supplier management | Step 3 of 7 | Next Step | Inspect quality evidence | Desktop DOM narrative, counter and image alternative | Observed |
| 27 | Supplier management | Step 4 of 7 | Next Step | Design a supplier questionnaire | Desktop DOM narrative, counter and image alternative | Observed |
| 28 | Supplier management | Step 5 of 7 | Next Step | Review the evaluation result | Desktop DOM narrative, counter and image alternative | Observed |
| 29 | Supplier management | Step 6 of 7 | Next Step | Discuss overdue orders | Desktop DOM narrative, counter and image alternative | Observed |
| 30 | Supplier management | Step 7 of 7 | Next Step | Compare carbon evidence | Desktop DOM narrative, counter and image alternative | Observed |
| 31 | Invoice management | Step 1 of 7 | Next Step | Understand invoice-to-pay stages | Desktop DOM narrative, counter and image alternative | Observed |
| 32 | Invoice management | Step 2 of 7 | Next Step | Inspect the invoice worklist | Desktop DOM narrative, counter and image alternative | Observed |
| 33 | Invoice management | Step 3 of 7 | Next Step | Review a sample capture | Desktop DOM narrative, counter and image alternative | Observed |
| 34 | Invoice management | Step 4 of 7 | Next Step | Validate invoice details | Desktop DOM narrative, counter and image alternative | Observed |
| 35 | Invoice management | Step 5 of 7 | Next Step | Try a three-way comparison | Desktop DOM narrative, counter and image alternative | Observed |
| 36 | Invoice management | Step 6 of 7 | Next Step | Assign the exception owner | Desktop DOM narrative, counter and image alternative | Observed |
| 37 | Invoice management | Step 7 of 7 | Next Step | Trace the invoice workflow | Desktop DOM narrative, counter and image alternative | Observed |

## Product design reasoning

The source removes the need for a presenter by pairing one message with one visual state. A persistent chapter list supports exploration; local counters reduce uncertainty; back navigation enables comparison; enlargement supports detail; the ending offers a next action and restart. The screenshot area is a guided demonstration, not a live SAP tenant.

## Original adaptation

OmniProcure uses fictional OmniWorks Industrial Systems records, original HTML tables and SuccessLabs branding. No SAP product screenshots are redistributed. The same five chapters and 37-position structure are retained. Each step has an original business question and sample state. Three added local experiments cover request quantity and routing, quotation comparison, and invoice price matching. They send no data and execute no transaction. Completion means reaching the final position, not demonstrating knowledge or proving all steps were visited.

The last two source invoice narratives and image alternative repeat; the source final visual changes to workflow status. The adaptation intentionally separates exception ownership and workflow history into distinct learning moments.

## Evidence limits

All desktop positions were navigated and recorded through DOM narrative, counters and image alternatives. Key source screenshots were visually inspected at completion and enlargement; this is not a pixel audit of all 37 screenshots. No SAP backend operation or source mobile behavior was tested. The prototype is an independent learning demonstration, not affiliated with SAP. Source AI and delivery prediction claims are shown as concepts, not recreated as live capabilities.

## Reuse blueprint

Define one role and outcome; organize chapters around decisions; provide one message and view per step; derive navigation counts from data; support back, chapter jumps, enlargement and restart; finish with an honest next action; test boundaries and narrow layouts. Edit src/tour.js for content and ProductScreen in src/App.jsx for product-specific states.
