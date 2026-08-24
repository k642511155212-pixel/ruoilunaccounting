/* Ruoilun Accounting Mastery — self-contained GitHub Pages bundle */
window.AM_VISUALS = new Proxy({}, { get: function () { return ''; } });

/* ===== content/data.js ===== */

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
      "art": window.AM_VISUALS.equation,
      "desc": "Enter transaction effects across Assets = Liabilities + Equity. Row checks and cumulative totals update automatically."
    },
    {
      "id": "journal",
      "title": "General Journal",
      "vi": "Nhật ký chung",
      "source": "giaphuc practice.xlsx · P2.2 / P2.3",
      "art": window.AM_VISUALS.journal,
      "desc": "Date, account titles, debit, and credit columns with an automatic debit-credit balance check."
    },
    {
      "id": "ledger",
      "title": "T-Account / Ledger",
      "vi": "Tài khoản chữ T / Sổ cái",
      "source": "giaphuc practice.xlsx · P2.3 / P2.4",
      "art": window.AM_VISUALS.journal,
      "desc": "Post debits and credits to an account and calculate the ending balance before preparing a trial balance."
    },
    {
      "id": "trial",
      "title": "Trial Balance",
      "vi": "Bảng cân đối thử",
      "source": "giaphuc practice.xlsx · P2.4 / P2.5",
      "art": window.AM_VISUALS.journal,
      "desc": "List account balances in debit or credit columns and verify that the two totals agree."
    },
    {
      "id": "adjusting",
      "title": "Adjusting Entries Workspace",
      "vi": "Bảng bút toán điều chỉnh",
      "source": "giaphuc practice.xlsx · P3.1 / P3.4",
      "art": window.AM_VISUALS.journal,
      "desc": "Structured workspace for prepaid expenses, unearned revenue, accruals, depreciation, and other period-end adjustments."
    },
    {
      "id": "cycle",
      "title": "Accounting Cycle Worksheet",
      "vi": "Bảng tính chu trình kế toán",
      "source": "giaphuc practice.xlsx · P4.5",
      "art": window.AM_VISUALS.equation,
      "desc": "Move from unadjusted trial balance to adjustments, adjusted trial balance, income statement, and statement of financial position columns."
    },
    {
      "id": "correcting",
      "title": "Correcting Entries",
      "vi": "Bút toán sửa sai",
      "source": "giaphuc practice.xlsx · P4.6",
      "art": window.AM_VISUALS.journal,
      "desc": "Use the Incorrect → Reverse → Correct → Correcting workflow shown in the updated practice workbook."
    },
    {
      "id": "merch",
      "title": "Merchandising Journal",
      "vi": "Nhật ký doanh nghiệp thương mại",
      "source": "giaphuc practice.xlsx · Chap 5 Illustration / P5.1",
      "art": window.AM_VISUALS.inventory,
      "desc": "Buyer/seller workspace for purchases, sales, freight, returns, allowances, and discounts under a perpetual system."
    },
    {
      "id": "fifo",
      "title": "Perpetual FIFO Table",
      "vi": "Bảng FIFO kê khai thường xuyên",
      "source": "giaphuc practice.xlsx · P6.8",
      "art": window.AM_VISUALS.inventory,
      "desc": "Track transaction dates, units, unit costs, sales, and FIFO cost layers for inventory exercises."
    },
    {
      "id": "cashflow",
      "title": "Indirect Cash Flow Builder",
      "vi": "Lập BCLCTT phương pháp gián tiếp",
      "source": "giaphuc practice.xlsx · P14.3 / P14.9 / Practice",
      "art": window.AM_VISUALS.cashflow,
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


/* ===== content/theory-v5.js ===== */

(function(){
const D=window.ACCOUNTING_DATA; if(!D) return;
D.chapters=[
  {
    "id": "ch1",
    "number": "01",
    "title": "Accounting in Action",
    "subtitle": "Start with the teacher’s conceptual map: business form → assumptions/principles → elements → statements → accounting equation.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Explain the conceptual foundations before applying debit/credit rules.",
      "Define the five main financial-statement elements and connect them to the accounting equation.",
      "Read the four core financial statements and distinguish period vs point-in-time information.",
      "Analyze the dual effect of basic transactions."
    ],
    "sections": [
      {
        "title": "1. Forms of organization — who owns the business?",
        "lead": "The mind map begins with legal/ownership form because ownership changes the meaning of liability and equity.",
        "body": [
          "Sole trader: one owner; the owner generally bears unlimited liability, so personal assets can be exposed to business claims.",
          "Partnership: two or more owners; at least one partner may have unlimited liability depending on the legal form.",
          "Corporation: a separate legal person. Shareholders normally have limited liability, and the business entity is accounted for separately from owners.",
          "The accounting entity is not the same thing as the legal owner: accounting records belong to the entity whose financial statements are being prepared."
        ],
        "example": "A shareholder pays a personal phone bill from a personal bank account. The corporation does not record the payment because it is not the corporation’s transaction.",
        "trap": "Do not confuse “owner” with “business.” The economic entity assumption separates their transactions.",
        "terms": [
          "sole trader",
          "partnership",
          "corporation",
          "economic entity assumption"
        ],
        "mapPath": "Forms of organizations",
        "bookRef": "Ch1 · organization forms / economic entity"
      },
      {
        "title": "2. Assumptions and principles — the rules underneath the numbers",
        "lead": "The teacher map groups assumptions and recognition/measurement principles before transaction mechanics.",
        "body": [
          "Monetary unit: accounting records include events that can be expressed in monetary terms.",
          "Economic/business entity: keep the entity’s activities separate from owners and other entities.",
          "Time period: the life of a business is divided into artificial reporting periods so performance can be measured periodically.",
          "Going concern: accounting normally assumes the entity will continue operating long enough to use assets and settle obligations in the ordinary course.",
          "Historical cost records many items from transaction-based amounts; fair/current value can be more relevant when the applicable IFRS measurement basis requires it.",
          "Revenue recognition focuses on when revenue is earned; expense recognition focuses on when resources are consumed or obligations incurred. Matching is a useful learning idea: recognize expenses in the period in which related benefits are consumed or related revenue is generated.",
          "Full disclosure: information needed to understand the financial statements should be presented in the statements or notes."
        ],
        "example": "Paying twelve months of insurance in advance creates an asset initially because the future service has not yet been consumed. Expense is recognized as coverage expires.",
        "trap": "Cash timing is not the recognition rule. Receiving cash does not always mean revenue, and paying cash does not always mean expense.",
        "terms": [
          "monetary unit assumption",
          "economic entity assumption",
          "time period assumption",
          "going concern",
          "historical cost",
          "fair value",
          "revenue recognition",
          "expense recognition"
        ],
        "mapPath": "Assumptions & Principles",
        "bookRef": "Ch1 · LO2; Ch3 for recognition timing"
      },
      {
        "title": "3. Elements of financial statements — what the accounts represent",
        "lead": "Before learning account names, learn the economic meaning of assets, liabilities, equity, revenue, and expense.",
        "body": [
          "Asset: a present economic resource controlled by the entity as a result of past events; the resource has the potential to produce economic benefits.",
          "Liability: a present obligation of the entity to transfer an economic resource as a result of past events.",
          "Equity: the residual interest in assets after deducting all liabilities.",
          "Revenue/income increases assets or decreases liabilities in a way that increases equity, other than owner/shareholder contributions.",
          "Expense decreases economic benefits and equity, other than distributions to owners/shareholders.",
          "These definitions explain why collections of receivables are not new revenue and payments of existing payables are not new expenses."
        ],
        "example": "A customer pays a $5,000 receivable that was recorded last month. Cash increases and Accounts Receivable decreases; total assets and equity do not change.",
        "trap": "Classify the economic substance first. Account names come second.",
        "terms": [
          "asset",
          "liability",
          "equity",
          "revenue",
          "expense",
          "accounts receivable",
          "accounts payable"
        ],
        "mapPath": "Elements of FS → Elements",
        "bookRef": "Ch1 · LO3; Conceptual Framework definitions"
      },
      {
        "title": "4. Financial statements — four different questions",
        "lead": "The mind map connects each statement to the question it answers.",
        "body": [
          "Statement of Profit or Loss / Income Statement: results of operations for a reporting period; revenue minus expenses produces profit/net income or loss.",
          "Statement of Changes in Equity / Retained Earnings: explains movements in equity during a period. In a simple model, ending retained earnings = opening retained earnings + net income − dividends.",
          "Statement of Financial Position / Balance Sheet: assets, liabilities, and equity at a point in time. Assets are commonly presented by liquidity and liabilities by timing of settlement.",
          "Statement of Cash Flows: actual cash inflows and outflows during a period, classified into operating, investing, and financing activities.",
          "The statements are connected: profit flows into retained earnings; ending equity appears in financial position; ending cash agrees with the cash balance in financial position."
        ],
        "example": "“For the year ended 31 December” describes a period. “As at 31 December” describes a point in time.",
        "trap": "Do not use the income statement to answer a liquidity question just because it reports profit. Profit and cash are different concepts.",
        "terms": [
          "income statement",
          "statement of financial position",
          "statement of changes in equity",
          "statement of cash flows",
          "net income",
          "retained earnings"
        ],
        "mapPath": "Financial Statements",
        "bookRef": "Ch1 · LO5; Ch14 for cash flows"
      },
      {
        "title": "5. Basic and expanded accounting equations",
        "lead": "The equation is the bridge from economic meaning to transaction analysis.",
        "body": [
          "Basic equation: Assets = Liabilities + Equity.",
          "Expanded learning model: Assets = Liabilities + Share Capital + Opening Retained Earnings + Revenue − Expense − Dividend.",
          "Owner/shareholder contributions increase equity but are not revenue. Dividends/distributions reduce equity but are not expenses.",
          "Every recorded transaction must preserve the equality of the equation, although the composition of assets, liabilities, and equity can change."
        ],
        "example": "Borrow $8,000: Cash +8,000; Notes Payable +8,000. Buy equipment for $3,000 cash: Equipment +3,000; Cash −3,000; total assets unchanged.",
        "trap": "Avoid double-counting retained earnings and current-period revenues/expenses. The expanded equation separates current-period drivers for analysis.",
        "terms": [
          "accounting equation",
          "share capital",
          "retained earnings",
          "dividend"
        ],
        "mapPath": "Flow of accounting → 1. Analyze transaction → A = L + E",
        "bookRef": "Ch1 · LO3–LO4"
      },
      {
        "title": "6. Transaction analysis — ask four questions",
        "lead": "The teacher flow treats analysis as the first operational step in accounting.",
        "body": [
          "Question 1: Is the event recordable and does it relate to the entity?",
          "Question 2: Which accounts are affected? At least two accounts are normally involved because transactions have dual effects.",
          "Question 3: Does each account increase or decrease?",
          "Question 4: Does the accounting equation remain balanced?",
          "Examples of frequent traps: collection of A/R changes only asset composition; payment of A/P reduces both an asset and a liability; prepaid payments exchange one asset for another; advance collections increase cash and a liability until earned."
        ],
        "example": "Receive $4,000 in advance for next month’s service: Cash +4,000; Unearned Revenue +4,000. No current revenue is earned.",
        "trap": "Never classify from the cash movement alone. Identify what the cash represents.",
        "terms": [
          "transaction analysis",
          "dual effect",
          "unearned revenue",
          "prepaid expense"
        ],
        "mapPath": "Flow of accounting → 1. Analyze transaction",
        "bookRef": "Ch1 · LO4"
      }
    ],
    "teacherMapped": true
  },
  {
    "id": "ch2",
    "number": "02",
    "title": "The Recording Process",
    "subtitle": "Follow the teacher’s accounting flow: analyze → journalize → post → trial balance.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Apply debit/credit rules to each account class.",
      "Journalize transactions in chronological order.",
      "Post entries to ledger accounts and determine balances.",
      "Prepare a trial balance and explain what it can and cannot prove."
    ],
    "sections": [
      {
        "title": "1. From equation effects to debit and credit",
        "lead": "Debit and credit are a recording language for the increases and decreases already identified in transaction analysis.",
        "body": [
          "Debit is the left side; credit is the right side.",
          "Assets, expenses, dividends, and contra-revenue accounts normally increase with debits.",
          "Liabilities, share capital, retained earnings, and revenues normally increase with credits.",
          "Contra-asset accounts such as Accumulated Depreciation normally have credit balances because they offset assets.",
          "Rules must be learned by account class; “debit means increase” is false in general."
        ],
        "example": "Utilities used but unpaid: Dr Utilities Expense; Cr Accounts Payable. Expense increases by debit; liability increases by credit.",
        "trap": "Do not determine debit/credit from whether cash enters or leaves. Determine account class and direction first.",
        "terms": [
          "debit",
          "credit",
          "normal balance",
          "contra-asset account",
          "contra-revenue account"
        ],
        "mapPath": "Flow of accounting → 1. Analyze transaction → Increase/Decrease",
        "bookRef": "Ch2 · LO1"
      },
      {
        "title": "2. Double-entry accounting — the dual effect becomes an entry",
        "lead": "Double-entry means the total debit amount of a transaction equals the total credit amount.",
        "body": [
          "At least two accounts are affected, but a compound entry can involve three or more accounts.",
          "Equal debits and credits preserve the accounting equation in the recording system.",
          "A balanced entry can still be conceptually wrong if the wrong accounts are used."
        ],
        "example": "Provide $7,000 services, half cash and half on account: Dr Cash 3,500; Dr Accounts Receivable 3,500; Cr Service Revenue 7,000.",
        "trap": "“Double entry” does not mean two separate journal entries. It means equal debit and credit effects.",
        "terms": [
          "double-entry system",
          "compound entry"
        ],
        "mapPath": "Flow of accounting → 1. Analyze transaction → Dual effects",
        "bookRef": "Ch2 · LO1"
      },
      {
        "title": "3. Journalize transactions — book of original entry",
        "lead": "After analysis, record each transaction in the journal in chronological order.",
        "body": [
          "The journal is the book of prime/original entry.",
          "Record the date, debit account(s) first, credit account(s) indented, and a concise explanation when useful.",
          "The journal shows the complete effect of each transaction in one place.",
          "Checking that total debits equal total credits for each entry helps prevent or locate arithmetic recording errors."
        ],
        "example": "Purchase supplies for $500 on account: Dr Supplies 500; Cr Accounts Payable 500.",
        "trap": "Chronological journal ≠ account-by-account ledger. Do not confuse the two records.",
        "terms": [
          "journal",
          "journal entry",
          "book of original entry"
        ],
        "mapPath": "Flow of accounting → 2. Journalize transactions",
        "bookRef": "Ch2 · LO2"
      },
      {
        "title": "4. Post to ledger accounts — organize by account",
        "lead": "Posting transfers journal information to the ledger so all changes to one account can be summarized together.",
        "body": [
          "A T-account is a simple form of ledger account.",
          "The ledger shows increases, decreases, and the running/ending balance for an account.",
          "Posting occurs after journalizing. The journal answers “what happened in this transaction?”; the ledger answers “what happened to this account?”"
        ],
        "example": "After posting a cash receipt and two cash payments, the Cash ledger can show the ending cash balance even though the journal contains many different accounts.",
        "trap": "Posting is not optional if ledger balances are needed; it is a separate step from journalizing.",
        "terms": [
          "ledger",
          "posting",
          "T-account"
        ],
        "mapPath": "Flow of accounting → 3. Post to ledger accounts",
        "bookRef": "Ch2 · LO3"
      },
      {
        "title": "5. Prepare the trial balance — prove debit/credit equality",
        "lead": "The trial balance lists account balances and tests the mathematical equality of total debits and credits.",
        "body": [
          "Typical order in the teacher map: assets → liabilities → equity → dividends → revenues → expenses.",
          "An unadjusted trial balance is prepared before period-end adjustments.",
          "An adjusted trial balance follows adjusting entries.",
          "A post-closing trial balance contains permanent accounts after closing.",
          "A balanced trial balance does not prove that all transactions were recorded correctly: omissions, equal wrong amounts, wrong accounts with correct debit/credit sides, or duplicated entries may remain undetected."
        ],
        "example": "If a $900 purchase on account is completely omitted, both debit and credit are missing, so the trial balance can still balance.",
        "trap": "“Trial balance balances” does not mean “the accounting records are error-free.”",
        "terms": [
          "trial balance",
          "unadjusted trial balance",
          "adjusted trial balance",
          "post-closing trial balance"
        ],
        "mapPath": "Flow of accounting → 4. Prepare trial balance",
        "bookRef": "Ch2 · LO4"
      },
      {
        "title": "6. Recording-process diagnostic flow",
        "lead": "Use one repeatable checklist for every transaction.",
        "body": [
          "1) Identify the economic event and accounts.",
          "2) Determine account classes and increase/decrease direction.",
          "3) Translate to debit/credit.",
          "4) Journalize.",
          "5) Post.",
          "6) Recheck ledger balances and trial-balance equality.",
          "When stuck, return to the accounting equation instead of guessing a debit/credit mnemonic."
        ],
        "example": "Pay an existing $1,200 payable: the economic effect is Cash −1,200 and A/P −1,200; therefore Dr A/P 1,200 and Cr Cash 1,200.",
        "trap": "If you cannot explain the A = L + E effect, you are not ready to journalize the transaction.",
        "terms": [
          "recording process",
          "accounting equation"
        ],
        "mapPath": "Flow of accounting → Steps 1–4",
        "bookRef": "Ch1–Ch2 bridge"
      }
    ],
    "teacherMapped": true
  },
  {
    "id": "ch3",
    "number": "03",
    "title": "Adjusting the Accounts",
    "subtitle": "Teacher flow step 5–7: adjust timing differences → adjusted trial balance → financial statements.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Explain why accrual accounting requires adjusting entries.",
      "Differentiate deferrals from accruals.",
      "Prepare adjustments for prepaid expenses, unearned revenue, accrued revenue, accrued expense, and depreciation.",
      "Prepare an adjusted trial balance and use it as the basis for statements."
    ],
    "sections": [
      {
        "title": "1. Why adjusting entries exist",
        "lead": "Adjustments update accounts for revenues earned and expenses incurred in the current reporting period when ordinary transaction entries are incomplete.",
        "body": [
          "Adjusting entries are made at the end of the reporting period before financial statements are prepared.",
          "They normally involve one statement-of-financial-position account and one income-statement account.",
          "They do not normally include Cash because the cash event either occurred earlier/later or is irrelevant to the period-end recognition adjustment.",
          "Two families: deferrals (cash first, recognition later) and accruals (recognition first, cash later)."
        ],
        "example": "A one-year insurance payment was recorded as Prepaid Insurance. Each month, part of that asset is consumed and must be recognized as Insurance Expense.",
        "trap": "Do not record cash again in an adjusting entry just because the original transaction involved cash.",
        "terms": [
          "adjusting entry",
          "accrual accounting",
          "deferral",
          "accrual"
        ],
        "mapPath": "Flow of accounting → 5. Adjusting entries",
        "bookRef": "Ch3 · LO1"
      },
      {
        "title": "2. Deferral: prepaid expense",
        "lead": "Cash is paid before the expense is recognized. The unused portion is an asset until the benefit is consumed.",
        "body": [
          "Initial asset method: Dr Prepaid Asset / Cr Cash.",
          "At period end: Dr Expense / Cr Prepaid Asset for the amount consumed or expired.",
          "Expense recognized depends on the reporting period and the duration/consumption of the underlying service.",
          "If the adjustment is omitted, assets and equity/net income are generally overstated and expenses understated."
        ],
        "example": "Pay $12,000 for 12 months on 1 June. At 31 December, 7 months have expired: Dr Rent Expense 7,000; Cr Prepaid Rent 7,000.",
        "trap": "Non-refundable does not automatically mean expense immediately. Ask when the service/benefit is received.",
        "terms": [
          "prepaid expense",
          "prepaid insurance",
          "expense recognition"
        ],
        "mapPath": "Flow of accounting → 5. Adjusting entries → Deferrals → Prepaid expense",
        "bookRef": "Ch3 · deferrals"
      },
      {
        "title": "3. Deferral: unearned revenue",
        "lead": "Cash is received before the company earns revenue, so a liability exists until performance occurs.",
        "body": [
          "Initial liability method: Dr Cash / Cr Unearned Revenue.",
          "As service is performed: Dr Unearned Revenue / Cr Revenue for the portion earned.",
          "If earned revenue is not adjusted, liabilities are overstated and revenue/equity are understated.",
          "If cash received in advance was initially credited directly to Revenue, any unearned portion must be moved back to a liability at period end."
        ],
        "example": "Receive $12,000 for 12 months of rent on 1 September. By 31 December, 4 months are earned: Dr Unearned Rent Revenue 4,000; Cr Rent Revenue 4,000.",
        "trap": "Advance cash is not automatically revenue. Performance, not collection, determines earning.",
        "terms": [
          "unearned revenue",
          "revenue recognition"
        ],
        "mapPath": "Flow of accounting → 5. Adjusting entries → Deferrals → Unearned revenue",
        "bookRef": "Ch3 · deferrals"
      },
      {
        "title": "4. Accrual: accrued revenue",
        "lead": "Revenue is earned before it has been recorded or collected.",
        "body": [
          "Adjustment: Dr Receivable / Cr Revenue.",
          "Assets increase because the entity has a right to receive consideration; equity increases through revenue.",
          "When cash is collected later, Dr Cash / Cr Receivable; do not recognize the revenue again."
        ],
        "example": "Consulting work worth $2,400 is completed on 31 December but not yet billed: Dr Accounts Receivable 2,400; Cr Service Revenue 2,400.",
        "trap": "Do not wait for cash or invoice issuance if the revenue has already been earned under the exercise assumptions.",
        "terms": [
          "accrued revenue",
          "accounts receivable"
        ],
        "mapPath": "Flow of accounting → 5. Adjusting entries → Accruals → Accrued revenue",
        "bookRef": "Ch3 · accruals"
      },
      {
        "title": "5. Accrual: accrued expense and interest",
        "lead": "Expense is incurred before it has been recorded or paid.",
        "body": [
          "Adjustment: Dr Expense / Cr Payable.",
          "For interest: Principal × annual rate × time fraction gives accrued interest expense/payable.",
          "If the adjustment is omitted, liabilities and expenses are understated while net income/equity are overstated.",
          "When the liability is later paid, the previously accrued amount reduces the payable; only additional current-period expense is recognized if applicable."
        ],
        "example": "A $50,000 note at 12% has been outstanding for two months: interest = 50,000 × 12% × 2/12 = 1,000; Dr Interest Expense 1,000; Cr Interest Payable 1,000.",
        "trap": "Paying an accrued liability later is not entirely a new expense. Separate prior-period payable from current-period expense.",
        "terms": [
          "accrued expense",
          "interest payable",
          "salaries payable"
        ],
        "mapPath": "Flow of accounting → 5. Adjusting entries → Accruals → Accrued expense",
        "bookRef": "Ch3 · accruals"
      },
      {
        "title": "6. Depreciation — allocating plant-asset cost",
        "lead": "Depreciation is a period-end allocation that recognizes consumption of a long-lived asset’s service potential.",
        "body": [
          "Typical adjustment: Dr Depreciation Expense / Cr Accumulated Depreciation.",
          "Accumulated Depreciation is a contra-asset with a normal credit balance.",
          "Book/carrying amount = asset cost − accumulated depreciation.",
          "Depreciation does not directly credit Cash and does not necessarily measure a decline in market value."
        ],
        "example": "Equipment cost $30,000 and monthly depreciation $500: after 12 months, accumulated depreciation is $6,000 and carrying amount is $24,000, ignoring other adjustments.",
        "trap": "Never credit Cash for depreciation. Cash was affected when the asset was acquired, not when periodic cost allocation is recorded.",
        "terms": [
          "depreciation",
          "accumulated depreciation",
          "carrying amount"
        ],
        "mapPath": "Flow of accounting → 5. Adjusting entries; Flow → Credit → Contra-asset",
        "bookRef": "Ch3 · depreciation"
      },
      {
        "title": "7. Adjusted trial balance → financial statements",
        "lead": "After journalizing and posting adjustments, prepare the adjusted trial balance.",
        "body": [
          "The adjusted trial balance proves debit/credit equality after adjustments.",
          "It contains the updated account balances needed to prepare financial statements.",
          "The flow is: adjustments → post → adjusted trial balance → statements.",
          "The adjusted trial balance still cannot detect all conceptual errors; it is a mechanical equality test."
        ],
        "example": "If Supplies Expense and Supplies were adjusted, their updated balances—not the unadjusted balances—must appear in the financial statements.",
        "trap": "Do not prepare final statements from an unadjusted trial balance when period-end adjustments are required.",
        "terms": [
          "adjusted trial balance",
          "financial statements"
        ],
        "mapPath": "Flow of accounting → 6. Prepare adjusted trial balance → 7. Prepare Financial Statements",
        "bookRef": "Ch3 · LO4"
      }
    ],
    "teacherMapped": true
  },
  {
    "id": "ch4",
    "number": "04",
    "title": "Completing the Accounting Cycle",
    "subtitle": "Finish the teacher flow: statements → close temporary accounts → post-closing trial balance.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Explain the purpose of closing entries.",
      "Differentiate temporary and permanent accounts.",
      "Prepare the four-step closing sequence and post-closing trial balance.",
      "Understand the full accounting cycle as one connected process."
    ],
    "sections": [
      {
        "title": "1. Full-cycle orientation",
        "lead": "Chapter 4 is easiest when viewed as the final part of the teacher’s nine-step accounting flow.",
        "body": [
          "Before closing, financial statements have already been prepared from adjusted balances.",
          "Closing does not “fix” ordinary errors; it resets temporary accounts for the next reporting period.",
          "The cycle then ends with a post-closing trial balance of permanent accounts."
        ],
        "example": "A revenue account with a credit balance of 25,000 must be brought to zero so next period starts with no prior-period revenue.",
        "trap": "Do not close before the period’s statements and adjustments are complete.",
        "terms": [
          "accounting cycle",
          "closing process"
        ],
        "mapPath": "Flow of accounting → Steps 7–9",
        "bookRef": "Ch4 overview"
      },
      {
        "title": "2. Temporary vs permanent accounts",
        "lead": "Closing depends on whether the account accumulates one period or carries forward.",
        "body": [
          "Temporary/nominal: revenues, expenses, and dividends. They measure current-period activity and are reset to zero.",
          "Permanent/real: assets, liabilities, share capital, and retained earnings. Their ending balances carry forward.",
          "Retained Earnings is permanent even though it is affected by the closing process."
        ],
        "example": "Cash remains on the post-closing trial balance; Service Revenue does not.",
        "trap": "Do not close an asset or liability merely because it changed during the year.",
        "terms": [
          "temporary account",
          "permanent account",
          "nominal account",
          "real account"
        ],
        "mapPath": "Flow of accounting → 8. Closing entries / 9. Post-closing trial balance",
        "bookRef": "Ch4 · closing accounts"
      },
      {
        "title": "3. Closing entries — four-step teacher sequence",
        "lead": "The mind map uses Income Summary as the temporary clearing account.",
        "body": [
          "1) Close revenues: Dr Revenue / Cr Income Summary.",
          "2) Close expenses: Dr Income Summary / Cr Expense.",
          "3) Transfer net income: Dr Income Summary / Cr Retained Earnings. For a net loss, reverse the direction.",
          "4) Close dividends: Dr Retained Earnings / Cr Dividends.",
          "After these entries, all temporary accounts have zero balances."
        ],
        "example": "Revenue 40,000 and total expenses 31,000 produce net income 9,000. Income Summary ends with a 9,000 credit before being closed to Retained Earnings.",
        "trap": "Dividends are closed directly to Retained Earnings in this sequence; dividends are not an expense.",
        "terms": [
          "income summary",
          "closing entry",
          "dividend",
          "retained earnings"
        ],
        "mapPath": "Flow of accounting → 8. Closing entries",
        "bookRef": "Ch4 · closing entries"
      },
      {
        "title": "4. Post-closing trial balance",
        "lead": "The final trial balance contains only permanent accounts.",
        "body": [
          "Purpose: prove that total debit balances equal total credit balances after closing.",
          "Revenue, expense, and dividend accounts should be absent or zero.",
          "Closing balances of permanent accounts become opening balances for the next accounting period."
        ],
        "example": "A post-closing trial balance can contain Cash, Accounts Receivable, Equipment, Accounts Payable, Share Capital, and Retained Earnings.",
        "trap": "If Service Revenue appears with a non-zero balance, the closing process is incomplete.",
        "terms": [
          "post-closing trial balance"
        ],
        "mapPath": "Flow of accounting → 9. Prepare Post-closing trial balance",
        "bookRef": "Ch4 · post-closing"
      },
      {
        "title": "5. Correcting errors vs adjusting timing",
        "lead": "Correcting entries and adjusting entries solve different problems.",
        "body": [
          "Adjusting entries update timing/recognition at period end.",
          "Correcting entries repair entries that were recorded incorrectly.",
          "A useful correction method is: identify incorrect entry → reverse its effect if necessary → record the correct effect → combine into the net correcting entry.",
          "A trial balance may remain balanced even when the wrong account was used, so conceptual review is necessary."
        ],
        "example": "If Supplies was wrongly debited as Equipment for $600, debits still equal credits. A correcting entry moves $600 from Equipment to Supplies.",
        "trap": "Balanced debits and credits do not guarantee correct classification.",
        "terms": [
          "correcting entry",
          "adjusting entry"
        ],
        "mapPath": "Accounting Lab / teacher workbook correction flow",
        "bookRef": "Ch4 · correcting entries extension"
      }
    ],
    "teacherMapped": true
  },
  {
    "id": "ch5",
    "number": "05",
    "title": "Accounting for Merchandising Operations",
    "subtitle": "Teacher mind map: purchase inventory → sell inventory → freight/returns/discounts → inventory system.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Journalize inventory purchases and sales under a perpetual system.",
      "Account for freight terms, returns, allowances, and discounts.",
      "Compute net sales, cost of goods sold, and gross profit.",
      "Contrast perpetual and periodic inventory systems."
    ],
    "sections": [
      {
        "title": "1. Purchase of inventory — what belongs in inventory cost?",
        "lead": "The mind map applies the cost principle to merchandise purchases.",
        "body": [
          "Purchase price increases Inventory under the perpetual system.",
          "Freight-in paid by the buyer under FOB shipping point increases the cost of inventory.",
          "Purchase returns and allowances reduce the recorded cost of inventory.",
          "Purchase/payment discounts under the perpetual approach reduce Inventory because the goods effectively cost less.",
          "Always distinguish who owns the goods during transit using the shipping terms."
        ],
        "example": "Inventory $10,000, FOB shipping point, buyer pays $500 freight: Dr Inventory 10,500 in total across the purchase and freight entries.",
        "trap": "Freight-in is not automatically a selling expense; under the buyer’s FOB shipping point purchase, it is part of inventory cost.",
        "terms": [
          "inventory",
          "freight-in",
          "FOB shipping point",
          "purchase discount"
        ],
        "mapPath": "Merchandising operations → Purchase of inventory",
        "bookRef": "Ch5 · purchases"
      },
      {
        "title": "2. Sale of inventory — two effects under perpetual",
        "lead": "A sale affects both revenue and inventory cost.",
        "body": [
          "Revenue entry: Dr Cash/Accounts Receivable / Cr Sales Revenue.",
          "Cost entry: Dr Cost of Goods Sold / Cr Inventory.",
          "Gross profit = Net Sales − Cost of Goods Sold.",
          "The sales amount and inventory cost are different measurements and usually different amounts."
        ],
        "example": "Sell goods for $1,500 that cost $900: record revenue of 1,500 and COGS of 900; gross profit = 600.",
        "trap": "Do not record only the revenue entry under a perpetual system. The inventory/COGS effect is required.",
        "terms": [
          "sales revenue",
          "cost of goods sold",
          "gross profit",
          "perpetual inventory system"
        ],
        "mapPath": "Merchandising operations → Sale of inventory → Journal entries",
        "bookRef": "Ch5 · sales"
      },
      {
        "title": "3. Freight-out and FOB destination",
        "lead": "Shipping terms determine which party bears shipping cost and when ownership transfers in introductory problems.",
        "body": [
          "FOB destination: seller generally remains responsible until goods reach the buyer; seller-paid delivery is Freight-out / delivery expense.",
          "Freight-out is an operating/selling expense, not part of inventory cost for the seller.",
          "FOB shipping point: buyer generally assumes ownership at shipment and buyer-paid freight is Freight-in/inventory cost."
        ],
        "example": "Seller pays $120 to deliver goods sold FOB destination: Dr Freight-out/Delivery Expense 120; Cr Cash 120.",
        "trap": "Do not put seller Freight-out into COGS or Inventory.",
        "terms": [
          "freight-out",
          "FOB destination",
          "freight-in"
        ],
        "mapPath": "Merchandising operations → Sale of inventory → Shipping fee paid",
        "bookRef": "Ch5 · freight"
      },
      {
        "title": "4. Sales returns and allowances",
        "lead": "Returns and allowances use a contra-revenue account so gross sales remain visible.",
        "body": [
          "Sales Returns and Allowances is a contra-revenue with a debit normal balance.",
          "Sales return: reduce receivable/cash and reverse both sales and, when goods return to inventory in saleable condition, COGS/inventory effects.",
          "Sales allowance: customer keeps the goods; reduce sales/receivable only, so there is normally no inventory/COGS reversal for the allowance itself.",
          "Net Sales = Sales Revenue − Sales Returns & Allowances − Sales Discounts."
        ],
        "example": "Customer returns goods sold for $600 that cost $360: Dr Sales R&A 600 / Cr A/R 600; Dr Inventory 360 / Cr COGS 360.",
        "trap": "Return and allowance are not identical for inventory: a return can restore inventory; an allowance usually does not.",
        "terms": [
          "sales returns and allowances",
          "sales return",
          "sales allowance",
          "contra-revenue"
        ],
        "mapPath": "Merchandising operations → Sale of inventory → Sales returns & allowances",
        "bookRef": "Ch5 · returns"
      },
      {
        "title": "5. Sales discounts / payment discounts",
        "lead": "Early-payment discounts reduce the amount ultimately realized from a credit sale.",
        "body": [
          "Sales Discounts is a contra-revenue account with a debit normal balance.",
          "Under terms such as 2/10, n/30, the customer may deduct 2% if payment occurs within the discount period.",
          "The discount is generally computed on the amount still owed after qualifying returns/allowances under the exercise conditions.",
          "Net sales reflects the reduction."
        ],
        "example": "Invoice 10,000; return 1,000; terms 2/10, n/30; customer pays within discount period: discount = 2% × 9,000 = 180.",
        "trap": "Do not calculate the discount on items already returned.",
        "terms": [
          "sales discount",
          "credit terms",
          "net sales"
        ],
        "mapPath": "Merchandising operations → Sale of inventory → Sales discount",
        "bookRef": "Ch5 · discounts"
      },
      {
        "title": "6. Perpetual vs periodic inventory systems",
        "lead": "The system determines when detailed inventory and COGS records are updated.",
        "body": [
          "Perpetual: detailed records continuously show inventory on hand; COGS is determined each time a sale occurs.",
          "Periodic: detailed cost records are not updated for each sale; ending inventory is determined by physical count and COGS is determined at period end.",
          "Inventory costing methods such as FIFO can be applied under either system, though computation mechanics can differ for moving-average methods.",
          "A physical count remains important even under perpetual systems to detect shrinkage and record differences."
        ],
        "example": "Under a perpetual sale, COGS is recorded immediately. Under periodic accounting, no COGS entry is made at the sale date; COGS is determined at period end.",
        "trap": "Inventory “system” and inventory “costing method” are different choices.",
        "terms": [
          "perpetual inventory system",
          "periodic inventory system",
          "inventory costing method"
        ],
        "mapPath": "Merchandising operations → Inventory system",
        "bookRef": "Ch5 · inventory systems"
      }
    ],
    "teacherMapped": true
  },
  {
    "id": "ch6",
    "number": "06",
    "title": "Inventories",
    "subtitle": "Teacher flow: choose an inventory system, then apply a cost-flow method such as FIFO or moving weighted average.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Determine which costs belong in inventory and who owns goods in transit.",
      "Apply FIFO and moving weighted-average methods.",
      "Explain why cost flow need not match physical flow.",
      "Evaluate how inventory errors affect statements and ratios."
    ],
    "sections": [
      {
        "title": "1. Inventory system vs costing method",
        "lead": "The teacher mind map explicitly separates tracking system from cost-flow method.",
        "body": [
          "Inventory system asks how records are maintained: perpetual or periodic.",
          "Costing method asks which cost amounts are assigned to goods sold and ending inventory: FIFO or moving weighted average in the teacher map.",
          "Regardless of system, a company needs a consistent and appropriate costing method under the applicable accounting policies.",
          "Cost flow is an accounting allocation and does not have to be identical to the physical movement of goods."
        ],
        "example": "A supermarket may physically mix identical units while using FIFO for accounting cost flow.",
        "trap": "Do not say “perpetual FIFO” as if perpetual itself determines which costs flow out first.",
        "terms": [
          "FIFO",
          "moving weighted average",
          "periodic inventory system",
          "perpetual inventory system"
        ],
        "mapPath": "Merchandising operations → Inventory system → Inventory costing method",
        "bookRef": "Ch6 · costing methods"
      },
      {
        "title": "2. FIFO — first costs in become first costs out",
        "lead": "FIFO assigns the oldest available unit costs to COGS first.",
        "body": [
          "Track cost layers by date, quantity, and unit cost.",
          "For each sale, remove units from the oldest available layer first.",
          "Ending inventory therefore contains the most recent costs under FIFO.",
          "Under rising prices, FIFO typically produces lower COGS and higher ending inventory than methods that assign newer costs to COGS, all else equal."
        ],
        "example": "100 units @ $10, then 80 @ $12; sell 120 units → COGS = 100×10 + 20×12 = $1,240; ending inventory = 60×12 = $720.",
        "trap": "Do not use selling price in COGS. Inventory costing uses acquisition/unit cost.",
        "terms": [
          "FIFO",
          "cost layer",
          "ending inventory",
          "cost of goods sold"
        ],
        "mapPath": "Merchandising operations → Inventory costing method → FIFO",
        "bookRef": "Ch6 · FIFO"
      },
      {
        "title": "3. Moving weighted average — recalculate after purchases",
        "lead": "Under a perpetual moving-average approach, the average unit cost is recomputed after each purchase.",
        "body": [
          "Average unit cost = cost of goods available ÷ units available immediately after a purchase.",
          "Sales between purchases use the current average cost.",
          "A new purchase creates a new average; do not retrospectively change the cost assigned to prior sales.",
          "Maintain sufficient precision through intermediate calculations according to the exercise instructions."
        ],
        "example": "10 units @ 10 plus 10 units @ 14 → average 12. A sale of 6 units uses COGS 72 before the next purchase changes the average.",
        "trap": "Do not average selling prices or average only purchase prices without weighting by quantities.",
        "terms": [
          "moving weighted average",
          "average cost"
        ],
        "mapPath": "Merchandising operations → Inventory costing method → Moving weighted average cost",
        "bookRef": "Ch6 · average cost"
      },
      {
        "title": "4. Ownership and inventory cost",
        "lead": "Inventory should include goods the entity controls/owns under the exercise’s shipping and consignment conditions.",
        "body": [
          "FOB shipping point generally places goods with the buyer from shipment; FOB destination generally keeps them with seller until arrival.",
          "Consigned goods remain inventory of the consignor, not the consignee.",
          "Inventory cost includes purchase price and necessary costs to bring inventory to its present location and condition under the exercise framework.",
          "Purchase returns, allowances, and applicable discounts reduce inventory cost."
        ],
        "example": "Goods shipped FOB destination on 30 December and received 3 January remain seller inventory at 31 December under the standard classroom assumption.",
        "trap": "Physical possession alone does not always determine inventory ownership.",
        "terms": [
          "FOB shipping point",
          "FOB destination",
          "consignment"
        ],
        "mapPath": "Textbook extension linked to Merchandising operations",
        "bookRef": "Ch6 · inventory ownership"
      },
      {
        "title": "5. Inventory errors — follow the equation",
        "lead": "Ending-inventory errors flow into COGS, net income, retained earnings, and the statement of financial position.",
        "body": [
          "COGS = Beginning Inventory + Net Purchases − Ending Inventory.",
          "If ending inventory is overstated, COGS is understated and current-period net income/equity are overstated.",
          "Because one period’s ending inventory becomes the next period’s beginning inventory, many inventory errors reverse their income effect in the following period if not otherwise corrected.",
          "The statement of financial position is directly misstated through Inventory and Equity."
        ],
        "example": "Ending inventory overstated by 5,000 → COGS understated 5,000 → net income overstated 5,000 → ending equity overstated 5,000.",
        "trap": "Trace the formula instead of memorizing isolated “over/under” rules.",
        "terms": [
          "inventory error",
          "COGS",
          "net income"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch6 · inventory errors"
      },
      {
        "title": "6. Lower measurement and inventory analysis — textbook extension",
        "lead": "The textbook extends the teacher map into measurement and analysis topics.",
        "body": [
          "Inventory may need to be written down when its recoverable/net realizable amount is below cost under the applicable IFRS guidance.",
          "Inventory turnover relates cost of goods sold to average inventory and helps assess how quickly inventory is sold.",
          "Days in inventory converts turnover into an approximate holding period.",
          "Ratios are interpretation tools; industry, seasonality, and business model matter."
        ],
        "example": "Inventory turnover = COGS ÷ average inventory. A higher turnover can indicate faster movement, but excessively high turnover may also signal stockout risk.",
        "trap": "A ratio is not automatically “good” or “bad” without context.",
        "terms": [
          "net realizable value",
          "inventory turnover",
          "days in inventory"
        ],
        "mapPath": "Textbook extension — not explicit in teacher mind map",
        "bookRef": "Ch6 · measurement & analysis"
      }
    ],
    "teacherMapped": true
  },
  {
    "id": "ch7",
    "number": "07",
    "title": "Fraud, Internal Control, and Cash",
    "subtitle": "Textbook extension: internal control → cash controls → bank reconciliation → cash reporting.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Define fraud and the principles/limitations of internal control.",
      "Apply controls to cash receipts, disbursements, and petty cash.",
      "Prepare a bank reconciliation and related entries.",
      "Explain cash, cash equivalents, and restricted cash."
    ],
    "sections": [
      {
        "title": "1. Fraud and internal control",
        "lead": "Internal control is designed to safeguard assets, enhance reliable records, improve efficiency, and support compliance.",
        "body": [
          "Fraud involves intentional acts to obtain an unfair or illegal advantage.",
          "Common control principles include establishment of responsibility, segregation of duties, documentation, physical/IT controls, independent internal verification, and human-resource controls.",
          "Internal control provides reasonable, not absolute, assurance because of cost-benefit limits, human error, collusion, and management override.",
          "Data analytics can help identify anomalies, but analytics do not replace sound control design."
        ],
        "example": "The employee who handles cash should not also reconcile the bank account; separating custody and verification reduces concealment risk.",
        "trap": "More controls are not automatically better if cost exceeds benefit or the same person can override them.",
        "terms": [
          "fraud",
          "internal control",
          "segregation of duties"
        ],
        "mapPath": "Textbook extension — not explicit in teacher mind map",
        "bookRef": "Ch7 · LO1"
      },
      {
        "title": "2. Cash receipts and disbursements controls",
        "lead": "Cash requires especially strong control because it is highly liquid and easy to misappropriate.",
        "body": [
          "Use documented receipts, prompt deposits, restricted access, and independent reconciliation for cash receipts.",
          "Use authorized payment procedures, prenumbered documents/electronic approval trails, and separation of payment authorization from custody/recording.",
          "A petty cash fund uses an imprest approach: establish the fund, use supporting vouchers, and replenish based on expenses documented."
        ],
        "example": "When replenishing petty cash, debit the expenses represented by vouchers and credit Cash; the Petty Cash account itself normally stays at its authorized amount unless the fund size changes.",
        "trap": "Do not credit Petty Cash for ordinary replenishment under an imprest system.",
        "terms": [
          "petty cash",
          "cash receipts",
          "cash disbursements"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch7 · LO2"
      },
      {
        "title": "3. Bank reconciliation",
        "lead": "Reconciliation explains differences between company cash records and the bank statement.",
        "body": [
          "Bank-side reconciling items often include deposits in transit, outstanding checks, and bank errors.",
          "Book-side reconciling items often include bank service charges, NSF items, interest, EFTs, and company recording errors.",
          "Only book-side items require journal entries by the company; bank-side timing items generally do not.",
          "Adjusted bank balance must equal adjusted book balance."
        ],
        "example": "An outstanding check is deducted from the bank balance, not recorded again in the books. A bank service charge reduces the book balance and requires an entry.",
        "trap": "Do not journalize deposits in transit or outstanding checks a second time.",
        "terms": [
          "bank reconciliation",
          "outstanding check",
          "deposit in transit"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch7 · LO3"
      },
      {
        "title": "4. Reporting cash",
        "lead": "Cash reporting distinguishes readily available cash, cash equivalents, and restricted amounts.",
        "body": [
          "Cash equivalents are short-term, highly liquid investments readily convertible to known cash amounts and subject to insignificant risk of value changes.",
          "Restricted cash is presented/disclosed according to the nature and timing of the restriction.",
          "Classification should help users understand liquidity and availability."
        ],
        "example": "A three-month highly liquid investment acquired near maturity may qualify as a cash equivalent when it meets the definition.",
        "trap": "Not every short-term investment is automatically a cash equivalent.",
        "terms": [
          "cash equivalents",
          "restricted cash"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch7 · LO4"
      }
    ],
    "teacherMapped": false
  },
  {
    "id": "ch8",
    "number": "08",
    "title": "Accounting for Receivables",
    "subtitle": "Textbook extension: recognize → value → dispose of accounts and notes receivable.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Recognize accounts receivable from credit transactions.",
      "Apply the expected/uncollectible-account allowance approach.",
      "Account for notes receivable, interest, maturity, and collection.",
      "Present and analyze receivables."
    ],
    "sections": [
      {
        "title": "1. Accounts receivable",
        "lead": "Accounts receivable arise from credit sales or services and represent contractual rights to consideration.",
        "body": [
          "Recognize receivables when revenue is earned and the customer owes the amount.",
          "Sales returns, allowances, and discounts can reduce the amount ultimately collected.",
          "Credit management balances sales growth with collection risk."
        ],
        "example": "Service performed on account $4,000: Dr Accounts Receivable 4,000; Cr Service Revenue 4,000.",
        "trap": "Collection later reduces receivable; it does not create a second revenue event.",
        "terms": [
          "accounts receivable",
          "credit sale"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch8 · LO1"
      },
      {
        "title": "2. Valuing accounts receivable",
        "lead": "Receivables are reported at the amount expected to be collected, requiring an allowance for expected uncollectible amounts.",
        "body": [
          "Bad Debt Expense records expected credit loss; Allowance for Doubtful Accounts is a contra-asset.",
          "Net realizable value = gross receivables − allowance.",
          "Writing off a specific account under the allowance method decreases both gross A/R and the allowance; it does not create a new bad-debt expense at write-off.",
          "Recoveries reverse the write-off before recording collection."
        ],
        "example": "Write off $800: Dr Allowance for Doubtful Accounts 800; Cr Accounts Receivable 800. Net receivables are unchanged at the write-off date.",
        "trap": "Do not debit Bad Debt Expense again when a specific account is written off under the allowance method.",
        "terms": [
          "allowance for doubtful accounts",
          "bad debt expense",
          "net realizable value"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch8 · LO2"
      },
      {
        "title": "3. Notes receivable",
        "lead": "A note receivable is a formal written promise to pay a specified amount, often with interest.",
        "body": [
          "Interest = Principal × annual rate × time fraction.",
          "Maturity value = principal + interest for an interest-bearing note.",
          "At maturity, collect Cash and remove Notes Receivable plus recognize any accrued/current interest.",
          "If dishonored, the amount due may be transferred to Accounts Receivable depending on the circumstances."
        ],
        "example": "90-day, 8%, $10,000 note: interest using a 360-day classroom year = 10,000×8%×90/360 = 200; maturity value 10,200.",
        "trap": "Match the day-count convention to the exercise instructions.",
        "terms": [
          "notes receivable",
          "interest",
          "maturity value"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch8 · LO3"
      },
      {
        "title": "4. Receivables analysis",
        "lead": "Receivables turnover and average collection period help assess liquidity and credit management.",
        "body": [
          "Receivables turnover compares net credit sales/revenue with average net receivables.",
          "Average collection period converts turnover to days.",
          "Trend and industry context matter when interpreting the ratios."
        ],
        "example": "A falling turnover can indicate slower collection, but product mix and credit policy changes can also explain the trend.",
        "trap": "Do not infer credit quality from one ratio without context.",
        "terms": [
          "receivables turnover",
          "average collection period"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch8 · LO4"
      }
    ],
    "teacherMapped": false
  },
  {
    "id": "ch9",
    "number": "09",
    "title": "Plant Assets, Natural Resources, and Intangible Assets",
    "subtitle": "Textbook extension: cost → depreciation → disposal → natural resources/intangibles → analysis.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Determine the cost of plant assets.",
      "Apply depreciation and revised estimates.",
      "Account for disposals.",
      "Explain depletion/intangible accounting and presentation."
    ],
    "sections": [
      {
        "title": "1. Cost of plant assets",
        "lead": "Plant assets are tangible operating resources used for more than one period and not held for sale in the ordinary course.",
        "body": [
          "Cost includes expenditures necessary to acquire the asset and prepare it for intended use.",
          "Land, buildings, and equipment have different cost components.",
          "Ordinary repairs generally expense current-period maintenance; expenditures that increase future benefits may be capitalized when criteria are met."
        ],
        "example": "Machine price 50,000 + freight 2,000 + installation 3,000 → initial machine cost 55,000.",
        "trap": "Do not capitalize routine operating costs that do not bring the asset to usable condition or improve future benefits.",
        "terms": [
          "plant asset",
          "capital expenditure"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch9 · LO1"
      },
      {
        "title": "2. Depreciation and estimates",
        "lead": "Depreciation allocates depreciable amount over useful life using a systematic method.",
        "body": [
          "Straight-line depreciation = (cost − residual value) ÷ useful life.",
          "Changes in useful life or residual value are changes in estimates applied prospectively to remaining depreciable amount.",
          "Accumulated Depreciation offsets asset cost; carrying amount = cost − accumulated depreciation.",
          "Component depreciation may separately depreciate significant parts with different patterns/useful lives."
        ],
        "example": "Cost 100,000, residual 10,000, life 5 years → straight-line 18,000 per year.",
        "trap": "Depreciation is not a valuation to market price.",
        "terms": [
          "straight-line depreciation",
          "residual value",
          "useful life",
          "carrying amount"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch9 · LO2"
      },
      {
        "title": "3. Disposal of plant assets",
        "lead": "Before disposal, update depreciation to the disposal date; then compare proceeds with carrying amount.",
        "body": [
          "Remove asset cost and related accumulated depreciation.",
          "Gain = proceeds above carrying amount; loss = proceeds below carrying amount.",
          "A retirement with no proceeds normally produces a loss equal to remaining carrying amount."
        ],
        "example": "Cost 80,000, accumulated depreciation 50,000, proceeds 35,000 → carrying amount 30,000; gain 5,000.",
        "trap": "Compare proceeds with carrying amount, not original cost.",
        "terms": [
          "gain on disposal",
          "loss on disposal",
          "carrying amount"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch9 · LO3"
      },
      {
        "title": "4. Natural resources and intangible assets",
        "lead": "Natural resources are allocated through depletion; finite-life intangibles are generally amortized over useful/economic life subject to applicable rules.",
        "body": [
          "Depletion allocates natural-resource cost to units extracted.",
          "Intangibles include rights without physical substance, such as patents or licenses.",
          "Some intangibles have finite lives and are amortized; indefinite-life items are not amortized but are subject to impairment considerations under applicable standards.",
          "Presentation and disclosures help users understand carrying amounts and expense patterns."
        ],
        "example": "A mineral resource cost allocated at $4 per recoverable unit produces depletion expense/inventory cost based on units extracted.",
        "trap": "Do not call depletion or amortization “cash outflow” for the current period simply because it is an expense.",
        "terms": [
          "depletion",
          "intangible asset",
          "amortization"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch9 · LO4–LO5"
      }
    ],
    "teacherMapped": false
  },
  {
    "id": "ch10",
    "number": "10",
    "title": "Current Liabilities",
    "subtitle": "Textbook extension: recognize short-term obligations and analyze liquidity.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Define current liabilities.",
      "Account for notes, taxes, unearned revenues, payroll, and current maturities.",
      "Explain uncertainty/contingencies at an introductory level.",
      "Analyze current-liability relationships."
    ],
    "sections": [
      {
        "title": "1. What is a current liability?",
        "lead": "Current liabilities are obligations expected to be settled within the normal operating cycle or the specified short-term classification period under applicable standards.",
        "body": [
          "Common examples include accounts payable, short-term notes, salaries payable, taxes payable, unearned revenue, and current maturities of long-term debt.",
          "Recognition should reflect a present obligation from past events.",
          "Classification matters for liquidity assessment."
        ],
        "example": "A one-year bank note due in six months is current; a five-year bond normally is non-current except for amounts due within the current classification horizon.",
        "trap": "Do not classify based only on account title; use expected settlement timing and applicable criteria.",
        "terms": [
          "current liability",
          "current maturity"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch10 · LO1"
      },
      {
        "title": "2. Notes, taxes, and payroll liabilities",
        "lead": "Many current liabilities arise from financing, taxation, and employee services.",
        "body": [
          "Interest-bearing notes accrue interest over time.",
          "Sales/value-added taxes collected from customers create liabilities until remitted.",
          "Salaries and wages expense can differ from cash paid because of withholding and accrued payroll liabilities.",
          "Employer-related payroll costs may create additional expense and liabilities."
        ],
        "example": "Employees earn 9,000 by period end but payment occurs next period: Dr Salaries Expense 9,000; Cr Salaries Payable 9,000.",
        "trap": "Amounts withheld from employees are liabilities, not reductions of the employer’s expense by themselves.",
        "terms": [
          "notes payable",
          "salaries payable",
          "taxes payable"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch10 · LO1"
      },
      {
        "title": "3. Unearned revenue revisited",
        "lead": "Advance cash collections are current liabilities until the entity provides the promised goods/services.",
        "body": [
          "At receipt: Dr Cash / Cr Unearned Revenue.",
          "As earned: Dr Unearned Revenue / Cr Revenue.",
          "The concept is the same as the teacher mind map’s Ch3 deferral logic; Chapter 10 focuses on liability classification/reporting."
        ],
        "example": "A one-year subscription collected in advance is released to revenue as service is provided.",
        "trap": "Do not recognize the full advance as revenue if significant service remains unperformed.",
        "terms": [
          "unearned revenue"
        ],
        "mapPath": "Flow of accounting → Adjusting entries → Unearned revenue; textbook extension",
        "bookRef": "Ch10 · LO1"
      },
      {
        "title": "4. Reporting and analysis",
        "lead": "Users assess current liabilities relative to liquid/current assets and operating cash flows.",
        "body": [
          "Working capital = current assets − current liabilities.",
          "Current ratio = current assets ÷ current liabilities.",
          "Ratios are screening tools and must be interpreted with operating context, timing, and composition of balances.",
          "Uncertainties may require recognition, provision, or disclosure depending on probability/measurement criteria under applicable standards."
        ],
        "example": "A high current ratio is not automatically ideal if current assets consist largely of slow-moving inventory or uncollectible receivables.",
        "trap": "Liquidity quality matters, not just the ratio.",
        "terms": [
          "working capital",
          "current ratio"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch10 · LO2"
      }
    ],
    "teacherMapped": false
  },
  {
    "id": "ch11",
    "number": "11",
    "title": "Non-Current Liabilities",
    "subtitle": "Textbook extension: bonds → long-term notes/leases → reporting and leverage analysis.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Explain bond terminology and pricing basics.",
      "Account for bond issuance and redemption at an introductory level.",
      "Describe long-term notes and lease liabilities.",
      "Analyze non-current liabilities and debt/equity financing."
    ],
    "sections": [
      {
        "title": "1. Bonds and market price",
        "lead": "Bonds divide a long-term borrowing into standardized debt instruments.",
        "body": [
          "Key terms: face value, stated/coupon rate, market/effective rate, maturity date, interest dates.",
          "Bond price equals the present value of contractual future cash flows discounted at the market yield at issuance.",
          "When stated rate = market rate, issue price is near face; stated < market produces discount; stated > market produces premium."
        ],
        "example": "A bond with a coupon below market yield must be sold below face value so investors earn the market return.",
        "trap": "Do not compare coupon rate with face value; compare coupon rate with market yield.",
        "terms": [
          "bond",
          "face value",
          "bond discount",
          "bond premium"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch11 · LO1"
      },
      {
        "title": "2. Bond accounting",
        "lead": "Bond liabilities begin at the amount recognized from issuance and change through interest allocation and repayment.",
        "body": [
          "At face: Dr Cash / Cr Bonds Payable.",
          "Discount/premium reflects difference between proceeds and face amount and affects carrying amount/interest allocation.",
          "On redemption, remove the debt and recognize any resulting gain/loss if settlement differs from carrying amount, subject to transaction details."
        ],
        "example": "Redeeming a bond at carrying amount produces no gain or loss.",
        "trap": "Cash paid is compared with carrying amount, not simply face value, when determining redemption gain/loss.",
        "terms": [
          "bonds payable",
          "carrying amount"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch11 · LO2"
      },
      {
        "title": "3. Other non-current liabilities",
        "lead": "Long-term notes and leases are common financing obligations.",
        "body": [
          "Long-term note payments can contain interest and principal components.",
          "Mortgage notes are secured by specific assets.",
          "Lease liabilities represent obligations arising from qualifying lease arrangements under applicable standards.",
          "Current portions may be separately classified from long-term portions."
        ],
        "example": "A loan payment can reduce principal and include interest expense; the entire cash payment is not interest expense.",
        "trap": "Separate financing principal from interest.",
        "terms": [
          "mortgage note",
          "lease liability"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch11 · LO3"
      },
      {
        "title": "4. Reporting and solvency",
        "lead": "Leverage can increase shareholder returns but also increases fixed claims and risk.",
        "body": [
          "Debt-to-assets and times-interest-earned style measures help assess solvency.",
          "Users consider maturity schedules, interest commitments, covenants, and refinancing risk.",
          "Debt vs equity financing has different cash-flow and ownership implications."
        ],
        "example": "Two firms with identical assets may have different risk if one is heavily debt-financed.",
        "trap": "A lower debt ratio is not universally “better”; business risk and capital strategy matter.",
        "terms": [
          "solvency",
          "debt to assets",
          "times interest earned"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch11 · LO4"
      }
    ],
    "teacherMapped": false
  },
  {
    "id": "ch12",
    "number": "12",
    "title": "Corporations: Share Transactions and Equity",
    "subtitle": "Textbook extension: corporate form → share issuance/treasury → dividends/splits → equity reporting.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Explain corporate characteristics and shareholder rights.",
      "Account for ordinary/preference/treasury share transactions.",
      "Account for cash dividends, share dividends, and share splits.",
      "Report and analyze equity."
    ],
    "sections": [
      {
        "title": "1. Corporate form and capital",
        "lead": "A corporation is a separate legal entity whose ownership is represented by shares.",
        "body": [
          "Shareholders generally have limited liability and transferable ownership interests.",
          "Share capital records contributed capital from issuing shares; retained earnings reflects accumulated earnings retained in the business, net of distributions and other adjustments.",
          "Authorized, issued, and outstanding shares describe different aspects of share structure."
        ],
        "example": "Issuing shares for cash increases both Cash and Share Capital/related equity accounts; it is not revenue.",
        "trap": "Owner contributions are equity transactions, not operating income.",
        "terms": [
          "ordinary shares",
          "share capital",
          "authorized shares",
          "outstanding shares"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch12 · LO1"
      },
      {
        "title": "2. Preference and treasury shares",
        "lead": "Different share classes can have different rights; treasury shares are the company’s own reacquired shares.",
        "body": [
          "Preference shares may have dividend or liquidation preferences.",
          "Treasury shares reduce equity under the cost-method classroom presentation; they are not an asset of the company.",
          "Reissuing treasury shares affects equity accounts rather than ordinary revenue/gain recognition in the simplified framework."
        ],
        "example": "Reacquiring own shares for cash decreases Cash and total equity.",
        "trap": "Treasury shares are not reported as an investment asset in the issuing company’s own shares.",
        "terms": [
          "preference shares",
          "treasury shares"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch12 · LO2"
      },
      {
        "title": "3. Dividends and share splits",
        "lead": "Distributions can be cash or shares; share splits change unit structure without distributing corporate assets.",
        "body": [
          "Cash dividends require declaration, record, and payment considerations.",
          "Preference features can affect allocation of declared dividends.",
          "Share dividends transfer amounts within equity and increase shares outstanding.",
          "Share splits increase number of shares and reduce per-share par/stated structure proportionally without changing total equity."
        ],
        "example": "A 2-for-1 split doubles shares and halves per-share reference amounts; total equity does not change.",
        "trap": "Do not treat a share split as an expense or cash distribution.",
        "terms": [
          "cash dividend",
          "share dividend",
          "share split"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch12 · LO3"
      },
      {
        "title": "4. Equity reporting and analysis",
        "lead": "Equity statements explain contributed capital, retained earnings, treasury shares, and other equity components.",
        "body": [
          "Retained earnings is not a cash account; it is an accumulated equity balance.",
          "Return on ordinary shareholders’ equity relates income available to ordinary shareholders to average ordinary equity.",
          "Changes in equity should be reconciled across transactions and comprehensive income items under applicable reporting requirements."
        ],
        "example": "A company can have large retained earnings but little cash because earnings may have been invested in receivables, inventory, or plant assets.",
        "trap": "Never interpret retained earnings as a pot of cash.",
        "terms": [
          "return on equity",
          "retained earnings"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch12 · LO4"
      }
    ],
    "teacherMapped": false
  },
  {
    "id": "ch13",
    "number": "13",
    "title": "Investments",
    "subtitle": "Textbook extension: debt investments → share investments → classification and presentation.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Account for debt investments at an introductory level.",
      "Account for share investments under different influence levels.",
      "Explain financial-statement classification and unrealized/realized effects."
    ],
    "sections": [
      {
        "title": "1. Why companies invest and debt investments",
        "lead": "Companies invest excess cash, earn returns, and pursue strategic objectives.",
        "body": [
          "Debt investments create contractual cash-flow rights such as principal and interest.",
          "Classification and measurement depend on the business model and instrument characteristics under applicable IFRS requirements.",
          "Interest revenue is recognized over time according to the relevant measurement basis.",
          "Disposal removes the investment and recognizes resulting gain/loss as required."
        ],
        "example": "A bond investment can generate interest revenue even when its market value changes during the period.",
        "trap": "Do not assume all investments are measured and reported identically.",
        "terms": [
          "debt investment",
          "interest revenue"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch13 · LO1"
      },
      {
        "title": "2. Share investments and influence",
        "lead": "Accounting changes as the investor’s influence/control over the investee increases.",
        "body": [
          "Small holdings without significant influence are generally measured under financial-instrument rules.",
          "Significant influence often leads to an equity-method style approach.",
          "Control leads to consolidation rather than simply reporting one investment balance.",
          "Percentage ownership is an indicator, but actual influence/control facts matter."
        ],
        "example": "An investor with significant influence recognizes its share of investee results under the equity method rather than treating every increase as dividend revenue.",
        "trap": "Do not classify solely by a percentage threshold without considering the underlying influence/control criteria.",
        "terms": [
          "share investment",
          "equity method",
          "significant influence",
          "control"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch13 · LO2"
      },
      {
        "title": "3. Presentation and unrealized changes",
        "lead": "Investment classification determines where carrying amounts and gains/losses appear.",
        "body": [
          "Trading and non-trading classifications can produce different presentation of fair-value changes under the textbook framework.",
          "Realized gain/loss generally arises on disposal; unrealized changes reflect remeasurement while the investment remains held.",
          "Financial-statement notes help users understand measurement categories and risk exposures."
        ],
        "example": "An unrealized fair-value change can affect reported income or other comprehensive income depending on classification and applicable rules.",
        "trap": "Do not assume “unrealized” means “not reported.”",
        "terms": [
          "fair value",
          "unrealized gain",
          "realized gain"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch13 · LO3"
      }
    ],
    "teacherMapped": false
  },
  {
    "id": "ch14",
    "number": "14",
    "title": "Statement of Cash Flows",
    "subtitle": "Follow the teacher’s mind map exactly: Operating → Investing → Financing → significant non-cash transactions → reconcile cash.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Classify cash flows as operating, investing, or financing.",
      "Prepare operating cash flows using the indirect method.",
      "Use T-account reconciliation logic for investing and financing changes.",
      "Reconcile net change in cash and identify significant non-cash transactions."
    ],
    "sections": [
      {
        "title": "1. What the statement of cash flows answers",
        "lead": "Profit, financial position, and retained earnings do not by themselves show where cash came from or where it went.",
        "body": [
          "The statement reports actual cash inflows/outflows during a period.",
          "Three main sections: operating, investing, financing.",
          "Ending cash from the statement reconciles to the cash balance on the statement of financial position.",
          "Significant investing/financing transactions with no cash effect are disclosed separately rather than presented as cash flows."
        ],
        "example": "Buying equipment by issuing shares changes assets and equity but not cash; disclose as a significant non-cash transaction rather than an investing cash outflow plus financing cash inflow.",
        "trap": "Do not force non-cash transactions into cash-flow totals.",
        "terms": [
          "statement of cash flows",
          "operating activities",
          "investing activities",
          "financing activities",
          "non-cash transaction"
        ],
        "mapPath": "Financial Statements → Statement of Cash flows",
        "bookRef": "Ch14 · LO1"
      },
      {
        "title": "2. Operating section — indirect method step 1: start with P&L",
        "lead": "The teacher map starts with net income/net loss and reverses non-cash/non-operating effects.",
        "body": [
          "Start with net income or loss.",
          "Add back non-cash expenses such as depreciation/amortization because they reduced profit but not current cash.",
          "Remove gains and add losses from disposal of non-current assets because the related cash proceeds belong to investing activities.",
          "The goal is to move from accrual-based profit toward cash generated by operations."
        ],
        "example": "Net income 100,000 + depreciation 20,000 − gain on equipment sale 5,000 = 115,000 before working-capital adjustments.",
        "trap": "Do not add sale proceeds in operating activities just because the gain was in net income.",
        "terms": [
          "indirect method",
          "depreciation",
          "gain on disposal"
        ],
        "mapPath": "Statement of Cash flows → Operating section → Steps → 1. PnL/IS",
        "bookRef": "Ch14 · indirect method"
      },
      {
        "title": "3. Operating section — step 2: comparative SFP working capital",
        "lead": "Adjust for changes in non-cash current assets and current liabilities.",
        "body": [
          "Increase in a non-cash current asset is generally subtracted; decrease is generally added.",
          "Increase in a current operating liability is generally added; decrease is generally subtracted.",
          "Reason from cash timing: A/R increase means some revenue was not collected; A/P increase means some expense/purchase was not yet paid.",
          "Classify only operating working-capital items in this conversion; not every current account necessarily belongs to the same activity under all standards/circumstances."
        ],
        "example": "A/R increases 8,000 → subtract 8,000 from net income under indirect method. A/P increases 3,000 → add 3,000.",
        "trap": "Memorizing signs without understanding can fail. Ask whether accrual profit includes cash not yet received or expenses not yet paid.",
        "terms": [
          "accounts receivable",
          "accounts payable",
          "working capital"
        ],
        "mapPath": "Statement of Cash flows → Operating section → 2. Comparative SoFP/BS",
        "bookRef": "Ch14 · indirect method"
      },
      {
        "title": "4. Investing section — reconcile non-current assets",
        "lead": "Teacher method: draw T-accounts for non-current assets, enter opening/closing balances, identify additions/disposals, then determine cash flows.",
        "body": [
          "Typical investing cash flows include purchase and sale of PPE and long-term investments.",
          "Use Equipment/PPE T-accounts and Accumulated Depreciation to reconstruct disposals and depreciation when information is incomplete.",
          "Cash proceeds from disposal = carrying amount disposed ± gain/loss relationship.",
          "Separate significant non-cash acquisitions from cash investing flows."
        ],
        "example": "If equipment carrying amount disposed is 30,000 and gain is 4,000, cash proceeds are 34,000.",
        "trap": "Do not use original asset cost as cash proceeds unless the exercise says the asset was sold at cost.",
        "terms": [
          "investing activities",
          "T-account",
          "disposal proceeds"
        ],
        "mapPath": "Statement of Cash flows → Investing section → Steps S1–S3",
        "bookRef": "Ch14 · investing"
      },
      {
        "title": "5. Financing section — reconcile debt and share capital",
        "lead": "Teacher method: draw T-accounts for non-current liabilities and share capital, identify issuances/repayments, then determine cash flows.",
        "body": [
          "Borrowing/issuing long-term debt generally produces financing inflows; principal repayment is a financing outflow.",
          "Issuing ordinary shares for cash is a financing inflow; repurchasing shares is a financing outflow.",
          "Use Retained Earnings reconciliation to infer dividends when net income and beginning/ending RE are known: Ending RE = Beginning RE + Net income − Dividends (simplified model).",
          "Significant non-cash exchanges of debt/shares for assets or services are disclosed rather than included as cash flows."
        ],
        "example": "Beginning RE 80,000 + net income 30,000 − ending RE 95,000 = dividends 15,000. If paid in cash, the cash payment is a financing outflow under the course convention.",
        "trap": "Do not treat debt principal repayment as an operating expense.",
        "terms": [
          "financing activities",
          "dividends paid",
          "share issue",
          "debt repayment"
        ],
        "mapPath": "Statement of Cash flows → Financing section → Steps S1–S3",
        "bookRef": "Ch14 · financing"
      },
      {
        "title": "6. Final reconciliation and cash-flow quality",
        "lead": "The three sections must reconcile beginning to ending cash.",
        "body": [
          "Net change in cash = CFO + CFI + CFF.",
          "Ending cash = beginning cash + net change.",
          "Free cash flow is a secondary analysis measure in the textbook, often focusing on operating cash generation after capital expenditures and dividends depending on the definition used.",
          "Interpret cash flows alongside profit and financial position; a single positive/negative section is not automatically good or bad."
        ],
        "example": "Heavy investing cash outflows can be consistent with healthy expansion if funded sustainably and supported by future operating cash generation.",
        "trap": "Do not judge a company from the sign of one cash-flow section alone.",
        "terms": [
          "net change in cash",
          "free cash flow"
        ],
        "mapPath": "Statement of Cash flows → reconciliation",
        "bookRef": "Ch14 · LO3"
      }
    ],
    "teacherMapped": true
  },
  {
    "id": "ch15",
    "number": "15",
    "title": "Financial Statement Analysis",
    "subtitle": "Textbook extension: comparative analysis → ratios → sustainable income.",
    "source": "Teacher mind map + Weygandt & Kimmel IFRS 5e",
    "objectives": [
      "Apply horizontal and vertical analysis.",
      "Use liquidity, profitability, and solvency ratios.",
      "Interpret ratios with comparative context.",
      "Explain sustainable income and unusual items."
    ],
    "sections": [
      {
        "title": "1. Comparative analysis",
        "lead": "Financial statement analysis becomes meaningful through comparison.",
        "body": [
          "Horizontal analysis evaluates changes over time in amounts and percentages.",
          "Vertical/common-size analysis expresses financial-statement items as percentages of a base amount, such as sales or total assets.",
          "Comparisons may be intracompany, intercompany, or against industry averages.",
          "Large percentage changes from tiny base amounts require caution."
        ],
        "example": "Sales rise from 500 to 600: increase 100, or 20%. If COGS rises from 300 to 390: 30% increase, indicating margin pressure.",
        "trap": "A percentage change can look dramatic when the base is very small.",
        "terms": [
          "horizontal analysis",
          "vertical analysis",
          "common-size statement"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch15 · LO1"
      },
      {
        "title": "2. Liquidity ratios",
        "lead": "Liquidity focuses on ability to meet short-term obligations.",
        "body": [
          "Current ratio compares current assets with current liabilities.",
          "Receivables turnover and inventory turnover assess how efficiently key current assets move.",
          "Quality and composition matter: slow inventory or doubtful receivables may weaken apparent liquidity."
        ],
        "example": "Current ratio of 2.0 means current assets are twice current liabilities, but it does not guarantee all obligations can be paid immediately.",
        "trap": "Do not interpret ratio thresholds without industry and trend context.",
        "terms": [
          "liquidity",
          "current ratio",
          "inventory turnover"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch15 · LO2"
      },
      {
        "title": "3. Profitability ratios",
        "lead": "Profitability connects income with sales, assets, or equity.",
        "body": [
          "Profit margin relates profit to sales.",
          "Asset turnover relates sales to average assets.",
          "Return on assets combines profitability and asset use.",
          "Return on ordinary shareholders’ equity focuses on returns attributable to ordinary equity."
        ],
        "example": "Two companies can have the same ROA through different combinations of margin and turnover.",
        "trap": "High revenue alone does not imply high profitability.",
        "terms": [
          "profit margin",
          "return on assets",
          "return on equity"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch15 · LO2"
      },
      {
        "title": "4. Solvency ratios",
        "lead": "Solvency considers long-term ability to meet obligations and survive financially.",
        "body": [
          "Debt-related ratios show the proportion of financing supplied by creditors.",
          "Times interest earned compares income available for interest coverage with interest expense.",
          "Maturity structure, cash generation, and business stability matter alongside ratios."
        ],
        "example": "A highly leveraged company can be profitable but still face refinancing or interest-payment risk.",
        "trap": "Profitability and solvency are related but not identical.",
        "terms": [
          "solvency",
          "times interest earned"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch15 · LO2"
      },
      {
        "title": "5. Sustainable income and unusual items",
        "lead": "Analysis distinguishes recurring operating capacity from unusual or non-recurring effects.",
        "body": [
          "Discontinued operations and other separately presented items can affect comparability.",
          "Changes in accounting principles and comprehensive income require careful interpretation under applicable standards.",
          "Analysts adjust mental models—not necessarily the published statements—to estimate sustainable earning capacity."
        ],
        "example": "A one-time disposal gain can increase current profit but may not represent recurring operating performance.",
        "trap": "Do not extrapolate every current-year income item into future periods.",
        "terms": [
          "sustainable income",
          "comprehensive income",
          "discontinued operations"
        ],
        "mapPath": "Textbook extension",
        "bookRef": "Ch15 · LO3"
      }
    ],
    "teacherMapped": false
  }
];
const extra=[
  {
    "term": "segregation of duties",
    "vi": "phân chia nhiệm vụ",
    "definition": "Separate custody, authorization, recording, and verification responsibilities to reduce error and fraud risk.",
    "chapter": "Ch7"
  },
  {
    "term": "bank reconciliation",
    "vi": "đối chiếu ngân hàng",
    "definition": "Reconciliation of bank-statement cash with the company book balance.",
    "chapter": "Ch7"
  },
  {
    "term": "allowance for doubtful accounts",
    "vi": "dự phòng khoản phải thu khó đòi",
    "definition": "Contra-asset estimating receivables expected not to be collected.",
    "chapter": "Ch8"
  },
  {
    "term": "net realizable value",
    "vi": "giá trị thuần có thể thực hiện",
    "definition": "Amount expected to be realized from an asset after relevant reductions.",
    "chapter": "Ch6/Ch8"
  },
  {
    "term": "maturity value",
    "vi": "giá trị đáo hạn",
    "definition": "Principal plus interest due at maturity of an interest-bearing note.",
    "chapter": "Ch8"
  },
  {
    "term": "plant asset",
    "vi": "tài sản cố định hữu hình",
    "definition": "Tangible operating resource used for more than one period and not held for ordinary sale.",
    "chapter": "Ch9"
  },
  {
    "term": "residual value",
    "vi": "giá trị thanh lý ước tính",
    "definition": "Estimated value remaining at the end of an asset’s useful life for depreciation purposes.",
    "chapter": "Ch9"
  },
  {
    "term": "depletion",
    "vi": "khấu hao tài nguyên",
    "definition": "Systematic allocation of natural-resource cost as the resource is extracted.",
    "chapter": "Ch9"
  },
  {
    "term": "amortization",
    "vi": "phân bổ/khấu hao tài sản vô hình",
    "definition": "Systematic allocation of finite-life intangible cost over its useful life.",
    "chapter": "Ch9"
  },
  {
    "term": "working capital",
    "vi": "vốn lưu động ròng",
    "definition": "Current assets minus current liabilities.",
    "chapter": "Ch10"
  },
  {
    "term": "current ratio",
    "vi": "hệ số thanh toán hiện hành",
    "definition": "Current assets divided by current liabilities.",
    "chapter": "Ch10/Ch15"
  },
  {
    "term": "bond discount",
    "vi": "chiết khấu trái phiếu",
    "definition": "Amount by which bond face value exceeds issue price.",
    "chapter": "Ch11"
  },
  {
    "term": "bond premium",
    "vi": "phụ trội trái phiếu",
    "definition": "Amount by which bond issue price exceeds face value.",
    "chapter": "Ch11"
  },
  {
    "term": "treasury shares",
    "vi": "cổ phiếu quỹ",
    "definition": "A company’s own shares reacquired and held; presented as a reduction of equity.",
    "chapter": "Ch12"
  },
  {
    "term": "share split",
    "vi": "tách cổ phiếu",
    "definition": "Increase in number of shares with proportional reduction in per-share reference amount, without changing total equity.",
    "chapter": "Ch12"
  },
  {
    "term": "equity method",
    "vi": "phương pháp vốn chủ sở hữu",
    "definition": "Method used for investments where the investor has significant influence, recognizing its share of investee results.",
    "chapter": "Ch13"
  },
  {
    "term": "horizontal analysis",
    "vi": "phân tích ngang",
    "definition": "Comparison of financial-statement amounts across periods.",
    "chapter": "Ch15"
  },
  {
    "term": "vertical analysis",
    "vi": "phân tích dọc",
    "definition": "Common-size analysis expressing items as percentages of a base amount.",
    "chapter": "Ch15"
  },
  {
    "term": "solvency",
    "vi": "khả năng thanh toán dài hạn",
    "definition": "Ability to meet long-term obligations and remain financially viable.",
    "chapter": "Ch15"
  },
  {
    "term": "profitability",
    "vi": "khả năng sinh lời",
    "definition": "Ability to generate income relative to sales, assets, or equity.",
    "chapter": "Ch15"
  }
];

if(!D.sources.some(x=>x.id==='teachermindmap')) D.sources.unshift({
  id:'teachermindmap',
  title:'Principles of Accounting 8.26 — Teacher Mind Map',
  author:'Course material',
  type:'Primary learning-flow source',
  note:'Primary conceptual architecture for the Learn experience. The website follows this map for Forms of organizations, Assumptions & Principles, Elements of FS, Financial Statements, Flow of accounting, and Merchandising operations; the textbook and slides provide detailed theory, examples, and verification.'
});

const seen=new Set(D.glossary.map(x=>x.term.toLowerCase())); extra.forEach(x=>{if(!seen.has(x.term.toLowerCase())) D.glossary.push(x)});
})();


/* ===== content/mindmap-data.js ===== */

window.ACCOUNTING_MINDMAP = {
  "title": "Principles of accounting",
  "source": "4. Principles of Accounting 8.26.html — teacher mind map",
  "branches": [
    {
      "text": "Forms of organizations",
      "children": [
        {
          "text": "Sole trader",
          "children": [
            {
              "text": "Single owner",
              "children": []
            },
            {
              "text": "Unlimited liabilities",
              "children": [
                {
                  "text": "Not limited to the investment",
                  "children": []
                },
                {
                  "text": "Personal assets of owner",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "text": "Partnership",
          "children": [
            {
              "text": "Two or more owners",
              "children": []
            },
            {
              "text": "At least 1 owner - unlimited liability",
              "children": []
            }
          ]
        },
        {
          "text": "Corporation",
          "children": [
            {
              "text": "Separate legal person",
              "children": [
                {
                  "text": "Business entity",
                  "children": []
                }
              ]
            },
            {
              "text": "Limited liability",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "text": "Assumptions & Principles",
      "children": [
        {
          "text": "Assumptions",
          "children": [
            {
              "text": "Monetary unit",
              "children": []
            },
            {
              "text": "Business entity",
              "children": []
            },
            {
              "text": "Time period",
              "children": []
            },
            {
              "text": "Going concern",
              "children": []
            }
          ]
        },
        {
          "text": "Principles",
          "children": [
            {
              "text": "Measurement principles",
              "children": [
                {
                  "text": "Historic cost",
                  "children": [
                    {
                      "text": "Reliable",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Fair value",
                  "children": [
                    {
                      "text": "Relevance",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "text": "Recognition principles",
              "children": [
                {
                  "text": "Revenue recognition",
                  "children": [
                    {
                      "text": "Earned",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Expense recognition",
                  "children": [
                    {
                      "text": "Incurred",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Matching",
                  "children": [
                    {
                      "text": "Let the expenses follow the revenue",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "text": "Full disclosure principle",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "text": "Elements of FS",
      "children": [
        {
          "text": "Elements",
          "children": [
            {
              "text": "Assets",
              "children": [
                {
                  "text": "Present economic resources",
                  "children": [
                    {
                      "text": "Potential to produce economic benefits",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Controlled by an entity",
                  "children": []
                },
                {
                  "text": "Result of past event",
                  "children": []
                }
              ]
            },
            {
              "text": "Liability",
              "children": [
                {
                  "text": "Present obligation",
                  "children": []
                },
                {
                  "text": "To transfer an economic resources",
                  "children": []
                },
                {
                  "text": "Result of past events",
                  "children": []
                }
              ]
            },
            {
              "text": "Equity",
              "children": [
                {
                  "text": "Residual interest",
                  "children": []
                },
                {
                  "text": "Assets deduct all liabilities",
                  "children": []
                }
              ]
            },
            {
              "text": "Revenue",
              "children": [
                {
                  "text": "Increase in assets, or decrease in liabilities",
                  "children": []
                },
                {
                  "text": "Result in increase in equity",
                  "children": []
                },
                {
                  "text": "Other than contributions from shareholders",
                  "children": []
                }
              ]
            },
            {
              "text": "Expense",
              "children": [
                {
                  "text": "Decrease in economic benefits",
                  "children": []
                },
                {
                  "text": "Other than distributions to shareholders",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "text": "Measurement of elements",
          "children": [
            {
              "text": "Historical cost",
              "children": [
                {
                  "text": "Assets",
                  "children": [
                    {
                      "text": "Amount of cash or cash equivalents paid",
                      "children": []
                    },
                    {
                      "text": "Or FV of consideration given",
                      "children": []
                    },
                    {
                      "text": "To acquire assets",
                      "children": []
                    },
                    {
                      "text": "At the time of acquisition",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Liabilities",
                  "children": [
                    {
                      "text": "Amount of proceeds received",
                      "children": []
                    },
                    {
                      "text": "In exchange for the obligation",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "text": "Fair value",
              "children": [
                {
                  "text": "Amount of cash or cash equivalents",
                  "children": []
                },
                {
                  "text": "Could currently be obtained",
                  "children": []
                },
                {
                  "text": "By selling an asset or liability",
                  "children": []
                },
                {
                  "text": "In an orderly disposal",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "text": "Financial Statements",
      "children": [
        {
          "text": "Statement of Profit or loss/\nIncome statements",
          "children": [
            {
              "text": "Results of operations for a reporting period",
              "children": []
            },
            {
              "text": "Components",
              "children": [
                {
                  "text": "Income from operations",
                  "children": [
                    {
                      "text": "Revenue section",
                      "children": [
                        {
                          "text": "Services revenues",
                          "children": []
                        },
                        {
                          "text": "Sales revenues",
                          "children": []
                        },
                        {
                          "text": "Contra-revenue accounts",
                          "children": [
                            {
                              "text": "Sales returns & allowances",
                              "children": []
                            },
                            {
                              "text": "Sales discounts",
                              "children": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "text": "Expenses section",
                      "children": [
                        {
                          "text": "Cost of goods sold",
                          "children": [
                            {
                              "text": "Gross profit = Net sales - COGS",
                              "children": []
                            }
                          ]
                        },
                        {
                          "text": "Operating expenses",
                          "children": [
                            {
                              "text": "Selling & administration expenses",
                              "children": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "text": "Other revenues and expenses",
                  "children": [
                    {
                      "text": "Not normal operation of business",
                      "children": []
                    },
                    {
                      "text": "Examples",
                      "children": [
                        {
                          "text": "Gain/loss on disposal of PP&E",
                          "children": []
                        },
                        {
                          "text": "Interest & dividend received from investments in other entities",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "text": "Statements of changes in Equity/\nRetained earnings statements",
          "children": [
            {
              "text": "Changes in Equity for a reporting period",
              "children": []
            },
            {
              "text": "Components",
              "children": [
                {
                  "text": "Share capital",
                  "children": []
                },
                {
                  "text": "Retained earnings",
                  "children": [
                    {
                      "text": "CB = OB + Net income/- Net loss - Dividend",
                      "children": [
                        {
                          "text": "Net income/Net loss = Revenues - Expenses",
                          "children": []
                        },
                        {
                          "text": "Dividend",
                          "children": [
                            {
                              "text": "Distribution of earnings",
                              "children": []
                            },
                            {
                              "text": "Types",
                              "children": [
                                {
                                  "text": "Cash dividend",
                                  "children": []
                                },
                                {
                                  "text": "Share dividend",
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "text": "RE is a hybrid account",
                      "children": [
                        {
                          "text": "Credit balance",
                          "children": [
                            {
                              "text": "Accumulated surplus",
                              "children": []
                            }
                          ]
                        },
                        {
                          "text": "Debit balance",
                          "children": [
                            {
                              "text": "Accumulated deficit",
                              "children": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "text": "Statement of Financial position/\nBalance sheet",
          "children": [
            {
              "text": "Basic accounting equation",
              "children": []
            },
            {
              "text": "At a point in time",
              "children": []
            },
            {
              "text": "Components",
              "children": [
                {
                  "text": "Assets",
                  "children": [
                    {
                      "text": "Current Assets",
                      "children": []
                    },
                    {
                      "text": "Non-current assets",
                      "children": [
                        {
                          "text": "Intangible assets",
                          "children": []
                        },
                        {
                          "text": "Property, plant & Equipment/\nPlant assets",
                          "children": []
                        },
                        {
                          "text": "Long-term investments",
                          "children": []
                        },
                        {
                          "text": "Other non-current assets",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "text": "Liabilities",
                  "children": [
                    {
                      "text": "Current liabilities",
                      "children": []
                    },
                    {
                      "text": "Non-current liabilities",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Equity",
                  "children": [
                    {
                      "text": "Share capital",
                      "children": []
                    },
                    {
                      "text": "Retained earnings",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "text": "Presentation",
              "children": [
                {
                  "text": "Classified into current and non-current sections",
                  "children": []
                },
                {
                  "text": "Presented in the order of liquidity for assets",
                  "children": []
                },
                {
                  "text": "Presented in the order of repayment for liabilities",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "text": "Statement of Cash flows",
          "children": [
            {
              "text": "Actual cash inflows & cash outflows for a reporting period",
              "children": []
            },
            {
              "text": "3 sections",
              "children": [
                {
                  "text": "Operating section",
                  "children": [
                    {
                      "text": "Methods",
                      "children": [
                        {
                          "text": "Direct",
                          "children": []
                        },
                        {
                          "text": "Indirect",
                          "children": [
                            {
                              "text": "PnL",
                              "children": []
                            },
                            {
                              "text": "Comparative SoFP",
                              "children": []
                            },
                            {
                              "text": "Statement of Retained earnings",
                              "children": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "text": "Steps",
                      "children": [
                        {
                          "text": "1. PnL/IS",
                          "children": [
                            {
                              "text": "Net income/Net loss",
                              "children": []
                            },
                            {
                              "text": "-/+ Gain/loss on disposal of NCA",
                              "children": [
                                {
                                  "text": "Investing activities",
                                  "children": []
                                }
                              ]
                            },
                            {
                              "text": "+ Depreciation/Amortization expense",
                              "children": [
                                {
                                  "text": "Non-cash expense",
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "text": "2. Comparative SoFP/BS",
                          "children": [
                            {
                              "text": "CA",
                              "children": [
                                {
                                  "text": "-/+ Increase/decrease Current assets",
                                  "children": []
                                }
                              ]
                            },
                            {
                              "text": "CL",
                              "children": [
                                {
                                  "text": "+/- Increase/decrease Current Liabilities",
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "text": "Investing section",
                  "children": [
                    {
                      "text": "Method",
                      "children": [
                        {
                          "text": "Direct",
                          "children": []
                        }
                      ]
                    },
                    {
                      "text": "Steps",
                      "children": [
                        {
                          "text": "S1: Draw T-account of all NCA",
                          "children": [
                            {
                              "text": "Enter OB & CB",
                              "children": []
                            }
                          ]
                        },
                        {
                          "text": "S2: Identify all changes in NCA",
                          "children": [
                            {
                              "text": "Additions & Disposal of NCA",
                              "children": []
                            },
                            {
                              "text": "Reconcile CB",
                              "children": []
                            }
                          ]
                        },
                        {
                          "text": "S3: Identify cash flows related to those identified changes",
                          "children": [
                            {
                              "text": "Significant non-cash transactions",
                              "children": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "text": "Note",
                      "children": [
                        {
                          "text": "Use Accumulated Depreciation to calculate depreciation expense",
                          "children": []
                        },
                        {
                          "text": "NCA",
                          "children": [
                            {
                              "text": "PPE",
                              "children": []
                            },
                            {
                              "text": "Long-term Investment",
                              "children": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "text": "Financing section",
                  "children": [
                    {
                      "text": "Method",
                      "children": [
                        {
                          "text": "Direct",
                          "children": []
                        }
                      ]
                    },
                    {
                      "text": "Steps",
                      "children": [
                        {
                          "text": "S1: Draw T-account of all NCL & Share capital",
                          "children": [
                            {
                              "text": "Enter OB & CB",
                              "children": []
                            }
                          ]
                        },
                        {
                          "text": "S2: Identify all changes in NCL & Share capital",
                          "children": [
                            {
                              "text": "Issuance & repurchase of Ordinary shares/Treasury shares",
                              "children": []
                            },
                            {
                              "text": "Borrow & redeem NCL",
                              "children": []
                            },
                            {
                              "text": "Reconcile CB",
                              "children": []
                            }
                          ]
                        },
                        {
                          "text": "S3: Identify cash flows related to those identified changes",
                          "children": [
                            {
                              "text": "Significant non-cash transaction",
                              "children": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "text": "Note",
                      "children": [
                        {
                          "text": "Use Retained earnings to calculate Net income/loss and/or Dividend paid",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "text": "Notes: significant non-cash transactions",
              "children": [
                {
                  "text": "Issue bonds to exchange for",
                  "children": [
                    {
                      "text": "Assets",
                      "children": []
                    },
                    {
                      "text": "Services",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Issue shares to exchange for",
                  "children": [
                    {
                      "text": "Assets",
                      "children": []
                    },
                    {
                      "text": "Services",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Exchanging assets",
                  "children": []
                },
                {
                  "text": "Convert bonds to shares",
                  "children": []
                },
                {
                  "text": "Payment of Share dividend",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "text": "Flow of accounting",
      "children": [
        {
          "text": "1. Analyze transaction",
          "children": [
            {
              "text": "Record or not",
              "children": [
                {
                  "text": "Relates to the entity",
                  "children": []
                },
                {
                  "text": "A = L + E",
                  "children": [
                    {
                      "text": "A = L + SC + RE (OB) + Revenue - Expense - Dividend",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "text": "Accounts affected",
              "children": [
                {
                  "text": "At least 2 accounts",
                  "children": [
                    {
                      "text": "Keep accounting equation balance",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Dual effects",
                  "children": [
                    {
                      "text": "Double-entry accounting",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "text": "Increase/Decrease",
              "children": [
                {
                  "text": "Debit",
                  "children": [
                    {
                      "text": "Assets",
                      "children": []
                    },
                    {
                      "text": "Expenses",
                      "children": []
                    },
                    {
                      "text": "Dividend",
                      "children": []
                    },
                    {
                      "text": "Contra-revenue accounts",
                      "children": [
                        {
                          "text": "Sales returns & allowances",
                          "children": [
                            {
                              "text": "Sales returns",
                              "children": [
                                {
                                  "text": "Accepted back goods sold",
                                  "children": []
                                }
                              ]
                            },
                            {
                              "text": "Sales allowances",
                              "children": [
                                {
                                  "text": "Grant allowances for customers to keep defective goods",
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "text": "Sales discounts",
                          "children": [
                            {
                              "text": "Discount for early payment",
                              "children": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "text": "Credit",
                  "children": [
                    {
                      "text": "Liabilities",
                      "children": []
                    },
                    {
                      "text": "Equity",
                      "children": [
                        {
                          "text": "Share capital",
                          "children": []
                        },
                        {
                          "text": "Retained earnings",
                          "children": []
                        }
                      ]
                    },
                    {
                      "text": "Revenue",
                      "children": []
                    },
                    {
                      "text": "Contra-asset account",
                      "children": [
                        {
                          "text": "Accumulated depreciation",
                          "children": [
                            {
                              "text": "Total costs of assets allocated to expenses during assets useful life - depreciation",
                              "children": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "text": "2. Journalize transactions",
          "children": [
            {
              "text": "Record to journal",
              "children": []
            },
            {
              "text": "Journal",
              "children": [
                {
                  "text": "Book of prime/original entry",
                  "children": []
                },
                {
                  "text": "Chronological order records",
                  "children": []
                },
                {
                  "text": "Complete effects of a transaction",
                  "children": []
                },
                {
                  "text": "Prevent or locate errors",
                  "children": [
                    {
                      "text": "Total debits = total credits for a transaction",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "text": "3. Post to ledger accounts",
          "children": [
            {
              "text": "Simple form: T-account",
              "children": []
            },
            {
              "text": "Summary device",
              "children": [
                {
                  "text": "All changes to an account",
                  "children": [
                    {
                      "text": "Increases & decreases",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "text": "4. Prepare trial balance",
          "children": [
            {
              "text": "List all accounts in the order",
              "children": [
                {
                  "text": "1. Assets",
                  "children": []
                },
                {
                  "text": "2. Liabilities",
                  "children": []
                },
                {
                  "text": "3. Equity",
                  "children": []
                },
                {
                  "text": "4. Dividend",
                  "children": []
                },
                {
                  "text": "5. Revenues",
                  "children": []
                },
                {
                  "text": "6. Expenses",
                  "children": []
                }
              ]
            },
            {
              "text": "Just to prove the equality between total debits and total credits",
              "children": []
            },
            {
              "text": "Type of trial balance",
              "children": [
                {
                  "text": "(Unadjusted) trial balance",
                  "children": []
                },
                {
                  "text": "Adjusted trial balance",
                  "children": []
                },
                {
                  "text": "Post-closing trial balance",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "text": "5. Adjusting entries",
          "children": [
            {
              "text": "Deferrals",
              "children": [
                {
                  "text": "Prepaid expense",
                  "children": [
                    {
                      "text": "Cash payment before expense recorded",
                      "children": [
                        {
                          "text": "Assets",
                          "children": []
                        }
                      ]
                    },
                    {
                      "text": "Dr. Expense\n      Cr. Prepaid Expense",
                      "children": [
                        {
                          "text": "Reporting period",
                          "children": []
                        },
                        {
                          "text": "Duration of transaction",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "text": "Unearned revenue",
                  "children": [
                    {
                      "text": "Cash received before revenue earned",
                      "children": [
                        {
                          "text": "Liabilities",
                          "children": []
                        }
                      ]
                    },
                    {
                      "text": "Dr. Unearned revenue\n       Cr. Revenue",
                      "children": [
                        {
                          "text": "Reporting period",
                          "children": []
                        },
                        {
                          "text": "Duration of transaction",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "text": "Accruals",
              "children": [
                {
                  "text": "Accrued revenue",
                  "children": [
                    {
                      "text": "Not yet recorded, not yet received cash",
                      "children": []
                    },
                    {
                      "text": "Dr. Receivables\n       Cr. Revenue",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Accrued expense",
                  "children": [
                    {
                      "text": "Not yet recorded, not yet paid cash",
                      "children": []
                    },
                    {
                      "text": "Dr. Expense\n      Cr. Payable",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "text": "6. Prepare adjusted trial balance",
          "children": [
            {
              "text": "Prepare after adjusting entries have been made",
              "children": []
            },
            {
              "text": "Post to ledger accounts",
              "children": []
            }
          ]
        },
        {
          "text": "7. Prepare Financial Statements",
          "children": [
            {
              "text": "Statement of Profit or loss/\nIncome statements",
              "children": []
            },
            {
              "text": "Statements of changes in Equity/\nRetained earnings statements",
              "children": []
            },
            {
              "text": "Statement of Financial position/\nBalance sheet",
              "children": []
            },
            {
              "text": "Statement of Cash flows",
              "children": []
            }
          ]
        },
        {
          "text": "8. Closing entries",
          "children": [
            {
              "text": "Temporary/Nominal accounts",
              "children": [
                {
                  "text": "Revenue accounts",
                  "children": []
                },
                {
                  "text": "Expense accounts",
                  "children": []
                },
                {
                  "text": "Dividend account",
                  "children": []
                }
              ]
            },
            {
              "text": "Reset balances to Zero",
              "children": []
            },
            {
              "text": "Closing entries",
              "children": [
                {
                  "text": "1. Close Revenue accounts",
                  "children": [
                    {
                      "text": "Dr. Revenue\n      Cr. Income summary",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "2. Close Expense accounts",
                  "children": [
                    {
                      "text": "Dr. Income summary\n      Cr. Expense",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "3. Transfer Net income/Net loss",
                  "children": [
                    {
                      "text": "Net income",
                      "children": [
                        {
                          "text": "Dr. Income summary\n      Cr. Retained earnings",
                          "children": []
                        }
                      ]
                    },
                    {
                      "text": "Net loss",
                      "children": [
                        {
                          "text": "Dr. Retained earnings\n       Cr. Income summary",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "text": "4. Close Dividend account",
                  "children": [
                    {
                      "text": "Dr. Retained earnings\n       Cr. Dividend",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "text": "9. Prepare Post-closing trial balance",
          "children": [
            {
              "text": "Permanent/Real accounts",
              "children": [
                {
                  "text": "Assets accounts",
                  "children": []
                },
                {
                  "text": "Liabilities accounts",
                  "children": []
                },
                {
                  "text": "Equity accounts",
                  "children": [
                    {
                      "text": "Share capital - Ordinary",
                      "children": []
                    },
                    {
                      "text": "Retained earnings",
                      "children": [
                        {
                          "text": "Surplus",
                          "children": [
                            {
                              "text": "Credit balance",
                              "children": []
                            }
                          ]
                        },
                        {
                          "text": "Deficit",
                          "children": [
                            {
                              "text": "Debit balance",
                              "children": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "text": "Closing balances are carried forward",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "text": "Merchandising operations",
      "children": [
        {
          "text": "Purchase of inventory",
          "children": [
            {
              "text": "Cost principle",
              "children": [
                {
                  "text": "Purchase price",
                  "children": []
                },
                {
                  "text": "Shipping fee paid",
                  "children": [
                    {
                      "text": "FOB shipping point",
                      "children": []
                    },
                    {
                      "text": "Increase value of Inventory purchased",
                      "children": [
                        {
                          "text": "Freight-in",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "text": "Return & allowance received",
                  "children": [
                    {
                      "text": "Decrease value of Inventory purchased",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "Payment discount received",
                  "children": [
                    {
                      "text": "Decrease value of Inventory purchased",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "text": "Sale of inventory",
          "children": [
            {
              "text": "Journal entries",
              "children": [
                {
                  "text": "Sales revenue",
                  "children": [
                    {
                      "text": "Dr. AR/Cash\n            Cr. Sales revenue",
                      "children": []
                    }
                  ]
                },
                {
                  "text": "COGS",
                  "children": [
                    {
                      "text": "Dr. COGS\n          Cr. Inventory",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "text": "Shipping fee paid",
              "children": [
                {
                  "text": "FOB Destination",
                  "children": []
                },
                {
                  "text": "Operating expenses",
                  "children": [
                    {
                      "text": "Freight-out",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "text": "Sales returns & allowances",
              "children": [
                {
                  "text": "Contra-revenue account",
                  "children": []
                },
                {
                  "text": "Sales returns",
                  "children": [
                    {
                      "text": "Reduce Sales & COGS",
                      "children": [
                        {
                          "text": "Dr. Sales R&A\n       Cr. AR/Cash",
                          "children": []
                        },
                        {
                          "text": "Dr. Inventory\n       Cr. COGS",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "text": "Sales allowances",
                  "children": [
                    {
                      "text": "Reduce Sales only",
                      "children": [
                        {
                          "text": "Dr. Sales R&A\n       Cr. AR/Cash",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "text": "Sales discount/ Payment discount allowed",
              "children": [
                {
                  "text": "Contra-revenue account",
                  "children": []
                },
                {
                  "text": "Reduce Sales only",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "text": "Inventory system",
          "children": [
            {
              "text": "To account for or to keep track of inventory",
              "children": []
            },
            {
              "text": "Perpetual inventory system",
              "children": [
                {
                  "text": "Maintain detailed records of the cost of each inventory purchase and sale",
                  "children": []
                },
                {
                  "text": "Records continuously show inventory that should be on hand for every item",
                  "children": []
                },
                {
                  "text": "Company determines cost of goods sold each time a sale occurs",
                  "children": []
                }
              ]
            },
            {
              "text": "Periodic inventory system",
              "children": [
                {
                  "text": "Does not keep detailed records of goods on hand",
                  "children": []
                },
                {
                  "text": "Cost of goods sold determined by inventory counting at the end of period",
                  "children": []
                },
                {
                  "text": "COGS is recorded by an adjusting entry",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "text": "Inventory costing method",
          "children": [
            {
              "text": "First-in, First-out (FIFO)",
              "children": []
            },
            {
              "text": "Moving weighted average cost",
              "children": []
            }
          ]
        },
        {
          "text": "Notes",
          "children": [
            {
              "text": "Regardless of inventory system chosen, firms must apply inventory costing method",
              "children": []
            },
            {
              "text": "Cost flow does not need be consistent with the physical movement of the goods",
              "children": []
            }
          ]
        }
      ]
    }
  ],
  "chapterMap": {
    "ch1": [
      "Forms of organizations",
      "Assumptions & Principles",
      "Elements of FS",
      "Financial Statements",
      "Flow of accounting → 1. Analyze transaction"
    ],
    "ch2": [
      "Flow of accounting → 1. Analyze transaction",
      "Flow of accounting → 2. Journalize transactions",
      "Flow of accounting → 3. Post to ledger accounts",
      "Flow of accounting → 4. Prepare trial balance"
    ],
    "ch3": [
      "Flow of accounting → 5. Adjusting entries",
      "Flow of accounting → 6. Prepare adjusted trial balance",
      "Flow of accounting → 7. Prepare Financial Statements"
    ],
    "ch4": [
      "Flow of accounting → 8. Closing entries",
      "Flow of accounting → 9. Prepare Post-closing trial balance"
    ],
    "ch5": [
      "Merchandising operations → Purchase of inventory",
      "Merchandising operations → Sale of inventory",
      "Merchandising operations → Inventory system"
    ],
    "ch6": [
      "Merchandising operations → Inventory system",
      "Merchandising operations → Inventory costing method"
    ],
    "ch14": [
      "Financial Statements → Statement of Cash flows"
    ]
  }
};


/* ===== content/generated-questions.js ===== */

(function(){
  const D=window.ACCOUNTING_DATA; if(!D) return;
  const N=[];
  function money(n){return '$'+Number(n).toLocaleString('en-US',{maximumFractionDigits:2});}
  function rotate(arr,k){k=((k%arr.length)+arr.length)%arr.length; return arr.slice(k).concat(arr.slice(0,k));}
  function add({id,chapter,topic,difficulty='medium',type='MCQ',question,correct,distractors,explanation,whyWrong,reviewPath,reviewLesson,bookRef,mapRef}){
    let raw=[correct,...distractors]; let k=(N.length*7+id.length)%4; let options=rotate(raw,k); let answer=options.indexOf(correct);
    let optionExplanations=options.map(o=>o===correct?`Correct — ${explanation}`:(whyWrong?.[raw.indexOf(o)-1]||'This choice does not follow the account classification, recognition timing, or calculation required by the scenario.'));
    N.push({id,chapter,topic,difficulty,type,question,options,answer,explanation,optionExplanations,source:'Course-original · generated from supplied course/textbook question patterns; teacher mind map used where applicable',origin:'Course-original',reviewPath,reviewLesson,bookRef,mapRef});
  }
  const names=['Nova Studio','Lotus Consulting','Harbor Design','Mango Labs','Sora Services','Atlas Media','Orchid Tech','Delta Repair','Amber Co.','Pine Advisory'];

  // CH1 — 80
  for(let i=0;i<10;i++){
    const A=42000+i*3500, L=17000+i*1200, E=A-L;
    add({id:`G1-EQ-${i+1}`,chapter:'ch1',topic:'Accounting equation',difficulty:'easy',type:'Calculation',question:`${names[i]} reports total assets of ${money(A)} and total liabilities of ${money(L)}. What is total equity?`,correct:money(E),distractors:[money(A+L),money(L),money(A-L-5000)],explanation:`Use Assets = Liabilities + Equity, so Equity = Assets − Liabilities = ${money(A)} − ${money(L)} = ${money(E)}.`,reviewPath:'Foundations → Elements of FS → Equity → Basic accounting equation',reviewLesson:'Chapter 1 · Lesson 5 — Basic and expanded accounting equations',bookRef:'Ch1 · LO3',mapRef:'Elements of FS → Equity; Flow of accounting → A = L + E'});
  }
  const trans=[
    ['shareholders invest cash','Assets increase; Equity increases','Cash increases and Share Capital increases.'],
    ['borrow cash by signing a note','Assets increase; Liabilities increase','Cash increases and Notes Payable increases.'],
    ['buy equipment for cash','One asset increases; another asset decreases; total assets unchanged','Equipment increases while Cash decreases by the same amount.'],
    ['purchase supplies on account','Assets increase; Liabilities increase','Supplies increases and Accounts Payable increases.'],
    ['perform services on account','Assets increase; Equity increases','Accounts Receivable and Revenue increase.'],
    ['collect an existing receivable','Asset composition changes; total assets and equity unchanged','Cash increases and Accounts Receivable decreases; revenue was recorded earlier.'],
    ['pay an existing account payable','Assets decrease; Liabilities decrease','Cash and Accounts Payable decrease; no new expense arises.'],
    ['pay current-period rent in cash','Assets decrease; Equity decreases','Cash decreases and Rent Expense reduces equity.'],
    ['receive cash in advance for next month’s service','Assets increase; Liabilities increase','Cash increases and Unearned Revenue increases because performance is still owed.'],
    ['pay a cash dividend','Assets decrease; Equity decreases','Cash decreases and Dividends reduce retained earnings/equity.']
  ];
  trans.forEach((t,i)=>add({id:`G1-TR-${i+1}`,chapter:'ch1',topic:'Transaction analysis',difficulty:'easy',type:'Concept',question:`${names[i]} will ${t[0]}. Which statement best describes the immediate accounting-equation effect?`,correct:t[1],distractors:['Assets increase; Revenue always increases','Liabilities decrease; Equity increases','No accounts are affected'],explanation:t[2],reviewPath:'Flow of accounting → 1. Analyze transaction → Accounts affected → Dual effects',reviewLesson:'Chapter 1 · Lesson 6 — Transaction analysis',bookRef:'Ch1 · LO4',mapRef:'Flow of accounting → 1. Analyze transaction'}));
  for(let i=0;i<10;i++){
    const beg=50000+i*5000, inv=10000+(i%4)*2500, rev=42000+i*2100, exp=26000+i*1300, div=3000+(i%3)*500, end=beg+inv+rev-exp-div;
    add({id:`G1-RE-${i+1}`,chapter:'ch1',topic:'Retained earnings / equity',difficulty:'medium',type:'Calculation',question:`Beginning equity is ${money(beg)}. During the period, shareholders invest ${money(inv)}, revenue is ${money(rev)}, expenses are ${money(exp)}, and dividends are ${money(div)}. What is ending equity under this simplified model?`,correct:money(end),distractors:[money(beg+rev-exp),money(beg+inv+rev-exp+div),money(beg+inv-rev+exp-div)],explanation:`Ending equity = beginning equity + owner investment + revenue − expenses − dividends = ${money(beg)} + ${money(inv)} + ${money(rev)} − ${money(exp)} − ${money(div)} = ${money(end)}.`,reviewPath:'Financial Statements → Statement of changes in Equity → Retained earnings',reviewLesson:'Chapter 1 · Lesson 4 and Lesson 5',bookRef:'Ch1 · LO3–LO5',mapRef:'Financial Statements → Retained earnings → CB = OB + Net income − Dividend'});
  }
  const stItems=[
    ['Cash','Statement of Financial Position','asset at a point in time'],['Service Revenue','Income Statement','revenue for a period'],['Accounts Payable','Statement of Financial Position','liability at a point in time'],['Dividends','Statement of Changes in Equity / Retained Earnings','distribution that changes equity during a period'],['Salaries Expense','Income Statement','expense for a period'],['Share Capital','Statement of Financial Position / Changes in Equity','contributed equity'],['Net income','Income Statement','results of operations for a period'],['Ending retained earnings','Statement of Financial Position / Changes in Equity','ending equity balance'],['Operating cash flow','Statement of Cash Flows','cash generated/used in operations during a period'],['Equipment','Statement of Financial Position','non-current asset at a point in time']
  ];
  stItems.forEach((x,i)=>add({id:`G1-FS-${i+1}`,chapter:'ch1',topic:'Financial statements',difficulty:'easy',type:'Classification',question:`Where would you primarily look to find ${x[0]}?`,correct:x[1],distractors:['Only the Statement of Cash Flows','Only the notes; never a primary statement','No financial statement'],explanation:`${x[0]} is ${x[2]}, so ${x[1]} is the primary place to locate or reconcile it.`,reviewPath:'Financial Statements → Components',reviewLesson:'Chapter 1 · Lesson 4 — Financial statements',bookRef:'Ch1 · LO5',mapRef:'Financial Statements'}));
  const period=[['Income Statement','for a period'],['Statement of Cash Flows','for a period'],['Statement of Changes in Equity','for a period'],['Statement of Financial Position','at a point in time'],['Balance Sheet','at a point in time'],['Profit or Loss Statement','for a period'],['Retained Earnings Statement','for a period'],['Classified Statement of Financial Position','at a point in time'],['Comprehensive Income Statement','for a period'],['Statement showing Assets, Liabilities and Equity','at a point in time']];
  period.forEach((x,i)=>add({id:`G1-TIME-${i+1}`,chapter:'ch1',topic:'Period vs point in time',difficulty:'easy',question:`The ${x[0]} is best described as information ${x[1] === 'for a period' ? 'covering a reporting period' : 'measured at a specific date'}. Which classification is correct?`,correct:x[1],distractors:[x[1]==='for a period'?'at a point in time':'for a period','only when cash changes','only at year-end'],explanation:`The ${x[0]} is ${x[1]}. “For the year/month ended …” signals a period; “as at …” signals a point in time.`,reviewPath:'Financial Statements',reviewLesson:'Chapter 1 · Lesson 4',bookRef:'Ch1 · LO5',mapRef:'Financial Statements'}));
  const assumptions=[
    ['The owner’s personal grocery purchase is excluded from company records.','Economic entity assumption','keeps owner and business activities separate.'],
    ['A company prepares monthly financial statements even though it expects to operate for many years.','Time period assumption','divides the business life into artificial reporting periods.'],
    ['Only events expressible in monetary terms are entered in the accounting records.','Monetary unit assumption','requires monetary measurement for recorded transaction data.'],
    ['Accounts are prepared on the expectation the entity will continue operating normally.','Going concern assumption','supports continued-use measurement/period allocation in ordinary circumstances.'],
    ['Equipment is initially recorded based on transaction/acquisition cost.','Historical cost basis','uses the amount paid or consideration given at acquisition under the exercise model.'],
    ['A service is recognized as revenue when the earning activity is completed, not when cash happens to arrive.','Revenue recognition principle','focuses on earning/performance rather than cash timing.'],
    ['An expense is recognized when resources are consumed or obligations incurred for the period.','Expense recognition principle','focuses on period consumption/incurrence.'],
    ['Material information needed to understand the statements is included in statements or notes.','Full disclosure principle','supports complete decision-useful reporting.'],
    ['A current market-based measure is selected because it provides decision-relevant information under the applicable measurement rule.','Fair/current value basis','uses a current measurement rather than historical transaction cost.'],
    ['A one-year prepaid service is allocated across monthly reporting periods as it is consumed.','Time period + expense recognition','combine reporting periods with recognition of consumption.']
  ];
  assumptions.forEach((x,i)=>add({id:`G1-ASS-${i+1}`,chapter:'ch1',topic:'Assumptions & principles',difficulty:'medium',question:`Scenario: ${x[0]} Which concept best explains the treatment?`,correct:x[1],distractors:['Double-entry system','Trial balance equality','Financing activity'],explanation:`${x[1]} ${x[2]}`,reviewPath:'Assumptions & Principles',reviewLesson:'Chapter 1 · Lesson 2',bookRef:'Ch1 · LO2',mapRef:'Assumptions & Principles'}));
  const elements=[
    ['A right to receive cash from a customer for a completed service','Asset','present economic resource/right controlled by the entity'],['An obligation to pay a supplier for goods already received','Liability','present obligation to transfer an economic resource'],['The residual claim after deducting liabilities from assets','Equity','residual interest'],['An increase from services performed for customers','Revenue','increase in economic benefits/equity other than owner contributions'],['Current-period utilities consumed','Expense','decrease in economic benefits/equity other than owner distributions'],['A prepaid airline ticket for a future business flight','Asset','future service/right not yet consumed'],['Cash received for service still owed to a customer','Liability','present performance obligation in the classroom model'],['Ordinary shares issued for cash','Equity contribution','owner contribution rather than revenue'],['Cash paid to shareholders as a dividend','Equity distribution','distribution rather than operating expense'],['Equipment used in business operations','Asset','controlled resource with future service potential']
  ];
  elements.forEach((x,i)=>add({id:`G1-EL-${i+1}`,chapter:'ch1',topic:'Elements of financial statements',difficulty:'medium',question:`How should this item be classified in the conceptual framework used by the course: ${x[0]}?`,correct:x[1],distractors:['Always Revenue','Always Expense','Not an accounting element'],explanation:`It is ${x[1]} because it is a ${x[2]}.`,reviewPath:'Elements of FS → Elements',reviewLesson:'Chapter 1 · Lesson 3',bookRef:'Ch1 · LO3',mapRef:'Elements of FS'}));
  const orgs=[
    ['one owner and generally unlimited liability','Sole trader'],['two or more owners','Partnership'],['separate legal person with limited shareholder liability','Corporation'],['personal assets may be exposed beyond the owner’s investment','Sole trader / unlimited-liability form'],['shareholders generally risk only their investment under ordinary corporate limited liability','Corporation'],['business activities must be kept separate from the owner’s personal activities','Economic entity concept'],['ownership interests represented by shares','Corporation'],['at least two owners in the basic form','Partnership'],['single owner','Sole trader'],['legal separation between entity and shareholders','Corporation']
  ];
  orgs.forEach((x,i)=>add({id:`G1-ORG-${i+1}`,chapter:'ch1',topic:'Forms of organization',difficulty:'easy',question:`Which answer best matches this description: ${x[0]}?`,correct:x[1],distractors:['Trial balance','Statement of cash flows','Accrued expense'],explanation:`The description corresponds to ${x[1]} in the teacher mind map’s organization branch.`,reviewPath:'Forms of organizations',reviewLesson:'Chapter 1 · Lesson 1',bookRef:'Ch1 · organization forms',mapRef:'Forms of organizations'}));

  // CH2 — 80
  const nb=[['Cash','Debit'],['Accounts Receivable','Debit'],['Equipment','Debit'],['Supplies Expense','Debit'],['Dividends','Debit'],['Accounts Payable','Credit'],['Notes Payable','Credit'],['Share Capital','Credit'],['Service Revenue','Credit'],['Accumulated Depreciation','Credit']];
  nb.forEach((x,i)=>add({id:`G2-NB-${i+1}`,chapter:'ch2',topic:'Normal balance',difficulty:'easy',question:`What is the normal balance of ${x[0]}?`,correct:x[1],distractors:[x[1]==='Debit'?'Credit':'Debit','Either side with no pattern','No balance'],explanation:`${x[0]} normally has a ${x[1].toLowerCase()} balance based on its account class. Assets/expenses/dividends generally debit; liabilities/equity/revenue generally credit; contra-assets such as accumulated depreciation generally credit.`,reviewPath:'Flow of accounting → 1. Analyze transaction → Increase/Decrease',reviewLesson:'Chapter 2 · Lesson 1',bookRef:'Ch2 · LO1',mapRef:'Flow of accounting → Debit / Credit'}));
  const journalCases=[
    ['buy supplies on account for $800','Dr Supplies 800; Cr Accounts Payable 800','asset increases and liability increases'],['perform services for $2,400 cash','Dr Cash 2,400; Cr Service Revenue 2,400','cash and earned revenue increase'],['pay $900 current-month rent','Dr Rent Expense 900; Cr Cash 900','expense increases and cash decreases'],['borrow $5,000 by note','Dr Cash 5,000; Cr Notes Payable 5,000','asset and liability increase'],['collect $1,200 from an existing receivable','Dr Cash 1,200; Cr Accounts Receivable 1,200','one asset increases while another decreases'],['pay $700 of an existing payable','Dr Accounts Payable 700; Cr Cash 700','liability and cash decrease'],['receive $3,000 in advance for future service','Dr Cash 3,000; Cr Unearned Revenue 3,000','cash increases and a liability is created'],['issue ordinary shares for $10,000 cash','Dr Cash 10,000; Cr Share Capital 10,000','asset and contributed equity increase'],['buy equipment for $4,000 cash','Dr Equipment 4,000; Cr Cash 4,000','one asset replaces another'],['pay a $500 dividend','Dr Dividends 500; Cr Cash 500','distribution increases dividend debit balance and reduces cash']
  ];
  journalCases.forEach((x,i)=>add({id:`G2-JE-${i+1}`,chapter:'ch2',topic:'Journal entries',difficulty:'medium',type:'Journal-entry MCQ',question:`Which entry correctly records this transaction: ${x[0]}?`,correct:x[1],distractors:[x[1].replace(/Dr /g,'TMP ').replace(/Cr /g,'Dr ').replace(/TMP /g,'Cr '),'Dr Cash; Cr Revenue regardless of transaction','No entry'],explanation:`Correct entry: ${x[1]} because ${x[2]}.`,reviewPath:'Flow of accounting → 2. Journalize transactions',reviewLesson:'Chapter 2 · Lesson 3',bookRef:'Ch2 · LO2',mapRef:'Flow of accounting → Journal'}));
  for(let i=0;i<10;i++){
    const beg=600+i*100, deb=2100+i*150, cred=1300+i*90, end=beg+deb-cred;
    add({id:`G2-LED-${i+1}`,chapter:'ch2',topic:'Ledger ending balance',difficulty:'medium',type:'Calculation',question:`Cash has an opening debit balance of ${money(beg)}, debit postings of ${money(deb)}, and credit postings of ${money(cred)}. What is the ending balance?`,correct:`${money(end)} debit`,distractors:[`${money(beg+cred-deb)} credit`,`${money(deb-cred)} debit`,`${money(beg+deb+cred)} debit`],explanation:`Cash is an asset with normal debit balance: opening debit + debit postings − credit postings = ${money(beg)} + ${money(deb)} − ${money(cred)} = ${money(end)} debit.`,reviewPath:'Flow of accounting → 3. Post to ledger accounts',reviewLesson:'Chapter 2 · Lesson 4',bookRef:'Ch2 · LO3',mapRef:'Flow of accounting → Ledger / T-account'});
  }
  const errors=[
    ['entire transaction is omitted from journal','Trial balance may still balance','both debit and credit are missing'],['a correct journal entry is posted twice','Trial balance may still balance','both sides are duplicated equally'],['$720 debit is posted as $270 while credit remains $720','Trial balance will not balance','debit and credit totals differ'],['a debit-balance account is listed in the credit column','Trial balance will not balance','one side is understated and the other overstated'],['wrong asset account is debited but correct amount and credit are used','Trial balance may still balance','debit/credit equality is preserved despite wrong classification'],['$100 equipment purchase is recorded as $1,000 on both sides','Trial balance may still balance','both debit and credit are equally wrong'],['one side of an entry is not posted','Trial balance will not balance','ledger totals lose equality'],['a credit is posted to the wrong liability account for the correct amount','Trial balance may still balance','the credit total remains correct'],['digits are transposed on only the debit posting','Trial balance will not balance','only one side contains the amount error'],['a transaction is journalized correctly but never posted at all','Trial balance may still balance','neither side reaches the ledger']
  ];
  errors.forEach((x,i)=>add({id:`G2-ERR-${i+1}`,chapter:'ch2',topic:'Trial balance errors',difficulty:'medium',question:`If ${x[0]}, what is the likely effect on the trial balance?`,correct:x[1],distractors:[x[1].includes('may')?'Trial balance must be out of balance':'Trial balance must still balance','The error automatically corrects itself','No accounting records are affected'],explanation:`${x[1]} because ${x[2]}. A trial balance tests debit/credit equality, not complete conceptual correctness.`,reviewPath:'Flow of accounting → 4. Prepare trial balance → purpose and limitations',reviewLesson:'Chapter 2 · Lesson 5',bookRef:'Ch2 · LO4',mapRef:'Flow of accounting → Trial balance'}));
  const order=[['Assets','1'],['Liabilities','2'],['Equity','3'],['Dividends','4'],['Revenues','5'],['Expenses','6'],['Cash','within Assets'],['Accounts Payable','within Liabilities'],['Share Capital','within Equity'],['Service Revenue','within Revenues']];
  order.forEach((x,i)=>add({id:`G2-ORD-${i+1}`,chapter:'ch2',topic:'Trial balance order',difficulty:'easy',question:`In the teacher mind-map ordering for a trial balance, where does ${x[0]} belong?`,correct:x[1],distractors:['Always first regardless of class','After expenses','Not included'],explanation:`The teacher flow lists accounts by class: 1 Assets, 2 Liabilities, 3 Equity, 4 Dividends, 5 Revenues, 6 Expenses. ${x[0]} belongs ${x[1]}.`,reviewPath:'Flow of accounting → 4. Prepare trial balance → List all accounts in order',reviewLesson:'Chapter 2 · Lesson 5',bookRef:'Ch2 · trial balance',mapRef:'Flow of accounting → 4. Prepare trial balance'}));
  const seq=[['Analyze transaction','1'],['Journalize transactions','2'],['Post to ledger accounts','3'],['Prepare trial balance','4'],['Adjusting entries','5'],['Prepare adjusted trial balance','6'],['Prepare financial statements','7'],['Closing entries','8'],['Prepare post-closing trial balance','9'],['Identify accounts affected','within Step 1']];
  seq.forEach((x,i)=>add({id:`G2-SEQ-${i+1}`,chapter:'ch2',topic:'Accounting flow sequence',difficulty:'easy',question:`Where does “${x[0]}” appear in the teacher’s accounting flow?`,correct:x[1],distractors:['After post-closing only','Not part of the accounting flow','Always before transaction analysis'],explanation:`In the mind map, ${x[0]} is ${x[1]} of the accounting flow.`,reviewPath:'Flow of accounting',reviewLesson:'Teacher Mind Map · Accounting flow overview',bookRef:'Ch1–Ch4 accounting cycle',mapRef:'Flow of accounting'}));
  const compounds=[
    [7000,0.5],[9000,0.4],[12000,0.25],[6500,0.6],[8400,0.75],[15000,0.2],[4800,0.5],[11000,0.3],[7200,0.65],[20000,0.8]
  ];
  compounds.forEach((x,i)=>{const total=x[0],cash=Math.round(total*x[1]),ar=total-cash; add({id:`G2-CMP-${i+1}`,chapter:'ch2',topic:'Compound entry',difficulty:'medium',question:`${names[i]} performs services totaling ${money(total)}. It collects ${money(cash)} cash immediately and bills the remainder. Which entry is correct?`,correct:`Dr Cash ${money(cash)}; Dr Accounts Receivable ${money(ar)}; Cr Service Revenue ${money(total)}`,distractors:[`Dr Cash ${money(total)}; Cr Service Revenue ${money(total)}`,`Dr Accounts Receivable ${money(total)}; Cr Cash ${money(total)}`,`Dr Service Revenue ${money(total)}; Cr Cash ${money(cash)}; Cr Accounts Receivable ${money(ar)}`],explanation:`The full service value is earned: revenue = ${money(total)}. The consideration is split between Cash ${money(cash)} and A/R ${money(ar)}, so the two debits equal the revenue credit.`,reviewPath:'Flow → Analyze transaction → Dual effects → Journalize',reviewLesson:'Chapter 2 · Lesson 2–3',bookRef:'Ch2 · compound entries',mapRef:'Flow of accounting → double-entry'});});
  const effects=[['Asset increases','Debit'],['Asset decreases','Credit'],['Liability increases','Credit'],['Liability decreases','Debit'],['Revenue increases','Credit'],['Expense increases','Debit'],['Dividend increases','Debit'],['Share Capital increases','Credit'],['Accumulated Depreciation increases','Credit'],['Sales Returns & Allowances increases','Debit']];
  effects.forEach((x,i)=>add({id:`G2-DC-${i+1}`,chapter:'ch2',topic:'Debit/credit direction',difficulty:'easy',question:`If ${x[0]}, which side is used?`,correct:x[1],distractors:[x[1]==='Debit'?'Credit':'Debit','Either side randomly','No entry'],explanation:`${x[0]} is recorded with a ${x[1].toLowerCase()} under the normal balance rules in the teacher map.`,reviewPath:'Flow of accounting → Increase/Decrease → Debit/Credit',reviewLesson:'Chapter 2 · Lesson 1',bookRef:'Ch2 · LO1',mapRef:'Flow of accounting → Debit / Credit'}));

  // CH3 — 80
  for(let i=0;i<10;i++){
    const total=12000+i*1200, months=12, used=1+(i%11), exp=total/months*used;
    add({id:`G3-PRE-${i+1}`,chapter:'ch3',topic:'Prepaid expense',difficulty:'medium',type:'Calculation',question:`${names[i]} paid ${money(total)} for a 12-month service contract and recorded Prepaid Expense. By period-end, ${used} month${used>1?'s':''} have been consumed. What adjustment is required?`,correct:`Dr Expense ${money(exp)}; Cr Prepaid Expense ${money(exp)}`,distractors:[`Dr Prepaid Expense ${money(exp)}; Cr Expense ${money(exp)}`,`Dr Expense ${money(total-exp)}; Cr Cash ${money(total-exp)}`,`No adjustment until the contract ends`],explanation:`Consumed portion = ${money(total)} ÷ 12 × ${used} = ${money(exp)}. The asset decreases and expense increases: Dr Expense / Cr Prepaid Expense.`,reviewPath:'Flow of accounting → 5. Adjusting entries → Deferrals → Prepaid expense',reviewLesson:'Chapter 3 · Lesson 2 — Prepaid expense',bookRef:'Ch3 · deferrals',mapRef:'Adjusting entries → Prepaid expense'});
  }
  for(let i=0;i<10;i++){
    const total=12000+i*1500, earnedPct=[.25,.3,.4,.5,.6,.7,.75,.8,.9,1][i], earned=Math.round(total*earnedPct);
    add({id:`G3-UN-${i+1}`,chapter:'ch3',topic:'Unearned revenue',difficulty:'medium',type:'Calculation',question:`${names[i]} collected ${money(total)} in advance and credited Unearned Revenue. By period-end, ${(earnedPct*100)}% of the service has been performed. What adjustment is required?`,correct:`Dr Unearned Revenue ${money(earned)}; Cr Revenue ${money(earned)}`,distractors:[`Dr Cash ${money(earned)}; Cr Revenue ${money(earned)}`,`Dr Revenue ${money(earned)}; Cr Unearned Revenue ${money(earned)}`,`No adjustment until all service is complete`],explanation:`Earned amount = ${money(total)} × ${earnedPct*100}% = ${money(earned)}. Reduce the liability and recognize revenue.`,reviewPath:'Flow → 5. Adjusting entries → Deferrals → Unearned revenue',reviewLesson:'Chapter 3 · Lesson 3',bookRef:'Ch3 · deferrals',mapRef:'Adjusting entries → Unearned revenue'});
  }
  for(let i=0;i<10;i++){
    const amt=1800+i*350;
    add({id:`G3-AR-${i+1}`,chapter:'ch3',topic:'Accrued revenue',difficulty:'medium',question:`At period-end, ${names[i]} has completed ${money(amt)} of services that have not been billed or recorded. Which adjustment is correct?`,correct:`Dr Accounts Receivable ${money(amt)}; Cr Service Revenue ${money(amt)}`,distractors:[`Dr Cash ${money(amt)}; Cr Service Revenue ${money(amt)}`,`Dr Service Revenue ${money(amt)}; Cr Accounts Receivable ${money(amt)}`,`No entry until billing or cash collection`],explanation:`The revenue has been earned. Because cash is not yet received, a receivable asset is recognized: Dr A/R; Cr Revenue.`,reviewPath:'Flow → Adjusting entries → Accruals → Accrued revenue',reviewLesson:'Chapter 3 · Lesson 4',bookRef:'Ch3 · accruals',mapRef:'Adjusting entries → Accrued revenue'});
  }
  for(let i=0;i<10;i++){
    const P=50000+i*10000, r=[.06,.07,.08,.09,.1,.11,.12,.075,.085,.095][i], m=1+(i%4), interest=P*r*m/12;
    add({id:`G3-INT-${i+1}`,chapter:'ch3',topic:'Accrued interest expense',difficulty:'hard',type:'Calculation',question:`A ${money(P)} note has an annual interest rate of ${(r*100).toFixed(1)}% and has been outstanding for ${m} month${m>1?'s':''} at period-end. What accrued-interest adjustment is required?`,correct:`Dr Interest Expense ${money(interest)}; Cr Interest Payable ${money(interest)}`,distractors:[`Dr Interest Payable ${money(interest)}; Cr Cash ${money(interest)}`,`Dr Notes Payable ${money(interest)}; Cr Interest Revenue ${money(interest)}`,`No entry until interest is paid`],explanation:`Interest = Principal × annual rate × time = ${money(P)} × ${(r*100).toFixed(1)}% × ${m}/12 = ${money(interest)}. Expense has been incurred but not paid, so recognize expense and payable.`,reviewPath:'Flow → Adjusting entries → Accruals → Accrued expense',reviewLesson:'Chapter 3 · Lesson 5',bookRef:'Ch3 · accrued expenses',mapRef:'Adjusting entries → Accrued expense'});
  }
  for(let i=0;i<10;i++){
    const cost=24000+i*6000, monthly=400+i*50, months=6+(i%7), accum=monthly*months, book=cost-accum;
    add({id:`G3-DEP-${i+1}`,chapter:'ch3',topic:'Depreciation',difficulty:'medium',type:'Calculation',question:`Equipment cost is ${money(cost)} and depreciation is ${money(monthly)} per month. After ${months} months, what are accumulated depreciation and carrying amount?`,correct:`Accumulated depreciation ${money(accum)}; carrying amount ${money(book)}`,distractors:[`Accumulated depreciation ${money(cost)}; carrying amount ${money(accum)}`,`Accumulated depreciation ${money(monthly)}; carrying amount ${money(cost-monthly)}`,`Cash decreases by ${money(accum)} at adjustment`],explanation:`Accumulated depreciation = ${money(monthly)} × ${months} = ${money(accum)}. Carrying amount = cost ${money(cost)} − accumulated depreciation ${money(accum)} = ${money(book)}.`,reviewPath:'Flow → Adjusting entries; Credit → Contra-asset → Accumulated depreciation',reviewLesson:'Chapter 3 · Lesson 6',bookRef:'Ch3 · depreciation',mapRef:'Accumulated depreciation'});
  }
  const omissions=[
    ['expired prepaid insurance','Assets overstated; Expenses understated; Equity/net income overstated','the missing adjustment should increase expense and reduce the prepaid asset'],['accrued salaries','Liabilities understated; Expenses understated; Equity/net income overstated','the missing adjustment should increase expense and salaries payable'],['earned portion of unearned revenue','Liabilities overstated; Revenue understated; Equity/net income understated','the missing adjustment should reduce liability and increase revenue'],['accrued service revenue','Assets understated; Revenue understated; Equity/net income understated','the missing adjustment should increase receivable and revenue'],['depreciation expense','Assets (net) overstated; Expenses understated; Equity/net income overstated','the missing adjustment should increase depreciation expense and accumulated depreciation'],['accrued interest expense','Liabilities understated; Expenses understated; Equity/net income overstated','interest expense/payable are missing'],['used supplies','Assets overstated; Expenses understated; Equity/net income overstated','used supplies should be transferred from asset to expense'],['earned rent initially recorded as unearned','Liabilities overstated; Revenue understated','earned amount should move from unearned revenue to revenue'],['service completed but unbilled','Assets understated; Revenue understated','receivable and revenue are missing'],['wages earned by employees but unpaid','Liabilities understated; Expense understated','wage expense/payable are missing']
  ];
  omissions.forEach((x,i)=>add({id:`G3-OM-${i+1}`,chapter:'ch3',topic:'Omitted adjustment effects',difficulty:'hard',type:'Error analysis',question:`If the adjustment for ${x[0]} is omitted, which statement is correct?`,correct:x[1],distractors:['Assets and liabilities are always both understated','No financial statement effect occurs','Cash is necessarily overstated'],explanation:`${x[1]} because ${x[2]}.`,reviewPath:'Flow → 5. Adjusting entries → effects of omission',reviewLesson:'Chapter 3 · Lessons 2–6',bookRef:'Ch3 · adjusting-entry effects',mapRef:'Adjusting entries'}));
  const alt=[
    ['prepaid insurance was initially debited entirely to Insurance Expense, and part remains unused','Dr Prepaid Insurance; Cr Insurance Expense','restore the unused portion as an asset and reduce expense'],['supplies purchase was initially debited to Supplies Expense, and some remains on hand','Dr Supplies; Cr Supplies Expense','restore ending supplies asset'],['advance customer receipt was initially credited entirely to Revenue, and some remains unearned','Dr Revenue; Cr Unearned Revenue','remove the unearned portion from revenue and recognize a liability'],['annual rent receipt was credited to Rent Revenue, but months remain unearned','Dr Rent Revenue; Cr Unearned Rent Revenue','defer the unearned portion'],['prepaid service was initially recorded as an asset and part has expired','Dr Expense; Cr Prepaid Asset','recognize consumed portion'],['advance fee was initially recorded as a liability and part has been earned','Dr Unearned Revenue; Cr Revenue','recognize earned portion'],['supplies were recorded as an asset and part was used','Dr Supplies Expense; Cr Supplies','reduce asset for consumed supplies'],['insurance was recorded as expense but almost all remains unused','Dr Prepaid Insurance; Cr Insurance Expense','reclassify unused benefit to asset'],['advance rent was recorded as revenue but none is yet earned','Dr Rent Revenue; Cr Unearned Rent Revenue','entire receipt remains liability'],['prepaid rent was recorded as asset and none has yet expired','No adjusting entry for expiration','no portion has been consumed']
  ];
  alt.forEach((x,i)=>add({id:`G3-ALT-${i+1}`,chapter:'ch3',topic:'Alternative initial recording',difficulty:'hard',question:`At period-end, ${x[0]}. What is the appropriate adjustment?`,correct:x[1],distractors:['Dr Cash; Cr Revenue','Dr Expense; Cr Cash regardless of balance','No adjustment is ever allowed'],explanation:`${x[1]} because the purpose is to ${x[2]}.`,reviewPath:'Flow → Adjusting entries → Deferrals',reviewLesson:'Chapter 3 · Deferral methods',bookRef:'Ch3 · alternative deferral recording methods',mapRef:'Adjusting entries → Deferrals'}));
  const atb=[
    ['is prepared after adjusting entries are journalized and posted','True'],['provides the primary updated balances used to prepare statements','True'],['contains only permanent accounts','False'],['must have total debits equal total credits','True'],['proves every account is conceptually correct','False'],['comes before the unadjusted trial balance','False'],['includes new accounts created by adjustments when necessary','True'],['is prepared before financial statements in the teacher flow','True'],['eliminates the need for adjusting entries','False'],['can still balance even if an equal debit and credit use wrong accounts','True']
  ];
  atb.forEach((x,i)=>add({id:`G3-ATB-${i+1}`,chapter:'ch3',topic:'Adjusted trial balance',difficulty:'easy',question:`Statement: The adjusted trial balance ${x[0]}. True or false?`,correct:x[1],distractors:[x[1]==='True'?'False':'True','Only under cash accounting','Cannot be determined'],explanation:`${x[1]}. The adjusted trial balance is prepared after adjustments and posting, tests debit-credit equality, and supplies updated balances for financial statements, but it cannot prove conceptual correctness.`,reviewPath:'Flow → 6. Prepare adjusted trial balance → 7. Prepare Financial Statements',reviewLesson:'Chapter 3 · Lesson 7',bookRef:'Ch3 · LO4',mapRef:'Flow steps 6–7'}));

  // CH4 — 80
  const cycle=['Analyze transaction','Journalize transactions','Post to ledger accounts','Prepare unadjusted trial balance','Adjusting entries','Prepare adjusted trial balance','Prepare financial statements','Closing entries','Prepare post-closing trial balance'];
  cycle.forEach((step,i)=>add({id:`G4-CYC-${i+1}`,chapter:'ch4',topic:'Accounting cycle',difficulty:'easy',question:`In the teacher’s accounting flow, what is Step ${i+1}?`,correct:step,distractors:[cycle[(i+2)%cycle.length],cycle[(i+5)%cycle.length],'Prepare bank reconciliation'],explanation:`Step ${i+1} is ${step}. The flow is designed so each stage uses the output of the prior stage.`,reviewPath:'Flow of accounting → Steps 1–9',reviewLesson:'Teacher Mind Map · Flow of accounting',bookRef:'Ch4 · accounting cycle',mapRef:'Flow of accounting'}));
  add({id:'G4-CYC-10',chapter:'ch4',topic:'Accounting cycle',difficulty:'medium',question:'Which sequence is correct near period-end?',correct:'Adjusting entries → Adjusted trial balance → Financial statements → Closing entries → Post-closing trial balance',distractors:['Financial statements → Adjusting entries → Trial balance → Closing','Closing entries → Adjusting entries → Financial statements','Post-closing trial balance → Adjusted trial balance → Closing'],explanation:'Adjust first, prove updated ledger equality with the adjusted trial balance, prepare statements, close temporary accounts, then prepare the post-closing trial balance.',reviewPath:'Flow of accounting → Steps 5–9',reviewLesson:'Ch3–Ch4 transition',bookRef:'Ch3–Ch4',mapRef:'Flow of accounting'});
  const close=[
    ['Service Revenue','Close with a debit to Revenue and credit to Income Summary'],['Rent Expense','Close with a credit to Expense and debit to Income Summary'],['Dividends','Close with a credit to Dividends and debit to Retained Earnings'],['Net income in Income Summary','Close with debit Income Summary and credit Retained Earnings'],['Net loss in Income Summary','Close with debit Retained Earnings and credit Income Summary'],['Sales Revenue','Close as a revenue account'],['Depreciation Expense','Close as an expense account'],['Interest Expense','Close as an expense account'],['Sales Discounts','Close as a contra-revenue/temporary account under the course closing framework'],['Cost of Goods Sold','Close as an expense/temporary account']
  ];
  close.forEach((x,i)=>add({id:`G4-CL-${i+1}`,chapter:'ch4',topic:'Closing entries',difficulty:'medium',question:`How is ${x[0]} treated in the closing process?`,correct:x[1],distractors:['Carry the balance forward unchanged as a permanent account','Close directly to Cash','Do not include it anywhere'],explanation:`${x[0]} is a temporary-period account/effect in this course framework. ${x[1]}.`,reviewPath:'Flow → 8. Closing entries',reviewLesson:'Chapter 4 · Lesson 3',bookRef:'Ch4 · closing entries',mapRef:'Closing entries'}));
  const temp=[['Cash','Permanent'],['Accounts Receivable','Permanent'],['Accounts Payable','Permanent'],['Share Capital','Permanent'],['Retained Earnings','Permanent'],['Service Revenue','Temporary'],['Rent Expense','Temporary'],['Dividends','Temporary'],['Cost of Goods Sold','Temporary'],['Accumulated Depreciation','Permanent']];
  temp.forEach((x,i)=>add({id:`G4-TP-${i+1}`,chapter:'ch4',topic:'Temporary vs permanent',difficulty:'easy',question:`Is ${x[0]} a temporary or permanent account?`,correct:x[1],distractors:[x[1]==='Permanent'?'Temporary':'Permanent','Neither','Cash-flow account only'],explanation:`${x[0]} is ${x[1].toLowerCase()}. Temporary accounts measure one period and are closed; permanent accounts carry forward.`,reviewPath:'Flow → 8. Closing entries → Temporary accounts; Step 9 → Permanent accounts',reviewLesson:'Chapter 4 · Lesson 2',bookRef:'Ch4 · temporary/permanent accounts',mapRef:'Closing entries / Post-closing trial balance'}));
  const pctb=[['Cash','Can appear'],['Accounts Payable','Can appear'],['Retained Earnings','Can appear'],['Service Revenue','Should not have a non-zero balance'],['Salaries Expense','Should not have a non-zero balance'],['Dividends','Should not have a non-zero balance'],['Equipment','Can appear'],['Accumulated Depreciation','Can appear'],['Share Capital','Can appear'],['Unearned Revenue','Can appear']];
  pctb.forEach((x,i)=>add({id:`G4-PC-${i+1}`,chapter:'ch4',topic:'Post-closing trial balance',difficulty:'easy',question:`On a post-closing trial balance, ${x[0]}:`,correct:x[1],distractors:[x[1]==='Can appear'?'Must be zero because all accounts are closed':'Must always appear even with zero balance','Is converted to cash','Is never part of accounting'],explanation:`${x[0]} ${x[1].toLowerCase()} because the post-closing trial balance contains permanent accounts after temporary accounts have been reset.`,reviewPath:'Flow → 9. Prepare Post-closing trial balance',reviewLesson:'Chapter 4 · Lesson 4',bookRef:'Ch4 · post-closing',mapRef:'Post-closing trial balance'}));
  for(let i=0;i<10;i++){
    const rev=30000+i*2500, exp=18000+i*1300, ni=rev-exp;
    add({id:`G4-IS-${i+1}`,chapter:'ch4',topic:'Income Summary closing',difficulty:'medium',type:'Calculation',question:`Before closing, Revenue totals ${money(rev)} and Expenses total ${money(exp)}. What balance does Income Summary have after revenues and expenses are closed but before it is transferred to Retained Earnings?`,correct:`${money(ni)} credit`,distractors:[`${money(ni)} debit`,`${money(rev+exp)} credit`,`${money(exp)} debit`],explanation:`Revenue closing credits Income Summary ${money(rev)}; expense closing debits it ${money(exp)}. Net credit = ${money(ni)}, equal to net income.`,reviewPath:'Flow → 8. Closing entries → steps 1–3',reviewLesson:'Chapter 4 · Lesson 3',bookRef:'Ch4 · closing entries',mapRef:'Closing entries'});
  }
  const corrections=[
    ['Equipment was debited instead of Supplies for the same amount','Dr Supplies; Cr Equipment'],['Accounts Receivable was credited instead of Accounts Payable in a purchase on account','Dr Accounts Receivable; Cr Accounts Payable is not enough—reverse wrong credit and establish correct liability according to original entry'],['Rent Expense was debited for a prepaid future period that should be Prepaid Rent','Dr Prepaid Rent; Cr Rent Expense'],['Service Revenue was credited for cash received before service; it should be unearned','Dr Service Revenue; Cr Unearned Revenue'],['Cash collection of A/R was recorded as new revenue','Dr Service Revenue; Cr Accounts Receivable is not the standard direct fix without seeing the full wrong entry—reverse the revenue effect and restore/remove the receivable appropriately'],['A payable payment was recorded as an expense','Reverse the expense and debit Accounts Payable while keeping the cash credit'],['Dividends were recorded as Salary Expense','Dr Dividends; Cr Salary Expense'],['Equipment purchase for cash was recorded as Supplies Expense','Dr Equipment; Cr Supplies Expense'],['A cash sale was credited to Accounts Payable','Dr Accounts Payable; Cr Sales Revenue'],['A revenue transaction was recorded with equal debits/credits but wrong revenue account','Reclassify between the incorrect and correct revenue accounts']
  ];
  corrections.forEach((x,i)=>add({id:`G4-COR-${i+1}`,chapter:'ch4',topic:'Correcting entries',difficulty:'hard',type:'Error analysis',question:`An error occurred: ${x[0]}. Which description best captures the correction?`,correct:x[1],distractors:['Ignore it because the trial balance may balance','Close all accounts to Cash','Record an adjusting entry involving Cash automatically'],explanation:`The correction must remove the effect of the wrong classification and establish the correct account effect. In practice, reconstruct the incorrect entry, reverse its wrong effect, then record the correct entry.`,reviewPath:'Accounting Lab → Correcting Entries; distinguish from adjusting entries',reviewLesson:'Chapter 4 · Lesson 5',bookRef:'Ch4 · correcting entries',mapRef:'Teacher workbook correction flow'}));
  for(let i=0;i<10;i++){
    const ob=20000+i*2000, ni=6000+i*600, div=1000+(i%4)*250, cb=ob+ni-div;
    add({id:`G4-RE-${i+1}`,chapter:'ch4',topic:'Retained earnings closing',difficulty:'medium',question:`Opening Retained Earnings is ${money(ob)}, net income is ${money(ni)}, and dividends are ${money(div)}. What is ending Retained Earnings after closing?`,correct:money(cb),distractors:[money(ob+ni+div),money(ob-ni-div),money(ni-div)],explanation:`Ending RE = Opening RE + Net income − Dividends = ${money(ob)} + ${money(ni)} − ${money(div)} = ${money(cb)}.`,reviewPath:'Financial Statements → Retained earnings; Flow → Closing entries',reviewLesson:'Chapter 4 · Lesson 3',bookRef:'Ch4 · retained earnings closing',mapRef:'Closing entries → Transfer net income/loss; Close dividend'});
  }
  const classif=[['Cash','Current asset'],['Accounts Receivable','Current asset'],['Inventory','Current asset'],['Equipment','Non-current asset'],['Accounts Payable','Current liability'],['Salaries Payable','Current liability'],['Long-term Bonds Payable','Non-current liability'],['Share Capital','Equity'],['Retained Earnings','Equity'],['Patent with multi-year life','Non-current intangible asset']];
  classif.forEach((x,i)=>add({id:`G4-CLS-${i+1}`,chapter:'ch4',topic:'Classified statement of financial position',difficulty:'easy',question:`How is ${x[0]} generally classified in the introductory classified statement of financial position?`,correct:x[1],distractors:['Revenue','Expense','Financing cash flow only'],explanation:`${x[0]} is generally reported as ${x[1].toLowerCase()} based on its economic nature and expected realization/settlement horizon.`,reviewPath:'Financial Statements → Statement of Financial Position → Components / Presentation',reviewLesson:'Chapter 4 · classification extension',bookRef:'Ch4 · classified SFP',mapRef:'Statement of Financial Position'}));

  // CH5 — 80
  for(let i=0;i<10;i++){
    const p=5000+i*700, f=120+i*20, total=p+f;
    add({id:`G5-PUR-${i+1}`,chapter:'ch5',topic:'Inventory purchases',difficulty:'medium',question:`A buyer purchases inventory for ${money(p)} under FOB shipping point and pays ${money(f)} freight. Under a perpetual system, what total amount is added to Inventory from these two costs?`,correct:money(total),distractors:[money(p),money(f),money(p-f)],explanation:`FOB shipping point places freight responsibility with the buyer in the classroom model. Freight-in is part of inventory cost, so Inventory increases by ${money(p)} + ${money(f)} = ${money(total)}.`,reviewPath:'Merchandising operations → Purchase of inventory → Cost principle → Freight-in',reviewLesson:'Chapter 5 · Lesson 1',bookRef:'Ch5 · purchases',mapRef:'Purchase of inventory'});
  }
  for(let i=0;i<10;i++){
    const sale=2000+i*300, cost=1100+i*170, gp=sale-cost;
    add({id:`G5-SALE-${i+1}`,chapter:'ch5',topic:'Perpetual sale / COGS',difficulty:'medium',question:`Goods costing ${money(cost)} are sold for ${money(sale)} on account under a perpetual system. Which pair of effects is correct?`,correct:`Dr A/R ${money(sale)}; Cr Sales Revenue ${money(sale)} AND Dr COGS ${money(cost)}; Cr Inventory ${money(cost)}`,distractors:[`Record only Sales Revenue ${money(sale)}`,`Dr Inventory ${money(cost)}; Cr COGS ${money(cost)}`,`Dr Cash ${money(cost)}; Cr Sales Revenue ${money(cost)}`],explanation:`A perpetual sale has two entries: recognize revenue at selling price ${money(sale)} and reduce inventory/recognize COGS at cost ${money(cost)}. Gross profit is ${money(gp)}.`,reviewPath:'Merchandising operations → Sale of inventory → Journal entries',reviewLesson:'Chapter 5 · Lesson 2',bookRef:'Ch5 · perpetual sales',mapRef:'Sale of inventory'});
  }
  const freight=[['FOB shipping point, buyer pays freight','Buyer: Freight-in / Inventory cost'],['FOB destination, seller pays freight','Seller: Freight-out / selling expense'],['FOB shipping point and goods are in transit at year-end','Buyer generally owns goods in transit'],['FOB destination and goods are in transit at year-end','Seller generally owns goods in transit'],['Buyer pays freight on FOB shipping point purchase','Increase Inventory under perpetual'],['Seller pays delivery on FOB destination sale','Debit Freight-out/Delivery Expense'],['FOB destination','Ownership generally transfers at destination'],['FOB shipping point','Ownership generally transfers at shipment'],['Freight-in','Part of inventory acquisition cost for buyer'],['Freight-out','Operating/selling expense for seller']];
  freight.forEach((x,i)=>add({id:`G5-FOB-${i+1}`,chapter:'ch5',topic:'FOB / freight',difficulty:'medium',question:`Which treatment best matches: ${x[0]}?`,correct:x[1],distractors:['Always record as Sales Revenue','Always ignore shipping terms','Always classify as financing activity'],explanation:`${x[1]} under the teacher mind map’s FOB/freight rules.`,reviewPath:'Merchandising operations → Purchase/Sale of inventory → Shipping fee paid',reviewLesson:'Chapter 5 · Lesson 1 and 3',bookRef:'Ch5 · freight terms',mapRef:'FOB shipping point / FOB destination'}));
  for(let i=0;i<10;i++){
    const sale=1500+i*200, cost=800+i*120;
    add({id:`G5-RET-${i+1}`,chapter:'ch5',topic:'Sales returns',difficulty:'hard',question:`A customer returns all goods from a credit sale of ${money(sale)}; the goods cost ${money(cost)} and are returned in saleable condition. Under a perpetual system, what is required?`,correct:`Dr Sales Returns & Allowances ${money(sale)}; Cr A/R ${money(sale)} AND Dr Inventory ${money(cost)}; Cr COGS ${money(cost)}`,distractors:[`Only reduce A/R by ${money(sale)}`,`Dr COGS ${money(cost)}; Cr Inventory ${money(cost)}`,`Record a new sale for ${money(sale)}`],explanation:`The return reverses the selling-price side through the contra-revenue account and also restores inventory/reverses COGS at the item’s cost.`,reviewPath:'Merchandising operations → Sale → Sales returns & allowances → Sales returns',reviewLesson:'Chapter 5 · Lesson 4',bookRef:'Ch5 · sales returns',mapRef:'Sales returns & allowances'});
  }
  for(let i=0;i<10;i++){
    const inv=10000+i*1000, ret=1000+(i%3)*500, rate=[.01,.02,.03,.02,.01,.025,.02,.015,.03,.02][i], base=inv-ret, disc=base*rate, cash=base-disc;
    add({id:`G5-DISC-${i+1}`,chapter:'ch5',topic:'Sales discounts',difficulty:'hard',type:'Calculation',question:`A credit sale is ${money(inv)}. The customer returns ${money(ret)} of goods, then pays within a ${(rate*100)}% discount period. Ignoring tax, what discount applies to the remaining receivable?`,correct:money(disc),distractors:[money(inv*rate),money(cash),money(ret*rate)],explanation:`Discount base = ${money(inv)} − ${money(ret)} = ${money(base)}. Discount = ${money(base)} × ${(rate*100)}% = ${money(disc)}.`,reviewPath:'Merchandising operations → Sale → Sales discount',reviewLesson:'Chapter 5 · Lesson 5',bookRef:'Ch5 · credit terms',mapRef:'Sales discount / payment discount allowed'});
  }
  for(let i=0;i<10;i++){
    const sales=50000+i*4000, ret=2000+i*100, disc=1000+i*80, cogs=28000+i*2200, ns=sales-ret-disc, gp=ns-cogs;
    add({id:`G5-GP-${i+1}`,chapter:'ch5',topic:'Net sales and gross profit',difficulty:'medium',type:'Calculation',question:`Sales Revenue ${money(sales)}, Sales Returns & Allowances ${money(ret)}, Sales Discounts ${money(disc)}, and COGS ${money(cogs)}. What is gross profit?`,correct:money(gp),distractors:[money(sales-cogs),money(ns+cogs),money(cogs-ns)],explanation:`Net Sales = ${money(sales)} − ${money(ret)} − ${money(disc)} = ${money(ns)}. Gross profit = Net Sales − COGS = ${money(ns)} − ${money(cogs)} = ${money(gp)}.`,reviewPath:'Financial Statements → Income Statement → Revenue section / COGS → Gross profit',reviewLesson:'Chapter 5 · Lessons 2,4,5',bookRef:'Ch5 · net sales and gross profit',mapRef:'Income Statement → Gross profit'});
  }
  const bs=[
    ['Buyer purchases inventory on account','Buyer: Dr Inventory / Cr Accounts Payable'],['Seller makes a credit sale under perpetual','Seller: Dr A/R / Cr Sales Revenue plus Dr COGS / Cr Inventory'],['Buyer returns inventory to supplier','Buyer: reduce Accounts Payable and Inventory under perpetual'],['Seller grants a sales allowance; goods stay with customer','Seller: Dr Sales R&A / Cr A/R; no inventory reversal for allowance itself'],['Buyer pays within purchase discount period','Buyer: reduce A/P, credit Cash, and reduce Inventory for discount under perpetual'],['Seller receives payment within sales discount period','Seller: Dr Cash + Dr Sales Discounts; Cr A/R'],['Seller pays FOB destination freight','Seller: Dr Freight-out / Cr Cash'],['Buyer pays FOB shipping point freight','Buyer: Dr Inventory / Cr Cash'],['Customer returns goods in good condition','Seller restores Inventory and reverses COGS'],['Customer keeps defective goods but receives allowance','No physical inventory returns to seller']
  ];
  bs.forEach((x,i)=>add({id:`G5-BS-${i+1}`,chapter:'ch5',topic:'Buyer vs seller entries',difficulty:'medium',question:`Which statement correctly describes: ${x[0]}?`,correct:x[1],distractors:['Both parties record identical debit and credit accounts','No entry under perpetual system','Always affects financing cash flow'],explanation:x[1]+'. The buyer and seller account for different economic positions in the same transaction.',reviewPath:'Merchandising operations → Purchase vs Sale of inventory',reviewLesson:'Chapter 5 · Buyer/Seller journal flow',bookRef:'Ch5 · merchandising entries',mapRef:'Merchandising operations'}));
  const systems=[
    ['updates Inventory and COGS continuously','Perpetual'],['determines COGS mainly at period-end after physical count','Periodic'],['records COGS each time a sale occurs','Perpetual'],['does not maintain detailed cost-of-goods-on-hand records continuously','Periodic'],['still requires physical count to detect shrinkage','Perpetual'],['can be combined with FIFO costing','Both perpetual and periodic'],['is an inventory tracking system, not a cost-flow assumption','Perpetual/Periodic distinction'],['uses Purchases account in the traditional classroom method','Periodic'],['debits Inventory for purchases in the standard perpetual method','Perpetual'],['needs an ending count to compute COGS in the standard periodic method','Periodic']
  ];
  systems.forEach((x,i)=>add({id:`G5-SYS-${i+1}`,chapter:'ch5',topic:'Inventory systems',difficulty:'easy',question:`Which inventory-system description matches: ${x[0]}?`,correct:x[1],distractors:['FIFO only','Moving average only','Statement of cash flows'],explanation:`${x[1]} is the correct match. The teacher mind map separates inventory tracking systems from inventory costing methods.`,reviewPath:'Merchandising operations → Inventory system',reviewLesson:'Chapter 5 · Lesson 6',bookRef:'Ch5 · inventory systems',mapRef:'Inventory system'}));

  // CH6 — 80
  for(let i=0;i<10;i++){
    const q1=80+i*5,c1=10+i, q2=60+i*4,c2=13+i, sold=q1+20+(i%20), from2=sold-q1, cogs=q1*c1+from2*c2, end=(q2-from2)*c2;
    add({id:`G6-FIFO-${i+1}`,chapter:'ch6',topic:'FIFO',difficulty:'hard',type:'Calculation',question:`FIFO layers: ${q1} units @ ${money(c1)} then ${q2} units @ ${money(c2)}. The company sells ${sold} units. What are FIFO COGS and ending inventory?`,correct:`COGS ${money(cogs)}; ending inventory ${money(end)}`,distractors:[`COGS ${money(sold*c2)}; ending inventory ${money((q1+q2-sold)*c1)}`,`COGS ${money(sold*c1)}; ending inventory ${money((q1+q2-sold)*c2)}`,`COGS equals sales revenue`],explanation:`FIFO uses oldest costs first: ${q1}×${money(c1)} + ${from2}×${money(c2)} = ${money(cogs)} COGS. Remaining ${q2-from2} units are from the newer layer at ${money(c2)}, so ending inventory = ${money(end)}.`,reviewPath:'Merchandising operations → Inventory costing method → FIFO',reviewLesson:'Chapter 6 · Lesson 2',bookRef:'Ch6 · FIFO',mapRef:'Inventory costing method → FIFO'});
  }
  for(let i=0;i<10;i++){
    const q1=10+i, c1=10+i, q2=15+i, c2=14+i, units=q1+q2, cost=q1*c1+q2*c2, avg=cost/units, sold=5+(i%5), cogs=avg*sold;
    add({id:`G6-AVG-${i+1}`,chapter:'ch6',topic:'Moving weighted average',difficulty:'hard',type:'Calculation',question:`Before a sale, perpetual inventory contains ${q1} units @ ${money(c1)} and a new purchase of ${q2} units @ ${money(c2)}. What moving-average unit cost applies immediately after the purchase, and what COGS applies to a sale of ${sold} units?`,correct:`Average ${money(avg)} per unit; COGS ${money(cogs)}`,distractors:[`Average ${money((c1+c2)/2)}; COGS ${money(((c1+c2)/2)*sold)}`,`Use only newest cost ${money(c2)}; COGS ${money(c2*sold)}`,`Use selling price instead of cost`],explanation:`Weighted average = (${q1}×${money(c1)} + ${q2}×${money(c2)}) ÷ ${units} = ${money(avg)} per unit. COGS = ${sold}×${money(avg)} = ${money(cogs)}.`,reviewPath:'Inventory costing method → Moving weighted average',reviewLesson:'Chapter 6 · Lesson 3',bookRef:'Ch6 · moving average',mapRef:'Inventory costing method → Moving weighted average cost'});
  }
  const invErr=[
    ['ending inventory overstated','COGS understated; Net income overstated; Assets and Equity overstated'],['ending inventory understated','COGS overstated; Net income understated; Assets and Equity understated'],['beginning inventory overstated','COGS overstated; current-period Net income understated'],['beginning inventory understated','COGS understated; current-period Net income overstated'],['ending inventory omitted','COGS overstated; Assets/Equity/Net income understated'],['ending inventory counted twice','COGS understated; Assets/Equity/Net income overstated'],['purchase included in ending inventory but omitted from purchases/AP','Inventory may be correct but liabilities/purchases and equation need separate analysis'],['goods owned by supplier incorrectly included','Inventory/Assets and Equity can be overstated'],['consigned goods owned by entity incorrectly excluded','Inventory/Assets and Equity can be understated'],['FOB destination goods in transit incorrectly included by buyer','Buyer inventory/assets can be overstated']
  ];
  invErr.forEach((x,i)=>add({id:`G6-ERR-${i+1}`,chapter:'ch6',topic:'Inventory errors',difficulty:'hard',question:`If ${x[0]}, what is the most likely effect?`,correct:x[1],distractors:['No financial statement effect','Cash automatically changes by the same amount','Revenue is always understated'],explanation:`${x[1]}. Use COGS = Beginning Inventory + Net Purchases − Ending Inventory and then trace the effect to net income and equity.`,reviewPath:'Chapter 6 → Inventory errors → COGS equation',reviewLesson:'Chapter 6 · Lesson 5',bookRef:'Ch6 · inventory errors',mapRef:'Textbook extension linked to inventory costing'}));
  const ownership=[
    ['Goods shipped FOB shipping point before year-end and still in transit','Buyer inventory'],['Goods shipped FOB destination before year-end and still in transit','Seller inventory'],['Goods sent to a consignee but not sold to final customer','Consignor inventory'],['Goods held on consignment from another entity','Not consignee inventory'],['Buyer receives goods after year-end but title passed FOB shipping point before year-end','Buyer inventory'],['Seller ships FOB destination and customer receives after year-end','Seller inventory at year-end'],['Freight-in necessary to bring buyer inventory to location','Inventory cost'],['Purchase return','Reduces inventory cost'],['Purchase allowance','Reduces inventory cost'],['Applicable purchase discount under perpetual','Reduces inventory cost']
  ];
  ownership.forEach((x,i)=>add({id:`G6-OWN-${i+1}`,chapter:'ch6',topic:'Inventory ownership/cost',difficulty:'medium',question:`How should the following be treated: ${x[0]}?`,correct:x[1],distractors:['Always expense immediately','Always seller revenue','Financing activity'],explanation:`${x[1]} under the classroom ownership/cost rules. Physical location alone does not determine inventory ownership.`,reviewPath:'Chapter 6 → Ownership and cost; Chapter 5 → FOB terms',reviewLesson:'Chapter 6 · Lesson 4',bookRef:'Ch6 · inventory ownership',mapRef:'Merchandising operations → purchase/shipping'}));
  const nrv=[
    ['cost 100, NRV 92 per unit','Write down to 92'],['cost 80, NRV 90','Keep at cost 80'],['inventory expected recoverable amount below cost','Recognize write-down under applicable lower-measurement rule'],['NRV rises but remains below original cost after prior write-down','Apply permitted reversal only within applicable IFRS limits'],['NRV exceeds cost','Do not write inventory above cost merely because NRV is higher'],['damaged inventory has lower selling value and added completion costs','Reassess NRV'],['ordinary selling price falls sharply','May trigger NRV test'],['costing method assigns cost before NRV test','Yes — determine cost, then apply lower measurement as required'],['write-down reduces inventory carrying amount','True'],['inventory write-down can reduce current profit','True']
  ];
  nrv.forEach((x,i)=>add({id:`G6-NRV-${i+1}`,chapter:'ch6',topic:'NRV / measurement extension',difficulty:'medium',question:`Inventory measurement scenario: ${x[0]}. What is the best conclusion?`,correct:x[1],distractors:['Always increase inventory to market value','Ignore because inventory is a current asset','Record as financing cash flow'],explanation:`${x[1]}. The textbook extension requires comparing inventory cost with recoverable/net realizable amount under the applicable IFRS measurement rules.`,reviewPath:'Chapter 6 → Lower measurement and inventory analysis — textbook extension',reviewLesson:'Chapter 6 · Lesson 6',bookRef:'Ch6 · LCNRV / NRV',mapRef:'Textbook extension — not explicit in teacher mind map'}));
  for(let i=0;i<10;i++){
    const cogs=180000+i*12000, beg=30000+i*1000, end=36000+i*1200, avg=(beg+end)/2, turn=cogs/avg, days=365/turn;
    add({id:`G6-RATIO-${i+1}`,chapter:'ch6',topic:'Inventory turnover',difficulty:'hard',type:'Calculation',question:`COGS = ${money(cogs)}, beginning inventory = ${money(beg)}, ending inventory = ${money(end)}. What is inventory turnover (using average inventory) and approximate days in inventory?`,correct:`Turnover ${turn.toFixed(2)}×; days ${days.toFixed(1)}`,distractors:[`Turnover ${(cogs/end).toFixed(2)}×; days ${(365/(cogs/end)).toFixed(1)}`,`Turnover ${(avg/cogs).toFixed(2)}×; days ${(365/(avg/cogs)).toFixed(1)}`,`Turnover equals gross margin`],explanation:`Average inventory = (${money(beg)} + ${money(end)})/2 = ${money(avg)}. Turnover = COGS/average inventory = ${turn.toFixed(2)}×. Days ≈ 365/turnover = ${days.toFixed(1)}.`,reviewPath:'Chapter 6 → Inventory analysis',reviewLesson:'Chapter 6 · Lesson 6',bookRef:'Ch6 · inventory turnover',mapRef:'Textbook extension'});
  }
  const physical=[
    ['FIFO cost flow must match exact physical flow','False'],['Perpetual is a costing method like FIFO','False'],['FIFO is a cost-flow assumption/method','True'],['Moving weighted average uses quantity-weighted costs','True'],['Selling price determines FIFO COGS','False'],['Ending inventory under FIFO consists of newer cost layers','True'],['Inventory system and costing method are separate choices','True'],['Periodic accounting never uses FIFO','False'],['Perpetual accounting can use FIFO','True'],['Physical count is unnecessary under perpetual','False']
  ];
  physical.forEach((x,i)=>add({id:`G6-CON-${i+1}`,chapter:'ch6',topic:'Inventory concepts',difficulty:'easy',question:`True or false: ${x[0]}.`,correct:x[1],distractors:[x[1]==='True'?'False':'True','Only for service firms','Cannot be determined'],explanation:`${x[1]}. The teacher mind map explicitly separates inventory system from costing method and notes that cost flow need not equal physical movement.`,reviewPath:'Merchandising operations → Inventory system / Inventory costing method → Notes',reviewLesson:'Chapter 6 · Lesson 1',bookRef:'Ch6 · inventory systems and cost flow',mapRef:'Inventory costing method → Notes'}));
  const sys2=[['record COGS every sale','Perpetual'],['compute COGS mainly at period end','Periodic'],['recompute average after each purchase','Moving weighted average under perpetual'],['oldest available costs leave first','FIFO'],['keep detailed inventory records continuously','Perpetual'],['use physical count as central period-end measurement step','Periodic'],['can coexist with FIFO','Both systems'],['not itself a costing method','Perpetual/Periodic system'],['assign newer costs to FIFO ending inventory','FIFO'],['uses weighted cost rather than simple average of prices','Moving weighted average']];
  sys2.forEach((x,i)=>add({id:`G6-SYS-${i+1}`,chapter:'ch6',topic:'System vs costing method',difficulty:'easy',question:`Which term best matches: ${x[0]}?`,correct:x[1],distractors:['Statement of cash flows','Share capital','Accrued revenue'],explanation:`${x[1]} is the correct match.`,reviewPath:'Merchandising operations → Inventory system / Inventory costing method',reviewLesson:'Chapter 6 · Lesson 1–3',bookRef:'Ch6',mapRef:'Inventory system / costing method'}));

  // CH14 — 80
  const flows=[
    ['cash received from customers','Operating'],['cash paid to employees','Operating'],['cash purchase of equipment','Investing'],['cash proceeds from sale of equipment','Investing'],['cash purchase of long-term investment','Investing'],['cash issuance of ordinary shares','Financing'],['cash borrowing through long-term debt','Financing'],['cash repayment of long-term debt principal','Financing'],['cash dividends paid under course convention','Financing'],['equipment acquired by issuing shares','Significant non-cash transaction; disclose separately']
  ];
  flows.forEach((x,i)=>add({id:`G14-CLS-${i+1}`,chapter:'ch14',topic:'Cash-flow classification',difficulty:'easy',question:`Classify this item: ${x[0]}.`,correct:x[1],distractors:['Always Operating','Always Investing','Always Financing'],explanation:`${x[1]} is the appropriate classification under the course/teacher mind-map convention.`,reviewPath:'Statement of Cash flows → Operating / Investing / Financing / Non-cash',reviewLesson:'Chapter 14 · Lesson 1',bookRef:'Ch14 · LO1',mapRef:'Statement of Cash flows'}));
  for(let i=0;i<10;i++){
    const ni=100000+i*10000, inc=5000+i*800, cfo=ni-inc;
    add({id:`G14-AR-${i+1}`,chapter:'ch14',topic:'Indirect method — Accounts Receivable',difficulty:'medium',question:`Net income is ${money(ni)} and Accounts Receivable increased by ${money(inc)}. Ignoring all other adjustments, what is cash from operations under the indirect method?`,correct:money(cfo),distractors:[money(ni+inc),money(inc),money(ni)],explanation:`An increase in A/R means some recognized revenue has not been collected in cash, so subtract ${money(inc)} from net income: CFO = ${money(cfo)}.`,reviewPath:'Statement of Cash flows → Operating → Comparative SFP → CA → subtract increases',reviewLesson:'Chapter 14 · Lesson 3',bookRef:'Ch14 · indirect method',mapRef:'Operating section → 2. Comparative SoFP/BS'});
  }
  const wc=[
    ['Inventory increases','Subtract'],['Inventory decreases','Add'],['Prepaid expenses increase','Subtract'],['Prepaid expenses decrease','Add'],['Accounts Payable increases','Add'],['Accounts Payable decreases','Subtract'],['Accrued operating liabilities increase','Add'],['Accrued operating liabilities decrease','Subtract'],['Accounts Receivable increases','Subtract'],['Accounts Receivable decreases','Add']
  ];
  wc.forEach((x,i)=>add({id:`G14-WC-${i+1}`,chapter:'ch14',topic:'Indirect working-capital adjustments',difficulty:'medium',question:`Under the indirect method, if ${x[0]}, what is the usual adjustment to net income for operating cash flow?`,correct:x[1],distractors:[x[1]==='Add'?'Subtract':'Add','Classify as financing automatically','No possible effect'],explanation:`${x[1]}. Reason from cash timing: non-cash current asset increases generally represent cash not yet realized/extra cash tied up; operating current liability increases generally represent cash not yet paid.`,reviewPath:'Statement of Cash flows → Operating → Comparative SFP → CA/CL sign rules',reviewLesson:'Chapter 14 · Lesson 3',bookRef:'Ch14 · indirect working capital',mapRef:'Operating section → CA / CL'}));
  for(let i=0;i<10;i++){
    const ni=80000+i*8000, dep=12000+i*1000, gain=3000+i*500, wcadj=[-5000,4000,-3000,6000,-7000,2500,-4500,5500,-2000,3500][i], cfo=ni+dep-gain+wcadj;
    add({id:`G14-CFO-${i+1}`,chapter:'ch14',topic:'Indirect CFO',difficulty:'hard',type:'Calculation',question:`Net income ${money(ni)}, depreciation ${money(dep)}, gain on asset sale ${money(gain)}, and net working-capital adjustment ${wcadj>=0?'+':''}${money(wcadj)}. What is CFO under the indirect method?`,correct:money(cfo),distractors:[money(ni-dep+gain-wcadj),money(ni+dep+gain+wcadj),money(ni+wcadj)],explanation:`CFO = Net income + non-cash depreciation − investing-related gain + working-capital adjustment = ${money(ni)} + ${money(dep)} − ${money(gain)} ${wcadj>=0?'+':'−'} ${money(Math.abs(wcadj))} = ${money(cfo)}.`,reviewPath:'Statement of Cash flows → Operating → Step 1 P&L + Step 2 comparative SFP',reviewLesson:'Chapter 14 · Lessons 2–3',bookRef:'Ch14 · indirect method',mapRef:'Operating section'});
  }
  for(let i=0;i<10;i++){
    const cost=60000+i*5000, accum=25000+i*2000, book=cost-accum, gain=(i%2===0?4000:-3000), proceeds=book+gain;
    add({id:`G14-DISP-${i+1}`,chapter:'ch14',topic:'Investing — disposal proceeds',difficulty:'hard',type:'Calculation',question:`Equipment cost ${money(cost)}, accumulated depreciation at disposal ${money(accum)}, and ${gain>=0?'gain':'loss'} of ${money(Math.abs(gain))}. What cash proceeds from disposal are reported in investing activities?`,correct:money(proceeds),distractors:[money(cost),money(book),money(Math.abs(gain))],explanation:`Carrying amount = ${money(cost)} − ${money(accum)} = ${money(book)}. Proceeds = carrying amount ${gain>=0?'+ gain':'− loss'} = ${money(proceeds)}.`,reviewPath:'Statement of Cash flows → Investing → T-accounts / disposal',reviewLesson:'Chapter 14 · Lesson 4',bookRef:'Ch14 · investing activities',mapRef:'Investing section → S1–S3'});
  }
  for(let i=0;i<10;i++){
    const beg=100000+i*10000, end=130000+i*8000, redeemed=20000+i*2000, issued=end-beg+redeemed;
    add({id:`G14-DEBT-${i+1}`,chapter:'ch14',topic:'Financing — debt T-account',difficulty:'hard',type:'Calculation',question:`Bonds Payable: beginning ${money(beg)}, ending ${money(end)}, and ${money(redeemed)} face amount was redeemed during the year. Assume no non-cash debt changes. How much new debt was issued?`,correct:money(issued),distractors:[money(end-beg),money(redeemed),money(beg+end-redeemed)],explanation:`Debt T-account: Beginning + Issuance − Redemption = Ending. Issuance = Ending − Beginning + Redemption = ${money(end)} − ${money(beg)} + ${money(redeemed)} = ${money(issued)}.`,reviewPath:'Statement of Cash flows → Financing → T-account of NCL',reviewLesson:'Chapter 14 · Lesson 5',bookRef:'Ch14 · financing activities',mapRef:'Financing section → S1–S3'});
  }
  for(let i=0;i<10;i++){
    const beg=70000+i*5000, ni=25000+i*2000, end=85000+i*5500, div=beg+ni-end;
    add({id:`G14-DIV-${i+1}`,chapter:'ch14',topic:'Financing — dividends',difficulty:'hard',type:'Calculation',question:`Beginning Retained Earnings ${money(beg)}, net income ${money(ni)}, ending Retained Earnings ${money(end)}. Assume no other RE adjustments. What dividends were declared/paid under the exercise simplification?`,correct:money(div),distractors:[money(div+5000),money(beg+end-ni),money(ni)],explanation:`Ending RE = Beginning RE + Net income − Dividends. Therefore Dividends = ${money(beg)} + ${money(ni)} − ${money(end)} = ${money(div)}.`,reviewPath:'Statement of Cash flows → Financing → Note: use Retained earnings to calculate dividends',reviewLesson:'Chapter 14 · Lesson 5',bookRef:'Ch14 · dividends via RE',mapRef:'Financing section → Note'});
  }
  for(let i=0;i<10;i++){
    const cfo=60000+i*5000, cfi=-25000-i*2000, cff=10000+(i%3)*5000, beg=30000+i*1000, change=cfo+cfi+cff, end=beg+change;
    add({id:`G14-REC-${i+1}`,chapter:'ch14',topic:'Cash reconciliation',difficulty:'medium',type:'Calculation',question:`CFO ${money(cfo)}, CFI ${money(cfi)}, CFF ${money(cff)}, beginning cash ${money(beg)}. What is ending cash?`,correct:money(end),distractors:[money(change),money(beg+cfo),money(end+Math.abs(cfi))],explanation:`Net change = CFO + CFI + CFF = ${money(cfo)} + (${money(cfi)}) + ${money(cff)} = ${money(change)}. Ending cash = beginning ${money(beg)} + change ${money(change)} = ${money(end)}.`,reviewPath:'Statement of Cash flows → Final reconciliation',reviewLesson:'Chapter 14 · Lesson 6',bookRef:'Ch14 · net change in cash',mapRef:'Statement of Cash flows → reconcile CB'});
  }
  const nc=[
    ['Issue shares for equipment','Disclose as significant non-cash investing/financing transaction'],['Issue bonds for land','Disclose as significant non-cash transaction'],['Convert bonds to ordinary shares','Disclose as significant non-cash financing transaction'],['Exchange one non-cash asset for another','Disclose if significant; not a cash flow'],['Pay a share dividend','Non-cash equity transaction; not a cash flow'],['Buy equipment partly cash and partly note','Report cash portion in investing; disclose non-cash financing portion'],['Acquire services by issuing shares','Non-cash transaction; disclose if significant'],['Ordinary cash purchase of equipment','Investing cash outflow'],['Cash issuance of shares','Financing cash inflow'],['Cash repayment of bond principal','Financing cash outflow']
  ];
  nc.forEach((x,i)=>add({id:`G14-NC-${i+1}`,chapter:'ch14',topic:'Significant non-cash transactions',difficulty:'medium',question:`Cash-flow treatment: ${x[0]}. Which answer is best?`,correct:x[1],distractors:['Always operating cash flow','Include full amount as both cash inflow and outflow even with no cash','Ignore completely with no disclosure'],explanation:`${x[1]}. The statement reports cash; significant non-cash investing/financing changes are disclosed separately.`,reviewPath:'Statement of Cash flows → Notes: significant non-cash transactions',reviewLesson:'Chapter 14 · Lesson 1 and 4–5',bookRef:'Ch14 · non-cash activities',mapRef:'Notes: significant non-cash transactions'}));


  // CH7 — textbook-extension original practice (20)
  const controls=[
    ['The employee who receives cash also prepares the bank reconciliation','Weak control — custody and independent verification are not separated'],
    ['Cashiers use prenumbered receipts and deposits are made daily','Strong cash-receipts control'],
    ['The same employee authorizes purchases, receives goods, and records payables','Weak control — duties are insufficiently segregated'],
    ['A supervisor independently compares physical inventory with records','Independent internal verification'],
    ['Passwords are shared by an entire department','Weak IT control'],
    ['Petty cash vouchers support each disbursement','Documentation control'],
    ['A company rotates duties and requires vacations','Human-resource control that can help reveal irregularities'],
    ['Bank statements are sent directly to an employee independent of cash handling','Strong reconciliation control'],
    ['Management overrides approval rules whenever convenient','Limitation/weakness caused by management override'],
    ['Two employees collude to defeat otherwise sound controls','Inherent limitation of internal control']
  ];
  controls.forEach((x,i)=>add({id:`G7-CTL-${i+1}`,chapter:'ch7',topic:'Internal control',difficulty:'medium',question:`Internal-control scenario: ${x[0]}. What is the best assessment?`,correct:x[1],distractors:['Always an accounting equation error','Automatically a financing activity','No effect on control risk'],explanation:`${x[1]}. Internal control aims to safeguard assets and improve reliable reporting, but segregation, documentation, verification, and management behavior determine how well it works.`,reviewPath:'Textbook extension → Ch7 → Fraud and Internal Control',reviewLesson:'Chapter 7 · Lesson 1–2',bookRef:'Ch7 · LO1–LO2',mapRef:'Not explicitly mapped in teacher mind map'}));
  const bankitems=[
    ['Outstanding checks','Deduct from bank-statement balance; no new journal entry by company'],
    ['Deposit in transit','Add to bank-statement balance; no new journal entry by company'],
    ['Bank service charge not yet recorded','Deduct from book balance and record an expense/cash reduction'],
    ['NSF customer check returned by bank','Deduct from book balance and restore receivable'],
    ['Interest credited by bank but not yet recorded','Add to book balance and record interest revenue/cash'],
    ['Bank error understating company account','Correct on bank side of reconciliation'],
    ['Company recorded a $540 check as $450','Correct the book side for the $90 error'],
    ['Electronic customer receipt recorded by bank first','Add to book balance and record the receipt if valid'],
    ['Adjusted bank and book balances differ after all known items','Reconciliation is incomplete or contains an error'],
    ['Outstanding check clears next month','Timing difference; it was already recorded in company books when issued']
  ];
  bankitems.forEach((x,i)=>add({id:`G7-BANK-${i+1}`,chapter:'ch7',topic:'Bank reconciliation',difficulty:'medium',question:`Bank-reconciliation item: ${x[0]}. What is the correct treatment?`,correct:x[1],distractors:['Record as new Sales Revenue automatically','Close the item to Retained Earnings','Ignore all differences permanently'],explanation:`${x[1]}. Bank-side timing items adjust the reconciliation but generally do not create duplicate journal entries; book-side unrecorded items require entries.`,reviewPath:'Textbook extension → Ch7 → Bank reconciliation',reviewLesson:'Chapter 7 · Lesson 3',bookRef:'Ch7 · LO3',mapRef:'Not explicitly mapped in teacher mind map'}));

  // CH8 — 20
  for(let i=0;i<10;i++){
    const ar=80000+i*5000, rate=.02+(i%5)*.005, desired=ar*rate, existing=[0,400,-300,700,200,0,500,-200,300,100][i], adj=desired-existing;
    add({id:`G8-ALL-${i+1}`,chapter:'ch8',topic:'Allowance for doubtful accounts',difficulty:'hard',type:'Calculation',question:`Ending Accounts Receivable is ${money(ar)}. Estimated uncollectible amount is ${(rate*100).toFixed(1)}% of A/R, so desired ending Allowance is ${money(desired)}. Before adjustment, Allowance has a ${existing>=0?'credit':'debit'} balance of ${money(Math.abs(existing))}. What Bad Debt Expense adjustment is needed?`,correct:money(adj),distractors:[money(desired+1000),money(Math.abs(existing)),money(ar-desired)],explanation:`Required adjustment = desired ending credit allowance − existing signed allowance balance = ${money(desired)} − (${money(existing)}) = ${money(adj)}. Debit Bad Debt Expense and credit Allowance for that amount.`,reviewPath:'Textbook extension → Ch8 → Valuing Accounts Receivable',reviewLesson:'Chapter 8 · Lesson 2',bookRef:'Ch8 · LO2',mapRef:'Not explicitly mapped in teacher mind map'});
  }
  for(let i=0;i<10;i++){
    const P=10000+i*2500, r=.06+(i%5)*.01, days=[30,60,90,120,45,75,150,180,210,270][i], interest=P*r*days/360, mat=P+interest;
    add({id:`G8-NOTE-${i+1}`,chapter:'ch8',topic:'Notes receivable',difficulty:'hard',type:'Calculation',question:`A ${days}-day note has principal ${money(P)} and annual interest ${(r*100).toFixed(0)}%. Using a 360-day year, what are interest and maturity value?`,correct:`Interest ${money(interest)}; maturity value ${money(mat)}`,distractors:[`Interest ${money(P*r)}; maturity value ${money(P+P*r)}`,`Interest ${money(P*r*days/365)}; maturity value ${money(P+P*r*days/365)}`,`Maturity value equals principal only`],explanation:`Interest = Principal × Rate × Time = ${money(P)} × ${(r*100).toFixed(0)}% × ${days}/360 = ${money(interest)}. Maturity value = principal + interest = ${money(mat)}.`,reviewPath:'Textbook extension → Ch8 → Notes Receivable',reviewLesson:'Chapter 8 · Lesson 3',bookRef:'Ch8 · LO3',mapRef:'Not explicitly mapped in teacher mind map'});
  }

  // CH9 — 20
  for(let i=0;i<10;i++){
    const price=50000+i*4000, freight=1000+i*100, install=2000+i*150, test=500+i*50, cost=price+freight+install+test;
    add({id:`G9-COST-${i+1}`,chapter:'ch9',topic:'Cost of plant assets',difficulty:'medium',type:'Calculation',question:`A machine has purchase price ${money(price)}, freight ${money(freight)}, installation ${money(install)}, and testing necessary to make it ready for use ${money(test)}. What is initial machine cost?`,correct:money(cost),distractors:[money(price),money(price+freight),money(price+install)],explanation:`Plant-asset cost includes expenditures necessary to acquire the asset and prepare it for intended use: ${money(price)} + ${money(freight)} + ${money(install)} + ${money(test)} = ${money(cost)}.`,reviewPath:'Textbook extension → Ch9 → Plant Asset Expenditures',reviewLesson:'Chapter 9 · Lesson 1',bookRef:'Ch9 · LO1',mapRef:'Not explicitly mapped in teacher mind map'});
  }
  for(let i=0;i<10;i++){
    const cost=80000+i*5000,res=5000+(i%3)*1000,life=5+(i%4),annual=(cost-res)/life, years=2+(i%3), accum=annual*years, book=cost-accum, proceeds=book+[-4000,3000,0,5000,-2500,2000,-3500,4500,1000,-1500][i], gl=proceeds-book;
    add({id:`G9-DISP-${i+1}`,chapter:'ch9',topic:'Depreciation and disposal',difficulty:'hard',type:'Calculation',question:`Asset cost ${money(cost)}, residual value ${money(res)}, useful life ${life} years, straight-line depreciation. After ${years} full years, it is sold for ${money(proceeds)}. What is the gain/loss?`,correct:gl>0?`Gain ${money(gl)}`:gl<0?`Loss ${money(-gl)}`:'No gain or loss',distractors:[`Gain ${money(Math.abs(proceeds-cost))}`,`Loss ${money(Math.abs(proceeds-cost))}`,`Always no gain/loss under straight-line`],explanation:`Annual depreciation = (${money(cost)} − ${money(res)})/${life} = ${money(annual)}. Accumulated depreciation after ${years} years = ${money(accum)}; carrying amount = ${money(book)}. Compare proceeds ${money(proceeds)} with carrying amount: ${gl>0?'gain':'loss/no difference'} ${money(Math.abs(gl))}.`,reviewPath:'Textbook extension → Ch9 → Depreciation → Disposal',reviewLesson:'Chapter 9 · Lessons 2–3',bookRef:'Ch9 · LO2–LO3',mapRef:'Not explicitly mapped in teacher mind map'});
  }

  // CH10 — 20
  const liabs=[
    ['Cash collected for services to be performed next month','Unearned Revenue — current liability until earned'],
    ['Employees have earned wages not yet paid','Salaries/Wages Payable — accrued current liability'],
    ['A supplier invoice is unpaid','Accounts Payable — current liability'],
    ['Interest has accrued on a short-term note','Interest Payable — current liability'],
    ['A long-term bond amount due within the current classification horizon','Current maturity of long-term debt'],
    ['Sales/VAT collected from customers and not yet remitted','Tax payable — liability'],
    ['Customer prepays annual subscription','Unearned Revenue initially'],
    ['Company signs a 90-day note for cash','Notes Payable — current liability'],
    ['A five-year debt not due in the near term','Non-current liability'],
    ['A dividend has been declared and is payable soon','Dividend Payable — current liability under the exercise facts']
  ];
  liabs.forEach((x,i)=>add({id:`G10-LIAB-${i+1}`,chapter:'ch10',topic:'Current liabilities',difficulty:'medium',question:`How should this obligation be viewed: ${x[0]}?`,correct:x[1],distractors:['Revenue immediately','Asset because cash may be involved','Equity contribution'],explanation:`${x[1]}. Liability classification depends on a present obligation and expected settlement timing.`,reviewPath:'Textbook extension → Ch10 → Current Liabilities',reviewLesson:'Chapter 10 · Lessons 1–3',bookRef:'Ch10 · LO1',mapRef:'Not explicitly mapped in teacher mind map'}));
  for(let i=0;i<10;i++){
    const ca=120000+i*10000, cl=60000+i*7000, wc=ca-cl, cr=ca/cl;
    add({id:`G10-RATIO-${i+1}`,chapter:'ch10',topic:'Liquidity analysis',difficulty:'medium',type:'Calculation',question:`Current assets are ${money(ca)} and current liabilities are ${money(cl)}. What are working capital and current ratio?`,correct:`Working capital ${money(wc)}; current ratio ${cr.toFixed(2)}`,distractors:[`Working capital ${money(ca+cl)}; current ratio ${(cl/ca).toFixed(2)}`,`Working capital ${money(cl)}; current ratio ${(ca-cl)/cl}`,`Current ratio equals net income`],explanation:`Working capital = CA − CL = ${money(wc)}. Current ratio = CA ÷ CL = ${cr.toFixed(2)}. These are liquidity indicators, not guarantees of cash availability.`,reviewPath:'Textbook extension → Ch10 → Reporting and Analysis',reviewLesson:'Chapter 10 · Lesson 4',bookRef:'Ch10 · LO2',mapRef:'Not explicitly mapped in teacher mind map'});
  }

  // CH11 — 20
  const bonds=[
    ['stated/coupon rate equals market rate at issuance','Issue near face value'],
    ['stated rate is below market yield','Issue at a discount'],
    ['stated rate is above market yield','Issue at a premium'],
    ['bond issue price below face value','Discount on bonds'],
    ['bond issue price above face value','Premium on bonds'],
    ['principal repayment at maturity','Financing cash outflow'],
    ['coupon interest payment','Interest cash payment; classification follows applicable course/IFRS policy'],
    ['market yield rises before issuance while coupon stays fixed','Bond price falls relative to face'],
    ['market yield falls before issuance while coupon stays fixed','Bond price rises relative to face'],
    ['bond redeemed for cash equal to carrying amount','No redemption gain or loss']
  ];
  bonds.forEach((x,i)=>add({id:`G11-BOND-${i+1}`,chapter:'ch11',topic:'Bonds',difficulty:'medium',question:`Bond scenario: ${x[0]}. What is the best conclusion?`,correct:x[1],distractors:['Always issue at face value','Always create revenue','Never affects liabilities'],explanation:`${x[1]}. Bond price reflects the present value of contractual cash flows discounted using market yield; carrying amount matters for later accounting.`,reviewPath:'Textbook extension → Ch11 → Bonds',reviewLesson:'Chapter 11 · Lessons 1–2',bookRef:'Ch11 · LO1–LO2',mapRef:'Not explicitly mapped in teacher mind map'}));
  for(let i=0;i<10;i++){
    const debt=300000+i*20000, assets=500000+i*30000, ebit=90000+i*7000, interest=15000+i*1000, da=debt/assets, tie=ebit/interest;
    add({id:`G11-SOLV-${i+1}`,chapter:'ch11',topic:'Solvency analysis',difficulty:'medium',type:'Calculation',question:`Total liabilities ${money(debt)}, total assets ${money(assets)}, income before interest and tax proxy ${money(ebit)}, interest expense ${money(interest)}. Compute debt-to-assets and times-interest-earned proxy.`,correct:`Debt/assets ${(da*100).toFixed(1)}%; times interest earned ${tie.toFixed(2)}×`,distractors:[`Debt/assets ${(assets/debt*100).toFixed(1)}%; TIE ${(interest/ebit).toFixed(2)}×`,`Debt/assets ${money(assets-debt)}; TIE ${money(ebit-interest)}`,'Both measures equal current ratio'],explanation:`Debt-to-assets = liabilities/assets = ${(da*100).toFixed(1)}%. Times interest earned = income available for interest ÷ interest = ${tie.toFixed(2)}× under the stated proxy.`,reviewPath:'Textbook extension → Ch11 → Reporting and Analysis',reviewLesson:'Chapter 11 · Lesson 4',bookRef:'Ch11 · LO4',mapRef:'Not explicitly mapped in teacher mind map'});
  }

  // CH12 — 20
  const equityQs=[
    ['Issue ordinary shares for cash','Increase Cash and contributed equity; not revenue'],
    ['Reacquire own shares for cash','Decrease Cash and total equity through treasury shares'],
    ['Declare a cash dividend','Create dividend payable and reduce retained earnings according to declaration entry'],
    ['Pay a previously declared cash dividend','Decrease Cash and Dividend Payable'],
    ['2-for-1 share split','Double shares and reduce per-share reference amount; total equity unchanged'],
    ['Share dividend','Increase shares outstanding and reclassify within equity; no cash outflow'],
    ['Preference shares have cumulative dividend rights','Unpaid preference dividends can accumulate as dividends in arrears, subject to terms'],
    ['Treasury shares','Contra-equity; not an asset'],
    ['Retained earnings','Accumulated equity balance, not a cash fund'],
    ['Shareholder contribution','Equity transaction, not revenue']
  ];
  equityQs.forEach((x,i)=>add({id:`G12-EQ-${i+1}`,chapter:'ch12',topic:'Corporate equity',difficulty:'medium',question:`Corporate-equity event: ${x[0]}. What is the correct interpretation?`,correct:x[1],distractors:['Always an operating expense','Always a liability increase','No effect on financial statements'],explanation:`${x[1]}. Corporate equity separates contributed capital, retained earnings, and treasury-share effects.`,reviewPath:'Textbook extension → Ch12 → Corporate Equity',reviewLesson:'Chapter 12 · Lessons 1–4',bookRef:'Ch12 · LO1–LO4',mapRef:'Not explicitly mapped in teacher mind map'}));
  for(let i=0;i<10;i++){
    const ni=50000+i*5000, pref=5000+(i%3)*1000, beg=180000+i*10000, end=220000+i*12000, avg=(beg+end)/2, roe=(ni-pref)/avg;
    add({id:`G12-ROE-${i+1}`,chapter:'ch12',topic:'Return on ordinary equity',difficulty:'hard',type:'Calculation',question:`Net income ${money(ni)}, preference dividends ${money(pref)}, beginning ordinary equity ${money(beg)}, ending ordinary equity ${money(end)}. What is return on ordinary shareholders’ equity using average ordinary equity?`,correct:`${(roe*100).toFixed(2)}%`,distractors:[`${(ni/avg*100).toFixed(2)}%`,`${((ni-pref)/end*100).toFixed(2)}%`,`${(avg/(ni-pref)*100).toFixed(2)}%`],explanation:`Income available to ordinary shareholders = ${money(ni)} − ${money(pref)} = ${money(ni-pref)}. Average ordinary equity = ${money(avg)}. ROE = ${money(ni-pref)} ÷ ${money(avg)} = ${(roe*100).toFixed(2)}%.`,reviewPath:'Textbook extension → Ch12 → Equity Analysis',reviewLesson:'Chapter 12 · Lesson 4',bookRef:'Ch12 · LO4',mapRef:'Not explicitly mapped in teacher mind map'});
  }

  // CH13 — 20
  const invClass=[
    ['Investor holds a small share stake with no significant influence','Financial-instrument/fair-value style accounting under applicable classification'],
    ['Investor has significant influence over investee','Equity-method style accounting'],
    ['Investor controls another entity','Consolidation is generally required'],
    ['Debt investment earns contractual interest','Recognize interest according to measurement basis'],
    ['Investment sold above carrying amount','Recognize realized gain subject to classification rules'],
    ['Fair value changes while security remains held','Unrealized change may still be reported depending on classification'],
    ['Dividend received from an investee under equity method','Generally reduces investment carrying amount rather than being ordinary dividend revenue in the simplified equity-method model'],
    ['Purchase of an investment for cash','Investing cash flow in the common non-trading long-term classroom case'],
    ['Percentage ownership alone','Important indicator but not the only evidence of influence/control'],
    ['Different investment categories','Can produce different measurement and presentation outcomes']
  ];
  invClass.forEach((x,i)=>add({id:`G13-CLASS-${i+1}`,chapter:'ch13',topic:'Investment classification',difficulty:'medium',question:`Investment scenario: ${x[0]}. What is the best conclusion?`,correct:x[1],distractors:['All investments use identical accounting','Always record as inventory','Always classify every return as financing revenue'],explanation:`${x[1]}. Accounting depends on instrument type, business model/classification, and the investor’s degree of influence or control.`,reviewPath:'Textbook extension → Ch13 → Investments',reviewLesson:'Chapter 13 · Lessons 1–3',bookRef:'Ch13 · LO1–LO3',mapRef:'Not explicitly mapped in teacher mind map'}));
  for(let i=0;i<10;i++){
    const cost=30000+i*3000, fv=cost+[-3000,2000,5000,-1500,4000,-2500,3500,1000,-1000,6000][i], change=fv-cost;
    add({id:`G13-FV-${i+1}`,chapter:'ch13',topic:'Investment fair-value change',difficulty:'medium',type:'Calculation',question:`An investment carried under a fair-value category cost ${money(cost)} and has period-end fair value ${money(fv)}. What is the unrealized change before considering where the standard requires it to be presented?`,correct:change>=0?`Unrealized gain ${money(change)}`:`Unrealized loss ${money(-change)}`,distractors:[`Realized gain ${money(Math.abs(change))}`,`No change until sale under every investment category`,money(fv)],explanation:`Unrealized fair-value change = period-end fair value − carrying/cost basis before remeasurement = ${money(fv)} − ${money(cost)} = ${money(change)}. Presentation in profit or OCI depends on classification.`,reviewPath:'Textbook extension → Ch13 → Financial-statement presentation',reviewLesson:'Chapter 13 · Lesson 3',bookRef:'Ch13 · LO3',mapRef:'Not explicitly mapped in teacher mind map'});
  }

  // CH15 — 20
  for(let i=0;i<10;i++){
    const prev=100000+i*10000, cur=prev+(12000+i*1500), change=cur-prev, pct=change/prev*100;
    add({id:`G15-HOR-${i+1}`,chapter:'ch15',topic:'Horizontal analysis',difficulty:'medium',type:'Calculation',question:`A financial-statement item rises from ${money(prev)} to ${money(cur)}. What are the horizontal-analysis amount and percentage changes?`,correct:`Increase ${money(change)}; ${pct.toFixed(1)}%`,distractors:[`Increase ${money(change)}; ${(change/cur*100).toFixed(1)}%`,`Decrease ${money(change)}; ${pct.toFixed(1)}%`,`${(cur/prev*100).toFixed(1)}% decrease`],explanation:`Amount change = current − prior = ${money(change)}. Percentage change = change ÷ prior-period base = ${money(change)} ÷ ${money(prev)} = ${pct.toFixed(1)}%.`,reviewPath:'Textbook extension → Ch15 → Horizontal Analysis',reviewLesson:'Chapter 15 · Lesson 1',bookRef:'Ch15 · LO1',mapRef:'Not explicitly mapped in teacher mind map'});
  }
  for(let i=0;i<10;i++){
    const sales=500000+i*40000, ni=45000+i*3500, ca=180000+i*12000, cl=90000+i*7000, assets=400000+i*30000, margin=ni/sales, current=ca/cl, roa=ni/assets;
    add({id:`G15-RAT-${i+1}`,chapter:'ch15',topic:'Ratio analysis',difficulty:'hard',type:'Calculation',question:`Sales ${money(sales)}, net income ${money(ni)}, current assets ${money(ca)}, current liabilities ${money(cl)}, average total assets ${money(assets)}. Which set of ratios is correct?`,correct:`Profit margin ${(margin*100).toFixed(1)}%; current ratio ${current.toFixed(2)}; ROA ${(roa*100).toFixed(1)}%`,distractors:[`Profit margin ${(sales/ni*100).toFixed(1)}%; current ratio ${(cl/ca).toFixed(2)}; ROA ${(assets/ni*100).toFixed(1)}%`,`Profit margin ${(ni/assets*100).toFixed(1)}%; current ratio ${(ca-cl).toFixed(2)}; ROA ${(ni/sales*100).toFixed(1)}%`,'All ratios equal because they use the same statements'],explanation:`Profit margin = NI/Sales = ${(margin*100).toFixed(1)}%. Current ratio = CA/CL = ${current.toFixed(2)}. ROA = NI/Average assets = ${(roa*100).toFixed(1)}%. Each ratio answers a different performance/liquidity question.`,reviewPath:'Textbook extension → Ch15 → Ratio Analysis',reviewLesson:'Chapter 15 · Lessons 2–4',bookRef:'Ch15 · LO2',mapRef:'Not explicitly mapped in teacher mind map'});
  }

  D.questions.push(...N);
  window.ACCOUNTING_GENERATED_QUESTION_COUNT=N.length;
})();


/* ===== content/deep-theory.js ===== */

(function(){
  function has(s,re){return re.test(String(s||''));}
  function explainPoint(point, section, chapter){
    const p=String(point||''); const t=(String(section?.title||'')+' '+p).toLowerCase();
    if(has(t,/sole trader|partnership|corporation|separate legal/)) return 'The legal form matters because it changes who owns the residual interest and who can be responsible for obligations. In accounting, however, the reporting entity still keeps its own records: business assets, liabilities, revenues, and expenses are not mixed with an owner’s personal transactions. When solving questions, separate the legal-liability issue from the accounting-entity issue.';
    if(has(t,/monetary unit/)) return 'The monetary-unit assumption is a recording filter. Accounting does not claim that non-monetary matters such as employee skill or customer loyalty are unimportant; it means ordinary accounting records require a monetary measure before an item can be recognized numerically. This is why some economically important facts appear in narrative disclosures rather than as account balances.';
    if(has(t,/economic.*entity|business entity/)) return 'Treat the business as the unit whose financial statements are being prepared. Ask: “Did the entity receive a resource, incur an obligation, earn revenue, or consume a resource?” If the event belongs only to the owner personally, it is not a business transaction. This prevents personal spending from distorting business profit and financial position.';
    if(has(t,/time period|reporting period/)) return 'A business may continue for many years, but users need information before the business ends. The time-period assumption divides that long life into months, quarters, or years. Once periods are created, timing becomes essential: revenue and expenses must be assigned to the correct period, which is why adjusting entries are necessary.';
    if(has(t,/going concern/)) return 'Going concern supports measurements that assume the entity will continue normal operations rather than liquidate immediately. For example, equipment can be used and depreciated over its useful life instead of being treated as though it must be sold tomorrow. If continuation becomes doubtful, the assumptions behind measurement and disclosure may change.';
    if(has(t,/historical cost|fair value|current value|measurement/)) return 'Measurement answers “At what amount should the recognized item be reported?” Historical cost begins with transaction-based amounts and is usually easy to verify. Current or fair-value measures can provide more up-to-date information when the applicable accounting requirements call for them. Do not choose a measurement basis simply because one number looks more realistic; apply the basis required for the item and context.';
    if(has(t,/revenue recognition|revenue.*earned|earned revenue/)) return 'Revenue is linked to performance, not merely to cash collection. If the entity has performed the service or otherwise satisfied the earning condition in the course material, revenue can exist even if the customer pays later. Conversely, cash received before performance normally creates a liability first because the entity still owes goods or services.';
    if(has(t,/expense recognition|matching|resources are consumed|obligations incurred/)) return 'Expense recognition follows economic consumption or incurrence. Paying cash early may create a prepaid asset; paying cash late may settle an expense that was already recognized. The practical question is therefore “What benefit was used, or what obligation was incurred, during this reporting period?” rather than “Was cash paid?”';
    if(has(t,/full disclosure/)) return 'Recognition in the primary statements is not the whole reporting story. Users also need material information that explains the numbers, risks, policies, commitments, or unusual events. Full disclosure therefore works through both the financial statements and the accompanying notes.';
    if(has(t,/asset:/)) return 'An asset is about a present economic resource controlled by the entity because of a past event. “Resource” is broader than cash or physical objects: receivables and prepaid services can also qualify because they give the entity rights or future economic potential. In classification questions, focus on control and the remaining benefit at the reporting date.';
    if(has(t,/liability:/)) return 'A liability is a present obligation created by a past event that will require transfer of an economic resource. The key word is “present”: a vague plan to spend money later is not the same as an existing obligation. Accounts payable, salaries payable, notes payable, and unearned revenue illustrate different ways obligations can arise.';
    if(has(t,/equity:|residual interest/)) return 'Equity is not a separate pile of cash. It is the residual claim after liabilities are deducted from assets. That is why revenue and expenses affect equity through profit, owner contributions affect equity directly, and dividends reduce equity without being operating expenses.';
    if(has(t,/revenue\/income|revenue increases|service revenue|sales revenue/)) return 'Revenue increases equity because the entity has earned value through its activities, normally by increasing assets or reducing liabilities. A cash receipt is revenue only when it represents earned performance. Collection of an existing receivable changes the form of the asset but does not create a second revenue.';
    if(has(t,/expense decreases|expense reduces|expenses/)) return 'Expenses represent resources consumed or obligations incurred in generating operations during the period. They reduce profit and therefore reduce retained earnings/equity. Repaying loan principal or paying an old payable is not automatically an expense because the expense or liability may have been recognized earlier.';
    if(has(t,/income statement|profit or loss/)) return 'The income statement measures performance over a period. It accumulates revenues and expenses for that period and reports their net result. Because it is period-based, its heading uses wording such as “for the month/year ended …,” and its result later feeds into retained earnings.';
    if(has(t,/changes in equity|retained earnings/)) return 'The changes-in-equity or retained-earnings statement explains why equity changed between two dates. In the simplified course model, beginning retained earnings is increased by net income and reduced by dividends. This statement is the bridge between the income statement and the statement of financial position.';
    if(has(t,/statement of financial position|balance sheet/)) return 'The statement of financial position is a snapshot at a date, not a measure of activity over a period. It reports resources (assets), obligations (liabilities), and residual claims (equity). The accounting equation is therefore visible directly in this statement: total assets must equal total liabilities plus total equity.';
    if(has(t,/statement of cash flows|operating, investing, and financing/)) return 'The cash-flow statement explains actual changes in cash and cash equivalents during a period. It separates operating, investing, and financing activities so users can distinguish cash generated by core operations from cash used to acquire long-term resources or raised from lenders and owners. Profit alone cannot provide this information.';
    if(has(t,/basic equation|assets = liabilities|expanded.*equation/)) return 'The equation is a consistency model, not just a formula to memorize. Every recognized transaction changes at least two account effects in a way that keeps resources equal to the claims on those resources. The expanded version makes the drivers of equity visible so you can see separately how capital, revenue, expense, and dividends change owners’ residual interest.';
    if(has(t,/owner.*contribution|shareholder.*contribution|share capital/)) return 'Owner contributions are financing from owners, not revenue from customers. They increase assets and equity directly. Keeping this separate from revenue is essential because otherwise profit would be overstated whenever owners inject capital.';
    if(has(t,/dividend|distribution/)) return 'A dividend is a distribution of equity to owners. It reduces assets (when paid) and reduces retained earnings/equity, but it is not an expense of earning revenue. This distinction is a frequent exam trap because both expenses and dividends reduce equity for different reasons.';
    if(has(t,/recordable|accounts are affected|dual effect|transaction analysis/)) return 'Transaction analysis should come before debit/credit rules. First identify the economic event and the accounts affected; next decide whether each account increases or decreases; then verify the accounting equation. Only after that should you translate the effects into debits and credits. This sequence prevents “debit means plus” mistakes.';
    if(has(t,/debit|credit|normal balance/)) return 'Debit and credit describe the left and right sides of an account, not good/bad and not universal plus/minus signs. The normal balance is the side normally used to increase that account class. Assets, expenses, and dividends normally increase with debits; liabilities, equity, and revenues normally increase with credits. Contra accounts deliberately have the opposite normal balance of the related account.';
    if(has(t,/double-entry/)) return 'Double-entry records the complete dual effect of a transaction. Total debits must equal total credits for every entry, but equality alone does not guarantee correctness: the wrong accounts can still be used for equal amounts. Always combine the debit-credit check with an economic-substance check.';
    if(has(t,/journal|original entry|chronological/)) return 'The journal is the chronological record of transactions. A complete journal entry identifies the date, accounts, debit and credit amounts, and—when required—an explanation. Journalizing converts transaction analysis into formal accounting language before the amounts are organized by account in the ledger.';
    if(has(t,/ledger|t-account|post to/)) return 'Posting reorganizes information from chronological order into account-by-account order. The ledger lets you answer questions such as “What is the current Cash balance?” or “How much is still owed to suppliers?” An ending balance comes from the beginning balance plus increases minus decreases according to that account’s normal-balance rules.';
    if(has(t,/trial balance/)) return 'A trial balance lists ledger accounts and their balances at a point in the accounting process. Its main arithmetic check is total debit balances = total credit balances. It cannot detect every error: a completely omitted transaction, a correct entry posted twice, or an equal debit and credit to the wrong accounts may still leave the totals equal.';
    if(has(t,/adjusting entries exist|adjusting entries|adjustment/)) return 'Adjusting entries update accounts at period end so the financial statements reflect the correct period under accrual accounting. They deal with timing differences: cash and recognition do not always occur together. A useful diagnostic is to ask whether something has been consumed/earned/incurred by the reporting date but is not yet fully reflected in the accounts.';
    if(has(t,/prepaid expense/)) return 'A prepaid expense starts as an asset because the entity has paid for a future benefit. As time passes or the benefit is consumed, part of that asset no longer exists and becomes expense. The adjustment therefore increases Expense (debit) and decreases the Prepaid Asset (credit). The remaining asset equals the unused benefit after adjustment.';
    if(has(t,/unearned revenue/)) return 'Unearned revenue starts as a liability because cash was received before the entity earned it. As performance occurs, the obligation to the customer decreases and revenue is recognized. The adjustment debits Unearned Revenue and credits Revenue for the portion earned, leaving the unperformed portion as a liability.';
    if(has(t,/accrued revenue/)) return 'Accrued revenue is earned before cash is received or before the customer has been billed. The period has revenue because performance has occurred, and the entity also has a receivable. The adjustment increases an asset (debit Accounts Receivable/Accrued Revenue) and increases Revenue (credit).';
    if(has(t,/accrued expense|interest payable|salaries payable/)) return 'An accrued expense has been incurred even though cash has not yet been paid and the liability may not yet have been recorded. The adjustment debits Expense and credits a Payable. Interest accruals also require a time calculation: principal × annual rate × fraction of year outstanding.';
    if(has(t,/depreciation/)) return 'Depreciation allocates the depreciable cost of a long-lived asset over periods of use; it is not a direct attempt to update the asset to market value. The usual adjustment debits Depreciation Expense and credits Accumulated Depreciation, a contra-asset. Carrying amount equals the asset’s cost less related accumulated depreciation.';
    if(has(t,/worksheet/)) return 'The worksheet is an optional working tool that brings trial-balance amounts, adjustments, adjusted balances, and financial-statement columns together. It helps organize the accounting cycle, but it is not a journal or ledger. Formal adjusting and closing entries still need to be journalized and posted to the accounting records.';
    if(has(t,/temporary|permanent accounts/)) return 'Temporary accounts measure one period’s performance or distributions and must start the next period at zero. Revenues, expenses, and dividends are therefore closed. Permanent statement-of-financial-position accounts—assets, liabilities, and equity balances such as retained earnings—carry forward.';
    if(has(t,/closing entries/)) return 'Closing transfers the current period’s temporary-account effects into retained earnings and resets temporary accounts to zero. The traditional four-step sequence closes revenues to Income Summary, expenses to Income Summary, Income Summary to Retained Earnings, and dividends to Retained Earnings. Closing changes account organization, not the period’s already-determined profit.';
    if(has(t,/post-closing/)) return 'The post-closing trial balance is prepared after closing to confirm that permanent-account debit and credit balances still agree. Revenue, expense, and dividend accounts should be absent because they now have zero balances. It becomes a clean starting point for the next accounting period.';
    if(has(t,/correcting/)) return 'Correcting entries repair accounting errors; adjusting entries handle normal timing under accrual accounting. A correcting entry should remove the incorrect effect and record the correct effect, ideally as one net entry. A balanced trial balance does not eliminate the need for correction because many wrong entries still contain equal debits and credits.';
    if(has(t,/inventory cost|purchase of inventory|freight-in|purchase return/)) return 'Under the perpetual approach used in the course, Inventory is updated for costs necessary to bring goods to their location and condition for sale, subject to the specific freight terms and discounts. Purchase returns and purchase discounts reduce the recorded inventory cost. Always distinguish buyer-side inventory cost from seller-side delivery expense.';
    if(has(t,/sale of inventory|two effects|cost of goods sold/)) return 'A perpetual inventory sale has two economic effects: earning revenue from the customer and transferring the cost of inventory out of the business. That is why two entries are needed—one at selling price and one at inventory cost. Gross profit is the difference between net sales and cost of goods sold, not the cash collected.';
    if(has(t,/freight-out|fob destination|fob shipping/)) return 'FOB terms determine which party bears transportation responsibility in the classroom problems. Under FOB shipping point, the buyer normally bears freight and includes it in inventory cost. Under FOB destination, the seller normally bears delivery cost and records a selling/delivery expense. Read the shipping term before deciding which account to use.';
    if(has(t,/sales returns|allowance/)) return 'A sales return reverses all or part of the customer-facing sale and, under a perpetual system when goods are returned to inventory, also reverses the related cost flow. A sales allowance reduces the selling price without necessarily returning the goods, so it normally affects the sales side but not inventory/COGS. This distinction is highly testable.';
    if(has(t,/discount/)) return 'A sales or purchase discount rewards payment within the discount period. Compute the discount on the amount still subject to discount after relevant returns/allowances. On the seller side, Sales Discounts is a contra-revenue; on the buyer side under perpetual accounting, the discount reduces Inventory.';
    if(has(t,/perpetual vs periodic|perpetual inventory|periodic inventory/)) return 'The inventory system determines when inventory records and COGS are updated. Perpetual accounting updates Inventory and COGS continuously; periodic accounting waits until period end to determine COGS from beginning inventory, purchases, and ending inventory. This is separate from the cost-flow method such as FIFO or weighted average.';
    if(has(t,/fifo/)) return 'FIFO assigns the oldest available unit costs to cost of goods sold first. Treat inventory as cost layers: list the units and unit cost in chronological order, satisfy the sale from the oldest layer, then carry the unused newer layers into ending inventory. The accounting cost flow need not match the physical movement of individual items.';
    if(has(t,/weighted average|moving weighted/)) return 'A moving weighted-average system recomputes average unit cost after each purchase under perpetual records. Sales use the latest average that existed immediately before the sale. Do not recompute the average after a sale when no new purchase has occurred, because the remaining units retain the same average cost.';
    if(has(t,/ownership|consignment|goods shipped/)) return 'Inventory belongs to the entity that controls/owns the goods under the relevant transaction terms at the reporting date. Shipping terms and consignment arrangements matter because physical location alone does not determine ownership. Before costing ending inventory, first decide which goods belong in the count.';
    if(has(t,/inventory errors/)) return 'Ending inventory directly affects COGS through the inventory equation. If ending inventory is overstated, COGS is understated and current-period profit is overstated; the opposite occurs when ending inventory is understated. Because one period’s ending inventory becomes the next period’s beginning inventory, many errors reverse in the following period if not otherwise corrected.';
    if(has(t,/turnover|lower.*measurement|net realizable/)) return 'Inventory is not analyzed only by its dollar balance. Measurement rules prevent carrying inventory above recoverable amounts when required, while turnover and days-in-inventory ratios help evaluate how quickly stock moves. Ratios require context: a very high turnover can indicate efficiency or possible stock shortages.';
    if(has(t,/fraud|internal control/)) return 'Internal control is a system of policies and procedures designed to safeguard assets, improve reliability of records, promote efficiency, and encourage compliance. No system provides absolute assurance because human error, collusion, override, and cost-benefit limits remain. Strong controls combine authorization, segregation of duties, documentation, physical safeguards, and independent checks.';
    if(has(t,/cash receipts|cash disbursements|petty cash/)) return 'Cash is especially vulnerable, so control emphasizes prompt recording, restricted access, documentation, and independent verification. Petty cash is a controlled exception for small payments: vouchers explain the expenditures, and replenishment records the expenses while restoring the fund to its authorized amount.';
    if(has(t,/bank reconciliation/)) return 'Bank and book cash balances differ because each side may know about items the other side has not yet recorded. Reconciliation classifies differences into bank-side timing items (such as deposits in transit and outstanding checks) and book-side items (such as bank charges, interest, or errors). Only book-side reconciling items normally require journal entries by the company.';
    if(has(t,/accounts receivable/)) return 'Accounts receivable arise when revenue is earned on account. They are reduced when customers pay, when sales are returned/allowed, or when accounts are written off under the appropriate method. Collecting an existing receivable increases Cash and decreases Accounts Receivable; it does not create new revenue.';
    if(has(t,/uncollectible|doubtful|allowance/)) return 'The allowance method reports receivables at an expected collectible amount by pairing gross receivables with an allowance for doubtful accounts. A write-off uses the allowance and removes the specific receivable, so net realizable value is unchanged at that moment. Estimation adjusts the allowance to the required ending balance and affects bad-debt expense.';
    if(has(t,/notes receivable/)) return 'A note receivable is a formal written claim that often carries interest. Interest is computed as face value × annual interest rate × time. At maturity, the holder normally receives principal plus interest; if the note crosses a reporting date, accrued interest may have to be recognized before cash is collected.';
    if(has(t,/plant assets|machine price|initial machine cost/)) return 'The initial cost of a plant asset includes purchase price and expenditures necessary to acquire the asset and prepare it for intended use. Ordinary operating costs after the asset is ready for use are generally expenses unless they meet the criteria for capitalization in the course material. Correct classification matters because capitalization affects multiple periods through depreciation.';
    if(has(t,/disposal of plant assets|gain|loss/)) return 'At disposal, first update depreciation to the disposal date if needed, then compute carrying amount = cost − accumulated depreciation. Compare cash proceeds with carrying amount: proceeds above carrying amount create a gain; proceeds below create a loss. Remove both the asset cost and its accumulated depreciation from the books.';
    if(has(t,/natural resources|intangible/)) return 'Natural resources allocate cost through depletion based on extraction/usage, while finite-life intangible assets are generally allocated through amortization according to the applicable course rules. The common principle is systematic allocation of a capitalized cost over the periods or units that consume its economic benefit.';
    if(has(t,/current liability/)) return 'Current-liability classification focuses on obligations expected to be settled within the entity’s normal operating cycle or relevant short-term classification period. Current liabilities include trade payables, accrued obligations, short-term notes, taxes payable, current portions of longer-term debt, and unearned revenue when performance is due soon.';
    if(has(t,/payroll|taxes|notes/)) return 'Liabilities can arise from borrowing, purchasing on credit, employee services, taxes, or other obligations. For accrued payroll, the expense belongs to the period employees worked even if cash is paid later. Notes payable may also require separate interest accrual in addition to principal.';
    if(has(t,/bond|coupon|market yield/)) return 'A bond’s issue price reflects the relationship between its stated/coupon rate and the market yield demanded by investors. If the coupon rate equals market yield, price tends toward face value; below-market coupons lead to a discount and above-market coupons to a premium. The economic reason is that investors adjust the price to earn the market return.';
    if(has(t,/bond accounting|effective interest|redeem/)) return 'Bond accounting separates cash interest from interest expense when a discount or premium exists. Under the effective-interest approach, interest expense is based on carrying amount × market yield, while cash paid follows face value × stated rate. The difference amortizes the discount or premium and moves carrying amount toward face value by maturity.';
    if(has(t,/corporate form|issuing shares|share transactions/)) return 'Issuing shares is an owner-financing transaction. Cash or other contributed assets increase, and equity accounts increase; the proceeds are not revenue because they come from shareholders rather than operations. Corporate accounting also separates contributed capital from retained earnings generated by operations.';
    if(has(t,/preference|treasury shares/)) return 'Preference shares have contractual preferences specified in their terms, commonly relating to dividends or liquidation. Treasury shares are the corporation’s own shares reacquired from investors; the reacquisition reduces cash and total equity rather than creating an investment asset in the corporation itself.';
    if(has(t,/share split|stock split/)) return 'A share split changes the number of shares and per-share amounts without changing total assets, liabilities, or equity. It is therefore different from a cash dividend, which transfers assets to shareholders. A share dividend reallocates components of equity but also does not distribute cash at the declaration itself.';
    if(has(t,/debt investments|why companies invest/)) return 'Companies invest excess cash to earn returns, manage liquidity, or pursue strategic objectives. Debt investments create contractual interest and principal cash flows. Classification and measurement determine where interest, realized gains/losses, and unrealized fair-value changes are reported.';
    if(has(t,/share investments|significant influence|equity method/)) return 'Accounting for share investments depends partly on the investor’s level of influence. A passive investment may be measured at fair value under the applicable classification, while significant influence commonly leads to the equity method, under which the investor recognizes its share of the investee’s profit and reduces the investment for dividends received.';
    if(has(t,/unrealized|fair-value change|other comprehensive/)) return 'An unrealized change means the investment has not yet been sold, but its measured fair value changed. Where that change is reported depends on the investment classification and applicable IFRS treatment. The key exam skill is to separate cash receipts, realized disposal results, and period-end measurement changes.';
    if(has(t,/operating section|net income|indirect method/)) return 'The indirect operating section begins with accrual-basis net income and reconciles it to operating cash flow. Add back non-cash expenses such as depreciation, remove gains/losses that belong with investing cash flows, and then adjust for operating working-capital changes. The objective is not to recalculate profit; it is to remove accrual and non-operating effects from profit.';
    if(has(t,/working capital|accounts receivable.*subtract|accounts payable.*add/)) return 'Use the “cash lag” logic instead of memorizing signs. An increase in an operating asset such as Accounts Receivable or Inventory generally means cash is lower than accrual profit, so subtract it. An increase in an operating liability such as Accounts Payable generally means cash payment has been deferred, so add it. Reverse the signs for decreases.';
    if(has(t,/investing section|non-current assets|equipment carrying amount/)) return 'Investing cash flows normally involve acquiring and disposing of long-term assets and investments, plus lending/collecting principal where classified as investing in the course. Comparative balances alone may not reveal cash purchases or sale proceeds; use additional information, gains/losses, depreciation, and T-account reconciliations to solve for the cash amounts.';
    if(has(t,/financing section|debt and share capital|dividends/)) return 'Financing cash flows explain changes in borrowing and owner financing: issuing or repaying debt, issuing shares, and cash distributions to owners under the course classification. Reconcile beginning and ending debt/equity accounts with non-cash changes and income-related movements to isolate the actual cash financing flows.';
    if(has(t,/final reconciliation|cash-flow quality/)) return 'The final cash-flow statement must reconcile beginning cash to ending cash: operating + investing + financing = net change in cash. Interpretation should then ask where cash comes from and whether that pattern is sustainable. Strong operating cash generation is often important, but investing outflows can be healthy when they reflect productive expansion.';
    if(has(t,/horizontal|comparative analysis|sales rise/)) return 'Horizontal analysis measures change across time in both amount and percentage. Percentage change should be interpreted together with the absolute amount and the base-year size. Compare related items—such as sales and COGS—because different growth rates can reveal changes in margins or operating structure.';
    if(has(t,/liquidity ratio|current ratio|quick/)) return 'Liquidity ratios assess the ability to meet short-term obligations, but they summarize rather than prove cash availability. The current ratio includes all current assets; the quick ratio focuses on more liquid resources. Evaluate asset quality, timing, seasonality, and industry norms before concluding that a higher ratio is automatically better.';
    if(has(t,/profitability|roa|return/)) return 'Profitability ratios connect profit to sales, assets, or equity. Margin measures profit earned from each unit of sales, while turnover measures how efficiently assets generate sales. Return on assets combines these dimensions, so two firms can reach the same ROA through different business models.';
    if(has(t,/solvency|leverage|debt/)) return 'Solvency analysis focuses on long-term financial risk and the ability to service debt. Debt ratios show how much financing comes from creditors, while interest-coverage measures compare earnings capacity with interest obligations. Higher leverage can magnify returns but also increases fixed claims and refinancing risk.';
    if(has(t,/sustainable income|unusual|one-time/)) return 'Sustainable-income analysis separates recurring operating performance from items unlikely to repeat. A one-time gain may increase current profit but should not automatically be extrapolated into future earnings. Read notes and classifications to understand whether an item reflects core operations, estimation changes, disposal activity, or another unusual factor.';
    return 'Treat this point as part of a reasoning chain rather than an isolated definition. Identify the economic event or balance being described, classify the affected financial-statement element, determine whether it increases or decreases, and then connect that result to the appropriate account or statement. In calculations, write the relationship first and substitute numbers second; in journal questions, justify the account before choosing debit or credit.';
  }

  const chapterWhy={
    ch1:'This foundation chapter teaches the economic meaning behind accounting numbers. If you understand entity boundaries, recognition, the financial-statement elements, and the equation, later debit/credit rules become logical rather than memorized.',
    ch2:'This chapter translates economic effects into the recording system. The goal is to move consistently from transaction analysis → debit/credit → journal → ledger → trial balance.',
    ch3:'This chapter is about timing. Cash and accounting recognition frequently occur in different periods, so adjustments make revenues, expenses, assets, and liabilities reflect the reporting date correctly.',
    ch4:'This chapter completes one accounting period and prepares the records for the next. It connects the adjusted trial balance to financial statements, closing, and post-closing balances.',
    ch5:'Merchandising adds inventory and cost of goods sold to the service-company accounting cycle. Every sale now has both a revenue effect and a cost/inventory effect under perpetual accounting.',
    ch6:'Inventory costing determines how total goods available for sale are split between COGS and ending inventory. That split affects profit, assets, and ratios even when physical units are identical.',
    ch7:'Internal control explains how accounting information is protected and verified, especially for cash. The focus is not only recording transactions but designing procedures that make errors and fraud harder to occur or conceal.',
    ch8:'Receivables combine revenue recognition with collection risk and time value. You need to understand how claims arise, how expected credit losses are reflected, and how notes create interest.',
    ch9:'Long-lived assets provide benefits over multiple periods. The accounting challenge is deciding what to capitalize initially, how to allocate cost over use, and how to measure the result when assets are disposed of.',
    ch10:'Current liabilities connect short-term obligations with accrual accounting. Many questions test whether an expense or liability exists before cash payment.',
    ch11:'Non-current liabilities explain long-term borrowing and the time value embedded in bond prices and interest expense. Focus on the difference between face value, cash interest, carrying amount, and market yield.',
    ch12:'Corporate equity distinguishes owner contributions, retained earnings, distributions, and reacquired shares. These are equity transactions, not ordinary operating revenues or expenses.',
    ch13:'Investment accounting links cash returns, influence over investees, fair-value measurement, and presentation. Classification determines which measurement changes affect income or other comprehensive income.',
    ch14:'The cash-flow statement explains why profit is not the same as cash. The teacher flow is best learned as reconciliation: operating first, then investing and financing, then check beginning cash → ending cash.',
    ch15:'Financial-statement analysis converts raw statements into comparisons and ratios. The skill is interpretation: explain what changed, why it may have changed, and what limitation prevents a simplistic conclusion.'
  };

  function workedSteps(section){
    const t=String(section?.title||'').toLowerCase();
    if(has(t,/transaction analysis/)) return ['Identify whether the event belongs to the reporting entity and is recordable.','Name the accounts before thinking about debit or credit.','Mark each account ↑ or ↓ and classify it as asset, liability, equity, revenue, expense, or dividend.','Check A = L + E. Only then translate the effects into debit/credit if the question asks for an entry.'];
    if(has(t,/debit and credit|double-entry/)) return ['Start from the economic effect: which account increases or decreases?','Use the account class to determine its normal increase side.','Place increases/decreases on debit or credit accordingly.','Confirm total debits equal total credits and then re-check that the chosen accounts make economic sense.'];
    if(has(t,/journalize/)) return ['Analyze the transaction and select the accounts.','Enter the debit account(s) first with amounts in the debit column.','Indent the credit account(s) and enter equal credit amount(s).','Add date/reference/explanation when required, then verify Dr = Cr.'];
    if(has(t,/ledger/)) return ['Take each journal line separately.','Post the amount to the corresponding ledger account on the same debit/credit side.','Include date/reference so the posting can be traced.','Compute the account balance using its beginning balance and all posted changes.'];
    if(has(t,/trial balance/)) return ['List accounts and their ending ledger balances in the standard order used by the course.','Place each balance in either debit or credit column according to its ledger balance.','Total both columns and compare them.','If unequal, investigate posting/amount/side errors; if equal, remember some errors can still remain.'];
    if(has(t,/prepaid/)) return ['Determine the total prepaid amount and coverage period.','Compute how much benefit has expired by the adjustment date.','Recognize the expired part as expense and reduce the prepaid asset.','Compute the remaining asset as a final reasonableness check.'];
    if(has(t,/unearned/)) return ['Identify cash received before performance and the original liability.','Measure the portion of service now performed/earned.','Reduce Unearned Revenue for that earned portion and recognize Revenue.','Check that the remaining liability equals the unperformed portion.'];
    if(has(t,/accrued revenue/)) return ['Confirm the service/revenue has been earned by period end.','Confirm cash/billing has not yet produced a recorded receivable.','Record the receivable as an asset and recognize revenue in the current period.','Later collection should reduce the receivable, not create revenue again.'];
    if(has(t,/accrued expense|interest/)) return ['Identify the resource/service already consumed or interest already incurred.','Calculate the amount attributable to the current period.','Debit the relevant Expense and credit the Payable.','When cash is later paid, settle the liability and record only any new-period expense.'];
    if(has(t,/depreciation/)) return ['Determine depreciable base and the method/rate supplied by the question.','Calculate the current period’s depreciation only.','Debit Depreciation Expense and credit Accumulated Depreciation.','Check carrying amount = cost − accumulated depreciation; do not credit the asset account under the standard accumulated-depreciation presentation.'];
    if(has(t,/closing entries/)) return ['Close all revenue balances to Income Summary.','Close all expense balances to Income Summary.','Close the resulting Income Summary balance (net income or loss) to Retained Earnings.','Close Dividends to Retained Earnings and verify every temporary account is zero.'];
    if(has(t,/sales returns/)) return ['Identify whether goods are physically returned or only a price allowance is granted.','Reverse/reduce the sales-side amount using the contra-revenue account.','If goods are returned and can re-enter inventory under the perpetual setup, restore Inventory and reduce COGS for the cost amount.','Keep selling price and cost amount separate.'];
    if(has(t,/discount/)) return ['Determine the amount still subject to discount after returns/allowances.','Check whether payment occurs within the discount window.','Apply the stated percentage to the eligible amount.','Record the seller/buyer side using the appropriate contra-revenue or inventory treatment from the course.'];
    if(has(t,/fifo/)) return ['Write inventory layers in chronological order with units × unit cost.','For each sale, consume units from the oldest available layer first.','Sum the assigned layer costs to calculate COGS.','Carry the unused layers forward and verify units available − units sold = ending units.'];
    if(has(t,/weighted average/)) return ['After a purchase, compute total cost available ÷ total units available.','Use that current average for the next sale.','Reduce units and inventory cost by units sold × current average.','Recalculate only when another purchase changes the cost pool.'];
    if(has(t,/bank reconciliation/)) return ['Begin with separate bank and book balances.','Adjust the bank side for deposits in transit, outstanding checks, and bank errors.','Adjust the book side for charges, collections, interest, NSF items, and book errors.','Both adjusted balances must agree; journalize only the company-book adjustments.'];
    if(has(t,/notes receivable/)) return ['Identify face value, annual rate, and time outstanding.','Compute interest = principal × rate × time.','Determine whether the reporting date requires an interest accrual before maturity.','At maturity, distinguish principal collection from interest revenue.'];
    if(has(t,/disposal/)) return ['Update depreciation to the disposal date when required.','Compute carrying amount = cost − accumulated depreciation.','Compare proceeds with carrying amount to find gain or loss.','Remove asset cost and accumulated depreciation, record cash proceeds, and record the balancing gain/loss.'];
    if(has(t,/bond accounting|bonds and market/)) return ['Compare stated coupon rate with market yield to understand price direction.','Separate cash interest (face × stated rate) from interest expense (carrying amount × market yield when applicable).','Use the difference to amortize discount/premium.','Check that carrying amount moves toward face value as maturity approaches.'];
    if(has(t,/operating section/)) return ['Start with net income.','Add back non-cash expenses and remove gains/losses whose cash effects belong elsewhere.','Adjust for changes in operating current assets and current liabilities.','The resulting amount is net cash provided/used by operating activities.'];
    if(has(t,/working capital/)) return ['Compute current-year minus prior-year change for each operating working-capital account.','For operating assets: increase = subtract; decrease = add.','For operating liabilities: increase = add; decrease = subtract.','Explain each sign using whether cash collection/payment lagged behind accrual recognition.'];
    if(has(t,/investing section/)) return ['Identify non-current asset/investment accounts that changed.','Use additional information to separate purchases, disposals, depreciation, and non-cash changes.','Solve for cash paid or received, often with a T-account reconciliation.','Report only cash portions in the cash-flow statement; disclose significant non-cash transactions separately.'];
    if(has(t,/financing section/)) return ['Identify debt and equity accounts that changed.','Separate cash issues/borrowings from non-cash changes and repayments.','Use retained-earnings reconciliation to infer dividends when needed.','Classify the resulting cash receipts/payments according to the course convention.'];
    if(has(t,/ratio|comparative|analysis/)) return ['Write the formula or comparison base before using numbers.','Substitute consistent-period amounts and calculate carefully.','Interpret the direction economically rather than stopping at the number.','State at least one limitation or contextual factor before concluding performance improved or worsened.'];
    return ['Extract the facts and identify exactly what the question is asking.','State the accounting rule or relationship before calculating or journalizing.','Apply the rule to the facts step by step; keep amounts and account classifications separate.','Perform a final check: equation balance, debit = credit, ending balance reconciliation, or reasonableness depending on the topic.'];
  }

  function activeRecall(section){
    const clean=String(section.title||'').replace(/^\d+\.\s*/,'').replace(/—.*$/,'').trim();
    const term=(section.terms&&section.terms[0])||clean;
    return [
      `Explain “${term}” in your own words without using the definition on screen.`,
      `Using the worked example, explain why the accounting treatment is correct and name the financial-statement element(s) affected.`,
      `What is the most likely exam trap in this section, and what check would prevent it?`
    ];
  }


  const reviewRefs={
    ch1:['Ch1 §1.1–1.2 Accounting Activities / Building Blocks','Ch1 §1.2 The Building Blocks of Accounting; Ch3 §3.1 for recognition timing','Ch1 §1.3 The Accounting Equation + financial-statement elements','Ch1 §1.5 Financial Statements; Ch14 §14.1 for cash flows','Ch1 §1.3 The Accounting Equation','Ch1 §1.4 Analyzing Business Transactions'],
    ch2:['Ch2 §2.1 Accounts, Debits, and Credits','Ch2 §2.1 Accounts, Debits, and Credits','Ch2 §2.2 The Journal','Ch2 §2.3 The Ledger and Posting','Ch2 §2.4 The Trial Balance','Ch2 §2.1–2.4 Recording Process'],
    ch3:['Ch3 §3.1 Accrual-Basis Accounting and Adjusting Entries','Ch3 §3.2 Adjusting Entries for Deferrals — Prepaid Expenses','Ch3 §3.2 Adjusting Entries for Deferrals — Unearned Revenues','Ch3 §3.3 Adjusting Entries for Accruals — Accrued Revenues','Ch3 §3.3 Adjusting Entries for Accruals — Accrued Expenses','Ch3 §3.2 Prepaid Expenses — Depreciation','Ch3 §3.4 Adjusted Trial Balance and Financial Statements'],
    ch4:['Ch4 §4.1–4.3 Worksheet, Closing, and Accounting Cycle','Ch4 §4.2 Closing the Books','Ch4 §4.2 Closing the Books — Preparing/Posting Closing Entries','Ch4 §4.2 Preparing a Post-Closing Trial Balance','Ch4 §4.3 Accounting Cycle and Correcting Entries'],
    ch5:['Ch5 §5.2 Recording Purchases Under a Perpetual System','Ch5 §5.3 Recording Sales Under a Perpetual System','Ch5 §5.2–5.3 Freight Terms / Freight Costs','Ch5 §5.3 Sales Returns and Allowances','Ch5 §5.2–5.3 Purchase/Sales Discounts','Ch5 §5.1 Merchandising Operations and Inventory Systems + periodic-system extension'],
    ch6:['Ch6 §6.1–6.2 Inventory Systems vs Costing Methods','Ch6 §6.2 Inventory Costing Methods — FIFO','Ch6 §6.2 Inventory Costing Methods — Average-Cost / Moving Average','Ch6 §6.1 Classifying and Determining Inventory','Ch6 §6.3 Effects of Inventory Errors','Ch6 §6.4 Inventory Statement Presentation and Analysis'],
    ch7:['Ch7 §7.1 Fraud and Internal Control','Ch7 §7.2 Cash Controls','Ch7 §7.3 Bank Account Controls / Bank Reconciliation','Ch7 §7.4 Reporting Cash'],
    ch8:['Ch8 §8.1 Recognition of Accounts Receivable','Ch8 §8.2 Valuation and Disposition of Accounts Receivable','Ch8 §8.3 Notes Receivable','Ch8 §8.4 Statement Presentation and Analysis of Receivables'],
    ch9:['Ch9 §9.1 Plant Asset Expenditures','Ch9 §9.2 Depreciation Methods','Ch9 §9.3 Plant Asset Disposals','Ch9 §9.4 Natural Resources and Intangible Assets'],
    ch10:['Ch10 §10.1 Current Liabilities','Ch10 §10.1 Current Liabilities — Notes, Taxes, Payroll','Ch10 §10.1 Current Liabilities — Unearned Revenues','Ch10 §10.2 Reporting and Analyzing Current Liabilities'],
    ch11:['Ch11 §11.1 Bonds Payable / Bond Pricing','Ch11 §11.2 Accounting for Bond Transactions','Ch11 §11.3 Other Non-Current Liabilities','Ch11 §11.4 Reporting and Analyzing Non-Current Liabilities'],
    ch12:['Ch12 §12.1 Corporate Form','Ch12 §12.2 Share Transactions / Treasury Shares','Ch12 §12.3 Dividends and Share Splits','Ch12 §12.4 Reporting and Analyzing Equity'],
    ch13:['Ch13 §13.1 Debt Investments','Ch13 §13.2 Share Investments','Ch13 §13.3 Valuing and Reporting Investments'],
    ch14:['Ch14 §14.1 Usefulness and Format of the Statement of Cash Flows','Ch14 §14.2 Preparing the Statement of Cash Flows — Indirect Method','Ch14 §14.2 Indirect Method — Changes in Operating Assets/Liabilities','Ch14 §14.2 Investing Activities / Non-Current Asset Reconciliations','Ch14 §14.2 Financing Activities / Debt and Equity Reconciliations','Ch14 §14.1–14.3 Cash Reconciliation and Evaluation'],
    ch15:['Ch15 §15.1 Basics of Financial Statement Analysis','Ch15 §15.2 Ratio Analysis — Liquidity','Ch15 §15.2 Ratio Analysis — Profitability','Ch15 §15.2 Ratio Analysis — Solvency','Ch15 §15.3 Sustainable Income']
  };
  window.AccountingDeepTheory={
    explainPoint,
    workedSteps,
    activeRecall,
    whyChapter:function(ch){return chapterWhy[ch.id]||'Connect the concept to the accounting flow, apply it to a concrete transaction, and verify the resulting account or statement effect.';},
    reviewRef:function(ch,section){const i=(ch.sections||[]).indexOf(section);return (reviewRefs[ch.id]&&reviewRefs[ch.id][i])||section.bookRef||ch.source;}
  };
})();


/* ===== content/enhancements.js ===== */

(function () {
  const glossaryVi = {
    "accounting": "Hệ thống nhận diện, ghi chép, phân loại, tổng hợp và truyền đạt thông tin về các sự kiện kinh tế để hỗ trợ ra quyết định.",
    "transaction": "Sự kiện kinh tế có thể đo lường bằng tiền, liên quan đến đơn vị kế toán và làm thay đổi ít nhất hai yếu tố của phương trình kế toán.",
    "asset": "Nguồn lực kinh tế hiện tại do doanh nghiệp kiểm soát từ sự kiện đã xảy ra và có khả năng tạo lợi ích kinh tế trong tương lai.",
    "liability": "Nghĩa vụ hiện tại phát sinh từ sự kiện quá khứ, khiến doanh nghiệp phải chuyển giao một nguồn lực kinh tế trong tương lai.",
    "equity": "Phần lợi ích còn lại của chủ sở hữu trong tài sản sau khi trừ toàn bộ nợ phải trả; equity không phải là một khoản tiền riêng biệt.",
    "revenue": "Sự gia tăng vốn chủ sở hữu do hoạt động tạo doanh thu, không bao gồm vốn góp của chủ sở hữu. Thu tiền chưa chắc đã là doanh thu.",
    "expense": "Sự giảm lợi ích kinh tế do tài sản bị tiêu dùng hoặc nghĩa vụ phát sinh trong kỳ, làm giảm vốn chủ sở hữu nhưng không phải là phân phối cho chủ sở hữu.",
    "retained earnings": "Lợi nhuận tích lũy còn giữ lại trong doanh nghiệp sau khi cộng lợi nhuận và trừ cổ tức/phân phối cho chủ sở hữu.",
    "statement of financial position": "Báo cáo trình bày tài sản, nợ phải trả và vốn chủ sở hữu tại một thời điểm cụ thể; còn gọi là bảng cân đối kế toán trong nhiều tài liệu Việt Nam.",
    "statement of profit or loss": "Báo cáo trình bày doanh thu, chi phí và lợi nhuận hoặc lỗ trong một kỳ kế toán.",
    "statement of cash flows": "Báo cáo giải thích dòng tiền vào, dòng tiền ra và biến động thuần của tiền theo hoạt động kinh doanh, đầu tư và tài chính.",
    "debit": "Bên trái của tài khoản. Ghi Nợ không đồng nghĩa với tăng trong mọi trường hợp; phải xét loại tài khoản.",
    "credit": "Bên phải của tài khoản. Ghi Có không đồng nghĩa với giảm trong mọi trường hợp; phải xét loại tài khoản.",
    "normal balance": "Bên Nợ hoặc bên Có mà một loại tài khoản thường tăng và thường mang số dư cuối kỳ.",
    "journal": "Sổ ghi các nghiệp vụ theo trình tự thời gian, thể hiện đầy đủ tài khoản ghi Nợ, tài khoản ghi Có và số tiền.",
    "ledger": "Tập hợp các tài khoản dùng để nhóm mọi biến động theo từng đối tượng kế toán, giúp xác định số dư của từng tài khoản.",
    "posting": "Quá trình chuyển thông tin từ sổ nhật ký sang từng tài khoản tương ứng trong sổ cái.",
    "trial balance": "Danh sách số dư các tài khoản nhằm kiểm tra tổng số dư Nợ bằng tổng số dư Có. Cân bằng không có nghĩa là không còn sai sót.",
    "accrual basis": "Cơ sở ghi nhận doanh thu khi đã kiếm được và chi phí khi đã phát sinh, không phụ thuộc hoàn toàn vào thời điểm thu hoặc chi tiền.",
    "adjusting entry": "Bút toán cuối kỳ cập nhật các chênh lệch về thời điểm ghi nhận để doanh thu, chi phí, tài sản và nợ phải trả phản ánh đúng kỳ.",
    "prepaid expense": "Khoản đã trả tiền nhưng lợi ích chưa được sử dụng hết; ban đầu là tài sản và chuyển dần thành chi phí khi lợi ích được tiêu dùng.",
    "unearned revenue": "Khoản tiền đã nhận nhưng doanh nghiệp còn nghĩa vụ cung cấp hàng hóa hoặc dịch vụ; là nợ phải trả cho đến khi được thực hiện.",
    "accrued revenue": "Doanh thu đã kiếm được nhưng chưa thu tiền hoặc chưa ghi nhận; thường làm tăng khoản phải thu và doanh thu.",
    "accrued expense": "Chi phí đã phát sinh nhưng chưa thanh toán hoặc chưa ghi nhận; thường làm tăng chi phí và một khoản phải trả.",
    "depreciation": "Việc phân bổ có hệ thống giá trị phải khấu hao của tài sản hữu hình trong suốt thời gian sử dụng hữu ích, không phải phép định giá thị trường.",
    "accumulated depreciation": "Tài khoản điều chỉnh giảm tài sản, tích lũy toàn bộ khấu hao đã ghi nhận từ khi tài sản được đưa vào sử dụng.",
    "book value / carrying amount": "Giá trị ghi sổ còn lại của tài sản; trong mô hình cơ bản bằng nguyên giá trừ khấu hao lũy kế.",
    "closing entry": "Bút toán chuyển số dư tài khoản tạm thời sang lợi nhuận giữ lại và đưa các tài khoản tạm thời về 0 cho kỳ mới.",
    "temporary account": "Tài khoản đo lường hoạt động của một kỳ, gồm doanh thu, chi phí và cổ tức; phải được khóa sổ cuối kỳ.",
    "permanent account": "Tài khoản có số dư được chuyển sang kỳ sau, chủ yếu là tài sản, nợ phải trả và các tài khoản vốn chủ sở hữu thường xuyên.",
    "post-closing trial balance": "Bảng cân đối thử lập sau khóa sổ, chỉ còn các tài khoản thường xuyên và dùng để kiểm tra điểm khởi đầu của kỳ mới.",
    "inventory": "Tài sản gồm hàng hóa giữ để bán, sản phẩm đang sản xuất hoặc nguyên vật liệu dùng trong sản xuất, tùy loại hình doanh nghiệp.",
    "cost of goods sold": "Giá trị ghi sổ của hàng tồn kho đã bán trong kỳ; là chi phí trực tiếp được so sánh với doanh thu bán hàng.",
    "gross profit": "Phần chênh lệch giữa doanh thu thuần và giá vốn hàng bán, chưa trừ các chi phí hoạt động khác.",
    "perpetual inventory system": "Phương pháp theo dõi hàng tồn kho liên tục; Inventory và Cost of Goods Sold được cập nhật khi mua và khi bán.",
    "fob shipping point": "Điều kiện trong bài học mà quyền sở hữu và trách nhiệm vận chuyển thường chuyển cho người mua khi hàng được giao cho đơn vị vận chuyển tại điểm đi.",
    "fob destination": "Điều kiện trong bài học mà người bán thường giữ quyền sở hữu và chịu vận chuyển đến khi hàng tới điểm đến.",
    "consignment": "Hình thức hàng gửi bán: bên nhận giữ hoặc bán hàng nhưng không sở hữu hàng; hàng vẫn thuộc bên gửi cho đến khi bán.",
    "fifo": "Phương pháp giả định các đơn vị có chi phí phát sinh sớm nhất được tính vào giá vốn trước; tồn cuối kỳ gồm các lớp chi phí mới hơn.",
    "average cost": "Phương pháp phân bổ chi phí dựa trên đơn giá bình quân; trong hệ thống kê khai thường xuyên, bình quân được tính lại sau mỗi lần mua.",
    "net realizable value": "Giá bán ước tính trong điều kiện kinh doanh bình thường trừ chi phí ước tính để hoàn thành và bán hàng.",
    "inventory turnover": "Chỉ số số lần hàng tồn kho bình quân được bán hoặc luân chuyển trong kỳ, thường bằng giá vốn chia tồn kho bình quân.",
    "operating activities": "Dòng tiền chủ yếu liên quan đến hoạt động tạo doanh thu thường xuyên và các khoản không thuộc đầu tư hoặc tài chính theo mô hình học.",
    "investing activities": "Dòng tiền liên quan đến mua, bán tài sản dài hạn, khoản đầu tư và một số khoản cho vay.",
    "financing activities": "Dòng tiền làm thay đổi quy mô hoặc cơ cấu vốn vay và vốn chủ sở hữu, như vay, trả nợ gốc, phát hành cổ phiếu hoặc trả cổ tức.",
    "indirect method": "Phương pháp xác định dòng tiền kinh doanh bằng cách bắt đầu từ lợi nhuận và điều chỉnh khoản phi tiền tệ cùng biến động vốn lưu động.",
    "cash equivalent": "Khoản đầu tư ngắn hạn có tính thanh khoản cao, dễ chuyển thành lượng tiền xác định và có rủi ro biến động giá không đáng kể.",
    "accounting equation analysis": "Cách theo dõi từng nghiệp vụ bằng tác động lên Tài sản = Nợ phải trả + Vốn chủ sở hữu và luôn kiểm tra phương trình còn cân bằng.",
    "correcting entry": "Bút toán sửa một sai sót kế toán bằng cách loại bỏ ảnh hưởng sai và ghi nhận đúng ảnh hưởng cần có.",
    "accounting worksheet": "Bảng làm việc hỗ trợ tổ chức số dư chưa điều chỉnh, điều chỉnh, số dư đã điều chỉnh và số liệu chuyển sang báo cáo tài chính; không phải sổ kế toán chính thức.",
    "freight-in": "Chi phí vận chuyển do người mua chịu để đưa hàng đến địa điểm và trạng thái sẵn sàng bán; thường được tính vào giá trị hàng tồn kho.",
    "freight-out": "Chi phí giao hàng do người bán chịu; thường là chi phí bán hàng, không cộng vào giá trị hàng tồn kho của người bán.",
    "sales returns and allowances": "Tài khoản điều chỉnh giảm doanh thu do khách trả lại hàng hoặc được giảm giá sau bán.",
    "sales discount": "Khoản giảm trừ doanh thu dành cho khách thanh toán sớm theo điều kiện tín dụng đã nêu.",
    "tabular analysis": "Phân tích dạng bảng theo dõi tác động của từng nghiệp vụ lên từng tài khoản và đối chiếu phương trình kế toán.",
    "segregation of duties": "Nguyên tắc tách biệt trách nhiệm phê duyệt, giữ tài sản, ghi sổ và kiểm tra để một người không thể tự thực hiện rồi che giấu sai phạm.",
    "bank reconciliation": "Quy trình giải thích và điều chỉnh chênh lệch giữa số dư tiền theo sổ doanh nghiệp và theo sao kê ngân hàng.",
    "allowance for doubtful accounts": "Tài khoản điều chỉnh giảm khoản phải thu, phản ánh phần ước tính không thu hồi được.",
    "maturity value": "Tổng số tiền phải thu hoặc phải trả khi thương phiếu đáo hạn, thường gồm tiền gốc cộng lãi.",
    "plant asset": "Tài sản hữu hình dùng cho hoạt động kinh doanh trên một kỳ, không được nắm giữ để bán trong hoạt động thông thường.",
    "residual value": "Giá trị ước tính thu hồi được khi kết thúc thời gian sử dụng hữu ích, sau khi trừ chi phí thanh lý nếu có.",
    "depletion": "Việc phân bổ chi phí của tài nguyên thiên nhiên theo lượng tài nguyên được khai thác.",
    "amortization": "Việc phân bổ có hệ thống nguyên giá của tài sản vô hình có thời gian sử dụng hữu hạn trong suốt thời gian hữu ích.",
    "working capital": "Chênh lệch giữa tài sản ngắn hạn và nợ phải trả ngắn hạn, dùng để đánh giá khả năng đáp ứng nghĩa vụ ngắn hạn.",
    "current ratio": "Tỷ số tài sản ngắn hạn chia nợ phải trả ngắn hạn; là chỉ báo tổng quát chứ không đảm bảo chắc chắn khả năng thanh toán.",
    "bond discount": "Phần chênh lệch khi giá phát hành trái phiếu thấp hơn mệnh giá; làm giá trị ghi sổ ban đầu thấp hơn mệnh giá.",
    "bond premium": "Phần chênh lệch khi giá phát hành trái phiếu cao hơn mệnh giá; làm giá trị ghi sổ ban đầu cao hơn mệnh giá.",
    "treasury shares": "Cổ phiếu do chính công ty phát hành rồi mua lại và đang nắm giữ; được trình bày như khoản giảm vốn chủ sở hữu.",
    "share split": "Việc tăng số lượng cổ phiếu lưu hành và giảm tương ứng giá trị trên mỗi cổ phiếu mà không làm thay đổi tổng vốn chủ sở hữu.",
    "equity method": "Phương pháp ghi nhận khoản đầu tư khi nhà đầu tư có ảnh hưởng đáng kể, bao gồm phần lợi nhuận hoặc lỗ tương ứng của bên được đầu tư.",
    "horizontal analysis": "Phân tích mức thay đổi số tiền và tỷ lệ phần trăm của cùng một chỉ tiêu qua các kỳ.",
    "vertical analysis": "Phân tích mỗi chỉ tiêu như một tỷ lệ phần trăm của một số gốc trong cùng báo cáo, còn gọi là phân tích quy mô chung.",
    "solvency": "Khả năng đáp ứng các nghĩa vụ dài hạn và duy trì sức khỏe tài chính trong dài hạn.",
    "profitability": "Khả năng tạo lợi nhuận so với doanh thu, tài sản, vốn chủ sở hữu hoặc một cơ sở đo lường phù hợp."
  };

  const mistranslations = [
    { wrong: "Revenue = lợi nhuận", right: "Revenue = doanh thu", why: "Lợi nhuận là phần còn lại sau khi lấy doanh thu trừ chi phí." },
    { wrong: "Retained earnings = chi phí giữ lại", right: "Retained earnings = lợi nhuận giữ lại", why: "Đây là lợi nhuận tích lũy chưa phân phối, không phải chi phí." },
    { wrong: "Debit = tăng; Credit = giảm", right: "Debit = bên Nợ; Credit = bên Có", why: "Tăng hay giảm phụ thuộc loại tài khoản." },
    { wrong: "Unearned revenue = doanh thu đã kiếm được", right: "Unearned revenue = doanh thu chưa thực hiện / nợ phải trả", why: "Doanh nghiệp đã nhận tiền nhưng vẫn còn nghĩa vụ cung cấp hàng hóa hoặc dịch vụ." },
    { wrong: "Trial balance = bảng cân đối kế toán", right: "Trial balance = bảng cân đối thử", why: "Trial balance kiểm tra số dư Nợ–Có; statement of financial position mới là báo cáo tình hình tài chính." }
  ];

  const exercises = [
    {
      chapter: "ch1", title: "Bài tổng hợp phương trình kế toán", level: "Core", source: "Course-original · aligned with Ch1 LO3–LO5",
      prompt: "Ngày 1, cổ đông góp $40,000 tiền mặt. Doanh nghiệp mua thiết bị $12,000 bằng tiền; cung cấp dịch vụ $8,000, trong đó thu $3,000 và còn phải thu $5,000; trả tiền thuê tháng $1,500; thu $2,000 khoản phải thu; trả cổ tức $1,000. Hãy phân tích từng nghiệp vụ và xác định số dư cuối kỳ.",
      solution: [
        "Góp vốn: Cash +40,000; Share Capital +40,000. Đây là vốn góp, không phải doanh thu.",
        "Mua thiết bị bằng tiền: Equipment +12,000; Cash −12,000. Tổng tài sản không đổi.",
        "Cung cấp dịch vụ: Cash +3,000; Accounts Receivable +5,000; Revenue +8,000.",
        "Trả tiền thuê: Cash −1,500; Rent Expense +1,500 → Equity giảm 1,500.",
        "Thu khoản phải thu: Cash +2,000; A/R −2,000. Không ghi thêm doanh thu.",
        "Trả cổ tức: Cash −1,000; Dividends +1,000 → Equity giảm 1,000; không phải expense.",
        "Cuối kỳ: Cash 30,500; A/R 3,000; Equipment 12,000 → Assets 45,500. Equity = 40,000 + 8,000 − 1,500 − 1,000 = 45,500. Phương trình cân bằng."
      ]
    },
    {
      chapter: "ch2", title: "Midterm-style: Journal → Ledger → Unadjusted Trial Balance", level: "Exam", source: "Course-original · modeled on P2.5 and class format",
      prompt: "Số dư đầu kỳ: Cash $10,000; Equipment $6,000; Accounts Payable $2,000; Notes Payable $4,000; Share Capital $10,000. Trong tháng: (1) thu $5,000 dịch vụ; (2) mua supplies $1,200 on account; (3) trả hết AP đầu kỳ; (4) vay ngân hàng $6,000 bằng note; (5) trả kỳ đầu $530 gồm $500 gốc và $30 lãi; (6) trả lương $1,500. Journalize, post và lập unadjusted trial balance.",
      solution: [
        "(1) Dr Cash 5,000 / Cr Service Revenue 5,000.",
        "(2) Dr Supplies 1,200 / Cr Accounts Payable 1,200.",
        "(3) Dr Accounts Payable 2,000 / Cr Cash 2,000. Đây là trả nợ cũ, không ghi expense.",
        "(4) Dr Cash 6,000 / Cr Notes Payable 6,000.",
        "(5) Dr Notes Payable 500; Dr Interest Expense 30 / Cr Cash 530. Phải tách tiền gốc và tiền lãi.",
        "(6) Dr Salaries Expense 1,500 / Cr Cash 1,500.",
        "Số dư: Cash 16,970; Equipment 6,000; Supplies 1,200; AP 1,200; Notes Payable 9,500; Share Capital 10,000; Service Revenue 5,000; Salaries Expense 1,500; Interest Expense 30.",
        "Trial balance: tổng Debit = tổng Credit = $25,700. Đây là unadjusted trial balance vì chưa có bút toán điều chỉnh cuối kỳ."
      ]
    },
    {
      chapter: "ch3", title: "Gói điều chỉnh cuối kỳ", level: "Exam", source: "Course-original · aligned with P3.1/P3.4",
      prompt: "Ngày 31/12: Prepaid Insurance có $2,400 cho hợp đồng 12 tháng bắt đầu 1/10; Supplies trên sổ $1,500 nhưng kiểm kê còn $400; Unearned Revenue $6,000, trong đó 2/3 đã thực hiện; lương chưa trả $900; note $12,000, lãi 10%/năm đã tồn tại 2 tháng. Lập adjusting entries.",
      solution: [
        "Insurance đã dùng 3/12 × 2,400 = 600: Dr Insurance Expense 600 / Cr Prepaid Insurance 600. Asset còn 1,800.",
        "Supplies đã dùng = 1,500 − 400 = 1,100: Dr Supplies Expense 1,100 / Cr Supplies 1,100.",
        "Revenue đã earned = 6,000 × 2/3 = 4,000: Dr Unearned Revenue 4,000 / Cr Service Revenue 4,000. Liability còn 2,000.",
        "Lương đã phát sinh: Dr Salaries Expense 900 / Cr Salaries Payable 900.",
        "Interest = 12,000 × 10% × 2/12 = 200: Dr Interest Expense 200 / Cr Interest Payable 200.",
        "Mỗi bút toán điều chỉnh ảnh hưởng ít nhất một tài khoản báo cáo kết quả và một tài khoản báo cáo tình hình tài chính; không bút toán nào dùng Cash."
      ]
    },
    {
      chapter: "ch4", title: "Khóa sổ và lợi nhuận giữ lại", level: "Core", source: "Course-original · aligned with Ch4",
      prompt: "Cuối năm: Service Revenue $28,000; tổng expenses $18,500; Dividends $2,000; beginning Retained Earnings $7,000. Lập bốn bước closing và tính ending Retained Earnings.",
      solution: [
        "Đóng revenue: Dr Service Revenue 28,000 / Cr Income Summary 28,000.",
        "Đóng expenses: Dr Income Summary 18,500 / Cr các expense accounts 18,500.",
        "Income Summary còn credit 9,500 = net income: Dr Income Summary 9,500 / Cr Retained Earnings 9,500.",
        "Đóng dividends: Dr Retained Earnings 2,000 / Cr Dividends 2,000.",
        "Ending Retained Earnings = 7,000 + 9,500 − 2,000 = 14,500. Sau khóa sổ, revenue, expenses, dividends và Income Summary đều bằng 0."
      ]
    },
    {
      chapter: "ch5", title: "Buyer–seller entries trong hệ thống perpetual", level: "Applied", source: "Course-original · aligned with P5.1",
      prompt: "Seller bán hàng on account $8,000, giá vốn $4,800, FOB destination và trả freight $300. Khách trả lại hàng giá bán $1,000, giá vốn $600; sau đó thanh toán trong điều kiện 2/10, n/30. Lập bút toán bên seller.",
      solution: [
        "Ngày bán: Dr Accounts Receivable 8,000 / Cr Sales Revenue 8,000.",
        "Đồng thời: Dr Cost of Goods Sold 4,800 / Cr Inventory 4,800.",
        "Freight do seller chịu vì FOB destination: Dr Freight-out 300 / Cr Cash 300.",
        "Hàng trả lại: Dr Sales Returns and Allowances 1,000 / Cr Accounts Receivable 1,000.",
        "Khôi phục hàng theo cost: Dr Inventory 600 / Cr Cost of Goods Sold 600.",
        "Khoản còn phải thu = 7,000; discount = 2% × 7,000 = 140: Dr Cash 6,860; Dr Sales Discounts 140 / Cr Accounts Receivable 7,000."
      ]
    },
    {
      chapter: "ch6", title: "Perpetual FIFO theo lớp chi phí", level: "Calculation", source: "Course-original · aligned with P6.8",
      prompt: "Beginning inventory 100 units @ $10. Mua 150 @ $12; bán 180; mua 100 @ $13; bán 90. Tính COGS từng lần bán và ending inventory theo perpetual FIFO.",
      solution: [
        "Lần bán 180: lấy 100 @10 = 1,000 và 80 @12 = 960 → COGS = 1,960. Còn 70 @12.",
        "Sau khi mua 100 @13: layers = 70 @12 + 100 @13.",
        "Lần bán 90: lấy 70 @12 = 840 và 20 @13 = 260 → COGS = 1,100.",
        "Ending inventory = 80 @13 = 1,040. Total COGS = 1,960 + 1,100 = 3,060.",
        "Kiểm tra: total cost available 100×10 + 150×12 + 100×13 = 4,100; COGS 3,060 + ending 1,040 = 4,100."
      ]
    },
    {
      chapter: "ch7", title: "Bank reconciliation hoàn chỉnh", level: "Applied", source: "Course-original · aligned with Ch7",
      prompt: "Bank balance $24,800; deposit in transit $3,200; outstanding checks $2,750; ngân hàng ghi nhầm check $600 thành $900. Book balance $26,330; bank service charge $80; NSF check $750; interest collected $50. Reconcile và nêu bút toán.",
      solution: [
        "Adjusted bank = 24,800 + 3,200 − 2,750 + 300 = 25,550. Sai sót ngân hàng 300 được cộng lại.",
        "Adjusted book = 26,330 − 80 − 750 + 50 = 25,550.",
        "Ghi phí ngân hàng: Dr Bank Service Charge Expense 80 / Cr Cash 80.",
        "NSF: Dr Accounts Receivable 750 / Cr Cash 750.",
        "Lãi ngân hàng thu hộ: Dr Cash 50 / Cr Interest Revenue 50.",
        "Không journalize deposit in transit và outstanding checks vì doanh nghiệp đã ghi sổ các khoản này trước đó."
      ]
    },
    {
      chapter: "ch8", title: "Notes receivable và expected credit loss", level: "Applied", source: "Course-original · aligned with Ch8",
      prompt: "Doanh nghiệp nhận note $20,000, lãi 9%, kỳ hạn 90 ngày. Cuối kỳ đã trôi qua 30 ngày. Accounts Receivable khác là $40,000; ước tính 3% không thu được; Allowance hiện có credit $300. Lập các điều chỉnh.",
      solution: [
        "Interest 90 ngày = 20,000 × 9% × 90/360 = 450; phần dồn tích 30 ngày = 150.",
        "Điều chỉnh note: Dr Interest Receivable 150 / Cr Interest Revenue 150.",
        "Allowance cần có cuối kỳ = 40,000 × 3% = 1,200.",
        "Allowance đã có credit 300 nên điều chỉnh thêm 900: Dr Bad Debt Expense 900 / Cr Allowance for Doubtful Accounts 900.",
        "Net realizable value của A/R = 40,000 − 1,200 = 38,800."
      ]
    },
    {
      chapter: "ch9", title: "Khấu hao và thanh lý tài sản", level: "Calculation", source: "Course-original · aligned with Ch9",
      prompt: "Máy có cost $50,000, residual value $5,000, useful life 5 years, straight-line. Sau đúng 3 năm, máy được bán $20,000. Tính depreciation, carrying amount và journal entry thanh lý.",
      solution: [
        "Annual depreciation = (50,000 − 5,000) ÷ 5 = 9,000.",
        "Accumulated depreciation sau 3 năm = 27,000; carrying amount = 50,000 − 27,000 = 23,000.",
        "Proceeds 20,000 < carrying amount 23,000 → loss = 3,000.",
        "Entry: Dr Cash 20,000; Dr Accumulated Depreciation 27,000; Dr Loss on Disposal 3,000 / Cr Equipment 50,000.",
        "Kiểm tra: tổng Debit = 50,000 = Credit; cost và accumulated depreciation đều được loại khỏi sổ."
      ]
    },
    {
      chapter: "ch10", title: "Nhận diện current liabilities", level: "Core", source: "Course-original · aligned with Ch10",
      prompt: "Cuối tháng: salaries đã phát sinh chưa trả $2,400; note $30,000, lãi 8%/năm tồn tại một tháng; nhận trước $5,000 và chưa cung cấp dịch vụ. Lập entry và giải thích classification.",
      solution: [
        "Salary accrual: Dr Salaries Expense 2,400 / Cr Salaries Payable 2,400.",
        "Interest = 30,000 × 8% × 1/12 = 200: Dr Interest Expense 200 / Cr Interest Payable 200.",
        "Advance collection: Dr Cash 5,000 / Cr Unearned Revenue 5,000.",
        "Nếu các khoản dự kiến thanh toán hoặc thực hiện trong 12 tháng/chu kỳ hoạt động, chúng được trình bày là current liabilities.",
        "Không ghi Cash trong hai bút toán dồn tích vì tiền chưa được trả."
      ]
    },
    {
      chapter: "ch11", title: "Bond discount theo effective interest", level: "Advanced", source: "Course-original · simplified effective-interest model",
      prompt: "Bond face $100,000, coupon 8% trả hàng năm, market yield 10%, issue price $95,000. Tính cash interest, interest expense năm đầu, discount amortization và carrying amount cuối năm.",
      solution: [
        "Cash interest = face × stated rate = 100,000 × 8% = 8,000.",
        "Interest expense = beginning carrying amount × market yield = 95,000 × 10% = 9,500.",
        "Discount amortization = 9,500 − 8,000 = 1,500.",
        "Entry: Dr Interest Expense 9,500 / Cr Discount on Bonds Payable 1,500 / Cr Cash 8,000.",
        "Ending carrying amount = 95,000 + 1,500 = 96,500; discount giảm dần và carrying amount tiến về face value."
      ]
    },
    {
      chapter: "ch12", title: "Share capital, treasury shares và cash dividend", level: "Applied", source: "Course-original · aligned with Ch12",
      prompt: "Công ty phát hành 10,000 ordinary shares, nominal value $1, thu $80,000; mua lại 1,000 shares với giá $9; sau đó công bố và trả cash dividend $0.50 trên mỗi share đang lưu hành. Lập entries và tính thay đổi ròng equity.",
      solution: [
        "Phát hành: Dr Cash 80,000 / Cr Share Capital—Ordinary 10,000 / Cr Share Premium 70,000.",
        "Mua treasury shares: Dr Treasury Shares 9,000 / Cr Cash 9,000. Treasury Shares là khoản giảm equity.",
        "Outstanding shares = 10,000 − 1,000 = 9,000; dividend = 9,000 × 0.50 = 4,500.",
        "Khi công bố: Dr Retained Earnings (hoặc Dividends) 4,500 / Cr Dividends Payable 4,500; khi trả: Dr Dividends Payable / Cr Cash.",
        "Thay đổi ròng equity từ các nghiệp vụ = +80,000 − 9,000 − 4,500 = +66,500."
      ]
    },
    {
      chapter: "ch13", title: "Debt investment đo lường theo FVPL", level: "Applied", source: "Course-original · simplified Ch13 case",
      prompt: "Doanh nghiệp mua debt investment $50,000, coupon 6% vào đầu năm; nhận đủ lãi cuối năm. Khoản đầu tư được phân loại trading/FVPL và fair value cuối năm là $52,000. Lập entries chính.",
      solution: [
        "Mua đầu tư: Dr Debt Investments 50,000 / Cr Cash 50,000.",
        "Cash interest = 50,000 × 6% = 3,000: Dr Cash 3,000 / Cr Interest Revenue 3,000.",
        "Fair value tăng 2,000: Dr Fair Value Adjustment 2,000 / Cr Unrealized Gain—Income 2,000 theo mô hình FVPL của bài.",
        "Carrying amount trình bày cuối năm = 52,000.",
        "Nếu đề cho classification khác, nơi ghi nhận biến động fair value có thể khác; phải đọc classification trước khi journalize."
      ]
    },
    {
      chapter: "ch14", title: "Statement of cash flows — indirect method", level: "Exam", source: "Course-original · aligned with P14.3/P14.9",
      prompt: "Net income $60,000; depreciation $12,000; gain on sale $3,000; A/R tăng $8,000; inventory giảm $5,000; A/P giảm $4,000. Mua equipment $35,000; bán equipment thu $10,000; phát hành shares $20,000; trả debt principal $15,000; trả dividends $8,000. Beginning cash $18,000. Lập ba phần và reconcile cash.",
      solution: [
        "CFO = 60,000 + 12,000 − 3,000 − 8,000 + 5,000 − 4,000 = 62,000.",
        "CFI = proceeds 10,000 − purchase 35,000 = −25,000.",
        "CFF = share issue 20,000 − debt principal 15,000 − dividends 8,000 = −3,000.",
        "Net increase in cash = 62,000 − 25,000 − 3,000 = 34,000.",
        "Ending cash = 18,000 + 34,000 = 52,000. Gain 3,000 bị trừ khỏi CFO vì cash proceeds đầy đủ đã nằm ở investing."
      ]
    },
    {
      chapter: "ch15", title: "Ratio analysis có diễn giải", level: "Analysis", source: "Course-original · aligned with Ch15",
      prompt: "Sales tăng từ $500,000 lên $575,000; COGS tăng từ $300,000 lên $360,000. Năm hiện tại: current assets $150,000; current liabilities $75,000; average inventory $80,000; net income $69,000; average total assets $345,000. Tính và giải thích.",
      solution: [
        "Horizontal sales growth = (575,000 − 500,000) ÷ 500,000 = 15%.",
        "Gross margin hiện tại = (575,000 − 360,000) ÷ 575,000 = 37.4%; năm trước = 40%. Sales tăng nhưng biên gộp giảm.",
        "Current ratio = 150,000 ÷ 75,000 = 2.0.",
        "Inventory turnover = 360,000 ÷ 80,000 = 4.5 lần.",
        "ROA = 69,000 ÷ 345,000 = 20%.",
        "Kết luận phải có bối cảnh ngành và chất lượng tài sản: current ratio cao chưa chắc tốt nếu inventory chậm luân chuyển; tăng doanh thu chưa chắc cải thiện profitability khi COGS tăng nhanh hơn."
      ]
    }
  ];

  window.AM_ENHANCEMENTS = { glossaryVi, mistranslations, exercises };
})();


/* ===== content/english-content.js ===== */

(function () {
  if (!window.AM_ENHANCEMENTS) return;

  window.AM_ENHANCEMENTS.englishExercises = [
    {
      chapter: "ch1",
      title: "Comprehensive accounting-equation analysis",
      level: "Core",
      source: "Course-original · aligned with Ch1 LO3–LO5",
      prompt: "On Day 1, shareholders invest $40,000 cash. The company buys equipment for $12,000 cash; performs $8,000 of services, collecting $3,000 and billing $5,000; pays monthly rent of $1,500; collects $2,000 from a receivable; and pays a $1,000 dividend. Analyze every transaction and determine the ending balances.",
      solution: [
        "Share investment: Cash +40,000; Share Capital +40,000. This is an owner contribution, not revenue.",
        "Equipment purchase: Equipment +12,000; Cash −12,000. Total assets do not change.",
        "Services performed: Cash +3,000; Accounts Receivable +5,000; Service Revenue +8,000.",
        "Rent payment: Cash −1,500; Rent Expense +1,500, so equity decreases by 1,500.",
        "Receivable collection: Cash +2,000; Accounts Receivable −2,000. No new revenue is recorded.",
        "Dividend: Cash −1,000; Dividends +1,000, so equity decreases. A dividend is not an expense.",
        "Ending balances: Cash 30,500; Accounts Receivable 3,000; Equipment 12,000; total assets 45,500. Equity = 40,000 + 8,000 − 1,500 − 1,000 = 45,500. The equation balances."
      ]
    },
    {
      chapter: "ch2",
      title: "Midterm-style: Journal → Ledger → Unadjusted Trial Balance",
      level: "Exam",
      source: "Course-original · modeled on P2.5 and the class format",
      prompt: "Opening balances are Cash $10,000; Equipment $6,000; Accounts Payable $2,000; Notes Payable $4,000; and Share Capital $10,000. During the month: (1) collect $5,000 for services; (2) buy supplies for $1,200 on account; (3) pay the opening Accounts Payable; (4) borrow $6,000 by signing a note; (5) pay the first $530 instalment, including $500 principal and $30 interest; and (6) pay salaries of $1,500. Journalize, post, and prepare an unadjusted trial balance.",
      solution: [
        "(1) Dr Cash 5,000 / Cr Service Revenue 5,000.",
        "(2) Dr Supplies 1,200 / Cr Accounts Payable 1,200.",
        "(3) Dr Accounts Payable 2,000 / Cr Cash 2,000. Paying an existing liability does not create a new expense.",
        "(4) Dr Cash 6,000 / Cr Notes Payable 6,000.",
        "(5) Dr Notes Payable 500; Dr Interest Expense 30 / Cr Cash 530. Separate principal from interest.",
        "(6) Dr Salaries Expense 1,500 / Cr Cash 1,500.",
        "Ending balances: Cash 16,970; Equipment 6,000; Supplies 1,200; Accounts Payable 1,200; Notes Payable 9,500; Share Capital 10,000; Service Revenue 5,000; Salaries Expense 1,500; Interest Expense 30.",
        "Unadjusted trial balance: total debits = total credits = $25,700. It is unadjusted because no end-of-period adjusting entries have been recorded."
      ]
    },
    {
      chapter: "ch3",
      title: "End-of-period adjusting-entry package",
      level: "Exam",
      source: "Course-original · aligned with P3.1/P3.4",
      prompt: "At 31 December: Prepaid Insurance has a $2,400 balance for a 12-month policy beginning 1 October; Supplies has a $1,500 ledger balance but only $400 remains; Unearned Revenue is $6,000 and two-thirds has been earned; unpaid salaries are $900; and a $12,000, 10% note has been outstanding for two months. Prepare all adjusting entries.",
      solution: [
        "Insurance used = 3/12 × 2,400 = 600: Dr Insurance Expense 600 / Cr Prepaid Insurance 600. The remaining asset is 1,800.",
        "Supplies used = 1,500 − 400 = 1,100: Dr Supplies Expense 1,100 / Cr Supplies 1,100.",
        "Revenue earned = 6,000 × 2/3 = 4,000: Dr Unearned Revenue 4,000 / Cr Service Revenue 4,000. The remaining liability is 2,000.",
        "Accrued salaries: Dr Salaries Expense 900 / Cr Salaries Payable 900.",
        "Accrued interest = 12,000 × 10% × 2/12 = 200: Dr Interest Expense 200 / Cr Interest Payable 200.",
        "Each adjusting entry affects at least one income-statement account and one statement-of-financial-position account. None uses Cash."
      ]
    },
    {
      chapter: "ch4",
      title: "Closing entries and retained earnings",
      level: "Core",
      source: "Course-original · aligned with Ch4",
      prompt: "At year-end, Service Revenue is $28,000, total expenses are $18,500, Dividends are $2,000, and beginning Retained Earnings is $7,000. Prepare the four closing steps and calculate ending Retained Earnings.",
      solution: [
        "Close revenue: Dr Service Revenue 28,000 / Cr Income Summary 28,000.",
        "Close expenses: Dr Income Summary 18,500 / Cr the individual expense accounts 18,500.",
        "Income Summary has a $9,500 credit balance, equal to net income: Dr Income Summary 9,500 / Cr Retained Earnings 9,500.",
        "Close dividends: Dr Retained Earnings 2,000 / Cr Dividends 2,000.",
        "Ending Retained Earnings = 7,000 + 9,500 − 2,000 = 14,500. Revenue, expenses, Dividends, and Income Summary all have zero balances after closing."
      ]
    },
    {
      chapter: "ch5",
      title: "Seller entries under a perpetual inventory system",
      level: "Applied",
      source: "Course-original · aligned with P5.1",
      prompt: "A seller makes an $8,000 sale on account. The inventory cost is $4,800. Terms are FOB destination, and the seller pays $300 freight. The customer returns goods with a $1,000 selling price and $600 cost, then pays within terms 2/10, n/30. Prepare the seller's entries.",
      solution: [
        "Record the sale: Dr Accounts Receivable 8,000 / Cr Sales Revenue 8,000.",
        "Record the cost flow: Dr Cost of Goods Sold 4,800 / Cr Inventory 4,800.",
        "Because terms are FOB destination, the seller bears freight: Dr Freight-out 300 / Cr Cash 300.",
        "Record the return at selling price: Dr Sales Returns and Allowances 1,000 / Cr Accounts Receivable 1,000.",
        "Restore the returned inventory at cost: Dr Inventory 600 / Cr Cost of Goods Sold 600.",
        "Remaining receivable = 7,000; discount = 2% × 7,000 = 140: Dr Cash 6,860; Dr Sales Discounts 140 / Cr Accounts Receivable 7,000."
      ]
    },
    {
      chapter: "ch6",
      title: "Perpetual FIFO by cost layer",
      level: "Calculation",
      source: "Course-original · aligned with P6.8",
      prompt: "Beginning inventory is 100 units at $10. The company buys 150 at $12, sells 180, buys 100 at $13, and sells 90. Calculate cost of goods sold for each sale and ending inventory under perpetual FIFO.",
      solution: [
        "First sale of 180 units: 100 × $10 = 1,000 plus 80 × $12 = 960; COGS = 1,960. The remaining layer is 70 units at $12.",
        "After buying 100 units at $13, the layers are 70 at $12 and 100 at $13.",
        "Second sale of 90 units: 70 × $12 = 840 plus 20 × $13 = 260; COGS = 1,100.",
        "Ending inventory = 80 × $13 = 1,040. Total COGS = 1,960 + 1,100 = 3,060.",
        "Check: total goods available cost = 100×10 + 150×12 + 100×13 = 4,100; COGS 3,060 + ending inventory 1,040 = 4,100."
      ]
    },
    {
      chapter: "ch7",
      title: "Complete bank reconciliation",
      level: "Applied",
      source: "Course-original · aligned with Ch7",
      prompt: "The bank balance is $24,800; a deposit in transit is $3,200; outstanding checks are $2,750; and the bank recorded a $600 check as $900. The book balance is $26,330; bank service charges are $80; an NSF check is $750; and interest collected by the bank is $50. Reconcile cash and prepare the required entries.",
      solution: [
        "Adjusted bank balance = 24,800 + 3,200 − 2,750 + 300 = 25,550. Add back the bank's $300 overstatement of the check.",
        "Adjusted book balance = 26,330 − 80 − 750 + 50 = 25,550.",
        "Service charge: Dr Bank Service Charge Expense 80 / Cr Cash 80.",
        "NSF check: Dr Accounts Receivable 750 / Cr Cash 750.",
        "Interest collected: Dr Cash 50 / Cr Interest Revenue 50.",
        "Do not journalize the deposit in transit or outstanding checks because the company has already recorded them."
      ]
    },
    {
      chapter: "ch8",
      title: "Notes receivable and expected credit losses",
      level: "Applied",
      source: "Course-original · aligned with Ch8",
      prompt: "A company accepts a $20,000, 9%, 90-day note. Thirty days have elapsed at year-end. Other Accounts Receivable total $40,000; 3% is estimated uncollectible; and Allowance for Doubtful Accounts currently has a $300 credit balance. Prepare the adjustments.",
      solution: [
        "Total 90-day interest = 20,000 × 9% × 90/360 = 450; accrued interest for 30 days = 150.",
        "Note adjustment: Dr Interest Receivable 150 / Cr Interest Revenue 150.",
        "Required ending allowance = 40,000 × 3% = 1,200.",
        "The allowance already has a 300 credit, so the additional adjustment is 900: Dr Bad Debt Expense 900 / Cr Allowance for Doubtful Accounts 900.",
        "Net realizable value of Accounts Receivable = 40,000 − 1,200 = 38,800."
      ]
    },
    {
      chapter: "ch9",
      title: "Depreciation and disposal of a plant asset",
      level: "Calculation",
      source: "Course-original · aligned with Ch9",
      prompt: "A machine costs $50,000, has a $5,000 residual value and a five-year useful life, and uses straight-line depreciation. After exactly three years it is sold for $20,000. Calculate depreciation, carrying amount, and the disposal entry.",
      solution: [
        "Annual depreciation = (50,000 − 5,000) ÷ 5 = 9,000.",
        "Accumulated depreciation after three years = 27,000; carrying amount = 50,000 − 27,000 = 23,000.",
        "Proceeds of 20,000 are below the 23,000 carrying amount, so the loss is 3,000.",
        "Entry: Dr Cash 20,000; Dr Accumulated Depreciation 27,000; Dr Loss on Disposal 3,000 / Cr Equipment 50,000.",
        "Check: total debits = 50,000 = total credits; both cost and accumulated depreciation are removed from the ledger."
      ]
    },
    {
      chapter: "ch10",
      title: "Recognizing current liabilities",
      level: "Core",
      source: "Course-original · aligned with Ch10",
      prompt: "At month-end, unpaid salaries of $2,400 have been incurred; a $30,000, 8% note has been outstanding for one month; and the company has collected $5,000 before providing any service. Prepare the entries and explain classification.",
      solution: [
        "Salary accrual: Dr Salaries Expense 2,400 / Cr Salaries Payable 2,400.",
        "Interest = 30,000 × 8% × 1/12 = 200: Dr Interest Expense 200 / Cr Interest Payable 200.",
        "Advance collection: Dr Cash 5,000 / Cr Unearned Revenue 5,000.",
        "If the obligations are expected to be settled or performed within twelve months or the operating cycle, they are classified as current liabilities.",
        "Cash does not appear in the two accrual entries because no cash has yet been paid."
      ]
    },
    {
      chapter: "ch11",
      title: "Bond discount using effective interest",
      level: "Advanced",
      source: "Course-original · simplified effective-interest model",
      prompt: "A $100,000 face-value bond pays an 8% annual coupon. The market yield is 10%, and the issue price is $95,000. Calculate first-year cash interest, interest expense, discount amortization, and ending carrying amount.",
      solution: [
        "Cash interest = face value × stated rate = 100,000 × 8% = 8,000.",
        "Interest expense = beginning carrying amount × market yield = 95,000 × 10% = 9,500.",
        "Discount amortization = 9,500 − 8,000 = 1,500.",
        "Entry: Dr Interest Expense 9,500 / Cr Discount on Bonds Payable 1,500 / Cr Cash 8,000.",
        "Ending carrying amount = 95,000 + 1,500 = 96,500. The discount decreases and carrying amount moves toward face value."
      ]
    },
    {
      chapter: "ch12",
      title: "Share capital, treasury shares, and a cash dividend",
      level: "Applied",
      source: "Course-original · aligned with Ch12",
      prompt: "A company issues 10,000 ordinary shares with $1 nominal value for $80,000; reacquires 1,000 shares for $9 each; then declares and pays a $0.50 cash dividend on each outstanding share. Prepare the entries and calculate the net change in equity.",
      solution: [
        "Issue shares: Dr Cash 80,000 / Cr Share Capital—Ordinary 10,000 / Cr Share Premium 70,000.",
        "Reacquire shares: Dr Treasury Shares 9,000 / Cr Cash 9,000. Treasury Shares is a contra-equity account.",
        "Outstanding shares = 10,000 − 1,000 = 9,000; dividend = 9,000 × 0.50 = 4,500.",
        "Declaration: Dr Retained Earnings (or Dividends) 4,500 / Cr Dividends Payable 4,500. Payment: Dr Dividends Payable / Cr Cash 4,500.",
        "Net equity change = +80,000 − 9,000 − 4,500 = +66,500."
      ]
    },
    {
      chapter: "ch13",
      title: "Debt investment measured at FVPL",
      level: "Applied",
      source: "Course-original · simplified Ch13 case",
      prompt: "At the beginning of the year, a company buys a $50,000 debt investment paying a 6% coupon and receives the full annual interest. The investment is classified as trading/FVPL, and year-end fair value is $52,000. Prepare the main entries.",
      solution: [
        "Purchase: Dr Debt Investments 50,000 / Cr Cash 50,000.",
        "Cash interest = 50,000 × 6% = 3,000: Dr Cash 3,000 / Cr Interest Revenue 3,000.",
        "Fair value increases by 2,000: Dr Fair Value Adjustment 2,000 / Cr Unrealized Gain—Income 2,000 under the exercise's FVPL model.",
        "Ending carrying amount is 52,000.",
        "A different classification may place the fair-value change elsewhere. Always identify classification before journalizing."
      ]
    },
    {
      chapter: "ch14",
      title: "Statement of cash flows — indirect method",
      level: "Exam",
      source: "Course-original · aligned with P14.3/P14.9",
      prompt: "Net income is $60,000; depreciation is $12,000; gain on sale is $3,000; Accounts Receivable increases $8,000; inventory decreases $5,000; and Accounts Payable decreases $4,000. Equipment purchases are $35,000; equipment sale proceeds are $10,000; shares issued are $20,000; debt principal paid is $15,000; dividends paid are $8,000; and beginning cash is $18,000. Prepare all three sections and reconcile cash.",
      solution: [
        "Cash flow from operating activities = 60,000 + 12,000 − 3,000 − 8,000 + 5,000 − 4,000 = 62,000.",
        "Cash flow from investing activities = sale proceeds 10,000 − equipment purchase 35,000 = −25,000.",
        "Cash flow from financing activities = share issue 20,000 − debt principal 15,000 − dividends 8,000 = −3,000.",
        "Net increase in cash = 62,000 − 25,000 − 3,000 = 34,000.",
        "Ending cash = 18,000 + 34,000 = 52,000. Subtract the 3,000 gain from CFO because the full cash proceeds already appear in investing activities."
      ]
    },
    {
      chapter: "ch15",
      title: "Ratio analysis with interpretation",
      level: "Analysis",
      source: "Course-original · aligned with Ch15",
      prompt: "Sales rise from $500,000 to $575,000, while cost of goods sold rises from $300,000 to $360,000. Current-year current assets are $150,000; current liabilities $75,000; average inventory $80,000; net income $69,000; and average total assets $345,000. Calculate and interpret the relevant measures.",
      solution: [
        "Horizontal sales growth = (575,000 − 500,000) ÷ 500,000 = 15%.",
        "Current gross margin = (575,000 − 360,000) ÷ 575,000 = 37.4%; prior-year gross margin = 40%. Sales increased, but gross margin declined.",
        "Current ratio = 150,000 ÷ 75,000 = 2.0.",
        "Inventory turnover = 360,000 ÷ 80,000 = 4.5 times.",
        "Return on assets = 69,000 ÷ 345,000 = 20%.",
        "Interpret with industry context and asset quality. A high current ratio may be weak if inventory moves slowly, and sales growth may not improve profitability when cost of goods sold grows faster."
      ]
    }
  ];
})();


/* ===== app.js ===== */

(function () {
  "use strict";

  const D = window.ACCOUNTING_DATA || {};
  const Deep = window.AccountingDeepTheory || {};
  const Extra = window.AM_ENHANCEMENTS || { glossaryVi: {}, mistranslations: [], exercises: [] };
  const main = document.getElementById("main");
  const header = document.getElementById("site-header");
  const toastNode = document.getElementById("toast");
  const searchDialog = document.getElementById("search-dialog");
  const globalSearch = document.getElementById("global-search");
  const searchResults = document.getElementById("search-results");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const appState = {
    practiceIndex: 0,
    selectedAnswer: null,
    practiceFilters: { query: "", chapter: "all", difficulty: "all" },
    glossaryQuery: "",
    glossaryLetter: "ALL",
    flashcardIndex: 0,
    flashcardRevealed: false,
    examQuestions: [],
    examAnswers: {},
    examSubmitted: false
  };

  function readStore(key, fallback) {
    try {
      const raw = localStorage.getItem("ruoilun:" + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  }

  function writeStore(key, value) {
    try {
      localStorage.setItem("ruoilun:" + key, JSON.stringify(value));
    } catch (_) {
      toast("The browser is blocking local saving. Course content remains available.");
    }
  }

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function norm(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function titleVi(chapter) {
    const titles = {
      ch1: "Kế toán trong hoạt động kinh doanh",
      ch2: "Quy trình ghi nhận nghiệp vụ",
      ch3: "Bút toán điều chỉnh",
      ch4: "Hoàn tất chu trình kế toán",
      ch5: "Kế toán doanh nghiệp thương mại",
      ch6: "Hàng tồn kho",
      ch7: "Kiểm soát nội bộ và tiền",
      ch8: "Kế toán các khoản phải thu",
      ch9: "Tài sản dài hạn",
      ch10: "Nợ phải trả ngắn hạn",
      ch11: "Nợ phải trả dài hạn",
      ch12: "Vốn chủ sở hữu",
      ch13: "Các khoản đầu tư",
      ch14: "Báo cáo lưu chuyển tiền tệ",
      ch15: "Phân tích báo cáo tài chính"
    };
    return titles[chapter.id] || chapter.title;
  }

  function getChapter(id) {
    if (!id) return D.chapters?.[0];
    return (D.chapters || []).find((chapter) => chapter.id === id);
  }

  function routeParts() {
    const raw = (location.hash || "#home").slice(1);
    const [path, query = ""] = raw.split("?");
    return {
      parts: path.split("/").filter(Boolean),
      params: new URLSearchParams(query)
    };
  }

  function navigate(route) {
    location.hash = route.startsWith("#") ? route : "#" + route;
  }

  function toast(message) {
    toastNode.textContent = message;
    toastNode.classList.add("show");
    window.clearTimeout(toastNode._timer);
    toastNode._timer = window.setTimeout(() => toastNode.classList.remove("show"), 2600);
  }

  function completedSet() {
    return new Set(readStore("completed", []));
  }

  function attemptsMap() {
    return readStore("attempts", {});
  }

  function notesMap() {
    return readStore("notes", {});
  }

  function wrongIds() {
    return readStore("wrong", []);
  }

  function updateProgressUI() {
    const percent = Math.round((completedSet().size / Math.max(1, D.chapters?.length || 15)) * 100);
    const degrees = Math.round(percent * 3.6) + "deg";
    document.querySelectorAll(".progress-ring").forEach((node) => node.style.setProperty("--progress", degrees));
    const label = document.getElementById("header-progress");
    if (label) label.textContent = percent + "%";
  }

  function chapterCard(chapter) {
    const done = completedSet().has(chapter.id);
    const questionCount = (D.questions || []).filter((q) => q.chapter === chapter.id).length;
    return `
      <a class="chapter-card" href="#chapter/${esc(chapter.id)}">
        <div class="chapter-card-top">
          <span class="chapter-number">CH ${esc(chapter.number)}</span>
          <span class="chapter-status ${done ? "done" : ""}">${done ? "Completed" : "Open access"}</span>
        </div>
        <div class="chapter-card-copy">
          <h3>${esc(chapter.title)}</h3>
          <p>${esc(chapter.subtitle)}</p>
          <div class="chapter-meta">
            <span>${esc(chapter.sections?.length || 0)} full lessons</span>
            <span>${esc(questionCount)} practice questions</span>
          </div>
        </div>
      </a>`;
  }

  function routeHead(eyebrow, title, copy, actions = "") {
    return `
      <section class="route-head">
        <span class="eyebrow">${esc(eyebrow)}</span>
        <h1>${title}</h1>
        <p>${copy}</p>
        ${actions ? `<div class="route-actions">${actions}</div>` : ""}
      </section>`;
  }

  function heroContours() {
    return `
      <svg class="hero-contours" viewBox="0 0 1440 760" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="contour-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#ffffff" stop-opacity="0"/>
            <stop offset=".45" stop-color="#ffffff" stop-opacity=".16"/>
            <stop offset="1" stop-color="#f6d9ba" stop-opacity=".28"/>
          </linearGradient>
        </defs>
        <path d="M-80 630 C180 500 360 690 620 565 S1030 370 1510 535" fill="none" stroke="url(#contour-fade)"/>
        <path d="M-90 672 C170 542 382 725 665 603 S1088 414 1518 582" fill="none" stroke="url(#contour-fade)"/>
        <path d="M-120 714 C138 594 405 758 690 650 S1120 482 1530 634" fill="none" stroke="url(#contour-fade)"/>
        <circle cx="1210" cy="166" r="84" fill="none" stroke="#fff" stroke-opacity=".12"/>
        <circle cx="1210" cy="166" r="118" fill="none" stroke="#fff" stroke-opacity=".055"/>
      </svg>`;
  }

  function renderHome() {
    const firstChapters = (D.chapters || []).slice(0, 6).map(chapterCard).join("");
    const corrections = (Extra.mistranslations || []).slice(0, 3).map((item) => `
      <div class="correction-row">
        <del>${esc(item.wrong)}</del>
        <div><strong>${esc(item.right)}</strong>${esc(item.why)}</div>
      </div>`).join("");

    main.innerHTML = `
      <div class="page-shell">
        <div class="content-width">
          <section class="hero" aria-labelledby="hero-title">
            ${heroContours()}
            <div class="hero-inner">
              <div class="hero-copy">
                <span class="eyebrow">Financial Accounting · IFRS · English-first</span>
                <h1 id="hero-title">Understand the logic.<em>Record with confidence.</em></h1>
                <p class="hero-lead">A complete English-taught Financial Accounting course: all 15 chapters are open from the start, with deep theory, worked examples, exam traps, and Vietnamese support for key terms.</p>
                <div class="hero-actions">
                  <a class="button primary" href="#learn">Browse all 15 chapters <span aria-hidden="true">→</span></a>
                  <a class="button ghost" href="#practice">Start practice</a>
                </div>
              </div>
              <aside class="hero-panel" aria-label="Quick chapter access">
                <div class="hero-panel-label"><span>JUMP TO ANY CHAPTER</span><span>No locked lessons</span></div>
                <div class="hero-route">
                  <a href="#chapter/ch1"><b>01</b><span>Accounting in Action</span><small>Accounting equation</small></a>
                  <a href="#chapter/ch2"><b>02</b><span>The Recording Process</span><small>Debit, credit, journal, ledger</small></a>
                  <a href="#chapter/ch15"><b>15</b><span>Financial Statement Analysis</span><small>Open the final chapter directly</small></a>
                </div>
              </aside>
            </div>
          </section>

          <section class="metric-ribbon" aria-label="Course coverage">
            <div class="metric"><b>${esc(D.chapters?.length || 0)}</b><span>complete IFRS chapters</span></div>
            <div class="metric"><b>${esc(D.questions?.length || 0)}</b><span>interactive questions</span></div>
            <div class="metric"><b>${esc(D.glossary?.length || 0)}</b><span>bilingual key terms</span></div>
            <div class="metric"><b>Open</b><span>no chapter prerequisites</span></div>
          </section>

          <section class="section-block">
            <div class="section-heading"><div><span class="eyebrow">The learning loop</span><h2>Learn the logic, not isolated rules.</h2><p>Every lesson moves from economic substance to account analysis, recording, and a final check.</p></div></div>
            <div class="learning-loop">
              <article class="loop-card" data-step="1"><div class="icon-tile">◎</div><h3>Understand</h3><p>Identify the economic event, the reporting entity, and the recognition point.</p></article>
              <article class="loop-card" data-step="2"><div class="icon-tile">◇</div><h3>Analyze</h3><p>Classify assets, liabilities, equity, revenues, and expenses before choosing debit or credit.</p></article>
              <article class="loop-card" data-step="3"><div class="icon-tile">↗</div><h3>Record</h3><p>Journalize, post to the ledger, prepare a trial balance, and trace the reporting flow.</p></article>
              <article class="loop-card" data-step="4"><div class="icon-tile">✓</div><h3>Review</h3><p>Check the accounting equation, debit = credit, recognition period, and statement effects.</p></article>
            </div>
          </section>

          <section class="section-block">
            <div class="section-heading"><div><span class="eyebrow">15-chapter library</span><h2>Open any chapter, in any order.</h2><p>The complete Financial Accounting IFRS 5e learning path is visible immediately. There is no completion gate.</p></div><a class="text-link" href="#learn">View the full set</a></div>
            <div class="chapter-grid">${firstChapters}</div>
          </section>

          <section class="section-block trust-strip">
            <div class="trust-copy"><span class="eyebrow">Vietnamese key-term support</span><h2>The lesson stays in English. Translation appears only where terminology needs it.</h2><p>Core teaching, examples, objectives, and solutions use English. The glossary provides accurate Vietnamese equivalents for terms such as revenue, retained earnings, debit, and credit.</p></div>
            <div class="correction-card"><h3>Three translation traps to avoid</h3><div class="correction-list">${corrections}</div></div>
          </section>
        </div>
      </div>`;
  }

  function renderLearn() {
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Complete course library", "All 15 chapters are available now.", "Start with Chapter 1 or jump directly to any later topic. Every chapter contains full theory, learning objectives, worked examples, exam traps, review prompts, and chapter-specific practice.", `<a class="button primary" href="#chapter/ch1">Open Chapter 01</a><a class="button ghost" href="#chapter/ch15">Jump to Chapter 15</a><a class="button ghost" href="#exercises">Worked problems</a>`)}
        <div class="chapter-grid">${(D.chapters || []).map(chapterCard).join("")}</div>
      </div></div>`;
  }

  function viExplanation(point) {
    const clean = String(point || "");
    const lower = clean.toLowerCase();
    if (/^sole trader/.test(lower)) return "Doanh nghiệp một chủ thuộc quyền sở hữu của một cá nhân. Trong mô hình cơ bản, chủ sở hữu thường chịu trách nhiệm vô hạn; tuy vậy, khi ghi sổ vẫn phải tách tài sản và giao dịch của doanh nghiệp khỏi tài sản, giao dịch cá nhân.";
    if (/^partnership/.test(lower)) return "Công ty hợp danh có từ hai chủ sở hữu trở lên. Quyền, nghĩa vụ và trách nhiệm pháp lý phụ thuộc hình thức pháp lý, nhưng sổ kế toán luôn được lập cho đơn vị báo cáo chứ không trộn với giao dịch riêng của từng thành viên.";
    if (/^corporation/.test(lower)) return "Công ty cổ phần là một pháp nhân tách biệt với cổ đông. Cổ đông thường chỉ chịu trách nhiệm trong phạm vi vốn góp; vốn chủ sở hữu của công ty được phản ánh qua vốn cổ phần và các cấu phần vốn liên quan.";
    if (/accounting entity is not|economic\/business entity|economic entity/.test(lower)) return "Giả định đơn vị kế toán yêu cầu xác định rõ ranh giới của đơn vị báo cáo. Chỉ giao dịch thuộc về doanh nghiệp mới được ghi nhận; chi tiêu cá nhân của chủ sở hữu không được làm thay đổi doanh thu hoặc chi phí của doanh nghiệp.";
    if (/^monetary unit/.test(lower)) return "Giả định đơn vị tiền tệ dùng tiền làm thước đo chung để ghi nhận. Một yếu tố có thể rất quan trọng nhưng nếu chưa đo lường đáng tin cậy bằng tiền thì thường không xuất hiện như một số dư tài khoản.";
    if (/^time period/.test(lower)) return "Giả định kỳ kế toán chia vòng đời liên tục của doanh nghiệp thành tháng, quý hoặc năm. Vì vậy doanh thu và chi phí phải được đưa về đúng kỳ, tạo nền tảng cho bút toán điều chỉnh.";
    if (/^going concern/.test(lower)) return "Giả định hoạt động liên tục cho rằng doanh nghiệp sẽ tiếp tục vận hành đủ lâu để sử dụng tài sản và thanh toán nghĩa vụ theo hoạt động thông thường. Nếu giả định này không còn phù hợp, cơ sở đo lường và trình bày có thể phải thay đổi.";
    if (/^historical cost/.test(lower)) return "Giá gốc dựa trên số tiền của giao dịch ban đầu và tạo bằng chứng kiểm chứng được. Tuy nhiên, IFRS có thể yêu cầu hoặc cho phép cơ sở giá trị hiện hành đối với từng khoản mục cụ thể; không được tự ý dùng một cơ sở cho mọi tài sản.";
    if (/^fair value/.test(lower)) return "Giá trị hợp lý là cơ sở đo lường theo điều kiện thị trường tại ngày đo lường. Trong bài tập, chỉ dùng khi chuẩn mực hoặc đề bài yêu cầu; đừng thay giá gốc bằng giá thị trường theo cảm tính.";
    if (/^full disclosure/.test(lower)) return "Nguyên tắc công bố đầy đủ yêu cầu trình bày mọi thông tin trọng yếu giúp người đọc hiểu đúng báo cáo, trong báo cáo chính hoặc thuyết minh. Đầy đủ không có nghĩa là đưa mọi chi tiết vụn vặt.";
    if (/^statement of profit|^income statement/.test(lower)) return "Báo cáo kết quả hoạt động trình bày doanh thu, chi phí và lợi nhuận hoặc lỗ trong một kỳ. Đây là báo cáo theo khoảng thời gian, không phải ảnh chụp tại một ngày.";
    if (/^statement of changes|^statement of retained/.test(lower)) return "Báo cáo biến động vốn chủ sở hữu giải thích vì sao vốn thay đổi trong kỳ: vốn góp, lợi nhuận hoặc lỗ, cổ tức và các biến động vốn khác. Lợi nhuận giữ lại cuối kỳ nối sang báo cáo tình hình tài chính.";
    if (/^statement of financial|^balance sheet/.test(lower)) return "Báo cáo tình hình tài chính trình bày tài sản, nợ phải trả và vốn chủ sở hữu tại một thời điểm. Cụm từ “tại ngày/as at” là dấu hiệu quan trọng để phân biệt với báo cáo theo kỳ.";
    if (/^statement of cash flows/.test(lower)) return "Báo cáo lưu chuyển tiền tệ giải thích tiền vào, tiền ra theo hoạt động kinh doanh, đầu tư và tài chính trong kỳ; số tiền cuối kỳ phải khớp với Cash trên báo cáo tình hình tài chính.";
    const exactTerm = (D.glossary || []).find((item) => {
      const term = item.term.toLowerCase();
      return lower === term || lower.startsWith(term + ":") || lower.startsWith(term + " ");
    });
    if (exactTerm && Extra.glossaryVi?.[exactTerm.term.toLowerCase()]) {
      return Extra.glossaryVi[exactTerm.term.toLowerCase()];
    }
    if (/debit|credit|normal balance/.test(lower)) return "Hãy coi Nợ là bên trái và Có là bên phải. Tăng hay giảm phụ thuộc loại tài khoản: tài sản/chi phí thường tăng bên Nợ; nợ phải trả/vốn/doanh thu thường tăng bên Có. Luôn phân loại tài khoản trước khi chọn bên ghi.";
    if (/cash|receive|pay|collection/.test(lower)) return "Dòng tiền chỉ cho biết Cash thay đổi. Để xác định tài khoản đối ứng, phải hỏi doanh nghiệp đã hoàn thành nghĩa vụ chưa, lợi ích đã được tiêu dùng chưa, hay khoản phải thu/phải trả cũ đang được tất toán.";
    if (/revenue|earned/.test(lower)) return "Doanh thu được ghi khi nghĩa vụ tạo hàng hóa hoặc dịch vụ đã được thực hiện theo mô hình bài học, không mặc nhiên khi thu tiền. Thu trước thường tạo nợ phải trả; thu khoản phải thu chỉ đổi cấu trúc tài sản.";
    if (/expense|incurred|consumed/.test(lower)) return "Chi phí được ghi khi nguồn lực đã bị tiêu dùng hoặc nghĩa vụ đã phát sinh trong kỳ. Chi tiền trước có thể là tài sản trả trước; trả một khoản nợ cũ không tạo chi phí mới.";
    if (/asset|inventory|receivable/.test(lower)) return "Tập trung vào quyền kiểm soát nguồn lực và lợi ích kinh tế tương lai. Một khoản chỉ được xếp là tài sản khi doanh nghiệp kiểm soát nguồn lực hiện tại từ sự kiện đã xảy ra; không phải cứ đã chi tiền là có tài sản.";
    if (/liabilit|payable|obligation/.test(lower)) return "Nợ phải trả phản ánh nghĩa vụ hiện tại phải chuyển giao nguồn lực. Cần phân biệt nghĩa vụ đã phát sinh với một cam kết tương lai chưa đủ điều kiện ghi nhận.";
    if (/adjust|accrual|prepaid|unearned/.test(lower)) return "Bút toán điều chỉnh sửa lệch pha giữa dòng tiền và thời điểm ghi nhận. Xác định phần đã thuộc kỳ này trước, sau đó cập nhật đồng thời một tài khoản báo cáo tình hình tài chính và một tài khoản kết quả kinh doanh.";
    if (/inventory|cost of goods sold|fifo|average/.test(lower)) return "Tách dòng vận động vật chất khỏi giả định dòng chi phí. Mục tiêu là phân bổ tổng chi phí hàng sẵn có giữa giá vốn hàng bán và tồn kho cuối kỳ, rồi kiểm tra hai phần cộng lại bằng tổng ban đầu.";
    if (/depreciation|amortization|depletion/.test(lower)) return "Đây là phân bổ chi phí theo thời gian hoặc mức khai thác, không phải đo mức mất giá thị trường. Ghi nhận chi phí kỳ này và cập nhật tài khoản điều chỉnh hoặc giá trị ghi sổ liên quan.";
    if (/cash flow|operating|investing|financing/.test(lower)) return "Phân loại theo bản chất giao dịch: hoạt động cốt lõi tạo doanh thu, mua/bán nguồn lực dài hạn, hay thay đổi nguồn tài trợ. Sau phân loại, tổng ba nhóm phải giải thích đúng biến động tiền.";
    return "Đừng ghi nhớ câu này như một khẩu hiệu. Hãy diễn giải thành ba câu hỏi: sự kiện kinh tế nào đã xảy ra, yếu tố báo cáo nào thay đổi, và điều kiện ghi nhận đã thỏa ở kỳ hiện tại hay chưa.";
  }

  function pointTitle(point) {
    const text = String(point || "");
    const colon = text.indexOf(":");
    return colon > 0 && colon < 62 ? text.slice(0, colon) : text.slice(0, 105) + (text.length > 105 ? "…" : "");
  }

  function glossaryMatch(point) {
    const lower = String(point || "").toLowerCase();
    return (D.glossary || []).find((item) => {
      const term = item.term.toLowerCase();
      return lower === term || lower.startsWith(term + ":") || lower.startsWith(term + " ") || lower.startsWith(term + "/");
    });
  }

  function keyTermSupport(point) {
    const item = glossaryMatch(point);
    if (!item) return "";
    const explanation = Extra.glossaryVi?.[item.term.toLowerCase()];
    return `<div class="explain-pane vi"><span>Key term · Vietnamese support</span><strong>${esc(item.term)} — ${esc(item.vi)}</strong><br>${esc(explanation || item.vi)}</div>`;
  }

  function termsHtml(terms) {
    if (!terms?.length) return "";
    return `<div class="term-row">${terms.map((term) => `<button class="term-chip" type="button" data-term="${esc(term)}">${esc(term)}</button>`).join("")}</div>`;
  }

  function sectionQuestion(chapter, section, sectionIndex) {
    const pool = (D.questions || []).filter((question) => question.chapter === chapter.id);
    if (!pool.length) return null;
    const tokens = norm([section.title, section.lead, ...(section.terms || [])].join(" ")).split(/\s+/).filter((token) => token.length > 3);
    const ranked = pool.map((question, index) => {
      const haystack = norm([question.topic, question.question, question.explanation].join(" "));
      const score = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
      return { question, score, index };
    }).sort((a, b) => b.score - a.score || a.index - b.index);
    return ranked[0]?.score > 0 ? ranked[0].question : pool[sectionIndex % pool.length];
  }

  function distractorExplanation(question, optionIndex) {
    if (optionIndex === question.answer) return question.explanation;
    const option = norm(question.options[optionIndex]);
    const context = norm(question.question + " " + question.explanation);
    if (/no entry|wait until cash|when cash/.test(option) && /earned|incurred|accru|receivable|payable/.test(context)) {
      return "This choice incorrectly waits for cash. Under accrual accounting, recognition follows when revenue is earned or an expense is incurred, not merely when cash moves.";
    }
    if (/dr .*revenue|debit .*revenue/.test(option)) {
      return "This choice places revenue on the debit side even though revenue normally increases equity and carries a credit balance. A debit would reduce or close revenue rather than record revenue earned.";
    }
    if (/cr .*expense|credit .*expense/.test(option)) {
      return "This choice credits an expense even though an expense normally increases on the debit side. A credit would reduce or close an expense account.";
    }
    if (/cash/.test(option) && /not yet|unpaid|on account|receivable|payable/.test(context)) {
      return "This choice uses Cash even though the facts say cash has not moved. The counterpart should normally be a receivable, payable, prepaid item, or unearned revenue depending on the recognition status.";
    }
    if (/asset|liabil|equity|revenue|expense/.test(context)) {
      return "This choice misclassifies at least one financial-statement element or gives it the wrong direction. Reclassify each account first, decide whether it increases or decreases, and only then apply debit and credit rules.";
    }
    return `This choice proposes “${question.options[optionIndex]},” but it does not satisfy the recognition rule and dual effect described in the correct explanation. Check the event, the accounts affected, and the required direction for each account.`;
  }

  function inlineQuizHtml(question, chapter, sectionIndex) {
    if (!question) return "";
    return `
      <section class="knowledge-check" data-inline-quiz="${esc(question.id)}" data-section-index="${sectionIndex}">
        <div class="knowledge-head">
          <div><span class="micro-label">Knowledge check · 1 minute</span><h3>Can you apply the lesson immediately?</h3></div>
          <span class="tag accent">${esc(question.topic)}</span>
        </div>
        <p class="knowledge-question">${esc(question.question)}</p>
        <div class="knowledge-options">${question.options.map((option, optionIndex) => `<button type="button" data-inline-answer="${optionIndex}"><b>${String.fromCharCode(65 + optionIndex)}</b><span>${esc(option)}</span></button>`).join("")}</div>
        <div class="knowledge-feedback" aria-live="polite"></div>
        <div class="knowledge-foot"><span>Based on ${esc(question.source || chapter.source)}</span><a href="#practice/${chapter.id}">More Chapter ${esc(chapter.number)} practice →</a></div>
      </section>`;
  }

  function renderChapter(id, anchor) {
    const chapter = getChapter(id);
    if (!chapter) return renderNotFound();
    writeStore("lastChapter", chapter.id);
    const index = D.chapters.indexOf(chapter);
    const prev = D.chapters[index - 1];
    const next = D.chapters[index + 1];
    const done = completedSet().has(chapter.id);
    const nav = chapter.sections.map((section, i) => `<a href="#chapter/${chapter.id}/section-${i + 1}"><b>${i + 1}</b><span>${esc(section.title)}</span></a>`).join("");
    const objectives = (chapter.objectives || []).map((item, i) => `<div class="objective"><b>LO${i + 1}</b><span>${esc(item)}</span></div>`).join("");
    const why = typeof Deep.whyChapter === "function" ? Deep.whyChapter(chapter) : chapter.subtitle;

    const sections = chapter.sections.map((section, sIndex) => {
      const quickQuestion = sectionQuestion(chapter, section, sIndex);
      const points = (section.body || []).map((point, pIndex) => {
        const deep = typeof Deep.explainPoint === "function" ? Deep.explainPoint(point, section, chapter) : point;
        const termSupport = keyTermSupport(point);
        return `
          <details class="point-card" ${pIndex === 0 ? "open" : ""}>
            <summary><b>${pIndex + 1}</b><span class="point-title">${esc(pointTitle(point))}</span><span class="point-toggle" aria-hidden="true"></span></summary>
            <div class="point-explanation ${termSupport ? "" : "single"}">
              <div class="explain-pane"><span>Full explanation · English</span>${esc(deep)}</div>
              ${termSupport}
            </div>
          </details>`;
      }).join("");
      const steps = typeof Deep.workedSteps === "function" ? Deep.workedSteps(section) : [
        "Extract the facts and identify the requirement.",
        "State the accounting rule before calculating or journalizing.",
        "Apply the rule step by step.",
        "Check the equation, debit-credit equality, or ending balance."
      ];
      const recalls = typeof Deep.activeRecall === "function" ? Deep.activeRecall(section, chapter) : [];
      return `
        <section class="lesson-section" id="section-${sIndex + 1}">
          <span class="lesson-index">Lesson ${String(sIndex + 1).padStart(2, "0")}</span>
          <h2>${esc(section.title)}</h2>
          <p class="lesson-lead">${esc(section.lead)}</p>
          <div class="point-stack">${points}</div>
          <div class="lesson-two-col">
            <div class="worked-example">
              <span class="micro-label">Worked example · step by step</span>
              <h3>From facts to a defensible answer</h3>
              <p>${esc(section.example)}</p>
              <div class="solution-steps">${steps.map((step) => `<div class="solution-step">${esc(step)}</div>`).join("")}</div>
            </div>
            <div class="exam-trap">
              <span class="micro-label">Exam trap</span>
              <h3>Pause before choosing an answer</h3>
              <p>${esc(section.trap)}</p>
            </div>
          </div>
          ${inlineQuizHtml(quickQuestion, chapter, sIndex)}
          <div class="section-tools">
            <button class="tool-button note-toggle" type="button" data-note-key="${esc(chapter.id + ":" + sIndex)}">＋ Add lesson note</button>
            <button class="tool-button recall-toggle" type="button" data-recall="${esc(JSON.stringify(recalls))}">↻ Active recall</button>
            <span class="tool-button">Source: ${esc(typeof Deep.reviewRef === "function" ? Deep.reviewRef(chapter, section) : section.bookRef || chapter.source)}</span>
          </div>
          <div class="inline-slot"></div>
          ${termsHtml(section.terms)}
        </section>`;
    }).join("");

    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        <div class="chapter-shell">
          <aside class="chapter-aside">
            <div class="aside-label">In this chapter</div>
            <nav>${nav}</nav>
            <div class="chapter-nav-buttons">
              ${prev ? `<a class="button ghost small" href="#chapter/${prev.id}">← Ch ${prev.number}</a>` : "<span></span>"}
              ${next ? `<a class="button ghost small" href="#chapter/${next.id}">Ch ${next.number} →</a>` : ""}
            </div>
          </aside>
          <article class="chapter-main">
            <header class="chapter-cover">
              <div class="chapter-cover-top">
                <div><span class="eyebrow">CHAPTER ${esc(chapter.number)} · COMPLETE LESSON SET</span><h1>${esc(chapter.title)}</h1><p>${esc(chapter.subtitle)}</p></div>
                <button class="complete-button ${done ? "done" : ""}" type="button" data-complete="${chapter.id}">${done ? "✓ Completed" : "Mark chapter complete"}</button>
              </div>
              <div class="objective-grid">${objectives}</div>
            </header>
            <div class="logic-banner"><div><strong>Why this chapter matters</strong><p>${esc(why)}</p></div><span class="logic-equation">${chapter.id === "ch1" ? "A = L + E" : "Substance → Analyze → Record"}</span></div>
            ${sections}
          </article>
        </div>
      </div></div>`;

    bindChapterEvents(chapter, anchor);
  }

  function bindChapterEvents(chapter, anchor) {
    document.querySelector("[data-complete]")?.addEventListener("click", (event) => {
      const set = completedSet();
      if (set.has(chapter.id)) set.delete(chapter.id);
      else set.add(chapter.id);
      writeStore("completed", [...set]);
      event.currentTarget.classList.toggle("done", set.has(chapter.id));
      event.currentTarget.textContent = set.has(chapter.id) ? "✓ Completed" : "Mark chapter complete";
      updateProgressUI();
      toast(set.has(chapter.id) ? "Chapter progress saved." : "Completion mark removed.");
    });

    document.querySelectorAll(".term-chip").forEach((button) => button.addEventListener("click", () => {
      navigate("glossary?term=" + encodeURIComponent(button.dataset.term));
    }));

    document.querySelectorAll(".knowledge-check").forEach((quiz) => {
      quiz.querySelectorAll("[data-inline-answer]").forEach((button) => button.addEventListener("click", () => {
        if (quiz.dataset.answered === "true") return;
        const question = (D.questions || []).find((item) => item.id === quiz.dataset.inlineQuiz);
        if (!question) return;
        const selected = Number(button.dataset.inlineAnswer);
        const correct = selected === question.answer;
        quiz.dataset.answered = "true";
        quiz.querySelectorAll("[data-inline-answer]").forEach((optionButton) => {
          const optionIndex = Number(optionButton.dataset.inlineAnswer);
          optionButton.disabled = true;
          if (optionIndex === question.answer) optionButton.classList.add("correct");
          else if (optionIndex === selected) optionButton.classList.add("wrong");
        });
        const feedback = quiz.querySelector(".knowledge-feedback");
        feedback.innerHTML = `
          <div class="knowledge-result ${correct ? "correct" : "wrong"}"><strong>${correct ? "Correct — the rule has been applied consistently." : "Not correct yet — compare every option below."}</strong><span>${correct ? "✓" : "↻"}</span></div>
          <div class="knowledge-breakdown">${question.options.map((option, optionIndex) => `<div><b>${String.fromCharCode(65 + optionIndex)}</b><p><strong>${esc(option)}</strong><br>${esc(distractorExplanation(question, optionIndex))}</p></div>`).join("")}</div>`;
        const attempts = attemptsMap();
        attempts[question.id] = { selected, correct, at: new Date().toISOString(), source: "inline-check" };
        writeStore("attempts", attempts);
        const wrong = new Set(wrongIds());
        if (correct) wrong.delete(question.id); else wrong.add(question.id);
        writeStore("wrong", [...wrong]);
      }));
    });

    document.querySelectorAll(".note-toggle").forEach((button) => button.addEventListener("click", () => {
      const key = button.dataset.noteKey;
      const slot = button.closest(".lesson-section").querySelector(".inline-slot");
      const sectionIndex = Number(key.split(":")[1]);
      const existing = notesMap()[key]?.text || "";
      slot.innerHTML = `
        <div class="inline-note">
          <textarea aria-label="Personal note" placeholder="Restate the principle in your own words…">${esc(existing)}</textarea>
          <div class="inline-note-actions"><button class="button dark small cancel-note" type="button">Close</button><button class="button primary small save-note" type="button">Save note</button></div>
        </div>`;
      slot.querySelector("textarea").focus();
      slot.querySelector(".cancel-note").addEventListener("click", () => slot.innerHTML = "");
      slot.querySelector(".save-note").addEventListener("click", () => {
        const notes = notesMap();
        const text = slot.querySelector("textarea").value.trim();
        if (text) {
          notes[key] = { text, chapter: chapter.id, section: sectionIndex, title: chapter.sections[sectionIndex].title, updated: new Date().toISOString() };
        } else {
          delete notes[key];
        }
        writeStore("notes", notes);
        toast(text ? "Note saved on this device." : "The empty note was removed.");
        slot.innerHTML = "";
      });
    }));

    document.querySelectorAll(".recall-toggle").forEach((button) => button.addEventListener("click", () => {
      const slot = button.closest(".lesson-section").querySelector(".inline-slot");
      let prompts = [];
      try { prompts = JSON.parse(button.dataset.recall || "[]"); } catch (_) {}
      slot.innerHTML = `<div class="inline-note"><strong>Active recall — answer without looking above</strong><ol>${prompts.map((item) => `<li>${esc(item)}</li>`).join("")}</ol><div class="inline-note-actions"><button class="button dark small cancel-note" type="button">Close</button></div></div>`;
      slot.querySelector(".cancel-note").addEventListener("click", () => slot.innerHTML = "");
    }));

    if (anchor && /^section-\d+$/.test(anchor)) {
      window.setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
    }
  }

  function filteredQuestions() {
    const f = appState.practiceFilters;
    const query = norm(f.query);
    return (D.questions || []).filter((q) => {
      const chapterOk = f.chapter === "all" || q.chapter === f.chapter;
      const difficultyOk = f.difficulty === "all" || q.difficulty === f.difficulty;
      const queryOk = !query || norm(q.id + " " + q.question + " " + q.topic + " " + q.options.join(" ")).includes(query);
      return chapterOk && difficultyOk && queryOk;
    });
  }

  function practiceStats() {
    const attempts = Object.values(attemptsMap());
    const correct = attempts.filter((item) => item.correct).length;
    return { attempted: attempts.length, correct, rate: attempts.length ? Math.round(correct / attempts.length * 100) : 0 };
  }

  function renderPractice(chapterId) {
    if (chapterId) appState.practiceFilters.chapter = chapterId;
    const chapterOptions = (D.chapters || []).map((ch) => `<option value="${ch.id}" ${appState.practiceFilters.chapter === ch.id ? "selected" : ""}>Ch ${ch.number} · ${esc(ch.title)}</option>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Question studio", "Practice with an explanation for every answer.", "All questions are tagged by chapter, topic, and difficulty. Feedback appears immediately and incorrect answers are collected for focused review.", `<a class="button ghost" href="#notes">Open mistake notebook</a>`)}
        <div class="filter-bar">
          <input id="practice-search" type="search" value="${esc(appState.practiceFilters.query)}" placeholder="Search by question text or topic…" />
          <select id="practice-chapter" aria-label="Filter by chapter"><option value="all">All chapters</option>${chapterOptions}</select>
          <select id="practice-difficulty" aria-label="Filter by difficulty">
            <option value="all">All difficulty levels</option>
            <option value="easy" ${appState.practiceFilters.difficulty === "easy" ? "selected" : ""}>Easy</option>
            <option value="medium" ${appState.practiceFilters.difficulty === "medium" ? "selected" : ""}>Medium</option>
            <option value="hard" ${appState.practiceFilters.difficulty === "hard" ? "selected" : ""}>Hard</option>
          </select>
        </div>
        <div id="practice-root"></div>
      </div></div>`;
    bindPracticeFilters();
    renderQuestion();
  }

  function bindPracticeFilters() {
    let timer;
    document.getElementById("practice-search")?.addEventListener("input", (event) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        appState.practiceFilters.query = event.target.value;
        appState.practiceIndex = 0;
        appState.selectedAnswer = null;
        renderQuestion();
      }, 160);
    });
    document.getElementById("practice-chapter")?.addEventListener("change", (event) => {
      appState.practiceFilters.chapter = event.target.value;
      appState.practiceIndex = 0;
      appState.selectedAnswer = null;
      renderQuestion();
    });
    document.getElementById("practice-difficulty")?.addEventListener("change", (event) => {
      appState.practiceFilters.difficulty = event.target.value;
      appState.practiceIndex = 0;
      appState.selectedAnswer = null;
      renderQuestion();
    });
  }

  function breakdownText(question, index) {
    if (index === question.answer) return question.explanation;
    if (index === appState.selectedAnswer) return "Your choice does not satisfy the account classification, recognition timing, or debit/credit direction. Classify the affected elements before relying on account names.";
    return "This option does not fully satisfy the accounting rule in the explanation. Recheck the economic event, recognition point, and dual effect.";
  }

  function viQuestionExplanation(question) {
    const text = norm(question.topic + " " + question.question + " " + question.explanation);
    if (/accrued revenue|doanh thu don tich/.test(text)) return "Dịch vụ đã hoàn thành nên doanh thu thuộc kỳ hiện tại. Chưa thu tiền làm phát sinh quyền đòi tiền: Accounts Receivable là tài sản tăng bên Nợ; Service Revenue làm tăng vốn chủ sở hữu và tăng bên Có.";
    if (/accrued expense|chi phi don tich/.test(text)) return "Chi phí đã phát sinh trong kỳ dù chưa trả tiền. Vì vậy ghi Nợ tài khoản chi phí và ghi Có một khoản phải trả; không chờ đến ngày chi tiền mới ghi nhận.";
    if (/unearned revenue|deferred revenue/.test(text)) return "Tiền nhận trước chưa phải toàn bộ doanh thu vì doanh nghiệp còn nghĩa vụ cung cấp hàng hóa hoặc dịch vụ. Khi thực hiện nghĩa vụ, giảm Unearned Revenue và tăng Revenue cho phần đã kiếm được.";
    if (/prepaid|tra truoc/.test(text)) return "Khoản trả trước ban đầu là tài sản vì lợi ích chưa được tiêu dùng. Cuối kỳ, phần đã sử dụng được chuyển sang chi phí; phần còn lại tiếp tục là tài sản.";
    if (/depreciation|khau hao/.test(text)) return "Khấu hao phân bổ giá trị phải khấu hao cho kỳ sử dụng. Ghi Nợ Depreciation Expense và ghi Có Accumulated Depreciation; không ghi giảm trực tiếp nguyên giá trong mô hình cơ bản.";
    if (/inventory|fifo|average cost|cost of goods sold/.test(text)) return "Hãy phân bổ tổng chi phí hàng sẵn có giữa giá vốn và tồn kho cuối kỳ theo đúng giả định dòng chi phí. Sau khi tính, Cost of Goods Sold cộng Ending Inventory phải khớp tổng chi phí ban đầu.";
    if (/cash flow|operating|investing|financing/.test(text)) return "Phân loại dòng tiền theo bản chất giao dịch, không theo tên tài khoản đơn lẻ: hoạt động tạo doanh thu thường xuyên, đầu tư vào tài sản dài hạn, hay huy động và hoàn trả nguồn tài trợ.";
    if (/debit|credit|journal|entry/.test(text)) return "Trước hết phân loại từng tài khoản và xác định tăng hay giảm. Sau đó dùng số dư bình thường để chọn bên Nợ/Có, cuối cùng kiểm tra tổng Nợ bằng tổng Có.";
    if (/revenue|expense|cash/.test(text)) return "Không suy ra doanh thu hoặc chi phí chỉ từ dòng tiền. Cần xác định doanh thu đã được kiếm hay nguồn lực đã bị tiêu dùng trong kỳ, rồi mới chọn tài khoản và thời điểm ghi nhận.";
    return "Đáp án đúng là phương án duy nhất phù hợp đồng thời với bản chất kinh tế, điều kiện ghi nhận và tác động kép. Hãy đối chiếu từng lựa chọn với ba câu hỏi đó, rồi kiểm tra tính cân bằng trước khi kết luận.";
  }

  function renderQuestion() {
    const root = document.getElementById("practice-root");
    if (!root) return;
    const questions = filteredQuestions();
    if (!questions.length) {
      root.innerHTML = `<div class="empty-state"><strong>No matching question found.</strong><span>Try another keyword, chapter, or difficulty level.</span></div>`;
      return;
    }
    if (appState.practiceIndex >= questions.length) appState.practiceIndex = questions.length - 1;
    const q = questions[appState.practiceIndex];
    const chapter = getChapter(q.chapter);
    const selected = appState.selectedAnswer;
    const answered = selected !== null;
    const isCorrect = answered && selected === q.answer;
    const options = q.options.map((option, i) => {
      let cls = "";
      if (answered && i === q.answer) cls = "correct";
      else if (answered && i === selected) cls = "wrong";
      return `<button class="option-button ${cls}" type="button" data-answer="${i}" ${answered ? "disabled" : ""}><span class="option-letter">${String.fromCharCode(65 + i)}</span><span class="option-copy">${esc(option)}</span></button>`;
    }).join("");
    const feedback = answered ? `
      <section class="feedback">
        <div class="feedback-head ${isCorrect ? "" : "wrong"}"><strong>${isCorrect ? "Correct — the accounting logic is consistent." : "Not yet — trace the exact point of failure."}</strong><span>${isCorrect ? "✓" : "↻"}</span></div>
        <div class="feedback-body">
          <h3>Why is option ${String.fromCharCode(65 + q.answer)} correct?</h3>
          <p>${esc(q.explanation)}</p>
          <div class="option-breakdown">${q.options.map((option, i) => `<div class="breakdown-row"><b>${String.fromCharCode(65 + i)}</b><span><strong>${esc(option)}</strong><br>${esc(breakdownText(q, i))}</span></div>`).join("")}</div>
          <div class="review-path">Review: <a class="text-link" href="#chapter/${esc(q.chapter)}">${esc(chapter?.title || "Chapter")}</a> · Question source: ${esc(q.source || "Source pack")}</div>
        </div>
      </section>` : "";
    const stats = practiceStats();
    const wrongQuestions = wrongIds().slice(-5).reverse().map((id) => (D.questions || []).find((item) => item.id === id)).filter(Boolean);
    root.innerHTML = `
      <div class="practice-layout">
        <section class="question-card">
          <div class="question-top"><span class="question-count">Question ${appState.practiceIndex + 1} / ${questions.length}</span><div class="question-tags"><span class="tag accent">${esc(q.topic)}</span><span class="tag">${esc(q.difficulty || "medium")}</span><span class="tag">Ch ${esc(chapter?.number || "")}</span></div></div>
          <h2>${esc(q.question)}</h2>
          <div class="options">${options}</div>
          ${feedback}
          <div class="question-actions">
            <button class="button ghost small" type="button" id="prev-question" ${appState.practiceIndex === 0 ? "disabled" : ""}>← Previous</button>
            <div><button class="button ghost small" type="button" id="shuffle-question">Random question</button><button class="button primary small" type="button" id="next-question">Next →</button></div>
          </div>
        </section>
        <aside class="practice-aside">
          <div class="aside-card"><h3>Practice progress</h3><div class="score-grid"><div class="score-box"><b>${stats.attempted}</b><span>attempted</span></div><div class="score-box"><b>${stats.rate}%</b><span>correct</span></div></div></div>
          <div class="aside-card"><h3>Review queue</h3><div class="mistake-list-mini">${wrongQuestions.length ? wrongQuestions.map((item) => `<button type="button" data-question-id="${esc(item.id)}">${esc(item.id)} · ${esc(item.topic)}</button>`).join("") : "<span>No incorrect answers saved yet.</span>"}</div></div>
        </aside>
      </div>`;

    root.querySelectorAll("[data-answer]").forEach((button) => button.addEventListener("click", () => {
      const answer = Number(button.dataset.answer);
      appState.selectedAnswer = answer;
      const attempts = attemptsMap();
      attempts[q.id] = { selected: answer, correct: answer === q.answer, at: new Date().toISOString() };
      writeStore("attempts", attempts);
      const wrong = new Set(wrongIds());
      if (answer === q.answer) wrong.delete(q.id);
      else wrong.add(q.id);
      writeStore("wrong", [...wrong]);
      renderQuestion();
    }));
    document.getElementById("prev-question")?.addEventListener("click", () => {
      appState.practiceIndex = Math.max(0, appState.practiceIndex - 1);
      appState.selectedAnswer = null;
      renderQuestion();
    });
    document.getElementById("next-question")?.addEventListener("click", () => {
      appState.practiceIndex = (appState.practiceIndex + 1) % questions.length;
      appState.selectedAnswer = null;
      renderQuestion();
    });
    document.getElementById("shuffle-question")?.addEventListener("click", () => {
      appState.practiceIndex = Math.floor(Math.random() * questions.length);
      appState.selectedAnswer = null;
      renderQuestion();
    });
    root.querySelectorAll("[data-question-id]").forEach((button) => button.addEventListener("click", () => {
      const index = questions.findIndex((item) => item.id === button.dataset.questionId);
      if (index >= 0) {
        appState.practiceIndex = index;
        appState.selectedAnswer = null;
        renderQuestion();
      } else {
        const target = (D.questions || []).find((item) => item.id === button.dataset.questionId);
        if (target) {
          appState.practiceFilters = { query: target.id, chapter: "all", difficulty: "all" };
          renderPractice();
        }
      }
    }));
  }

  function renderGlossary(termQuery) {
    appState.glossaryQuery = termQuery || appState.glossaryQuery;
    const query = norm(appState.glossaryQuery);
    const filtered = (D.glossary || []).filter((item) => {
      const letterOk = appState.glossaryLetter === "ALL" || item.term.toUpperCase().startsWith(appState.glossaryLetter);
      const queryOk = !query || norm(item.term + " " + item.vi + " " + item.definition + " " + (Extra.glossaryVi?.[item.term.toLowerCase()] || "")).includes(query);
      return letterOk && queryOk;
    });
    const cards = filtered.map((item) => `
      <article class="term-card" id="term-${norm(item.term).replace(/[^a-z0-9]+/g, "-")}">
        <div class="term-card-top"><div><h3>${esc(item.term)}</h3><div class="term-vi">${esc(item.vi)}</div></div><span class="term-chapter">${esc(item.chapter)}</span></div>
        <div class="definition-block">
          <div><span>Definition · EN</span>${esc(item.definition)}</div>
          <div><span>Vietnamese key-term explanation</span>${esc(Extra.glossaryVi?.[item.term.toLowerCase()] || viExplanation(item.definition))}</div>
        </div>
      </article>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Bilingual glossary", "English teaching, precise Vietnamese terminology.", "Each entry keeps the English accounting term and definition, then provides an accurate Vietnamese equivalent and clarification. Vietnamese is used here as terminology support, not as the teaching language.")}
        <div class="glossary-toolbar">
          <input class="glossary-search" id="glossary-search" type="search" value="${esc(appState.glossaryQuery)}" placeholder="Search asset, retained earnings, doanh thu…" />
          <div class="alphabet-filter"><button class="${appState.glossaryLetter === "ALL" ? "active" : ""}" type="button" data-letter="ALL">ALL</button>${letters.map((letter) => `<button class="${appState.glossaryLetter === letter ? "active" : ""}" type="button" data-letter="${letter}">${letter}</button>`).join("")}</div>
        </div>
        <div class="glossary-grid">${cards || `<div class="empty-state"><strong>No matching term found.</strong><span>Try another keyword or select ALL.</span></div>`}</div>
      </div></div>`;
    let timer;
    document.getElementById("glossary-search")?.addEventListener("input", (event) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        appState.glossaryQuery = event.target.value;
        renderGlossary();
      }, 140);
    });
    document.querySelectorAll("[data-letter]").forEach((button) => button.addEventListener("click", () => {
      appState.glossaryLetter = button.dataset.letter;
      renderGlossary();
    }));
  }

  function renderExercises(chapterId) {
    const exerciseSet = Extra.englishExercises || Extra.exercises || [];
    const chapter = getChapter(chapterId || exerciseSet[0]?.chapter || "ch1");
    if (!chapter) return renderNotFound();
    const exercise = exerciseSet.find((item) => item.chapter === chapter.id);
    const pack = (D.sourcePracticePacks || []).find((item) => String(item.chapter || "").includes(String(Number(chapter.number)))) || D.sourcePracticePacks?.[0];
    const tabs = (D.chapters || []).map((ch) => `<button class="${ch.id === chapter.id ? "active" : ""}" type="button" data-exercise-chapter="${ch.id}">Ch ${ch.number}</button>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Chapter exercises", "A fully worked problem for every chapter.", "Each problem states the facts and requirement clearly. Attempt it first, then open the solution to compare the rule, calculation, journal entry, and final check step by step.")}
        <div class="exercise-tabs" aria-label="Choose a chapter">${tabs}</div>
        <div class="exercise-summary">
          <div class="exercise-brief"><span class="eyebrow">CHAPTER ${esc(chapter.number)}</span><h2>${esc(chapter.title)}</h2><p>${esc(chapter.objectives?.[0] || chapter.subtitle)}</p></div>
          <aside class="exercise-map"><h3>Recommended process</h3><ol><li>Extract the economic facts.</li><li>State the rule and accounts.</li><li>Calculate or journalize step by step.</li><li>Reconcile totals and conclude.</li></ol>${pack ? `<p><small>Source pack: ${esc(pack.source)} · ${esc(pack.note)}</small></p>` : ""}</aside>
        </div>
        ${exercise ? `
          <article class="exercise-card">
            <header><div><span class="tag accent">Ch ${esc(chapter.number)}</span><span class="tag">${esc(exercise.level || "Applied")}</span></div><h3>${esc(exercise.title)}</h3><p class="prompt">${esc(exercise.prompt)}</p></header>
            <details><summary><span>Open the detailed solution</span><span aria-hidden="true">＋</span></summary><div class="exercise-solution">${(exercise.solution || []).map((step) => `<div>${esc(step)}</div>`).join("")}</div></details>
          </article>` : `<div class="empty-state"><strong>This worked problem is being updated.</strong><span>Select another chapter to continue.</span></div>`}
      </div></div>`;
    document.querySelectorAll("[data-exercise-chapter]").forEach((button) => button.addEventListener("click", () => navigate("exercises/" + button.dataset.exerciseChapter)));
  }

  function renderNotes() {
    const entries = Object.entries(notesMap());
    const noteCards = entries.map(([key, note]) => {
      const chapter = getChapter(note.chapter);
      return `
        <article class="note-card">
          <div class="note-card-top"><div><h3>${esc(note.title)}</h3><small>Ch ${esc(chapter?.number || "")} · updated ${esc(new Date(note.updated).toLocaleDateString("en-GB"))}</small></div></div>
          <p>${esc(note.text)}</p>
          <div class="note-card-actions"><button type="button" data-open-note="${esc(key)}">Open lesson</button><button type="button" data-delete-note="${esc(key)}">Delete</button></div>
        </article>`;
    }).join("");
    const wrong = wrongIds().map((id) => (D.questions || []).find((item) => item.id === id)).filter(Boolean);
    const wrongCards = wrong.slice(-12).reverse().map((q) => `
      <article class="note-card"><div class="note-card-top"><div><h3>${esc(q.topic)}</h3><small>${esc(q.id)} · Ch ${esc(getChapter(q.chapter)?.number || "")}</small></div></div><p>${esc(q.question)}</p><div class="note-card-actions"><button type="button" data-review-question="${esc(q.id)}">Attempt again</button></div></article>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Personal notebook", "Lesson notes and a mistake notebook.", "All data is stored locally in your browser. Notes stay attached to the relevant lesson, while incorrect answers from both inline checks and Practice are collected for deliberate review.")}
        <section class="section-block"><div class="section-heading"><div><span class="eyebrow">My notes</span><h2>Lesson notes</h2></div></div><div class="notes-grid">${noteCards || `<div class="empty-state"><strong>No notes yet.</strong><span>Open any chapter and select “Add lesson note”.</span></div>`}</div></section>
        <section class="section-block"><div class="section-heading"><div><span class="eyebrow">Mistake notebook</span><h2>Questions to attempt again</h2></div></div><div class="notes-grid">${wrongCards || `<div class="empty-state"><strong>Your mistake notebook is empty.</strong><span>Answer a knowledge check or Practice question to build a review queue.</span></div>`}</div></section>
      </div></div>`;
    document.querySelectorAll("[data-open-note]").forEach((button) => button.addEventListener("click", () => {
      const note = notesMap()[button.dataset.openNote];
      if (note) navigate("chapter/" + note.chapter);
    }));
    document.querySelectorAll("[data-delete-note]").forEach((button) => button.addEventListener("click", () => {
      if (!window.confirm("Delete this note? This action cannot be undone.")) return;
      const notes = notesMap();
      delete notes[button.dataset.deleteNote];
      writeStore("notes", notes);
      renderNotes();
    }));
    document.querySelectorAll("[data-review-question]").forEach((button) => button.addEventListener("click", () => {
      const q = (D.questions || []).find((item) => item.id === button.dataset.reviewQuestion);
      if (!q) return;
      appState.practiceFilters = { query: q.id, chapter: "all", difficulty: "all" };
      navigate("practice");
    }));
  }

  function renderProgress() {
    const completed = completedSet();
    const total = D.chapters?.length || 15;
    const percent = Math.round(completed.size / total * 100);
    const attempts = practiceStats();
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Learning progress", "Progress is a signal, not a gate.", "Every chapter remains open. Completion marks, question attempts, and the mistake notebook simply help you identify where to review next.")}
        <div class="progress-layout">
          <section class="progress-hero-card"><div><div class="big-ring" style="--progress:${percent * 3.6}deg"><div><b>${percent}%</b></div></div><h2>${completed.size}/${total} chapters</h2><p>${attempts.attempted} questions attempted · ${attempts.rate}% correct</p></div></section>
          <section class="progress-list">${(D.chapters || []).map((ch) => {
            const done = completed.has(ch.id);
            return `<a class="progress-row" href="#chapter/${ch.id}"><b>${ch.number}</b><div><strong>${esc(ch.title)}</strong><span>${esc(ch.sections?.length || 0)} full lessons</span></div><em>${done ? "✓ Completed" : "Open chapter →"}</em></a>`;
          }).join("")}</section>
        </div>
      </div></div>`;
  }

  function renderSources() {
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Source-grounded", "A course built from the textbook and your teacher’s learning map.", "Theory is cross-checked against Financial Accounting IFRS 5e, the teacher mind map, chapter slides, verified question banks, and the supplied practice workbooks.")}
        <div class="source-grid">${(D.sources || []).map((source) => `
          <article class="source-card"><span class="micro-label">${esc(source.type)}</span><h3>${esc(source.title)}</h3><p><strong>${esc(source.author || "")}</strong></p><p>${esc(source.note)}</p></article>`).join("")}</div>
        <section class="section-block trust-strip">
          <div class="trust-copy"><span class="eyebrow">Editorial method</span><h2>Substance first, terminology second, journal entry third.</h2><p>Every solution follows four checks: identify the event, classify the elements, apply the recognition rule, then reconcile the equation or debit-credit totals.</p></div>
          <div class="correction-card"><h3>How the sources are used</h3><div class="correction-list"><div class="correction-row"><del>Copy an answer</del><div><strong>Rebuild the reasoning</strong>Questions test the source material; explanations are structured around economic substance and exam reasoning.</div></div><div class="correction-row"><del>Translate word by word</del><div><strong>Translate accounting meaning</strong>Lessons remain in English; key terms retain their English form with precise Vietnamese support.</div></div></div></div>
        </section>
      </div></div>`;
  }

  function renderTools() {
    const tools = [
      ["mindmap", "Teacher Mind Map", "See how the teacher connects organization forms, assumptions, elements, statements, recording flow, and merchandising."],
      ["lab", "Accounting Lab", "Practice the accounting equation, debit-credit balance, journals, trial balances, adjustments, and cash-flow structure."],
      ["flashcards", "Flashcards", "Review English accounting terms with precise Vietnamese translations and definitions."],
      ["formulae", "Formula Sheet", "Keep equations, ratios, inventory measures, depreciation, interest, and cash-flow checks in one clean reference."],
      ["exam", "Exam Mode", "Take a 20-question mixed mock test and receive a complete answer review after submission."],
      ["sources", "Sources", "Trace the textbook, teacher mind map, slides, question banks, workbooks, and solved source packs behind the course."]
    ];
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Study tools", "The original learning toolkit, preserved.", "The cinematic redesign changes presentation, not the core study structure. Mind map, lab, flashcards, formula sheet, exam mode, notes, mistake review, and sources remain available.")}
      <div class="tool-hub-grid">${tools.map(([route, title, copy], index) => `<a class="tool-hub-card" href="#${route}"><b>${String(index + 1).padStart(2, "0")}</b><div><h2>${esc(title)}</h2><p>${esc(copy)}</p><span>Open tool →</span></div></a>`).join("")}</div>
    </div></div>`;
  }

  function mindmapBranch(node, depth = 0) {
    const children = node.children || [];
    if (!children.length) return `<li><span>${esc(node.text)}</span></li>`;
    return `<li><details ${depth < 1 ? "open" : ""}><summary>${esc(node.text)}</summary><ul>${children.map((child) => mindmapBranch(child, depth + 1)).join("")}</ul></details></li>`;
  }

  function renderMindmap() {
    const map = window.ACCOUNTING_MINDMAP;
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Teacher mind map", "The conceptual map behind the course.", "This view preserves the teacher's hierarchy. Open each branch to trace how a definition, statement, or transaction rule connects to the next stage of accounting.", `<a class="button ghost" href="#chapter/ch1">Open Chapter 01 theory</a>`)}
      ${map ? `<div class="mindmap-board"><div class="mindmap-root"><span>${esc(map.title)}</span><small>${esc(map.source)}</small></div><ul>${map.branches.map((branch) => mindmapBranch(branch)).join("")}</ul></div>` : `<div class="empty-state"><strong>Mind map data is unavailable.</strong><span>Use the chapter route while the source is reloaded.</span></div>`}
    </div></div>`;
  }

  function renderFormulae() {
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Formula sheet", "Readable formulas with meaning and checks.", "Each card shows the English formula first. Vietnamese appears only as key-term support so the course remains English-taught.")}
      <div class="formula-grid">${(D.formulae || []).map((item, index) => `<article class="formula-card"><span>${String(index + 1).padStart(2, "0")}</span><h2>${esc(item.name)}</h2><div class="formula-display">${esc(item.formula)}</div><p><b>VI key-term support:</b> ${esc(item.vi || "—")}</p></article>`).join("")}</div>
    </div></div>`;
  }

  function renderFlashcards() {
    const cards = D.glossary || [];
    if (!cards.length) return renderNotFound();
    const card = cards[appState.flashcardIndex % cards.length];
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Flashcards", "Recall the English term before revealing support.", "Say the definition aloud first. Then reveal the English definition, Vietnamese equivalent, and precise Vietnamese clarification.")}
      <section class="flashcard-stage">
        <div class="flashcard-count">Card ${appState.flashcardIndex + 1} / ${cards.length} · ${esc(card.chapter)}</div>
        <button class="flashcard ${appState.flashcardRevealed ? "revealed" : ""}" id="flashcard-reveal" type="button">
          <span class="eyebrow">Accounting key term</span><h2>${esc(card.term)}</h2>
          ${appState.flashcardRevealed ? `<div class="flashcard-answer"><strong>${esc(card.definition)}</strong><p>${esc(card.vi)}</p><small>${esc(Extra.glossaryVi?.[card.term.toLowerCase()] || card.vi)}</small></div>` : `<p>Define this term in English, then click to reveal.</p>`}
        </button>
        <div class="flashcard-actions"><button class="button ghost" id="flashcard-prev" type="button">← Previous</button><button class="button primary" id="flashcard-next" type="button">Next card →</button></div>
      </section>
    </div></div>`;
    document.getElementById("flashcard-reveal")?.addEventListener("click", () => { appState.flashcardRevealed = !appState.flashcardRevealed; renderFlashcards(); });
    document.getElementById("flashcard-prev")?.addEventListener("click", () => { appState.flashcardIndex = (appState.flashcardIndex - 1 + cards.length) % cards.length; appState.flashcardRevealed = false; renderFlashcards(); });
    document.getElementById("flashcard-next")?.addEventListener("click", () => { appState.flashcardIndex = (appState.flashcardIndex + 1) % cards.length; appState.flashcardRevealed = false; renderFlashcards(); });
  }

  function labWorkspace(template) {
    const balanceLab = ["journal", "ledger", "trial", "worksheet", "cashflow"].includes(template.id);
    if (template.id === "equation") return `<div class="lab-panel"><h2>Equation balance checker</h2><p>Enter the cumulative change in each element. The accounting equation is balanced when Assets = Liabilities + Equity.</p><div class="lab-inputs"><label>Δ Assets<input id="lab-assets" type="number" value="0"></label><label>Δ Liabilities<input id="lab-liabilities" type="number" value="0"></label><label>Δ Equity<input id="lab-equity" type="number" value="0"></label></div><button class="button primary" id="lab-check" type="button">Check equation</button><div class="lab-result" id="lab-result" aria-live="polite"></div></div>`;
    if (balanceLab) return `<div class="lab-panel"><h2>${esc(template.title)} balance checker</h2><p>Enter the total debit and credit columns after completing your working table.</p><div class="lab-inputs two"><label>Total debits<input id="lab-debits" type="number" value="0"></label><label>Total credits<input id="lab-credits" type="number" value="0"></label></div><button class="button primary" id="lab-check" type="button">Check debit-credit equality</button><div class="lab-result" id="lab-result" aria-live="polite"></div></div>`;
    return `<div class="lab-panel"><h2>${esc(template.title)}</h2><p>${esc(template.desc)}</p><label class="lab-working">Working area<textarea placeholder="Enter accounts, calculations, and reconciliation notes here…"></textarea></label><div class="lab-checklist"><span>1 · Identify the event</span><span>2 · Classify accounts</span><span>3 · Apply the rule</span><span>4 · Reconcile totals</span></div></div>`;
  }

  function renderLab(templateId) {
    const templates = D.labTemplates || [];
    const selected = templates.find((item) => item.id === templateId) || templates[0];
    if (!selected) return renderNotFound();
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Accounting lab", "Build the working before checking the answer.", "The lab preserves the original practice templates and gives you a clean space to test equation balance, debit-credit equality, and reconciliation logic.")}
      <div class="lab-layout"><aside class="lab-menu">${templates.map((item) => `<a class="${item.id === selected.id ? "active" : ""}" href="#lab/${item.id}"><strong>${esc(item.title)}</strong><small>${esc(item.vi)}</small></a>`).join("")}</aside><section><div class="lab-source">${esc(selected.desc)}<br><small>Source: ${esc(selected.source)}</small></div>${labWorkspace(selected)}</section></div>
    </div></div>`;
    document.getElementById("lab-check")?.addEventListener("click", () => {
      const result = document.getElementById("lab-result");
      if (selected.id === "equation") {
        const assets = Number(document.getElementById("lab-assets").value || 0);
        const liabilities = Number(document.getElementById("lab-liabilities").value || 0);
        const equity = Number(document.getElementById("lab-equity").value || 0);
        const balanced = Math.abs(assets - liabilities - equity) < 0.001;
        result.className = `lab-result ${balanced ? "correct" : "wrong"}`;
        result.textContent = balanced ? `Balanced: ${assets} = ${liabilities} + ${equity}.` : `Not balanced: Assets differ from Liabilities + Equity by ${(assets - liabilities - equity).toFixed(2)}.`;
      } else {
        const debits = Number(document.getElementById("lab-debits").value || 0);
        const credits = Number(document.getElementById("lab-credits").value || 0);
        const balanced = Math.abs(debits - credits) < 0.001;
        result.className = `lab-result ${balanced ? "correct" : "wrong"}`;
        result.textContent = balanced ? `Balanced: total debits = total credits = ${debits}.` : `Difference: ${(debits - credits).toFixed(2)}. Recheck posting, amount, and debit-credit direction.`;
      }
    });
  }

  function renderExam() {
    if (!appState.examQuestions.length) {
      main.innerHTML = `<div class="page-shell"><div class="content-width">${routeHead("Exam mode", "A 20-question mixed mock exam.", "Questions are drawn from all chapters. Submit once to receive your score and a complete explanation for every option.")}<div class="exam-start"><h2>Ready to test the full course?</h2><p>All chapters remain open before and after the exam. This mode measures recall; it does not lock content.</p><button class="button primary" id="start-exam" type="button">Start 20-question exam</button></div></div></div>`;
      document.getElementById("start-exam")?.addEventListener("click", () => {
        appState.examQuestions = [...(D.questions || [])].sort(() => Math.random() - .5).slice(0, 20);
        appState.examAnswers = {};
        appState.examSubmitted = false;
        renderExam();
      });
      return;
    }
    const score = appState.examQuestions.filter((q) => Number(appState.examAnswers[q.id]) === q.answer).length;
    main.innerHTML = `<div class="page-shell"><div class="content-width">${routeHead("Exam mode", appState.examSubmitted ? `Score: ${score} / ${appState.examQuestions.length}` : "20-question mock in progress.", appState.examSubmitted ? "Review every answer below, then return to the relevant chapter or restart the exam." : "Choose one answer per question. Explanations appear only after submission.")}
      <div class="exam-list">${appState.examQuestions.map((q, qIndex) => `<article class="exam-question"><span>Question ${qIndex + 1} · ${esc(q.topic)}</span><h2>${esc(q.question)}</h2><div>${q.options.map((option, optionIndex) => `<label class="${appState.examSubmitted ? (optionIndex === q.answer ? "correct" : Number(appState.examAnswers[q.id]) === optionIndex ? "wrong" : "") : ""}"><input type="radio" name="exam-${esc(q.id)}" value="${optionIndex}" ${Number(appState.examAnswers[q.id]) === optionIndex ? "checked" : ""} ${appState.examSubmitted ? "disabled" : ""}><b>${String.fromCharCode(65 + optionIndex)}</b><span>${esc(option)}</span></label>`).join("")}</div>${appState.examSubmitted ? `<details><summary>Review all option explanations</summary><div class="knowledge-breakdown">${q.options.map((option, optionIndex) => `<div><b>${String.fromCharCode(65 + optionIndex)}</b><p><strong>${esc(option)}</strong><br>${esc(distractorExplanation(q, optionIndex))}</p></div>`).join("")}</div></details>` : ""}</article>`).join("")}</div>
      <div class="exam-actions">${appState.examSubmitted ? `<button class="button primary" id="restart-exam" type="button">Start a new exam</button>` : `<button class="button primary" id="submit-exam" type="button">Submit exam</button>`}</div>
    </div></div>`;
    document.querySelectorAll('.exam-question input[type="radio"]').forEach((input) => input.addEventListener("change", () => { appState.examAnswers[input.name.replace("exam-", "")] = Number(input.value); }));
    document.getElementById("submit-exam")?.addEventListener("click", () => { appState.examSubmitted = true; renderExam(); });
    document.getElementById("restart-exam")?.addEventListener("click", () => { appState.examQuestions = []; appState.examAnswers = {}; appState.examSubmitted = false; renderExam(); });
  }

  function renderNotFound() {
    main.innerHTML = `<div class="page-shell"><div class="content-width"><div class="empty-state"><strong>Page not found.</strong><span><a class="text-link" href="#learn">Open all 15 chapters</a></span></div></div></div>`;
  }

  function renderSearchResults(query) {
    const value = norm(query);
    if (!value) {
      searchResults.innerHTML = `<div class="empty-state"><strong>Search all 15 chapters.</strong><span>Try adjusting entry, inventory, or retained earnings.</span></div>`;
      return;
    }
    const chapterHits = (D.chapters || []).filter((ch) => norm(ch.title + " " + titleVi(ch) + " " + ch.subtitle + " " + ch.sections.map((s) => s.title).join(" ")).includes(value)).slice(0, 6);
    const termHits = (D.glossary || []).filter((item) => norm(item.term + " " + item.vi + " " + item.definition + " " + (Extra.glossaryVi?.[item.term.toLowerCase()] || "")).includes(value)).slice(0, 8);
    const hits = [
      ...chapterHits.map((ch) => ({ icon: ch.number, title: ch.title, meta: `${ch.sections.length} full lessons`, route: "chapter/" + ch.id, kind: "Chapter" })),
      ...termHits.map((item) => ({ icon: "Aa", title: item.term, meta: item.vi, route: "glossary?term=" + encodeURIComponent(item.term), kind: "Key term" }))
    ];
    searchResults.innerHTML = hits.length ? hits.map((hit) => `
      <button class="search-result" type="button" data-search-route="${esc(hit.route)}"><b>${esc(hit.icon)}</b><span><strong>${esc(hit.title)}</strong><span>${esc(hit.meta)}</span></span><em>${esc(hit.kind)}</em></button>`).join("") : `<div class="empty-state"><strong>No search result found.</strong><span>Try a shorter accounting term.</span></div>`;
    searchResults.querySelectorAll("[data-search-route]").forEach((button) => button.addEventListener("click", () => {
      searchDialog.close();
      navigate(button.dataset.searchRoute);
    }));
  }

  function openSearch() {
    if (!searchDialog.open) searchDialog.showModal();
    globalSearch.value = "";
    renderSearchResults("");
    window.setTimeout(() => globalSearch.focus(), 30);
  }

  function renderRoute() {
    const route = routeParts();
    const [name = "home", id, anchor] = route.parts;
    document.body.dataset.route = name;
    if (!anchor && !/^section-\d+$/.test(name)) window.scrollTo({ top: 0, behavior: "instant" });
    if (name === "home") renderHome();
    else if (name === "learn") renderLearn();
    else if (name === "chapter") renderChapter(id, anchor);
    else if (/^section-\d+$/.test(name)) renderChapter(readStore("lastChapter", "ch1"), name);
    else if (name === "practice") renderPractice(id);
    else if (name === "exercises") renderExercises(id);
    else if (name === "glossary") renderGlossary(route.params.get("term") || "");
    else if (name === "notes") renderNotes();
    else if (name === "progress") renderProgress();
    else if (name === "sources") renderSources();
    else if (name === "tools") renderTools();
    else if (name === "mindmap") renderMindmap();
    else if (name === "lab") renderLab(id);
    else if (name === "flashcards") renderFlashcards();
    else if (name === "formulae") renderFormulae();
    else if (name === "exam") renderExam();
    else renderNotFound();
    updateProgressUI();
    document.getElementById("mobile-menu").hidden = true;
    document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
    document.title = name === "home" ? "Ruoilun Accounting Mastery" : (main.querySelector("h1")?.textContent || "Ruoilun") + " · Ruoilun";
  }

  document.querySelectorAll("[data-route]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.route)));
  document.querySelectorAll(".search-trigger").forEach((button) => button.addEventListener("click", openSearch));
  document.querySelector(".dialog-close")?.addEventListener("click", () => searchDialog.close());
  globalSearch?.addEventListener("input", (event) => renderSearchResults(event.target.value));
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
  });

  const menuButton = document.querySelector(".menu-button");
  menuButton?.addEventListener("click", () => {
    const menu = document.getElementById("mobile-menu");
    const open = menu.hidden;
    menu.hidden = !open;
    menuButton.setAttribute("aria-expanded", String(open));
  });
  document.getElementById("mobile-menu")?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      event.currentTarget.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 16), { passive: true });
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
})();
