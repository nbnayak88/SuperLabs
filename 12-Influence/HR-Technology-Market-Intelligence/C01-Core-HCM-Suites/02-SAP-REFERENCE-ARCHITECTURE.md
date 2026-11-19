# C01 SAP SuccessFactors EC — Reference Architecture

## Logical flow

Identity provider / corporate SSO → SAP SuccessFactors employee and manager experience → Employee Central (effective-dated employee, employment, job, organization and foundation objects) → approved event/API integration → downstream payroll, time, finance, IAM, analytics and employee services.

Integration choices must be justified per target: SAP Integration Suite/Cloud Integration, supported APIs, SAP Master Data Integration where applicable, standard integrations, or governed partner adapters. **Do not assume MDI is the default employee replication mechanism.**

## Capability architecture

| Layer | SAP reference | Architecture decisions |
|---|---|---|
| Experience | EC employee/manager self-service; SAP SuccessFactors Work Zone where licensed | Personas, mobile, accessibility, language, navigation |
| Core records | Employee Central employment, personal and job information | Global/local data, effective dates, data stewardship |
| Organization | Legal entities, business units, divisions, departments, locations, positions | Position management vs job management, hierarchy rules |
| Business rules | EC rules, workflows and permissions | Event derivation, validation, propagation, approval routing |
| Security | Role-Based Permissions, SSO and audit | Segregation of duties, sensitive fields, access by target population |
| Connectivity | OData APIs, supported integration content, SAP Integration Suite | Delta vs full, error handling, replay, contracts |
| Data quality | Imports, validations, reconciliation | Duplicate prevention, code lists, effective dating |
| Analytics | People Analytics and approved reporting | Metrics definitions, role access, historical trend |
| Operations | Monitoring, release testing, support processes | Regression, service levels, data correction |

## Reference entities and relationships

Person → Employment → Job Information → Position (if configured) → Department / Business Unit / Legal Entity / Location.  
Employment also relates to manager, pay group and country-specific information subject to configuration.

**Critical design scenarios:** concurrent employment; global assignment; rehire; future-dated hires; retroactive transfers; manager changes; position vacancy; contingent workers; legal entity transfer; termination rescission; mass change; multiple time zones.

## SAP-first value propositions to prove

1. EC as authoritative employee source for connected SAP business processes.
2. Effective-dated history and organizational lineage.
3. Configurable workflow, validation and role-based access.
4. Supported integration architecture with error monitoring.
5. Global template plus approved localizations, without country-specific assumptions.

## Design risks and mitigations

| Risk | Mitigation |
|---|---|
| Incorrect future-dated hire visibility | Effective-date and search-index acceptance tests |
| Unauthorized manager access | RBP negative tests for all roles |
| Broken delta replication | Contract, retry, idempotency and reconciliation |
| Incorrect legal entity mapping | Country/legal-entity rule matrix and sample data |
| Over-customization | Standard-first fit-to-standard workshop and exception register |
| Incomplete historical migration | Field-level reconciliation and historical cutover policy |
| Sensitive data exposure to AI | Minimum-necessary fields, human review, approved processing |

## Architecture decision record

Record system of record, object ownership, data residency, integration pattern, event timing, SSO, RBP, extensibility, operational owner, rollback strategy and sign-offs.
