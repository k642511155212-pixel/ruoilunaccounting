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
