# Design QA — Supply Chain Product Tour

Validated 23 November 2026 (IST). Scope: original interaction-pattern adaptation using the established SuperLabs styling. Not a faithful SAP visual clone or live ERP sandbox.

## Source inspection

All 37 source navigation positions reached: 9 inventory, 9 order promising, 9 warehouse and 10 transportation. Overview, first inventory screen, warehouse enlargement and source ending visually inspected. Restart, direct chapter entry, Previous-to-overview and enlarge/close observed. Not every source image was visually validated; lagging captures were rejected. Source mobile and physical-device behavior unverified.

## Prototype functional checks

| Check | Result / evidence |
| --- | --- |
| Model and JavaScript | 37 positions, 4 chapters, counts 9/9/9/10; node --check passed |
| Entry | Start opens inventory 1/9; Previous disabled |
| Forward navigation | All positions reached, including chapter boundaries and 37/37 ending |
| Backward navigation | 36 transitions checked; every narrative heading matched the product-view heading |
| Direct chapters | Inventory, Order promising, Warehouse and Transportation each open their first position |
| Enlarge | Named native dialog, 100% → 125% → 100%, Escape dismisses, focus returns to Enlarge |
| Ending | Final state visible after dismissal; deeper-demonstration action and restart return to inventory 1/9 |
| Quantity experiment | 180 requested → 100 now, 40 Day 3, 40 unconfirmed |
| Count experiment | 175 counted − 172 book = +3 EA |
| Mode experiment | Rail → 4 days / INR 12,000 / 70 kg illustrative CO₂e, misses Day 3 |
| Design notes | Opens and closes with reusable blueprint and honest simulation limits |
| Assets | Logo has nonzero natural width; Comfortaa loaded; local font license retained |
| Desktop overflow | No horizontal document overflow observed |
| Reading indicator | 0 at document top and 1 at document bottom after scroll settles; kept independent of tour position |
| Application errors | No application-origin error logs returned; extension metadata errors were observed separately |

## Responsive scope

390 × 844 CSS-pixel iframe fixture provided in responsive-check.html. Initial inspection confirmed compact chapter selection, direct Transportation entry, enlargement and no page-wide overflow (375-pixel content area with desktop scrollbar). The initial inherited styles hid the mobile quote; corrected in the current stylesheet and versioned for cache refresh. Current release was visually rechecked: quote visible, logo and tagline fit, chapter selection opens Transportation 1/10, enlarged view fits the iframe, Escape closes it, and document width equals the 375-pixel content viewport. This is not a physical-phone or touch test.

## Deployment

Initial Pages build succeeded for commit 50336b6bed6f5e6eac3f841ff8518a79858eb8b3. The public route was opened and tested in the cloud browser. Follow-up fixes use ordinary commits that preserve concurrent changes and unrelated routes. See GitHub Actions for subsequent deployment records.

## Limits

Screens contain original HTML and fictional OmniWorks data. Three exercises use local calculation or preconfigured examples. No live AI, inventory posting, order confirmation, RF device, EDI, booking, accrual, invoice or payment transaction occurs. Sample story quantities remain the baseline when a local experiment changes its input. Final-position access is not a completion or mastery score. Source screenshots are not redistributed. Touch behavior, physical phones and a full assistive-technology audit were not tested.
