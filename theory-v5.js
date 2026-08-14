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
