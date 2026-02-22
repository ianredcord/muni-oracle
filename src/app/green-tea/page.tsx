import type { Metadata } from "next";
import Link from "next/link";

import FrequencyBadge from "@/components/FrequencyBadge";

export const metadata: Metadata = {
  title: "MUNI × 日本綠茶 | 百年有機茶園 × 頻率共振",
  description:
    "MUNI 攜手日本百年有機茶園，嚴選宇治抹茶、鹿兒島玉露、煎茶與焙茶。一年一採，立春後第 88 天春收，手工採摘、6 小時內蒸青完成。百年有機，歷史見證。",
};

/* ─── CDN Images ─── */
const IMG = {
  matchaPowder:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/aZKeeTcEASMsfPFg.png",
  hojichaLeaves:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/PxrLKhbgvEcjkPUq.jpg",
  gyokuroLeaves:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/evwjdpMDljwZVvRW.jpg",
  senchaLeaves:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/SpJIfgcMQPUIuObV.jpg",
  teaField:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/lfgSsEdyZlibdfhl.jpg",
  teaPlantation:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/rwAQekTKZfZZromC.jpg",
  handPicking:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/REjvsiGnJifwMkrI.jpg",
  steaming:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/yfjUPlISIzazboWF.jpg",
  matchaCeremony:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/GzhKdeqjCgfpuuMT.jpg",
  ujiFarm:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/hYmOHYDnQnCNiyuY.jpg",
};

/* ─── Products ─── */
const PRODUCTS = [
  {
    id: "matcha",
    name: "有機宇治抹茶",
    nameEn: "Organic Uji Matcha",
    origin: "京都・宇治",
    tagline: "嚴選有機蒸葉，石臼碾磨，色澤深翠",
    description:
      "源自日本綠茶發祥地——京都宇治。採摘前 20 天以上覆蓋遮光，使茶葉累積更多茶胺酸與葉綠素。嚴選有機蒸葉經傳統石臼低溫碾磨，保留完整營養與深翠色澤。每一碗抹茶，都是百年茶道精神的凝聚。",
    character: "鮮甜回甘、海苔香氣、奶油般的綿密口感",
    nutrients: "茶胺酸 L-Theanine、兒茶素 EGCG、葉綠素、維生素 C",
    ritual: "晨間靜心儀式 — 以茶筅刷出細密泡沫，專注當下的覺察練習",
    image: IMG.matchaPowder,
    color: "from-green-900/25 to-emerald-900/20",
    border: "border-green-700/30",
    accent: "text-green-400",
    badge: "bg-green-900/50 text-green-300",
    highlight: true,
  },
  {
    id: "gyokuro",
    name: "有機玉露",
    nameEn: "Organic Gyokuro",
    origin: "鹿兒島",
    tagline: "覆下園 20 日遮光，獨特覆香與甘味",
    description:
      "玉露是日本綠茶中的最高等級。採摘前以覆蓋遮光 20 天以上，使茶葉中的茶胺酸含量大幅提升，帶來獨特的「覆香」——一種深沉而甘美的海苔般香氣。來自鹿兒島的溫暖氣候與火山土壤，賦予茶葉更加圓潤飽滿的風味。",
    character: "濃郁甘甜、海苔覆香、絲滑口感、餘韻悠長",
    nutrients: "高濃度茶胺酸、兒茶素、咖啡因（溫和釋放）、礦物質",
    ritual: "午後靜養 — 以 50°C 低溫沖泡，感受甘露般的溫潤",
    image: IMG.gyokuroLeaves,
    color: "from-teal-900/20 to-green-900/20",
    border: "border-teal-700/30",
    accent: "text-teal-400",
    badge: "bg-teal-900/50 text-teal-300",
    highlight: false,
  },
  {
    id: "sencha",
    name: "有機煎茶",
    nameEn: "Organic Sencha",
    origin: "鹿兒島・宇治",
    tagline: "日本國民綠茶，清爽甘醇的日常之選",
    description:
      "煎茶是日本最具代表性的綠茶類型，佔日本茶產量的 80%。來自鹿兒島與宇治兩大產區的有機茶葉，在陽光下自然生長，經蒸青、揉捻、乾燥的傳統工藝製成。清爽的草本香氣中帶有自然的甘甜，是每日飲茶儀式的最佳選擇。",
    character: "清爽甘醇、草本清香、微澀回甘、明亮翠綠湯色",
    nutrients: "兒茶素、維生素 C、β-胡蘿蔔素、膳食纖維",
    ritual: "日常飲茶 — 以 70°C 沖泡，感受陽光與大地的清新能量",
    image: IMG.senchaLeaves,
    color: "from-lime-900/20 to-green-900/15",
    border: "border-lime-700/25",
    accent: "text-lime-400",
    badge: "bg-lime-900/50 text-lime-300",
    highlight: false,
  },
  {
    id: "hojicha",
    name: "有機焙茶",
    nameEn: "Organic Hojicha",
    origin: "京都・宇治",
    tagline: "高溫焙煎，溫暖安定的夜間之茶",
    description:
      "焙茶是將綠茶以高溫焙煎而成，過程中大幅降低咖啡因含量，同時產生獨特的焦香與溫暖氣息。來自宇治的有機焙茶，以傳統鐵臼精心研磨，香氣馥郁而不苦澀。極低的咖啡因使其成為睡前安定儀式的完美選擇。",
    character: "焦香溫暖、堅果甘甜、柔和順口、極低咖啡因",
    nutrients: "焙煎多酚、吡嗪（放鬆成分）、礦物質",
    ritual: "睡前安定 — 溫熱飲用，搭配精油嗅覺冥想，進入深層放鬆",
    image: IMG.hojichaLeaves,
    color: "from-amber-900/20 to-yellow-900/15",
    border: "border-amber-700/25",
    accent: "text-amber-400",
    badge: "bg-amber-900/50 text-amber-300",
    highlight: false,
  },
];

/* ─── Heritage Timeline ─── */
const HERITAGE = [
  { year: "1858", event: "開墾山地，開始種茶" },
  { year: "1975", event: "轉向有機栽培，不再使用農藥" },
  { year: "1982", event: "全茶園轉為有機" },
  { year: "1999", event: "天皇皇后品嚐有機茶" },
  { year: "2001", event: "獲得有機 JAS 認證" },
  { year: "2007", event: "獲得美國有機認證" },
  { year: "2009", event: "獲得歐盟有機認證" },
  { year: "2022", event: "獲得 GlobalG.A.P. 認證" },
];

/* ─── Certifications ─── */
const CERTS = [
  { name: "有機 JAS", desc: "日本農林水產省有機認證", year: "2001" },
  { name: "NOP", desc: "美國有機認證", year: "2007" },
  { name: "EU Organic", desc: "歐盟有機認證（ICEA）", year: "2009" },
  { name: "GlobalG.A.P.", desc: "國際農業生產認證", year: "2022" },
  { name: "FSSC 22000", desc: "食品安全管理系統認證", year: "2024" },
  { name: "JONA", desc: "日本有機自然食品協會", year: "2001" },
];

/* ─── Energy Factors ─── */
const ENERGY_FACTORS = [
  {
    icon: "🌱",
    title: "一年一採",
    desc: "立春過後第 88 天——「八十八夜」，是日本茶最珍貴的春收時節。一年僅此一次的採摘，讓每一片茶葉都凝聚了整個冬季蓄積的生命能量。",
  },
  {
    icon: "✋",
    title: "手工採摘",
    desc: "堅持傳統手工採摘，只取最嫩的一芯二葉。機器無法辨別的微妙差異，在茶農的指尖得到精準判斷，確保每一片茶葉都達到最高品質。",
  },
  {
    icon: "♨️",
    title: "6 小時蒸青",
    desc: "從採摘到蒸青不超過 6 小時。蒸青是日本綠茶獨特的殺青工藝，以高溫蒸汽瞬間停止茶葉氧化，最大限度保留鮮葉中的茶胺酸與兒茶素。",
  },
  {
    icon: "🏔️",
    title: "宇治 × 鹿兒島",
    desc: "宇治——日本綠茶發祥地，海拔 250 公尺的霧谷；鹿兒島——火山土壤的溫暖南國。兩大頂級產區的風土交融，賦予茶葉獨特的層次與深度。",
  },
  {
    icon: "🌿",
    title: "百年有機傳承",
    desc: "自 1858 年開始種茶，1975 年轉向有機栽培，至今超過 165 年的茶園歷史。六代人的堅持，不使用任何農藥與化學肥料，只以自然之力孕育茶葉。",
  },
  {
    icon: "✨",
    title: "MUNI 頻率共振",
    desc: "每一款綠茶都經過 MUNI Frequency Resonance™ 技術調頻，讓茶胺酸的 α 腦波頻率與你的意識狀態產生最深層的共振。",
  },
];

export default function GreenTeaPage() {
  return (
    <main className="min-h-screen bg-[#0a1510] text-white">
      {/* Custom Dark Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1510]/90 backdrop-blur-md border-b border-green-900/20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-serif tracking-widest text-green-100"
          >
            MUNI
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/systems"
              className="text-sm text-green-200/70 hover:text-green-100 transition-colors"
            >
              療癒系統
            </Link>
            <Link
              href="https://ai.munione.co"
              className="text-sm px-4 py-2 rounded-full bg-green-800/60 text-green-100 hover:bg-green-700/60 transition-colors flex items-center gap-1"
            >
              <span>♡</span> MUNI 療癒顧問
            </Link>
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-900/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-teal-900/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-700/30 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-green-500/80 text-sm tracking-[0.3em] uppercase mb-6">
            MUNI × 日本有機綠茶
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-green-50 mb-6 leading-tight">
            百年有機，歷史見證
          </h1>
          <p className="text-lg md:text-xl text-green-200/60 font-light max-w-2xl mx-auto leading-relaxed">
            來自日本綠茶發祥地——京都宇治的百年有機茶園，
            <br className="hidden md:block" />
            一年一採，手工採摘，6 小時內蒸青完成。
            <br className="hidden md:block" />
            每一片茶葉，都承載著六代人對自然的敬畏與堅持。
          </p>

          {/* Decorative line */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-green-700/40" />
            <div className="w-2 h-2 rounded-full bg-green-600/60" />
            <div className="w-12 h-px bg-green-700/40" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TEA GARDEN STORY
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-500/70 text-xs tracking-[0.2em] uppercase mb-4">
                The Tea Garden
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-green-50 mb-6 leading-relaxed">
                日本綠茶發祥地
                <br />
                <span className="text-green-300/70 text-xl">
                  自 1858 年，六代人的有機堅持
                </span>
              </h2>
              <p className="text-green-200/50 leading-relaxed mb-6">
                茶園坐落於京都府南部的宇治田原町——日本綠茶的發祥之地。海拔約 250
                公尺的未開發自然山谷中，朝晚溫差顯著、霧氣繚繞、石灰質土壤與優質水源，共同孕育出世界上最優質的有機綠茶。
              </p>
              <p className="text-green-200/50 leading-relaxed mb-6">
                1972
                年，第六代當主因噴灑農藥導致化學中毒，從此立下決心轉向有機栽培。1982
                年全茶園完成有機轉型，至今超過 40
                年不使用任何農藥與化學肥料。這份對土地與消費者的承諾，讓河川中消失的魚群重新出現，生態逐漸恢復。
              </p>
              <p className="text-green-200/50 leading-relaxed">
                1999 年，天皇皇后蒞臨品嚐該園有機茶。2001
                年獲得日本有機 JAS 認證，隨後陸續取得美國、歐盟有機認證及
                GlobalG.A.P. 國際認證——這是對百年有機精神最高的歷史見證。
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-green-800/20">
                <img
                  src={IMG.ujiFarm}
                  alt="宇治有機茶園"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="mt-4 rounded-2xl overflow-hidden border border-green-800/20">
                <img
                  src={IMG.teaField}
                  alt="日本綠茶茶田"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HERITAGE TIMELINE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-green-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Heritage
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-green-50 mb-4">
              百年有機年表
            </h2>
            <p className="text-green-200/50 max-w-xl mx-auto">
              從 1858 年開墾種茶至今，超過 165 年的歷史傳承。
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-green-800/30 md:-translate-x-px" />

            <div className="space-y-8">
              {HERITAGE.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center gap-6 ${
                    idx % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-green-500/60 border-2 border-green-400/30 -translate-x-1.5 md:-translate-x-1.5 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      idx % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                    }`}
                  >
                    <span className="text-2xl font-serif text-green-400">
                      {item.year}
                    </span>
                    <p className="text-green-200/50 text-sm mt-1">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY SPRING HARVEST — 八十八夜
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-green-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Hachijū-hachiya
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-green-50 mb-4">
              八十八夜 — 一年一採的珍貴
            </h2>
            <p className="text-green-200/50 max-w-2xl mx-auto leading-relaxed">
              「八十八夜」是日本傳統曆法中立春後的第 88
              天，通常落在五月初。這一天被視為茶葉採收的最佳時機——經過整個冬季的休眠與養分蓄積，春天的第一批新芽蘊含最豐富的茶胺酸與營養成分。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-green-800/15 bg-green-950/10 text-center">
              <div className="text-4xl font-serif text-green-400 mb-3">
                88
              </div>
              <h3 className="text-green-100 font-medium mb-2">
                立春後第 88 天
              </h3>
              <p className="text-green-200/40 text-sm leading-relaxed">
                日本傳統「八十八夜」，一年中茶葉營養最豐富的採收時節。整個冬季蓄積的生命力，在這一刻完美釋放。
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-green-800/15 bg-green-950/10 text-center">
              <div className="text-4xl font-serif text-green-400 mb-3">
                6h
              </div>
              <h3 className="text-green-100 font-medium mb-2">
                採摘到蒸青
              </h3>
              <p className="text-green-200/40 text-sm leading-relaxed">
                從手工採摘到蒸青殺青不超過 6
                小時。蒸汽瞬間停止氧化，鎖住茶葉中最鮮活的茶胺酸與兒茶素。
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-green-800/15 bg-green-950/10 text-center">
              <div className="text-4xl font-serif text-green-400 mb-3">
                165+
              </div>
              <h3 className="text-green-100 font-medium mb-2">
                年有機歷史
              </h3>
              <p className="text-green-200/40 text-sm leading-relaxed">
                自 1858 年種茶至今，超過 165 年的茶園歷史。40+
                年完全有機栽培，不使用任何農藥與化學肥料。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRODUCTS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-green-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-green-50 mb-4">
              四款嚴選有機綠茶
            </h2>
            <p className="text-green-200/50 max-w-xl mx-auto">
              每一款都經過 MUNI Frequency Resonance™ 調頻，
              讓茶胺酸的 α 腦波頻率與你的意識狀態產生共振。
            </p>
          </div>

          <div className="space-y-16">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className={`relative rounded-2xl border ${product.border} bg-gradient-to-br ${product.color} overflow-hidden`}
              >
                {product.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                      茶道之魂
                    </span>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Image */}
                  <div
                    className={`flex items-center justify-center ${
                      idx % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center ${
                      idx % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${product.badge}`}
                      >
                        {product.character}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-green-200/50">
                        {product.origin}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-green-50 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-green-200/30 tracking-wider mb-4">
                      {product.nameEn}
                    </p>

                    <p className={`text-sm ${product.accent} mb-4 italic`}>
                      「{product.tagline}」
                    </p>

                    <p className="text-green-200/50 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Character & Nutrients */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-green-200/30 mb-1">
                          風味特徵
                        </p>
                        <p className="text-xs text-green-200/50">
                          {product.character}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-green-200/30 mb-1">
                          核心營養
                        </p>
                        <p className="text-xs text-green-200/50">
                          {product.nutrients}
                        </p>
                      </div>
                    </div>

                    {/* Ritual */}
                    <div>
                      <p className="text-xs text-green-200/30 mb-1">
                        MUNI 儀式建議
                      </p>
                      <p className={`text-sm ${product.accent}`}>
                        {product.ritual}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CERTIFICATIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-green-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Certifications
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-green-50 mb-4">
              國際有機認證
            </h2>
            <p className="text-green-200/50 max-w-xl mx-auto">
              橫跨日本、美國、歐盟的完整有機認證體系，是對百年有機精神的最高肯定。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTS.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-green-800/15 bg-green-950/10 hover:bg-green-950/20 transition-colors group"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-2xl font-serif text-green-400 group-hover:text-green-300 transition-colors">
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-green-100 font-medium mb-2">
                  {cert.name}
                </h3>
                <p className="text-green-200/40 text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ENERGY FACTORS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-green-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Energy Factors
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-green-50 mb-4">
              六大正面能量因素
            </h2>
            <p className="text-green-200/50 max-w-xl mx-auto">
              從茶園到你的茶碗，每一個環節都是能量品質的保證。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENERGY_FACTORS.map((factor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-green-800/15 bg-green-950/10 hover:bg-green-950/20 transition-colors group"
              >
                <div className="text-3xl mb-4">{factor.icon}</div>
                <h3 className="text-green-100 font-medium mb-2 group-hover:text-green-50 transition-colors">
                  {factor.title}
                </h3>
                <p className="text-green-200/40 text-sm leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HARVEST & PROCESS GALLERY
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-green-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Harvest & Process
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-green-50 mb-4">
              採摘與製茶
            </h2>
            <p className="text-green-200/50 max-w-xl mx-auto">
              從茶園中的手工採摘，到工廠內的蒸青製程——
              每一步都遵循百年傳統，以最短的時間鎖住茶葉最鮮活的生命力。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden border border-green-800/20 md:row-span-2">
              <img
                src={IMG.handPicking}
                alt="手工採摘茶葉"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-green-800/20">
              <img
                src={IMG.teaPlantation}
                alt="日本茶園風景"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-green-800/20">
              <img
                src={IMG.steaming}
                alt="蒸青製程"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-green-800/20 md:col-span-2">
              <img
                src={IMG.matchaCeremony}
                alt="抹茶茶道"
                className="w-full h-64 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RESONANCE MATRIX
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-green-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Resonance Matrix
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-green-50 mb-4">
              綠茶 × 牟尼香 共振搭配
            </h2>
            <p className="text-green-200/50 max-w-xl mx-auto">
              每一款綠茶都可搭配 MUNI 牟尼香，
              讓飲茶與嗅覺的頻率同時共振，開啟完整的療癒儀式。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-green-800/20">
                  <th className="text-left py-4 px-4 text-green-200/40 text-xs tracking-wider uppercase">
                    綠茶
                  </th>
                  <th className="text-left py-4 px-4 text-green-200/40 text-xs tracking-wider uppercase">
                    牟尼香
                  </th>
                  <th className="text-left py-4 px-4 text-green-200/40 text-xs tracking-wider uppercase">
                    共振維度
                  </th>
                  <th className="text-left py-4 px-4 text-green-200/40 text-xs tracking-wider uppercase">
                    建議時機
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-800/10">
                  <td className="py-4 px-4 text-green-100 text-sm">
                    有機宇治抹茶
                  </td>
                  <td className="py-4 px-4 text-green-400 text-sm">
                    牟尼香
                  </td>
                  <td className="py-4 px-4 text-green-200/50 text-sm">
                    清淨覺察・專注當下
                  </td>
                  <td className="py-4 px-4 text-green-200/40 text-sm">
                    晨間靜心、冥想前的覺察練習
                  </td>
                </tr>
                <tr className="border-b border-green-800/10">
                  <td className="py-4 px-4 text-green-100 text-sm">
                    有機玉露
                  </td>
                  <td className="py-4 px-4 text-teal-400 text-sm">
                    牟尼香
                  </td>
                  <td className="py-4 px-4 text-green-200/50 text-sm">
                    深層滋養・溫潤修復
                  </td>
                  <td className="py-4 px-4 text-green-200/40 text-sm">
                    午後靜養、需要深層滋養時
                  </td>
                </tr>
                <tr className="border-b border-green-800/10">
                  <td className="py-4 px-4 text-green-100 text-sm">
                    有機煎茶
                  </td>
                  <td className="py-4 px-4 text-lime-400 text-sm">
                    牟尼香
                  </td>
                  <td className="py-4 px-4 text-green-200/50 text-sm">
                    安定平和・日常滋養
                  </td>
                  <td className="py-4 px-4 text-green-200/40 text-sm">
                    日常飲茶中的安定儀式
                  </td>
                </tr>
                <tr className="border-b border-green-800/10">
                  <td className="py-4 px-4 text-green-100 text-sm">
                    有機焙茶
                  </td>
                  <td className="py-4 px-4 text-amber-400 text-sm">
                    牟尼香
                  </td>
                  <td className="py-4 px-4 text-green-200/50 text-sm">
                    穩定扎根・安定入眠
                  </td>
                  <td className="py-4 px-4 text-green-200/40 text-sm">
                    睡前安定儀式、需要放鬆時
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/15 to-[#0a1510]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-green-50 mb-6">
            想知道哪款綠茶最適合你此刻的狀態？
          </h2>
          <p className="text-green-200/50 mb-10 leading-relaxed">
            告訴 MUNI 療癒顧問你現在的身心狀態與需求，
            <br className="hidden md:block" />
            AI 會為你推薦最適合的綠茶方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://ai.munione.co"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-700 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-500 transition-all shadow-lg shadow-green-900/30"
            >
              <span>♡</span> 問問 MUNI 療癒顧問
            </Link>
            <Link
              href="/systems"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-green-700/30 text-green-200/70 hover:text-green-100 hover:border-green-600/50 transition-all"
            >
              探索更多 MUNI 療癒系統 →
            </Link>
          </div>
        </div>
      </section>

      {/* Frequency Badge */}
      <FrequencyBadge variant="dark" full />

      {/* Footer */}
      <footer className="py-12 border-t border-green-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl font-serif text-green-100 mb-2">MUNI 牟尼</p>
          <p className="text-green-200/30 text-sm">
            在寂靜中，承接你的答案。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-green-200/20">
            <Link
              href="/"
              className="hover:text-green-200/50 transition-colors"
            >
              首頁
            </Link>
            <Link
              href="/flowers"
              className="hover:text-green-200/50 transition-colors"
            >
              花精百科
            </Link>
            <Link
              href="/essential-oil"
              className="hover:text-green-200/50 transition-colors"
            >
              牟尼香
            </Link>
            <Link
              href="/ginseng"
              className="hover:text-green-200/50 transition-colors"
            >
              人蔘療癒
            </Link>
            <Link
              href="/wine"
              className="hover:text-green-200/50 transition-colors"
            >
              葡萄酒療癒
            </Link>
            <Link
              href="/olive-oil"
              className="hover:text-green-200/50 transition-colors"
            >
              橄欖油
            </Link>
            <Link
              href="/frequency"
              className="hover:text-green-200/50 transition-colors"
            >
              獨家技術
            </Link>
            <Link
              href="/systems"
              className="hover:text-green-200/50 transition-colors"
            >
              療癒系統
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
