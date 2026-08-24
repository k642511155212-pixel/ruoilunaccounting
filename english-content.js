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
