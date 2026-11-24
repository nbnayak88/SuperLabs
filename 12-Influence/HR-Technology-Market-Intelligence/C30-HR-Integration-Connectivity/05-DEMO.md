# 100-minute role-based demo

Personas: HRIS lead, integration architect, payroll lead, finance master data owner, security reviewer and operations lead.

| Minutes | Scenario | Proof |
|---|---|---|
| 0–10 | Landscape and interface catalog | Ownership |
| 10–22 | EC worker API extraction | Authorization and pagination |
| 22–34 | Mapping and effective dating | Contract validation |
| 34–46 | Cost center master data | Reconciliation |
| 46–58 | Event-driven worker update | Deduplication and ordering |
| 58–70 | Secure file transfer | SSH and host verification |
| 70–80 | API management | Scope and policy |
| 80–88 | Outage and partial failure | Retry and replay |
| 88–96 | Monitoring and transport | Audit and operational readiness |
| 96–100 | TCO and decision | Evidence |

Score connectivity 25%, reliability 25%, security 25%, lifecycle 15%, TCO 10%. Challenge: target accepts a worker update but response is lost; reconcile before replay.