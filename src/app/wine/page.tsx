import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import FrequencyBadge from "@/components/FrequencyBadge";

export const metadata: Metadata = {
  title: "MUNI × Kellerei Eisacktal | 山地葡萄酒 × 療癒儀式",
  description:
    "MUNI 攜手南蒂羅爾 Kellerei Eisacktal 酒莊，以阿爾卑斯山地葡萄酒的礦物能量，打造獨特的品飲療癒儀式。9 款精選山地葡萄酒，從花崗岩到白雲石，每一口都是大地頻率的共振。",
};

const WINES = [
  {
    id: "granit960",
    name: "Granit 960",
    nameZh: "花崗岩 960",
    vintage: "2021",
    series: "Granit960",
    seriesZh: "旗艦限量",
    type: "white" as const,
    grape: "Kerner",
    altitude: "590 – 970 m",
    description:
      "在一座由 Valle Isarco 20 噸花崗岩雕刻而成的 960 公升石桶中發酵與陳釀。花崗岩的孔隙率與礦物特性為這款 Kerner 注入了無與倫比的礦物深度與複雜性。明亮的稻草黃色帶著細膩的綠色反光，柑橘、蜜桃與黃蘋果的層次香氣，伴隨著礦物與草本的細膩韻味。",
    pairing: "聖杯二號 — 定心",
    pairingMood: "需要回到清晰、堅定的時刻",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/RPvhSmRURoIwGGHT.jpg",
    highlight: true,
  },
  {
    id: "adamantis",
    name: "Cuvée Adamantis",
    nameZh: "鑽石混釀",
    vintage: "2021",
    series: "Premium Cuvée",
    seriesZh: "頂級混釀",
    type: "white" as const,
    grape: "Sylvaner, Grüner Veltliner, Pinot Grigio, Kerner",
    altitude: "600 – 850 m",
    description:
      "Cantina Valle Isarco 的頂級酒款，僅限量 2,000 瓶。四種 Valle Isarco 最具代表性的葡萄品種精心混釀——Sylvaner 帶來優雅與果香，Grüner Veltliner 貢獻辛香氣息，Pinot Grigio 賦予結構與力量，Kerner 增添芳香層次。在法國橡木桶中發酵並陳釀 18 個月。",
    pairing: "聖杯四號 — 放心",
    pairingMood: "放下執著，回到柔軟與接納的時刻",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/XIClwNZLYrOfPbsr.png",
    highlight: true,
  },
  {
    id: "sabiona-sylvaner",
    name: "Sabiona Sylvaner",
    nameZh: "薩比奧納 希爾瓦那",
    vintage: "2020",
    series: "Sabiona",
    seriesZh: "修道院精選",
    type: "white" as const,
    grape: "Sylvaner",
    altitude: "550 – 700 m",
    description:
      "葡萄來自環繞薩比奧納修道院——被譽為「蒂羅爾的衛城」——的陽光山坡葡萄園。嚴格的產量控制、限量 3,000 瓶，在相思木桶中細膩陳釀，賦予這款酒無可比擬的品種特性與優雅氣質。",
    pairing: "聖杯五號 — 靜心",
    pairingMood: "睡前的安定儀式，讓心回到寧靜",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/BWtTAqGcgQhogaPd.png",
    highlight: false,
  },
  {
    id: "aristos-zero",
    name: "Aristos Zero",
    nameZh: "至臻零添加氣泡酒",
    vintage: "NV",
    series: "Aristos",
    seriesZh: "至臻系列",
    type: "sparkling" as const,
    grape: "Sylvaner",
    altitude: "550 – 700 m",
    description:
      "以傳統瓶中二次發酵法（Metodo Classico）釀造，在酒泥上陳釀至少 36 個月，完全不添加糖分（Pas Dosé）。葡萄同樣來自薩比奧納修道院的葡萄園，嚴格的產量控制與溫柔的釀造工藝，賦予這款氣泡酒獨特的個性。",
    pairing: "聖杯三號 — 開心",
    pairingMood: "慶祝的時刻，喚醒內在的喜悅與活力",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/VWmuefWQeOLAHbvl.png",
    highlight: false,
  },
  {
    id: "aristos-sylvaner",
    name: "Aristos Sylvaner",
    nameZh: "至臻 希爾瓦那",
    vintage: "2023",
    series: "Aristos",
    seriesZh: "至臻系列",
    type: "white" as const,
    grape: "Sylvaner",
    altitude: "550 – 700 m",
    description:
      "至臻系列的核心——嚴格的葡萄園管理與產量限制，確保每一顆葡萄都達到最佳品質。在不鏽鋼桶與大型橡木桶中發酵並陳釀 10 個月，展現出鮮明的品種特性、出色的結構與卓越的陳年潛力。",
    pairing: "聖杯一號 — 安心",
    pairingMood: "需要安全感與穩定的時刻",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/QqQqJuvsRoGlPCvy.png",
    highlight: false,
  },
  {
    id: "aristos-pinot-noir",
    name: "Aristos Pinot Noir Riserva",
    nameZh: "至臻 黑皮諾珍藏",
    vintage: "2023",
    series: "Aristos",
    seriesZh: "至臻系列",
    type: "red" as const,
    grape: "Pinot Noir",
    altitude: "500 – 600 m",
    description:
      "葡萄來自 Valle Isarco 南部的 Campodazzo 小鎮，從修剪到成熟度的嚴格控制，只選用品質最優異的葡萄。在大桶中發酵後，於法國橡木桶中陳釀 18 個月，再瓶中熟成 6 個月。濃郁的果香、優雅而富有表現力的酒體。",
    pairing: "聖杯六號 — 護心",
    pairingMood: "建立能量邊界，保護內在空間",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/AARWPVqMSRxruIYq.png",
    highlight: false,
  },
  {
    id: "kerner-classic",
    name: "Kerner Classic",
    nameZh: "經典 科爾納",
    vintage: "2024",
    series: "Classic",
    seriesZh: "經典系列",
    type: "white" as const,
    grape: "Kerner",
    altitude: "650 – 970 m",
    description:
      "Kerner 是 Schiava 與 Riesling 的雜交品種，以德國詩人兼醫師 Justinus Kerner 命名。偏好高海拔陽光山坡的輕質礫石與沙質土壤，晚熟的葡萄帶來飽滿的酒體與豐富的風味。在不鏽鋼桶中低溫發酵，保留清新的果香與礦物感。",
    pairing: "聖杯二號 — 定心",
    pairingMood: "日常的清晰與專注時刻",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/fIeLzuZcvmXkOcYh.png",
    highlight: false,
  },
  {
    id: "pinot-nero-classic",
    name: "Blauburgunder Classic",
    nameZh: "經典 黑皮諾",
    vintage: "2024",
    series: "Classic Red",
    seriesZh: "經典紅酒",
    type: "red" as const,
    grape: "Pinot Noir",
    altitude: "420 – 750 m",
    description:
      "源自法國勃根地的貴族品種，約百年前引入南蒂羅爾。Campodazzo 周圍溫暖的山坡提供了理想的生長條件，傳統浸皮發酵後在大型橡木桶中陳釀，展現出優雅的表現力與典型的品種特性。",
    pairing: "聖杯四號 — 放心",
    pairingMood: "放鬆的週末時光",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/XvXuYSjFGXFUmasx.png",
    highlight: false,
  },
  {
    id: "isaras-brut",
    name: "Isaras Brut",
    nameZh: "伊薩拉斯 氣泡酒",
    vintage: "NV",
    series: "Isaras",
    seriesZh: "開胃系列",
    type: "sparkling" as const,
    grape: "Sylvaner, Müller Thurgau",
    altitude: "560 – 590 m",
    description:
      "以 Valle Isarco 兩種代表性白葡萄品種——Müller Thurgau 與 Sylvaner 為基酒，採用 Charmat 法進行二次發酵，完美保留了原始的果香與清新感。是開胃酒的理想選擇，也能巧妙搭配輕食前菜。",
    pairing: "聖杯三號 — 開心",
    pairingMood: "聚會開場，喚醒愉悅的社交能量",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/PuTObeQvaLbykmPZ.png",
    highlight: false,
  },
];

const typeLabel = (type: string) => {
  switch (type) {
    case "white":
      return { text: "白酒", color: "bg-amber-100 text-amber-700 border-amber-200" };
    case "red":
      return { text: "紅酒", color: "bg-rose-100 text-rose-700 border-rose-200" };
    case "sparkling":
      return { text: "氣泡酒", color: "bg-sky-100 text-sky-700 border-sky-200" };
    default:
      return { text: type, color: "bg-stone-100 text-stone-700 border-stone-200" };
  }
};

export default function WinePage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero — 深色背景，呼應葡萄酒的深邃與山地的壯闊 */}
      <section className="relative pt-20 pb-24 px-4 bg-gradient-to-b from-[#1a2420] via-[#15201c] to-[#0f1a16] text-white overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Link
            href="/systems"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回療癒系統總覽
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm tracking-[0.4em] text-amber-400/80 mb-4">
                MUNI × KELLEREI EISACKTAL
              </p>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-amber-200">阿爾卑斯山地</span>
                <br />
                葡萄酒
                <br />
                <span className="text-amber-400">× 療癒儀式</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                當南蒂羅爾的花崗岩與白雲石孕育的山地葡萄酒，
                遇上 MUNI 的頻率療癒哲學——
                每一口酒，都是大地深處的能量共振。
              </p>
            </div>

            <div className="relative w-60 h-80 md:w-72 md:h-96 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-purple-600/10 rounded-full blur-3xl" />
              <Image
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/RPvhSmRURoIwGGHT.jpg"
                alt="Granit 960 — Kellerei Eisacktal 旗艦酒款"
                fill
                className="object-contain drop-shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* MUNI × Kellerei 合作宣言 */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f1a16] to-[#F9F7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-6">
              A COLLABORATION OF TERROIR & HEALING
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6 leading-relaxed">
              當風土遇上療癒
              <br />
              葡萄酒不再只是飲品
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-left md:text-center">
              <p>
                MUNI 相信，<strong className="text-[#4a5548]">大地的能量透過植物傳遞</strong>。
                在南蒂羅爾 Valle Isarco 的山谷中，海拔 250 至 970 公尺的陡峭山坡上，
                花崗岩、白雲石與片岩土壤中的礦物質，經由葡萄藤的根系被吸收，
                最終凝聚在每一滴酒液之中。
              </p>
              <p>
                MUNI × Kellerei Eisacktal 的合作，是
                <strong className="text-[#4a5548]">兩種對自然的敬畏的交匯</strong>：
                Kellerei Eisacktal 以六十年的釀酒傳統守護風土的完整表達，
                MUNI 以花精與精油的智慧引導這份大地能量與你的身心對話。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kellerei Eisacktal 品牌故事 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              THE WINERY
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#4a5548] mb-4">
              Kellerei Eisacktal
            </h2>
            <p className="text-stone-500 text-lg">
              Cantina Valle Isarco — 南蒂羅爾頂級白葡萄酒的代名詞
            </p>
          </div>

          {/* YouTube 影片嵌入 */}
          <div className="mb-16">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/UkJMEmK2huo?rel=0&modestbranding=1"
                title="Kellerei Eisacktal - Cantina Valle Isarco"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="text-center text-stone-400 text-sm mt-4">
              Valle Isarco — 義大利最北端的葡萄酒產區，阿爾卑斯山與地中海風景交匯之地
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <blockquote className="border-l-4 border-amber-400 pl-6 py-2 mb-6">
                <p className="text-stone-600 italic leading-relaxed text-lg">
                  &ldquo;A Valley, so unique. As its people.&rdquo;
                </p>
                <footer className="mt-3 text-sm text-stone-400">— Kellerei Eisacktal</footer>
              </blockquote>

              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  <strong className="text-[#4a5548]">1961 年</strong>，24 位葡萄農在義大利南蒂羅爾（Alto Adige）
                  的 Valle Isarco 山谷中，共同創立了這間釀酒合作社。
                  如今已有 <strong className="text-[#4a5548]">135 個在地農戶家族</strong>加入，
                  他們的哲學很簡單：<strong className="text-[#4a5548]">「品質，絕不妥協。」</strong>
                </p>
                <p>
                  每年約生產 <strong className="text-[#4a5548]">950,000 瓶</strong>葡萄酒，
                  其中 <strong className="text-[#4a5548]">98% 為白酒</strong>——
                  這是 Valle Isarco 獨特風土的最佳證明。
                  從西元前 500 年的第一批葡萄酒證據，到今天的國際獎項，
                  這片土地的釀酒故事已延續了兩千五百年。
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* 關鍵數據 */}
              <div className="bg-gradient-to-br from-[#1a2420] to-[#15201c] rounded-2xl p-6 text-white">
                <h3 className="font-serif text-lg font-bold text-amber-200 mb-4">
                  酒莊一覽
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-amber-300">135</p>
                    <p className="text-white/50 text-xs mt-1">在地農戶家族</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-amber-300">150</p>
                    <p className="text-white/50 text-xs mt-1">公頃葡萄園</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-amber-300">14</p>
                    <p className="text-white/50 text-xs mt-1">葡萄品種</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-amber-300">1,000<span className="text-base">m</span></p>
                    <p className="text-white/50 text-xs mt-1">最高海拔</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-amber-300">8</p>
                    <p className="text-white/50 text-xs mt-1">種不同土壤</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-amber-300">60<span className="text-base">%</span></p>
                    <p className="text-white/50 text-xs mt-1">陡坡葡萄園</p>
                  </div>
                </div>
              </div>

              {/* 歷史時間線 */}
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-4">
                  歷史軌跡
                </h3>
                <div className="space-y-3">
                  {[
                    { year: "500 BC", event: "Valle Isarco 最早的葡萄酒證據" },
                    { year: "1961", event: "24 位葡萄農創立 Cantina Valle Isarco" },
                    { year: "2006", event: "生產設施翻新擴建" },
                    { year: "2021", event: "60 週年，推出全新品牌形象" },
                  ].map((item) => (
                    <div key={item.year} className="flex items-start gap-3">
                      <span className="inline-block px-2.5 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-medium whitespace-nowrap border border-amber-200 mt-0.5">
                        {item.year}
                      </span>
                      <p className="text-stone-600 text-sm">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 正面能量因素 */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-3">
                POSITIVE ENERGY FACTORS
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#4a5548]">
                每一瓶酒背後的正面能量
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-100">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#4a5548] mb-2">手工採摘</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  135 個農戶家族，365 天悉心照料葡萄園。在陡峭的山坡上，
                  許多地方<strong className="text-[#4a5548]">只能以手工採摘</strong>——
                  每一顆葡萄都經過人手的溫度與選擇，這份用心是機器無法取代的能量傳遞。
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#4a5548] mb-2">天然氣候恩賜</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  阿爾卑斯山脈的屏障帶來<strong className="text-[#4a5548]">充沛的日照與涼爽的夜風</strong>，
                  白天累積糖分，夜晚保留酸度。靠近白雲石山脈（Dolomites）的地理位置，
                  造就了劇烈的日夜溫差——這是頂級白酒芳香與礦物感的天然密碼。
                </p>
              </div>

              <div className="bg-gradient-to-br from-stone-50 to-orange-50 rounded-2xl p-6 border border-stone-200">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18a.94.94 0 00-.662.274.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#4a5548] mb-2">8 種古老土壤</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  石英片岩、閃長岩、火山斑岩……<strong className="text-[#4a5548]">8 種截然不同的土壤</strong>
                  在 150 公頃的葡萄園中交替分布。葡萄藤的根系深入貧瘠的岩層，
                  吸收珍貴的礦物養分——這是大地最原始的能量來源。
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-6 border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#4a5548] mb-2">永續農法</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  採用<strong className="text-[#4a5548]">整合式葡萄栽培</strong>，
                  保護生物多樣性、最小化化學農藥使用。自有太陽能光伏系統發電，
                  輕量瓶設計每年減少 67.5 噸 CO₂ 排放——
                  對大地的尊重，就是最好的能量回饋。
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-100">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#4a5548] mb-2">薩比奧納修道院</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  被譽為「蒂羅爾的衛城」的<strong className="text-[#4a5548]">薩比奧納修道院</strong>，
                  矗立在巨大的閃長岩上方。修道院周圍通風溫暖的陡峭葡萄園，
                  是酒莊最珍貴的頂級產區——Sabiona 系列的靈魂之地。
                </p>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#4a5548] mb-2">耐心與時間</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  釀酒師以<strong className="text-[#4a5548]">極大的耐心與精煉的直覺</strong>
                  照料每一款酒，等待它們達到完美的成熟度。
                  緩慢的陳釀過程賦予葡萄酒深度與複雜性——
                  傳統與現代技術在酒窖中的交融，是品質的關鍵。
                </p>
              </div>
            </div>
          </div>

          {/* 社區精神引言 */}
          <div className="bg-gradient-to-r from-[#1a2420] to-[#15201c] rounded-2xl p-8 md:p-10 text-center text-white">
            <p className="text-amber-300 text-sm tracking-[0.2em] mb-4">VISION & MISSION</p>
            <blockquote className="text-lg md:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto italic">
              &ldquo;社群精神是我們的指導原則。我們的目標是透過精心的葡萄處理，
              釀造高品質的葡萄酒，以此表達我們<strong className="text-amber-200 not-italic">對自然的尊重</strong>，
              以及對後代的忠誠。&rdquo;
            </blockquote>
            <p className="text-white/40 text-sm mt-4">— Kellerei Eisacktal · Cantina Valle Isarco</p>
          </div>
        </div>
      </section>

      {/* 礦物能量與療癒 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              MINERAL ENERGY & HEALING
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              礦物能量 × 頻率共振
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 border border-stone-200">
              <div className="text-3xl mb-4">⛰️</div>
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                大地的礦物頻率
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Valle Isarco 的土壤由花崗岩、白雲石與石英片岩構成，
                這些古老的岩石富含豐富的礦物質。葡萄藤的根系深入土壤，
                將大地的<strong className="text-[#4a5548]">礦物能量</strong>轉化為葡萄酒中
                獨特的礦物感——這不僅是風味，更是一種
                <strong className="text-[#4a5548]">大地頻率的傳遞</strong>。
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-rose-50 rounded-2xl p-8 border border-violet-100">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                MUNI 頻率共振
              </h3>
              <p className="text-stone-600 leading-relaxed">
                在 MUNI 的療癒哲學中，適量的紅酒富含
                <strong className="text-[#4a5548]">白藜蘆醇</strong>與
                <strong className="text-[#4a5548]">多酚類抗氧化物</strong>，
                能支持心血管健康與細胞修復。當 Kellerei Eisacktal 的風土守護了
                葡萄酒的礦物完整性，MUNI 的精油與花精則引導這份能量
                與你的身心<strong className="text-[#4a5548]">深度共振</strong>。
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#1a2420] to-[#15201c] rounded-2xl p-8 text-center text-white">
            <p className="text-amber-300 text-sm tracking-[0.2em] mb-3">MUNI WINE PHILOSOPHY</p>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl mx-auto">
              葡萄酒是大地的血液，承載著土壤、陽光與時間的記憶。
              品飲一杯山地葡萄酒，就是與阿爾卑斯山的
              <strong className="text-amber-200">千年礦物能量</strong>對話。
            </p>
          </div>
        </div>
      </section>

      {/* 旗艦酒款 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              FLAGSHIP WINES
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              旗艦酒款
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Kellerei Eisacktal 最具代表性的兩款限量酒款，
              展現 Valle Isarco 風土的極致表達。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {WINES.filter((w) => w.highlight).map((wine) => {
              const label = typeLabel(wine.type);
              return (
                <div
                  key={wine.id}
                  className="bg-gradient-to-br from-[#1a2420] to-[#15201c] rounded-3xl p-8 text-white shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="relative w-32 h-48 sm:w-40 sm:h-56 flex-shrink-0 mx-auto sm:mx-0">
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        className="object-contain drop-shadow-lg"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-amber-400/20 text-amber-300 rounded text-xs border border-amber-400/30">
                          {wine.seriesZh}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs border ${label.color}`}>
                          {label.text}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-amber-100 mb-1">
                        {wine.name}
                      </h3>
                      <p className="text-white/50 text-sm mb-1">{wine.nameZh} · {wine.vintage}</p>
                      <p className="text-white/40 text-xs mb-4">{wine.grape} · {wine.altitude}</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {wine.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 全系列酒款 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              WINE COLLECTION
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              精選酒款系列
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              從至臻精選到經典日常，每一款都承載著 Valle Isarco 的風土記憶。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WINES.filter((w) => !w.highlight).map((wine) => {
              const label = typeLabel(wine.type);
              return (
                <div
                  key={wine.id}
                  className="group bg-gradient-to-b from-stone-50 to-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 bg-gradient-to-b from-stone-100 to-stone-50 flex items-center justify-center overflow-hidden">
                    <div className="relative w-24 h-44">
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                        unoptimized
                      />
                    </div>
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2 py-0.5 bg-white/90 text-stone-600 rounded text-xs border border-stone-200 backdrop-blur-sm">
                        {wine.seriesZh}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-xs border ${label.color}`}>
                        {label.text}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-1">
                      {wine.name}
                    </h3>
                    <p className="text-xs text-stone-400 mb-1">
                      {wine.nameZh} · {wine.vintage}
                    </p>
                    <p className="text-xs text-[#9A7B4F] mb-3">{wine.grape} · {wine.altitude}</p>
                    <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                      {wine.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 葡萄酒 × 精油搭配建議 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              WINE × OIL PAIRING
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              葡萄酒 × 精油搭配建議
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              每一款酒都有對應的 MUNI 聖杯精油，
              讓味覺與嗅覺的頻率同時共振。
            </p>
          </div>

          <div className="space-y-4">
            {(() => {
              const cnNum: Record<string, number> = { "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6 };
              const getPairingOrder = (p: string) => {
                const match = p.match(/[一二三四五六]/);
                return match ? cnNum[match[0]] ?? 99 : 99;
              };
              // 按聖杯號碼分組，每組可能有多款酒
              const grouped = new Map<string, typeof WINES>();
              WINES.forEach((w) => {
                if (!w.pairing.startsWith("聖杯")) return;
                const arr = grouped.get(w.pairing) || [];
                arr.push(w);
                grouped.set(w.pairing, arr);
              });
              const sorted = [...grouped.entries()].sort(
                (a, b) => getPairingOrder(a[0]) - getPairingOrder(b[0])
              );
              const colorMap: Record<string, { bg: string; border: string }> = {
                "聖杯一號 — 安心": { bg: "from-violet-50 to-purple-50", border: "border-violet-200" },
                "聖杯二號 — 定心": { bg: "from-sky-50 to-blue-50", border: "border-sky-200" },
                "聖杯三號 — 開心": { bg: "from-amber-50 to-yellow-50", border: "border-amber-200" },
                "聖杯四號 — 放心": { bg: "from-rose-50 to-pink-50", border: "border-rose-200" },
                "聖杯五號 — 靜心": { bg: "from-teal-50 to-emerald-50", border: "border-teal-200" },
                "聖杯六號 — 護心": { bg: "from-emerald-50 to-green-50", border: "border-emerald-200" },
              };
              return sorted.map(([pairing, wines]) => {
                const pairStyle = colorMap[pairing] || { bg: "from-stone-50 to-white", border: "border-stone-200" };
                return (
                  <div
                    key={pairing}
                    className={`bg-gradient-to-br ${pairStyle.bg} rounded-2xl p-6 border ${pairStyle.border}`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🫧</span>
                      <span className="font-serif font-bold text-[#4a5548]">{pairing}</span>
                    </div>
                    <p className="text-sm text-stone-500 mb-4 pl-8">{wines[0].pairingMood}</p>
                    <div className="space-y-2 pl-8">
                      {wines.map((w) => (
                        <div key={w.id} className="flex items-center gap-2">
                          <span className="text-base">🍷</span>
                          <span className="text-sm font-medium text-[#4a5548]">
                            {w.name} {w.vintage !== "NV" ? w.vintage : ""}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* MUNI 品飲療癒儀式 */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a2420] to-[#0f1a16] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.4em] text-amber-400/80 mb-4">
              MUNI WINE RITUAL
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-amber-100 mb-4">
              MUNI 品飲療癒儀式
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              四個步驟，讓一杯葡萄酒成為一次與大地的深度連結
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "安定",
                icon: "🫧",
                description:
                  "選擇對應的 MUNI 聖杯精油，滴在手腕內側。閉上眼睛，深呼吸三次，讓精油的植物頻率先安定你的神經系統，為品飲做好準備。",
              },
              {
                step: "02",
                title: "觀察",
                icon: "👁️",
                description:
                  "將酒倒入杯中，觀察它的顏色——稻草黃、金黃、還是寶石紅？輕輕搖杯，看酒液在杯壁上的流動。這是用視覺感受大地能量的第一步。",
              },
              {
                step: "03",
                title: "聞香",
                icon: "🌿",
                description:
                  "將鼻子靠近杯口，先聞靜止時的香氣，再搖杯後聞。感受從果香、花香到礦物的層次變化。此刻，你的嗅覺正在與精油和葡萄酒的雙重頻率對話。",
              },
              {
                step: "04",
                title: "品味",
                icon: "🍷",
                description:
                  "小口啜飲，讓酒液在口腔中停留片刻。感受酸度、甜度、單寧與礦物感的平衡。在吞嚥後，覺察餘韻在口中的延續——那是大地留給你的訊息。",
              },
            ].map((ritual, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{ritual.icon}</span>
                  <div>
                    <span className="text-xs text-amber-400 tracking-wider">
                      STEP {ritual.step}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-amber-100">
                      {ritual.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {ritual.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 國際獎項認證 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              INTERNATIONAL AWARDS
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              國際獎項認證
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Kellerei Eisacktal 的酒款屢獲國際權威評鑑肯定，
              品質獲得全球最嚴格的葡萄酒評審認可。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                wine: "Cuvée Adamantis 2021",
                awards: [
                  { org: "Bibenda", score: "5 Grappoli", icon: "🏆" },
                  { org: "Decanter World Wine Awards", score: "95 分", icon: "🥇" },
                  { org: "Falstaff", score: "95 分", icon: "🏅" },
                  { org: "VITAE-AIS", score: "4 Viti", icon: "🍇" },
                ],
              },
              {
                wine: "Aristos Kerner 2024",
                awards: [
                  { org: "James Suckling", score: "94 分", icon: "🥇" },
                  { org: "Doctor Wine", score: "96 分 (Faccino)", icon: "🏆" },
                  { org: "Bibenda", score: "5 Grappoli", icon: "🏆" },
                  { org: "Gambero Rosso", score: "Tre Bicchieri", icon: "🥂" },
                ],
              },
              {
                wine: "Sabiona Sylvaner",
                awards: [
                  { org: "Doctor Wine", score: "Best Sylvaner 2025", icon: "🏆" },
                  { org: "Doctor Wine", score: "96 分 (Faccino)", icon: "🥇" },
                ],
              },
              {
                wine: "Aristos Sylvaner 2023",
                awards: [
                  { org: "VITAE-AIS", score: "4 Viti", icon: "🍇" },
                ],
              },
              {
                wine: "Aristos Pinot Noir 2021",
                awards: [
                  { org: "Decanter", score: "Silver Medal", icon: "🥈" },
                ],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-stone-50 to-amber-50/30 rounded-2xl p-6 border border-stone-100 shadow-sm"
              >
                <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-4">
                  {item.wine}
                </h3>
                <div className="space-y-2.5">
                  {item.awards.map((award, aidx) => (
                    <div key={aidx} className="flex items-start gap-2">
                      <span className="text-base flex-shrink-0">{award.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-[#4a5548]">{award.org}</p>
                        <p className="text-xs text-[#9A7B4F]">{award.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6">
            想知道哪款酒最適合你此刻的狀態？
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            告訴 MUNI 療癒顧問你現在的心情與場景，
            <br className="hidden sm:inline" />
            AI 會為你推薦最適合的葡萄酒 × 精油搭配方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              問問 MUNI 療癒顧問
            </a>
            <Link
              href="/systems"
              className="inline-flex items-center justify-center gap-2 bg-[#1a2420] hover:bg-[#0f1a16] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              探索更多 MUNI 療癒系統
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#0f1a16] text-white/70">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg text-white/90 mb-2">MUNI 牟尼</p>
          <p className="text-sm">在寂靜中，承接你的答案。</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              首頁
            </Link>
            <Link href="/flowers" className="hover:text-white transition-colors">
              花精百科
            </Link>
            <Link href="/systems" className="hover:text-white transition-colors">
              療癒系統
            </Link>
            <Link href="/essential-oil" className="hover:text-white transition-colors">
              聖杯精油
            </Link>
            <Link href="/acupuncture" className="hover:text-white transition-colors">
              董氏心氣神針
            </Link>
            <Link href="/chocolate" className="hover:text-white transition-colors">
              巧克力
            </Link>
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              療癒顧問
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
