# -*- coding: utf-8 -*-
"""解説ページに『重要4分野』(前置詞/後置修飾/固定構文/接続詞)を追記。両htmlへ。"""
import os, shutil, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
BASE = os.path.dirname(os.path.abspath(__file__))

def rd(f): return open(os.path.join(BASE, f), encoding='utf-8').read()
def wr(f, s): open(os.path.join(BASE, f), 'w', encoding='utf-8', newline='').write(s)

def esc(s):
    return s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

def tbl(headers, rows):
    h = '<table style="width:100%;border-collapse:collapse;font-size:13.5px;margin:6px 0 14px;">'
    h += '<tr style="background:#1565c0;color:#fff;">' + "".join('<th style="padding:6px;border:1px solid #ccc;text-align:left;">'+esc(x)+'</th>' for x in headers) + '</tr>'
    for r in rows:
        tds = ""
        for i, v in enumerate(r):
            cell = "<br>".join(esc(seg) for seg in str(v).split("||"))
            col = "#c2185b" if i == 0 else "#333"
            wgt = "bold" if i == 0 else "normal"
            tds += '<td style="padding:5px 6px;border:1px solid #ddd;color:%s;font-weight:%s;">%s</td>' % (col, wgt, cell)
        h += "<tr>" + tds + "</tr>"
    return h + "</table>"

def sub(t):
    return '<h4 style="font-size:15px;color:#1565c0;margin:14px 0 2px;">' + esc(t) + '</h4>'

P = []
P.append('<div id="area4-block">')
P.append('<h3 style="font-size:17px;color:#1565c0;border-bottom:2px solid #1565c0;padding-bottom:4px;margin-top:26px;">Ⅲ. 重要4分野まとめ（網羅・4級相当）</h3>')
P.append('<p style="color:#666;font-size:13px;">過去問に出た語だけでなく、4級でよく使う形を広く収録。</p>')

# 1 前置詞
P.append(sub("1. 前置詞の相性（動詞・形容詞＋前置詞）"))
P.append('<p style="font-size:13px;color:#555;">動詞・形容詞ごとに組む前置詞が決まっている。誤り問題で最頻出。</p>')
P.append(sub("① với（〜と・〜に｜相手）"))
P.append(tbl(["ベトナム語","意味","例文"], [
 ["hài lòng với","〜に満足","Tôi hài lòng với kết quả."],
 ["thất vọng với","〜に失望","Tôi thất vọng với cách đó."],
 ["kiên nhẫn với","〜に忍耐強い","Hãy kiên nhẫn với trẻ con."],
 ["đối diện với","〜の向かい","Nhà tôi đối diện với bệnh viện."],
 ["khác với","〜と違う","Khác với tôi, anh ấy thích cà phê."],
 ["giống với","〜と似ている","Em ấy giống với mẹ."],
 ["quen với","〜に慣れる","Tôi đã quen với công việc."],
 ["so sánh với","〜と比べる","Đừng so sánh với người khác."],
 ["kết hôn với","〜と結婚","Cô ấy kết hôn với một bác sĩ."],
 ["giao tiếp với","〜とやり取り","Học để giao tiếp với khách."],
 ["đồng ý với","〜に同意","Tôi đồng ý với bạn."],
 ["cạnh tranh với","〜と競争","Các hãng cạnh tranh với nhau."],
]))
P.append(sub("② về（〜について）"))
P.append(tbl(["ベトナム語","意味","例文"], [
 ["nói/viết về","〜について話す/書く","Bài báo viết về du lịch."],
 ["nghĩ về","〜について考える","Tôi nghĩ về tương lai."],
 ["tìm hiểu về","〜を調べる","Tìm hiểu về văn hóa Việt."],
 ["lo lắng về","〜を心配","Mẹ lo lắng về sức khỏe tôi."],
 ["chịu trách nhiệm về","〜に責任を負う","Ai chịu trách nhiệm về việc này?"],
]))
P.append(sub("③ đến/tới（〜に｜到達）"))
P.append(tbl(["ベトナム語","意味","例文"], [
 ["quan tâm đến","〜に関心","Tôi quan tâm đến môi trường."],
 ["chú ý đến","〜に注意","Chú ý đến an toàn."],
 ["ảnh hưởng đến","〜に影響","Thời tiết ảnh hưởng đến mùa màng."],
 ["liên quan đến","〜に関連","Việc này liên quan đến tiền."],
]))
P.append(sub("④ sang／⑤ vào／⑥ cho／⑦ để／⑧ bằng／⑨ theo"))
P.append(tbl(["前置詞","代表的な組み合わせ","意味・例"], [
 ["sang","dịch sang / chuyển sang / đổi sang","〜語に訳す等｜dịch sang tiếng Nhật"],
 ["vào","cho…vào / tập trung vào / dựa vào / phụ thuộc vào","中へ・拠り所｜tập trung vào bài học"],
 ["cho","tặng/gửi/nói/đưa cho / dành cho / làm cho","受け手・〜のため｜gửi quà cho bạn"],
 ["để","để + 動詞（目的）","〜するため｜học để thi。★名詞目的は vì/nhằm mục đích"],
 ["bằng","đi/làm/viết/trả bằng","手段・材料｜làm bằng da（革で）"],
 ["theo","theo+名詞+thì / làm theo","〜によると／従う｜Theo dự báo thì…"],
]))

# 2 後置修飾
P.append(sub("2. 後置修飾（名詞を後ろから説明）"))
P.append('<p style="font-size:13px;color:#555;">説明する語を名詞の【後ろ】に置く（日本語と逆）。</p>')
P.append(tbl(["型","意味","例"], [
 ["名詞＋動詞句","〜する…（関係代名詞なし）","người làm việc＝働く人||bác sĩ chữa răng＝歯を治す医者"],
 ["名詞＋(đã/đang/sẽ)＋動詞","〜した/している…","thời gian đã qua＝過ぎた時間"],
 ["名詞＋mà＋主+動","〜（する）…","quyển sách mà tôi mua＝私が買った本"],
 ["名詞＋形容詞","〜な…","cái áo đẹp＝きれいな服"],
 ["名詞＋của＋名詞","〜の…","nhà của tôi＝私の家"],
 ["名詞＋để＋動詞","〜するための…","cách để học＝学ぶ方法"],
 ["名詞＋nào đó","ある…（不特定）","vùng nào đó＝ある地域"],
]))

# 3 固定構文
P.append(sub("3. 固定構文（並べ替えの得点源）"))
P.append(tbl(["構文","意味","例文"], [
 ["càng ngày càng＋形","日に日に〜","Trời càng ngày càng lạnh."],
 ["càng A càng B","AするほどB","Càng học càng giỏi."],
 ["形/動＋đến nỗi/đến mức","〜すぎて…","Mệt đến nỗi không đứng dậy được."],
 ["(Mặc dù/Tuy/Dù) A nhưng B","Aだけれど B","Tuy nhà xa nhưng không đi muộn."],
 ["Dù A thì B cũng/vẫn","たとえAでも","Dù khó thì tôi cũng làm."],
 ["Dù A hay B thì…cũng","AでもBでも","Dù mưa hay nắng thì cũng đi."],
 ["Nếu A thì B","もしAなら","Nếu rảnh thì gọi tôi."],
 ["(Do/Vì) A nên B","AなのでB","Vì mưa nên nghỉ."],
 ["không những A mà còn B","AだけでなくB","Không những đẹp mà còn rẻ."],
 ["vừa A vừa B","AしながらB","Vừa ăn vừa xem tivi."],
 ["疑問詞＋cũng","誰でも/何でも…","Ai cũng biết."],
 ["không＋動＋gì cả","何も〜ない","Không hiểu gì cả."],
 ["chưa từng＋動＋bao giờ","一度も〜ない","Chưa từng đến đó bao giờ."],
 ["trông…có vẻ＋形","〜に見える","Trông em ấy có vẻ mệt."],
 ["trước khi/sau khi＋動","〜の前/後に","Rửa tay trước khi ăn."],
 ["bao nhiêu…bấy nhiêu","〜だけ…","Mua bao nhiêu bán bấy nhiêu."],
 ["sao…vậy","〜のとおりに","Nói sao làm vậy."],
 ["cứ…là…","〜すると必ず","Cứ mưa to là ngập."],
 ["đáng＋動","〜する価値","Phim này đáng xem."],
 ["khó/dễ＋動","〜しにくい/やすい","Bài này khó hiểu."],
 ["tự＋動＋lấy","自分で〜","Tôi tự làm lấy."],
 ["không được＋動","〜してはいけない","Không được hút thuốc."],
 ["có thể nói","〜と言える","Có thể nói đây là biểu tượng."],
 ["thế nào…cũng","どうあっても","Thế nào tôi cũng đến."],
]))

# 4 接続詞
P.append(sub("4. 接続詞の分類（読解の空所）"))
P.append(tbl(["種類","接続詞","例"], [
 ["順接（だから）","nên / cho nên / vì vậy / vì thế / do đó","Trời mưa nên ở nhà."],
 ["逆接（しかし）","nhưng / tuy nhiên / thế nhưng / song","Mệt, tuy nhiên vẫn làm."],
 ["理由（なぜなら）","vì / bởi vì / do / tại vì","Nghỉ vì bị ốm."],
 ["並列・追加","và / hơn nữa / ngoài ra / đồng thời","Ngon, hơn nữa lại rẻ."],
 ["時系列","đầu tiên→sau đó→tiếp theo→cuối cùng","Đầu tiên…, cuối cùng…"],
 ["例示（例えば/特に）","ví dụ như / chẳng hạn / đặc biệt là","ví dụ như Hồ Tây…"],
 ["言い換え・結論","tức là / nói cách khác / tóm lại","Tóm lại, nên tiết kiệm."],
 ["対比（一方/逆に）","mặt khác / ngược lại / trong khi đó","Ngược lại, tôi thích cà phê."],
]))
P.append('</div>')
BLOCK = "\n".join(P)

ANCHOR = 'font-size:15px;margin:18px 0;">← モード選択に戻る</button>'

for f in ["index.html", "vilt_huong_ipad.html"]:
    t = rd(f)
    if 'id="area4-block"' in t:
        print("  既に4分野追加済み:", f); continue
    bk = os.path.join(BASE, f + ".bak2_20260609")
    if not os.path.exists(bk):
        shutil.copy(os.path.join(BASE, f), bk)
    # 解説ページ下部の戻るボタンの直前に挿入
    full = '<button onclick="huongExplainBack()" style="background:#1976d2;color:#fff;border:0;border-radius:10px;padding:10px 18px;' + ANCHOR
    if full in t:
        t = t.replace(full, BLOCK + "\n" + full, 1)
        wr(f, t)
        print("4分野 追加:", f)
    else:
        print("  ⚠ アンカー無し:", f)
print("DONE")
