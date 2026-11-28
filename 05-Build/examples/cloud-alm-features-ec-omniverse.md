# SAP Cloud ALM "Features" for the OmniVerse Energy SuccessFactors Employee Central Implementation

**Context:** SAP SuccessFactors Employee Central (EC) implementation, OmniVerse Energy (energy industry), SAP Cloud ALM project "OmniVerse Energy HR …"
**Screen reviewed:** Features app, list "Open Features", a new Feature in status *In Specification* with tabs Description / Transports / Relations / References / Additional Information.

---

## 1. Bottom line

| Question | Answer |
|---|---|
| What is a Feature in Cloud ALM? | The **change record and delivery vehicle**. It groups the user stories that ship together and carries the **transports** that move that change through Test to Production. |
| Is it essential for an EC implementation? | **Partly. It is optional, not core.** Requirements, User Stories, Tasks, Processes and Test Management carry the project. Features only add value for **release and change governance**. |
| Where does it earn its place? | (a) Documenting **Configuration Center / Instance Sync bundles** as manual Transport References. (b) Release grouping and go-live readiness. (c) Linked **S/4HANA, BTP or Integration Suite** changes in the same release. (d) Hypercare and post-go-live change control. |
| Where does it not help? | EC configuration is **not transported through Cloud ALM** the way ABAP/CTS or BTP content is. Cloud ALM will not push the config for you. |
| Recommendation | **Use Features lightly: one Feature per release or deployment package.** Do not use them as a second requirements list. |

---

## 2. What the screen shows

| Screen element | Meaning for you |
|---|---|
| **Open Features** (left list) | Filtered work list. Filters include Project, Scope, Status, Priority, Responsible, Release, Workstream, Transports and Tags. |
| **Status: In Specification** | Early lifecycle state. A Feature can be deleted only while it is *Not Planned* or *In Specification*. Deployment to Production is possible only at *Ready for Production*. |
| **Title** (mandatory) | Name the Feature as a deployable package, not as a requirement. |
| **Transports (0)** | Where transports or transport references are attached. For EC this is mostly **manual references** (see section 5). |
| **Relations** | Links to Requirements, User Stories, Project Tasks, Test Cases and Processes. This is the traceability hook. |
| **References / Additional Information** | Links, notes, release and workstream assignment. |
| **Release** filter | Ties the Feature to a planned release or timebox. Useful for EC waves. |

---

## 3. How relevant is it for EC? (by implementation activity)

| EC implementation activity | Relevance of Features | Why |
|---|---|---|
| Fit-to-standard workshops and requirement capture | Low | Done with Processes (the 29 SuccessFactors solution processes) and Requirements. |
| Detailed configuration backlog (Foundation Objects, MDF, Business Rules, Position Management, Workflows) | Low to Medium | Tracked as User Stories and Tasks. A Feature only groups them for delivery. |
| Moving config DEV/TEST to PROD (Configuration Center, Instance Sync, Provisioning) | **Medium** | A Feature plus **manual Transport References** documents what moved and when. Cloud ALM does not execute it. |
| Integrations (EC to S/4HANA, Employee Central Payroll, BTP, Integration Suite) | **High** | These layers can have real transports. One Feature can bundle the EC config, the integration flow and the ABAP/BTP change. |
| Data migration and cutover | Low | Better managed as Tasks and the cutover plan. |
| Test and defect management | Indirect | Features give **Feature Traceability**, showing readiness through related stories, tasks and tests. |
| Hypercare and post-go-live enhancements | **Medium to High** | Good fit for change control of small releases. |

---

## 4. Requirements vs User Stories vs Features

### 4.1 Definitions and roles

| Attribute | **Requirement** | **User Story** | **Feature** |
|---|---|---|---|
| Purpose | **What** the business needs | **How** a requirement is built, in small steps | **Package** that is delivered and deployed |
| Level | Business / functional | Delivery / build | Release / deployment |
| Typical owner | Business process owner, functional lead | Functional consultant, developer | Change/deployment manager, project lead |
| Created from | Solution Process, workshop, change request | Requirement or Process (can also be created directly) | Requirement, or standalone |
| Approval | Optional approval flag (no status impact) | Not needed | Status lifecycle up to *Ready for Production* |
| Sub-items | User Stories, Tasks, Test Cases | Sub-tasks, Test Cases | User Stories, Project Tasks, Transports |
| Transport-related | No | No | **Yes** |
| Agile sprint planning | Backlog (Requirements backlog) | **Yes**, assigned to Sprints | No, assigned to a Release |
| Traceability view | Requirement Traceability | User Story Traceability | Feature Traceability with Deployment Status |
| Needed for EC? | **Yes** | **Yes** (if you plan in sprints or want a backlog) | **Optional** |

### 4.2 How they chain together

```
Solution Process (EC process, e.g. "Hire to Retire")
        |
        v
   Requirement  --(approval)-->  User Stories  --> Sub-tasks
        |                             |
        |                             +--> Test Cases
        v
     Feature  <-- assigned User Stories
        |
        +--> Transports / Transport References --> Release --> Production
```

---

## 5. Illustrative traceability for OmniVerse Energy (EC)

> Examples below are **illustrative placeholders** to show the pattern. Replace them with OmniVerse Energy's actual requirements.

| Requirement (business need) | User Stories (build steps) | Feature (delivery package) | Transport / reference type |
|---|---|---|---|
| REQ-01 Model plants, rigs and field sites in the org structure | US-01 Configure Location and Geozone FOs. US-02 Build Legal Entity to Business Unit to Division to Department. US-03 Load FO data templates | FEAT-01 EC Org Structure R1 | Manual reference: Configuration Center bundle |
| REQ-02 Track HSE-critical certifications for field personnel | US-04 Add certification fields (MDF / Generic Objects). US-05 Add business rule alerts for expiry. US-06 Configure role-based permissions | FEAT-02 HSE Compliance Data R1 | Manual reference: Instance Sync / Config Center bundle |
| REQ-03 Support shift and rotational work patterns | US-07 Configure Work Schedules. US-08 Configure Time Off policies | FEAT-03 Workforce Time R1 | Manual reference: Config Center bundle |
| REQ-04 Employee master data replicated to S/4HANA | US-09 Configure Integration Center / Master Data Integration flows. US-10 Map org assignments. US-11 Cost center replication test | FEAT-04 EC to S/4 Integration R1 | **Real transports** on the S/4 or BTP side, plus manual reference for the EC side |
| REQ-05 Workflow approvals for position and job changes | US-12 Build Workflow Configuration. US-13 Configure Business Rules and Role-Based Permissions | FEAT-05 Workflow and Rules R1 | Manual reference |

---

## 6. Practical recommendation for your project

| # | Recommendation |
|---|---|
| 1 | **Requirements first:** capture scope as Requirements linked to the EC solution processes. Use the approval flag if governance needs it. |
| 2 | **User Stories for build work:** one story per configurable unit (a Foundation Object set, a rule set, an integration flow). |
| 3 | **Features by release, not by requirement:** create about one Feature per release wave or deployment bundle. For example: Org and Foundation, Core EC, Integration, Payroll Link. |
| 4 | **Record every EC move to Test and Production:** add the Configuration Center or Instance Sync package as a **Transport Reference** in the Feature. This is the main EC benefit. |
| 5 | **Name Features consistently:** `FEAT-<nn> <module> <release>`. Rename the default "New Feature" title. |
| 6 | **Use Release and Workstream filters** to build go-live readiness views for the steering committee. |
| 7 | **Skip Features** if the team is small, there is a single go-live, and there are no S/4 or BTP changes. Stories, tasks and test management will cover you. |

---

## 7. Caveats to verify

| Item | Note |
|---|---|
| SuccessFactors native transport integration | SAP learning content described SuccessFactors integration with SAP Cloud TMS as **planned**. SAP Cloud ALM documentation describes **Transport References** for external transports without direct integration, such as SuccessFactors Configuration Bundles. **Check the current roadmap and the supported-content list** before depending on it. |
| Configuration tools for EC | Configuration Center and Instance Sync are the SuccessFactors tools. SAP's roadmap states the Configuration Transport Center will support all artifacts the Instance Sync tool supports. Provisioning-level items may still be manual. |
| SuccessFactors content in Cloud ALM | Cloud ALM provides 29 SuccessFactors solution processes in 12 scenarios, and it is included with SuccessFactors subscriptions under SAP Enterprise Support, cloud editions. |

---

## Sources

- SAP Learning: Managing the Successful Deployment and Go-Live: https://learning.sap.com/courses/introducing-sap-cloud-alm/managing-the-successful-deployment-and-go-live_a8641dd8-acc3-432d-aeb0-3f6840dff980
- SAP Learning: Managing Requirements: https://learning.sap.com/courses/implementing-with-sap-cloud-alm/managing-requirements_afaf2b0f-ff6b-40af-beaa-3657843cee5a
- SAP Support Portal, Requirement Management: https://support.sap.com/en/alm/sap-cloud-alm/implementation/sap-cloud-alm-implementation-expert-portal/new-requirement-management.html
- SAP Support Portal, Release and Deployment Management: https://support.sap.com/ja/alm/sap-cloud-alm/implementation/sap-cloud-alm-implementation-expert-portal/change-deployment-mangement.html
- SAP Blog, End-to-end story for implementation in SAP Cloud ALM: https://blogs.sap.com/t5/technology-blogs-by-sap/end-to-end-story-for-implementation-in-sap-cloud-alm/ba-p/13561408
- SAP Blog, How to get ready for Change & Deployment Management: https://answers.sap.com/t5/technology-blogs-by-sap/how-to-get-ready-for-change-deployment-management-in-sap-cloud-alm/ba-p/13497272
- SAP Cloud ALM for SuccessFactors: https://support.sap.com/en/alm/sap-cloud-alm/sap-cloud-alm-for-successfactors.html
- SAP KBA 3047688 (Configuration Center vs Instance Sync): https://userapps.support.sap.com/sap/support/knowledge/en/3047688
