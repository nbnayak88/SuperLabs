# SAP-first reference architecture

Enterprise strategy and operational drivers + EC workforce actuals + finance budget + governed skills inputs → validated planning model → demand and supply scenarios → capacity/skills gap → risk assessment → intervention scenarios → cost impact → approval → execution handoff → actual-versus-plan feedback.

SAP documented reference: [Best Practices 58Q](https://help.sap.com/docs/SAP_SUCCESSFACTORS_WORKFORCE_ANALYTICS/8e4fa10bc0834941a5f2f7cae31b60f4/4eac13654a2f43c1bc4b8b7c439afdcb.html?locale=en-US). SAP Analytics Cloud planning is distinct from standard SuccessFactors reporting; verify license and supported integration. Use approved data pipelines and supported APIs; do not assume writeback into EC or native skills optimization.

| Model | Design |
|---|---|
| Demand | Output target / productivity, adjusted for service and capacity constraints |
| Supply | Opening FTE + hires + transfers in − exits − transfers out, adjusted for capacity |
| Gap | Demand minus available supply by role, skill, location and period |
| Intervention | Hire, develop, redeploy, contract or automate; model lead time, feasibility and cost |
| Cost | FTE × loaded rate plus explicit transition and intervention costs; reconcile to finance |
| Governance | Version, scenario, owner, assumption source, approval and audit |

Data grain: scenario × version × period × entity × job family × location × skill where supported. Distinguish headcount, FTE and productive capacity; avoid double counting multi-skilled workers. Use aggregate assumptions, human review, privacy thresholds and lawful data use. Avoid person-level adverse employment decisions based solely on model outputs.

ADRs: demand source, supply grain, skill taxonomy, forecast horizon, currency, scenario isolation, approvals, integration, privacy, model risk, actuals refresh and exit.