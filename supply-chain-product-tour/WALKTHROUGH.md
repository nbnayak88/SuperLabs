# Supply Chain Product Tour — Walkthrough and Blueprint

Reference: [SAP GROW supply chain product tour](https://www.sap.com/india/products/erp/s4hana/features/supply-chain/product-tour.html). Inspected 23 November 2026 (IST).

Task: inspect the presenter-free journey and publish an original SuccessLabs adaptation. Prototype role: Kavya Rao, fictional OmniWorks supply chain lead. Problem: promise 120 motor kits with limited immediate supply. Intended outcome: connect stock accuracy, order commitment, warehouse readiness and freight cost.

## Entry and controls observed

The exact source loads an overview and a large product thumbnail with Play. Start the tour opens Inventory management 1/9. Four chapter buttons provide direct entry to each chapter's first step. Previous/Next move through local counters and across chapter boundaries. Previous at Inventory 1 returns to overview (the prototype intentionally disables Previous at its first step). Warehouse direct entry opened 1/9. Enlarge opens a screenshot overlay with Close; closing restores focus to Enlarge. Restart in the ending panel returns to Inventory 1/9. No demo request, marketing form, video playback or external product-page action was submitted.

## Source positions and prototype mapping

Every position below was reached through browser navigation. Evidence S01–S37 refers to the current-run accessibility/DOM observations in the tool record, including chapter name, counter, narrative and image alternative text. These are navigation observations, not visual confirmation of every source screenshot or execution in a configured ERP system. Descriptions below are concise topic labels, not copied source narration.

| Position | Chapter / local step | Action | Observed topic | Evidence / status | Original prototype state |
| --- | --- | --- | --- | --- | --- |
| 1 | Inventory management 1/9 | Start tour | Receipt against purchasing document | S01 / observed DOM | Goods receipt / original |
| 2 | Inventory management 2/9 | Next | Transfer within a plant | S02 / observed DOM | Internal stock transfer / original |
| 3 | Inventory management 3/9 | Next | Predicted cross-plant duration | S03 / observed DOM | Cross-plant transfer / original |
| 4 | Inventory management 4/9 | Next | Inventory KPI dashboard | S04 / observed DOM | Inventory overview / original |
| 5 | Inventory management 5/9 | Next | Goods movement drill-down | S05 / observed DOM | Goods movement analysis / original |
| 6 | Inventory management 6/9 | Next | Slow/non-moving material prediction | S06 / observed DOM | Slow stock review / original |
| 7 | Inventory management 7/9 | Next | Physical inventory document | S07 / observed DOM | Physical inventory scope / original |
| 8 | Inventory management 8/9 | Next | Mobile inventory counting | S08 / observed DOM | Mobile count practice / original |
| 9 | Inventory management 9/9 | Next | Physical inventory exceptions | S09 / observed DOM | Count exception / original |
| 10 | Order promising 1/9 | Next | Order-entry availability check | S10 / observed DOM | Sales order availability / original |
| 11 | Order promising 2/9 | Next | Graphical availability results | S11 / observed DOM | Availability timeline / original |
| 12 | Order promising 3/9 | Next | Confirmation in sales order | S12 / observed DOM | Order confirmation / original |
| 13 | Order promising 4/9 | Next | Backorder variant priorities | S13 / observed DOM | Backorder strategy / original |
| 14 | Order promising 5/9 | Next | Backorder run results | S14 / observed DOM | Backorder results / original |
| 15 | Order promising 6/9 | Next | Confirmation impact report | S15 / observed DOM | Confirmation impact / original |
| 16 | Order promising 7/9 | Next | Customer quantity allocation | S16 / observed DOM | Product allocation / original |
| 17 | Order promising 8/9 | Next | Plant or product substitution | S17 / observed DOM | Alternative supply / original |
| 18 | Order promising 9/9 | Next | Supply protection | S18 / observed DOM | Supply protection / original |
| 19 | Warehouse management 1/9 | Next | Outbound delivery progress | S19 / observed DOM | Outbound delivery / original |
| 20 | Warehouse management 2/9 | Next | Picking tasks | S20 / observed DOM | Picking task / original |
| 21 | Warehouse management 3/9 | Next | Packing for shipment | S21 / observed DOM | Packing workstation / original |
| 22 | Warehouse management 4/9 | Next | Inbound delivery progress | S22 / observed DOM | Inbound delivery / original |
| 23 | Warehouse management 5/9 | Next | Putaway tasks | S23 / observed DOM | Putaway task / original |
| 24 | Warehouse management 6/9 | Next | RF/native mobile options | S24 / observed DOM | Mobile warehouse work / original |
| 25 | Warehouse management 7/9 | Next | Embedded warehouse analytics | S25 / observed DOM | Warehouse performance / original |
| 26 | Warehouse management 8/9 | Next | Warehouse movement monitor | S26 / observed DOM | Warehouse monitor / original |
| 27 | Warehouse management 9/9 | Next | Wave management | S27 / observed DOM | Wave review / original |
| 28 | Transportation management 1/10 | Next | Transport demand across logistics | S28 / observed DOM | Transport demand / original |
| 29 | Transportation management 2/10 | Next | Freight unit from sales order | S29 / observed DOM | Freight unit / original |
| 30 | Transportation management 3/10 | Next | Transport cockpit and modes | S30 / observed DOM | Transportation cockpit / original |
| 31 | Transportation management 4/10 | Next | Provider subcontracting | S31 / observed DOM | Carrier assignment / original |
| 32 | Transportation management 5/10 | Next | EDI confirmation | S32 / observed DOM | Carrier confirmation / original |
| 33 | Transportation management 6/10 | Next | Warehouse integration | S33 / observed DOM | Execution readiness / original |
| 34 | Transportation management 7/10 | Next | Pick/pack/stage handoff | S34 / observed DOM | Staging and loading / original |
| 35 | Transportation management 8/10 | Next | Freight accrual posting | S35 / observed DOM | Freight accrual / original |
| 36 | Transportation management 9/10 | Next | Carrier invoice and cost distribution | S36 / observed DOM | Carrier invoice / original |
| 37 | Transportation management 10/10 | Next | Repeated invoice with ending panel | S37 / observed DOM | Supply chain review / original |

## Visual evidence and limits

Visually confirmed in this run: overview entry, Inventory 1 receipt screen, final Transportation 10 invoice behind the ending panel, Warehouse 1 outbound-delivery screenshot in the enlarged overlay. The final 10/10 repeats the 9/10 invoice topic and image description; Next is disabled and the ending offers Request a demo, Learn more and Start tour again.

One capture taken immediately after navigating into Warehouse 1 still showed Order promising 8. It was rejected as synchronized evidence. An initial enlarge capture also preceded the overlay rendering; a later screenshot confirmed the overlay. This demonstrates why a DOM update alone does not establish that its image has rendered. Source screenshot-by-screenshot fidelity and source mobile behavior are unverified. No source screenshots are republished.

## Why it works without a presenter

The overview introduces the scope, the chapter accordion gives orientation, and each position pairs a short explanation with a product state. Local counters and backward navigation allow self-paced review. Enlarge supports inspection and the ending supplies a restart. This is a guided visual presentation: the source does not demonstrate that the visitor has executed a transaction or acquired mastery.

## Intentional adaptation

The prototype preserves four chapters and 37 positions, direct access, counters, synchronized views, enlargement and restart. All product views and records are original. OmniWorks Industrial Systems connects the story through material MK-100, order SO-7201, delivery OD-8301 and freight order FO-6201. The final repeated source image becomes an explicit end-to-end review. The prototype adds a quantity confirmation experiment, count-variance calculation and preconfigured transport comparison. AI estimates, carrier responses and enterprise actions are clearly scripted or illustrative.

Reading position, tour position and learning completion remain separate. No live ERP, AI, RF, EDI, carrier, inventory-posting, accounting or payment backend is present. Clicking into the last chapter can reach the ending without visiting all earlier positions.

## Reusable blueprint

1. Select one role, one business problem and one observable outcome.
2. Organize chapters around decisions, deriving all counters from the model.
3. Pair each short message with a relevant product state.
4. Keep content in tour.js and navigation/rendering in app.js.
5. Support entry, chapter jumps, backward/forward movement, enlargement and restart.
6. Add a local experiment only when it helps explain a tradeoff; label simulation boundaries.
7. Test the whole model, keyboard behavior, narrow-screen layout and deployed assets.
8. Reuse the framework with a new story without inventing source observations.

## Editable implementation

Repository route: supply-chain-product-tour/ in nbnayak88/SuperLabs. index.html, app.js, tour.js and styles.css are the editable source and deployed static implementation. Assets are local; the Comfortaa license is included. No build dependencies. See design-qa.md for browser validation and deployment status.
