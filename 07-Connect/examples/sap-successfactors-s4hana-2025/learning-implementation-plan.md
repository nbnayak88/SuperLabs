# SuccessLabs Academy — Super Sprint 20™
## SAP SuccessFactors → SAP S/4HANA: Beginner Learning and Fresh-Rollout Implementation Plan

**Version:** 1.1 · 9 November 2026 · Confirmed GCC rollout baseline  
**Platform:** SAP · **Domain:** Human Capital Management · **Sector:** Energy  
**Primary stream:** Applied Integration Architecture (IntA)  
**Learning intent:** Connect · **Starting level:** The Origin Story  
**Tagline:** Architecting Experiences for a Better World.

> **One learner promise:** Learn to explain, trace, test and support one employee-data replication journey from Employee Central to S/4HANA, then expand it under the project team's guidance.

This plan expands the six components of your attached Sprint Lab: the two-hour Origin Story, rapid reference card, mastery questions, six-level ladder, five resources and Feynman practice. It adds ten two-hour learning sprints and an implementation roadmap. The 20 hours build supervised project readiness; they do not replace implementation experience or the full delivery schedule.

## 1. Start with your actual landscape

### Confirmed project facts

| Item | Confirmed baseline |
|---|---|
| Employee source | Employee Central is implemented; employee and employment data maintained there |
| Target | SAP S/4HANA 2025 for HCM, payroll and time management |
| ECP | Not in the landscape |
| Employee middleware | CPI — SAP Integration Suite, Cloud Integration |
| Cost-center integration | MDI already available for cost-center replication; endpoints, direction and completion status still to verify |
| Region / scale | GCC countries; approximately 2,000 headcount |
| Planning baseline | 9 November 2026 |
| Target go-live | March 2027; exact date and first productive payroll period not yet confirmed |

**Selected planning route: Branch A — EC → CPI → S/4HANA HCM**, using release-compatible standard employee/organizational-assignment replication and BIB target processing. Verify ECS4HCM component/support-package requirements with Basis and the integration lead before configuration. S/4HANA deployment edition, FPS/SPS and installed HCM components remain open technical checks; this plan does not infer installation readiness from the release year. [R1–R3]

**Separate cost-center route:** validate the intended Finance source → MDI → EC connection. If S/4HANA Finance is the provider, the cost-center master travels S/4HANA → MDI → EC; EC then references that cost center in employee assignments replicated back through CPI. These are different objects and purposes, not competing masters. MDI availability does not prove the end-to-end cost-center connection is already live. [R6–R8]

### Interface register

| ID | Object / purpose | Business direction | Implementation scope |
|---|---|---|---|
| IF01 | Employee master and employment/organizational assignments | EC → CPI → S/4HANA HCM | Primary learning/build stream; confirm selection, BIB mapping and acknowledgement |
| IF02 | Cost-center master | Finance provider → MDI → EC; verify provider | Existing service dependency; prove identifiers, validity, updates and monitoring |
| IF03 | Organizational objects | Agreed org source → target | Decide whether required; distinct from employee assignments |
| IF04 | Time-related transactions | Source to be decided | Absences, attendance, balances and time valuation need explicit scope; employee master replication does not establish their interfaces |
| IF05 | Payroll opening state / historical data | Approved legacy source → S/4HANA | Separate migration workstream; not assumed available from employee replication |

### Remaining design decisions — proceed while owners resolve them

- Basis: on-premise/Private Edition, exact 2025 FPS/SPS, installed HCM/ECS4HCM components and supported prerequisites.
- HR/payroll leads: exact GCC countries and legal entities, country headcounts, payroll calendars and localized target design.
- Time lead: which system owns time capture, absence approval, valuation and balances; required interfaces.
- Migration lead: whether target payroll is new, existing IDs, history horizon, opening balances, year-to-date data and initial-load scope.
- Finance/MDI owner: actual provider/consumer endpoints, cost-center key mapping, validity and service readiness.
- PM/business owner: exact March go-live date, first payroll period, parallel-run requirements and acceptance owners.

GCC planning coverage uses Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman as candidate country rows. Confirm actual rollout scope; this is not a claim that all six are included or that localization availability has been verified.

## 2. Understand replication in plain English

Replication is a controlled process that makes selected source data usable in another system. It includes selection, transfer, interpretation, validation, target update and confirmation. A successful network call alone does not prove that the employee is ready for the consuming business process.

| Term | Plain English |
|---|---|
| System of record | The agreed authority for a particular object or field |
| API | A defined interface for requesting or sending data |
| Middleware | The service connecting systems and coordinating message exchange |
| Mapping | Rules translating source fields and codes into target meaning |
| Initial load | The first agreed population/history transferred into the target |
| Delta load | Subsequent selected changes; understand the chosen interface's selection semantics |
| Effective date | When a business fact is valid |
| Last-modified time | When someone changed the record; different from its effective date |
| Identifier mapping | Linking source persons/employments to target identities |
| BIB | Business Integration Builder: target-side mapping and processing configuration in the applicable HCM route |
| MDI | SAP Master Data Integration: a service for supported master-data distribution scenarios |
| Reconciliation | Proving expected records and important values agree across systems |
| Replay | Reprocessing a failed or selected message using the supported recovery method |

**Branch A data journey:** EC owns agreed HR data → the supported extraction/request process selects data → Cloud Integration exchanges messages → S/4HANA validates and processes with BIB → target records and confirmations are checked. Physical request direction may differ from business data direction. Compound Employee is relevant to this documented HCM scenario; it is not a universal API for every integration. [R2]

**MDI in this project:** study the inbound cost-center scenario and its reference-data dependencies. The generic MDI workforce branch is background only and is outside the selected employee HCM replication path. [R4–R8]

**Energy example:** fictional engineer Asha joins a renewable-generation business. Her employment, company assignment and valid cost center must reach the agreed target before her consuming process can work. Employee replication does not automatically provision a login, training certification or plant-access authorization.

## 3. The two-hour Origin Story sprint

**Objectives:** explain why replication exists; distinguish initial and delta loads; identify the landscape branch; describe one employee journey and its business impact.

| Minutes | Activity | Evidence |
|---|---|---|
| 0–15 | Discuss the evolution from manual handoffs and batch files to managed interfaces | Three failures replication should prevent |
| 15–35 | Learn the terms in Section 2 using one new-hire story | Annotated glossary |
| 35–55 | Draw systems, business data direction and responsible teams | One-page context sketch |
| 55–75 | Explain the selected HCM route, separate MDI cost-center route and remaining decisions | Provisional architecture decision |
| 75–100 | Trace a hire and a future-dated transfer on paper | Source-to-target walkthrough |
| 100–115 | Explore one missing-cost-center failure and recovery | Owner, correction and reconciliation steps |
| 115–120 | Complete rapid review | Five answered checks |

**Five-minute review:** Who owns the employee data? What does S/4HANA need it for? What makes a record eligible? How do dates and IDs affect it? What evidence proves business success?

## 4. Super Sprint 20™ — ten two-hour sessions

The Origin Story is an additional two-hour orientation: **22 hours total** with this 20-hour applied path. Complete the sessions over two to five weeks alongside supervised project work.

**Every 120-minute session:** 15 minutes recall/demo + 25 minutes concepts + 50 minutes hands-on work + 15 minutes project journal + 15 minutes review. If access is unavailable, produce a clearly labelled design simulation; do not record it as executed system evidence.

| Sprint | Learning objective | Hands-on exercise and project task | Deliverable / pass evidence |
|---|---|---|---|
| S01 — Landscape | Explain source, target, business need and route | Interview leads; inventory editions/components; trace a synthetic hire | D01 scope and landscape with unresolved questions assigned |
| S02 — Data fundamentals | Distinguish person, employment, assignment and dates | Build a timeline for hire, transfer, correction and termination | D02 object ownership and identity/date rules |
| S03 — Dependencies | Identify reference data needed before employees | Model company, cost center and organization dependencies; validate owners | D03 dependency sequence and missing-reference checks |
| S04 — Connectivity | Explain authentication, authorization and endpoints | With specialists, test a permitted non-production connection; inspect expiry and least privilege | D04 redacted connectivity/security evidence |
| S05 — Extraction | Explain initial/delta scope and filters | Inspect permitted Compound Employee sample for the selected HCM scenario; compare initial vs changed data | D05 selection/filter contract and redacted sample |
| S06 — Mapping | Translate field meaning and codes | Review BIB metadata and field/value rules; map five scoped fields and validate the MDI cost-center key reference | D06 reviewed mapping workbook |
| S07 — First employee | Trace end-to-end execution | Run one synthetic hire with qualified consultant; follow target processing and acknowledgement | D07 source/message/target correlation and reconciliation |
| S08 — Changes | Test effective dates and identities | Transfer, future change, retro correction, termination and rehire; add concurrent employment only if scoped | D08 results with expected vs actual values |
| S09 — Recovery | Diagnose and recover safely | Introduce invalid reference data in a sandbox; locate failure; fix owner data/config; replay using supported procedure | D09 recovery runbook and duplicate check |
| S10 — Readiness | Demonstrate operational and cutover understanding | Rehearse a small load, reconciliation, backlog recovery and business sign-off | D10 readiness pack and teach-back |

**Session review:** explain what happened without jargon, show one artifact, identify one unresolved assumption, and state the next test. Attend a repeat lab when core evidence is missing.

## 5. Implementation roadmap — run alongside learning

The phases below are delivery gates, not a fixed calendar. The PM must estimate duration after confirming scope, access, volumes, release compatibility and rollout countries. Never schedule production cutover from the learning-hour estimate.

| Phase | Implementation activities | Deliverables | Accountable acceptance owner |
|---|---|---|---|
| Discover | Confirm business outcomes, target consumers and integration alternatives | Scope, architecture route, initial risks | Sponsor / architecture lead |
| Prepare | Provision non-production systems/services, roles, certificates, connectivity and team ownership | Access matrix, landscape register, delivery plan | Technical lead |
| Explore | Fit-to-standard workshops; define ownership, identities, mappings, filters, history, timing, recovery and tests | Interface design, mapping, nonfunctional requirements, test baseline | Business process and integration leads |
| Realize | Configure supported standard content; build justified extensions; transport; unit test, SIT, volume/recovery tests and UAT | Versioned configuration, executed evidence, resolved defects | Build leads and business test owner |
| Deploy | Rehearse, approve cutover, load references then employees, capture deltas, reconcile and release consumers | Signed cutover and reconciliation records | Cutover manager / business owner |
| Run | Monitor, manage incidents, rotate credentials, test upgrades and hand over support | Operational dashboard, runbook, service acceptance | Support service owner |

### Gate A — approve the design

- [ ] Editions/components, source modules and actual receiving system confirmed.
- [ ] Data ownership and population/history boundaries approved.
- [ ] Standard integration route justified against target business processes.
- [ ] Required APIs, middleware content and software prerequisites matched to release.
- [ ] Mapping, identifiers, effective dating and initial/delta behavior documented.
- [ ] Frequency, latency, throughput, recovery and retention targets agreed.
- [ ] Security, privacy and target support responsibilities accepted.

### Gate B — prove the build in non-production

1. Baseline EC metadata and target prerequisites for the selected route.
2. Configure technical identities, trust and supported authentication with specialists; keep secrets out of project artifacts.
3. Copy/configure applicable standard integration content and version its parameters.
4. Configure target processing and scoped mapping in the correct system for the route.
5. Establish reference data and organizational dependencies.
6. Run one employee, verify target values, then expand to a representative cohort.
7. Test subsequent changes, failures, replay and monitoring.
8. Promote reviewed configurations through the transport process; check environment-specific endpoints and credentials after promotion.

Use the documented HCM/BIB configuration for IF01 and the MDI cost-center configuration for IF02. Keep mapping, monitoring and reconciliation evidence separate for each interface. [R2–R8]

### Gate C — accept business readiness

- [ ] SIT and UAT cover required countries, employment patterns and target consumers.
- [ ] Critical fields reconcile with zero unexplained mismatches in accepted scope.
- [ ] Failed, excluded, pending and successful records have separate counts and owners.
- [ ] Required volume and backlog-recovery tests pass the agreed service targets.
- [ ] No unresolved go-live-blocking defects; accepted residual defects have owners.
- [ ] Cutover rehearsal, recovery plan and support handover approved.

## 6. Data ownership and dependency design

EC employee ownership is confirmed. Finance reference-data ownership and remaining object responsibilities must be approved.

| Object / concern | Proposed authority | Direction / dependency to confirm |
|---|---|---|
| Person, employment and job information | EC — confirmed employee source | EC → agreed S/4HANA representation |
| Cost center master | Finance-governed source, often S/4HANA | Reference data must be available where assignments are validated |
| Legal entity/company relationship | HR and Finance jointly govern mapping | Do not assume automatic replication of all company data |
| Departments, positions, reporting lines | Agreed organizational source | Distinguish organizational objects from employee assignments |
| Target personnel number / workforce / business partner | Target-specific identity rules | Preserve cross-reference to source person and employment |
| Identity and access account | Identity-governance source/process | Separate provisioning and authorization interface |

Provisional sequence: approved reference data → required organization objects → employee records and assignments → required target synchronization → business-consumer validation. Confirm exact dependencies for the selected route.

### Fill-in mapping specification

| Mapping ID | Business meaning | Source object/field | Target object/field | Rule / code map | Validity / null behavior | Owner | Test |
|---|---|---|---|---|---|---|---|
| MAP01 | Employment identity | TBD | TBD | Preserve agreed employment identity | Rehire/concurrent rules TBD | HR + target | T01/T08 |
| MAP02 | Legal entity | TBD | TBD | Approved company mapping | Reject unmapped value | HR + Finance | T01/T05 |
| MAP03 | Cost center assignment | TBD | TBD | Validate identifier and context | Must be valid on effective date | Finance | T02/T04 |
| MAP04 | Manager assignment | TBD | TBD | Resolve manager identity | Missing-manager policy TBD | HR | T10 |
| MAP05 | Employment status | TBD | TBD | Approved event/status conversion | Preserve required dates | HR + target | T06/T07 |

Also record datatype/length, transformation location, default justification, localization, sensitivity, source version and acceptance owner. National IDs, bank details and compensation enter scope only when a documented target need requires them. Do not map every EC field by default.

## 7. Testing pack

Use synthetic employee IDs such as LAB-E001. Define expected results before executing each case. Attach redacted screenshots or logs and target checks; a middleware success screenshot alone is insufficient.

| ID | Scenario | Expected evidence |
|---|---|---|
| T01 | Initial load of a valid new hire | Correct target identity and required fields; confirmation correlated |
| T02 | Existing employee transfers to valid cost center | Correct effective-date split; prior history retained as designed |
| T03 | Future-dated change | No premature business effect; target behavior matches approved temporal design |
| T04 | Invalid or expired cost center | Controlled rejection/exception; no silent wrong assignment |
| T05 | Unmapped legal entity | Actionable mapping/data error and accountable owner |
| T06 | Retroactive correction | Correct target history and downstream impact assessment |
| T07 | Termination | Required status/date updated; access removal verified separately if integrated |
| T08 | Rehire / concurrent employment if scoped | Identity follows approved employment rules; no unintended duplicate |
| T09 | Same supported replay repeated | No unintended duplicate or corrupt history; result reconciled |
| T10 | Manager arrives after subordinate | Approved dependency/recovery behavior demonstrated |
| T11 | Missing API permission / expired test credential | Clear error, notification and authorized recovery |
| T12 | Network outage / partial batch failure | Successful records preserved; failed/pending population accounted for |
| T13 | Peak changes plus backlog | Agreed latency and throughput targets met |
| T14 | Initial load followed by changes during cutover | No missing or double-applied change; boundary reconciliation passes |
| T15 | Employee excluded by filter | Deliberate exclusion visible and accepted; not counted as success |
| T16 | Unauthorized field / excessive payload | Minimum required data and permission boundary validated |

### Reconciliation record

Record run ID, interface version, population query/filter, extraction/as-of time, business effective date, source employment key, target key, message/correlation IDs, expected values, actual values, status, exception owner and sign-off.

For an agreed population: **eligible expected = reconciled successful + failed + pending + explained exclusions**, using mutually exclusive definitions and distinct business keys. Also reconcile individual changes/versions where multiple changes exist per employment. Equal totals alone do not establish accuracy.

## 8. Monitoring and troubleshooting runbook

| Checkpoint | Question | Likely owner |
|---|---|---|
| Source eligibility | Is the employee in scope and selected under the date/filter rules? | EC functional lead |
| Extraction/service access | Can the technical identity retrieve the allowed data? | EC security/API specialist |
| Middleware or MDI distribution | Did the message/distribution reach the next stage? | Integration/BTP specialist |
| Target processing | Was data accepted and committed with valid mappings and references? | S/4HANA functional/technical lead |
| Confirmation | Does status match target evidence? | Integration support |
| Consumer process | Can the intended business activity use the employee? | Process owner |

Branch A tools may include EC Data Replication Monitor, Cloud Integration monitoring, applicable S/4HANA application logs and web-service monitoring. Branch B uses the scenario's MDI/distribution and consumer monitoring. Confirm exact apps, reports, log objects and authorization in your installed release before adding them to the runbook.

**Recovery sequence:** capture employee/employment key and time → correlate messages → identify the failing layer → correct authoritative data or approved configuration → reprocess through supported controls → reconcile target dates/values and duplicates → close with evidence. Do not reset delta state or run unrestricted full loads as a first response.

## 9. Cutover and hypercare

| Sequence | Required action | Exit evidence |
|---|---|---|
| C01 | Approve scope, schedule, named owners and go/no-go criteria | Signed checklist and escalation contacts |
| C02 | Rehearse realistic load and recovery; measure duration | Rehearsal report and feasible cutover window |
| C03 | Baseline configurations, ID maps, filters and recoverable state | Versioned baseline; route-specific recovery plan |
| C04 | Validate production connectivity and reference data | Approved smoke-test evidence |
| C05 | Apply agreed freeze/change-capture controls; establish initial-load boundary | Timestamp, scope and change register |
| C06 | Execute references and employee loads in dependency order | Run records and exceptions |
| C07 | Apply supported catch-up/delta procedure; handle boundary changes | No unexplained missing or duplicate changes |
| C08 | Reconcile required fields and validate business consumers | Business sign-off before release |
| C09 | Enable steady-state schedules and hypercare | Monitoring ownership and response coverage |

Recovery may require pausing the interface and controlled repair, rather than reversing target data automatically. Approve the route-specific procedure and assess effects of transactions already created downstream before attempting reversal.

Hypercare exit criteria: agreed consecutive stable cycles; backlog and latency within target; all critical exceptions resolved; residual issues accepted; support team demonstrates diagnosis and recovery; business owner accepts service. Set numeric targets with the client, not from a generic template.

## 10. Responsibilities and standards alignment

| Responsibility | Lead / decision owner | Your beginner contribution |
|---|---|---|
| Scope and architecture route | Architecture lead and process owner | Capture assumptions and trace the journey |
| EC data/metadata/permissions | EC functional and security leads | Validate sample records and document findings |
| Middleware/MDI setup | Integration/BTP lead | Inspect redacted messages and correlate runs |
| Target mapping/processing | S/4HANA HCM or workforce lead | Maintain mapping and test evidence |
| Reference data | Finance/organization data owners | Test dependencies and raise defects |
| Test, cutover and acceptance | QA, cutover and business owners | Execute approved scripts and reconcile |
| Operations | Support service owner | Follow runbook and document recovery |

Standards are used as design lenses; this plan does not claim certification or formal conformance.

- TOGAF and ISO/IEC/IEEE 42010: stakeholders, concerns, architecture decisions and traceability.
- BIZBOK and BABOK: business capability/process outcomes and requirements-to-test linkage.
- DAMA-DMBOK: ownership, quality, metadata and reconciliation.
- ISO/IEC 27001/27002: least privilege, secrets, logs and controlled access.
- COBIT: decision accountability, change control and operational acceptance.

**Stream boundaries:** Enterprise decides alignment/governance; Business defines outcomes/capabilities; Data defines ownership and meaning; Application defines system responsibilities; Technology defines platform standards; AI is optional and outside the initial baseline; Security defines controls; UI/UX defines operator experience; Infrastructure defines availability/connectivity; Integration defines exchanges/contracts/recovery; Domain defines employment semantics; Industry supplies energy operating constraints. Keep these concerns linked without duplicating their deliverables.

Energy-specific workshop questions: Will remote sites affect support/connectivity? What shift or payroll deadlines govern recovery? Which employee populations include contingent workers? Are access, safety qualifications and plant authorizations separate governed processes? Do not use replication alone as evidence of safety clearance.

## 11. Six-level skill ladder

Timeframes below are indicative deliberate-practice ranges, not mastery guarantees.

| Level | Objective / key skill | Energy practice | Success criterion | Suggested practice / resources |
|---|---|---|---|---|
| The Origin Story | Explain purpose and evolution | Explain a manual hire handoff failure | Five-minute teach-back | 2 hours; R1/R2 overview |
| Pre-Foundation | Vocabulary, IDs, dates and ownership | Model engineer hire/transfer | Correct journey and dependency sketch | 4–8 hours; Sections 1–3 |
| Foundation | Navigate and trace standard processing | Observe a sandbox employee run | Evidence across source, transport and target | 20–40 hours including Sprint 20; R2/R3 or R4/R5 |
| Essentials | Apply mapping, testing and recovery | Test employment changes across sites | Reviewed scenario pack and successful recovery | 4–8 weeks supervised; release-specific guides |
| Advanced | Design complex scope and operations | Multi-country wave with volume/recovery constraints | Accepted architecture and nonfunctional evidence | 3–6+ months; delivery experience and R1–R5 |
| Ultimate | Govern integration across transformations | Lead sustainable operating-model improvement | Demonstrated repeatable business outcomes and mentoring | Multiple delivery cycles; ongoing standards/product review |

## 12. Top five resources — study selectively

Official SAP documentation and learning material checked on 9 November 2026. Open the version matching the project. The HCM learning course also contains reverse-direction migration lessons; those are not automatically your rollout scope. Suggested study times are this plan's allocations, not publisher course durations.

| Ref | Resource | Why / what to study | Format / allocated time |
|---|---|---|---|
| R1 | [SAP EC Integration with HCM for S/4HANA — Help](https://help.sap.com/docs/SAP_SUCCESSFACTORS_EC_S4_HCM_INTEGRATION) | SAP's maintained product documentation; choose compatible installation and replication guides | Documentation; 30–45 min orientation, ongoing reference |
| R2 | [SAP course: EC integration with HCM for S/4HANA](https://learning.sap.com/courses/sap-successfactors-employee-central-integration-with-sap-hcm-for-sap-s-4hana) | SAP-authored intermediate course; prioritize preparation, EC→S/4HANA replication, organization and troubleshooting | Course; select 2–4 hours across sprints; prerequisite gaps need extra time |
| R3 | [Setting Up SuccessFactors for Replication](https://learning.sap.com/courses/sap-successfactors-employee-central-integration-with-sap-hcm-for-sap-s-4hana/setting-up-sap-successfactors-for-replication) | Understand Compound Employee, middleware, BIB and target processing in Branch A | Lesson; 30–45 min plus supervised lab |
| R4 | [EC and MDI: Common Configuration](https://help.sap.com/docs/successfactors-employee-central/integrating-sap-successfactors-employee-central-with-sap-master-data-integration/configuring-common-settings-for-integration-of-sap-successfactors-employee-central-with-sap-master-data-integration) | MDI common permissions, OAuth and inbound cost-center integration concerns | Documentation; 30–45 min for IF02 |
| R5 | [MDI Cross-Product Setup for EC](https://help.sap.com/docs/intelligent-enterprise/mdi-cross-product-guide/master-data-replication-setup-instructions-for-sap-successfactors-employee-central?locale=en-US) | Coordinate EC, BTP, distribution and consumer prerequisites | Documentation; 45–60 min for IF02 |

**Your existing sources:** the attached Sprint Lab defines the educational structure. A GitHub search in architecture-center-atlas did not surface a matching replication plan. Drive search surfaced general SAP Activate workbooks, not verified project configuration. Your [Notion Replication note](https://app.notion.com/p/263ce6de6089804892eff28c9948a86d) describes ECP point-to-point replication: use it only for that context. Its sample timing is not an S/4HANA service commitment. No private project configuration has been inferred from these searches.

## 13. Sprint mastery questions and Feynman practice

Answer one question at a time during a facilitated session; grading is intentionally not invented before you answer.

1. What is replication, and why does this rollout need it?
2. How are an initial load and a delta load different?
3. How do effective date and last-modified time differ?
4. Why does this project use CPI/BIB for employee HCM data while MDI handles cost-center master data?
5. Why can an employee fail when the target cost center is missing?
6. How would you trace middleware success followed by a target failure?
7. Design a test proving a future-dated transfer does not take effect too early.
8. How would you handle a failed batch without duplicating successful employees?
9. What evidence would you require before approving the cutover?
10. How would you protect an energy operation from a replication backlog affecting people-dependent processes?

**Scoring:** each answer 1–10 for correctness, reasoning and evidence; total /100. Report strengths, gaps and next sprint. Quiz scores alone do not establish implementation mastery; combine with lab evidence.

**Feynman cycle:** explain the engineer-hire journey to a new colleague in 150 words → reviewer rates clarity 1–10 and identifies assumptions → explain the unclear portion with a simple analogy → repeat → finish by showing source, message and target evidence. Aim for 9/10 clarity with no missing ownership, timing or recovery step.

## 14. Rapid reference card — five-minute review

**Promise:** right employee, right target meaning, right effective date, proven business use.

**Before configuration:** confirm EC source, target edition/release, business purpose, supported route and accountable owners.

**Data journey:** select → exchange → validate/map → commit → confirm → reconcile → validate consumer.

**Selected route:** employee master/assignments EC → CPI → S/4HANA HCM; cost-center master through MDI to EC, with provider confirmed by Finance. ECP is outside this project.

**Remember:** person ≠ employment; effective date ≠ change timestamp; HTTP success ≠ target acceptance; target record ≠ completed business process.

**If it fails:** eligibility → API access → transport/distribution → target validation → confirmation → consumer. Correct the authoritative cause, replay safely, reconcile.

**Avoid:** mixing ECP and S/4HANA reports; copying obsolete guides; ignoring reference data; changing delta boundaries casually; logging unnecessary personal data; assuming universal five-minute replication.

**Evidence:** expected/actual values + validity + source/target keys + correlation IDs + exception ownership + sign-off.

## 15. Your first five working days

1. **Day 1:** complete Origin Story; ask the landscape questions; request a supervised walkthrough.
2. **Day 2:** confirm the route with leads; map one synthetic employee, employment and target identity.
3. **Day 3:** document company/cost-center dependencies and five required fields.
4. **Day 4:** observe a permitted non-production run; correlate source, exchange and target evidence.
5. **Day 5:** explain one success and one failure; review open questions; agree the next two learning sprints.

### Reusable implementation journal

**Sprint / date:**  
**Business question:**  
**Confirmed landscape and version:**  
**What I predicted:**  
**What I changed or observed:**  
**Evidence references, redacted:**  
**Expected vs actual target values and dates:**  
**Defect / root cause / recovery:**  
**What remains uncertain and who owns it:**  
**Reviewer and next experiment:**

### Artifact index

D01 Scope/landscape · D02 Ownership/identities/dates · D03 Dependencies · D04 Connectivity/security · D05 Selection contract · D06 Mapping · D07 First-run evidence · D08 Test pack · D09 Recovery runbook · D10 Readiness pack.

Keep a canonical reviewed version and explicit revision history. GitHub can version approved specifications and synthetic examples, Drive can hold controlled review materials, and Notion can index decisions and learning evidence. Do not claim automatic synchronization without an implemented and verified workflow. This deliverable is a Markdown plan; it does not configure or deploy the integration.


## 16. Dated rollout plan — 9 November 2026 to March 2027

These are proposed planning windows, not claims of completed work or an approved schedule. An early-March go-live requires the February readiness gate; a later date provides contingency. Learning runs alongside delivery, and payroll/time configuration and migration have their own workstreams.

| Window | Delivery focus | Your learning / evidence | Exit gate |
|---|---|---|---|
| 9–13 Nov 2026 | Baseline landscape, component readiness, exact countries, time ownership and cost-center route | Origin Story + S01–S02; D01/D02 | Named owners for remaining decisions |
| 16–20 Nov | Scope, identity/PERNR design, history/cutoff, mapping and service targets | S03–S04; dependency map and connectivity evidence | Approved interface design and test scope |
| 23–27 Nov | Confirm supported CPI content, EC extraction permissions, BIB metadata and first mappings | S05–S06; sample payload and mapping review | Technical prerequisites and mappings ready |
| 30 Nov–4 Dec | First synthetic employee end-to-end; reference-data and org dependency checks | S07–S08; trace hire/transfer and dates | First employee accepted in target |
| 7–11 Dec | Error recovery, replay, monitoring and a small representative cohort | S09–S10; D09/D10 | Supervised learning demonstration complete |
| 14–31 Dec | Broaden mappings, country variants and unit testing; align holiday staffing | Repeat weak labs; country-specific evidence | Build sufficiently stable for SIT; unresolved gaps escalated |
| 4–15 Jan 2027 | SIT cycle 1 across interfaces and approved countries | Trace business-event scenarios and target payroll/time prerequisites | Defect triage and first reconciliation report |
| 18–29 Jan | SIT cycle 2, recovery/volume tests and mock load 1 | Measure throughput and prove change-boundary handling | Representative scope reconciled; critical defects closed |
| 1–12 Feb | Business UAT, mock load 2 and payroll parallel/comparison cycle as agreed | Validate employee data effects with payroll/time owners | Business acceptance evidence and measured cutover plan |
| 15–26 Feb | Full-scope dress rehearsal, catch-up deltas, operations handover and go/no-go | Reconcile approved population; demonstrate recovery | Release only if readiness gates pass |
| March — exact date TBD | Approved cutover, first productive payroll/time validation and hypercare | Daily exceptions and business outcome checks | Stable agreed cycles and support acceptance |

**Schedule risk:** country readiness, access, payroll/time migration and parallel-run results can drive the critical path. If gates slip, escalate the scope/date trade-off; preserve reconciliation and business acceptance.

### Candidate country readiness matrix

| Country | In rollout? / headcount | Payroll/localization owner | Time scope | Country tests / acceptance |
|---|---|---|---|---|
| Saudi Arabia | TBD | TBD | TBD | TBD |
| United Arab Emirates | TBD | TBD | TBD | TBD |
| Qatar | TBD | TBD | TBD | TBD |
| Kuwait | TBD | TBD | TBD | TBD |
| Bahrain | TBD | TBD | TBD | TBD |
| Oman | TBD | TBD | TBD | TBD |

For each confirmed country, have the country payroll specialist define relevant statutory, payment, end-of-service, nationality/residency and calendar requirements using current authoritative guidance. Record which requirements affect replicated fields, target configuration, migration or separate interfaces. Do not invent statutory formulas from a generic GCC template.

### Scale the test population deliberately

1. **One synthetic employee:** prove connectivity, mapping, target persistence and confirmation.
2. **10–20 synthetic employees:** exercise hires, changes, manager dependencies and errors.
3. **100 representative employments:** include every confirmed country/legal entity and important employment pattern; expand if 100 cannot represent the scope.
4. **Full approved population:** rehearse the approximately 2,000-headcount load with a permitted production-like dataset, followed by changes and recovery tests.

Headcount is not the same as person, employment, personnel-number or effective-dated record count. Establish each expected count from the approved scope before reconciling. Test an agreed peak-change/backlog profile as well as the initial population. Do not infer performance from 2,000 headcount alone.

### Payroll and time readiness — separate from interface success

- Confirm whether all compensation, recurring/nonrecurring payments, bank and country-required fields needed by target payroll are covered by supported mappings or separate approved processes.
- Identify opening balances, year-to-date results, historical payroll and time balances required by the target; assign a migration owner and reconcile independently.
- Test a replicated hire and transfer through the configured payroll/time process with the relevant specialist; compare results against the approved baseline.
- Test retroactive corrections, terminations, rehires and payroll-period locks; document cutoffs and recovery controls.
- Identify absence/attendance/time-valuation ownership. Create IF04 designs when transactions must cross systems; do not assume IF01 transports all time data.
- Obtain country payroll and time-owner acceptance before releasing productive processing.

### MDI cost-center dependency tests

| Test | Evidence required |
|---|---|
| New cost center | Finance source, MDI distribution and EC object correlate with correct key and validity |
| Updated validity or status | EC reflects supported changes and correct effective-date behavior |
| Assignment round trip | Employee assigned in EC to replicated cost center arrives in S/4HANA with the intended Finance key/context |
| Same code in different contexts | Approved mapping prevents collisions across controlling areas or other key dimensions |
| Delayed/failed MDI update | Employee exception is visible; owned recovery restores consistency |
| Cutover ordering | Required cost centers exist and are valid before dependent employee processing |

Check the S/4HANA 2025-compatible provider setup rather than copying an older cost-center recipe: SAP documents a replacement of the earlier MDI scenario with a generic ABAP Protocol Adapter approach from S/4HANA 2022. Validate what is actually installed and used before changing the existing integration. [R7]

### Additional project-specific SAP references

- **R6:** [Cost Center Replication — S/4HANA provider to MDI](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/d761beaeedd949c18213f449f4617250/decbb94c95fa421ead9101e4c43683f7.html).
- **R7:** [Cost-center configuration and release-related implementation change](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/411cb79b20e04629918bd4009ca9a616/38a5bf19ddee435abb42b1017fcb62a1.html).
- **R8:** [Monitoring cost-center replication into EC](https://help.sap.com/docs/SAP_SUCCESSFACTORS_EMPLOYEE_CENTRAL/634eabb3d94044d2b319aaf7a8f18fb9/e5880d337ba04c1a825d03e57a68d28c.html).

**Revision 1.1:** incorporated the user's confirmed EC/S/4HANA 2025, HCM/payroll/time, CPI, MDI cost-center, GCC, 2,000-headcount and March 2027 baseline. Exact go-live date and unconfirmed technical/country decisions remain explicitly open.
