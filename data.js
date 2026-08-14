window.ACCOUNTING_DATA = {
  "sources": [
    {
      "id": "ebook",
      "title": "Financial Accounting with International Financial Reporting Standards, 5th ed.",
      "author": "Weygandt & Kimmel",
      "type": "Core textbook",
      "note": "Primary theory and worked-example backbone for Chapters 1–6 and 14. Content on this site is paraphrased and reorganized for study."
    },
    {
      "id": "ch1slides",
      "title": "Financial Accounting IFRS 4th ed. — Chapter 1: Accounting in Action",
      "author": "Weygandt, Kimmel & Kieso",
      "type": "Lecture slides",
      "note": "Used to cross-check the Chapter 1 sequence, financial-statement links, and cash-flow overview."
    },
    {
      "id": "intro",
      "title": "Principles of Accounting — Intro Activity",
      "author": "Course material",
      "type": "Class activity",
      "note": "Used for the financial-statement directive questions and statement interpretation prompts."
    },
    {
      "id": "slides2to6",
      "title": "IFRS 4e lecture slides — Chapters 2–6",
      "author": "Weygandt, Kimmel & Kieso",
      "type": "Lecture slides",
      "note": "Recording process, adjusting accounts, completing the cycle, merchandising, and inventories."
    },
    {
      "id": "ch14slides",
      "title": "IFRS 4e lecture slides — Chapter 14: Statement of Cash Flows",
      "author": "Weygandt, Kimmel & Kieso",
      "type": "Lecture slides",
      "note": "Used for cash-flow classification and indirect-method practice."
    },
    {
      "id": "midtermmcq",
      "title": "Midterm MCQs — Principles of Accounting",
      "author": "FTU study material",
      "type": "Practice source",
      "note": "Questions are verified and explanations are rewritten. The site does not treat a supplied answer as authoritative when it conflicts with accounting logic."
    },
    {
      "id": "k61",
      "title": "Sửa midterm K61",
      "author": "Student review notes",
      "type": "Practice / correction source",
      "note": "Used as a source of exam-style traps. Several notes are independently checked against the textbook before being used."
    },
    {
      "id": "mock",
      "title": "FTU Mid-term Mock — Sky Castle",
      "author": "Foreign Trade University practice paper",
      "type": "Long-form practice",
      "note": "The printed opening trial balance is internally inconsistent; the site flags this instead of forcing an incorrect solution."
    },
    {
      "id": "schilling",
      "title": "FTU Mid-term Exam Practice — Schilling Equipment",
      "author": "Foreign Trade University practice paper",
      "type": "Long-form practice",
      "note": "Worked into a full January accounting-cycle case with adjusting and closing entries."
    },
    {
      "id": "cashbank",
      "title": "Statement of Cash Flows Test Bank",
      "author": "Intermediate Accounting, IFRS Edition",
      "type": "Practice source",
      "note": "Used selectively for cash-flow classification and indirect-method questions."
    },
    {
      "id": "midtermhighlight",
      "title": "MIDTERM-MCQs-Nguyên-lý-kế-toán-CLC.pdf",
      "author": "FTU practice material",
      "type": "Answer-marked midterm practice",
      "note": "Highlighted answer version used as an additional cross-check for Chapters 1–3 practice patterns. Explanations on the site are rewritten in source-grounded language."
    },
    {
      "id": "ml249illustration",
      "title": "3. ML249 Illustration.xlsx",
      "author": "Course illustration workbook",
      "type": "Classroom illustration",
      "note": "Used for the Intro Practice templates that connect cash movements, operating results, and financial position, plus prepaid-expense timing examples."
    },
    {
      "id": "classworkbook",
      "title": "giaphuc practice.xlsx",
      "author": "Course / class practice workbook",
      "type": "Updated practice workbook",
      "note": "New source for reusable exercise templates: tabular accounting-equation analysis, journalizing, ledger/T-accounts, trial balance, adjustments, accounting cycle, merchandising, FIFO inventory, and statement of cash flows."
    },
    {
      "id": "ifrs",
      "title": "IFRS Foundation — Conceptual Framework / IAS 7",
      "author": "IFRS Foundation",
      "type": "Authoritative cross-check",
      "note": "Used to verify the objective/elements of financial reporting and operating/investing/financing cash-flow classification."
    },
    {
      "id": "openstax",
      "title": "OpenStax — Principles of Financial Accounting",
      "author": "OpenStax",
      "type": "Open educational cross-check",
      "note": "Used to cross-check the accounting cycle, adjusting-entry rules, journal/ledger/trial-balance explanations."
    }
  ],
  "chapters": [
    {
      "id": "ch1",
      "number": "01",
      "title": "Accounting in Action",
      "subtitle": "Build the mental model before touching debits and credits.",
      "source": "ebook + ch1slides + intro + IFRS cross-check",
      "objectives": [
        "Explain what accounting does and who uses accounting information.",
        "Use the accounting equation to analyze transactions.",
        "Connect income, retained earnings, financial position, and cash flows.",
        "Distinguish period statements from point-in-time statements."
      ],
      "sections": [
        {
          "title": "1. Accounting is an information system",
          "lead": "Accounting turns economic events into information that decision-makers can use.",
          "body": [
            "Identification: decide which economic events are relevant and measurable enough to record.",
            "Recording: create a systematic record, classify it, and summarize it.",
            "Communication: prepare reports and interpret the information for users.",
            "Bookkeeping is mainly the recording component; accounting is broader because it also includes identification, communication, analysis, and interpretation."
          ],
          "example": "A company hires a new CEO: important business news, but usually not an accounting transaction by itself. The company buys equipment for cash: measurable economic event, so it is recorded.",
          "trap": "Do not assume every important event is an accounting transaction. It must have a measurable financial effect that belongs in the accounting records.",
          "terms": [
            "accounting",
            "transaction",
            "bookkeeping",
            "internal user",
            "external user"
          ]
        },
        {
          "title": "2. Users, ethics, standards, and assumptions",
          "lead": "Financial information is useful only if users can trust how it was produced.",
          "body": [
            "Internal users include managers in finance, marketing, operations, and HR. External users include investors, lenders, regulators, taxing authorities, customers, and others outside management.",
            "IFRS Accounting Standards are issued by the IASB. Introductory accounting also distinguishes historical-cost and current/fair-value ideas depending on the item and applicable standard.",
            "Monetary unit assumption: only events expressible in monetary terms enter the accounting records.",
            "Economic entity assumption: the business is accounted for separately from owners and other entities."
          ],
          "example": "An owner's personal grocery purchase is not a business expense of the company. The economic entity assumption keeps the two sets of activities separate.",
          "trap": "Do not confuse shareholders with internal management. Shareholders are generally external users even though they own the company.",
          "terms": [
            "IFRS",
            "IASB",
            "historical cost",
            "monetary unit assumption",
            "economic entity assumption",
            "ethics"
          ]
        },
        {
          "title": "3. The basic and expanded accounting equations",
          "lead": "Every recorded transaction must preserve the accounting equation.",
          "body": [
            "Basic equation: Assets = Liabilities + Equity.",
            "Assets are economic resources controlled by the entity. Liabilities are present obligations. Equity is the residual interest after liabilities.",
            "For an introductory corporation model: Equity changes through owner/shareholder investment, revenues, expenses, and dividends.",
            "Expanded pattern: Assets = Liabilities + Share Capital + Retained Earnings; retained earnings is increased by revenues and decreased by expenses and dividends."
          ],
          "example": "Borrow $10,000 from a bank: Cash +10,000 and Notes Payable +10,000. The equation remains balanced.",
          "trap": "A transaction can change two asset accounts without changing total assets, such as buying equipment for cash.",
          "terms": [
            "asset",
            "liability",
            "equity",
            "share capital",
            "retained earnings",
            "revenue",
            "expense",
            "dividend"
          ]
        },
        {
          "title": "4. Transaction analysis — the dual effect",
          "lead": "Before journalizing, ask what accounts change and how the equation stays balanced.",
          "body": [
            "Cash investment by shareholders increases assets and equity.",
            "Purchase on account increases an asset and a liability.",
            "Earn revenue on account increases accounts receivable and equity through revenue.",
            "Pay an expense in cash decreases assets and equity through expense.",
            "Pay an account payable decreases cash and the liability; it does not create a new expense because the expense or asset was recognized earlier."
          ],
          "example": "Pay $3,000 to a supplier for an existing payable: Cash −3,000; Accounts Payable −3,000; equity unchanged.",
          "trap": "Cash movement does not automatically mean revenue or expense. Ask what economic event the cash is settling.",
          "terms": [
            "accounts receivable",
            "accounts payable",
            "on account",
            "dual effect"
          ]
        },
        {
          "title": "5. The financial statements and what each tells you",
          "lead": "Different statements answer different questions, and they are connected.",
          "body": [
            "Statement of profit or loss / income statement: revenues, expenses, and profit for a period.",
            "Statement of changes in equity / retained earnings statement: explains movements in equity over a period.",
            "Statement of financial position / balance sheet: assets, liabilities, and equity at a specific date.",
            "Statement of cash flows: cash receipts and payments during a period, grouped into operating, investing, and financing activities.",
            "The statements connect: profit affects retained earnings; ending equity appears in financial position; ending cash reconciles to the cash-flow statement."
          ],
          "example": "“For the year ended 31 December” signals a period statement. “As at 31 December” signals a point-in-time statement.",
          "trap": "The statement of financial position is at a date; the income statement and cash-flow statement cover a period.",
          "terms": [
            "statement of financial position",
            "income statement",
            "statement of cash flows",
            "statement of changes in equity",
            "net income"
          ]
        }
      ]
    },
    {
      "id": "ch2",
      "number": "02",
      "title": "The Recording Process",
      "subtitle": "Turn transactions into debits, credits, journals, ledgers, and a trial balance.",
      "source": "ebook + Chapter 2 slides + OpenStax cross-check",
      "objectives": [
        "Apply normal balances and debit/credit rules.",
        "Journalize transactions with a clear debit-before-credit structure.",
        "Post journal entries to ledger accounts.",
        "Prepare and interpret a trial balance and its limitations."
      ],
      "sections": [
        {
          "title": "1. Accounts and normal balances",
          "lead": "An account collects increases, decreases, and the balance for one item.",
          "body": [
            "Debit is the left side; credit is the right side. Debit does not mean 'good' or 'increase' in every case.",
            "Assets, expenses, and dividends normally carry debit balances.",
            "Liabilities, share capital, retained earnings, and revenues normally carry credit balances.",
            "A normal balance is the side used to increase that type of account."
          ],
          "example": "Cash increases with a debit. Service Revenue increases with a credit. Accounts Payable decreases with a debit.",
          "trap": "Memorize by account class, not by 'debit = increase'.",
          "terms": [
            "account",
            "debit",
            "credit",
            "normal balance",
            "T-account"
          ]
        },
        {
          "title": "2. Double-entry accounting",
          "lead": "Every transaction is recorded with equal total debits and credits.",
          "body": [
            "Double entry captures the dual effect of a transaction.",
            "At least two accounts are affected, but one transaction can involve more than two accounts.",
            "Total debits must equal total credits for each journal entry."
          ],
          "example": "Service performed for $5,000; customer pays $2,000 cash and owes $3,000: Dr Cash 2,000; Dr Accounts Receivable 3,000; Cr Service Revenue 5,000.",
          "trap": "Double entry does not mean 'two journal entries'. It means the entry has equal debit and credit effects.",
          "terms": [
            "double-entry system",
            "compound entry"
          ]
        },
        {
          "title": "3. The journal — book of original entry",
          "lead": "The journal records transactions chronologically before posting to accounts.",
          "body": [
            "Analyze the transaction first.",
            "Enter the date and debit account(s), then indent credit account(s).",
            "Add a brief explanation when useful.",
            "The journal provides a chronological record and helps reveal whether total debits equal total credits in the entry."
          ],
          "example": "Buy supplies on account $800: Dr Supplies 800; Cr Accounts Payable 800.",
          "trap": "A journal is chronological. A ledger groups information by account.",
          "terms": [
            "journal",
            "journalizing",
            "general journal"
          ]
        },
        {
          "title": "4. Ledger and posting",
          "lead": "Posting reorganizes journal information account by account.",
          "body": [
            "The ledger is the complete set of accounts maintained by a company.",
            "Posting transfers journal debit and credit amounts to the appropriate ledger accounts.",
            "After posting, each account shows its running or ending balance."
          ],
          "example": "A cash receipt entry and a cash payment entry are posted to Cash; the ledger then shows the net Cash balance.",
          "trap": "Posting goes from journal to ledger, not the other way around.",
          "terms": [
            "ledger",
            "general ledger",
            "posting"
          ]
        },
        {
          "title": "5. Trial balance — useful but not proof of perfection",
          "lead": "A trial balance checks equality of ledger debit and credit balances at a point in time.",
          "body": [
            "List accounts and balances, then total the debit and credit columns.",
            "Equal columns help detect certain arithmetic or posting errors.",
            "A balanced trial balance can still contain errors: an omitted transaction, a complete entry posted twice, the wrong accounts used, or equal debit/credit amounts both recorded incorrectly."
          ],
          "example": "If a $450 purchase is recorded as $540 debit and $540 credit, the trial balance can still balance even though the amounts are wrong.",
          "trap": "A balanced trial balance is not proof that every transaction is correct.",
          "terms": [
            "trial balance",
            "transposition error"
          ]
        }
      ]
    },
    {
      "id": "ch3",
      "number": "03",
      "title": "Adjusting the Accounts",
      "subtitle": "Move from cash timing to correct period-based revenue and expense recognition.",
      "source": "ebook + Chapter 3 slides + OpenStax adjustment cross-check",
      "objectives": [
        "Explain accrual accounting and the time-period assumption.",
        "Prepare deferral and accrual adjustments.",
        "Explain depreciation as an adjusting process.",
        "Prepare an adjusted trial balance."
      ],
      "sections": [
        {
          "title": "1. Accrual basis and the time-period assumption",
          "lead": "Accounting reports performance for artificial periods, so timing must be adjusted.",
          "body": [
            "The time-period assumption divides the economic life of a business into reporting periods.",
            "Under accrual accounting, revenue is recognized when the earning activity occurs, not merely when cash is received.",
            "Expenses are recognized in the period in which resources are consumed or obligations arise, consistent with the applicable recognition principles."
          ],
          "example": "A service performed in December but collected in January belongs to December revenue under accrual accounting.",
          "trap": "Cash receipt timing and revenue recognition timing are often different.",
          "terms": [
            "accrual basis",
            "time-period assumption",
            "revenue recognition",
            "expense recognition"
          ]
        },
        {
          "title": "2. Why adjusting entries are needed",
          "lead": "The unadjusted trial balance may be complete arithmetically but incomplete economically.",
          "body": [
            "Adjusting entries update accounts at the end of the period for amounts used, earned, incurred, or expired.",
            "A standard adjusting entry affects at least one statement-of-financial-position account and one income-statement account.",
            "Cash is not part of the adjusting entry because the cash event has already happened or has not happened yet."
          ],
          "example": "Insurance paid earlier becomes Insurance Expense as time passes: Dr Insurance Expense; Cr Prepaid Insurance.",
          "trap": "Adjusting entries do not 'fix cash'. They correct recognition and period allocation.",
          "terms": [
            "adjusting entry",
            "adjusted trial balance"
          ]
        },
        {
          "title": "3. Deferral: prepaid expenses",
          "lead": "Cash paid first, expense recognized later.",
          "body": [
            "Prepaid expenses start as assets because future benefits remain.",
            "As the benefit is consumed, expense increases and the asset decreases.",
            "Common examples: prepaid insurance, prepaid rent, supplies, and depreciation-related allocations for long-lived assets."
          ],
          "example": "Pay $12,000 for 12 months of rent on June 1. At Dec 31, seven months have expired: Dr Rent Expense 7,000; Cr Prepaid Rent 7,000.",
          "trap": "Always count how much has expired, not how much remains, when calculating the expense adjustment.",
          "terms": [
            "prepaid expense",
            "supplies expense",
            "prepaid insurance"
          ]
        },
        {
          "title": "4. Deferral: unearned revenue",
          "lead": "Cash received first, revenue recognized later.",
          "body": [
            "Unearned revenue is a liability because the company owes future goods or services.",
            "When the service is performed, the liability decreases and revenue increases."
          ],
          "example": "Receive $12,000 for a 12-month rental beginning Sep 1. After four months, $4,000 is earned: Dr Unearned Rent Revenue 4,000; Cr Rent Revenue 4,000.",
          "trap": "Receiving cash in advance does not immediately create revenue if the earning obligation remains.",
          "terms": [
            "unearned revenue",
            "deferred revenue"
          ]
        },
        {
          "title": "5. Accruals: accrued revenue and accrued expense",
          "lead": "Recognition happens before cash movement.",
          "body": [
            "Accrued revenue: work has been performed but not yet billed/collected. Increase a receivable and revenue.",
            "Accrued expense: an expense has been incurred but not yet paid/recorded. Increase expense and a payable.",
            "Interest and salaries are common accrued-expense examples."
          ],
          "example": "Employees earned $900 by month-end but will be paid next month: Dr Salaries Expense 900; Cr Salaries Payable 900.",
          "trap": "For accrued revenue, assets increase — usually Accounts Receivable. If notes say assets decrease, that note is incorrect.",
          "terms": [
            "accrued revenue",
            "accrued expense",
            "salaries payable",
            "interest payable"
          ]
        },
        {
          "title": "6. Depreciation and contra-assets",
          "lead": "Depreciation allocates the cost of a long-lived asset over the periods that benefit from its use.",
          "body": [
            "Typical adjustment: Dr Depreciation Expense; Cr Accumulated Depreciation.",
            "Accumulated Depreciation is a contra-asset: it reduces the carrying amount without directly crediting the Equipment account.",
            "Book value / carrying amount is cost less accumulated depreciation for the basic model used here."
          ],
          "example": "Equipment cost $30,000; monthly depreciation $500. After 12 months, accumulated depreciation = $6,000.",
          "trap": "Do not credit Cash when recording depreciation. No cash is paid in the depreciation adjustment.",
          "terms": [
            "depreciation",
            "accumulated depreciation",
            "contra-asset",
            "book value"
          ]
        }
      ]
    },
    {
      "id": "ch4",
      "number": "04",
      "title": "Completing the Accounting Cycle",
      "subtitle": "Close temporary accounts, reset the period, and prepare the next cycle cleanly.",
      "source": "ebook + Chapter 4 slides + OpenStax accounting-cycle cross-check",
      "objectives": [
        "Prepare closing entries.",
        "Prepare a post-closing trial balance.",
        "Sequence the accounting cycle.",
        "Explain classified statements and optional reversing entries."
      ],
      "sections": [
        {
          "title": "1. Temporary vs permanent accounts",
          "lead": "Closing exists because some accounts measure one period while others carry forward.",
          "body": [
            "Temporary accounts include revenues, expenses, and dividends. Their balances relate to one reporting period.",
            "Permanent accounts include assets, liabilities, and equity balances that carry into the next period.",
            "Closing transfers the net effect of temporary accounts to retained earnings and resets temporary accounts to zero."
          ],
          "example": "Service Revenue of 20,000 is closed so the next period does not begin with old revenue.",
          "trap": "Do not close Cash, Accounts Receivable, Accounts Payable, or Equipment.",
          "terms": [
            "temporary account",
            "permanent account",
            "closing entry"
          ]
        },
        {
          "title": "2. Closing-entry sequence",
          "lead": "The common sequence closes revenues, expenses, and dividends into equity.",
          "body": [
            "Close revenues to Income Summary.",
            "Close expenses to Income Summary.",
            "Close Income Summary to Retained Earnings; the difference is net income or net loss.",
            "Close Dividends to Retained Earnings."
          ],
          "example": "Revenue 5,000 and expenses 3,480 create 1,520 net income. Income Summary is closed with Dr Income Summary 1,520; Cr Retained Earnings 1,520.",
          "trap": "Closing entries happen after financial statements are prepared from adjusted balances.",
          "terms": [
            "income summary",
            "retained earnings"
          ]
        },
        {
          "title": "3. Post-closing trial balance",
          "lead": "Only permanent accounts remain after closing.",
          "body": [
            "A post-closing trial balance verifies equality of permanent-account debits and credits after closing.",
            "Revenue, expense, and dividend accounts should have zero balances and therefore should not appear."
          ],
          "example": "If Service Revenue still appears on a post-closing trial balance, the closing process is incomplete.",
          "trap": "The adjusted trial balance is before closing; the post-closing trial balance is after closing.",
          "terms": [
            "post-closing trial balance"
          ]
        },
        {
          "title": "4. The accounting cycle — big picture",
          "lead": "Think of the cycle as a controlled pipeline from transaction to reset.",
          "body": [
            "1 Analyze transactions; 2 Journalize; 3 Post; 4 Prepare unadjusted trial balance; 5 Adjust; 6 Prepare adjusted trial balance; 7 Prepare financial statements; 8 Close; 9 Prepare post-closing trial balance.",
            "Reversing entries may be used at the start of the next period for selected accruals, but they are optional."
          ],
          "example": "Accrued salary at year-end can be reversed on day 1 of the next period to simplify the later cash-payment entry.",
          "trap": "Reversing entries are not required to make financial statements correct.",
          "terms": [
            "accounting cycle",
            "reversing entry"
          ]
        },
        {
          "title": "5. Classified statement of financial position",
          "lead": "Classification helps users judge liquidity and financial structure.",
          "body": [
            "Current assets are expected to be realized, sold, or consumed within the normal operating cycle or relevant short-term period under course conventions.",
            "Non-current assets include longer-term operating assets such as property, plant, and equipment.",
            "Liabilities are similarly separated into current and non-current categories based on settlement expectations and applicable criteria."
          ],
          "example": "Cash and inventory are current assets; a building is usually non-current.",
          "trap": "Classification is about expected realization/settlement and operating-cycle logic, not simply the physical size of the item.",
          "terms": [
            "current asset",
            "non-current asset",
            "current liability",
            "non-current liability",
            "liquidity"
          ]
        }
      ]
    },
    {
      "id": "ch5",
      "number": "05",
      "title": "Merchandising Operations",
      "subtitle": "Add inventory, cost of goods sold, and gross profit to the recording system.",
      "source": "ebook + Chapter 5 slides",
      "objectives": [
        "Distinguish service and merchandising operations.",
        "Record purchases and sales under a perpetual system.",
        "Compute cost of goods sold and gross profit.",
        "Interpret freight, returns, allowances, and discounts."
      ],
      "sections": [
        {
          "title": "1. Merchandising model",
          "lead": "Merchandisers buy goods and resell them; inventory becomes cost of goods sold when sold.",
          "body": [
            "Sales Revenue measures the selling side of the transaction.",
            "Cost of Goods Sold measures the cost of inventory that was sold.",
            "Gross Profit = Net Sales − Cost of Goods Sold.",
            "Operating expenses are then deducted from gross profit to reach operating income in the basic model."
          ],
          "example": "Sell goods for 1,000 that cost 600: Sales Revenue 1,000; COGS 600; gross profit 400 before other expenses.",
          "trap": "Revenue is not the same as profit. You must consider COGS and other expenses.",
          "terms": [
            "merchandising company",
            "inventory",
            "cost of goods sold",
            "gross profit",
            "net sales"
          ]
        },
        {
          "title": "2. Perpetual inventory system",
          "lead": "Inventory and COGS are updated continuously as purchases and sales occur.",
          "body": [
            "Purchase merchandise: debit Inventory rather than Purchases under a perpetual system.",
            "Sale of merchandise requires two entries: one for revenue/receivable or cash, one for COGS/inventory.",
            "Physical counts are still important to detect shrinkage and correct records."
          ],
          "example": "Sell inventory costing 300 for 500 cash: Dr Cash 500 / Cr Sales Revenue 500; Dr COGS 300 / Cr Inventory 300.",
          "trap": "For a sale under perpetual inventory, forgetting the second COGS entry overstates inventory and profit.",
          "terms": [
            "perpetual inventory system",
            "inventory shrinkage"
          ]
        },
        {
          "title": "3. Purchase-side items",
          "lead": "Freight, returns, and discounts affect inventory cost under the perpetual system.",
          "body": [
            "Purchase returns and allowances reduce the amount owed and reduce Inventory.",
            "Purchase discounts reduce the cost of inventory when taken under the textbook's gross-method examples.",
            "Freight-in is generally part of the cost of obtaining inventory when the buyer bears the freight."
          ],
          "example": "Inventory purchased on account 10,000, terms 2/10, n/30. Paying within discount period reduces cash by 9,800 and reduces Inventory by the 200 discount.",
          "trap": "Do not treat a purchase discount as revenue in the basic perpetual system used in the course.",
          "terms": [
            "purchase discount",
            "purchase return",
            "freight-in",
            "FOB shipping point",
            "FOB destination"
          ]
        },
        {
          "title": "4. Sales-side items",
          "lead": "Sales returns, allowances, and discounts reduce net sales; returned inventory may also come back into stock.",
          "body": [
            "Sales returns and allowances reduce Sales Revenue through a contra-revenue account or equivalent course treatment.",
            "If goods are returned in usable condition under a perpetual system, Inventory is increased and COGS is reduced for the cost side.",
            "Sales discounts reduce the amount collected and reduce net sales."
          ],
          "example": "Customer returns goods sold for 500 that cost 300: reverse the selling-side amount and restore Inventory 300 / reduce COGS 300.",
          "trap": "Separate the selling price from the inventory cost — they are different numbers and often require two effects.",
          "terms": [
            "sales return",
            "sales allowance",
            "sales discount",
            "contra-revenue"
          ]
        }
      ]
    },
    {
      "id": "ch6",
      "number": "06",
      "title": "Inventories",
      "subtitle": "Determine what belongs in inventory, assign cost, and understand error effects.",
      "source": "ebook + Chapter 6 slides",
      "objectives": [
        "Determine inventory quantities and ownership.",
        "Apply FIFO and average-cost methods.",
        "Explain inventory error effects.",
        "Use lower-of-cost/NRV and inventory-analysis tools at an introductory level."
      ],
      "sections": [
        {
          "title": "1. Inventory classifications and physical count",
          "lead": "What inventory is called depends on the business, but it is reported as a current asset in the basic course model.",
          "body": [
            "Merchandiser: merchandise inventory.",
            "Manufacturer: raw materials, work in process, and finished goods.",
            "A physical count checks records under a perpetual system and helps determine ending inventory under a periodic system."
          ],
          "example": "A retailer counts units on hand at year-end to verify the inventory records and identify shrinkage.",
          "trap": "Physical inventory is still useful even when the company maintains perpetual records.",
          "terms": [
            "merchandise inventory",
            "raw materials",
            "work in process",
            "finished goods",
            "physical inventory"
          ]
        },
        {
          "title": "2. Ownership: goods in transit and consignment",
          "lead": "Include goods based on ownership, not simply where the boxes are physically located.",
          "body": [
            "FOB shipping point: title generally passes when the carrier accepts the goods; buyer includes goods in transit.",
            "FOB destination: title generally remains with seller until delivery; seller includes goods in transit.",
            "Goods held on consignment by a consignee remain inventory of the consignor."
          ],
          "example": "Buyer has goods worth 10,000 in transit under FOB shipping point at year-end: include them in buyer inventory.",
          "trap": "Consigned goods sitting in your warehouse are not automatically your inventory.",
          "terms": [
            "goods in transit",
            "FOB shipping point",
            "FOB destination",
            "consignment",
            "consignor",
            "consignee"
          ]
        },
        {
          "title": "3. Cost flow: FIFO and average cost",
          "lead": "Cost-flow assumptions assign cost between ending inventory and COGS; they need not mirror physical flow exactly.",
          "body": [
            "FIFO assigns the earliest costs to COGS and leaves more recent costs in ending inventory.",
            "Average cost pools costs and assigns a weighted-average cost per unit.",
            "COGS = Cost of goods available for sale − Ending inventory."
          ],
          "example": "100 units cost 10 and 100 later units cost 12. If 150 units are sold, FIFO COGS = 100×10 + 50×12 = 1,600; ending inventory = 50×12 = 600.",
          "trap": "Do not choose a cost-flow method by guessing which physical units were literally sold unless the problem requires specific identification.",
          "terms": [
            "FIFO",
            "average cost",
            "cost of goods available for sale"
          ]
        },
        {
          "title": "4. Inventory errors — why one wrong count spreads",
          "lead": "Ending inventory enters both the statement of financial position and the COGS calculation.",
          "body": [
            "If ending inventory is understated, COGS is overstated and net income is understated for that period.",
            "If ending inventory is overstated, COGS is understated and net income is overstated.",
            "Because one period's ending inventory becomes the next period's beginning inventory, some effects reverse in the following period if no further errors occur."
          ],
          "example": "Ending inventory understated by 5,000 → COGS overstated 5,000 → profit understated 5,000, all else equal.",
          "trap": "Trace the formula: Beginning Inventory + Purchases − Ending Inventory = COGS.",
          "terms": [
            "inventory error",
            "ending inventory"
          ]
        },
        {
          "title": "5. Lower of cost and net realizable value; turnover",
          "lead": "Inventory should not be carried above amounts expected to be realized, and turnover helps evaluate how quickly inventory moves.",
          "body": [
            "The course introduces lower-of-cost-and-net-realizable-value concepts for inventory valuation under IFRS-oriented reporting.",
            "Inventory turnover = Cost of Goods Sold ÷ Average Inventory.",
            "Days in inventory converts turnover into an intuitive days-based measure using the course convention."
          ],
          "example": "COGS 900,000 and average inventory 150,000 → turnover 6 times per year.",
          "trap": "Turnover is an efficiency indicator, not automatically 'higher is always better'; context matters.",
          "terms": [
            "net realizable value",
            "inventory turnover",
            "average inventory"
          ]
        }
      ]
    },
    {
      "id": "ch14",
      "number": "14",
      "title": "Statement of Cash Flows",
      "subtitle": "Reconcile profit, working-capital changes, investing, and financing into cash movement.",
      "source": "ebook + Chapter 14 slides + IAS 7 + cash-flow practice bank",
      "objectives": [
        "Classify cash flows as operating, investing, or financing.",
        "Prepare the operating section using the indirect method.",
        "Explain non-cash investing and financing transactions.",
        "Reconcile beginning and ending cash."
      ],
      "sections": [
        {
          "title": "1. Purpose and three activity classes",
          "lead": "The statement explains why cash changed during the period.",
          "body": [
            "Operating activities are primarily related to revenue-producing operations and other activities not classified as investing or financing under IAS 7.",
            "Investing activities generally involve acquiring and disposing of long-term assets and investments, and lending/collecting loans where applicable.",
            "Financing activities involve changes in equity and borrowings, such as issuing shares, borrowing, repaying principal, and dividends under the course classification."
          ],
          "example": "Issue shares for cash → financing inflow. Buy equipment for cash → investing outflow. Collect cash from customers → operating inflow.",
          "trap": "Buying equipment is not an operating expense just because cash decreases.",
          "terms": [
            "operating activities",
            "investing activities",
            "financing activities",
            "cash equivalents"
          ]
        },
        {
          "title": "2. Format and reconciliation",
          "lead": "The three sections must reconcile beginning cash to ending cash.",
          "body": [
            "Net cash from operating + investing + financing = net increase/decrease in cash.",
            "Beginning cash + net change = ending cash.",
            "Ending cash should agree with the cash amount reported in the statement of financial position."
          ],
          "example": "Operating +120, investing −70, financing +10 → net cash increase 60.",
          "trap": "The statement of cash flows is not prepared simply by copying the adjusted trial balance; comparative balances and transaction details are needed.",
          "terms": [
            "net increase in cash"
          ]
        },
        {
          "title": "3. Indirect method — start with net income",
          "lead": "Convert accrual-based net income into operating cash flow.",
          "body": [
            "Add back non-cash expenses such as depreciation.",
            "Remove gains/losses whose related cash belongs in investing or financing sections: subtract gains, add losses in the operating reconciliation.",
            "Adjust for changes in operating working-capital accounts."
          ],
          "example": "Net income 100; depreciation 20; gain on sale 5 → start operating reconciliation at 100 +20 −5 before working-capital changes.",
          "trap": "Depreciation is added back because it reduced net income without using current-period cash; it is not an operating cash inflow by itself.",
          "terms": [
            "indirect method",
            "non-cash expense"
          ]
        },
        {
          "title": "4. Working-capital adjustment pattern",
          "lead": "Use a cash-conversion rule instead of memorizing random signs.",
          "body": [
            "Increase in operating current asset → subtract from net income (cash is tied up).",
            "Decrease in operating current asset → add.",
            "Increase in operating current liability → add (cash payment is deferred).",
            "Decrease in operating current liability → subtract."
          ],
          "example": "Accounts receivable increases 12,000 → subtract 12,000 in the indirect operating section.",
          "trap": "The sign depends on whether the account is an operating asset or liability and whether it increased or decreased.",
          "terms": [
            "working capital",
            "accounts receivable",
            "inventory",
            "accounts payable"
          ]
        },
        {
          "title": "5. Significant non-cash transactions",
          "lead": "Important investing/financing transactions can change financial position without changing cash.",
          "body": [
            "Example: acquire equipment by issuing a long-term note; no cash moved at acquisition.",
            "The cash-flow statement focuses on cash and cash equivalents, so significant non-cash investing and financing items are disclosed separately rather than treated as cash inflows/outflows."
          ],
          "example": "Issue ordinary shares for land: disclose as significant non-cash investing and financing activity; do not invent a cash inflow and outflow.",
          "trap": "Economic significance does not automatically make a transaction a cash flow.",
          "terms": [
            "non-cash transaction"
          ]
        }
      ]
    }
  ],
  "glossary": [
    {
      "term": "Accounting",
      "vi": "Kế toán",
      "definition": "Information system that identifies, records, and communicates economic events.",
      "chapter": "Ch1"
    },
    {
      "term": "Transaction",
      "vi": "Giao dịch / nghiệp vụ kinh tế",
      "definition": "A measurable economic event recorded in the accounting system.",
      "chapter": "Ch1"
    },
    {
      "term": "Asset",
      "vi": "Tài sản",
      "definition": "A present economic resource controlled by the entity in the conceptual model used for financial reporting.",
      "chapter": "Ch1"
    },
    {
      "term": "Liability",
      "vi": "Nợ phải trả",
      "definition": "A present obligation of the entity.",
      "chapter": "Ch1"
    },
    {
      "term": "Equity",
      "vi": "Vốn chủ sở hữu",
      "definition": "Residual interest in assets after deducting liabilities.",
      "chapter": "Ch1"
    },
    {
      "term": "Revenue",
      "vi": "Doanh thu",
      "definition": "Increase in equity arising from earning activities, excluding owner contributions.",
      "chapter": "Ch1"
    },
    {
      "term": "Expense",
      "vi": "Chi phí",
      "definition": "Decrease in equity arising from consuming resources or incurring obligations in operations, excluding owner distributions.",
      "chapter": "Ch1"
    },
    {
      "term": "Retained earnings",
      "vi": "Lợi nhuận giữ lại",
      "definition": "Cumulative earnings retained in the entity after dividends and prior-period changes.",
      "chapter": "Ch1"
    },
    {
      "term": "Statement of financial position",
      "vi": "Báo cáo tình hình tài chính / Bảng cân đối kế toán",
      "definition": "Reports assets, liabilities, and equity at a specific date.",
      "chapter": "Ch1"
    },
    {
      "term": "Statement of profit or loss",
      "vi": "Báo cáo kết quả hoạt động kinh doanh",
      "definition": "Reports revenues, expenses, and profit/loss for a period.",
      "chapter": "Ch1"
    },
    {
      "term": "Statement of cash flows",
      "vi": "Báo cáo lưu chuyển tiền tệ",
      "definition": "Explains cash inflows, outflows, and net change in cash during a period.",
      "chapter": "Ch14"
    },
    {
      "term": "Debit",
      "vi": "Ghi Nợ",
      "definition": "Left side of an account; increases assets and expenses in the basic rules.",
      "chapter": "Ch2"
    },
    {
      "term": "Credit",
      "vi": "Ghi Có",
      "definition": "Right side of an account; increases liabilities, equity, and revenues in the basic rules.",
      "chapter": "Ch2"
    },
    {
      "term": "Normal balance",
      "vi": "Số dư bình thường",
      "definition": "The side—debit or credit—on which an account normally increases and carries its balance.",
      "chapter": "Ch2"
    },
    {
      "term": "Journal",
      "vi": "Sổ nhật ký",
      "definition": "Chronological record of transactions in debit-credit form.",
      "chapter": "Ch2"
    },
    {
      "term": "Ledger",
      "vi": "Sổ cái",
      "definition": "Collection of accounts that groups transaction effects by account.",
      "chapter": "Ch2"
    },
    {
      "term": "Posting",
      "vi": "Chuyển sổ",
      "definition": "Transferring journal entries to ledger accounts.",
      "chapter": "Ch2"
    },
    {
      "term": "Trial balance",
      "vi": "Bảng cân đối thử",
      "definition": "List of ledger balances used to check equality of total debits and credits.",
      "chapter": "Ch2"
    },
    {
      "term": "Accrual basis",
      "vi": "Cơ sở dồn tích",
      "definition": "Recognizes economic effects in the period they are earned/incurred rather than only when cash moves.",
      "chapter": "Ch3"
    },
    {
      "term": "Adjusting entry",
      "vi": "Bút toán điều chỉnh",
      "definition": "End-of-period entry that updates recognition/allocation before financial statements.",
      "chapter": "Ch3"
    },
    {
      "term": "Prepaid expense",
      "vi": "Chi phí trả trước",
      "definition": "Asset created when cash is paid before the related benefit is consumed.",
      "chapter": "Ch3"
    },
    {
      "term": "Unearned revenue",
      "vi": "Doanh thu chưa thực hiện",
      "definition": "Liability created when cash is received before the earning obligation is satisfied.",
      "chapter": "Ch3"
    },
    {
      "term": "Accrued revenue",
      "vi": "Doanh thu dồn tích",
      "definition": "Revenue earned before cash is received/recorded; usually creates a receivable.",
      "chapter": "Ch3"
    },
    {
      "term": "Accrued expense",
      "vi": "Chi phí dồn tích",
      "definition": "Expense incurred before cash payment/recording; usually creates a payable.",
      "chapter": "Ch3"
    },
    {
      "term": "Depreciation",
      "vi": "Khấu hao",
      "definition": "Systematic allocation of a depreciable asset's cost over periods of use in the basic course model.",
      "chapter": "Ch3"
    },
    {
      "term": "Accumulated depreciation",
      "vi": "Khấu hao lũy kế",
      "definition": "Contra-asset accumulating depreciation recognized to date.",
      "chapter": "Ch3"
    },
    {
      "term": "Book value / carrying amount",
      "vi": "Giá trị còn lại / giá trị ghi sổ",
      "definition": "Asset cost less accumulated depreciation in the introductory depreciation model.",
      "chapter": "Ch3"
    },
    {
      "term": "Closing entry",
      "vi": "Bút toán khóa sổ",
      "definition": "Entry that transfers temporary-account balances and resets them for the next period.",
      "chapter": "Ch4"
    },
    {
      "term": "Temporary account",
      "vi": "Tài khoản tạm thời",
      "definition": "Revenue, expense, and dividend accounts that are closed at period end.",
      "chapter": "Ch4"
    },
    {
      "term": "Permanent account",
      "vi": "Tài khoản thường xuyên",
      "definition": "Balance-sheet/equity accounts whose balances carry forward.",
      "chapter": "Ch4"
    },
    {
      "term": "Post-closing trial balance",
      "vi": "Bảng cân đối thử sau khóa sổ",
      "definition": "Trial balance containing permanent accounts after closing.",
      "chapter": "Ch4"
    },
    {
      "term": "Inventory",
      "vi": "Hàng tồn kho",
      "definition": "Goods held for sale or materials/goods in stages of production, depending on the entity.",
      "chapter": "Ch5/6"
    },
    {
      "term": "Cost of goods sold",
      "vi": "Giá vốn hàng bán",
      "definition": "Cost assigned to inventory sold during the period.",
      "chapter": "Ch5"
    },
    {
      "term": "Gross profit",
      "vi": "Lợi nhuận gộp",
      "definition": "Net sales minus cost of goods sold.",
      "chapter": "Ch5"
    },
    {
      "term": "Perpetual inventory system",
      "vi": "Hệ thống kiểm kê thường xuyên",
      "definition": "System that continuously updates Inventory and COGS as transactions occur.",
      "chapter": "Ch5"
    },
    {
      "term": "FOB shipping point",
      "vi": "FOB điểm đi",
      "definition": "Course term indicating ownership generally passes to buyer when goods are handed to carrier.",
      "chapter": "Ch6"
    },
    {
      "term": "FOB destination",
      "vi": "FOB điểm đến",
      "definition": "Course term indicating ownership generally remains with seller until delivery.",
      "chapter": "Ch6"
    },
    {
      "term": "Consignment",
      "vi": "Hàng gửi bán",
      "definition": "Arrangement where the consignee holds/sells goods without owning them; ownership stays with consignor until sale.",
      "chapter": "Ch6"
    },
    {
      "term": "FIFO",
      "vi": "Nhập trước – xuất trước",
      "definition": "Cost-flow method assigning earliest costs to COGS and recent costs to ending inventory.",
      "chapter": "Ch6"
    },
    {
      "term": "Average cost",
      "vi": "Bình quân gia quyền",
      "definition": "Cost-flow method using an average unit cost to assign costs.",
      "chapter": "Ch6"
    },
    {
      "term": "Net realizable value",
      "vi": "Giá trị thuần có thể thực hiện được",
      "definition": "Estimated selling value less estimated completion/disposal costs under the course inventory context.",
      "chapter": "Ch6"
    },
    {
      "term": "Inventory turnover",
      "vi": "Vòng quay hàng tồn kho",
      "definition": "COGS divided by average inventory; indicates how frequently inventory is sold/replaced.",
      "chapter": "Ch6"
    },
    {
      "term": "Operating activities",
      "vi": "Hoạt động kinh doanh",
      "definition": "Cash flows primarily tied to revenue-producing operations and residual operating classification under IAS 7.",
      "chapter": "Ch14"
    },
    {
      "term": "Investing activities",
      "vi": "Hoạt động đầu tư",
      "definition": "Cash flows involving long-term assets, investments, and certain loans.",
      "chapter": "Ch14"
    },
    {
      "term": "Financing activities",
      "vi": "Hoạt động tài chính",
      "definition": "Cash flows involving borrowings and equity financing/distributions in the course model.",
      "chapter": "Ch14"
    },
    {
      "term": "Indirect method",
      "vi": "Phương pháp gián tiếp",
      "definition": "Operating cash-flow method that starts with net income and adjusts for non-cash items and working-capital changes.",
      "chapter": "Ch14"
    },
    {
      "term": "Cash equivalent",
      "vi": "Tương đương tiền",
      "definition": "Short-term, highly liquid investment readily convertible to known cash with insignificant value-change risk.",
      "chapter": "Ch14"
    },
    {
      "term": "Accounting equation analysis",
      "vi": "Phân tích phương trình kế toán",
      "definition": "A tabular way to show how each transaction changes assets, liabilities, and equity while keeping the accounting equation balanced.",
      "chapter": "Ch. 1"
    },
    {
      "term": "Correcting entry",
      "vi": "Bút toán sửa sai",
      "definition": "An entry made to correct an accounting error. A useful workflow is: identify the incorrect entry, reverse its effect when needed, then record the correct entry.",
      "chapter": "Ch. 4"
    },
    {
      "term": "Accounting worksheet",
      "vi": "Bảng tính kế toán",
      "definition": "A working paper used to organize an unadjusted trial balance, adjustments, adjusted balances, and amounts that flow into financial statements.",
      "chapter": "Ch. 4"
    },
    {
      "term": "Freight-in",
      "vi": "Chi phí vận chuyển mua hàng",
      "definition": "Transportation cost paid by the buyer to bring inventory to its required location; under the perpetual system it is included in inventory cost when the buyer bears the freight.",
      "chapter": "Ch. 5"
    },
    {
      "term": "Freight-out",
      "vi": "Chi phí giao hàng",
      "definition": "Delivery cost borne by the seller; it is treated as a selling/delivery expense rather than as inventory cost.",
      "chapter": "Ch. 5"
    },
    {
      "term": "Sales returns and allowances",
      "vi": "Hàng bán bị trả lại và giảm giá hàng bán",
      "definition": "A contra-revenue account used when customers return goods or receive allowances on sales.",
      "chapter": "Ch. 5"
    },
    {
      "term": "Sales discount",
      "vi": "Chiết khấu bán hàng",
      "definition": "A reduction in the amount collected from a customer for early payment under stated credit terms.",
      "chapter": "Ch. 5"
    },
    {
      "term": "Tabular analysis",
      "vi": "Phân tích dạng bảng",
      "definition": "A structured table that tracks transaction-by-transaction changes in specific accounts and checks that the accounting equation remains in balance.",
      "chapter": "Ch. 1"
    }
  ],
  "questions": [
    {
      "id": "M01",
      "chapter": "ch3",
      "topic": "Accrued revenue",
      "difficulty": "medium",
      "question": "A company performs a service but has not yet received payment. Which entry is appropriate?",
      "options": [
        "Dr Service Revenue; Cr Accounts Receivable",
        "Dr Accounts Receivable; Cr Service Revenue",
        "Dr Service Expense; Cr Accounts Payable",
        "No entry until cash is received"
      ],
      "answer": 1,
      "explanation": "The service has already been earned, so revenue must be recognized now. Because cash has not yet been collected, the asset Accounts Receivable increases with a debit; Service Revenue increases with a credit.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M02",
      "chapter": "ch3",
      "topic": "Prepaid insurance",
      "difficulty": "easy",
      "question": "Before year-end adjustment, Prepaid Insurance is $2,700 and $1,000 has expired. What Insurance Expense should be recognized?",
      "options": [
        "$1,000",
        "$1,700",
        "$2,700",
        "$3,700"
      ],
      "answer": 0,
      "explanation": "Expense equals the portion consumed during the period: $1,000. The adjustment is Dr Insurance Expense 1,000 / Cr Prepaid Insurance 1,000.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M03",
      "chapter": "ch1",
      "topic": "Equity equation",
      "difficulty": "hard",
      "question": "Beginning equity is $217,000. Additional investment is $294,000, expenses are $840,000, dividends are $56,000, and ending equity is $531,000. What is revenue?",
      "options": [
        "$860,000",
        "$916,000",
        "$1,154,000",
        "$1,210,000"
      ],
      "answer": 1,
      "explanation": "Use Ending equity = Beginning equity + investment + revenue − expenses − dividends. Revenue = 531,000 − 217,000 − 294,000 + 840,000 + 56,000 = $916,000.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M04",
      "chapter": "ch3",
      "topic": "Unearned revenue",
      "difficulty": "easy",
      "question": "A company receives $500 cash now for a service to be performed next period. What increases immediately?",
      "options": [
        "Assets decrease by $500",
        "Equity increases by $500",
        "Liabilities increase by $500",
        "Both equity and liabilities increase"
      ],
      "answer": 2,
      "explanation": "Cash increases, but the service has not yet been earned. The credit is Unearned Revenue, a liability, so liabilities increase by $500 while equity is unchanged at receipt.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M05",
      "chapter": "ch2",
      "topic": "Cash account",
      "difficulty": "easy",
      "question": "Cash has an opening debit balance of $100. Debit entries during the month total $1,400 and credit entries total $600. What is ending Cash?",
      "options": [
        "$600 debit",
        "$1,400 debit",
        "$100 debit",
        "$900 debit"
      ],
      "answer": 3,
      "explanation": "Cash is an asset with a normal debit balance: 100 + 1,400 − 600 = $900 debit.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M06",
      "chapter": "ch3",
      "topic": "Depreciation",
      "difficulty": "easy",
      "question": "Equipment is depreciated at $500 per month for a full 12-month year. What is accumulated depreciation for the year?",
      "options": [
        "$500",
        "$6,000",
        "$24,000",
        "$30,000"
      ],
      "answer": 1,
      "explanation": "Monthly depreciation × 12 = 500 × 12 = $6,000. Accumulated Depreciation increases by the total depreciation recognized to date.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M07",
      "chapter": "ch3",
      "topic": "Revenue recognition",
      "difficulty": "easy",
      "question": "In a service business, when is service revenue generally earned?",
      "options": [
        "At month-end",
        "At year-end",
        "When the service is performed",
        "Only when cash is received"
      ],
      "answer": 2,
      "explanation": "Under accrual accounting, service revenue is recognized when the service is performed (the earning activity occurs), not merely when cash is collected.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M08",
      "chapter": "ch1",
      "topic": "Equity",
      "difficulty": "easy",
      "question": "If an owner/shareholder distribution is paid in cash, what is the effect on equity?",
      "options": [
        "No accounting effect",
        "Equity increases",
        "Equity decreases",
        "A liability to the owner is created"
      ],
      "answer": 2,
      "explanation": "Distributions such as dividends reduce retained earnings/equity. Cash also decreases, preserving the accounting equation.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M09",
      "chapter": "ch3",
      "topic": "Prepayment",
      "difficulty": "easy",
      "question": "A one-year insurance policy is paid in advance. On the purchase date, which debit is appropriate in the asset-first method?",
      "options": [
        "Insurance Expense",
        "Cash",
        "Insurance Revenue",
        "Prepaid Insurance"
      ],
      "answer": 3,
      "explanation": "Future insurance coverage remains, so the payment creates an asset: Dr Prepaid Insurance; Cr Cash.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M10",
      "chapter": "ch3",
      "topic": "Adjustment concepts",
      "difficulty": "medium",
      "question": "Which concept/principle is most directly connected to adjusting prepayments and accruals in an introductory accounting question?",
      "options": [
        "Expense recognition principle",
        "Historical cost",
        "Monetary unit assumption",
        "Economic entity assumption"
      ],
      "answer": 0,
      "explanation": "Adjustments place expenses in the period in which the related resources are consumed or obligations arise and revenues in the appropriate earning period. Among the choices, expense recognition is the relevant principle.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M11",
      "chapter": "ch3",
      "topic": "Depreciation error",
      "difficulty": "hard",
      "question": "An accountant records Dr Depreciation Expense 800 / Cr Cash 800 instead of crediting Accumulated Depreciation. Which statement is most accurate?",
      "options": [
        "The entry is fully correct",
        "The depreciable asset's book value is overstated",
        "The depreciable asset's book value is understated",
        "Depreciation expense is overstated"
      ],
      "answer": 1,
      "explanation": "Depreciation Expense is correct, but Accumulated Depreciation was not increased, so the carrying amount of the equipment remains too high. Cash was incorrectly reduced instead.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M12",
      "chapter": "ch3",
      "topic": "Book value",
      "difficulty": "easy",
      "question": "Cost of a depreciable asset minus related accumulated depreciation is called:",
      "options": [
        "Market value",
        "Blue-book value",
        "Book value / carrying amount",
        "Depreciated difference"
      ],
      "answer": 2,
      "explanation": "In the basic course model, carrying amount (book value) equals asset cost minus accumulated depreciation.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M13",
      "chapter": "ch3",
      "topic": "Unearned revenue adjustment",
      "difficulty": "medium",
      "question": "Season tickets of $160,000 cover 8 games. Three games have been played by month-end. What revenue adjustment is needed if all cash was initially recorded as unearned?",
      "options": [
        "No adjustment",
        "Dr Cash 40,000; Cr Revenue 40,000",
        "Dr Unearned Revenue 60,000; Cr Revenue 60,000",
        "Dr Revenue 53,333; Cr Unearned Revenue 53,333"
      ],
      "answer": 2,
      "explanation": "Revenue per game is 160,000 ÷ 8 = 20,000. Three games earned 60,000, so reduce the liability and recognize revenue: Dr Unearned Revenue 60,000 / Cr Revenue 60,000.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M14",
      "chapter": "ch3",
      "topic": "Omitted prepayment adjustment",
      "difficulty": "hard",
      "question": "Annual rent is $120,000 paid Jan 1. If only the February monthly adjustment is omitted, what is the February statement effect?",
      "options": [
        "No effect",
        "Expenses overstated 10,000; equity understated 10,000",
        "Assets overstated 20,000; equity understated 20,000",
        "Assets overstated 10,000; equity overstated 10,000"
      ],
      "answer": 3,
      "explanation": "Monthly rent is 120,000 ÷ 12 = 10,000. Omitting February's adjustment leaves Prepaid Rent too high by 10,000 and Rent Expense too low by 10,000, so profit/equity is overstated by 10,000.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M15",
      "chapter": "ch3",
      "topic": "Supplies adjustment",
      "difficulty": "medium",
      "question": "A business initially debits Supplies Expense for $1,500 of purchases. At month-end, $400 of supplies remain. What adjustment is required?",
      "options": [
        "Dr Supplies Expense 400; Cr Supplies 400",
        "Dr Supplies Expense 1,500; Cr Cash 1,500",
        "Dr Supplies 400; Cr Supplies Expense 400",
        "Dr Supplies Expense 1,100; Cr Supplies 1,100"
      ],
      "answer": 2,
      "explanation": "Because the entire purchase was initially expensed, the unused $400 must be reclassified back to an asset: Dr Supplies 400 / Cr Supplies Expense 400. Final expense is 1,100.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M16",
      "chapter": "ch3",
      "topic": "Unearned revenue — revenue-first method",
      "difficulty": "hard",
      "question": "A lawyer credits Revenue for $12,000 of advance fees. By month-end, 75% of the work is complete. What adjustment is required?",
      "options": [
        "Dr Unearned Revenue 9,000; Cr Revenue 9,000",
        "Dr Unearned Revenue 3,000; Cr Revenue 3,000",
        "Dr Cash 12,000; Cr Revenue 12,000",
        "Dr Revenue 3,000; Cr Unearned Revenue 3,000"
      ],
      "answer": 3,
      "explanation": "If all 12,000 was initially credited to Revenue, the unearned 25% = 3,000 must be removed from revenue and recorded as a liability: Dr Revenue 3,000 / Cr Unearned Revenue 3,000.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M17",
      "chapter": "ch3",
      "topic": "Expense-first prepayment",
      "difficulty": "medium",
      "question": "Prepaid costs are initially recorded entirely as expense. Some benefit remains at period-end, but no adjustment is made. What happens?",
      "options": [
        "Assets are understated",
        "Assets are overstated",
        "Expenses are understated",
        "Liabilities are overstated"
      ],
      "answer": 0,
      "explanation": "The unused portion should be an asset. Without adjustment, that asset is missing (understated) and expense is too high.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M18",
      "chapter": "ch3",
      "topic": "Revenue-first deferral",
      "difficulty": "medium",
      "question": "Advance cash is initially recorded entirely as revenue. Some amount remains unearned at period-end, but no adjustment is made. What happens?",
      "options": [
        "Liabilities overstated",
        "Revenue understated",
        "Revenue overstated",
        "Accounts receivable overstated"
      ],
      "answer": 2,
      "explanation": "The unearned amount should be a liability and not revenue. Without adjustment, revenue is overstated and liabilities are understated.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M19",
      "chapter": "ch3",
      "topic": "Insurance — expense-first method",
      "difficulty": "hard",
      "question": "A $2,400 one-year policy is charged entirely to Insurance Expense on Jan 2. At Jan 31, what adjusting entry is needed?",
      "options": [
        "Dr Insurance Expense 2,200; Cr Prepaid Insurance 2,200",
        "Dr Prepaid Insurance 2,200; Cr Insurance Expense 2,200",
        "Dr Insurance Expense 200; Cr Prepaid Insurance 200",
        "Dr Prepaid Insurance 200; Cr Insurance Expense 200"
      ],
      "answer": 1,
      "explanation": "One month of expense is 2,400 ÷ 12 = 200; the remaining 2,200 is an asset. Because the full amount was initially expensed, reclassify the unused part: Dr Prepaid Insurance 2,200 / Cr Insurance Expense 2,200.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M20",
      "chapter": "ch3",
      "topic": "Accrued salaries",
      "difficulty": "easy",
      "question": "An employee has earned $900 by March 31 but will be paid in April. What is the March 31 adjustment?",
      "options": [
        "Dr Salaries Expense 900; Cr Salaries Payable 900",
        "No entry",
        "Dr Salaries Expense 900; Cr Cash 900",
        "Dr Salaries Payable 900; Cr Cash 900"
      ],
      "answer": 0,
      "explanation": "The expense belongs to March and payment has not occurred. Recognize both the expense and the liability: Dr Salaries Expense / Cr Salaries Payable.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M21",
      "chapter": "ch2",
      "topic": "Accounts receivable balance",
      "difficulty": "easy",
      "question": "Opening Accounts Receivable is $1,200. Credit revenue is $5,000 and collections are $4,000. Ending Accounts Receivable is:",
      "options": [
        "$1,200 debit",
        "$2,200 debit",
        "$6,200 debit",
        "$2,200 credit"
      ],
      "answer": 1,
      "explanation": "Accounts Receivable = 1,200 + 5,000 − 4,000 = 2,200 debit. Revenue on account increases AR; collections decrease AR.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M22",
      "chapter": "ch2",
      "topic": "Accounts payable balance",
      "difficulty": "easy",
      "question": "Opening Accounts Payable is $30,000. Purchases on account are $25,000 and payments on account are $40,000. Ending Accounts Payable is:",
      "options": [
        "$30,000",
        "$10,000",
        "$15,000",
        "$40,000"
      ],
      "answer": 2,
      "explanation": "Accounts Payable = 30,000 + 25,000 − 40,000 = 15,000 credit balance.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M23",
      "chapter": "ch1",
      "topic": "Ending equity",
      "difficulty": "medium",
      "question": "In the first year, revenue is $60,000, expenses are $33,000, and owner/shareholder distributions are $18,000. With no other equity changes, ending retained equity is:",
      "options": [
        "$0",
        "$18,000 debit",
        "$9,000 credit",
        "$27,000 credit"
      ],
      "answer": 2,
      "explanation": "Net income is 60,000 − 33,000 = 27,000. After 18,000 distributions, retained equity is 9,000.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M24",
      "chapter": "ch1",
      "topic": "Equity effects",
      "difficulty": "medium",
      "question": "Opening equity is $136,000. Revenue is $20,000, expenses $12,000, equipment is purchased for cash $5,000, and cash dividends are $2,000. Ending equity is:",
      "options": [
        "$136,000",
        "$8,000",
        "$137,000",
        "$142,000"
      ],
      "answer": 3,
      "explanation": "The equipment purchase exchanges one asset for another and does not change total equity. Equity = 136,000 + 20,000 − 12,000 − 2,000 = 142,000.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "M25",
      "chapter": "ch3",
      "topic": "Time period assumption",
      "difficulty": "easy",
      "question": "The time-period assumption means:",
      "options": [
        "A transaction affects only one period",
        "Estimates are prohibited",
        "Adjustments occur only when a business closes permanently",
        "The economic life of a business can be divided into artificial reporting periods"
      ],
      "answer": 3,
      "explanation": "Financial reporting divides the ongoing life of an entity into monthly, quarterly, annual, or other reporting periods so performance and position can be measured periodically.",
      "source": "FTU midterm MCQ — verified"
    },
    {
      "id": "C101",
      "chapter": "ch1",
      "topic": "Accounting process",
      "difficulty": "easy",
      "question": "Which sequence correctly describes the core accounting process?",
      "options": [
        "Record → communicate → identify",
        "Identify → record → communicate",
        "Communicate → identify → record",
        "Identify → communicate → record"
      ],
      "answer": 1,
      "explanation": "The introductory process starts by identifying relevant economic events, then recording/classifying them, then communicating results through reports and interpretation.",
      "source": "Weygandt Ch1 adapted"
    },
    {
      "id": "C102",
      "chapter": "ch1",
      "topic": "Users",
      "difficulty": "easy",
      "question": "Which person is most clearly an internal user of accounting information?",
      "options": [
        "A bank loan officer",
        "A tax authority",
        "The company's production manager",
        "A potential investor"
      ],
      "answer": 2,
      "explanation": "A production manager is part of management and uses internal accounting information for operating decisions. The others are external users.",
      "source": "Weygandt Ch1 adapted"
    },
    {
      "id": "C103",
      "chapter": "ch1",
      "topic": "Economic entity",
      "difficulty": "easy",
      "question": "The owner pays a personal electricity bill from a private bank account. Should the company record it?",
      "options": [
        "Yes, as Utilities Expense",
        "Yes, as a dividend automatically",
        "No, because it is a personal transaction outside the entity",
        "Only if the owner is the CEO"
      ],
      "answer": 2,
      "explanation": "The economic entity assumption separates the business from the owner's personal activities. A purely personal payment does not belong in the company's accounting records.",
      "source": "Weygandt Ch1 adapted"
    },
    {
      "id": "C104",
      "chapter": "ch1",
      "topic": "Accounting equation",
      "difficulty": "medium",
      "question": "A company buys equipment for $8,000 by paying $3,000 cash and signing a $5,000 note. What is the total-asset effect?",
      "options": [
        "Assets increase $8,000",
        "Assets increase $5,000",
        "Assets decrease $3,000",
        "No change in assets"
      ],
      "answer": 1,
      "explanation": "Equipment increases 8,000 while Cash decreases 3,000, so net assets increase 5,000. Liabilities increase 5,000 through Notes Payable.",
      "source": "Course-original from Ch1 concepts"
    },
    {
      "id": "C105",
      "chapter": "ch1",
      "topic": "Financial statements",
      "difficulty": "easy",
      "question": "Which statement is primarily at a point in time rather than for a period?",
      "options": [
        "Statement of profit or loss",
        "Statement of cash flows",
        "Statement of financial position",
        "Statement of changes in equity"
      ],
      "answer": 2,
      "explanation": "The statement of financial position reports balances as at a specific date. The other statements summarize changes or performance across a period.",
      "source": "Intro Activity + Ch1"
    },
    {
      "id": "C201",
      "chapter": "ch2",
      "topic": "Normal balance",
      "difficulty": "easy",
      "question": "Which group normally carries debit balances?",
      "options": [
        "Assets, expenses, dividends",
        "Liabilities, revenue, share capital",
        "Assets, liabilities, revenue",
        "Revenue, expenses, retained earnings"
      ],
      "answer": 0,
      "explanation": "Assets, expenses, and dividends increase on the debit side in the basic rules and therefore normally carry debit balances.",
      "source": "Weygandt Ch2 adapted"
    },
    {
      "id": "C202",
      "chapter": "ch2",
      "topic": "Journal vs ledger",
      "difficulty": "easy",
      "question": "Which statement best distinguishes a journal from a ledger?",
      "options": [
        "The journal groups by account; the ledger is chronological",
        "The journal is chronological; the ledger groups by account",
        "Both are only lists of balances",
        "The ledger is prepared before the journal"
      ],
      "answer": 1,
      "explanation": "Journal entries are recorded chronologically first. Posting then transfers the effects to ledger accounts grouped by account.",
      "source": "Weygandt Ch2 adapted"
    },
    {
      "id": "C203",
      "chapter": "ch2",
      "topic": "Trial balance limitations",
      "difficulty": "medium",
      "question": "Which error can occur while the trial balance still balances?",
      "options": [
        "A debit balance is listed in the credit column",
        "Only the debit half of an entry is posted",
        "A complete correct journal entry is posted twice",
        "The debit column total is added incorrectly"
      ],
      "answer": 2,
      "explanation": "Posting both debit and credit sides twice preserves equality even though account balances are wrong. The other errors normally create unequal totals.",
      "source": "Weygandt Ch2 adapted"
    },
    {
      "id": "C204",
      "chapter": "ch2",
      "topic": "Journal entry",
      "difficulty": "medium",
      "question": "Supplies of $1,200 are purchased on account. Which entry is correct?",
      "options": [
        "Dr Supplies Expense 1,200; Cr Cash 1,200",
        "Dr Supplies 1,200; Cr Accounts Payable 1,200",
        "Dr Accounts Payable 1,200; Cr Supplies 1,200",
        "Dr Cash 1,200; Cr Supplies 1,200"
      ],
      "answer": 1,
      "explanation": "The company receives an asset (Supplies) and incurs a liability because it has not paid cash: debit Supplies and credit Accounts Payable.",
      "source": "Weygandt Ch2 adapted"
    },
    {
      "id": "C205",
      "chapter": "ch2",
      "topic": "Double entry",
      "difficulty": "easy",
      "question": "What does double-entry accounting mean?",
      "options": [
        "Every transaction uses exactly two accounts",
        "Every transaction is recorded twice in the journal",
        "Every transaction has equal total debits and credits reflecting its dual effect",
        "Every account has two balances"
      ],
      "answer": 2,
      "explanation": "Double entry records the dual effect so total debits equal total credits. A transaction may involve more than two accounts.",
      "source": "K61 practice — corrected"
    },
    {
      "id": "C301",
      "chapter": "ch3",
      "topic": "Accrued revenue",
      "difficulty": "medium",
      "question": "A resort earns $440,000 from a conference; 25% has already been paid. What amount should be accrued as receivable at period-end if the rest is still unpaid?",
      "options": [
        "$110,000",
        "$330,000",
        "$440,000",
        "$0"
      ],
      "answer": 1,
      "explanation": "Unpaid earned amount = 440,000 × 75% = 330,000. Adjustment: Dr Accounts Receivable 330,000 / Cr Revenue 330,000. Assets increase, not decrease.",
      "source": "K61 practice — verified/corrected"
    },
    {
      "id": "C302",
      "chapter": "ch3",
      "topic": "Accrued interest",
      "difficulty": "medium",
      "question": "A $500,000 note is outstanding for 2 months at 9% annual interest. How much interest should be accrued?",
      "options": [
        "$45,000",
        "$7,500",
        "$3,750",
        "$90,000"
      ],
      "answer": 1,
      "explanation": "Annual interest = 500,000 × 9% = 45,000. Two months = 45,000 × 2/12 = 7,500, recognized as Interest Expense and Interest Payable.",
      "source": "K61 practice — verified"
    },
    {
      "id": "C303",
      "chapter": "ch3",
      "topic": "Adjusting entry rule",
      "difficulty": "easy",
      "question": "Which statement about adjusting entries is false?",
      "options": [
        "Cash is normally not part of an adjusting entry",
        "An adjusting entry links a balance-sheet account with an income-statement account",
        "Each adjusting entry affects both a revenue account and an expense account",
        "Adjusting entries include accruals and deferrals"
      ],
      "answer": 2,
      "explanation": "An adjusting entry normally affects one statement-of-financial-position account and one income-statement account; it does not normally affect both a revenue and an expense in the same entry.",
      "source": "K61 practice — verified"
    },
    {
      "id": "C304",
      "chapter": "ch3",
      "topic": "Omitted depreciation",
      "difficulty": "medium",
      "question": "If depreciation adjustment is omitted, what is the typical effect?",
      "options": [
        "Assets understated; expenses overstated",
        "Assets overstated; expenses understated; equity overstated",
        "Liabilities overstated; revenue understated",
        "Cash understated; equity understated"
      ],
      "answer": 1,
      "explanation": "Without Dr Depreciation Expense / Cr Accumulated Depreciation, the contra-asset is too low so net assets are too high; expense is too low, so profit and equity are too high.",
      "source": "K61 practice — verified"
    },
    {
      "id": "C305",
      "chapter": "ch3",
      "topic": "Accrued expense",
      "difficulty": "easy",
      "question": "Which is an accrued expense?",
      "options": [
        "Unused prepaid insurance",
        "Property taxes incurred now but payable next quarter",
        "Depreciation recorded monthly",
        "Rent earned but not yet collected"
      ],
      "answer": 1,
      "explanation": "An accrued expense has been incurred but not yet paid/recorded. Property taxes incurred but unpaid fit this pattern; rent earned but uncollected is accrued revenue.",
      "source": "K61 practice — verified"
    },
    {
      "id": "C401",
      "chapter": "ch4",
      "topic": "Closing entries",
      "difficulty": "easy",
      "question": "Which account should NOT be closed at period-end?",
      "options": [
        "Service Revenue",
        "Salaries Expense",
        "Dividends",
        "Accounts Receivable"
      ],
      "answer": 3,
      "explanation": "Accounts Receivable is a permanent asset account and carries forward. Revenues, expenses, and dividends are temporary accounts.",
      "source": "Weygandt Ch4 adapted"
    },
    {
      "id": "C402",
      "chapter": "ch4",
      "topic": "Post-closing trial balance",
      "difficulty": "easy",
      "question": "Which account should appear on a post-closing trial balance?",
      "options": [
        "Sales Revenue",
        "Rent Expense",
        "Cash",
        "Dividends"
      ],
      "answer": 2,
      "explanation": "After closing, temporary accounts are zero. Cash is a permanent asset and remains on the post-closing trial balance.",
      "source": "Weygandt Ch4 adapted"
    },
    {
      "id": "C403",
      "chapter": "ch4",
      "topic": "Cycle sequence",
      "difficulty": "medium",
      "question": "Which step comes immediately before preparing financial statements in the standard accounting-cycle sequence?",
      "options": [
        "Journalize transactions",
        "Prepare adjusted trial balance",
        "Prepare post-closing trial balance",
        "Post closing entries"
      ],
      "answer": 1,
      "explanation": "After adjustments are posted, the adjusted trial balance is prepared. Financial statements are then prepared from adjusted balances.",
      "source": "Weygandt Ch4 adapted"
    },
    {
      "id": "C404",
      "chapter": "ch4",
      "topic": "Closing net income",
      "difficulty": "medium",
      "question": "Revenue is $12,000 and total expenses are $9,500. What balance is transferred from Income Summary to Retained Earnings?",
      "options": [
        "$21,500 debit",
        "$2,500 credit to Retained Earnings",
        "$9,500 credit to Retained Earnings",
        "$12,000 debit to Retained Earnings"
      ],
      "answer": 1,
      "explanation": "Net income is 12,000 − 9,500 = 2,500. Closing Income Summary increases Retained Earnings by 2,500: Dr Income Summary / Cr Retained Earnings.",
      "source": "Course-original from Ch4"
    },
    {
      "id": "C405",
      "chapter": "ch4",
      "topic": "Reversing entries",
      "difficulty": "easy",
      "question": "Which statement is correct about reversing entries?",
      "options": [
        "They are mandatory under IFRS for all accruals",
        "They are optional and can simplify selected next-period entries",
        "They replace adjusting entries",
        "They are prepared before adjusting entries"
      ],
      "answer": 1,
      "explanation": "Reversing entries are optional bookkeeping tools used at the start of the next period for selected adjustments. They do not replace the required period-end adjusting process.",
      "source": "Weygandt Ch4 adapted"
    },
    {
      "id": "C501",
      "chapter": "ch5",
      "topic": "Perpetual sale",
      "difficulty": "medium",
      "question": "Under a perpetual system, goods costing $600 are sold for $1,000 cash. How many core journal effects are required?",
      "options": [
        "Only Dr Cash / Cr Sales Revenue",
        "Only Dr COGS / Cr Inventory",
        "Both the revenue entry and the COGS/inventory entry",
        "No entry until physical count"
      ],
      "answer": 2,
      "explanation": "A perpetual sale records both the selling side (cash/revenue) and cost side (COGS/inventory) at the time of sale.",
      "source": "Weygandt Ch5 adapted"
    },
    {
      "id": "C502",
      "chapter": "ch5",
      "topic": "Gross profit",
      "difficulty": "easy",
      "question": "Net sales are $250,000 and COGS is $160,000. Gross profit is:",
      "options": [
        "$90,000",
        "$160,000",
        "$250,000",
        "$410,000"
      ],
      "answer": 0,
      "explanation": "Gross profit = Net Sales − Cost of Goods Sold = 250,000 − 160,000 = 90,000.",
      "source": "Course-original from Ch5"
    },
    {
      "id": "C503",
      "chapter": "ch5",
      "topic": "Purchase discount",
      "difficulty": "medium",
      "question": "Inventory of $10,000 is purchased on account, terms 2/10, n/30, and paid within the discount period under the course's perpetual gross method. Cash paid is:",
      "options": [
        "$10,200",
        "$10,000",
        "$9,800",
        "$8,000"
      ],
      "answer": 2,
      "explanation": "Discount = 10,000 × 2% = 200. Cash paid = 9,800, with the discount reducing the recorded inventory cost under the textbook's perpetual examples.",
      "source": "Weygandt Ch5 adapted"
    },
    {
      "id": "C504",
      "chapter": "ch5",
      "topic": "Sales return",
      "difficulty": "medium",
      "question": "A customer returns goods sold for $500 that originally cost $300; the goods are reusable. Under perpetual inventory, which cost-side entry is needed?",
      "options": [
        "Dr COGS 300; Cr Inventory 300",
        "Dr Inventory 300; Cr COGS 300",
        "Dr Cash 300; Cr Inventory 300",
        "No cost-side entry"
      ],
      "answer": 1,
      "explanation": "Returned usable goods re-enter inventory, so debit Inventory and reduce COGS with a credit for the original cost of 300.",
      "source": "Weygandt Ch5 adapted"
    },
    {
      "id": "C505",
      "chapter": "ch5",
      "topic": "Merchandising",
      "difficulty": "easy",
      "question": "Which item is unique to a merchandising income model compared with a simple service-company model?",
      "options": [
        "Cash",
        "Accounts Payable",
        "Cost of Goods Sold",
        "Salaries Expense"
      ],
      "answer": 2,
      "explanation": "Merchandisers sell inventory, so they report Cost of Goods Sold and gross profit. The other items can appear in service companies too.",
      "source": "Weygandt Ch5 adapted"
    },
    {
      "id": "C601",
      "chapter": "ch6",
      "topic": "FOB",
      "difficulty": "medium",
      "question": "Goods are in transit to the buyer at year-end under FOB shipping point. Who generally includes them in inventory?",
      "options": [
        "Seller",
        "Buyer",
        "Carrier",
        "Neither party"
      ],
      "answer": 1,
      "explanation": "Under FOB shipping point, ownership generally passes to the buyer when the seller hands goods to the carrier, so the buyer includes the goods in transit.",
      "source": "Weygandt Ch6 adapted"
    },
    {
      "id": "C602",
      "chapter": "ch6",
      "topic": "Consignment",
      "difficulty": "easy",
      "question": "A dealer holds goods on consignment for another company. Who reports the goods as inventory before sale?",
      "options": [
        "The dealer/consignee",
        "The owner/consignor",
        "Both",
        "Neither"
      ],
      "answer": 1,
      "explanation": "Consignment does not transfer ownership to the consignee. The consignor continues to report the goods as inventory until sold.",
      "source": "Weygandt Ch6 adapted"
    },
    {
      "id": "C603",
      "chapter": "ch6",
      "topic": "FIFO",
      "difficulty": "medium",
      "question": "Inventory consists of 100 units @ $10 and 100 units @ $12. If 150 units are sold using FIFO, what is ending inventory?",
      "options": [
        "$500",
        "$600",
        "$1,500",
        "$1,600"
      ],
      "answer": 1,
      "explanation": "FIFO assigns the first 100 units at $10 and next 50 at $12 to COGS. The 50 remaining units are the latest layer at $12 = $600.",
      "source": "Course-original from Ch6"
    },
    {
      "id": "C604",
      "chapter": "ch6",
      "topic": "Inventory error",
      "difficulty": "medium",
      "question": "Ending inventory is understated by $4,000. What is the effect on current-period COGS and net income, all else equal?",
      "options": [
        "COGS understated; income overstated",
        "COGS overstated; income understated",
        "Both understated",
        "No effect"
      ],
      "answer": 1,
      "explanation": "COGS = Beginning Inventory + Purchases − Ending Inventory. Too-low ending inventory makes COGS too high by 4,000 and net income too low by 4,000.",
      "source": "Weygandt Ch6 adapted"
    },
    {
      "id": "C605",
      "chapter": "ch6",
      "topic": "Inventory turnover",
      "difficulty": "easy",
      "question": "COGS is $900,000 and average inventory is $150,000. Inventory turnover is:",
      "options": [
        "0.167 times",
        "6 times",
        "750,000 times",
        "1,050,000 times"
      ],
      "answer": 1,
      "explanation": "Inventory turnover = COGS ÷ Average Inventory = 900,000 ÷ 150,000 = 6 times.",
      "source": "Weygandt Ch6 adapted"
    },
    {
      "id": "C1401",
      "chapter": "ch14",
      "topic": "Classification",
      "difficulty": "easy",
      "question": "Cash received from issuing ordinary shares is classified as:",
      "options": [
        "Operating inflow",
        "Investing inflow",
        "Financing inflow",
        "Non-cash activity"
      ],
      "answer": 2,
      "explanation": "Issuing shares brings cash from owners/shareholders and changes equity financing, so it is a financing cash inflow.",
      "source": "Weygandt Ch14 + IAS 7"
    },
    {
      "id": "C1402",
      "chapter": "ch14",
      "topic": "Classification",
      "difficulty": "easy",
      "question": "Cash paid to purchase equipment is classified as:",
      "options": [
        "Operating outflow",
        "Investing outflow",
        "Financing outflow",
        "No cash-flow effect"
      ],
      "answer": 1,
      "explanation": "Purchasing a long-term operating asset is an investing cash outflow.",
      "source": "Weygandt Ch14 + IAS 7"
    },
    {
      "id": "C1403",
      "chapter": "ch14",
      "topic": "Indirect method",
      "difficulty": "medium",
      "question": "Under the indirect method, an increase in Accounts Receivable is normally:",
      "options": [
        "Added to net income",
        "Subtracted from net income",
        "Reported as financing",
        "Ignored"
      ],
      "answer": 1,
      "explanation": "Revenue recognized on accrual basis exceeded customer cash collection by the increase in receivables, so subtract the increase to convert toward cash basis.",
      "source": "Weygandt Ch14 adapted"
    },
    {
      "id": "C1404",
      "chapter": "ch14",
      "topic": "Indirect method",
      "difficulty": "medium",
      "question": "Under the indirect method, an increase in Accounts Payable related to operations is normally:",
      "options": [
        "Added to net income",
        "Subtracted from net income",
        "Investing outflow",
        "Non-cash financing"
      ],
      "answer": 0,
      "explanation": "An increase in operating payables means some expenses/purchases recognized have not yet been paid in cash, so add the increase in the operating reconciliation.",
      "source": "Weygandt Ch14 adapted"
    },
    {
      "id": "C1405",
      "chapter": "ch14",
      "topic": "Non-cash",
      "difficulty": "medium",
      "question": "A company acquires land by issuing ordinary shares. How is this handled in a cash-flow statement?",
      "options": [
        "Investing outflow and financing inflow of equal amount",
        "Operating inflow",
        "Not a cash flow; disclose as a significant non-cash investing/financing transaction",
        "Ignore completely"
      ],
      "answer": 2,
      "explanation": "No cash or cash equivalent moved. The transaction is economically significant and should be disclosed separately rather than fabricated as cash flows.",
      "source": "Cash-flow test bank + IAS 7 concepts"
    },
    {
      "id": "C1406",
      "chapter": "ch14",
      "topic": "Depreciation",
      "difficulty": "medium",
      "question": "Why is depreciation added back to net income in the indirect operating section?",
      "options": [
        "It is a cash receipt",
        "It reduced net income but did not consume current-period cash",
        "It is financing income",
        "It increases accounts payable"
      ],
      "answer": 1,
      "explanation": "Depreciation is a non-cash expense: it reduced accrual net income without a current-period cash payment. The add-back removes that non-cash reduction when reconciling to operating cash flow.",
      "source": "Weygandt Ch14 adapted"
    },
    {
      "id": "C1407",
      "chapter": "ch14",
      "topic": "Indirect method",
      "difficulty": "hard",
      "question": "Net income is 76,000; depreciation 12,700; gain on sale of investment 13,000; AR increases 23,000; inventory decreases 7,000; AP decreases 9,500; accrued liabilities increase 4,000. Net operating cash flow is:",
      "options": [
        "54,200",
        "76,000",
        "89,700",
        "33,500"
      ],
      "answer": 0,
      "explanation": "Reconcile: 76,000 + 12,700 − 13,000 − 23,000 + 7,000 − 9,500 + 4,000 = 54,200.",
      "source": "Cash-flow test bank — adapted"
    },
    {
      "id": "U01",
      "chapter": "ch1",
      "topic": "Accounting equation — owner investment",
      "difficulty": "easy",
      "question": "A shareholder invests $500 cash in a new business in exchange for share capital. What is the immediate effect on the accounting equation?",
      "options": [
        "Assets +500; Liabilities +500",
        "Assets +500; Equity +500",
        "Assets −500; Equity +500",
        "No effect until the business earns revenue"
      ],
      "answer": 1,
      "explanation": "Cash is an asset, so assets increase by $500. The investment is contributed capital, so equity increases by the same amount. The equation remains balanced.",
      "source": "ML249 Illustration workbook — Intro Practice"
    },
    {
      "id": "U02",
      "chapter": "ch1",
      "topic": "Accounting equation — purchase on account",
      "difficulty": "easy",
      "question": "A business purchases supplies for $500 on account. Which tabular-analysis effect is correct?",
      "options": [
        "Supplies +500; Accounts Payable +500",
        "Cash −500; Supplies +500",
        "Supplies +500; Revenue +500",
        "Expense +500; Accounts Payable +500"
      ],
      "answer": 0,
      "explanation": "The supplies are acquired now, so the asset Supplies increases. Because payment will occur later, Accounts Payable, a liability, increases by the same amount.",
      "source": "giaphuc practice.xlsx — Transaction analysis"
    },
    {
      "id": "U03",
      "chapter": "ch1",
      "topic": "Accounting equation — mixed cash and credit purchase",
      "difficulty": "medium",
      "question": "Equipment costing $4,500 is purchased by paying $1,000 cash and promising to pay the rest next month. Which set of effects is correct?",
      "options": [
        "Cash −1,000; Equipment +4,500; Accounts Payable +3,500",
        "Cash −4,500; Equipment +4,500 only",
        "Equipment +4,500; Revenue +4,500",
        "Cash −1,000; Equipment +3,500; Accounts Payable +4,500"
      ],
      "answer": 0,
      "explanation": "Equipment increases by the full $4,500 cost. Cash decreases by the $1,000 paid immediately, and Accounts Payable increases by the remaining $3,500 obligation. Net assets rise by $3,500, matched by the liability increase.",
      "source": "giaphuc practice.xlsx — Transaction analysis"
    },
    {
      "id": "U04",
      "chapter": "ch3",
      "topic": "Prepaid expense — mobile credit analogy",
      "difficulty": "medium",
      "question": "A $100 prepaid phone balance is purchased and $25 is used immediately. Ignoring tax, what is the best accounting analogy after the call?",
      "options": [
        "Prepaid asset 100; expense 0",
        "Prepaid asset 75; expense 25",
        "Cash 75; revenue 25",
        "Liability 75; expense 25"
      ],
      "answer": 1,
      "explanation": "The unused service potential behaves like a prepaid asset. As $25 of the benefit is consumed, $25 becomes expense and $75 remains as the prepaid asset.",
      "source": "ML249 Illustration workbook + Chapter 3 textbook logic"
    },
    {
      "id": "U05",
      "chapter": "ch3",
      "topic": "Prepaid expense — future airline ticket",
      "difficulty": "medium",
      "question": "A non-refundable airline ticket is purchased on October 1 for a flight on December 30. Under the class illustration, when is the cost normally recognized as expense?",
      "options": [
        "Entirely on October 1 because cash was paid",
        "When the flight/service is consumed on December 30",
        "Only when the airline issues an invoice",
        "Never, because the ticket is non-refundable"
      ],
      "answer": 1,
      "explanation": "Payment date and expense-recognition date can differ. The purchase creates a prepaid asset until the transportation service is consumed; the cost is then recognized as expense.",
      "source": "ML249 Illustration workbook + Chapter 3 textbook logic"
    },
    {
      "id": "U06",
      "chapter": "ch4",
      "topic": "Correcting entries",
      "difficulty": "medium",
      "question": "A company incorrectly debits Supplies for $310 when the purchase should have been Equipment, with the credit to Accounts Payable already correct. What correcting entry is needed?",
      "options": [
        "Dr Equipment 310; Cr Supplies 310",
        "Dr Accounts Payable 310; Cr Equipment 310",
        "Dr Supplies 310; Cr Equipment 310",
        "Dr Equipment 620; Cr Supplies 620"
      ],
      "answer": 0,
      "explanation": "The credit to Accounts Payable is already correct. Only the asset classification must be corrected: increase Equipment and remove the amount incorrectly placed in Supplies.",
      "source": "giaphuc practice.xlsx — P4.6 correcting-entry structure"
    },
    {
      "id": "U07",
      "chapter": "ch5",
      "topic": "Freight-in vs freight-out",
      "difficulty": "medium",
      "question": "Under a perpetual inventory system, when the buyer bears a $100 shipping fee on inventory purchased, which treatment matches the class illustration?",
      "options": [
        "Dr Freight-out 100; Cr Cash 100",
        "Dr Inventory 100; Cr Cash 100",
        "Dr Sales Discount 100; Cr Cash 100",
        "No entry because freight is never part of inventory"
      ],
      "answer": 1,
      "explanation": "When the buyer bears the freight necessary to bring inventory to its location, the class workbook treats the shipping cost as part of Inventory under the perpetual system.",
      "source": "giaphuc practice.xlsx — Chap 5 Illustration"
    },
    {
      "id": "U08",
      "chapter": "ch6",
      "topic": "Perpetual FIFO setup",
      "difficulty": "medium",
      "question": "A source exercise asks students to journalize inventory transactions under a perpetual FIFO system. Which information must be tracked continuously to determine cost of goods sold?",
      "options": [
        "Only the latest selling price",
        "Inventory cost layers: quantities and unit costs",
        "Only total sales revenue",
        "Only beginning cash and ending cash"
      ],
      "answer": 1,
      "explanation": "FIFO under a perpetual system requires current cost layers so each sale can be matched to the oldest available units and their costs.",
      "source": "giaphuc practice.xlsx — P6.8 + Chapter 6 textbook logic"
    },
    {
      "id": "U09",
      "chapter": "ch14",
      "topic": "Indirect method — accounts receivable",
      "difficulty": "medium",
      "question": "In the indirect operating section, Accounts Receivable increases by 59,800 during the year. How is this change treated?",
      "options": [
        "Add 59,800 to net income",
        "Subtract 59,800 from net income",
        "Classify as investing inflow",
        "Ignore it because it is non-cash"
      ],
      "answer": 1,
      "explanation": "An increase in Accounts Receivable means recognized revenue exceeded cash collected from customers. The increase is therefore subtracted from net income to move toward operating cash flow.",
      "source": "giaphuc practice.xlsx — P14.9 + Chapter 14 cash-flow logic"
    },
    {
      "id": "U10",
      "chapter": "ch14",
      "topic": "Cash-flow reconciliation",
      "difficulty": "easy",
      "question": "A cash-flow worksheet reports opening cash of 43,000, net increase in cash of 58,000, and closing cash of 101,000. Which statement is correct?",
      "options": [
        "The statement does not reconcile",
        "43,000 + 58,000 = 101,000, so the cash reconciliation works",
        "Closing cash should be 15,000",
        "Net change in cash must always equal net income"
      ],
      "answer": 1,
      "explanation": "A completed statement of cash flows should reconcile beginning cash plus the net change in cash to ending cash. Here 43,000 + 58,000 = 101,000.",
      "source": "giaphuc practice.xlsx — Practice cash-flow worksheet"
    }
  ],
  "cases": [
    {
      "id": "schilling",
      "title": "Midterm Case — Schilling Equipment",
      "status": "fully solved",
      "source": "FTU midterm exam practice",
      "intro": "A full one-month cycle: January transactions → adjustments → adjusted trial balance → income statement → statement of financial position → closing → post-closing trial balance.",
      "steps": [
        {
          "title": "A. January transactions",
          "rows": [
            [
              "Jan 8",
              "Dr Salaries & Wages Payable 700; Dr Salaries & Wages Expense 1,000; Cr Cash 1,700",
              "The $700 liability belongs to December; only the extra $1,000 is January expense."
            ],
            [
              "Jan 12",
              "Dr Cash 12,000; Cr Unearned Service Revenue 12,000",
              "Cash is collected for services spanning Jan–Mar, so liability first."
            ],
            [
              "Jan 15",
              "Dr Supplies 600; Cr Accounts Payable 600",
              "Supplies purchased on account."
            ],
            [
              "Jan 20",
              "Dr Rent Expense 500; Cr Cash 500",
              "January rent is consumed in January."
            ],
            [
              "Jan 25",
              "Dr Accounts Payable 2,600; Cr Cash 2,600",
              "Settlement of existing payable; no new expense."
            ]
          ]
        },
        {
          "title": "B. January 31 adjustments",
          "rows": [
            [
              "Supplies",
              "Dr Supplies Expense 1,000; Cr Supplies 1,000",
              "Available supplies 800 + 600 = 1,400; 400 remains; 1,000 used."
            ],
            [
              "Accrued salary",
              "Dr Salaries & Wages Expense 700; Cr Salaries & Wages Payable 700",
              "Unpaid January salary must be accrued."
            ],
            [
              "Insurance",
              "Dr Insurance Expense 100; Cr Prepaid Insurance 100",
              "Annual policy 1,200 = 100 per month."
            ],
            [
              "Opening unearned revenue earned",
              "Dr Unearned Service Revenue 1,200; Cr Service Revenue 1,200",
              "The case states all opening unearned revenue is realized in January."
            ],
            [
              "Jan 12 contract earned",
              "Dr Unearned Service Revenue 4,000; Cr Service Revenue 4,000",
              "12,000 covers 3 months, so January earns 4,000."
            ],
            [
              "Depreciation",
              "Dr Depreciation Expense 250; Cr Accumulated Depreciation—Equipment 250",
              "12,000 ÷ 4 years ÷ 12 = 250 per month."
            ]
          ]
        },
        {
          "title": "C. Adjusted trial balance — key balances",
          "rows": [
            [
              "Debit balances",
              "Cash 9,600; A/R 2,100; Prepaid Insurance 800; Supplies 400; Equipment 12,000; Salary Exp 1,700; Rent Exp 500; Supplies Exp 1,000; Insurance Exp 100; Depreciation Exp 250",
              "Total debits = 28,450."
            ],
            [
              "Credit balances",
              "Accumulated Depreciation 1,000; A/P 600; Unearned Revenue 8,000; Salaries Payable 700; Share Capital 10,000; Retained Earnings 2,950; Service Revenue 5,200",
              "Total credits = 28,450."
            ]
          ]
        },
        {
          "title": "D. Financial statements",
          "rows": [
            [
              "Income statement",
              "Service Revenue 5,200 − total expenses 3,550 = Net Income 1,650",
              "Expenses: salary 1,700 + rent 500 + supplies 1,000 + insurance 100 + depreciation 250."
            ],
            [
              "Statement of financial position",
              "Total assets 23,900 = liabilities 9,300 + equity 14,600",
              "Equity after closing: Share Capital 10,000 + Retained Earnings 4,600."
            ]
          ]
        },
        {
          "title": "E. Closing and post-closing",
          "rows": [
            [
              "Close revenue",
              "Dr Service Revenue 5,200; Cr Income Summary 5,200",
              "Reset revenue."
            ],
            [
              "Close expenses",
              "Dr Income Summary 3,550; Cr expense accounts 3,550",
              "Reset expenses."
            ],
            [
              "Close net income",
              "Dr Income Summary 1,650; Cr Retained Earnings 1,650",
              "Ending Retained Earnings becomes 4,600."
            ],
            [
              "Post-closing total",
              "Debits 24,900 = Credits 24,900",
              "Only permanent accounts remain."
            ]
          ]
        }
      ]
    },
    {
      "id": "skycastle",
      "title": "Midterm Mock — Sky Castle",
      "status": "source inconsistency flagged",
      "source": "FTU midterm mock",
      "intro": "This source is useful practice, but its printed opening post-closing trial balance does not reconcile. The website deliberately stops before fabricating final statements.",
      "warning": "The printed debit items sum to 49,380 while the printed credit items sum to 53,380, yet the paper prints 51,380 on both sides. That is a 4,000 inconsistency. Transaction and adjustment logic can still be practiced, but a reliable final post-closing trial balance and statement of financial position require the original typo to be corrected.",
      "steps": [
        {
          "title": "Transactions that can be journalized reliably",
          "rows": [
            [
              "Oct 5",
              "Dr Cash 2,000; Dr Accounts Receivable 3,000; Cr Service Revenue 5,000",
              "Service is earned; part cash, part on account."
            ],
            [
              "Oct 15",
              "Dr Accounts Payable 3,180; Cr Cash 3,180",
              "Pay existing creditors."
            ],
            [
              "Oct 17",
              "Dr Supplies 800; Cr Accounts Payable 800",
              "Purchase supplies on account."
            ],
            [
              "Nov 10",
              "Dr Salaries Expense 1,700; Cr Cash 1,700",
              "Salary payment."
            ],
            [
              "Nov 20",
              "Dr Cash 1,200; Cr Unearned Service Revenue 1,200",
              "Cash received for future service."
            ],
            [
              "Dec 18",
              "Dr Cash 3,000; Cr Accounts Receivable 3,000",
              "Collection of the Oct 5 receivable."
            ]
          ]
        },
        {
          "title": "Adjustments supported by the case",
          "rows": [
            [
              "Supplies",
              "Dr Supplies Expense 880; Cr Supplies 880",
              "1,080 opening + 800 purchase − 1,000 on hand = 880 used."
            ],
            [
              "Insurance",
              "Dr Insurance Expense 600; Cr Prepaid Insurance 600",
              "1,800 remaining at Sep 30 covers 9 months; three months expire in Oct–Dec."
            ],
            [
              "Interest",
              "Dr Interest Expense 300; Cr Interest Payable 300",
              "10,000 × 12% × 3/12 = 300."
            ]
          ]
        }
      ]
    }
  ],
  "formulae": [
    {
      "name": "Basic accounting equation",
      "formula": "Assets = Liabilities + Equity",
      "vi": "Tài sản = Nợ phải trả + Vốn chủ sở hữu"
    },
    {
      "name": "Retained earnings roll-forward",
      "formula": "Ending RE = Beginning RE + Net income − Dividends",
      "vi": "LN giữ lại cuối kỳ = đầu kỳ + LN sau thuế − cổ tức"
    },
    {
      "name": "Net income",
      "formula": "Net income = Revenues − Expenses",
      "vi": "Lợi nhuận = Doanh thu − Chi phí"
    },
    {
      "name": "Gross profit",
      "formula": "Gross profit = Net sales − Cost of goods sold",
      "vi": "Lợi nhuận gộp = Doanh thu thuần − Giá vốn hàng bán"
    },
    {
      "name": "COGS relationship",
      "formula": "COGS = Beginning inventory + Purchases − Ending inventory",
      "vi": "GVHB = HTK đầu kỳ + Mua trong kỳ − HTK cuối kỳ"
    },
    {
      "name": "Straight-line monthly depreciation (basic)",
      "formula": "Monthly depreciation = (Cost − Residual value) ÷ Useful life in months",
      "vi": "Khấu hao tháng = (Nguyên giá − GT thanh lý) ÷ số tháng sử dụng"
    },
    {
      "name": "Accrued interest",
      "formula": "Interest = Principal × Annual rate × Time fraction",
      "vi": "Lãi dồn tích = Gốc × lãi suất năm × phần thời gian"
    },
    {
      "name": "Inventory turnover",
      "formula": "Inventory turnover = COGS ÷ Average inventory",
      "vi": "Vòng quay HTK = GVHB ÷ HTK bình quân"
    },
    {
      "name": "Cash reconciliation",
      "formula": "Beginning cash + Net change in cash = Ending cash",
      "vi": "Tiền đầu kỳ + biến động ròng = tiền cuối kỳ"
    },
    {
      "name": "Indirect method — operating assets",
      "formula": "Increase in operating current asset → subtract; decrease → add",
      "vi": "TSNH hoạt động tăng → trừ; giảm → cộng"
    },
    {
      "name": "Indirect method — operating liabilities",
      "formula": "Increase in operating current liability → add; decrease → subtract",
      "vi": "Nợ NH hoạt động tăng → cộng; giảm → trừ"
    }
  ],
  "labTemplates": [
    {
      "id": "equation",
      "title": "Accounting Equation Analyzer",
      "vi": "Phân tích phương trình kế toán",
      "source": "giaphuc practice.xlsx · 2. Transaction analysis",
      "art": "assets/equation.svg",
      "desc": "Enter transaction effects across Assets = Liabilities + Equity. Row checks and cumulative totals update automatically."
    },
    {
      "id": "journal",
      "title": "General Journal",
      "vi": "Nhật ký chung",
      "source": "giaphuc practice.xlsx · P2.2 / P2.3",
      "art": "assets/journal.svg",
      "desc": "Date, account titles, debit, and credit columns with an automatic debit-credit balance check."
    },
    {
      "id": "ledger",
      "title": "T-Account / Ledger",
      "vi": "Tài khoản chữ T / Sổ cái",
      "source": "giaphuc practice.xlsx · P2.3 / P2.4",
      "art": "assets/journal.svg",
      "desc": "Post debits and credits to an account and calculate the ending balance before preparing a trial balance."
    },
    {
      "id": "trial",
      "title": "Trial Balance",
      "vi": "Bảng cân đối thử",
      "source": "giaphuc practice.xlsx · P2.4 / P2.5",
      "art": "assets/journal.svg",
      "desc": "List account balances in debit or credit columns and verify that the two totals agree."
    },
    {
      "id": "adjusting",
      "title": "Adjusting Entries Workspace",
      "vi": "Bảng bút toán điều chỉnh",
      "source": "giaphuc practice.xlsx · P3.1 / P3.4",
      "art": "assets/journal.svg",
      "desc": "Structured workspace for prepaid expenses, unearned revenue, accruals, depreciation, and other period-end adjustments."
    },
    {
      "id": "cycle",
      "title": "Accounting Cycle Worksheet",
      "vi": "Bảng tính chu trình kế toán",
      "source": "giaphuc practice.xlsx · P4.5",
      "art": "assets/equation.svg",
      "desc": "Move from unadjusted trial balance to adjustments, adjusted trial balance, income statement, and statement of financial position columns."
    },
    {
      "id": "correcting",
      "title": "Correcting Entries",
      "vi": "Bút toán sửa sai",
      "source": "giaphuc practice.xlsx · P4.6",
      "art": "assets/journal.svg",
      "desc": "Use the Incorrect → Reverse → Correct → Correcting workflow shown in the updated practice workbook."
    },
    {
      "id": "merch",
      "title": "Merchandising Journal",
      "vi": "Nhật ký doanh nghiệp thương mại",
      "source": "giaphuc practice.xlsx · Chap 5 Illustration / P5.1",
      "art": "assets/inventory.svg",
      "desc": "Buyer/seller workspace for purchases, sales, freight, returns, allowances, and discounts under a perpetual system."
    },
    {
      "id": "fifo",
      "title": "Perpetual FIFO Table",
      "vi": "Bảng FIFO kê khai thường xuyên",
      "source": "giaphuc practice.xlsx · P6.8",
      "art": "assets/inventory.svg",
      "desc": "Track transaction dates, units, unit costs, sales, and FIFO cost layers for inventory exercises."
    },
    {
      "id": "cashflow",
      "title": "Indirect Cash Flow Builder",
      "vi": "Lập BCLCTT phương pháp gián tiếp",
      "source": "giaphuc practice.xlsx · P14.3 / P14.9 / Practice",
      "art": "assets/cashflow.svg",
      "desc": "Start from net income, adjust non-cash items and working capital, then add investing and financing sections and reconcile cash."
    }
  ],
  "sourcePracticePacks": [
    {
      "title": "Intro Practice Illustrations",
      "source": "3. ML249 Illustration.xlsx · Intro Practice",
      "chapter": "Ch. 1 / Ch. 3",
      "template": "equation",
      "note": "Cash movements → operating result → financial position, plus prepaid-service timing analogies."
    },
    {
      "title": "Teacher Transaction Analysis",
      "source": "giaphuc practice.xlsx · 2. Transaction analysis",
      "chapter": "Ch. 1–2",
      "template": "equation",
      "note": "Investment, asset purchases, revenue, unearned revenue, borrowing, expenses, settlement, and dividends."
    },
    {
      "title": "Recording Process Pack",
      "source": "giaphuc practice.xlsx · P2.2 / P2.3 / P2.4 / P2.5",
      "chapter": "Ch. 2",
      "template": "journal",
      "note": "Journalize → post → ledger → trial balance practice."
    },
    {
      "title": "Adjusting Accounts Pack",
      "source": "giaphuc practice.xlsx · P3.1 / P3.4",
      "chapter": "Ch. 3",
      "template": "adjusting",
      "note": "Prepayments, accruals, insurance, unearned revenue, and period-end adjustment work."
    },
    {
      "title": "Completing the Cycle Pack",
      "source": "giaphuc practice.xlsx · P4.5 / P4.6",
      "chapter": "Ch. 4",
      "template": "cycle",
      "note": "Adjusted trial balance, statements, closing/post-closing work, and correction of errors."
    },
    {
      "title": "Merchandising Pack",
      "source": "giaphuc practice.xlsx · Chap 5 Illustration / P5.1",
      "chapter": "Ch. 5",
      "template": "merch",
      "note": "Buyer vs seller entries, freight, returns/allowances, early-payment discounts, and COGS."
    },
    {
      "title": "Inventory Pack",
      "source": "giaphuc practice.xlsx · P6.8",
      "chapter": "Ch. 6",
      "template": "fifo",
      "note": "Perpetual FIFO transaction table with quantities and unit costs."
    },
    {
      "title": "Cash Flow Pack",
      "source": "giaphuc practice.xlsx · P14.3 / P14.9 / P14.7 / Practice",
      "chapter": "Ch. 14",
      "template": "cashflow",
      "note": "Indirect operating section, investing/financing workpapers, disposal gains/losses, and cash reconciliation."
    }
  ]
};
