# Connected Sales — Design and Interaction QA

Date: 23 November 2026 (Asia/Kolkata).

## Scope

Original SuccessLabs interaction-pattern adaptation of the public SAP sales tour. It is not a pixel clone, a licensed reproduction of SAP screens or a functioning SAP sandbox.

## Verified

- Vite production build passes. All four inherited worker/packaging checks pass.
- Published GitHub Pages entry loads with the local logo, original screens and relative scripts/styles.
- All 41 journey positions traversed with DOM state checks; 6 chapters use 9 / 7 / 6 / 4 / 6 / 9 positions. An orchestration timeout at position 32 required resuming from the visible state, after which 33–41 were checked individually. This timeout was in the verification tool, not the app.
- Initial Previous is disabled. Next crosses every chapter boundary. Direct selection starts at each chapter's first position. Previous at all five boundaries returns to the preceding chapter's last position.
- The final position shows an explicit six-discipline review and a named dialog. Restart returns to Orders 1/9. Final position is not represented as a mastery assessment.
- Worklist filter shows 2 attention items instead of 3 total items. Discount USD 150 gives USD 1,100 per kit and USD 22,000 for 20 kits. Adjusted rebate volume USD 100,000 gives USD 2,000 at 2%.
- Enlarge dialog opens; zoom changes from 100% to 125%; Escape closes. After a focus-restoration fix, focus returns to Enlarge view on the deployed revision.
- Desktop screenshot inspected for brand placement, hierarchy and readable narrative. No page-level horizontal overflow in the inspected state.
- Embedded narrow viewport (390 × 844 CSS pixels; 375-pixel content width after scrollbars) checked for compact chapter selection, product reachability, local table containment and dialog controls. Its content scrollWidth equals clientWidth. This does not verify a physical device or touch interaction.
- Reading indicator: 0 at top, approximately .74 at an intermediate position, 1 at bottom; reverses upward. It remains separate from the tour-position indicator.
- Console inspection returned browser-extension metadata errors. No application-origin error was observed in that inspection.

## Source evidence limits

Every source position's text and counter were read. Settled visual inspection covered entry, enlargement, chapter endpoints and completion. Intermediate images were not all independently verified; source mobile was not inspected. Proprietary captures are not redistributed. See WALKTHROUGH.md for source observations, including the repeated final state and differing Previous behavior.

## Functional limits

Prewritten AI-style content and local arithmetic only. No live SAP integration, PDF extraction, Teams messaging, invoice or journal posting, return processing, price import or rebate settlement. Fictional data only. No certification, assessment or all-steps visitation tracking.
