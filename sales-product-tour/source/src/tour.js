export const chapters=[
  {
    "title": "Customer order management",
    "short": "Orders",
    "outcome": "Turn a customer request into a traceable, complete order.",
    "steps": [
      [
        "Read the request before creating an order",
        "Inspect a fictional purchase request and the fields extracted for human review.",
        "Request extraction",
        "Request extraction"
      ],
      [
        "Resolve the missing information",
        "Identify an incomplete order and decide which evidence is needed.",
        "Order completeness",
        "Order completeness"
      ],
      [
        "Inspect the order worklist",
        "Compare customer requests and focus on the order needing attention.",
        "Order worklist",
        "Order worklist"
      ],
      [
        "Check a concise order brief",
        "Compare a prepared summary against the order details.",
        "Prepared order brief",
        "Prepared order brief"
      ],
      [
        "Prepare the collaboration context",
        "Read the facts a colleague needs to resolve an order issue.",
        "Collaboration brief",
        "Collaboration brief"
      ],
      [
        "Trace the handoffs",
        "Follow one order across its operational stages.",
        "Order process",
        "Order process"
      ],
      [
        "Recognize the next opportunity",
        "Inspect a potential service need before qualifying a lead.",
        "Lead context",
        "Lead context"
      ],
      [
        "Make the quote understandable",
        "Review quantities, unit prices and the commercial assumption.",
        "Quote review",
        "Quote review"
      ],
      [
        "Connect the account and its order",
        "Inspect the account context alongside a prepared order confirmation.",
        "Account order preview",
        "Account order preview"
      ]
    ],
    "views": [
      {
        "heads": [
          "Field",
          "Sample request",
          "Review"
        ],
        "rows": [
          [
            "Customer",
            "Northstar Utilities",
            "Matched"
          ],
          [
            "Material",
            "Pump service kit",
            "Matched"
          ],
          [
            "Quantity",
            "20 kits",
            "Confirm"
          ],
          [
            "Delivery date",
            "08 Dec 2026",
            "Confirm"
          ]
        ],
        "notice": "Prewritten extraction illustration. No PDF is uploaded or processed."
      },
      {
        "heads": [
          "Check",
          "Status",
          "Next action"
        ],
        "rows": [
          [
            "Ship-to address",
            "Missing",
            "Confirm site"
          ],
          [
            "Quantity",
            "20 kits",
            "Review request"
          ],
          [
            "Payment terms",
            "30 days",
            "Check agreement"
          ]
        ],
        "notice": "The suggestion is prewritten; a person decides whether the order is complete."
      },
      {
        "heads": [
          "Order",
          "Customer",
          "Value USD",
          "Status"
        ],
        "rows": [
          [
            "SO-4101",
            "Northstar Utilities",
            "24,000",
            "Address missing"
          ],
          [
            "SO-4102",
            "Harbor Manufacturing",
            "18,000",
            "Ready"
          ],
          [
            "SO-4103",
            "Greenline Services",
            "12,000",
            "Delivery review"
          ]
        ],
        "notice": "Use the local status filter to narrow this sample worklist."
      },
      {
        "heads": [
          "Topic",
          "Illustrative summary"
        ],
        "rows": [
          [
            "Customer",
            "Northstar Utilities"
          ],
          [
            "Commitment",
            "20 service kits / USD 24,000"
          ],
          [
            "Open question",
            "Confirm ship-to address"
          ],
          [
            "Owner",
            "Riya Sen / Sales operations"
          ]
        ],
        "notice": "This is a prewritten AI-style summary, not a live AI response."
      },
      {
        "heads": [
          "Recipient role",
          "Context",
          "Question"
        ],
        "rows": [
          [
            "Site coordinator",
            "SO-4101 / 20 kits",
            "Which receiving address?"
          ],
          [
            "Sales operations",
            "08 Dec requested",
            "Can we confirm this date?"
          ]
        ],
        "notice": "No Teams integration or message transmission occurs."
      },
      {
        "heads": [
          "Stage",
          "Reference",
          "Status"
        ],
        "rows": [
          [
            "Request",
            "PO-210",
            "Received"
          ],
          [
            "Sales order",
            "SO-4101",
            "In review"
          ],
          [
            "Delivery",
            "DL-5101",
            "Planned"
          ],
          [
            "Billing",
            "Not created",
            "Await delivery"
          ]
        ],
        "notice": "A process view shows relationships; planned stages have not executed."
      },
      {
        "heads": [
          "Lead",
          "Account",
          "Potential USD",
          "Next question"
        ],
        "rows": [
          [
            "LD-701",
            "Northstar Utilities",
            "36,000",
            "Which sites need service?"
          ],
          [
            "LD-702",
            "Harbor Manufacturing",
            "18,000",
            "When is the shutdown?"
          ]
        ],
        "notice": "All prospects and opportunities are fictional."
      },
      {
        "heads": [
          "Item",
          "Qty",
          "Unit USD",
          "Net USD"
        ],
        "rows": [
          [
            "Pump service kit",
            "20",
            "1,200",
            "24,000"
          ],
          [
            "Delivery charge",
            "1",
            "0",
            "0"
          ]
        ],
        "notice": "Sample quote Q-3101 totals USD 24,000 before tax; it is not an offer."
      },
      {
        "heads": [
          "Record",
          "Reference",
          "Value"
        ],
        "rows": [
          [
            "Account",
            "Northstar Utilities",
            "Fictional"
          ],
          [
            "Quote",
            "Q-3101",
            "USD 24,000"
          ],
          [
            "Order",
            "SO-4101",
            "20 kits"
          ],
          [
            "Confirmation",
            "Draft",
            "Address pending"
          ]
        ],
        "notice": "A preview is a learning screen and creates no document."
      }
    ]
  },
  {
    "title": "Billing and invoicing",
    "short": "Billing",
    "outcome": "Connect a billable event to a controlled invoice and accounting trail.",
    "steps": [
      [
        "Read the billing queue",
        "Separate drafts from posted invoices and unresolved billing items.",
        "Billing worklist",
        "Billing worklist"
      ],
      [
        "Inspect what is due for billing",
        "Check delivery and quantity evidence before an invoice is prepared.",
        "Billing due list",
        "Billing due list"
      ],
      [
        "Review a scheduled billing run",
        "Inspect timing, selection and exception ownership.",
        "Billing schedule",
        "Billing schedule"
      ],
      [
        "Align a preliminary bill",
        "Compare the draft amount with the evidence required from the customer.",
        "Preliminary invoice",
        "Preliminary invoice"
      ],
      [
        "Understand a billing split",
        "Inspect why two eligible items could produce separate bills.",
        "Split review",
        "Split review"
      ],
      [
        "Check accounting readiness",
        "Verify the handoff information needed by finance.",
        "Accounting handoff",
        "Accounting handoff"
      ],
      [
        "Trace the journal reference",
        "Connect an illustrative invoice to balanced accounting lines.",
        "Journal trace",
        "Journal trace"
      ]
    ],
    "views": [
      {
        "heads": [
          "Document",
          "Order",
          "USD",
          "Status"
        ],
        "rows": [
          [
            "INV-6101",
            "SO-4102",
            "18,000",
            "Posted"
          ],
          [
            "BIL-6102",
            "SO-4101",
            "24,000",
            "Draft"
          ],
          [
            "CM-6103",
            "SO-4008",
            "1,200",
            "Review"
          ]
        ],
        "notice": "Draft, posted and credit items represent different stages."
      },
      {
        "heads": [
          "Delivery",
          "Delivered qty",
          "Value USD",
          "Eligibility"
        ],
        "rows": [
          [
            "DL-5101",
            "20",
            "24,000",
            "Acceptance pending"
          ],
          [
            "DL-5102",
            "15",
            "18,000",
            "Ready"
          ]
        ],
        "notice": "Eligibility is a fictional review status; nothing is billed."
      },
      {
        "heads": [
          "Setting",
          "Illustrative value"
        ],
        "rows": [
          [
            "Run",
            "BR-81"
          ],
          [
            "Scope",
            "Accepted deliveries"
          ],
          [
            "Planned time",
            "02 Dec 2026 / 18:00 IST"
          ],
          [
            "Owner",
            "Billing analyst"
          ]
        ],
        "notice": "This schedule is illustrative and does not create a scheduled job."
      },
      {
        "heads": [
          "Item",
          "Draft USD",
          "Review"
        ],
        "rows": [
          [
            "Service kits",
            "24,000",
            "Quantity accepted"
          ],
          [
            "Delivery",
            "0",
            "Included"
          ],
          [
            "Tax",
            "Not modelled",
            "Separate validation"
          ]
        ],
        "notice": "This preliminary bill is for learning and has no fiscal validity."
      },
      {
        "heads": [
          "Field",
          "Draft A",
          "Draft B"
        ],
        "rows": [
          [
            "Payer",
            "Northstar Utilities",
            "Northstar Utilities"
          ],
          [
            "Currency",
            "USD",
            "USD"
          ],
          [
            "Payment terms",
            "30 days",
            "45 days"
          ]
        ],
        "notice": "Different payment terms are the illustrative split reason in this scenario."
      },
      {
        "heads": [
          "Check",
          "Status",
          "Evidence"
        ],
        "rows": [
          [
            "Customer account",
            "Present",
            "C-1001"
          ],
          [
            "Revenue mapping",
            "Present",
            "Service kits"
          ],
          [
            "Posting approval",
            "Pending",
            "Billing lead"
          ]
        ],
        "notice": "A handoff status is not proof of accounting posting."
      },
      {
        "heads": [
          "Line",
          "Debit USD",
          "Credit USD"
        ],
        "rows": [
          [
            "Customer receivable",
            "24,000",
            "0"
          ],
          [
            "Revenue",
            "0",
            "24,000"
          ]
        ],
        "notice": "Simplified learning entry excludes tax and local accounting rules."
      }
    ]
  },
  {
    "title": "Customer returns",
    "short": "Returns",
    "outcome": "Use evidence to choose the next return and credit decision.",
    "steps": [
      [
        "Orient around a return case",
        "Connect the customer issue to its original order and owner.",
        "Return case",
        "Return case"
      ],
      [
        "Keep the original reference",
        "Check the returned quantity against what was delivered.",
        "Referenced return",
        "Referenced return"
      ],
      [
        "Spot a pattern in returns",
        "Compare illustrative monthly quantities before investigating causes.",
        "Return trends",
        "Return trends"
      ],
      [
        "Choose the logistical follow-up",
        "Inspect the next action and the evidence it requires.",
        "Return logistics",
        "Return logistics"
      ],
      [
        "Review the credit request",
        "Inspect the requested amount before approval.",
        "Credit request",
        "Credit request"
      ],
      [
        "Trace the return to resolution",
        "Follow the case without confusing proposed and completed actions.",
        "Return process",
        "Return process"
      ]
    ],
    "views": [
      {
        "heads": [
          "Field",
          "Sample value"
        ],
        "rows": [
          [
            "Return",
            "RT-8101"
          ],
          [
            "Original order",
            "SO-4101"
          ],
          [
            "Reason",
            "2 damaged kits"
          ],
          [
            "Owner",
            "Returns coordinator"
          ]
        ],
        "notice": "A return request is not yet an approved credit."
      },
      {
        "heads": [
          "Material",
          "Delivered",
          "Return requested",
          "Reference"
        ],
        "rows": [
          [
            "Service kit",
            "20",
            "2",
            "DL-5101"
          ]
        ],
        "notice": "A reference preserves traceability without accepting the claim automatically."
      },
      {
        "heads": [
          "Month",
          "Delivered kits",
          "Returned kits"
        ],
        "rows": [
          [
            "September",
            "200",
            "4"
          ],
          [
            "October",
            "240",
            "6"
          ],
          [
            "November",
            "250",
            "10"
          ]
        ],
        "notice": "These fictional quantities suggest questions; they do not establish a root cause."
      },
      {
        "heads": [
          "Decision",
          "Sample status",
          "Needed evidence"
        ],
        "rows": [
          [
            "Collect 2 kits",
            "Proposed",
            "Pickup confirmation"
          ],
          [
            "Inspect condition",
            "Pending",
            "Warehouse report"
          ],
          [
            "Replace or credit",
            "Undecided",
            "Inspection result"
          ]
        ],
        "notice": "No carrier, warehouse or supplier task is created."
      },
      {
        "heads": [
          "Reference",
          "Qty",
          "Unit USD",
          "Credit USD"
        ],
        "rows": [
          [
            "CMR-8201 / RT-8101",
            "2",
            "1,200",
            "2,400"
          ]
        ],
        "notice": "USD 2,400 is a requested credit, subject to review."
      },
      {
        "heads": [
          "Stage",
          "Reference",
          "Status"
        ],
        "rows": [
          [
            "Return",
            "RT-8101",
            "Received"
          ],
          [
            "Inspection",
            "INSP-41",
            "Pending"
          ],
          [
            "Credit request",
            "CMR-8201",
            "In review"
          ],
          [
            "Credit memo",
            "Not issued",
            "Await approval"
          ]
        ],
        "notice": "The process stops at review; no refund or credit posting occurs."
      }
    ]
  },
  {
    "title": "Price management",
    "short": "Pricing",
    "outcome": "Explain the price, its validity and the impact of a change.",
    "steps": [
      [
        "Inspect the price condition",
        "Read the customer, product and validity that define a sample price.",
        "Price condition",
        "Price condition"
      ],
      [
        "Understand the pricing components",
        "Separate a base price from a discount and the resulting net value.",
        "Pricing calculation",
        "Pricing calculation"
      ],
      [
        "Review a mass-change proposal",
        "Inspect the scope and approval before changing many price records.",
        "Mass-change review",
        "Mass-change review"
      ],
      [
        "Validate an import preview",
        "Read sample validation results before accepting price data.",
        "Import preview",
        "Import preview"
      ]
    ],
    "views": [
      {
        "heads": [
          "Customer",
          "Material",
          "Unit USD",
          "Validity"
        ],
        "rows": [
          [
            "Northstar Utilities",
            "Service kit",
            "1,200",
            "01 Nov\u201331 Dec 2026"
          ]
        ],
        "notice": "A price without validity and scope can mislead a commercial decision."
      },
      {
        "heads": [
          "Component",
          "Per kit USD",
          "20 kits USD"
        ],
        "rows": [
          [
            "Base price",
            "1,250",
            "25,000"
          ],
          [
            "Discount",
            "\u221250",
            "\u22121,000"
          ],
          [
            "Net price",
            "1,200",
            "24,000"
          ]
        ],
        "notice": "Use the local discount slider to explore net price before tax."
      },
      {
        "heads": [
          "Scope",
          "Current USD",
          "Proposed USD",
          "Approval"
        ],
        "rows": [
          [
            "Service kit / new quotes",
            "1,200",
            "1,230",
            "Pending"
          ],
          [
            "Existing confirmed orders",
            "1,200",
            "Unchanged",
            "Out of scope"
          ]
        ],
        "notice": "This is a proposal screen, not an executable mass update."
      },
      {
        "heads": [
          "Row",
          "Material",
          "Validation",
          "Action"
        ],
        "rows": [
          [
            "1",
            "Service kit",
            "Valid",
            "Ready for review"
          ],
          [
            "2",
            "Motor kit",
            "Missing validity",
            "Correct row"
          ],
          [
            "3",
            "Seal kit",
            "Invalid currency",
            "Correct row"
          ]
        ],
        "notice": "No Excel upload or import occurs; rows are preconfigured."
      }
    ]
  },
  {
    "title": "Sales rebate management",
    "short": "Rebates",
    "outcome": "Connect an agreement, eligible volume, accrual and settlement review.",
    "steps": [
      [
        "Inspect the rebate agreement",
        "Review a fictional agreement and its release state.",
        "Rebate agreement",
        "Rebate agreement"
      ],
      [
        "Follow the rebate process",
        "Connect sales activity with accrual and settlement review.",
        "Rebate process",
        "Rebate process"
      ],
      [
        "Explain the accrual",
        "Calculate the sample obligation from eligible sales and rate.",
        "Accrual calculation",
        "Accrual calculation"
      ],
      [
        "Inspect the eligible volume",
        "Check which transactions are included in the sample calculation.",
        "Eligible sales",
        "Eligible sales"
      ],
      [
        "Review settlement documents",
        "Compare agreement, period and review status.",
        "Settlement review",
        "Settlement review"
      ],
      [
        "Read the agreement portfolio",
        "Find agreements that need review rather than relying on totals alone.",
        "Agreement portfolio",
        "Agreement portfolio"
      ]
    ],
    "views": [
      {
        "heads": [
          "Field",
          "Illustrative value"
        ],
        "rows": [
          [
            "Agreement",
            "RB-9101"
          ],
          [
            "Customer",
            "Northstar Utilities"
          ],
          [
            "Period",
            "Calendar year 2026"
          ],
          [
            "Rate",
            "2% eligible sales"
          ],
          [
            "State",
            "Released"
          ]
        ],
        "notice": "The sample rebate is a flat illustrative rate, not a real contract."
      },
      {
        "heads": [
          "Stage",
          "Reference",
          "Status"
        ],
        "rows": [
          [
            "Agreement",
            "RB-9101",
            "Released"
          ],
          [
            "Eligible sales",
            "USD 120,000",
            "Reviewed"
          ],
          [
            "Accrual",
            "USD 2,400",
            "Illustrative"
          ],
          [
            "Settlement",
            "ST-9201",
            "In review"
          ]
        ],
        "notice": "These linked records are prepared examples."
      },
      {
        "heads": [
          "Input",
          "Value"
        ],
        "rows": [
          [
            "Eligible sales",
            "USD 120,000"
          ],
          [
            "Rebate rate",
            "2%"
          ],
          [
            "Illustrative accrual",
            "USD 2,400"
          ]
        ],
        "notice": "Local arithmetic only: eligible sales \u00d7 rate. No journal is posted."
      },
      {
        "heads": [
          "Invoice",
          "Amount USD",
          "Eligible USD"
        ],
        "rows": [
          [
            "INV-6001",
            "60,000",
            "60,000"
          ],
          [
            "INV-6002",
            "36,000",
            "36,000"
          ],
          [
            "INV-6003",
            "24,000",
            "24,000"
          ]
        ],
        "notice": "Eligible volume totals USD 120,000 in this fictional example."
      },
      {
        "heads": [
          "Settlement",
          "Agreement",
          "USD",
          "Status"
        ],
        "rows": [
          [
            "ST-9201",
            "RB-9101",
            "2,400",
            "In review"
          ],
          [
            "ST-9202",
            "RB-9102",
            "1,000",
            "Held"
          ]
        ],
        "notice": "Settlement amounts are illustrative and cannot be paid from this demo."
      },
      {
        "heads": [
          "Agreement",
          "Customer",
          "State",
          "Next action"
        ],
        "rows": [
          [
            "RB-9101",
            "Northstar Utilities",
            "Released",
            "Review settlement"
          ],
          [
            "RB-9102",
            "Harbor Manufacturing",
            "Locked",
            "Resolve missing approval"
          ],
          [
            "RB-9103",
            "Greenline Services",
            "Draft",
            "Confirm scope"
          ]
        ],
        "notice": "A portfolio exposes different decisions across agreements."
      }
    ]
  },
  {
    "title": "Sales analytics",
    "short": "Analytics",
    "outcome": "Turn sales measures into a specific operational question.",
    "steps": [
      [
        "Read the sales situation",
        "Start with demand, billing and exceptions in one workspace.",
        "Sales overview",
        "Sales overview"
      ],
      [
        "Compare solution-order value",
        "Inspect value across regions before looking for explanations.",
        "Solution-order analysis",
        "Solution-order analysis"
      ],
      [
        "Connect the customer documents",
        "Read the linked records needed for an informed customer conversation.",
        "Customer document view",
        "Customer document view"
      ],
      [
        "Look beyond one month",
        "Compare a rolling series of incoming orders.",
        "Incoming order trend",
        "Incoming order trend"
      ],
      [
        "Separate realized sales and pipeline",
        "Avoid adding incompatible indicators without their definitions.",
        "Sales volume bridge",
        "Sales volume bridge"
      ],
      [
        "Challenge a prepared projection",
        "Compare the actual figure with a preconfigured scenario.",
        "Projection review",
        "Projection review"
      ],
      [
        "Read the plan gap",
        "Compare plan and actual using the same period and segmentation.",
        "Plan versus actual",
        "Plan versus actual"
      ],
      [
        "Find the fulfillment constraint",
        "Distinguish confirmed demand from what needs intervention.",
        "Demand bottlenecks",
        "Demand bottlenecks"
      ],
      [
        "Choose the next sales question",
        "Review the connected decisions and choose one to investigate further.",
        "Connected sales review",
        "Connected sales review"
      ]
    ],
    "views": [
      {
        "heads": [
          "Measure",
          "Illustrative value",
          "Question"
        ],
        "rows": [
          [
            "Orders",
            "USD 540,000",
            "What is confirmed?"
          ],
          [
            "Billed",
            "USD 420,000",
            "What remains?"
          ],
          [
            "Unconfirmed demand",
            "USD 60,000",
            "Which constraint?"
          ]
        ],
        "notice": "These are fictional portfolio measures, not the value of SO-4101 alone."
      },
      {
        "heads": [
          "Region",
          "Net value USD",
          "Share"
        ],
        "rows": [
          [
            "North",
            "270,000",
            "50%"
          ],
          [
            "South",
            "162,000",
            "30%"
          ],
          [
            "West",
            "108,000",
            "20%"
          ]
        ],
        "notice": "Use segmentation to ask where demand differs."
      },
      {
        "heads": [
          "Document",
          "Reference",
          "State"
        ],
        "rows": [
          [
            "Quote",
            "Q-3101",
            "Accepted"
          ],
          [
            "Order",
            "SO-4101",
            "Address review"
          ],
          [
            "Delivery",
            "DL-5101",
            "Planned"
          ],
          [
            "Bill",
            "BIL-6102",
            "Draft"
          ]
        ],
        "notice": "This view connects context without executing the underlying processes."
      },
      {
        "heads": [
          "Month",
          "Incoming orders USD",
          "Change"
        ],
        "rows": [
          [
            "September",
            "450,000",
            "Baseline"
          ],
          [
            "October",
            "500,000",
            "+11.1%"
          ],
          [
            "November",
            "540,000",
            "+8.0%"
          ]
        ],
        "notice": "A short trend is descriptive, not a forecast."
      },
      {
        "heads": [
          "Measure",
          "USD",
          "Definition"
        ],
        "rows": [
          [
            "Billed sales",
            "420,000",
            "Issued in sample period"
          ],
          [
            "Open orders",
            "120,000",
            "Remaining order value"
          ],
          [
            "Open deliveries",
            "48,000",
            "Subset awaiting billing"
          ]
        ],
        "notice": "Open deliveries overlap open orders here; do not add them twice."
      },
      {
        "heads": [
          "Scenario",
          "USD",
          "Assumption"
        ],
        "rows": [
          [
            "Actual billed",
            "420,000",
            "Current sample period"
          ],
          [
            "Base scenario",
            "500,000",
            "Expected deliveries accepted"
          ],
          [
            "Delayed scenario",
            "460,000",
            "One delivery delayed"
          ]
        ],
        "notice": "Prewritten scenarios; no predictive model or live AI is connected."
      },
      {
        "heads": [
          "Region",
          "Plan USD",
          "Actual USD",
          "Gap USD"
        ],
        "rows": [
          [
            "North",
            "250,000",
            "220,000",
            "\u221230,000"
          ],
          [
            "South",
            "150,000",
            "130,000",
            "\u221220,000"
          ],
          [
            "West",
            "100,000",
            "70,000",
            "\u221230,000"
          ]
        ],
        "notice": "The total actual USD 420,000 is USD 80,000 below the sample plan."
      },
      {
        "heads": [
          "Order",
          "Demand USD",
          "Confirmed USD",
          "Constraint"
        ],
        "rows": [
          [
            "SO-4101",
            "24,000",
            "0",
            "Ship-to missing"
          ],
          [
            "SO-4102",
            "18,000",
            "18,000",
            "None"
          ],
          [
            "SO-4103",
            "12,000",
            "6,000",
            "Stock timing"
          ]
        ],
        "notice": "A constraint needs an accountable owner and evidence, not just a red status."
      },
      {
        "heads": [
          "Decision",
          "Question"
        ],
        "rows": [
          [
            "Orders",
            "What prevents confirmation?"
          ],
          [
            "Billing",
            "What proves billability?"
          ],
          [
            "Returns",
            "What supports a credit?"
          ],
          [
            "Pricing",
            "What is valid for this customer?"
          ],
          [
            "Rebates",
            "Which sales are eligible?"
          ],
          [
            "Analytics",
            "Which constraint matters next?"
          ]
        ],
        "notice": "Final position reached is a navigation milestone, not proof of mastery."
      }
    ]
  }
];
export const allSteps=chapters.flatMap((c,ci)=>c.steps.map((step,si)=>({ci,si,step})));
