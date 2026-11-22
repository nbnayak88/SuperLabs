# SuccessLabs self-guided product tour

Original, functional interpretation of the SAP Ariba Contract Intelligence by Icertis public tour pattern.

- Five chapters and 24 positions; direct chapter jumps, previous/next, zoom, completion and restart.
- Fictional OmniVerse Energy contracting scenario, original semantic HTML views and local brand/font assets.
- No backend, personal-data capture, live AI, signatures or supplier messaging.
- Full source walkthrough: `public/WALKTHROUGH.md`. Verification: `design-qa.md`.

Run `npm install` then `npm run dev`. Build with `npm run build`; publish `dist/client/` to a GitHub Pages directory. Relative Vite base supports nested repository paths. This project uses the Product Design starter runtime; `worker/`, `scripts/` and `tests/` retain its alternate hosting support.

To adapt this for another product, edit `src/tour.js` and the original screen components in `src/App.jsx`. Retain navigation and modal behavior. Choose the user, problem and outcome before changing the content.
