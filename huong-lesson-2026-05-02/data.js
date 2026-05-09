// Huong先生 4級練習問題 (2026-05-02 anh Yata)
// Giáo viên: Trịnh Thị Thùy Hương

// 問題I: 適切な動詞を選ぶ穴埋め (25問)
// confirmed: 添削で正解確定 / unsolved: 未解答
var FILL_QUESTIONS = [
{n:1, sentence:"Chúng ta phải (___) những gia đình có hoàn cảnh như thế nào?", ans:"mời", jp:"どのような状況の家庭を招待すべきですか?", confirmed:true},
{n:2, sentence:"Tôi đã (___) môn học xong rồi.", ans:"đăng ký", jp:"私はもう履修登録を済ませた。", confirmed:true},
{n:3, sentence:"Chị ấy đến Việt Nam (___) 3 tháng rồi.", ans:"được", jp:"彼女がベトナムに来て3ヶ月になります。", confirmed:true},
{n:4, sentence:"Vấn đề này cần phải (___) ý kiến.", ans:"trao đổi", jp:"この問題は意見を交換する必要がある。", confirmed:true},
{n:5, sentence:"Anh hãy (___) máy lạnh nhé.", ans:"tắt", jp:"エアコンを消してね。", confirmed:true},
{n:6, sentence:"Tôi muốn (___) bạn với du học sinh Việt Nam.", ans:"kết", jp:"ベトナム人留学生と友達になりたい。", confirmed:true},
{n:7, sentence:"(___) anh vào.", ans:"mời", jp:"どうぞお入りください。", confirmed:true},
{n:8, sentence:"Các em (___) chú ý nghe nhé.", ans:"hãy", jp:"皆さん、よく聞いてください。", confirmed:true},
{n:9, sentence:"Xin lỗi, (___) tôi hỏi một chút.", ans:"cho", jp:"すみません、ちょっと尋ねてもいいですか。", confirmed:true},
{n:10, sentence:"Chúng ta (___) ăn cơm tối nhé!", ans:"cùng", jp:"一緒に夕食を食べましょう！", confirmed:true},
{n:11, sentence:"Món ăn này thì có (___) nước mắm không?", ans:"chấm", jp:"この料理はヌクマムをつけて食べますか？", confirmed:true},
{n:12, sentence:"Anh (___) tình hình Iran gần đây thế nào?", ans:"thấy", jp:"最近のイラン情勢をどう見ますか？", confirmed:true},
{n:13, sentence:"Trứng thì không được (___) lò vi sóng.", ans:"cho vào", jp:"卵は電子レンジに入れてはいけない。", confirmed:true},
{n:14, sentence:"Trước khi đến, anh sẽ (___) qua cửa hàng tiện lợi mua đồ uống.", ans:"ghé", jp:"行く前にコンビニに寄って飲み物を買います。", confirmed:true},
{n:15, sentence:"Nghe nói thủ tướng nước Anh đã (___) rồi.", ans:"từ chức", jp:"イギリスの首相がもう辞任したと聞きました。", confirmed:true},
{n:16, sentence:"Chị tôi chưa biết (___) làm nem rán.", ans:"cách", jp:"姉はまだ揚げ春巻きの作り方を知らない。", confirmed:true},
{n:17, sentence:"Trường đại học này là một trong những trường đại học (___) ở Nhật.", ans:"lâu đời", jp:"この大学は日本の歴史ある大学の一つです。", confirmed:true},
{n:18, sentence:"Tôi đã không bán (___) những bức tranh trong nhà.", ans:"hết", jp:"家にある絵を全ては売り切れなかった。", confirmed:true},
{n:19, sentence:"Bây giờ tôi đang (___) phòng trọ.", ans:"thuê", jp:"今、私は下宿を借りています。", confirmed:true},
{n:20, sentence:"(___) anh biết kết quả thi, anh hãy báo cho tôi nhé.", ans:"khi nào", jp:"試験結果が分かったら知らせてください。", confirmed:true},
{n:21, sentence:"Xin lỗi, khách sạn này không còn phòng (___).", ans:"trống", jp:"すみません、このホテルには空き部屋がありません。", confirmed:true},
{n:22, sentence:"Mẹ ơi, cái áo này có (___) với con không?", ans:"hợp", jp:"お母さん、この服は私に似合いますか？", confirmed:true},
{n:23, sentence:"Bất cứ sinh viên (___) cũng có thể tham gia.", ans:"nào", jp:"どの学生でも参加することができる。", confirmed:true},
{n:24, sentence:"Tôi ghét cả quả sầu riêng (___) quả mít.", ans:"lẫn", jp:"私はドリアンもジャックフルーツも嫌いです。", confirmed:true},
{n:25, sentence:"Ngủ đủ thì bạn (___) làm việc được.", ans:"mới", jp:"十分寝てこそ仕事ができる。", confirmed:true}
];

// 問題I 選択肢一覧 (参考表示用)
var FILL_CHOICES = "trao đổi / khi nào / mới / được / đăng ký / tắt / hãy / lẫn / lâu đời / kết / mời / cùng / cho / hợp / hết / nào / trống / ghé / thấy / chấm / cho vào / từ chức / cách / thuê";

// 問題II: 並び替え (35問)
// words: シャッフル前の語句配列, ans: 正解の文 (空文字列なら未解答)
var REARRANGE_QUESTIONS = [
{n:1, words:["cưới","cô ấy","gia đình","dù","vẫn","có phản đối","thì","tôi"], ans:"Dù gia đình có phản đối thì tôi vẫn cưới cô ấy"},
{n:2, words:["chúng ta","không thể","dù","cố gắng","các anh","thay đổi","hết sức","cũng","tình hình","thì"], ans:"Dù chúng ta cố gắng hết sức thì cũng không thể thay đổi tình hình"},
{n:3, words:["phát minh","mì ăn liền","do","Ando Momofuku","ra"], ans:"Mì ăn liền do Ando Momofuku phát minh ra"},
{n:4, words:["do","bản báo cáo","chị Vy","này","viết"], ans:"Bản báo cáo này do chị Vy viết"},
{n:5, words:["nấu được","anh Kimura","không những","món Nhật","mà còn","nữa","món ăn Trung Quốc"], ans:"Anh Kimura không những nấu được món Nhật mà còn món ăn Trung Quốc nữa"},
{n:6, words:["trời","không những","nữa","mà còn","mưa","lạnh"], ans:"Trời không những mưa mà còn lạnh nữa"},
{n:7, words:["là","cô ấy","không những","một diễn viên","mà còn","một nhà văn"], ans:"Cô ấy không những là một diễn viên mà còn là một nhà văn"},
{n:8, words:["có","Hà Nội","Hồ Tây","hồ nước tự nhiên","ví dụ như","nhiều","Hồ Hoàn Kiếm"], ans:"Hà Nội có nhiều hồ nước tự nhiên ví dụ như Hồ Tây Hồ Hoàn Kiếm"},
{n:9, words:["tại Việt Nam","cũng có","căn bếp nào","bất cứ","nước mắm"], ans:"Tại Việt Nam bất cứ căn bếp nào cũng có nước mắm"},
{n:10, words:["bạn","phải","làm","trước khi","bất cứ điều gì","suy nghĩ"], ans:"Trước khi làm bất cứ điều gì bạn phải suy nghĩ"},
{n:11, words:["chúng ta","giờ đây","bất cứ lúc nào","bất cứ thứ gì","mua sắm trực tuyến","vào","có thể"], ans:"Giờ đây chúng ta có thể mua sắm trực tuyến bất cứ thứ gì vào bất cứ lúc nào"},
{n:12, words:["ứng biến","tùy cơ"], ans:"Tùy cơ ứng biến"},
{n:13, words:["thay đổi","trọng lượng","và","tùy theo","kích thước","giá tiền"], ans:"Tùy theo trọng lượng và kích thước giá tiền thay đổi"},
{n:14, words:["tùy thuộc","của","câu trả lời","vào","mỗi người","cách suy nghĩ"], ans:"Câu trả lời tùy thuộc vào cách suy nghĩ của mỗi người"},
{n:15, words:["bài tập về nhà","nhiều","đến mức","học sinh","muốn","khóc"], ans:"Bài tập về nhà nhiều đến mức học sinh muốn khóc"},
{n:16, words:["em trai tôi","mải chơi game","đến nỗi","quên","ăn"], ans:"Em trai tôi mải chơi game đến nỗi quên ăn"},
{n:17, words:["hành khách","phải","xếp hàng","chờ","hàng giờ","tại sân bay","để","làm thủ tục"], ans:"Hành khách phải xếp hàng chờ hàng giờ tại sân bay để làm thủ tục"},
// 18-23: 出題ミスで提示順そのままが正解 (Huong先生確認済み 2026-05-04)
{n:18, words:["chị","muốn mua","bao nhiêu","thì","tôi","sẽ bán","cho chị","bấy nhiêu"], ans:"Chị muốn mua bao nhiêu thì tôi sẽ bán cho chị bấy nhiêu"},
{n:19, words:["giám đốc","yêu cầu","sao","thì","tôi","làm","vậy"], ans:"Giám đốc yêu cầu sao thì tôi làm vậy"},
{n:20, words:["cứ","mưa to","là","đường phố Hà Nội","bị","ngập"], ans:"Cứ mưa to là đường phố Hà Nội bị ngập"},
{n:21, words:["tiếng còi xe tải","khiến","tôi","giật mình"], ans:"Tiếng còi xe tải khiến tôi giật mình"},
{n:22, words:["câu chuyện","của Lan","làm","tôi","cảm động","đến mức","rơi nước mắt"], ans:"Câu chuyện của Lan làm tôi cảm động đến mức rơi nước mắt"},
{n:23, words:["Covid-19","đã","làm cho","ngành du lịch","tê liệt","hoàn toàn"], ans:"Covid-19 đã làm cho ngành du lịch tê liệt hoàn toàn"},
{n:24, words:["luật sư","muốn","thuê","một cách nhanh chóng","thì","anh","nếu","giải quyết","nên"], ans:"Nếu anh muốn giải quyết một cách nhanh chóng thì nên thuê luật sư"},
{n:25, words:["tôi","lấy","quần áo","tự","may"], ans:"Tôi tự may quần áo lấy"},
{n:26, words:["Lan","không đồng ý","dù","đi du học","nhưng","vẫn","bố mẹ"], ans:"Dù bố mẹ không đồng ý nhưng Lan vẫn đi du học"},
{n:27, words:["được diễn ra","xấu","trận đấu","nhưng","mặc dù","vẫn","thời tiết"], ans:"Mặc dù thời tiết xấu nhưng trận đấu vẫn được diễn ra"},
{n:28, words:["chưa bao giờ","Hiền","đi làm muộn","tuy","nhà xa","nhưng"], ans:"Tuy nhà xa nhưng Hiền chưa bao giờ đi làm muộn"},
{n:29, words:["ăn trộm","tôi","cũng","không bao giờ","có nghèo","thì","dù"], ans:"Dù có nghèo thì tôi cũng không bao giờ ăn trộm"},
{n:30, words:["nói lời cảm ơn","nên","chúng ta","dù","khi","thích hay không","cũng","thì","được tặng quà"], ans:"Khi được tặng quà dù thích hay không thì chúng ta nên nói lời cảm ơn"},
{n:31, words:["tôi","gọi điện","cũng","dù","hay rảnh rỗi","bố mẹ","hằng ngày","thì","cho","bận rộn"], ans:"Dù bận rộn hay rảnh rỗi thì tôi cũng gọi điện cho bố mẹ hằng ngày"},
{n:32, words:["có thể nói","là","núi Phú Sĩ","biểu tượng","Nhật Bản","của"], ans:"Có thể nói núi Phú Sĩ là biểu tượng của Nhật Bản"},
{n:33, words:["có thể nói","Covid-19","đã","thói quen","người tiêu dùng","thay đổi"], ans:"Có thể nói Covid-19 đã thay đổi thói quen người tiêu dùng"},
{n:34, words:["đau dạ dày","anh ấy","do","bị","bỏ","thường xuyên","bữa sáng","nên"], ans:"Anh ấy thường xuyên bỏ bữa sáng nên bị đau dạ dày"},
{n:35, words:["tôi","do","thi lại","lười học","nên","phải","môn tiếng Pháp"], ans:"Do lười học nên tôi phải thi lại môn tiếng Pháp"}
];
