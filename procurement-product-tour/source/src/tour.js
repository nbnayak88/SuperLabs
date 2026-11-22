export const chapters=[
  {
    "title": "Data-driven procurement",
    "short": "Insights",
    "outcome": "Turn procurement signals into focused questions.",
    "steps": [
      [
        "Find the next procurement task",
        "Use a prepared task directory to connect a question to the right workspace.",
        "Find the next procurement task",
        "Find the next procurement task"
      ],
      [
        "Read the exception dashboard",
        "Start with the signal that needs attention most.",
        "Read the exception dashboard",
        "Read the exception dashboard"
      ],
      [
        "Inspect spend concentration",
        "Compare category spend before choosing where to investigate.",
        "Inspect spend concentration",
        "Inspect spend concentration"
      ],
      [
        "Compare supplier performance",
        "Look beyond spend to reliability and quality.",
        "Compare supplier performance",
        "Compare supplier performance"
      ],
      [
        "Review approval bottlenecks",
        "Find a request waiting for a responsible reviewer.",
        "Review approval bottlenecks",
        "Review approval bottlenecks"
      ],
      [
        "Explain no-touch processing",
        "Compare requests that met rules with those needing a person.",
        "Explain no-touch processing",
        "Explain no-touch processing"
      ],
      [
        "Spot a late delivery",
        "Connect an overdue order to its operational consequence.",
        "Spot a late delivery",
        "Spot a late delivery"
      ],
      [
        "Find off-contract spend",
        "Review purchases that bypass the agreed source.",
        "Find off-contract spend",
        "Find off-contract spend"
      ],
      [
        "Watch contract consumption",
        "Notice a contract nearing its agreed quantity.",
        "Watch contract consumption",
        "Watch contract consumption"
      ]
    ],
    "views": [
      {
        "heads": [
          "Question",
          "Workspace",
          "Owner"
        ],
        "rows": [
          [
            "Where are late orders?",
            "Delivery watch",
            "Buyer"
          ],
          [
            "Which requests need review?",
            "Approval inbox",
            "Approver"
          ]
        ],
        "notice": "Use a prepared task directory to connect a question to the right workspace. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Signal",
          "Count",
          "Next action"
        ],
        "rows": [
          [
            "Late orders",
            "3",
            "Confirm delivery"
          ],
          [
            "Pending approvals",
            "5",
            "Review queue"
          ]
        ],
        "notice": "Start with the signal that needs attention most. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Category",
          "Spend USD",
          "Share"
        ],
        "rows": [
          [
            "Maintenance",
            "240000",
            "60%"
          ],
          [
            "Safety equipment",
            "160000",
            "40%"
          ]
        ],
        "notice": "Compare category spend before choosing where to investigate. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Supplier",
          "On-time",
          "Quality"
        ],
        "rows": [
          [
            "Aster Components",
            "96%",
            "98%"
          ],
          [
            "Cedar Industrial",
            "87%",
            "95%"
          ]
        ],
        "notice": "Look beyond spend to reliability and quality. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Request",
          "Waiting days",
          "Owner"
        ],
        "rows": [
          [
            "PR-701",
            "4",
            "Plant lead"
          ],
          [
            "PR-702",
            "1",
            "Category manager"
          ]
        ],
        "notice": "Find a request waiting for a responsible reviewer. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Route",
          "Requests",
          "Reason"
        ],
        "rows": [
          [
            "Rule eligible",
            "72",
            "Catalog and budget match"
          ],
          [
            "Human review",
            "28",
            "Missing source or exception"
          ]
        ],
        "notice": "Compare requests that met rules with those needing a person. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Order",
          "Days overdue",
          "Impact"
        ],
        "rows": [
          [
            "PO-810",
            "3",
            "Maintenance delayed"
          ],
          [
            "PO-811",
            "1",
            "Buffer stock reduced"
          ]
        ],
        "notice": "Connect an overdue order to its operational consequence. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Category",
          "Off-contract USD",
          "Action"
        ],
        "rows": [
          [
            "Safety equipment",
            "12000",
            "Review catalog coverage"
          ],
          [
            "Maintenance",
            "8000",
            "Check contract scope"
          ]
        ],
        "notice": "Review purchases that bypass the agreed source. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Contract",
          "Consumed",
          "Remaining"
        ],
        "rows": [
          [
            "CT-101",
            "85%",
            "15%"
          ],
          [
            "CT-102",
            "58%",
            "42%"
          ]
        ],
        "notice": "Notice a contract nearing its agreed quantity. All records are fictional; no business transaction is executed."
      }
    ]
  },
  {
    "title": "Operational procurement",
    "short": "Purchase",
    "outcome": "Follow a request from need to receipt.",
    "steps": [
      [
        "Start from a buyer home",
        "Bring tasks, alerts and shortcuts into one role-based view.",
        "Start from a buyer home",
        "Start from a buyer home"
      ],
      [
        "Choose a compliant catalog item",
        "Compare an approved item with an unlisted alternative.",
        "Choose a compliant catalog item",
        "Choose a compliant catalog item"
      ],
      [
        "Give a direct request its source",
        "Connect production demand to the source and reviewer.",
        "Give a direct request its source",
        "Give a direct request its source"
      ],
      [
        "Review request defaults",
        "Confirm delivery and cost ownership before submission.",
        "Review request defaults",
        "Review request defaults"
      ],
      [
        "Choose the approval route",
        "Make routing rules understandable before they run.",
        "Choose the approval route",
        "Choose the approval route"
      ],
      [
        "Track request approval",
        "See where the request is waiting without chasing every reviewer.",
        "Track request approval",
        "Track request approval"
      ],
      [
        "Compare delivery assumptions",
        "Treat a predicted date as an estimate to review.",
        "Compare delivery assumptions",
        "Compare delivery assumptions"
      ],
      [
        "Trace the purchasing chain",
        "Connect demand to order and receipt.",
        "Trace the purchasing chain",
        "Trace the purchasing chain"
      ]
    ],
    "views": [
      {
        "heads": [
          "Work item",
          "Count",
          "Priority"
        ],
        "rows": [
          [
            "Approve requests",
            "5",
            "Today"
          ],
          [
            "Delivery exceptions",
            "3",
            "Review"
          ]
        ],
        "notice": "Bring tasks, alerts and shortcuts into one role-based view. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Item",
          "Unit USD",
          "Policy"
        ],
        "rows": [
          [
            "Safety helmet",
            "40",
            "Approved catalog"
          ],
          [
            "Unlisted helmet",
            "45",
            "Needs review"
          ]
        ],
        "notice": "Compare an approved item with an unlisted alternative. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Material",
          "Quantity",
          "Source"
        ],
        "rows": [
          [
            "Pump seal",
            "120",
            "Aster Components"
          ],
          [
            "Filter unit",
            "80",
            "Cedar Industrial"
          ]
        ],
        "notice": "Connect production demand to the source and reviewer. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Field",
          "Sample value"
        ],
        "rows": [
          [
            "Deliver to",
            "OmniWorks Plant 03"
          ],
          [
            "Cost centre",
            "Maintenance"
          ],
          [
            "Requester",
            "Anika Rao"
          ]
        ],
        "notice": "Confirm delivery and cost ownership before submission. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Condition",
          "Reviewer"
        ],
        "rows": [
          [
            "Under USD 5000",
            "Plant lead"
          ],
          [
            "USD 5000 or more",
            "Plant lead and category manager"
          ]
        ],
        "notice": "Make routing rules understandable before they run. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Stage",
          "Status",
          "Owner"
        ],
        "rows": [
          [
            "Submitted",
            "Complete",
            "Anika"
          ],
          [
            "Budget review",
            "Pending",
            "Plant lead"
          ]
        ],
        "notice": "See where the request is waiting without chasing every reviewer. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Order",
          "Confirmed",
          "Illustrative estimate"
        ],
        "rows": [
          [
            "PO-812",
            "08 Dec",
            "09 Dec"
          ],
          [
            "PO-813",
            "10 Dec",
            "10 Dec"
          ]
        ],
        "notice": "Treat a predicted date as an estimate to review. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Document",
          "Reference",
          "Status"
        ],
        "rows": [
          [
            "Request",
            "PR-701",
            "Approved"
          ],
          [
            "Purchase order",
            "PO-812",
            "Sent"
          ],
          [
            "Goods receipt",
            "GR-231",
            "Expected"
          ]
        ],
        "notice": "Connect demand to order and receipt. All records are fictional; no business transaction is executed."
      }
    ]
  },
  {
    "title": "Sourcing",
    "short": "Source",
    "outcome": "Compare sourcing evidence before an award.",
    "steps": [
      [
        "Build a sourcing opportunity",
        "Start a sourcing conversation from a spend pattern.",
        "Build a sourcing opportunity",
        "Build a sourcing opportunity"
      ],
      [
        "Investigate contract leakage",
        "Find items purchased outside available agreements.",
        "Investigate contract leakage",
        "Investigate contract leakage"
      ],
      [
        "Explain a price variance",
        "Separate a changed price from a changed quantity.",
        "Explain a price variance",
        "Explain a price variance"
      ],
      [
        "Inspect the RFQ worklist",
        "Focus the sourcing pipeline on a category and plant.",
        "Inspect the RFQ worklist",
        "Inspect the RFQ worklist"
      ],
      [
        "Compare supplier quotations",
        "Compare total cost and reliability before discussing an award.",
        "Compare supplier quotations",
        "Compare supplier quotations"
      ],
      [
        "Plan a contract renewal",
        "Use consumption to prepare the next sourcing decision.",
        "Plan a contract renewal",
        "Plan a contract renewal"
      ]
    ],
    "views": [
      {
        "heads": [
          "Category",
          "Annual spend USD",
          "Opportunity"
        ],
        "rows": [
          [
            "Maintenance",
            "240000",
            "Consolidate demand"
          ],
          [
            "Safety equipment",
            "160000",
            "Review coverage"
          ]
        ],
        "notice": "Start a sourcing conversation from a spend pattern. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Item",
          "Outside contract USD",
          "Existing agreement"
        ],
        "rows": [
          [
            "Safety helmet",
            "12000",
            "CT-102"
          ],
          [
            "Pump seal",
            "8000",
            "CT-101"
          ]
        ],
        "notice": "Find items purchased outside available agreements. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Material",
          "Baseline USD",
          "Current USD"
        ],
        "rows": [
          [
            "Pump seal",
            "18",
            "20"
          ],
          [
            "Filter unit",
            "32",
            "31"
          ]
        ],
        "notice": "Separate a changed price from a changed quantity. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "RFQ",
          "Category",
          "Plant",
          "Status"
        ],
        "rows": [
          [
            "RFQ-301",
            "Maintenance",
            "03",
            "Responses open"
          ],
          [
            "RFQ-302",
            "Safety equipment",
            "02",
            "Draft"
          ]
        ],
        "notice": "Focus the sourcing pipeline on a category and plant. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Supplier",
          "Unit USD",
          "Lead days",
          "On-time"
        ],
        "rows": [
          [
            "Aster Components",
            "20",
            "7",
            "96%"
          ],
          [
            "Cedar Industrial",
            "19",
            "12",
            "87%"
          ]
        ],
        "notice": "Compare total cost and reliability before discussing an award. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Contract",
          "Used units",
          "Limit units",
          "Next action"
        ],
        "rows": [
          [
            "CT-101",
            "850",
            "1000",
            "Prepare renewal"
          ],
          [
            "CT-102",
            "580",
            "1000",
            "Monitor"
          ]
        ],
        "notice": "Use consumption to prepare the next sourcing decision. All records are fictional; no business transaction is executed."
      }
    ]
  },
  {
    "title": "Supplier management",
    "short": "Suppliers",
    "outcome": "Connect supplier performance to improvement.",
    "steps": [
      [
        "Open the supplier workspace",
        "Bring performance evidence into one evaluation conversation.",
        "Open the supplier workspace",
        "Open the supplier workspace"
      ],
      [
        "Read the balanced scorecard",
        "Compare delivery, quality and commercial performance.",
        "Read the balanced scorecard",
        "Read the balanced scorecard"
      ],
      [
        "Inspect quality evidence",
        "Connect quality scores to inspection outcomes.",
        "Inspect quality evidence",
        "Inspect quality evidence"
      ],
      [
        "Design a supplier questionnaire",
        "Ask questions that can lead to a useful improvement.",
        "Design a supplier questionnaire",
        "Design a supplier questionnaire"
      ],
      [
        "Review the evaluation result",
        "Keep the overall score and improvement action together.",
        "Review the evaluation result",
        "Review the evaluation result"
      ],
      [
        "Discuss overdue orders",
        "Use the supplier view to focus on the right conversation.",
        "Discuss overdue orders",
        "Discuss overdue orders"
      ],
      [
        "Compare carbon evidence",
        "Keep emissions assumptions visible alongside supply options.",
        "Compare carbon evidence",
        "Compare carbon evidence"
      ]
    ],
    "views": [
      {
        "heads": [
          "Supplier",
          "Relationship",
          "Review"
        ],
        "rows": [
          [
            "Aster Components",
            "Strategic",
            "Due this month"
          ],
          [
            "Cedar Industrial",
            "Approved",
            "Quality follow-up"
          ]
        ],
        "notice": "Bring performance evidence into one evaluation conversation. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Supplier",
          "Delivery",
          "Quality",
          "Commercial"
        ],
        "rows": [
          [
            "Aster Components",
            "96",
            "98",
            "88"
          ],
          [
            "Cedar Industrial",
            "87",
            "95",
            "94"
          ]
        ],
        "notice": "Compare delivery, quality and commercial performance. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Supplier",
          "Lots inspected",
          "Accepted"
        ],
        "rows": [
          [
            "Aster Components",
            "50",
            "49"
          ],
          [
            "Cedar Industrial",
            "40",
            "38"
          ]
        ],
        "notice": "Connect quality scores to inspection outcomes. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Question",
          "Response type",
          "Owner"
        ],
        "rows": [
          [
            "Can capacity cover demand?",
            "Evidence request",
            "Buyer"
          ],
          [
            "Is corrective action closed?",
            "Yes or no",
            "Quality lead"
          ]
        ],
        "notice": "Ask questions that can lead to a useful improvement. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Supplier",
          "Score",
          "Follow-up"
        ],
        "rows": [
          [
            "Aster Components",
            "94",
            "Review capacity"
          ],
          [
            "Cedar Industrial",
            "90",
            "Improve delivery"
          ]
        ],
        "notice": "Keep the overall score and improvement action together. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Supplier",
          "Late orders",
          "Next action"
        ],
        "rows": [
          [
            "Aster Components",
            "1",
            "Confirm recovery"
          ],
          [
            "Cedar Industrial",
            "2",
            "Agree delivery plan"
          ]
        ],
        "notice": "Use the supplier view to focus on the right conversation. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Supplier",
          "kg CO2e per unit",
          "Evidence"
        ],
        "rows": [
          [
            "Aster Components",
            "2.1",
            "Illustrative estimate"
          ],
          [
            "Cedar Industrial",
            "1.8",
            "Illustrative estimate"
          ]
        ],
        "notice": "Keep emissions assumptions visible alongside supply options. All records are fictional; no business transaction is executed."
      }
    ]
  },
  {
    "title": "Invoice management",
    "short": "Invoices",
    "outcome": "Make invoice exceptions and ownership visible.",
    "steps": [
      [
        "Understand invoice-to-pay stages",
        "Make review and exception paths clear before automation.",
        "Understand invoice-to-pay stages",
        "Understand invoice-to-pay stages"
      ],
      [
        "Inspect the invoice worklist",
        "Prioritize the invoice that needs investigation.",
        "Inspect the invoice worklist",
        "Inspect the invoice worklist"
      ],
      [
        "Review a sample capture",
        "Inspect the fields captured from a fictional invoice.",
        "Review a sample capture",
        "Review a sample capture"
      ],
      [
        "Validate invoice details",
        "Review the captured values and missing evidence.",
        "Validate invoice details",
        "Validate invoice details"
      ],
      [
        "Try a three-way comparison",
        "Compare invoice quantity and price with the order and receipt.",
        "Try a three-way comparison",
        "Try a three-way comparison"
      ],
      [
        "Assign the exception owner",
        "Give an invoice issue a person and an explicit next action.",
        "Assign the exception owner",
        "Assign the exception owner"
      ],
      [
        "Trace the invoice workflow",
        "Inspect processing and approval history before choosing the next exploration.",
        "Trace the invoice workflow",
        "Trace the invoice workflow"
      ]
    ],
    "views": [
      {
        "heads": [
          "Stage",
          "Route",
          "Control"
        ],
        "rows": [
          [
            "Capture",
            "Sample record",
            "Required fields"
          ],
          [
            "Match",
            "Rule comparison",
            "PO and receipt"
          ],
          [
            "Approve",
            "Human review",
            "Exception owner"
          ]
        ],
        "notice": "Make review and exception paths clear before automation. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Invoice",
          "Amount USD",
          "Status"
        ],
        "rows": [
          [
            "INV-901",
            "2400",
            "Ready for review"
          ],
          [
            "INV-902",
            "2600",
            "Price exception"
          ]
        ],
        "notice": "Prioritize the invoice that needs investigation. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Field",
          "Value"
        ],
        "rows": [
          [
            "Invoice",
            "INV-901"
          ],
          [
            "Supplier",
            "Aster Components"
          ],
          [
            "Order",
            "PO-812"
          ],
          [
            "Quantity",
            "120"
          ]
        ],
        "notice": "Inspect the fields captured from a fictional invoice. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Check",
          "Result",
          "Follow-up"
        ],
        "rows": [
          [
            "Supplier reference",
            "Present",
            "None"
          ],
          [
            "Order reference",
            "Present",
            "Compare items"
          ],
          [
            "Receipt evidence",
            "Present",
            "Check quantity"
          ]
        ],
        "notice": "Review the captured values and missing evidence. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Record",
          "Quantity",
          "Unit USD"
        ],
        "rows": [
          [
            "Order",
            "120",
            "20"
          ],
          [
            "Goods receipt",
            "120",
            "20"
          ],
          [
            "Invoice",
            "120",
            "20"
          ]
        ],
        "notice": "Compare invoice quantity and price with the order and receipt. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Issue",
          "Owner",
          "Next action"
        ],
        "rows": [
          [
            "Price variance",
            "Buyer",
            "Confirm agreed price"
          ],
          [
            "Missing receipt",
            "Warehouse",
            "Verify delivery"
          ]
        ],
        "notice": "Give an invoice issue a person and an explicit next action. All records are fictional; no business transaction is executed."
      },
      {
        "heads": [
          "Stage",
          "Status",
          "Processor"
        ],
        "rows": [
          [
            "Capture",
            "Complete",
            "Sample import"
          ],
          [
            "Match",
            "Reviewed",
            "AP analyst"
          ],
          [
            "Approve",
            "Pending",
            "Finance lead"
          ]
        ],
        "notice": "Inspect processing and approval history before choosing the next exploration. All records are fictional; no business transaction is executed."
      }
    ]
  }
];
export const allSteps=chapters.flatMap((c,ci)=>c.steps.map((step,si)=>({ci,si,step})));
