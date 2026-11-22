export const chapters = [
  {
    "title": "Financial planning and analysis",
    "short": "Plan",
    "outcome": "Connect a business driver to a financial decision.",
    "steps": [
      [
        "Connect the value drivers",
        "Explore how sales volume and delivery cost influence the operating result.",
        "Driver-based planning",
        "Value driver model"
      ],
      [
        "Give the plan an owner",
        "Make planning tasks, reviewers and target dates visible to the team.",
        "Planning calendar",
        "Planning assignments"
      ],
      [
        "Compare your plan versions",
        "Inspect the gap between actuals, forecast and an alternative scenario.",
        "Plan version comparison",
        "Forecast versions"
      ],
      [
        "Explain the variance",
        "Connect a reported deviation to the business reason that created it.",
        "Variance review",
        "Performance explanation"
      ],
      [
        "Connect market and margin",
        "Compare sales signals with profitability by business segment.",
        "Connected profitability",
        "Segment economics"
      ],
      [
        "Trace a result to its records",
        "Follow a segment result down to the transactions behind it.",
        "Profitability drill-down",
        "Transaction evidence"
      ],
      [
        "Understand overhead allocation",
        "See how shared costs reach the teams that consume a service.",
        "Overhead allocation",
        "Cost responsibility"
      ],
      [
        "Compare what-if outcomes",
        "Review alternative assumptions before selecting a forecast for discussion.",
        "Predictive scenario review",
        "Scenario options"
      ]
    ],
    "views": [
      {
        "heads": [
          "Driver",
          "Base case",
          "Relationship"
        ],
        "rows": [
          [
            "Service volume",
            "1,000 units",
            "Revenue = volume × rate"
          ],
          [
            "Average rate",
            "USD 12,000",
            "Defines revenue per unit"
          ],
          [
            "Variable cost",
            "USD 7,000 / unit",
            "Scales with volume"
          ]
        ],
        "notice": "Change the volume driver below and compare the result."
      },
      {
        "heads": [
          "Task",
          "Owner",
          "Review date"
        ],
        "rows": [
          [
            "Volume assumptions",
            "Ananya / Operations",
            "03 Dec 2026"
          ],
          [
            "Cost assumptions",
            "Dev / Finance",
            "05 Dec 2026"
          ],
          [
            "Forecast review",
            "Meera / CFO",
            "08 Dec 2026"
          ]
        ],
        "notice": "A plan becomes actionable when each assumption has an accountable owner."
      },
      {
        "heads": [
          "USD million",
          "Actual",
          "Forecast",
          "Scenario"
        ],
        "rows": [
          [
            "Revenue",
            "12.0",
            "12.6",
            "13.2"
          ],
          [
            "Operating cost",
            "9.0",
            "9.3",
            "9.6"
          ],
          [
            "Operating result",
            "3.0",
            "3.3",
            "3.6"
          ]
        ],
        "notice": "A larger revenue number is useful only when its cost assumptions are visible."
      },
      {
        "heads": [
          "Measure",
          "Variance",
          "Business explanation"
        ],
        "rows": [
          [
            "Revenue",
            "+0.6m",
            "Additional service volume"
          ],
          [
            "Delivery cost",
            "+0.3m",
            "More site visits"
          ],
          [
            "Operating result",
            "+0.3m",
            "Volume gain exceeds incremental cost"
          ]
        ],
        "notice": "An explanation supports a decision better than a standalone KPI."
      },
      {
        "heads": [
          "Segment",
          "Sales pipeline",
          "Margin"
        ],
        "rows": [
          [
            "Generation services",
            "USD 4.2m",
            "28%"
          ],
          [
            "Distribution advisory",
            "USD 3.1m",
            "24%"
          ],
          [
            "Energy transition",
            "USD 5.3m",
            "31%"
          ]
        ],
        "notice": "The strongest pipeline and the strongest margin need not belong to the same segment."
      },
      {
        "heads": [
          "Record",
          "Segment",
          "Contribution"
        ],
        "rows": [
          [
            "SO-2041",
            "Energy transition",
            "USD 180,000"
          ],
          [
            "SO-2042",
            "Energy transition",
            "USD 95,000"
          ],
          [
            "Adjustment J-811",
            "Energy transition",
            "USD −12,000"
          ]
        ],
        "notice": "A useful drill-down preserves the link between a total and its evidence."
      },
      {
        "heads": [
          "Sender",
          "Receiver",
          "Allocation basis"
        ],
        "rows": [
          [
            "Shared IT",
            "Generation services",
            "120 service users"
          ],
          [
            "Shared IT",
            "Distribution advisory",
            "80 service users"
          ],
          [
            "Shared IT",
            "Energy transition",
            "100 service users"
          ]
        ],
        "notice": "Ask whether the allocation basis reflects the way the service is consumed."
      },
      {
        "heads": [
          "Scenario",
          "Revenue",
          "Operating result"
        ],
        "rows": [
          [
            "Conservative",
            "USD 11.4m",
            "USD 2.7m"
          ],
          [
            "Base",
            "USD 12.0m",
            "USD 3.0m"
          ],
          [
            "Growth",
            "USD 13.2m",
            "USD 3.6m"
          ]
        ],
        "notice": "These are illustrative scenarios, not a live predictive-model output."
      }
    ]
  },
  {
    "title": "Accounting and financial close",
    "short": "Close",
    "outcome": "Trace the numbers, resolve exceptions and explain the close.",
    "steps": [
      [
        "Compare ledger perspectives",
        "Inspect the same fictional transaction across two reporting ledgers.",
        "Parallel ledger view",
        "Ledger comparison"
      ],
      [
        "Add a useful dimension",
        "Read the result by company, cost centre and profit centre.",
        "Dimensional accounting",
        "Report dimensions"
      ],
      [
        "Compare asset valuations",
        "Inspect how an asset can have different values in different ledgers.",
        "Asset valuation",
        "Fixed asset perspectives"
      ],
      [
        "Review receipt exceptions",
        "Compare received goods with invoiced amounts and isolate differences.",
        "Receipt reconciliation",
        "Goods and invoice matching"
      ],
      [
        "Make journal review visible",
        "Follow preparation, validation and approval of a journal entry.",
        "Journal workflow",
        "Journal review"
      ],
      [
        "Keep the document chain",
        "Follow the references that connect an order to its accounting document.",
        "Document traceability",
        "Document references"
      ],
      [
        "Monitor the close together",
        "See closing-task ownership and blockers across entities.",
        "Close monitor",
        "Entity closing status"
      ],
      [
        "Resolve an intercompany gap",
        "Compare both sides of an intercompany transaction before reconciliation.",
        "Intercompany reconciliation",
        "Matching exceptions"
      ],
      [
        "Explain the group statement",
        "Read a simplified group result and the adjustments that shaped it.",
        "Group reporting",
        "Group statement"
      ]
    ],
    "views": [
      {
        "heads": [
          "Ledger",
          "Currency",
          "Reported amount"
        ],
        "rows": [
          [
            "Group reporting",
            "USD",
            "120,000"
          ],
          [
            "Local reporting",
            "EUR",
            "110,000"
          ],
          [
            "Management view",
            "USD",
            "120,000"
          ]
        ],
        "notice": "A ledger perspective and its currency must be clear before comparing values."
      },
      {
        "heads": [
          "Company",
          "Cost centre",
          "Profit centre",
          "Amount"
        ],
        "rows": [
          [
            "OV01",
            "Maintenance",
            "Generation",
            "USD 42,000"
          ],
          [
            "OV01",
            "Advisory",
            "Distribution",
            "USD 31,000"
          ],
          [
            "OV02",
            "Projects",
            "Transition",
            "USD 47,000"
          ]
        ],
        "notice": "Dimensions let the same transaction answer different business questions."
      },
      {
        "heads": [
          "Asset",
          "Group carrying value",
          "Local carrying value"
        ],
        "rows": [
          [
            "Turbine A-104",
            "USD 820,000",
            "USD 805,000"
          ],
          [
            "Substation A-208",
            "USD 640,000",
            "USD 655,000"
          ],
          [
            "Vehicle A-311",
            "USD 36,000",
            "USD 34,000"
          ]
        ],
        "notice": "The sample illustrates a valuation difference; it does not apply an accounting policy."
      },
      {
        "heads": [
          "Purchase order",
          "Goods received",
          "Invoice",
          "Review"
        ],
        "rows": [
          [
            "PO-318",
            "USD 48,000",
            "USD 48,000",
            "Matched"
          ],
          [
            "PO-319",
            "USD 22,000",
            "USD 24,000",
            "Price difference"
          ],
          [
            "PO-320",
            "USD 15,000",
            "Not received",
            "Awaiting invoice"
          ]
        ],
        "notice": "An exception list directs attention to the records requiring review."
      },
      {
        "heads": [
          "Stage",
          "Responsible role",
          "Status"
        ],
        "rows": [
          [
            "Prepare accrual",
            "Accountant",
            "Complete"
          ],
          [
            "Validate coding",
            "Controller",
            "Complete"
          ],
          [
            "Approve posting",
            "Finance lead",
            "Pending"
          ]
        ],
        "notice": "This is a simulated workflow; no accounting entry is posted."
      },
      {
        "heads": [
          "Document",
          "Reference",
          "Relationship"
        ],
        "rows": [
          [
            "Sales order",
            "SO-2041",
            "Business request"
          ],
          [
            "Billing document",
            "INV-8104",
            "References SO-2041"
          ],
          [
            "Accounting document",
            "JE-3318",
            "References INV-8104"
          ]
        ],
        "notice": "A traceable chain helps explain how a business event reached the ledger."
      },
      {
        "heads": [
          "Entity",
          "Task progress",
          "Blocker"
        ],
        "rows": [
          [
            "OV01 / Energy services",
            "18 of 20",
            "Accrual review"
          ],
          [
            "OV02 / Transition",
            "20 of 20",
            "None"
          ],
          [
            "OV03 / Distribution",
            "16 of 20",
            "Intercompany mismatch"
          ]
        ],
        "notice": "Task status identifies where the team needs a conversation."
      },
      {
        "heads": [
          "Reference",
          "Entity A",
          "Entity B",
          "Difference"
        ],
        "rows": [
          [
            "IC-4401",
            "USD 90,000",
            "USD 90,000",
            "0"
          ],
          [
            "IC-4402",
            "USD 45,000",
            "USD 43,500",
            "USD 1,500"
          ],
          [
            "IC-4403",
            "USD 21,000",
            "USD 21,000",
            "0"
          ]
        ],
        "notice": "The USD 1,500 difference needs investigation; no automatic adjustment is made."
      },
      {
        "heads": [
          "USD million",
          "Before adjustments",
          "Adjustment",
          "Reported"
        ],
        "rows": [
          [
            "Revenue",
            "15.0",
            "−3.0",
            "12.0"
          ],
          [
            "Operating costs",
            "11.7",
            "−2.7",
            "9.0"
          ],
          [
            "Operating result",
            "3.3",
            "−0.3",
            "3.0"
          ]
        ],
        "notice": "A useful group statement keeps the adjustment story visible."
      }
    ]
  },
  {
    "title": "Finance operations",
    "short": "Operate",
    "outcome": "Turn receivables and payables signals into focused action.",
    "steps": [
      [
        "Find the receivables priority",
        "Inspect open customer balances and filter the items needing attention.",
        "Receivables cockpit",
        "Customer balances"
      ],
      [
        "Prioritize the next conversation",
        "Review a collections worklist with an owner and a specific next action.",
        "Collections worklist",
        "Collection priorities"
      ],
      [
        "Give a dispute its context",
        "Keep the reason, supporting record and responsible person together.",
        "Dispute resolution",
        "Dispute case"
      ],
      [
        "Inspect payables signals",
        "Compare supplier balances with overdue amounts and upcoming deadlines.",
        "Payables cockpit",
        "Supplier balances"
      ],
      [
        "Spot a discount opportunity",
        "See the timing and amount associated with an illustrative early-payment offer.",
        "Discount review",
        "Payment discount options"
      ],
      [
        "Understand payable ageing",
        "Review overdue balances by age rather than as one total.",
        "Payable ageing",
        "Ageing buckets"
      ],
      [
        "Explain a matching rule",
        "Inspect the criteria that connect a bank statement item to an open invoice.",
        "Bank processing rules",
        "Matching rule"
      ],
      [
        "Review the unmatched receipt",
        "Compare a receipt with candidate invoices before clearing.",
        "Cash application",
        "Receipt matching"
      ]
    ],
    "views": [
      {
        "heads": [
          "Customer",
          "Open balance",
          "Days overdue"
        ],
        "rows": [
          [
            "Northwind Services",
            "USD 84,000",
            "45"
          ],
          [
            "Harbor Industries",
            "USD 52,000",
            "12"
          ],
          [
            "Greenline Partners",
            "USD 36,000",
            "0"
          ]
        ],
        "notice": "Use the local filter below to focus on overdue balances."
      },
      {
        "heads": [
          "Priority",
          "Customer",
          "Owner",
          "Next action"
        ],
        "rows": [
          [
            "1",
            "Northwind Services",
            "Priya",
            "Confirm payment promise"
          ],
          [
            "2",
            "Harbor Industries",
            "Arjun",
            "Clarify invoice question"
          ],
          [
            "3",
            "Greenline Partners",
            "Priya",
            "Monitor due date"
          ]
        ],
        "notice": "The worklist supports human follow-up; it does not contact customers."
      },
      {
        "heads": [
          "Field",
          "Illustrative value"
        ],
        "rows": [
          [
            "Case",
            "DSP-0072"
          ],
          [
            "Reason",
            "Customer disputes service quantity"
          ],
          [
            "Invoice",
            "INV-8104 / USD 24,000"
          ],
          [
            "Next action",
            "Operations to verify acceptance record"
          ]
        ],
        "notice": "Evidence comes before a proposed resolution."
      },
      {
        "heads": [
          "Supplier",
          "Open amount",
          "Overdue",
          "Due next 7 days"
        ],
        "rows": [
          [
            "Horizon Advisory",
            "USD 120,000",
            "USD 0",
            "USD 40,000"
          ],
          [
            "Vertex Maintenance",
            "USD 76,000",
            "USD 12,000",
            "USD 18,000"
          ],
          [
            "Bluepeak Systems",
            "USD 54,000",
            "USD 0",
            "USD 22,000"
          ]
        ],
        "notice": "A payable amount alone does not explain its payment priority."
      },
      {
        "heads": [
          "Invoice",
          "Amount",
          "Offer",
          "Deadline"
        ],
        "rows": [
          [
            "SUP-541",
            "USD 40,000",
            "2% / USD 800",
            "05 Dec 2026"
          ],
          [
            "SUP-542",
            "USD 18,000",
            "1% / USD 180",
            "07 Dec 2026"
          ],
          [
            "SUP-543",
            "USD 22,000",
            "No offer",
            "Standard due date"
          ]
        ],
        "notice": "These are sample commercial terms; choosing payment requires a separate decision."
      },
      {
        "heads": [
          "Age bucket",
          "Open balance",
          "Focus"
        ],
        "rows": [
          [
            "Not yet due",
            "USD 220,000",
            "Plan cash need"
          ],
          [
            "1–30 days overdue",
            "USD 18,000",
            "Review blockers"
          ],
          [
            "31–60 days overdue",
            "USD 12,000",
            "Escalate unresolved item"
          ]
        ],
        "notice": "Ageing helps distinguish planned payments from unresolved exceptions."
      },
      {
        "heads": [
          "Rule component",
          "Sample criterion"
        ],
        "rows": [
          [
            "Reference",
            "Invoice number must match"
          ],
          [
            "Amount",
            "Exact amount in same currency"
          ],
          [
            "Tolerance",
            "No difference allowed"
          ],
          [
            "Unmatched result",
            "Send to review worklist"
          ]
        ],
        "notice": "A matching rule should expose its criteria and exception path."
      },
      {
        "heads": [
          "Reference",
          "Amount",
          "Match status"
        ],
        "rows": [
          [
            "Receipt RC-0831",
            "USD 84,000",
            "Invoice reference missing"
          ],
          [
            "Candidate INV-8002",
            "USD 84,000",
            "Amount match"
          ],
          [
            "Review decision",
            "Pending",
            "Confirm remittance evidence"
          ]
        ],
        "notice": "The sample suggests a candidate; it does not clear a customer account."
      }
    ]
  },
  {
    "title": "Compliance and tax management",
    "short": "Comply",
    "outcome": "Keep obligations, evidence and review responsibility visible.",
    "steps": [
      [
        "See the reporting work",
        "Inspect sample obligations, owners and internal target dates.",
        "Compliance cockpit",
        "Reporting obligations"
      ],
      [
        "Understand the task pattern",
        "Summarize reporting tasks by status and operating location.",
        "Compliance analysis",
        "Task analysis"
      ],
      [
        "Organize the reporting review",
        "Make preparation, validation and review gates visible.",
        "Statutory reporting workspace",
        "Reporting review gates"
      ],
      [
        "Follow an electronic document",
        "Trace a sample electronic document through validation and acknowledgement.",
        "Electronic document review",
        "Document status"
      ],
      [
        "Inspect the document queue",
        "See how many sample records sit at each processing stage.",
        "Electronic document flow",
        "Processing queue"
      ],
      [
        "Investigate a control issue",
        "Connect an issue to its process, severity and accountable owner.",
        "Control issue review",
        "Issue details"
      ],
      [
        "Review a period assignment",
        "Inspect why an item is included, held or excluded from a reporting period.",
        "Reporting period review",
        "Period decisions"
      ],
      [
        "Check readiness before submission",
        "Review a pre-submission checklist and its unresolved evidence.",
        "Submission readiness",
        "Review checklist"
      ]
    ],
    "views": [
      {
        "heads": [
          "Requirement",
          "Owner",
          "Internal target",
          "Status"
        ],
        "rows": [
          [
            "Periodic reporting package",
            "Maya",
            "05 Dec 2026",
            "In preparation"
          ],
          [
            "Electronic document review",
            "Dev",
            "03 Dec 2026",
            "Exception"
          ],
          [
            "Control evidence review",
            "Ananya",
            "07 Dec 2026",
            "Scheduled"
          ]
        ],
        "notice": "All dates and requirements here are fictional internal targets, not statutory guidance."
      },
      {
        "heads": [
          "Location",
          "Ready",
          "In review",
          "Exception"
        ],
        "rows": [
          [
            "Operations North",
            "12",
            "3",
            "1"
          ],
          [
            "Operations South",
            "10",
            "4",
            "2"
          ],
          [
            "Shared services",
            "18",
            "2",
            "0"
          ]
        ],
        "notice": "A status summary identifies where to investigate; it does not prove compliance."
      },
      {
        "heads": [
          "Gate",
          "Owner",
          "Evidence"
        ],
        "rows": [
          [
            "Prepare package",
            "Reporting analyst",
            "Draft report"
          ],
          [
            "Validate inputs",
            "Controller",
            "Reconciliation notes"
          ],
          [
            "Authorize submission",
            "Designated approver",
            "Approval record"
          ]
        ],
        "notice": "The workflow is illustrative and sends nothing to an authority."
      },
      {
        "heads": [
          "Document",
          "Validation",
          "Acknowledgement"
        ],
        "rows": [
          [
            "ED-0101",
            "Passed",
            "Received"
          ],
          [
            "ED-0102",
            "Missing reference",
            "Not sent"
          ],
          [
            "ED-0103",
            "Passed",
            "Pending"
          ]
        ],
        "notice": "An exception must be resolved before a document moves forward."
      },
      {
        "heads": [
          "Stage",
          "Documents",
          "Required action"
        ],
        "rows": [
          [
            "Prepared",
            "18",
            "Validate content"
          ],
          [
            "Validation exception",
            "2",
            "Correct missing data"
          ],
          [
            "Acknowledged",
            "36",
            "Retain evidence"
          ]
        ],
        "notice": "Status labels make the queue understandable without opening each record."
      },
      {
        "heads": [
          "Issue",
          "Process",
          "Priority",
          "Owner"
        ],
        "rows": [
          [
            "Missing approval",
            "Journal review",
            "High",
            "Finance lead"
          ],
          [
            "Duplicate attachment",
            "Reporting evidence",
            "Low",
            "Reporting analyst"
          ],
          [
            "Late reconciliation",
            "Period close",
            "Medium",
            "Controller"
          ]
        ],
        "notice": "Priorities are illustrative classifications, not a formal control assessment."
      },
      {
        "heads": [
          "Item",
          "Sample period",
          "Decision",
          "Reason"
        ],
        "rows": [
          [
            "TX-110",
            "Nov 2026",
            "Included",
            "Evidence complete"
          ],
          [
            "TX-111",
            "Nov 2026",
            "Hold",
            "Pending document review"
          ],
          [
            "TX-112",
            "Nov 2026",
            "Excluded",
            "Duplicate record"
          ]
        ],
        "notice": "This demonstrates a review conversation; it does not establish a tax treatment."
      },
      {
        "heads": [
          "Check",
          "Result",
          "Follow-up"
        ],
        "rows": [
          [
            "Required records",
            "Present",
            "None"
          ],
          [
            "Reconciliation",
            "Complete",
            "Controller sign-off"
          ],
          [
            "Approval evidence",
            "Pending",
            "Obtain approval"
          ]
        ],
        "notice": "No filing or transmission occurs in this demonstration."
      }
    ]
  },
  {
    "title": "Treasury management",
    "short": "Treasury",
    "outcome": "Connect cash visibility to a controlled liquidity decision.",
    "steps": [
      [
        "Know the bank-account context",
        "Read account ownership, currency and reconciliation status together.",
        "Bank account overview",
        "Account inventory"
      ],
      [
        "Read the cash-flow outlook",
        "Compare the expected inflows and outflows that form a short-term cash view.",
        "Cash-flow analysis",
        "Cash forecast"
      ],
      [
        "Explore a liquidity scenario",
        "Compare a base collection case with a delayed-receipt case.",
        "Liquidity planning",
        "Liquidity scenarios"
      ],
      [
        "Inspect a payment batch",
        "See batch status, approval responsibility and the exceptions needing review.",
        "Payment monitor",
        "Payment batch"
      ],
      [
        "Follow one payment item",
        "Trace the review and acknowledgement stages for a sample payment item.",
        "Payment item flow",
        "Payment history"
      ],
      [
        "Review the bank-message queue",
        "Separate acknowledged messages from those requiring investigation.",
        "Bank communication",
        "Message worklist"
      ],
      [
        "Connect the treasury indicators",
        "Read cash, upcoming commitments and sample debt exposure in one view.",
        "Treasury dashboard",
        "Treasury overview"
      ],
      [
        "Review the near-term position",
        "Compare liquid resources with upcoming operational commitments.",
        "Financial position review",
        "Resources and commitments"
      ],
      [
        "Complete the finance journey",
        "Review how the five finance disciplines connect before choosing what to explore next.",
        "Finance journey complete",
        "Connected finance summary"
      ]
    ],
    "views": [
      {
        "heads": [
          "Account",
          "Currency",
          "Owner",
          "Review status"
        ],
        "rows": [
          [
            "Operating account 01",
            "USD",
            "Treasury",
            "Reconciled"
          ],
          [
            "Project account 02",
            "EUR",
            "Treasury",
            "Review pending"
          ],
          [
            "Collection account 03",
            "USD",
            "Shared services",
            "Reconciled"
          ]
        ],
        "notice": "All accounts are fictional labels, without actual bank details."
      },
      {
        "heads": [
          "USD million",
          "Week 1",
          "Week 2",
          "Week 3"
        ],
        "rows": [
          [
            "Customer receipts",
            "1.20",
            "0.95",
            "1.10"
          ],
          [
            "Supplier payments",
            "−0.75",
            "−0.80",
            "−0.72"
          ],
          [
            "Payroll and overhead",
            "−0.25",
            "−0.25",
            "−0.25"
          ],
          [
            "Net movement",
            "0.20",
            "−0.10",
            "0.13"
          ]
        ],
        "notice": "Expected cash flows carry uncertainty; keep their timing visible."
      },
      {
        "heads": [
          "Scenario",
          "Opening cash",
          "Net movement",
          "Closing cash"
        ],
        "rows": [
          [
            "Base",
            "USD 2.40m",
            "USD 0.20m",
            "USD 2.60m"
          ],
          [
            "Receipts delayed",
            "USD 2.40m",
            "USD −0.40m",
            "USD 2.00m"
          ]
        ],
        "notice": "Use the local scenario selector below to compare the illustration."
      },
      {
        "heads": [
          "Batch",
          "Amount",
          "Status",
          "Next action"
        ],
        "rows": [
          [
            "PAY-1201",
            "USD 180,000",
            "Approved",
            "Await bank response"
          ],
          [
            "PAY-1202",
            "USD 95,000",
            "In review",
            "Complete approval"
          ],
          [
            "PAY-1203",
            "USD 24,000",
            "Exception",
            "Correct reference"
          ]
        ],
        "notice": "The sample shows status only and cannot execute a payment."
      },
      {
        "heads": [
          "Stage",
          "Status",
          "Evidence"
        ],
        "rows": [
          [
            "Prepared",
            "Complete",
            "PAY-1201 / item 02"
          ],
          [
            "Authorized",
            "Complete",
            "Approval record"
          ],
          [
            "Bank acknowledgement",
            "Pending",
            "Await response"
          ]
        ],
        "notice": "A prepared item is not the same as a confirmed payment."
      },
      {
        "heads": [
          "Message",
          "Direction",
          "Status"
        ],
        "rows": [
          [
            "MSG-881",
            "Outbound",
            "Acknowledged"
          ],
          [
            "MSG-882",
            "Inbound",
            "Reference review"
          ],
          [
            "MSG-883",
            "Inbound",
            "Processed"
          ]
        ],
        "notice": "No bank communication is transmitted from this demo."
      },
      {
        "heads": [
          "Measure",
          "Illustrative value",
          "Decision context"
        ],
        "rows": [
          [
            "Available cash",
            "USD 2.40m",
            "Opening liquidity"
          ],
          [
            "Next-week commitments",
            "USD 1.00m",
            "Expected outflows"
          ],
          [
            "Sample debt balance",
            "USD 6.00m",
            "Funding context"
          ]
        ],
        "notice": "Different measures describe different time horizons and obligations."
      },
      {
        "heads": [
          "Category",
          "Amount",
          "Timing"
        ],
        "rows": [
          [
            "Available cash",
            "USD 2.40m",
            "Opening position"
          ],
          [
            "Expected receipts",
            "USD 1.20m",
            "Next 7 days"
          ],
          [
            "Expected outflows",
            "USD 1.00m",
            "Next 7 days"
          ]
        ],
        "notice": "Use the assumptions to explain the position before choosing an action."
      },
      {
        "heads": [
          "Discipline",
          "Question answered"
        ],
        "rows": [
          [
            "Planning",
            "What could change our result?"
          ],
          [
            "Close",
            "Can we trace and explain the numbers?"
          ],
          [
            "Operations",
            "Which balance needs action?"
          ],
          [
            "Compliance",
            "What evidence and approval remain?"
          ],
          [
            "Treasury",
            "What does the cash outlook imply?"
          ]
        ],
        "notice": "Reaching this screen records tour position, not finance mastery."
      }
    ]
  }
];
export const allSteps=chapters.flatMap((c,ci)=>c.steps.map((step,si)=>({ci,si,step})));
