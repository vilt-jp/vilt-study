# -*- coding: utf-8 -*-
"""Huong先生 並び替え35問の文法詳細解説を、アプリ内の読み物ページ(HTML)として生成。
内容は Word版(build_huong_rearrange_explain_v2.py)と同一。出力: huong-grammar/index.html
品詞・全例文の日本語訳・先生の手書き追記(原本PDF p1-5)を反映。"""
import os, html

# (番号タイトル, 品詞, 説明, [(越文, 和訳), ...], [手書きメモ, ...])
GRAMMAR = [
 ("1. 〜だけれども（譲歩）：Dù / Mặc dù / Tuy … (nhưng) … vẫn / cũng",
  "接続詞（譲歩）。Dù/Mặc dù/Tuy＝接続詞、vẫn/cũng＝副詞（それでも・〜も）",
  "逆のことが起きても結果は変わらない、という言い方。後ろに vẫn（それでも）や cũng（〜も）が来る。Tuy が一番かたい言い方。",
  [("Dù gia đình có phản đối thì tôi vẫn cưới cô ấy.", "家族が反対しても、私はそれでも彼女と結婚する。"),
   ("Dù bố mẹ không đồng ý nhưng Lan vẫn đi du học.", "両親が同意しなくても、ランはそれでも留学する。"),
   ("Mặc dù thời tiết xấu nhưng trận đấu vẫn được diễn ra.", "天気が悪かったけれども、試合はそれでも行われた。"),
   ("Tuy nhà xa nhưng Hiền chưa bao giờ đi làm muộn.", "家が遠いけれども、ヒエンは一度も遅刻したことがない。"),
   ("Dù có nghèo thì tôi cũng không bao giờ ăn trộm.", "たとえ貧しくても、私は決して盗みはしない。")],
  ["型は「Dù＋S₁＋có＋V₁＋thì＋S₂＋(vẫn)…」。có は「たとえ〜しても」を強める（có phản đối＝反対しても）。",
   "「Dù … nhưng …」の形もある。"]),

 ("2. 〜であろうとなかろうと：Dù … hay (không) … thì … cũng",
  "接続詞（譲歩・二者選択）。dù…hay…＝〜であれ〜であれ、cũng＝副詞（どちらにせよ）",
  "二つのどちらでも結果は同じ、という言い方。",
  [("Khi được tặng quà, dù thích hay không thì chúng ta nên nói lời cảm ơn.", "贈り物をもらったら、好きでも嫌いでも、私たちはお礼を言うべきだ。"),
   ("Dù bận rộn hay rảnh rỗi thì tôi cũng gọi điện cho bố mẹ hằng ngày.", "忙しくても暇でも、私は毎日両親に電話する。")],
  []),

 ("3. 〜によって…される：do（行為者）＋動詞　／　動詞＋ra",
  "do＝前置詞（受け身の動作主＝英語の by）。ra＝方向補語（補助的な語）",
  "英語の受け身に近い。「誰がやったか」を do の後ろに置く。動詞＋ra は「外に生み出す」イメージ。",
  [("Mì ăn liền do Ando Momofuku phát minh ra.", "即席麺は安藤百福によって発明された。"),
   ("Bản báo cáo này do chị Vy viết.", "この報告書はヴィーさんによって書かれた。")],
  ["do＝by（〜によって）。",
   "ra は「外へ生み出す」イメージ。phát minh ra（発明する）／ nghĩ ra（思いつく）／ sáng tạo ra（創り出す）。"]),

 ("4. 〜なので…（理由→結果）：(Do / Vì) … nên …",
  "接続詞（因果）。Do/Vì＝〜なので（理由）、nên＝だから（結果）",
  "前に理由、nên のあとに結果を置く。",
  [("Anh ấy thường xuyên bỏ bữa sáng nên bị đau dạ dày.", "彼は頻繁に朝食を抜くので、胃が痛くなる。"),
   ("Do lười học nên tôi phải thi lại môn tiếng Pháp.", "勉強を怠けたので、私はフランス語の科目を再試験しなければならない。")],
  []),

 ("5. 〜だけでなく…も：không những … mà còn … (nữa)",
  "接続詞（並列・添加）。không những＝〜だけでなく、mà còn＝その上〜も、nữa＝さらに（副詞）",
  "二つの良い点・特徴を並べる。後ろが名詞のときは là（＝である）を2回入れる。",
  [("Anh Kimura không những nấu được món Nhật mà còn (nấu được) món ăn Trung Quốc nữa.", "キムラさんは日本料理が作れるだけでなく、中華料理も作れる。"),
   ("Trời không những mưa mà còn lạnh nữa.", "空は雨が降るだけでなく、寒くもある。"),
   ("Cô ấy không những là một diễn viên mà còn là một nhà văn.", "彼女は俳優であるだけでなく、作家でもある。")],
  ["名詞をつなぐときは「không những là N₁ mà còn là N₂」と là が2回必要。",
   "動詞のときは V₁ … mà còn (V₂)。例の (nấu được) は省略されることもある。"]),

 ("6. 例えば〜：ví dụ như / … như …",
  "連語（例示）。ví dụ＝名詞（例）＋ như＝前置詞（〜のような）",
  "例を挙げるときの言い方。như だけでも「〜のような」と例を示せる。",
  [("Hà Nội có nhiều hồ nước tự nhiên ví dụ như Hồ Tây, Hồ Hoàn Kiếm.", "ハノイには天然の湖が多く、例えばタイ湖やホアンキエム湖などがある。")],
  ["「ví dụ A, B, C …」と並べる。",
   "như でも例示できる。例）Anh thích ăn món Nhật như sushi, …（寿司のような日本料理が好き）。"]),

 ("7. どんな〜でも：bất cứ + 名詞 + nào cũng ／ bất cứ điều gì ／ bất cứ thứ gì ／ bất cứ lúc nào",
  "連語（全称）。bất cứ＝どんな〜でも、nào＝疑問詞、cũng＝副詞（みな）",
  "「どれでも・何でも・いつでも」と全部を指す。",
  [("Tại Việt Nam, bất cứ căn bếp nào cũng có nước mắm.", "ベトナムでは、どの台所にも必ず魚醤（ヌクマム）がある。"),
   ("Trước khi làm bất cứ điều gì, bạn phải suy nghĩ.", "何かをする前に、あなたはよく考えなければならない。"),
   ("Giờ đây, chúng ta có thể mua sắm trực tuyến bất cứ thứ gì vào bất cứ lúc nào.", "今や、私たちはいつでも何でもオンラインで買い物ができる。")],
  ["型は「bất cứ＋N＋nào＋cũng …」。",
   "mua sắm trực tuyến＝オンライン（online）で買い物。",
   "suy nghĩ về việc＋V／ suy nghĩ về＋N（〜について考える）。"]),

 ("8. 〜次第・〜に応じて：tùy theo / tùy thuộc vào　（成句：tùy cơ ứng biến）",
  "tùy theo＝前置詞句（〜に従って）、tùy thuộc vào＝動詞句（〜に依る）",
  "条件によって結果が変わる、という言い方。",
  [("Tùy theo trọng lượng và kích thước, giá tiền thay đổi.", "重さと大きさに応じて、値段は変わる。"),
   ("Câu trả lời tùy thuộc vào cách suy nghĩ của mỗi người.", "答えは人それぞれの考え方次第だ。"),
   ("Tùy cơ ứng biến.", "臨機応変に（その場に応じて対応する）。")],
  ["Tùy cơ ứng biến は四字熟語（臨機応変）。"]),

 ("9. 〜するほど・〜するあまり：đến mức / đến nỗi",
  "連語（程度）。đến＝〜に至る＋mức/nỗi＝程度（名詞）",
  "程度が大きいことを強調する。",
  [("Bài tập về nhà nhiều đến mức học sinh muốn khóc.", "宿題が多すぎて、生徒は泣きたくなるほどだ。"),
   ("Em trai tôi mải chơi game đến nỗi quên ăn.", "弟はゲームに夢中になりすぎて、食べるのを忘れるほどだ。"),
   ("Câu chuyện của Lan làm tôi cảm động đến mức rơi nước mắt.", "ランの話は、私を涙が出るほど感動させた。")],
  []),

 ("10. 〜するために：để + 動詞　（＋ trước khi＝〜する前に）",
  "để＝接続詞・前置詞（目的）。trước khi＝接続詞（〜の前に）",
  "目的を表す。trước khi は「〜する前に」。",
  [("Hành khách phải xếp hàng chờ hàng giờ tại sân bay để làm thủ tục.", "乗客は手続きのために、空港で何時間も並んで待たなければならない。")],
  []),

 ("11. 〜だけ…する（同じ量）：bao nhiêu … bấy nhiêu",
  "呼応表現（数量）。bao nhiêu＝どれだけ、bấy nhiêu＝それだけ（指示詞）",
  "前の量と同じだけ後ろもする。",
  [("Chị muốn mua bao nhiêu thì tôi sẽ bán cho chị bấy nhiêu.", "あなたが買いたいだけ、私はあなたに売ってあげます。")],
  []),

 ("12. 〜のとおりに…する：sao … vậy",
  "呼応表現。sao＝どのように、vậy＝そのように（指示詞）",
  "言われたとおりに行う。",
  [("Giám đốc yêu cầu sao thì tôi làm vậy.", "社長が求めるとおりに、私はやります。")],
  []),

 ("13. 〜すると決まって…：cứ … là …",
  "接続詞（条件・反復）。cứ＝〜しさえすれば、là＝すると必ず",
  "あることが起きると必ず次が起きる。",
  [("Cứ mưa to là đường phố Hà Nội bị ngập.", "大雨が降ると決まって、ハノイの街は水浸しになる。")],
  []),

 ("14. 〜させる（引き起こす）：khiến / làm / làm cho",
  "使役動詞。khiến / làm / làm cho＝〜を…させる",
  "原因が結果を引き起こす言い方。",
  [("Tiếng còi xe tải khiến tôi giật mình.", "トラックのクラクションの音が、私をびっくりさせた。"),
   ("Câu chuyện của Lan làm tôi cảm động.", "ランの話は、私を感動させた。"),
   ("Covid-19 đã làm cho ngành du lịch tê liệt hoàn toàn.", "コロナは観光業を完全に麻痺させた。")],
  []),

 ("15. もし〜なら…（すべき）：nếu … thì (nên) …",
  "接続詞（条件）。nếu＝もし、thì＝ならば、nên＝〜すべき（助動詞）",
  "条件と、それに対する助言・結果。",
  [("Nếu anh muốn giải quyết một cách nhanh chóng thì nên thuê luật sư.", "もし早く解決したいなら、弁護士を雇うべきだ。")],
  []),

 ("16. 自分で〜する：tự … lấy",
  "tự＝副詞（自分で）、lấy＝補助詞（自分の力で、を強める）",
  "自分の力で行うことを強める。",
  [("Tôi tự may quần áo lấy.", "私は自分で服を縫う。")],
  []),

 ("17. 〜と言える：có thể nói",
  "連語（前置き）。có thể＝〜できる（助動詞）＋ nói＝言う（動詞）",
  "「〜と言ってよい」という前置き。文頭に来る。",
  [("Có thể nói núi Phú Sĩ là biểu tượng của Nhật Bản.", "富士山は日本の象徴だと言える。"),
   ("Có thể nói Covid-19 đã thay đổi thói quen người tiêu dùng.", "コロナは消費者の習慣を変えたと言える。")],
  ["có thể nói は文頭に来る。"]),

 ("18. その他のポイント：chưa bao giờ / không bao giờ",
  "副詞（頻度）。chưa bao giờ＝一度も〜ない、không bao giờ＝決して〜ない",
  "経験・習慣の否定を表す。",
  [("Tuy nhà xa nhưng Hiền chưa bao giờ đi làm muộn.", "家が遠いけれども、ヒエンは一度も遅刻したことがない。"),
   ("Dù có nghèo thì tôi cũng không bao giờ ăn trộm.", "たとえ貧しくても、私は決して盗みはしない。")],
  []),
]

HNOTES = [
 ("① bất cứ ＋ 名詞 ＋ nào ＋ cũng（どんな〜でも）",
  [("Bất cứ người nào cũng phải nộp thuế.", "どんな人でも税金を払わなければならない。"),
   ("Bất cứ món nào cũng ngon.", "どの料理でも美味しい。"),
   ("Bất cứ người nào cũng không được vào.", "どんな人も入ってはいけない。")]),
 ("② cho ＋ N₁ ＋ vào ＋ N₂（N₁ を N₂ に入れる）",
  [("Trứng thì không được cho vào lò vi sóng.", "卵は電子レンジに入れてはいけない。"),
   ("Em không được cho trứng vào lò vi sóng.", "卵（N₁）を電子レンジ（N₂）に入れてはいけない。")]),
 ("③ lấy ＋ N₁ ＋ từ trong ＋ N₂ ＋ ra ngoài（N₂ の中から N₁ を取り出す）",
  [("Lấy bia từ trong tủ lạnh ra.", "冷蔵庫の中からビールを取り出す。"),
   ("Lấy tài liệu từ trong ngăn kéo ra.", "引き出しの中から書類を取り出す。")]),
 ("④ cách の使い方",
  [("cách ＋ 動詞 ＝ 〜のやり方（例：cách suy nghĩ ＝ 考え方）", ""),
   ("Từ Hà Nội đến HCM cách bao xa?", "ハノイからホーチミンまでどれくらい（の距離）離れていますか？")]),
]

VOCAB = [
 ("phản đối","反対する","動","反対"),("cưới","結婚する（娶る）","動","—"),
 ("cố gắng hết sức","全力を尽くす","動","—"),("thay đổi","変える・変わる","動","—"),
 ("tình hình","情勢・状況","名","情形"),("phát minh","発明する","動","発明"),
 ("bản báo cáo","報告書","名","報告（báo cáo）／本（bản）"),("diễn viên","俳優","名","演員"),
 ("nhà văn","作家","名","文（văn）"),("hồ (nước)","湖","名","湖（hồ）"),
 ("căn bếp","台所","名","—"),("nước mắm","魚醤（ヌクマム）","名","—"),
 ("suy nghĩ","考える","動","推（suy）"),("trọng lượng","重さ","名","重量"),
 ("kích thước","大きさ・寸法","名","—"),("giá tiền","値段","名","価（giá）"),
 ("câu trả lời","答え","名","—"),("cách suy nghĩ","考え方","名","格（cách）・推（suy）"),
 ("bài tập về nhà","宿題","名","習（tập）"),("khóc","泣く","動","—"),
 ("quên","忘れる","動","—"),("hành khách","乗客","名","行客"),
 ("xếp hàng","列に並ぶ","動","—"),("sân bay","空港","名","—"),
 ("làm thủ tục","手続きをする","動","手続（thủ tục）"),("giám đốc","社長・部長","名","監督"),
 ("yêu cầu","要求する","動","要求"),("mưa to","大雨","名","—"),
 ("đường phố","通り","名","—"),("bị ngập","水浸しになる","動","—"),
 ("giật mình","びっくりする","動","—"),("cảm động","感動する","動","感動"),
 ("rơi nước mắt","涙を流す","動","—"),("ngành du lịch","観光業","名","遊歴（du lịch）"),
 ("tê liệt","麻痺する","動","—"),("hoàn toàn","完全に","副","完全"),
 ("giải quyết","解決する","動","解決"),("thuê","雇う・借りる","動","—"),
 ("luật sư","弁護士","名","律師"),("đồng ý","同意する","動","同意"),
 ("đi du học","留学する","動","遊学（du học）"),("thời tiết","天気","名","時節"),
 ("trận đấu","試合","名","—"),("diễn ra","行われる","動","演（diễn）"),
 ("nghèo","貧しい","形","—"),("ăn trộm","盗む","動","—"),
 ("tặng quà","贈り物をする","動","贈（tặng）"),("bận rộn","忙しい","形","—"),
 ("rảnh rỗi","暇","形","—"),("gọi điện","電話する","動","電（điện）"),
 ("hằng ngày","毎日","副","恒（hằng）"),("biểu tượng","象徴","名","表象"),
 ("thói quen","習慣","名","—"),("người tiêu dùng","消費者","名","消（tiêu）"),
 ("thường xuyên","頻繁に","副","常（thường）"),("đau dạ dày","胃が痛い","動","—"),
 ("lười học","勉強を怠ける","動","学（học）"),("thi lại","追試・再試験","動","試（thi）"),
]

e = html.escape

def grammar_html(g):
    title, pos, desc, exs, notes = g
    parts = ['<div class="gcard">']
    parts.append('<div class="gtitle">%s</div>' % e(title))
    parts.append('<div class="pos"><b>品詞</b> %s</div>' % e(pos))
    if desc:
        parts.append('<div class="desc">%s</div>' % e(desc))
    for vi, jp in exs:
        parts.append('<div class="ex"><div class="vi">%s</div><div class="jp">%s</div></div>' % (e(vi), e(jp)))
    for nt in notes:
        parts.append('<div class="hw">✍ %s</div>' % e(nt))
    parts.append('</div>')
    return "\n".join(parts)

def hnote_html(h):
    title, items = h
    parts = ['<div class="gcard hwcard">']
    parts.append('<div class="gtitle hwt">%s</div>' % e(title))
    for vi, jp in items:
        if jp:
            parts.append('<div class="ex"><div class="vi">%s</div><div class="jp">%s</div></div>' % (e(vi), e(jp)))
        else:
            parts.append('<div class="ex"><div class="vi">%s</div></div>' % e(vi))
    parts.append('</div>')
    return "\n".join(parts)

vocab_rows = "\n".join(
    "<tr><td class='v'>%s</td><td>%s</td><td class='p'>%s</td><td class='h'>%s</td></tr>" % (e(a), e(b), e(c), e(d))
    for a, b, c, d in VOCAB)

HTML = """<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>Huong先生 文法詳細解説</title>
<link rel="stylesheet" href="../assets/common.css">
<style>
.intro{background:#fff3e0;border:1px solid #ffb74d;border-radius:10px;padding:12px;margin-bottom:14px;font-size:12px;color:#e65100;line-height:1.7}
.legend{font-size:11px;color:#888;margin:6px 0 14px;line-height:1.6}
.legend .hw{color:#b02a1f;font-weight:600}
.gcard{background:#fff;border:1px solid #e0e0e0;border-radius:12px;padding:14px;margin-bottom:12px}
.gtitle{font-size:14px;font-weight:700;color:#1f497d;line-height:1.5;margin-bottom:8px}
.pos{font-size:12px;color:#1b5e20;background:#e8f5e9;border-radius:6px;padding:6px 9px;margin-bottom:8px;line-height:1.6}
.pos b{margin-right:6px}
.desc{font-size:13px;color:#444;line-height:1.7;margin-bottom:8px}
.ex{border-left:3px solid #da251d;padding:4px 0 4px 10px;margin:6px 0}
.ex .vi{font-size:14px;color:#222;line-height:1.6}
.ex .jp{font-size:12px;color:#777;line-height:1.6;margin-top:2px}
.hw{font-size:12px;color:#b02a1f;background:#fff5f5;border:1px dashed #e7a3a3;border-radius:8px;padding:7px 9px;margin-top:6px;line-height:1.6}
.hwcard{border-color:#e7a3a3;background:#fffafa}
.hwt{color:#b02a1f}
table.vocab{width:100%;border-collapse:collapse;font-size:13px;background:#fff;border-radius:10px;overflow:hidden}
table.vocab th{background:#1f497d;color:#fff;padding:8px 6px;font-size:12px;text-align:left}
table.vocab td{border-bottom:1px solid #eee;padding:7px 6px;vertical-align:top}
table.vocab td.v{font-weight:600;color:#222}
table.vocab td.p{color:#1b5e20;text-align:center;width:34px}
table.vocab td.h{color:#888;font-size:12px}
.sech{font-size:15px;font-weight:700;color:#1f497d;margin:18px 0 10px;border-bottom:2px solid #da251d;padding-bottom:4px}
</style>
</head>
<body>
<div class="app">
<header class="site">
<button class="nav-back" onclick="location.href='../'">← ホーム</button>
<h1>Huong先生 文法詳細解説</h1>
<div class="sub">並び替え35問 ― 品詞・例文・日本語訳・手書きメモ</div>
</header>
<main>

<div class="intro">
📘 Huong先生の並び替え35問の文法を、<b>品詞・例文（先生の問題）・日本語訳</b>つきでまとめました。<br>
原本に先生が<b>手書きで足したメモ</b>も反映しています。
</div>
<div class="legend">
<b>品詞</b>＝その表現の文法上の種類　／　<span class="hw">✍ 先生の手書きメモ</span>
</div>

<div class="sech">Ⅰ. 文法パターン（18）</div>
__GRAMMAR__

<div class="sech">Ⅱ. 先生の手書きノート（原本 4〜5ページ）</div>
<div class="legend">原本の後半は先生の手書き文法ノートです。全て書き起こしました。</div>
__HNOTES__
<div class="gcard hwcard">
<div class="gtitle hwt">⑤ các と những の違い（手書きの図より）</div>
<div class="desc"><b>các</b>＝あるグループの「全体」を指す。例）các em＝生徒みんな（全員）。<br>
<b>những</b>＝その中の「特定の一部」を指す。例）những em nhóm A＝（みんなの中の）グループAの生徒たち。</div>
<div class="hw">図：大きい円「các em」の中に nhóm A・nhóm B・nhóm C の小さい円。những em nhóm A は A の集団だけを指す。</div>
</div>
<div class="gcard hwcard">
<div class="gtitle hwt">⑥ その他の手書きメモ（原本1ページ）</div>
<div class="hw">cùng ＋ N ／ với ＋ N ＝ どちらも「〜と一緒に」。後ろに名詞が来る。</div>
</div>

<div class="sech">Ⅲ. 単語（品詞・漢越語つき・58語）</div>
<table class="vocab">
<tr><th>ベトナム語</th><th>意味</th><th>品詞</th><th>漢越語（漢字）</th></tr>
__VOCAB__
</table>

</main>
<footer class="site">個人学習用 | 出典: Huong先生 4級練習問題（2026-04-26）</footer>
</div>
</body>
</html>
"""

out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "huong-grammar")
os.makedirs(out_dir, exist_ok=True)
content = (HTML
           .replace("__GRAMMAR__", "\n".join(grammar_html(g) for g in GRAMMAR))
           .replace("__HNOTES__", "\n".join(hnote_html(h) for h in HNOTES))
           .replace("__VOCAB__", vocab_rows))
out = os.path.join(out_dir, "index.html")
with open(out, "w", encoding="utf-8") as f:
    f.write(content)
print("SAVED:", out, len(content), "bytes")
print("grammar", len(GRAMMAR), "hnotes", len(HNOTES) + 2, "vocab", len(VOCAB))
