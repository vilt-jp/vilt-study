# -*- coding: utf-8 -*-
"""Huong並び替えアプリ更新：①必要なカンマを6問に反映 ②解説ページ＋ボタン追加。
対象：data.js（index.htmlが参照）／vilt_huong_ipad.html（インラインデータ）／index.html。
"""
import os, shutil, datetime, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

BASE = os.path.dirname(os.path.abspath(__file__))
STAMP = "20260609"

def rd(f): return open(os.path.join(BASE, f), encoding='utf-8').read()
def wr(f, s): open(os.path.join(BASE, f), 'w', encoding='utf-8', newline='').write(s)

# ---- backup ----
for f in ["data.js", "index.html", "vilt_huong_ipad.html"]:
    src = os.path.join(BASE, f)
    bk = os.path.join(BASE, f + ".bak_" + STAMP)
    if not os.path.exists(bk):
        shutil.copy(src, bk)
        print("backup:", os.path.basename(bk))

# ---- ① カンマ反映（タイル＋正解文）----
# (タイル置換, 正解文中の置換 old→new)
COMMA = [
    ('"Hồ Tây"', '"Hồ Tây,"', "ví dụ như Hồ Tây Hồ Hoàn Kiếm", "ví dụ như Hồ Tây, Hồ Hoàn Kiếm"),
    ('"tại Việt Nam"', '"tại Việt Nam,"', "Tại Việt Nam bất cứ căn bếp", "Tại Việt Nam, bất cứ căn bếp"),
    ('"bất cứ điều gì"', '"bất cứ điều gì,"', "bất cứ điều gì bạn phải", "bất cứ điều gì, bạn phải"),
    ('"giờ đây"', '"giờ đây,"', "Giờ đây chúng ta có thể", "Giờ đây, chúng ta có thể"),
    ('"kích thước"', '"kích thước,"', "và kích thước giá tiền thay đổi", "và kích thước, giá tiền thay đổi"),
    ('"được tặng quà"', '"được tặng quà,"', "Khi được tặng quà dù thích", "Khi được tặng quà, dù thích"),
]

def apply_comma(text, fname):
    for tile_old, tile_new, ans_old, ans_new in COMMA:
        for old, new in [(tile_old, tile_new), (ans_old, ans_new)]:
            c = text.count(old)
            if c != 1:
                print(f"  ⚠ {fname}: '{old[:30]}' 出現 {c} 回（期待1）")
            text = text.replace(old, new)
    return text

for f in ["data.js", "vilt_huong_ipad.html"]:
    t = rd(f)
    t = apply_comma(t, f)
    wr(f, t)
    print("comma applied:", f)

# ---- ② 解説 HTML（文法18＋単語表） ----
GRAMMAR = [
 ("1. 〜だけれども（譲歩）", "Dù / Mặc dù / Tuy … (nhưng) … vẫn / cũng",
  "逆のことが起きても「それでも〜」。後ろに vẫn（それでも）や cũng（〜も）。Tuy が一番かたい言い方。（第1・26・27・28問）"),
 ("2. 〜であろうとなかろうと", "Dù … hay (không) … thì … cũng",
  "二つのどちらでも結果は同じ。（第30・31問）"),
 ("3. do（行為者）＋動詞 ＝ 〜によって…される", "… do 人 … (ra)",
  "英語の受け身に近い。「誰がやったか」を do(=by) の後ろに置く。ra は外に広めるイメージ。（第3・4問）"),
 ("4. 〜なので…（理由→結果）", "(Do/Vì) … nên …",
  "前に理由、nên のあとに結果。（第34・35問）"),
 ("5. 〜だけでなく…も", "không những … mà còn … (nữa)",
  "二つの良い点・特徴を並べる。là が必要な文では2回要る。（第5・6・7問）"),
 ("6. 例えば", "ví dụ như",
  "例を挙げるときの言い方。（第8問）"),
 ("7. どんな〜でも", "bất cứ + 名詞 + nào cũng / bất cứ điều gì / bất cứ thứ gì / bất cứ lúc nào",
  "「どれでも・何でも・いつでも」と全部を指す。（第9・10・11問）"),
 ("8. 〜次第・〜に応じて", "tùy theo / tùy thuộc vào（成句 tùy cơ ứng biến）",
  "条件によって結果が変わる。（第12・13・14問）"),
 ("9. 〜するほど・〜するあまり", "đến mức / đến nỗi",
  "程度が大きいことを強調する。（第15・16・22問）"),
 ("10. 〜するために", "để + 動詞",
  "目的を表す。（第17問）"),
 ("11. 〜だけ…する（同じ量）", "bao nhiêu … bấy nhiêu",
  "前の量と同じだけ後ろもする。（第18問）"),
 ("12. 〜のとおりに…する", "sao … vậy",
  "言われたとおりに行う。（第19問）"),
 ("13. 〜すると決まって…", "cứ … là …",
  "あることが起きると必ず次が起きる。（第20問）"),
 ("14. 〜させる（引き起こす）", "khiến / làm / làm cho",
  "原因が結果を引き起こす。（第21・22・23問）"),
 ("15. もし〜なら…（すべき）", "nếu … thì (nên) …",
  "条件と、それに対する助言・結果。（第24問）"),
 ("16. 自分で〜する", "tự … lấy",
  "自分の力で行うことを強める。（第25問）"),
 ("17. 〜と言える", "có thể nói",
  "「〜と言ってよい」という前置き。文頭に来る。（第32・33問）"),
 ("18. その他", "trước khi＋動詞 / chưa bao giờ / không bao giờ",
  "〜する前に（第10）／一度も〜ない（第28）／決して〜ない（第29）。"),
]
VOCAB = [
 ("phản đối","反対する","反対"),("cố gắng hết sức","全力を尽くす","—"),
 ("diễn viên","俳優","演員"),("nhà văn","作家","文(văn)"),
 ("căn bếp","台所","—"),("trọng lượng","重さ","重量"),
 ("kích thước","大きさ・寸法","—"),("giá tiền","値段","価(giá)"),
 ("câu trả lời","答え","—"),("xếp hàng","列に並ぶ","—"),
 ("làm thủ tục","手続きをする","手続(thủ tục)"),("bị ngập","水浸しになる","—"),
 ("giật mình","びっくりする","—"),("cảm động","感動する","感動"),
 ("rơi nước mắt","涙を流す","—"),("ngành du lịch","観光業","遊歴(du lịch)"),
 ("tê liệt","麻痺する","—"),("giải quyết","解決する","解決"),
 ("trận đấu","試合","—"),("diễn ra","行われる","演(diễn)"),
 ("ăn trộm","盗む","—"),("tặng quà","贈り物をする","贈(tặng)"),
 ("bận rộn","忙しい","—"),("rảnh rỗi","暇","—"),
 ("biểu tượng","象徴","表象"),("người tiêu dùng","消費者","消(tiêu)"),
 ("lười học","勉強を怠ける","学(học)"),("thi lại","追試・再試験","試(thi)"),
]

def esc(s):
    return s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

parts = []
parts.append('<div id="explainArea" class="hidden" style="max-width:760px;margin:0 auto;padding:16px;">')
parts.append('<button onclick="huongExplainBack()" style="background:#1976d2;color:#fff;border:0;border-radius:10px;padding:10px 18px;font-size:15px;margin-bottom:14px;">← モード選択に戻る</button>')
parts.append('<h2 style="font-size:20px;color:#0d47a1;margin:6px 0;">解説：文法と単語（漢越語つき）</h2>')
parts.append('<p style="color:#666;font-size:13px;margin:0 0 14px;">Huong先生 並び替え35問・4級対策</p>')
parts.append('<h3 style="font-size:17px;color:#1565c0;border-bottom:2px solid #1565c0;padding-bottom:4px;">Ⅰ. 文法パターン</h3>')
for title, pat, desc in GRAMMAR:
    parts.append('<div style="margin:12px 0;padding:10px 12px;background:#f4f8ff;border-left:4px solid #1976d2;border-radius:6px;">')
    parts.append('<div style="font-weight:bold;color:#0d47a1;font-size:15px;">' + esc(title) + '</div>')
    parts.append('<div style="color:#c2185b;font-size:15px;margin:3px 0;">' + esc(pat) + '</div>')
    parts.append('<div style="color:#333;font-size:14px;">' + esc(desc) + '</div>')
    parts.append('</div>')
parts.append('<h3 style="font-size:17px;color:#1565c0;border-bottom:2px solid #1565c0;padding-bottom:4px;margin-top:22px;">Ⅱ. 単語（漢越語つき）</h3>')
parts.append('<p style="color:#666;font-size:13px;">「漢越語」＝漢字に対応するベトナム語。— は固有語（漢越語でない）。一部だけ漢越語の場合はその部分を示す。</p>')
parts.append('<table style="width:100%;border-collapse:collapse;font-size:14px;">')
parts.append('<tr style="background:#1565c0;color:#fff;"><th style="padding:7px;border:1px solid #ccc;text-align:left;">ベトナム語</th><th style="padding:7px;border:1px solid #ccc;text-align:left;">意味</th><th style="padding:7px;border:1px solid #ccc;text-align:left;">漢越語</th></tr>')
for vi, jp, han in VOCAB:
    parts.append('<tr><td style="padding:6px;border:1px solid #ddd;color:#c2185b;">' + esc(vi) + '</td><td style="padding:6px;border:1px solid #ddd;">' + esc(jp) + '</td><td style="padding:6px;border:1px solid #ddd;color:#555;">' + esc(han) + '</td></tr>')
parts.append('</table>')
parts.append('<button onclick="huongExplainBack()" style="background:#1976d2;color:#fff;border:0;border-radius:10px;padding:10px 18px;font-size:15px;margin:18px 0;">← モード選択に戻る</button>')
parts.append('</div>')
EXPLAIN_DIV = "\n".join(parts)

BTN = ('<div style="text-align:center;margin-top:12px;">'
       '<button onclick="huongShowExplain()" style="background:#00897b;color:#fff;border:0;border-radius:12px;'
       'padding:14px 22px;font-size:16px;font-weight:bold;cursor:pointer;">📖 解説（文法・単語）を読む</button></div>')

GLOBAL_JS = ('\n<script>\n'
 'function huongShowExplain(){\n'
 '  ["modeArea","learnArea","completeArea"].forEach(function(id){var e=document.getElementById(id);if(e)e.classList.add("hidden");});\n'
 '  var x=document.getElementById("explainArea"); if(x) x.classList.remove("hidden");\n'
 '  window.scrollTo(0,0);\n'
 '}\n'
 'function huongExplainBack(){\n'
 '  var x=document.getElementById("explainArea"); if(x) x.classList.add("hidden");\n'
 '  var m=document.getElementById("modeArea"); if(m) m.classList.remove("hidden");\n'
 '  window.scrollTo(0,0);\n'
 '}\n'
 '</script>\n')

def inject(fname):
    t = rd(fname)
    if "huongShowExplain" in t:
        print("  既に解説追加済み:", fname); return
    # 解説ボタンを modeMenu の直後に
    anchor = '<div class="mode-sel" id="modeMenu"></div>'
    if anchor in t:
        t = t.replace(anchor, anchor + "\n" + BTN, 1)
    else:
        print("  ⚠ modeMenuアンカー無し:", fname)
    # 解説エリアを </main> の直前に
    if "</main>" in t:
        t = t.replace("</main>", EXPLAIN_DIV + "\n</main>", 1)
    else:
        print("  ⚠ </main>無し:", fname)
    # グローバル関数を </body> 直前に
    if "</body>" in t:
        t = t.replace("</body>", GLOBAL_JS + "</body>", 1)
    else:
        print("  ⚠ </body>無し:", fname)
    wr(fname, t)
    print("explain injected:", fname)

for f in ["index.html", "vilt_huong_ipad.html"]:
    inject(f)

print("DONE")
