// テーマ別語彙データ (4級+3級ミックス)
// 構造: vi(越), jp(日), pos(品詞), hanviet(漢越), ex_vi(例文越), ex_jp(例文日), note(注釈), cat(テーマ)
// 品詞: 名詞/動詞-動作/動詞-状態/形容詞/副詞/前置詞/接続詞/類別詞
var VOCAB_THEMED = [
// === 仕事・職場 (30語) ===
{vi:"công việc",jp:"仕事",pos:"名詞",hanviet:"公役",ex_vi:"Công việc của tôi rất bận.",ex_jp:"私の仕事はとても忙しい。",note:"",cat:"仕事・職場"},
{vi:"làm việc",jp:"働く",pos:"動詞-動作",hanviet:"-役",ex_vi:"Tôi làm việc ở một công ty Nhật.",ex_jp:"私は日系企業で働いている。",note:"làm=する、việc=こと",cat:"仕事・職場"},
{vi:"nghề nghiệp",jp:"職業",pos:"名詞",hanviet:"業業",ex_vi:"Nghề nghiệp của bạn là gì?",ex_jp:"あなたの職業は何ですか?",note:"",cat:"仕事・職場"},
{vi:"nhân viên",jp:"従業員",pos:"名詞",hanviet:"人員",ex_vi:"Công ty này có 200 nhân viên.",ex_jp:"この会社には200人の従業員がいる。",note:"",cat:"仕事・職場"},
{vi:"giám đốc",jp:"社長・部長",pos:"名詞",hanviet:"監督",ex_vi:"Giám đốc đang họp.",ex_jp:"社長は会議中です。",note:"",cat:"仕事・職場"},
{vi:"trưởng phòng",jp:"部長・課長",pos:"名詞",hanviet:"長房",ex_vi:"Anh ấy là trưởng phòng kinh doanh.",ex_jp:"彼は営業部長です。",note:"trưởng=長、phòng=部屋・部",cat:"仕事・職場"},
{vi:"đồng nghiệp",jp:"同僚",pos:"名詞",hanviet:"同業",ex_vi:"Đồng nghiệp của tôi rất tốt bụng.",ex_jp:"私の同僚はとても親切だ。",note:"đồng=同、nghiệp=業",cat:"仕事・職場"},
{vi:"cấp trên",jp:"上司",pos:"名詞",hanviet:"級上",ex_vi:"Cấp trên giao nhiều việc cho tôi.",ex_jp:"上司が私に多くの仕事を与えた。",note:"",cat:"仕事・職場"},
{vi:"cấp dưới",jp:"部下",pos:"名詞",hanviet:"級下",ex_vi:"Cấp dưới của tôi rất chăm chỉ.",ex_jp:"私の部下はとても勤勉だ。",note:"",cat:"仕事・職場"},
{vi:"công ty",jp:"会社",pos:"名詞",hanviet:"公司",ex_vi:"Công ty tôi ở Hà Nội.",ex_jp:"私の会社はハノイにある。",note:"",cat:"仕事・職場"},
{vi:"văn phòng",jp:"オフィス",pos:"名詞",hanviet:"文房",ex_vi:"Văn phòng của chúng tôi ở tầng 5.",ex_jp:"我々のオフィスは5階にある。",note:"",cat:"仕事・職場"},
{vi:"trụ sở",jp:"本社・本部",pos:"名詞",hanviet:"柱所",ex_vi:"Trụ sở chính ở Tokyo.",ex_jp:"本社は東京にある。",note:"",cat:"仕事・職場"},
{vi:"chi nhánh",jp:"支店",pos:"名詞",hanviet:"枝分",ex_vi:"Công ty có 3 chi nhánh.",ex_jp:"会社には支店が3つある。",note:"",cat:"仕事・職場"},
{vi:"họp",jp:"会議をする",pos:"動詞-動作",hanviet:"合",ex_vi:"Chúng ta sẽ họp lúc 9 giờ.",ex_jp:"9時に会議を開きます。",note:"",cat:"仕事・職場"},
{vi:"cuộc họp",jp:"会議(1回)",pos:"名詞",hanviet:"局合",ex_vi:"Cuộc họp kéo dài 2 tiếng.",ex_jp:"会議は2時間続いた。",note:"cuộc=回数の類別詞",cat:"仕事・職場"},
{vi:"báo cáo",jp:"報告(する)",pos:"動詞-動作",hanviet:"報告",ex_vi:"Tôi sẽ báo cáo vào ngày mai.",ex_jp:"明日報告します。",note:"名詞でも使う",cat:"仕事・職場"},
{vi:"tài liệu",jp:"資料",pos:"名詞",hanviet:"才料",ex_vi:"Hãy chuẩn bị tài liệu cho cuộc họp.",ex_jp:"会議用の資料を準備してください。",note:"",cat:"仕事・職場"},
{vi:"dự án",jp:"プロジェクト",pos:"名詞",hanviet:"予案",ex_vi:"Dự án này rất quan trọng.",ex_jp:"このプロジェクトはとても重要だ。",note:"",cat:"仕事・職場"},
{vi:"khách hàng",jp:"顧客",pos:"名詞",hanviet:"客項",ex_vi:"Khách hàng đang chờ ở văn phòng.",ex_jp:"顧客はオフィスで待っている。",note:"",cat:"仕事・職場"},
{vi:"đối tác",jp:"取引先・パートナー",pos:"名詞",hanviet:"対作",ex_vi:"Chúng tôi có đối tác ở Nhật.",ex_jp:"我々は日本に取引先がある。",note:"",cat:"仕事・職場"},
{vi:"hợp đồng",jp:"契約",pos:"名詞",hanviet:"合同",ex_vi:"Hợp đồng đã được ký.",ex_jp:"契約は締結された。",note:"",cat:"仕事・職場"},
{vi:"ký hợp đồng",jp:"契約を結ぶ",pos:"動詞-動作",hanviet:"記合同",ex_vi:"Ngày mai chúng ta sẽ ký hợp đồng.",ex_jp:"明日契約を結びます。",note:"ký=署名する",cat:"仕事・職場"},
{vi:"lương",jp:"給料",pos:"名詞",hanviet:"糧",ex_vi:"Lương của anh ấy khá cao.",ex_jp:"彼の給料はかなり高い。",note:"⚠️lượng(量)と混同注意",cat:"仕事・職場"},
{vi:"thưởng",jp:"賞与・ボーナス",pos:"名詞",hanviet:"賞",ex_vi:"Cuối năm sẽ có thưởng.",ex_jp:"年末にボーナスがある。",note:"",cat:"仕事・職場"},
{vi:"nghỉ phép",jp:"休暇を取る",pos:"動詞-動作",hanviet:"-法",ex_vi:"Tôi muốn nghỉ phép 3 ngày.",ex_jp:"3日間休みを取りたい。",note:"nghỉ=休む",cat:"仕事・職場"},
{vi:"làm thêm giờ",jp:"残業する",pos:"動詞-動作",hanviet:"--",ex_vi:"Hôm nay tôi phải làm thêm giờ.",ex_jp:"今日は残業しなければならない。",note:"thêm=追加、giờ=時間",cat:"仕事・職場"},
{vi:"đi công tác",jp:"出張する",pos:"動詞-動作",hanviet:"-公作",ex_vi:"Tuần sau tôi đi công tác Sài Gòn.",ex_jp:"来週サイゴンへ出張する。",note:"",cat:"仕事・職場"},
{vi:"tuyển dụng",jp:"採用する",pos:"動詞-動作",hanviet:"選用",ex_vi:"Công ty đang tuyển dụng nhân viên mới.",ex_jp:"会社は新人を採用中です。",note:"",cat:"仕事・職場"},
{vi:"phỏng vấn",jp:"面接する",pos:"動詞-動作",hanviet:"訪問",ex_vi:"Tôi có buổi phỏng vấn vào thứ Sáu.",ex_jp:"金曜に面接があります。",note:"",cat:"仕事・職場"},
{vi:"nghỉ việc",jp:"退職する",pos:"動詞-動作",hanviet:"-役",ex_vi:"Cô ấy đã nghỉ việc tháng trước.",ex_jp:"彼女は先月退職した。",note:"",cat:"仕事・職場"}
];
