// 4級読解問題データ (25題、4択選択式)
// level: 1=短文(50-150字)、2=中文(150-300字)、3=長文(300-500字)
// category: 日記/手紙/メール/案内/告知/広告/ニュース/説明
var READING_4KYU = [
// === Level 1: 短文 (10題) ===
{
  n:1, level:1, category:"メール",
  passage:"Chào Mai!\nNgày mai mình sẽ đến Hà Nội vào lúc 3 giờ chiều. Mình muốn gặp bạn để ăn tối. Bạn có rảnh không?\nNếu rảnh, hãy gọi cho mình nhé.\nLan",
  questions:[
    {q:"Lan đến Hà Nội khi nào?",choices:["Hôm nay sáng","Hôm nay tối","Ngày mai chiều","Ngày mai tối"],ans:2,explanation:"3 giờ chiều ngày mai = 明日の午後3時"},
    {q:"Lan muốn làm gì với Mai?",choices:["Đi du lịch","Ăn tối","Đi mua sắm","Học cùng"],ans:1,explanation:"để ăn tối = 夕食を食べるために"}
  ]
},
{
  n:2, level:1, category:"案内",
  passage:"THÔNG BÁO\nThư viện sẽ đóng cửa từ ngày 20 đến 25 tháng 5 để sửa chữa. Sinh viên có thể trả sách ở văn phòng tầng 1.\nXin cảm ơn.",
  questions:[
    {q:"Thư viện đóng cửa bao lâu?",choices:["3 ngày","5 ngày","6 ngày","1 tuần"],ans:2,explanation:"20-25日 = 6日間"},
    {q:"Sinh viên có thể trả sách ở đâu?",choices:["Thư viện","Văn phòng tầng 1","Văn phòng tầng 2","Không thể trả"],ans:1,explanation:"văn phòng tầng 1 = 1階のオフィス"}
  ]
},
{
  n:3, level:1, category:"日記",
  passage:"Hôm nay là ngày sinh nhật của tôi. Bố mẹ tặng tôi một chiếc xe đạp mới. Bạn bè đến nhà chơi và cùng ăn bánh sinh nhật. Tôi rất vui.",
  questions:[
    {q:"Hôm nay là ngày gì?",choices:["Năm mới","Sinh nhật","Tốt nghiệp","Quốc khánh"],ans:1,explanation:"sinh nhật = 誕生日"},
    {q:"Bố mẹ tặng quà gì?",choices:["Sách","Quần áo","Xe đạp","Điện thoại"],ans:2,explanation:"chiếc xe đạp mới = 新しい自転車"}
  ]
},
{
  n:4, level:1, category:"広告",
  passage:"NHÀ HÀNG VIỆT NAM\nGiảm giá 30% cho tất cả các món ăn từ thứ 2 đến thứ 5.\nĐịa chỉ: 25 Hàng Đậu, Hà Nội\nĐiện thoại: 024-1234-5678",
  questions:[
    {q:"Nhà hàng giảm giá vào những ngày nào?",choices:["Cuối tuần","Thứ 2 đến thứ 5","Cả tuần","Thứ 6 và thứ 7"],ans:1,explanation:"từ thứ 2 đến thứ 5 = 月曜から木曜"},
    {q:"Giảm giá bao nhiêu phần trăm?",choices:["20%","25%","30%","50%"],ans:2,explanation:"30% giảm giá"}
  ]
},
{
  n:5, level:1, category:"メール",
  passage:"Anh Tanaka,\nEm gửi báo cáo tháng 4 cho anh kiểm tra. Nếu có lỗi, xin anh báo lại em trước thứ 6.\nCảm ơn anh.\nMinh",
  questions:[
    {q:"Minh gửi tài liệu gì?",choices:["Hợp đồng","Báo cáo tháng 4","Kế hoạch năm","Đơn xin nghỉ"],ans:1,explanation:"báo cáo tháng 4 = 4月の報告書"},
    {q:"Hạn báo lỗi là khi nào?",choices:["Trước thứ 5","Trước thứ 6","Trước thứ 7","Trong tuần này"],ans:1,explanation:"trước thứ 6 = 金曜より前"}
  ]
},
{
  n:6, level:1, category:"日記",
  passage:"Sáng nay trời mưa nên tôi không đi chạy bộ. Tôi ở nhà đọc sách và uống cà phê. Đến chiều, trời đã hết mưa nên tôi ra công viên dạo.",
  questions:[
    {q:"Sáng nay tác giả không làm gì?",choices:["Đọc sách","Uống cà phê","Chạy bộ","Đi công viên"],ans:2,explanation:"trời mưa nên không đi chạy bộ = 雨だからジョギングしなかった"},
    {q:"Chiều nay thời tiết thế nào?",choices:["Vẫn mưa","Hết mưa","Nắng to","Có tuyết"],ans:1,explanation:"trời đã hết mưa = 雨が止んだ"}
  ]
},
{
  n:7, level:1, category:"告知",
  passage:"LỚP HỌC TIẾNG VIỆT\nKhai giảng: ngày 1 tháng 6\nThời gian: 19h-21h, thứ 2/4/6\nHọc phí: 1.500.000 đồng/tháng\nLiên hệ: cô Hằng 0987-654-321",
  questions:[
    {q:"Lớp học bao nhiêu buổi một tuần?",choices:["2 buổi","3 buổi","4 buổi","5 buổi"],ans:1,explanation:"thứ 2, 4, 6 = 月水金 = 3日"},
    {q:"Học phí bao nhiêu một tháng?",choices:["1 triệu","1,5 triệu","2 triệu","500 nghìn"],ans:1,explanation:"1.500.000 = 150万 = 1.5 triệu"}
  ]
},
{
  n:8, level:1, category:"説明",
  passage:"Phở là món ăn nổi tiếng của Việt Nam. Phở có hai loại chính: phở bò và phở gà. Người Việt thường ăn phở vào buổi sáng.",
  questions:[
    {q:"Phở có mấy loại chính?",choices:["1","2","3","4"],ans:1,explanation:"hai loại chính = 2種類"},
    {q:"Người Việt thường ăn phở khi nào?",choices:["Buổi sáng","Buổi trưa","Buổi tối","Khi đói"],ans:0,explanation:"vào buổi sáng = 朝に"}
  ]
},
{
  n:9, level:1, category:"メール",
  passage:"Chào em,\nAnh không thể đến cuộc họp ngày mai vì bị sốt. Em nhờ anh Hùng họp giúp anh nhé. Anh sẽ liên lạc lại sau khi khỏe hơn.\nAnh Bình",
  questions:[
    {q:"Tại sao anh Bình không thể họp?",choices:["Bận việc","Bị sốt","Đi công tác","Quên giờ"],ans:1,explanation:"vì bị sốt = 熱があるから"},
    {q:"Ai sẽ thay anh Bình họp?",choices:["Em","Anh Hùng","Sếp","Không có ai"],ans:1,explanation:"Em nhờ anh Hùng họp giúp = ハンさんに代理を頼む"}
  ]
},
{
  n:10, level:1, category:"案内",
  passage:"Khách sạn ABC\nGiờ check-in: 14:00\nGiờ check-out: 12:00\nBữa sáng miễn phí từ 6:30 đến 10:00\nBể bơi mở cửa từ 7:00 đến 22:00",
  questions:[
    {q:"Giờ check-out là mấy giờ?",choices:["10 giờ","12 giờ","14 giờ","22 giờ"],ans:1,explanation:"check-out 12:00"},
    {q:"Bữa sáng kết thúc lúc nào?",choices:["6:30","10:00","12:00","22:00"],ans:1,explanation:"bữa sáng đến 10:00"}
  ]
},

// === Level 2: 中文 (10題) ===
{
  n:11, level:2, category:"日記",
  passage:"Tuần trước, tôi và gia đình đã đi du lịch Đà Nẵng trong 3 ngày. Chúng tôi ở khách sạn gần biển. Buổi sáng, tôi và bố tắm biển. Buổi chiều, cả nhà đi tham quan các đền chùa. Buổi tối, chúng tôi ăn hải sản tươi ở nhà hàng. Đà Nẵng đẹp và mọi người rất thân thiện. Tôi muốn quay lại lần nữa.",
  questions:[
    {q:"Gia đình tác giả đi du lịch trong bao lâu?",choices:["1 ngày","2 ngày","3 ngày","1 tuần"],ans:2,explanation:"trong 3 ngày = 3日間"},
    {q:"Buổi sáng, tác giả làm gì?",choices:["Tham quan đền","Tắm biển","Ăn hải sản","Mua sắm"],ans:1,explanation:"Buổi sáng tôi và bố tắm biển"},
    {q:"Tác giả nghĩ gì về Đà Nẵng?",choices:["Đắt và bẩn","Đẹp và thân thiện","Buồn chán","Quá nóng"],ans:1,explanation:"Đà Nẵng đẹp và mọi người rất thân thiện"}
  ]
},
{
  n:12, level:2, category:"手紙",
  passage:"Mẹ kính yêu,\nĐã ba tháng kể từ khi con đi du học ở Nhật. Cuộc sống ở đây rất khác Việt Nam. Mùa đông Tokyo lạnh lắm, có khi xuống dưới 0 độ. Đồ ăn cũng khác, con vẫn nhớ phở và bún chả mẹ nấu. Trường học rất tốt, các bạn Nhật rất hiền. Con sẽ về thăm nhà vào dịp Tết. Mẹ giữ gìn sức khỏe nhé.\nCon Linh",
  questions:[
    {q:"Linh đi du học bao lâu rồi?",choices:["1 tháng","2 tháng","3 tháng","6 tháng"],ans:2,explanation:"ba tháng = 3ヶ月"},
    {q:"Linh nhớ món ăn gì của mẹ?",choices:["Phở và bún chả","Cơm và canh","Bánh mì","Hải sản"],ans:0,explanation:"phở và bún chả mẹ nấu"},
    {q:"Linh sẽ về thăm nhà khi nào?",choices:["Ngay","Mùa hè","Tết","Năm sau"],ans:2,explanation:"vào dịp Tết = テト(旧正月)に"}
  ]
},
{
  n:13, level:2, category:"ニュース",
  passage:"Theo Bộ Giao thông, từ tháng 6 năm nay, người dân Hà Nội sẽ có thể đi tàu điện ngầm tuyến số 2. Tuyến này dài 12km, nối Trung tâm với sân bay Nội Bài. Thời gian đi từ trung tâm đến sân bay chỉ mất 25 phút. Giá vé 30.000 đồng một lượt. Đây là tin vui cho người dân và khách du lịch.",
  questions:[
    {q:"Tuyến tàu điện ngầm khai trương khi nào?",choices:["Tháng 5","Tháng 6","Tháng 7","Năm sau"],ans:1,explanation:"từ tháng 6 năm nay"},
    {q:"Tuyến này nối đâu với đâu?",choices:["Hà Nội với Sài Gòn","Trung tâm với sân bay","Nội thành với ngoại thành","Hai sân bay"],ans:1,explanation:"nối Trung tâm với sân bay Nội Bài"},
    {q:"Mất bao lâu đi từ trung tâm đến sân bay?",choices:["12 phút","25 phút","30 phút","1 giờ"],ans:1,explanation:"chỉ mất 25 phút"}
  ]
},
{
  n:14, level:2, category:"説明",
  passage:"Tết Nguyên Đán là lễ hội quan trọng nhất ở Việt Nam. Tết thường rơi vào khoảng cuối tháng 1 hoặc đầu tháng 2 dương lịch. Trước Tết, người Việt dọn dẹp nhà cửa, mua hoa đào (miền Bắc) hoặc hoa mai (miền Nam) để trang trí. Trong ngày Tết, mọi người mặc đẹp, đi thăm họ hàng và chúc nhau những lời tốt đẹp. Trẻ em rất thích Tết vì được nhận tiền lì xì từ người lớn.",
  questions:[
    {q:"Tết Nguyên Đán thường vào tháng nào?",choices:["Tháng 12","Cuối 1 hoặc đầu 2","Tháng 3","Tháng 4"],ans:1,explanation:"cuối tháng 1 hoặc đầu tháng 2"},
    {q:"Người miền Bắc trang trí hoa gì?",choices:["Hoa hồng","Hoa đào","Hoa mai","Hoa cúc"],ans:1,explanation:"hoa đào (miền Bắc)"},
    {q:"Trẻ em thích Tết vì lý do gì?",choices:["Được nghỉ học","Được ăn ngon","Được nhận lì xì","Được đi du lịch"],ans:2,explanation:"được nhận tiền lì xì"}
  ]
},
{
  n:15, level:2, category:"広告",
  passage:"TUYỂN DỤNG GẤP\nCông ty TNHH Hoa Sen cần tuyển 3 nhân viên kế toán.\nYêu cầu: tốt nghiệp đại học chuyên ngành kế toán, biết sử dụng phần mềm văn phòng, có ít nhất 1 năm kinh nghiệm.\nLương: 10-15 triệu đồng/tháng + thưởng.\nNgười nước ngoài có visa làm việc cũng được.\nNộp hồ sơ trước ngày 30/5 tại địa chỉ: 100 Lê Lợi, Hà Nội.",
  questions:[
    {q:"Công ty cần tuyển bao nhiêu người?",choices:["1 người","2 người","3 người","5 người"],ans:2,explanation:"tuyển 3 nhân viên"},
    {q:"Yêu cầu kinh nghiệm tối thiểu là bao nhiêu?",choices:["Không cần","6 tháng","1 năm","3 năm"],ans:2,explanation:"ít nhất 1 năm kinh nghiệm"},
    {q:"Người nước ngoài có thể nộp hồ sơ không?",choices:["Không được","Được nếu có visa","Phải biết tiếng Việt","Phải sống ở VN 3 năm"],ans:1,explanation:"có visa làm việc cũng được"}
  ]
},
{
  n:16, level:2, category:"メール",
  passage:"Anh Yamamoto thân mến,\nCảm ơn anh đã quan tâm đến sản phẩm của công ty chúng tôi. Em xin gửi catalog mới nhất kèm theo email này. Giá đã bao gồm thuế và phí vận chuyển trong nước Việt Nam. Nếu anh muốn đặt hàng số lượng lớn, em sẽ giảm giá thêm 10%. Anh có thể trả lời email hoặc gọi số 098-xxx-xxx để biết thêm chi tiết.\nXin cảm ơn,\nNguyễn Thị Hằng",
  questions:[
    {q:"Email kèm theo cái gì?",choices:["Hợp đồng","Catalog","Bảng giá","Mẫu hàng"],ans:1,explanation:"em xin gửi catalog mới nhất"},
    {q:"Giá đã bao gồm cái gì?",choices:["Chỉ thuế","Chỉ phí vận chuyển","Cả thuế và phí vận chuyển","Không bao gồm gì"],ans:2,explanation:"đã bao gồm thuế và phí vận chuyển"},
    {q:"Đặt hàng nhiều thì được gì?",choices:["Tặng quà","Giảm giá 10%","Miễn thuế","Vận chuyển nhanh"],ans:1,explanation:"giảm giá thêm 10%"}
  ]
},
{
  n:17, level:2, category:"日記",
  passage:"Hôm qua là sinh nhật của vợ tôi. Sau khi đi làm về, tôi đã chuẩn bị bữa tối đặc biệt. Tôi nấu món sukiyaki - món Nhật mà vợ tôi rất thích. Tôi cũng mua một chiếc bánh kem và một bó hoa hồng đỏ. Khi vợ tôi về nhà, cô ấy rất ngạc nhiên và cảm động. Cô ấy nói đây là sinh nhật vui nhất từ trước đến nay.",
  questions:[
    {q:"Hôm qua là dịp gì?",choices:["Sinh nhật tác giả","Sinh nhật vợ","Kỷ niệm cưới","Năm mới"],ans:1,explanation:"sinh nhật của vợ tôi"},
    {q:"Tác giả nấu món gì?",choices:["Phở","Sushi","Sukiyaki","Bánh mì"],ans:2,explanation:"món sukiyaki"},
    {q:"Vợ tác giả phản ứng thế nào?",choices:["Buồn","Tức giận","Ngạc nhiên và cảm động","Không quan tâm"],ans:2,explanation:"rất ngạc nhiên và cảm động"}
  ]
},
{
  n:18, level:2, category:"説明",
  passage:"Áo dài là trang phục truyền thống của Việt Nam. Áo dài có lịch sử lâu đời và đã thay đổi nhiều theo thời gian. Áo dài hiện đại bó sát người, dài đến mắt cá chân, mặc cùng quần dài. Phụ nữ Việt Nam thường mặc áo dài vào những dịp đặc biệt như đám cưới, lễ tết, hay đi học. Áo dài làm cho phụ nữ trông duyên dáng và thanh lịch.",
  questions:[
    {q:"Áo dài là gì?",choices:["Áo Trung Quốc","Trang phục Việt Nam","Đồng phục công ty","Áo thể thao"],ans:1,explanation:"trang phục truyền thống của Việt Nam"},
    {q:"Áo dài hiện đại dài đến đâu?",choices:["Đầu gối","Bắp chân","Mắt cá chân","Mặt đất"],ans:2,explanation:"dài đến mắt cá chân"},
    {q:"Phụ nữ Việt mặc áo dài khi nào?",choices:["Hằng ngày","Khi đi ngủ","Dịp đặc biệt","Khi tập thể dục"],ans:2,explanation:"vào những dịp đặc biệt"}
  ]
},
{
  n:19, level:2, category:"案内",
  passage:"BẢO TÀNG LỊCH SỬ HÀ NỘI\nGiờ mở cửa: 8:00 - 17:00, từ thứ 3 đến chủ nhật\nNghỉ vào thứ 2 hằng tuần\nGiá vé:\n- Người lớn: 40.000 đồng\n- Trẻ em dưới 12 tuổi: 20.000 đồng\n- Sinh viên có thẻ: 30.000 đồng\nKhông được chụp ảnh trong khu trưng bày chính.\nLiên hệ: 024-3825-2853",
  questions:[
    {q:"Bảo tàng nghỉ ngày nào?",choices:["Chủ nhật","Thứ 2","Thứ 7","Không nghỉ"],ans:1,explanation:"Nghỉ vào thứ 2"},
    {q:"Giá vé sinh viên là bao nhiêu?",choices:["20.000","30.000","40.000","Miễn phí"],ans:1,explanation:"Sinh viên có thẻ: 30.000"},
    {q:"Trong bảo tàng có thể làm gì?",choices:["Chụp ảnh tự do","Không được chụp ảnh khu chính","Hút thuốc","Ăn uống"],ans:1,explanation:"Không được chụp ảnh trong khu trưng bày chính"}
  ]
},
{
  n:20, level:2, category:"ニュース",
  passage:"Theo dự báo thời tiết, miền Bắc Việt Nam sẽ có một đợt rét đậm từ ngày 15 đến 20 tháng 12. Nhiệt độ ở Hà Nội có thể xuống dưới 10 độ vào ban đêm. Người dân được khuyến cáo mặc ấm khi ra đường, đặc biệt là người già và trẻ em. Các trường học có thể cho học sinh nghỉ học nếu nhiệt độ xuống dưới 7 độ.",
  questions:[
    {q:"Đợt rét đậm kéo dài bao lâu?",choices:["3 ngày","5 ngày","6 ngày","1 tuần"],ans:2,explanation:"15-20 = 6日間"},
    {q:"Nhiệt độ thấp nhất có thể là bao nhiêu?",choices:["Trên 10 độ","Dưới 10 độ vào đêm","20 độ","Dưới 0 độ"],ans:1,explanation:"có thể xuống dưới 10 độ vào ban đêm"},
    {q:"Học sinh có thể nghỉ học khi nào?",choices:["Khi mưa to","Dưới 7 độ","Dưới 10 độ","Cuối tuần"],ans:1,explanation:"dưới 7 độ"}
  ]
},

// === Level 3: 長文 (5題) ===
{
  n:21, level:3, category:"説明",
  passage:"Cà phê Việt Nam nổi tiếng trên thế giới. Việt Nam là nước xuất khẩu cà phê lớn thứ hai thế giới, chỉ sau Brazil. Cà phê được trồng chủ yếu ở vùng Tây Nguyên, nơi có khí hậu mát mẻ và đất đỏ tốt. Có hai loại cà phê chính ở Việt Nam: Robusta và Arabica. Robusta có vị đậm, đắng hơn, được dùng để pha cà phê đá truyền thống. Arabica có vị nhẹ hơn, thơm hơn, thường được dùng cho cà phê espresso. Người Việt có cách uống cà phê riêng. Họ pha cà phê bằng phin, một dụng cụ bằng kim loại, rồi cho thêm sữa đặc và đá. Cà phê sữa đá là thức uống quen thuộc của người Việt vào buổi sáng.",
  questions:[
    {q:"Việt Nam đứng thứ mấy về xuất khẩu cà phê?",choices:["Thứ 1","Thứ 2","Thứ 3","Thứ 5"],ans:1,explanation:"lớn thứ hai thế giới"},
    {q:"Cà phê được trồng nhiều ở đâu?",choices:["Hà Nội","Sài Gòn","Tây Nguyên","Đà Nẵng"],ans:2,explanation:"chủ yếu ở vùng Tây Nguyên"},
    {q:"Cà phê nào có vị đậm hơn?",choices:["Robusta","Arabica","Cả hai","Không có"],ans:0,explanation:"Robusta có vị đậm, đắng hơn"},
    {q:"Phin là gì?",choices:["Loại cà phê","Tên quán","Dụng cụ pha cà phê","Loại sữa"],ans:2,explanation:"phin, một dụng cụ bằng kim loại"}
  ]
},
{
  n:22, level:3, category:"日記",
  passage:"Đã hơn 2 năm tôi sống ở Hà Nội rồi. Lúc đầu, tôi gặp nhiều khó khăn vì không biết tiếng Việt và không quen với văn hóa. Tôi không hiểu mọi người nói gì, không biết mua đồ ở đâu, đi đâu. Nhưng dần dần, nhờ sự giúp đỡ của bạn bè và đồng nghiệp Việt Nam, cuộc sống của tôi đã trở nên dễ dàng hơn. Tôi học tiếng Việt mỗi ngày, làm quen với người dân địa phương, và thử nhiều món ăn mới. Bây giờ tôi đã có thể đi chợ một mình, gọi taxi, và nói chuyện đơn giản với người Việt. Hà Nội đối với tôi không còn là một thành phố xa lạ nữa. Tôi yêu Hà Nội như quê hương thứ hai của mình.",
  questions:[
    {q:"Tác giả sống ở Hà Nội bao lâu rồi?",choices:["1 năm","Hơn 2 năm","5 năm","10 năm"],ans:1,explanation:"hơn 2 năm tôi sống ở Hà Nội"},
    {q:"Lúc đầu tác giả gặp khó khăn vì sao?",choices:["Tiền ít","Không biết tiếng Việt và văn hóa","Bị ốm","Không có bạn"],ans:1,explanation:"không biết tiếng Việt và không quen với văn hóa"},
    {q:"Ai đã giúp đỡ tác giả?",choices:["Gia đình","Cảnh sát","Bạn bè và đồng nghiệp Việt","Người Nhật"],ans:2,explanation:"sự giúp đỡ của bạn bè và đồng nghiệp Việt Nam"},
    {q:"Bây giờ tác giả cảm thấy thế nào về Hà Nội?",choices:["Vẫn xa lạ","Yêu như quê hương thứ hai","Muốn về nước","Không thích"],ans:1,explanation:"Tôi yêu Hà Nội như quê hương thứ hai"}
  ]
},
{
  n:23, level:3, category:"ニュース",
  passage:"Theo báo cáo của Bộ Y tế, số người béo phì ở Việt Nam đang tăng nhanh trong những năm gần đây, đặc biệt là ở các thành phố lớn. Nguyên nhân chính là do chế độ ăn uống không lành mạnh và lối sống ít vận động. Nhiều người trẻ thường xuyên ăn đồ ăn nhanh, uống nước ngọt, và ngồi nhiều giờ trước máy tính hoặc điện thoại. Để cải thiện tình hình, các chuyên gia khuyến cáo người dân nên ăn nhiều rau quả, hạn chế đường và chất béo, và tập thể dục ít nhất 30 phút mỗi ngày. Trẻ em cũng nên được khuyến khích chơi thể thao thay vì chỉ chơi trò chơi điện tử. Sức khỏe là tài sản quý giá nhất, không nên xem nhẹ.",
  questions:[
    {q:"Vấn đề chính được nói đến là gì?",choices:["Bệnh ung thư","Béo phì","Bệnh tim","Cảm cúm"],ans:1,explanation:"số người béo phì ở Việt Nam đang tăng"},
    {q:"Vấn đề này đặc biệt ở đâu?",choices:["Vùng nông thôn","Thành phố lớn","Vùng núi","Đảo"],ans:1,explanation:"đặc biệt là ở các thành phố lớn"},
    {q:"Nguyên nhân chính là gì?",choices:["Di truyền","Khí hậu","Ăn uống và lối sống","Stress"],ans:2,explanation:"chế độ ăn uống không lành mạnh và lối sống ít vận động"},
    {q:"Các chuyên gia khuyên tập thể dục bao lâu?",choices:["10 phút","15 phút","30 phút mỗi ngày","2 giờ"],ans:2,explanation:"ít nhất 30 phút mỗi ngày"}
  ]
},
{
  n:24, level:3, category:"説明",
  passage:"Hà Nội là thủ đô của Việt Nam, có lịch sử hơn 1000 năm. Năm 1010, vua Lý Thái Tổ đã quyết định dời đô từ Hoa Lư về Thăng Long, là tên cũ của Hà Nội. Từ đó, Thăng Long - Hà Nội đã trở thành trung tâm chính trị, kinh tế và văn hóa của cả nước. Hà Nội có nhiều di tích lịch sử nổi tiếng như Hồ Hoàn Kiếm, Văn Miếu - Quốc Tử Giám, Lăng Chủ tịch Hồ Chí Minh, và phố cổ. Khí hậu Hà Nội có 4 mùa rõ rệt: mùa xuân ấm áp với hoa đào nở, mùa hè nóng và mưa nhiều, mùa thu mát mẻ với cây bàng đỏ, mùa đông lạnh và khô. Mỗi mùa đều có vẻ đẹp riêng. Hà Nội cũng nổi tiếng với ẩm thực phong phú như phở, bún chả, cốm.",
  questions:[
    {q:"Hà Nội có lịch sử bao nhiêu năm?",choices:["500","800","Hơn 1000","2000"],ans:2,explanation:"có lịch sử hơn 1000 năm"},
    {q:"Tên cũ của Hà Nội là gì?",choices:["Hoa Lư","Thăng Long","Sài Gòn","Đại Việt"],ans:1,explanation:"Thăng Long, là tên cũ của Hà Nội"},
    {q:"Hà Nội có mấy mùa?",choices:["2","3","4","1"],ans:2,explanation:"có 4 mùa rõ rệt"},
    {q:"Mùa nào ở Hà Nội có hoa đào?",choices:["Xuân","Hè","Thu","Đông"],ans:0,explanation:"mùa xuân ấm áp với hoa đào nở"},
    {q:"Món ăn nào KHÔNG được nhắc đến?",choices:["Phở","Bún chả","Cốm","Bánh mì"],ans:3,explanation:"phở, bún chả, cốm が言及されている、bánh mìはない"}
  ]
},
{
  n:25, level:3, category:"手紙",
  passage:"Em Lan thân mến,\nAnh viết thư này từ Tokyo, nơi anh đã sống và làm việc được 6 tháng rồi. Cuộc sống ở Nhật rất khác Việt Nam. Người Nhật làm việc rất chăm chỉ, thường ở văn phòng đến 8-9 giờ tối. Họ cũng rất đúng giờ và lịch sự. Tàu điện ở Tokyo rất tiện lợi, đi đâu cũng có. Tuy nhiên, vật giá ở đây đắt hơn Việt Nam nhiều lần. Một bữa cơm trưa đơn giản cũng tốn 1000 yên (khoảng 200.000 đồng). Anh nhớ những bữa cơm gia đình ở quê, nhớ mùi nước mắm và rau muống. Anh sẽ về thăm em vào tháng 12 này. Em chuẩn bị tinh thần đi ăn nhiều món Việt với anh nhé! Em học hành thế nào? Sắp thi đại học rồi, cố gắng nhé! Anh tin em sẽ đỗ.\nAnh Hùng",
  questions:[
    {q:"Anh Hùng đã ở Tokyo bao lâu?",choices:["3 tháng","6 tháng","1 năm","2 năm"],ans:1,explanation:"đã sống và làm việc được 6 tháng"},
    {q:"Người Nhật thường về nhà lúc mấy giờ?",choices:["5-6 giờ","8-9 giờ tối","11 giờ đêm","Không cố định"],ans:1,explanation:"thường ở văn phòng đến 8-9 giờ tối"},
    {q:"Tác giả nhớ gì ở Việt Nam?",choices:["Bạn bè","Bữa cơm gia đình, nước mắm","Thời tiết","Quần áo"],ans:1,explanation:"nhớ những bữa cơm gia đình, nhớ mùi nước mắm"},
    {q:"Anh Hùng sẽ về Việt Nam khi nào?",choices:["Tháng 10","Tháng 12","Năm sau","Chưa biết"],ans:1,explanation:"về thăm em vào tháng 12 này"},
    {q:"Em Lan sắp làm gì?",choices:["Đi học cấp 2","Thi đại học","Đi làm","Đi du học"],ans:1,explanation:"Sắp thi đại học rồi"}
  ]
}
];
