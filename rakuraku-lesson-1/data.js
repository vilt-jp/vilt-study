// らくらくベトナム語 ViLT試験直前対策ライブ #1 (動画ID: ZBo65P47c6A)
// 58問: 穴埋め選択16問、間違い探し15問、単語の正しい使い方12問、正解語の判別15問

// === Fill: 穴埋め選択 (16問) ===
// 4つの選択肢のうち1つだけが文中にあり、それが空欄に入る正解
// sentence: 完成形の文（正解の語が入っている、括弧内が空欄部分）
// choices: 4択 / ans: 正解インデックス
var FILL_QUESTIONS = [
{n:1, sentence:"( Mỗi ) nơi một phong tục, em nên tìm hiểu trước khi đi du lịch.", blank:"Mỗi", choices:["từng","với","mỗi","các"], ans:2, jp:"場所ごとに風習が異なるので、旅行に行く前に調べておくべきです。", explanation:"mỗi=各〜/〜ごとに / từng=一つ一つの / với=〜と / các=諸〜"},
{n:2, sentence:"Tết đến, nhà nào cũng chuẩn bị ( nào ) bánh chưng, ( nào ) mứt, ( nào ) hoa đào.", blank:"nào", choices:["này","mọi","những","nào"], ans:3, jp:"旧正月になると、どの家もバインチュンやら、ムット（乾燥果実）やら、桃の花やらを準備します。", explanation:"nào...nào...nào...= 列挙「〜やら〜やら」 / mọi=すべての / những=複数"},
{n:3, sentence:"Vào ngày Quốc khánh, người dân tập trung rất đông ở ( quảng trường ) để xem pháo hoa.", blank:"quảng trường", choices:["khu công nghiệp","quảng trường","ngoại ô","cửa ra vào"], ans:1, jp:"建国記念日には、人々は花火を見るために広場に大勢集まります。", explanation:"quảng trường=広場 / khu công nghiệp=工業団地 / ngoại ô=郊外 / cửa ra vào=入り口"},
{n:4, sentence:"( Khói bụi ) từ các nhà máy khiến cho thành phố bị ô nhiễm trầm trọng.", blank:"Khói bụi", choices:["không khí","tiếng ồn","khói bụi","ánh sáng"], ans:2, jp:"工場からの煙や埃（煙塵）が、街を深刻な汚染状態にしています。", explanation:"khói bụi=煙塵 / không khí=空気 / tiếng ồn=騒音 / ánh sáng=光"},
{n:8, sentence:"Hai công ty này ( hợp tác ) với nhau lâu lắm rồi.", blank:"hợp tác", choices:["hợp tác","cãi nhau","tâm sự","hỗ trợ"], ans:0, jp:"この2つの会社は、かなり前から提携（協力）しています。", explanation:"hợp tác=合作・協力 / cãi nhau=喧嘩 / tâm sự=打ち明け話 / hỗ trợ=援助"},
{n:9, sentence:"Em muốn thuê một căn nhà có các ( tiện nghi ) cơ bản như: máy giặt, điều hòa, tivi, tủ lạnh.", blank:"tiện nghi", choices:["tiện ích","tiện nghi","dịch vụ","nội thất"], ans:1, jp:"洗濯機、エアコン、テレビ、冷蔵庫などの基本的な設備がある家を借りたいです。", explanation:"tiện nghi=設備・什器 / tiện ích=利便性 / dịch vụ=サービス / nội thất=内装"},
{n:10, sentence:"Khi còn là sinh viên, em ấy thường sống trong ( ký túc xá ) của trường.", blank:"ký túc xá", choices:["nhà ở","chỗ ở","nhà trọ","ký túc xá"], ans:3, jp:"学生の頃、彼女はよく学校の寮に住んでいました。", explanation:"ký túc xá=学生寮 / nhà ở=住宅 / chỗ ở=住処 / nhà trọ=下宿"},
{n:11, sentence:"Chị Hoa nghỉ việc ở công ty này vì không chịu được ( áp lực ) của công việc.", blank:"áp lực", choices:["áp lực","mệt mỏi","căng thẳng","bận rộn"], ans:0, jp:"ホアさんは仕事のプレッシャーに耐えられず、この会社を辞めました。", explanation:"áp lực=圧力・プレッシャー / mệt mỏi=疲れ / căng thẳng=ストレス / bận rộn=忙しい"},
{n:16, sentence:"Ngày mai, em được hẹn đến công ty ( phỏng vấn ) trực tiếp.", blank:"phỏng vấn", choices:["khởi nghiệp","phỏng vấn","trúng tuyển","thảo luận"], ans:1, jp:"明日、会社へ行って直接面接を受けることになっています。", explanation:"phỏng vấn=面接 / khởi nghiệp=起業 / trúng tuyển=採用 / thảo luận=議論"},
{n:17, sentence:"Công việc này tuy lương thấp nhưng lại rất ( nhàn ).", blank:"nhàn", choices:["hạnh phúc","chính thức","nhàn","vui vẻ"], ans:2, jp:"この仕事は給料が低いですが、とても楽です。", explanation:"nhàn=楽な・暇な / hạnh phúc=幸せ / chính thức=正式 / vui vẻ=陽気"},
{n:18, sentence:"Công ty sẽ ( đào tạo ) cho tất cả nhân viên trước khi bắt đầu làm việc chính thức.", blank:"đào tạo", choices:["giáo dục","luyện tập","đào tạo","học tập"], ans:2, jp:"会社は、正式に働き始める前に全従業員に対して研修（教育）を行います。", explanation:"đào tạo=研修・養成 / giáo dục=教育 / luyện tập=練習 / học tập=学習"},
{n:19, sentence:"Công việc của em rất ( linh hoạt ), có thể làm việc tại công ty hoặc ở nhà.", blank:"linh hoạt", choices:["linh hoạt","tiện lợi","tự do","thoải mái"], ans:0, jp:"私の仕事はとても柔軟で、会社でも自宅でも働けます。", explanation:"linh hoạt=柔軟な / tiện lợi=便利 / tự do=自由 / thoải mái=快適"},
{n:24, sentence:"Bạn có thể gọi taxi, đặt nhà hàng, bắt xe ôm, v.v… trên các ( ứng dụng ) điện thoại một cách dễ dàng.", blank:"ứng dụng", choices:["chương trình","ứng dụng","phiếu bảo hành","mạng xã hội"], ans:1, jp:"スマートフォンの応用ソフト上で、タクシーを呼んだり、レストランを予約したり、バイクタクシーを捕まえたりすることが簡単にできます。", explanation:"ứng dụng=応用ソフト / chương trình=番組 / phiếu bảo hành=保証書 / mạng xã hội=交流サイト"},
{n:25, sentence:"Ôi, hộ chiếu của tớ sắp ( hết hạn ) rồi, tớ phải đi làm lại thôi.", blank:"hết hạn", choices:["hết hạn","kết thúc","hết sạch","bị hỏng"], ans:0, jp:"ああ、パスポートがもうすぐ期限切れになるので、更新しに行かなければなりません。", explanation:"hết hạn=期限切れ / kết thúc=終了 / hết sạch=すっかりなくなる / bị hỏng=故障"},
{n:26, sentence:"Với các chuyến bay nội địa, hành khách dưới 14 tuổi cần xuất trình ( giấy khai sinh ).", blank:"giấy khai sinh", choices:["giấy khai sinh","thẻ sinh viên","bằng lái xe","bằng tốt nghiệp"], ans:0, jp:"国内線では、14歳未満の乗客は出生証明書を提示する必要があります。", explanation:"giấy khai sinh=出生証明書 / thẻ sinh viên=学生証 / bằng lái xe=運転免許 / bằng tốt nghiệp=卒業証書"},
{n:27, sentence:"Muỗi vằn là vật trung gian truyền bệnh ( sốt xuất huyết ) từ người sang người.", blank:"sốt xuất huyết", choices:["sốt cao","chân tay miệng","cảm cúm","sốt xuất huyết"], ans:3, jp:"シマカは、人から人へデング熱を媒介する生き物です。", explanation:"sốt xuất huyết=デング熱 / sốt cao=高熱 / chân tay miệng=手足口病 / cảm cúm=インフルエンザ"}
];

// === Error: 間違い探し (15問) ===
// 文中4箇所の下線部のうち誤っている語を選ぶ
// sentence: 元の（誤りを含む）文 / underlines: A,B,C,D の下線部 (4語句)
// ans: 誤りの位置 / correctSentence: 正しい文 / correctWord: 正解の語
var ERROR_QUESTIONS = [
{n:1, sentence:"Anh ấy vừa mới bắt đầu làm việc mà chịu than mệt rồi.", underlines:["vừa mới","bắt đầu","mà","chịu"], ans:3, correctWord:"đã", correctSentence:"Anh ấy vừa mới bắt đầu làm việc mà đã than mệt rồi.", jp:"彼は仕事を始めたばかりなのに、もう疲れたと文句を言った。", explanation:"S + mới/vừa + V1 + đã + V2: 〜したばかりなのに、もう…した（時間が驚くほど短い）"},
{n:2, sentence:"Chẳng mấy tôi sẽ hoàn thành công việc này trước thời hạn.", underlines:["Chẳng mấy","sẽ","trước","thời hạn"], ans:0, correctWord:"Nhất định", correctSentence:"Nhất định tôi sẽ hoàn thành công việc này trước thời hạn.", jp:"必ず期限までにこの仕事を終わらせます。", explanation:"Chẳng mấy + N = 〜が少ない（数量）. ここでは Nhất định = 必ず が適切"},
{n:3, sentence:"Xa chứ! Đi xe máy chỉ mất 10 phút là tới.", underlines:["chứ","mất","là","tới"], ans:0, correctWord:"đâu", correctSentence:"Xa đâu! Đi xe máy chỉ mất 10 phút là tới.", jp:"遠くないですよ！バイクでたった10分で着きます。", explanation:"Adj + đâu! = 〜じゃないよ（否定）"},
{n:4, sentence:"Họ có đến muộn không, chỉ là chúng ta đến sớm hơn giờ hẹn thôi.", underlines:["có","muộn","không","chỉ"], ans:2, correctWord:"đâu", correctSentence:"Họ có đến muộn đâu, chỉ là chúng ta đến sớm hơn giờ hẹn thôi.", jp:"彼らは遅れて来たわけではないですよ。私たちが約束より早く着いただけです。", explanation:"có ... đâu = 〜していない（否定）"},
{n:5, sentence:"Bác chứng kiến xe giúp cháu nhé ạ.", underlines:["chứng kiến","xe","giúp","nhé"], ans:0, correctWord:"trông", correctSentence:"Bác trông xe giúp cháu nhé ạ.", jp:"僕のバイクを見て（見守って）いてもらえますか？", explanation:"chứng kiến=目撃する vs trông=見守る・預かる・番をする"},
{n:6, sentence:"Mỗi ngày em tập thể dục 30 phút là nhiều, hôm nào rảnh em sẽ tập lâu hơn.", underlines:["Mỗi ngày","là nhiều","rảnh","lâu hơn"], ans:1, correctWord:"là ít", correctSentence:"Mỗi ngày em tập thể dục 30 phút là ít, hôm nào rảnh em sẽ tập lâu hơn.", jp:"毎日30分の運動は少ないほうです。時間がある時はもっと長く運動します。", explanation:"[数量] + là ít = 〜は少ない方だ・少なくとも〜だ（最低ライン）"},
{n:7, sentence:"Vấn đề này phức tạp đến mức chẳng cứ người có kinh nghiệm cũng dễ nhầm.", underlines:["phức tạp","chẳng cứ","có kinh nghiệm","nhầm"], ans:1, correctWord:"ngay cả", correctSentence:"Vấn đề này phức tạp đến mức ngay cả người có kinh nghiệm cũng dễ nhầm.", jp:"この問題は、経験がある人でさえ間違えやすいほど複雑です。", explanation:"ngay cả + N + cũng... = 〜さえも〜だ. chẳng cứ A mà cả B cũng... と区別"},
{n:8, sentence:"Sau một thời gian không gặp, cô ấy gầy lên nhiều.", underlines:["Sau","một thời gian","gầy lên","nhiều"], ans:2, correctWord:"gầy đi", correctSentence:"Sau một thời gian không gặp, cô ấy gầy đi nhiều.", jp:"しばらく会わないうちに、彼女はずいぶん痩せてしまいました。", explanation:"lên=増加・向上（béo lên 太る、khỏe lên 元気になる）vs đi=減少・悪化（gầy đi 痩せる、già đi 老ける）"},
{n:9, sentence:"Dự án này gặp nhiều rắc rối quá, hết thiếu nhân sự và hỏng máy móc.", underlines:["gặp","rắc rối","hết","và"], ans:3, correctWord:"lại", correctSentence:"Dự án này gặp nhiều rắc rối quá, hết thiếu nhân sự lại hỏng máy móc.", jp:"このプロジェクトはトラブルが多すぎます。人手が足りないかと思えば、今度は機械が故障したり。", explanation:"hết + A + lại + B = AかBか次から次へと続く"},
{n:10, sentence:"Mình để chìa khóa xe ở đâu nhé? Tìm mãi không thấy.", underlines:["để","chìa khóa","ở đâu","nhé"], ans:3, correctWord:"nhỉ", correctSentence:"Mình để chìa khóa xe ở đâu nhỉ? Tìm mãi không thấy.", jp:"バイクの鍵、どこに置いたっけ（かな）？いくら探しても見つからない。", explanation:"nhé=〜してね（依頼）vs nhỉ=〜かな（自問・独り言）"},
{n:11, sentence:"Bà nội xin tôi ra vườn hái mấy quả chanh để nấu canh cá.", underlines:["xin","ra","hái","để"], ans:0, correctWord:"sai/bảo", correctSentence:"Bà nội sai/bảo tôi ra vườn hái mấy quả chanh để nấu canh cá.", jp:"おばあちゃんが、魚のスープを作るから庭でレモンをいくつか摘んでくるようにと私に言いつけました。", explanation:"xin=お願い・申し出る（敬意）vs sai/bảo=言いつける・命じる（目下に対して）"},
{n:12, sentence:"Tháng này chúng ta tiêu nhiều quá, từ mai phải chi tiêu tiết kiệm lên.", underlines:["nhiều","từ mai","chi tiêu","tiết kiệm lên"], ans:3, correctWord:"tiết kiệm lại/hơn", correctSentence:"Tháng này chúng ta tiêu nhiều quá, từ mai phải chi tiêu tiết kiệm lại/hơn.", jp:"今月は使いすぎたので、明日からもっと節約しなければなりません。", explanation:"lại=引き締め・抑制（tiết kiệm lại）/ lên=増加・向上 / hơn=もっと（比較）"},
{n:13, sentence:"Chẳng lắm khi tôi thấy anh ấy nổi nóng với nhân viên như vậy.", underlines:["Chẳng lắm","khi","thấy","như vậy"], ans:0, correctWord:"Chẳng mấy", correctSentence:"Chẳng mấy khi tôi thấy anh ấy nổi nóng với nhân viên như vậy.", jp:"彼があんな風に部下に対して怒るのを見ることは、めったにありません。", explanation:"chẳng mấy khi.../ hiếm khi = めったに〜ない"},
{n:14, sentence:"Em mang giúp chị tài liệu này lên phòng giám đốc nhỉ?", underlines:["mang","giúp","lên","nhỉ"], ans:3, correctWord:"nhé", correctSentence:"Em mang giúp chị tài liệu này lên phòng giám đốc nhé?", jp:"この書類を社長室まで持って行ってもらえるかな？", explanation:"nhỉ=自問・独り言 vs nhé=依頼（〜してね）"},
{n:15, sentence:"Em tin lời quảng cáo trên mạng nên đã phải mua hàng kém chất lượng.", underlines:["tin","trên mạng","đã","phải mua"], ans:3, correctWord:"mua phải", correctSentence:"Em tin lời quảng cáo trên mạng nên đã mua phải hàng kém chất lượng.", jp:"ネットの広告を信じて、質の悪い商品をうっかり買ってしまいました。", explanation:"V + phải + 悪いもの = 運悪く悪いものに当たる・遭遇してしまう"}
];

// === Usage: 単語の正しい使い方 (12問) ===
// keyword: 検証する単語 / sentences: 4文 / ans: 正しく使われている文のインデックス
// jp[]: 各文の日本語訳 / wrongFix[]: 誤用文の正しい語（A,B,C,Dそれぞれ）
var USAGE_QUESTIONS = [
{n:1, keyword:"lây nhiễm", keywordJp:"感染する",
  sentences:[
    "Nhiều người lây nhiễm bệnh cúm vào mùa đông.",
    "Dịch bệnh này có thể lây nhiễm rất nhanh trong cộng đồng.",
    "Ô nhiễm không khí lây nhiễm nhiều bệnh nguy hiểm.",
    "Khói bụi lây nhiễm xấu đến sức khỏe con người."
  ],
  jp:[
    "冬には多くの人がインフルエンザにかかります。",
    "この伝染病はコミュニティ内で非常に速く感染（拡大）する可能性がある。",
    "大気汚染は多くの危険な病気を引き起こします。",
    "煙や埃は人間の健康に悪影響を与えます。"
  ],
  wrongFix:["mắc","","gây ra","ảnh hưởng"],
  ans:1, explanation:"lây nhiễm は伝染病の感染にのみ使う。 A→mắc(かかる), C→gây ra(引き起こす), D→ảnh hưởng(影響する)"},
{n:2, keyword:"mồ hôi", keywordJp:"汗",
  sentences:[
    "Nghe câu chuyện buồn đó, ai cũng rơi mồ hôi.",
    "Anh ấy bị ngã, mồ hôi chảy ra rất nhiều.",
    "Nóng quá, em muốn uống một cốc mồ hôi lạnh.",
    "Trời nóng quá, em ra rất nhiều mồ hôi."
  ],
  jp:[
    "その悲しい話を聞いて、誰もが涙を流しました。",
    "彼は転んで、血がたくさん出ました。",
    "暑いので、冷たい水を一杯飲みたいです。",
    "暑すぎて、汗がたくさん出ます。"
  ],
  wrongFix:["nước mắt","máu","nước",""],
  ans:3, explanation:"mồ hôi は汗以外には使えない。 A→nước mắt(涙), B→máu(血), C→nước(水)"},
{n:3, keyword:"trung thành", keywordJp:"忠実な",
  sentences:[
    "Sau một thời gian làm việc, tôi nhận ra công việc này rất trung thành với mình.",
    "Nhờ trung thành học tiếng Việt trong suốt thời gian qua, nên khả năng giao tiếp của anh ấy tiến bộ rõ rệt.",
    "Anh ấy luôn trung thành với công ty dù gặp nhiều khó khăn.",
    "Dù rất bận, anh ấy vẫn trung thành tập thể dục mỗi ngày."
  ],
  jp:[
    "しばらく働いた後、この仕事は自分にとても合っていると気づきました。",
    "これまで根気強くベトナム語を学習してきたおかげで、彼の会話能力は目に見えて上達しました。",
    "彼は困難にあっても、常に会社に忠実です。",
    "忙しくても、彼は毎日真面目に運動しています。"
  ],
  wrongFix:["phù hợp","kiên trì","","chăm chỉ"],
  ans:2, explanation:"trung thành は会社・人への忠誠にのみ使う。 A→phù hợp(合う), B→kiên trì(根気), D→chăm chỉ(真面目)"},
{n:4, keyword:"động viên", keywordJp:"励ます",
  sentences:[
    "Anh có thể động viên em cách sử dụng ứng dụng này không?",
    "Công ty động viên thêm nhân viên mới nhằm kịp tiến độ dự án.",
    "Bác sĩ khuyên anh ấy nên động viên mỗi ngày để cải thiện sức khỏe.",
    "Trước mỗi kỳ thi, bố mẹ luôn động viên tôi cố gắng học tập thật tốt."
  ],
  jp:[
    "このアプリの使い方を教えて（指導して）くれませんか。",
    "会社はプロジェクトの進捗に間に合わせるため、新しい従業員を採用しました。",
    "医者は彼に、健康改善のために毎日運動するよう勧めました。",
    "各試験の前に、両親はいつも私を励まし、一生懸命勉強するように言ってくれます。"
  ],
  wrongFix:["hướng dẫn","tuyển dụng","vận động",""],
  ans:3, explanation:"động viên は精神的に励ますことにのみ使う。 A→hướng dẫn(指導), B→tuyển dụng(採用), C→vận động(運動)"},
{n:5, keyword:"hẹp", keywordJp:"狭い",
  sentences:[
    "Con đường vào nhà tôi rất hẹp, xe ô tô không thể đi vào được.",
    "Thu nhập của anh ấy tháng này khá hẹp nên không đủ chi tiêu.",
    "Căn phòng này hẹp quá, có đến 5 người cùng ở nên rất ngột ngạt.",
    "Chiếc áo này hơi hẹp, em mặc vào thấy không thoải mái."
  ],
  jp:[
    "私の家へ入る道はとても狭く、車は入ることができません。",
    "彼の今月の収入はかなり低かったので、支出に足りませんでした。",
    "この部屋は狭すぎて、5人も一緒に住んでいるのでとても息苦しいです。",
    "このシャツは少しきつくて、着ていて心地よくありません。"
  ],
  wrongFix:["","thấp","chật","chật"],
  ans:0, explanation:"hẹp は道などの「幅が狭い」場合のみ。 B→thấp(低い・収入), C/D→chật(きつい・部屋/服)"},
{n:6, keyword:"thảo nào", keywordJp:"道理で〜なわけだ",
  sentences:[
    "Anh ấy đã sống ở Việt Nam 10 năm rồi ạ? Thảo nào anh ấy nói tiếng Việt giỏi thế!",
    "Vì ngày mai là ngày nghỉ, thảo nào tôi dự định sẽ đi du lịch cùng bạn gái.",
    "Bài thi lần này rất khó, thảo nào em nên ôn tập thật kỹ trước khi đi thi.",
    "Tuy anh ấy trông rất gầy, thảo nào mỗi ngày anh ấy đều ăn tới 4 bát cơm."
  ],
  jp:[
    "彼はベトナムにもう10年も住んでいるのですか？道理であんなにベトナム語が上手なわけですね。",
    "明日は休みなので、だから私は彼女と旅行に行く予定です。",
    "今回の試験はとても難しいので、試験前にしっかり復習すべきです。",
    "彼はとても痩せて見えますが、しかし毎日4杯もご飯を食べます。"
  ],
  wrongFix:["","cho nên/nên","nên","nhưng"],
  ans:0, explanation:"thảo nào は「道理で〜なわけだ」（納得・理由が判明したとき）のみ。 B→cho nên/nên(だから), C→nên(すべき), D→nhưng(しかし)"},
{n:7, keyword:"nhà sàn", keywordJp:"高床式の家",
  sentences:[
    "Gia đình tôi vừa xây một căn nhà sàn cao 5 tầng ở trung tâm thành phố.",
    "Cuối tuần trước, khi đi cắm trại ở bờ biển, chúng tôi đã cùng nhau dựng một chiếc nhà sàn bằng vải để ngủ qua đêm.",
    "Để tránh thú dữ và ẩm ướt, người dân vùng núi thường làm nhà sàn để ở.",
    "Anh ấy vừa mua một căn nhà sàn ở tầng 10 của khu chung cư cao cấp nhất thành phố."
  ],
  jp:[
    "私の家族は街の中心部に5階建ての家を建てたばかりです。",
    "先週末、海辺でキャンプをした時、私たちは一晩寝るための布製のテントを張りました。",
    "猛獣や湿気を避けるため、山岳地帯の人々は通常、高床式の家に住んでいます。",
    "彼は街で最高級のマンションの10階にある部屋を買ったばかりです。"
  ],
  wrongFix:["nhà","lều","","chung cư"],
  ans:2, explanation:"nhà sàn は山岳地帯の高床式の家のみ。 A→nhà(普通の家), B→lều(テント), D→chung cư(マンション)"},
{n:8, keyword:"cô đơn", keywordJp:"孤独・寂しい",
  sentences:[
    "Tối qua tôi đi xem phim cô đơn vì các bạn của tôi đều bận việc.",
    "Trong phòng họp bây giờ chỉ còn cô đơn giám đốc đang ngồi đợi đối tác.",
    "Gia đình tôi có 4 người nhưng hiện tại tôi đang ở cô đơn tại Hà Nội để làm việc.",
    "Sau khi chia tay bạn gái, anh ấy luôn cảm thấy rất cô đơn dù đang ở chỗ đông người."
  ],
  jp:[
    "昨夜、友達がみんな忙しかったので、一人で映画を見に行きました。",
    "会議室には今、パートナーを待っている社長だけが座っています。",
    "家族は4人ですが、今は仕事のためにハノイで一人で暮らしています。",
    "彼女と別れた後、彼は大勢の中にいても常に強い孤独（寂しさ）を感じています。"
  ],
  wrongFix:["một mình","mỗi","một mình",""],
  ans:3, explanation:"cô đơn は心の孤独・寂しさのみ。 A,C→một mình(一人で), B→mỗi(〜だけ)"},
{n:9, keyword:"hầu hết", keywordJp:"ほとんどの",
  sentences:[
    "Hầu hết các nhân viên trong công ty đều đồng ý với quy định mới của giám đốc.",
    "Sáng nay tôi đã ăn hầu hết hai cái bánh mì vì tôi rất đói.",
    "Tôi hầu hết làm bài tập về nhà xong rồi, chỉ còn một câu cuối cùng thôi.",
    "Trong ví của tôi hầu hết còn năm mươi nghìn đồng nên tôi không thể mua trà sữa."
  ],
  jp:[
    "社内のほとんどの従業員が、社長の新しい規定に賛成しました。",
    "お腹が空いていたので、バインミーを2個全部食べました。",
    "宿題はもうすぐ終わります。最後の一問だけです。",
    "財布の中に5万ドンしか残っていないので、タピオカミルクティーが買えません。"
  ],
  wrongFix:["","hết","sắp","chỉ"],
  ans:0, explanation:"hầu hết は「大多数の人・物」のみ。 B→hết(全部), C→sắp(もうすぐ), D→chỉ(だけ)"},
{n:10, keyword:"sa thải", keywordJp:"解雇する",
  sentences:[
    "Sau nhiều lần cãi nhau, chị ấy đã quyết định sa thải anh ấy.",
    "Vì thường xuyên đi làm muộn nên anh ấy đã bị công ty sa thải.",
    "Do gặp khó khăn về tài chính, công ty phải sa thải hàng trăm công nhân.",
    "Ông nội tôi đã đến tuổi sa thải nên hiện giờ ông đang ở nhà chăm sóc cây cảnh."
  ],
  jp:[
    "何度も喧嘩した末、彼女は彼と別れる決心をしました。",
    "彼は頻繁に遅刻したため、会社を解雇されました。",
    "財務難のため、会社は数百人の従業員を離職させなければなりませんでした。",
    "祖父は定年の年齢に達したので、現在は家で植木の手入れをしています。"
  ],
  wrongFix:["chia tay","","cho nghỉ việc","nghỉ hưu"],
  ans:1, explanation:"sa thải は「会社が従業員を罰として解雇する」場合のみ。 A→chia tay(別れる), C→cho nghỉ việc(離職させる), D→nghỉ hưu(定年退職)"},
{n:11, keyword:"thành thạo", keywordJp:"流暢な・熟練した",
  sentences:[
    "Cậu bé này mới 5 tuổi mà đã làm được toán lớp 3, thật là thành thạo.",
    "Tôi rất thành thạo về lịch sử Việt Nam vì tôi đã đọc nhiều sách.",
    "Món phở ở quán này rất thành thạo, tôi ăn hàng ngày mà không chán.",
    "Sau hai năm sống ở Hà Nội, cô ấy đã nói tiếng Việt rất thành thạo."
  ],
  jp:[
    "この子はまだ5歳なのに小学3年生の算数ができるなんて、本当に頭が良いですね。",
    "たくさんの本を読んできたので、私はベトナムの歴史について非常に詳しい（精通している）です。",
    "この店のフォーはとても美味しいので、毎日食べても飽きません。",
    "ハノイに2年住んだ後、彼女はベトナム語をとても流暢に（自在に）話せるようになりました。"
  ],
  wrongFix:["thông minh","am hiểu","ngon",""],
  ans:3, explanation:"thành thạo は「技術・言語の習得が流暢な・熟練した」場合のみ。 A→thông minh(賢い), B→am hiểu(詳しい), C→ngon(美味しい)"},
{n:12, keyword:"mà", keywordJp:"〜じゃない・主張",
  sentences:[
    "Em có biết chuyện đó mà, anh đừng hỏi em nữa.",
    "Em nấu món này mà? Lần đầu anh ăn. Ngon quá!",
    "Em đã bảo là hôm nay em bận mà, sao anh cứ gọi điện mãi thế?",
    "Ngày mai anh nhớ đến đúng giờ mà, đừng để mọi người phải đợi."
  ],
  jp:[
    "そんなこと知りませんよ、もう聞かないでください",
    "これ、君が作ったの？俺、初めて食べた。すごくおいしい！",
    "今日は忙しいって言ったじゃない（言ったんだもん）、なんでずっと電話してくるの。",
    "明日はちゃんと時間どおりに来てね。みんなを待たせないで。"
  ],
  wrongFix:["đâu","à/ đúng không?","","nhé"],
  ans:2, explanation:"mà は「〜だってば・〜じゃない（強く主張）」のみ。 A→đâu(否定), B→à/ đúng không?(確認), D→nhé(依頼)"}
];

// === Correct: 正解語の判別 (15問) ===
// 文中4箇所に下線A-Dが引かれており、そのうち1つが空欄に入る重要語
// sentence: 完成形の文（下線部の語がすべて含まれている）
// underlines: A,B,C,D の下線部 (4語句、すべて文中に存在) / ans: 正解（空欄に入った語）の位置
var CORRECT_QUESTIONS = [
{n:5, sentence:"Sau khi nói chuyện với bạn bè, cô ấy cảm thấy đỡ buồn hơn.", underlines:["cảm thấy","đỡ","buồn","cô ấy"], ans:1, skeleton:"Sau khi nói chuyện với bạn bè, [_] [_] [(_)] [_] hơn.", correctWord:"đỡ", jp:"友達と話した後、彼女は悲しみが少し和らいだと感じました。", explanation:"S + đỡ + 形/動 + (hơn): 程度が和らぐ・少し楽になる. マイナス状態の軽減"},
{n:6, sentence:"Đã 2 năm rồi nhưng tôi vẫn chưa thích nghi được với cuộc sống ở đây.", underlines:["được","cuộc sống","đã","thích nghi"], ans:0, skeleton:"[_] 2 năm rồi nhưng tôi vẫn chưa [_] [(_)] với [_] ở đây.", correctWord:"được", jp:"もう2年になりましたが、私はまだここの生活に順応できていません。", explanation:"V + được = 〜できる. đã + 期間 = もう〜（に達している）"},
{n:7, sentence:"Xong hết việc rồi, thoải mái làm sao!", underlines:["hết","làm sao","thoải mái","xong"], ans:2, skeleton:"[_] [_] việc rồi, [(_)] [_]!", correctWord:"thoải mái", jp:"仕事が全部終わった、なんて気持ちがいいんだろう。", explanation:"S + 形容詞 + làm sao!/biết bao!: なんて〜なのだろう（感嘆）"},
{n:12, sentence:"Thay mặt toàn thể nhân viên, xin gửi lời cảm ơn chân thành đến công ty.", underlines:["chân thành","lời cảm ơn","gửi","xin"], ans:1, skeleton:"Thay mặt toàn thể nhân viên, [_] [_] [(_)] [_] đến công ty.", correctWord:"lời cảm ơn", jp:"全従業員を代表して、会社へ心からの感謝を申し上げます。", explanation:"Thay mặt 〜 = 〜に代わって・〜を代表して. lời cảm ơn=感謝の言葉"},
{n:13, sentence:"Anh đã khỏi đau đầu chưa? Hay là vẫn cần nghỉ ngơi thêm?", underlines:["hay là","khỏi","đau đầu","nghỉ ngơi"], ans:0, skeleton:"Anh đã [_] [_] chưa? [(_)] vẫn cần [_] thêm?", correctWord:"hay là", jp:"頭痛はもう治りましたか？それともまだもう少し安静が必要ですか。", explanation:"hay là = それとも（疑問の選択肢）"},
{n:14, sentence:"Công việc bán thời gian này mỗi tháng kiếm được 3 triệu là nhiều.", underlines:["mỗi tháng","là nhiều","kiếm được","3 triệu"], ans:3, skeleton:"Công việc bán thời gian này [_] [_] [(_)] [_].", correctWord:"3 triệu", jp:"このアルバイトは、1ヶ月に300万ドン稼げれば良い方（多い方）です。", explanation:"[数値] + là nhiều = 多いときで〜 / [数値] + là ít = 少なくとも〜"},
{n:15, sentence:"A: Cậu mới mua xe ô tô à, giàu thế! / B: Giàu gì mà giàu. Mình mua trả góp đấy.", underlines:["giàu","gì","mà","trả góp"], ans:0, skeleton:"A: Cậu mới mua xe ô tô à, giàu thế! / B: [(_)] [_] [_] giàu. Mình mua [_] đấy.", correctWord:"giàu", jp:"A:車買ったの？金持ちだね！ B:金持ちなもんか。ローンで買ったんだよ。", explanation:"Adj + gì mà + Adj!: 何が〜だ（強い否定・謙遜）"},
{n:20, sentence:"Mình nên đi sớm một chút kẻo tắc đường là không kịp giờ họp đâu.", underlines:["là","tắc đường","không kịp","kẻo"], ans:0, skeleton:"Mình nên đi sớm một chút [_] [_] [(_)] [_] giờ họp đâu.", correctWord:"là", jp:"道が混んで会議に間に合わなくなるといけないから、少し早めに出発したほうがいいよ。", explanation:"A kẻo B = Bにならないようにあらかじめ A する"},
{n:21, sentence:"Không chỉ nhân viên mới mà cả những người làm lâu năm cũng cần tham gia khóa đào tạo này.", underlines:["mà cả","không chỉ","những người làm","cũng"], ans:2, skeleton:"[_] nhân viên mới [_] [(_)] lâu năm [_] cần tham gia khóa đào tạo này.", correctWord:"những người làm", jp:"新入社員だけでなく、ベテラン社員もこの研修に参加する必要があります。", explanation:"Không chỉ A mà cả B cũng... = Aだけでなく、Bまでもが〜だ（強調）"},
{n:22, sentence:"Dù giá hơi cao nhưng chiếc máy tính này rất bền, rất đáng mua để dùng lâu dài.", underlines:["rất đáng mua","dù","giá hơi cao","chiếc máy tính này"], ans:3, skeleton:"[_] [_] nhưng [(_)] rất bền, [_] để dùng lâu dài.", correctWord:"chiếc máy tính này", jp:"価格は少し高いですが、このパソコンはとても丈夫なので、長く使うために買う価値が十分にあります。", explanation:"Dù...nhưng... = 〜だが〜. chiếc máy tính = パソコンの類別詞付き"},
{n:23, sentence:"Trên đời này làm gì có ma, đó chỉ là do em tưởng tượng ra thôi.", underlines:["tưởng tượng ra","do em","thôi","chỉ là"], ans:0, skeleton:"Trên đời này làm gì có ma, đó [_] [_] [(_)] [_].", correctWord:"tưởng tượng ra", jp:"この世に幽霊なんていないよ。それはただ、君が想像しただけのことだよ。", explanation:"đó chỉ là do 〜 V ra thôi = ただ〜が〜しただけだ"},
{n:28, sentence:"Đừng nhắc lại chuyện cũ nữa, chúng ta hãy nhìn về tương lai đi.", underlines:["chuyện cũ","đừng","nữa","nhắc lại"], ans:0, skeleton:"[_] [_] [(_)] [_], chúng ta hãy nhìn về tương lai đi.", correctWord:"chuyện cũ", jp:"もう昔の話を繰り返すのはやめて、未来を見ようよ。", explanation:"đừng + V + nữa = もう〜しないで"},
{n:29, sentence:"Đợi em một chút, em kiểm tra lại lịch họp đã.", underlines:["đã","kiểm tra","lịch họp","lại"], ans:2, skeleton:"Đợi em một chút, em [_] [_] [(_)] [_].", correctWord:"lịch họp", jp:"ちょっと待ってね、会議のスケジュールをもう一度確認するね。", explanation:"V + đã = まず先に〜する・〜してから. lịch họp = 会議のスケジュール"},
{n:30, sentence:"Điện thoại rơi xuống đất mà không bị vỡ màn hình là may rồi.", underlines:["không","mà","may","bị"], ans:3, skeleton:"Điện thoại rơi xuống đất [_] [_] [(_)] vỡ màn hình là [_] rồi.", correctWord:"bị", jp:"スマホが地面に落ちたのに、画面が割れなかったのがラッキーだよ。", explanation:"bị + V = 〜される（受身・不利益）. bị vỡ = 割れる"},
{n:31, sentence:"Em đã nhận được mail đâu, anh kiểm tra lại xem có gửi nhầm địa chỉ không?", underlines:["xem","kiểm tra","đâu","lại"], ans:3, skeleton:"Em đã nhận được mail [_], anh [_] [(_)] [_] có gửi nhầm địa chỉ không?", correctWord:"lại", jp:"まだメールが届いていないのですが、アドレスを間違えて送っていないか確認していただけますか。", explanation:"V + lại = もう一度〜する. kiểm tra lại=再確認"}
];
