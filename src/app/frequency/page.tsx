import type { Metadata } from "next";
import Link from "next/link";

/* 深色版 Header，專用於 frequency 頁面 */
function DarkHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2420]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold text-white/90 hover:text-white transition-colors">
          MUNI
        </Link>
        <nav className="flex items-center gap-3 md:gap-6">
          <Link href="/systems" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
            療癒系統
          </Link>
          <Link href="/wine" className="text-white/60 hover:text-white text-sm font-medium transition-colors hidden sm:inline">
            葡萄酒
          </Link>
          <a
            href="https://ai.munione.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-4 py-1.5 text-sm font-medium transition-all shadow-sm hover:shadow-md"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            MUNI 療癒顧問
          </a>
        </nav>
      </div>
    </header>
  );
}

export const metadata: Metadata = {
  title: "MUNI Frequency Resonance™ | 萬物調頻，回到本然",
  description:
    "MUNI 獨家頻率共振技術——從基頻發現到泛音展開、多頻疊加協同，透過迷走神經、筋膜網絡與嗅覺三條通道，讓身體作為一個整體被調諧。每一件 MUNI 產品都是共振載體。",
};

/* ─── 六層架構資料 ─── */
const LAYERS = [
  {
    id: 1,
    title: "MUNI 基頻",
    subtitle: "萬物共振的原點",
    icon: "◉",
    color: "from-amber-500/20 to-amber-700/10",
    borderColor: "border-amber-600/30",
    accentColor: "text-amber-400",
    question:
      "如果宇宙萬物——從水分子到人體細胞，從一片葉子到一塊岩石——都在振動，那麼是否存在一個所有振動都願意回歸的頻率？",
    answer:
      "MUNI 團隊花了多年時間，只為回答這一個問題。經過反覆交叉驗證，一個頻率從所有實驗數據中浮現——它不屬於任何單一學派的理論預測，而是從物質的自發行為中被觀察到的。",
    experiments: [
      {
        name: "水的結構實驗",
        result: "水自發形成高度完整、全域對稱的幾何圖案",
      },
      {
        name: "植物與天然素材共振",
        result: "揮發性分子排列達到最穩定的振盪模式",
      },
      {
        name: "人體生理指標驗證",
        result: "自律神經達到最佳平衡（HRV、GSR、呼吸節律）",
      },
      {
        name: "筋膜張力測試",
        result: "從「防禦性緊縮」自然過渡到「流動性釋放」",
      },
      {
        name: "跨地域驗證",
        result: "亞洲與歐洲不同環境下結果一致，確認普遍性",
      },
    ],
    traits: [
      { name: "普遍性", desc: "對水、植物、人體、場域均產生和諧共振" },
      { name: "穩態吸引", desc: "讓物質自發趨向更穩定的排列" },
      { name: "泛音展開性", desc: "自然展開的泛音涵蓋多重共振區間" },
      { name: "跨載體一致性", desc: "透過聲波、電磁場、液態、氣態均有效" },
      { name: "可疊加性", desc: "與其他頻率疊加時強化整體穩定度" },
    ],
    quote:
      "它不是被發明的，是被找到的。就像黃金的熔點不是人類決定的——MUNI 基頻是萬物本身就在回應的一個振動原點。",
  },
  {
    id: 2,
    title: "泛音展開",
    subtitle: "從一個原點，長出整個宇宙",
    icon: "◎",
    color: "from-emerald-500/20 to-emerald-700/10",
    borderColor: "border-emerald-600/30",
    accentColor: "text-emerald-400",
    description:
      "一根弦振動時，不只產生基頻，還同時產生 2 倍、3 倍、4 倍的泛音。這不是人為設計，而是物理定律本身的結構。MUNI 基頻的泛音序列自然向上展開，涵蓋從極低頻到可聽頻段的廣闊範圍。",
    properties: [
      {
        name: "自相似性",
        desc: "每個倍頻都與基頻保持和諧整數比關係，如同音樂中的八度音程",
      },
      {
        name: "多頻段覆蓋",
        desc: "從腦波極低頻到器官中頻，再到細胞分子高頻，像一把梯子從宏觀延伸到微觀",
      },
      {
        name: "穩態一致性",
        desc: "所有泛音共享同一數學根基，天然和諧共存",
      },
    ],
    scales: [
      {
        level: "宏觀——場域",
        system: "人與環境的共振關係",
        range: "基頻及低階泛音",
      },
      {
        level: "中觀——結構",
        system: "筋膜網絡、器官系統",
        range: "中階泛音",
      },
      {
        level: "微觀——分子",
        system: "細胞膜、蛋白質、水分子簇",
        range: "高階泛音",
      },
      {
        level: "精神——意識",
        system: "腦波狀態、覺察深度",
        range: "泛音序列的整體和聲",
      },
    ],
    quote:
      "任何只作用於單一尺度的頻率技術，都像是只調了一根弦的吉他。MUNI 基頻的泛音展開天然覆蓋了多重尺度。",
  },
  {
    id: 3,
    title: "多頻疊加協同",
    subtitle: "振動之間的對話",
    icon: "◈",
    color: "from-violet-500/20 to-violet-700/10",
    borderColor: "border-violet-600/30",
    accentColor: "text-violet-400",
    description:
      "自然界從不用單一頻率運作。一片森林裡同時存在風聲、鳥鳴、溪水、樹葉摩擦——這些頻率彼此不衝突，反而共同構成一個讓人類神經系統瞬間安定下來的「場」。",
    comparison: [
      {
        dimension: "水分子排列",
        single: "局部對稱，邊界模糊",
        muni: "全域對稱，幾何結構完整且穩定",
      },
      {
        dimension: "自律神經反應",
        single: "偏向單側調節",
        muni: "交感與副交感同時趨向動態平衡",
      },
      {
        dimension: "筋膜張力",
        single: "局部釋放，整體不變",
        muni: "整體張力重新分配，深層自發微運動",
      },
      {
        dimension: "共振建立速度",
        single: "需較長時間達穩態",
        muni: "顯著更快進入穩態，維持更久",
      },
      {
        dimension: "素材分子活性",
        single: "活動度提升但不穩定",
        muni: "活動度提升且排列趨向一致",
      },
      {
        dimension: "環境適應性",
        single: "更換環境後效果衰減",
        muni: "跨環境表現一致",
      },
    ],
    quote:
      "一般的多頻技術像是把不同顏色的顏料倒在一起——最終得到的是混濁。MUNI 的多頻疊加協同像是光的三稜鏡反過來運作——讓多道光精確匯聚，還原為一束白光。",
  },
  {
    id: 4,
    title: "神經系統通道",
    subtitle: "頻率進入身體的高速公路",
    icon: "◇",
    color: "from-cyan-500/20 to-cyan-700/10",
    borderColor: "border-cyan-600/30",
    accentColor: "text-cyan-400",
    description:
      "頻率不是「照射」在身體表面就能起作用的。它需要一條進入的路徑。人體提供了三條天然的頻率高速公路，在 MUNI 多頻疊加協同的作用下同時被啟動。",
    channels: [
      {
        name: "迷走神經",
        subtitle: "內臟與大腦的雙向頻率通道",
        icon: "🧠",
        detail:
          "基於 Stephen Porges 的多重迷走神經理論，不同層級的頻率同時作用於腹側迷走、交感、背側迷走三個分支，讓整個自律神經系統作為一個整體被調諧。六週的共振頻率訓練已被證實能顯著降低焦慮與抑鬱症狀。",
      },
      {
        name: "筋膜網絡",
        subtitle: "全身連續的振動傳導網",
        icon: "🫀",
        detail:
          "筋膜是人體最大的感覺器官，也是最高效的振動傳導介質。當頻率接觸身體任何一點，筋膜在毫秒級速度內將振動傳遞至全身——比神經傳導更快，比血液循環覆蓋範圍更廣。深層筋膜會出現自發性微運動，自主重組張力分佈。",
      },
      {
        name: "嗅覺神經",
        subtitle: "最古老、最直接的大腦通道",
        icon: "👃",
        detail:
          "嗅覺是唯一不經過視丘中繼、直達杏仁核與海馬迴的感覺。MUNI 的 Attar 精油攜帶特定頻率共振模式，透過嗅覺神經同時在化學層面觸發神經反應，在頻率層面直接影響情緒調節迴路。",
      },
    ],
    quote:
      "三條路同時走，身體作為一個整體在回應——這就是為什麼使用者描述的體驗不是「某個部位放鬆了」，而是「整個人好像重新校準了」。",
  },
  {
    id: 5,
    title: "物質共振載體",
    subtitle: "每一件產品都是共振載體",
    icon: "◆",
    color: "from-rose-500/20 to-rose-700/10",
    borderColor: "border-rose-600/30",
    accentColor: "text-rose-400",
    description:
      "MUNI 多頻疊加協同最具突破性的一點在於：它不依賴特定硬體載體。這套頻率協同邏輯可以透過多種介質實現——聲波、電磁場、液態介質、氣態分子、甚至生物場。",
    matrix: [
      {
        path: "嗅覺 → 杏仁核 → 情緒中樞",
        products: "Attar、牟尼香精油、玫瑰精露",
        dimension: "分子微觀 + 神經頻率",
      },
      {
        path: "消化 → 迷走神經 → 內臟調節",
        products: "紅蔘、橄欖油、綠茶、巧克力",
        dimension: "分子微觀 + 腸腦軸共振",
      },
      {
        path: "經絡 → 筋膜 → 全身張力場",
        products: "Somaniks 針灸貼片",
        dimension: "結構中觀 + 能量通道",
      },
      {
        path: "意識 → 注意力 → 腦波狀態",
        products: "花精頻率、牌卡、牟尼圖",
        dimension: "精神維度 + 意識場",
      },
    ],
    quote:
      "當使用者同時透過多條路徑接收 MUNI 的頻率時，共振不是相加，而是相乘——就像多頻疊加協同在人體內部自然地發生了。",
  },
  {
    id: 6,
    title: "意識維度",
    subtitle: "頻率的最終歸宿",
    icon: "✦",
    color: "from-amber-500/20 to-yellow-700/10",
    borderColor: "border-yellow-600/30",
    accentColor: "text-yellow-400",
    description:
      "如果頻率可以改變水的結構，可以調節自律神經，可以重組筋膜張力——那麼，意識本身是否也是一種可以被調諧的頻率？",
    perspectives: [
      {
        tradition: "神經科學",
        insight:
          "深度禪定中大腦自發產生高度同步的 γ 波爆發，同時基底維持穩定的 α/θ 波——與 MUNI 多頻疊加協同的結構驚人地相似。",
      },
      {
        tradition: "中醫一氣周流",
        insight:
          "黃元御的理論：萬物源於一氣，氣的升降出入、五臟相生相剋，本質上就是不同頻率的共振與調制。經絡是共振通道，穴位是共振節點。",
      },
      {
        tradition: "藏傳禪修",
        insight:
          "當心完全安住時，腦波自然降落到極為特定的頻段。明就仁波切的 Open Heart 冥想本質上是「意識調頻」——放下干擾，讓心回到它原本的頻率。",
      },
    ],
    levels: [
      { plane: "分子層面", expression: "水的幾何結構" },
      { plane: "身體層面", expression: "筋膜的張力流動" },
      { plane: "神經層面", expression: "迷走神經的平衡狀態" },
      { plane: "意識層面", expression: "心的安住" },
    ],
    quote:
      "物質就是低頻的意識，意識就是高頻的物質。它們是同一條泛音序列上的不同音符。",
  },
];

export default function FrequencyPage() {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const L0 = LAYERS[0] as any;
  const L1 = LAYERS[1] as any;
  const L2 = LAYERS[2] as any;
  const L3 = LAYERS[3] as any;
  const L4 = LAYERS[4] as any;
  const L5 = LAYERS[5] as any;
  return (
    <div className="min-h-screen bg-[#1a2420] text-stone-200">
      <DarkHeader />

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* 背景動態波紋 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2420] via-[#15201c] to-[#1a2420]" />
          {/* 同心圓波紋動畫 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-amber-500/10 animate-[ping_4s_ease-out_infinite]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-amber-500/15 animate-[ping_4s_ease-out_1s_infinite]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border border-amber-500/20 animate-[ping_4s_ease-out_2s_infinite]" />
          </div>
          {/* 中心光點 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-400/60 shadow-[0_0_60px_20px_rgba(217,169,78,0.15)]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-amber-400/80 tracking-[0.4em] text-xs md:text-sm uppercase mb-6">
            Exclusive Technology
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            MUNI Frequency
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              Resonance™
            </span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-stone-400 mt-6 mb-8">
            萬物調頻，回到本然
          </p>
          <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            從水分子到人體細胞，從一片葉子到一塊岩石——萬物都在振動。
            <br className="hidden md:block" />
            MUNI 找到了所有振動都願意回歸的頻率原點，
            <br className="hidden md:block" />
            並以六層架構將它轉化為可體驗的療癒技術。
          </p>
          <p className="text-amber-400/60 max-w-xl mx-auto mt-6 text-sm italic font-serif leading-relaxed">
            頻率是方法，祝福是心意。兩者合一，才是 MUNI 的完整表達。
          </p>

          {/* 向下滾動提示 */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-amber-500/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── 六層架構導覽 ─── */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-amber-400/70 tracking-[0.3em] text-xs uppercase mb-4">
            Six-Layer Architecture
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-white mb-4">
            六層共振架構
          </h2>
          <p className="text-center text-stone-500 max-w-2xl mx-auto mb-16 text-sm md:text-base">
            從基頻發現到意識維度，每一層都建立在前一層的基礎之上，
            共同構成一套完整的頻率共振技術體系。
          </p>

          {/* 六層概覽卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {LAYERS.map((layer) => (
              <a
                key={layer.id}
                href={`#layer-${layer.id}`}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${layer.color} border ${layer.borderColor} hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-2xl ${layer.accentColor}`}>
                    {layer.icon}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    0{layer.id}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-white mb-1">
                  {layer.title}
                </h3>
                <p className="text-xs text-stone-400">{layer.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 第一層：MUNI 基頻 ─── */}
      <section
        id="layer-1"
        className="py-24 px-4 border-t border-white/5 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-amber-400">◉</span>
            <div>
              <p className="text-xs text-amber-400/70 tracking-[0.2em] uppercase font-mono">
                Layer 01
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                {L0.title}
              </h2>
              <p className="text-stone-400 mt-1">{L0.subtitle}</p>
            </div>
          </div>

          {/* 核心提問 */}
          <div className="bg-white/[0.03] rounded-2xl p-8 md:p-10 border border-white/5 mb-12">
            <p className="text-amber-300/60 text-xs tracking-widest uppercase mb-4">
              一個被遺忘的問題
            </p>
            <p className="font-serif text-lg md:text-xl text-stone-300 leading-relaxed italic">
              「{L0.question}」
            </p>
            <p className="text-stone-400 mt-6 leading-relaxed text-sm md:text-base">
              {L0.answer}
            </p>
          </div>

          {/* 實驗歷程 */}
          <h3 className="font-serif text-xl text-white mb-6">
            實驗歷程：從混沌中聽見秩序
          </h3>
          <div className="grid gap-4 mb-12">
            {L0.experiments.map((exp: any, i: number) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-600/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-amber-400 text-xs font-mono font-bold">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{exp.name}</p>
                  <p className="text-stone-400 text-sm mt-1">{exp.result}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 發現結果 */}
          <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/5 rounded-2xl p-8 border border-amber-600/20 mb-12">
            <h3 className="font-serif text-xl text-amber-300 mb-4">
              發現：MUNI 基頻
            </h3>
            <p className="text-stone-300 leading-relaxed mb-6 text-sm md:text-base">
              當這個頻率出現時——水趨向最高對稱結構、天然植物素材的分子振盪達到最低熵狀態、人體自律神經自然趨向安全與連結狀態、筋膜系統從高張力防禦轉為低張力流動、不同地理環境下的實驗結果保持一致。
            </p>
            <blockquote className="border-l-2 border-amber-500/50 pl-4 text-stone-400 italic text-sm">
              {L0.quote}
            </blockquote>
          </div>

          {/* 五大核心特徵 */}
          <h3 className="font-serif text-xl text-white mb-6">
            MUNI 基頻的五大核心特徵
          </h3>
          <div className="grid md:grid-cols-5 gap-3 mb-8">
            {L0.traits.map((trait: any, i: number) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center"
              >
                <p className="text-amber-400 font-serif font-bold text-sm mb-2">
                  {trait.name}
                </p>
                <p className="text-stone-500 text-xs leading-relaxed">
                  {trait.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-stone-500 text-sm text-center">
            五項特徵缺一不可。MUNI
            基頻是目前驗證到的、唯一同時滿足全部五項特徵的頻率。
          </p>
        </div>
      </section>

      {/* ─── 第二層：泛音展開 ─── */}
      <section
        id="layer-2"
        className="py-24 px-4 border-t border-white/5 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-emerald-400">◎</span>
            <div>
              <p className="text-xs text-emerald-400/70 tracking-[0.2em] uppercase font-mono">
                Layer 02
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                {L1.title}
              </h2>
              <p className="text-stone-400 mt-1">{L1.subtitle}</p>
            </div>
          </div>

          <p className="text-stone-300 leading-relaxed mb-10 max-w-3xl text-sm md:text-base">
            {L1.description}
          </p>

          {/* 三大特性 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {L1.properties.map((prop: any, i: number) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/15 to-emerald-800/5 border border-emerald-600/15"
              >
                <p className="text-emerald-400 font-serif font-bold mb-3">
                  {prop.name}
                </p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 多尺度共振光譜 */}
          <h3 className="font-serif text-xl text-white mb-6">
            從宏觀到微觀的共振光譜
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-emerald-400/80 font-medium">
                    尺度層級
                  </th>
                  <th className="text-left py-3 px-4 text-emerald-400/80 font-medium">
                    對應系統
                  </th>
                  <th className="text-left py-3 px-4 text-emerald-400/80 font-medium">
                    泛音作用區間
                  </th>
                </tr>
              </thead>
              <tbody>
                {L1.scales.map((s: any, i: number) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      {s.level}
                    </td>
                    <td className="py-3 px-4 text-stone-400">{s.system}</td>
                    <td className="py-3 px-4 text-stone-400">{s.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 聲流學 */}
          <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/5">
            <h4 className="font-serif text-lg text-white mb-4">
              聲流學（Cymatics）的視覺印證
            </h4>
            <p className="text-stone-400 leading-relaxed text-sm md:text-base">
              當不同頻率通過水或細沙時，物質會自組織成幾何圖案。頻率越高，圖案越複雜——但只要頻率之間保持泛音關係，每一層複雜圖案都嵌套在前一層的結構之中，如同碎形（fractal）的無限展開。人體含水量在
              60–90%
              之間。當泛音序列通過人體時，體內的水正在經歷同樣的幾何重組——從分子層級開始，向上組織成更和諧的結構。
            </p>
          </div>

          <blockquote className="border-l-2 border-emerald-500/50 pl-4 text-stone-400 italic mt-8 text-sm">
            {L1.quote}
          </blockquote>
        </div>
      </section>

      {/* ─── 第三層：多頻疊加協同 ─── */}
      <section
        id="layer-3"
        className="py-24 px-4 border-t border-white/5 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-violet-400">◈</span>
            <div>
              <p className="text-xs text-violet-400/70 tracking-[0.2em] uppercase font-mono">
                Layer 03
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                {L2.title}
              </h2>
              <p className="text-stone-400 mt-1">{L2.subtitle}</p>
            </div>
          </div>

          <p className="text-stone-300 leading-relaxed mb-10 max-w-3xl text-sm md:text-base">
            {L2.description}
          </p>

          {/* 對比表格 */}
          <h3 className="font-serif text-xl text-white mb-6">
            協同的行為表現
          </h3>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-violet-400/80 font-medium">
                    觀察維度
                  </th>
                  <th className="text-left py-3 px-4 text-stone-500 font-medium">
                    單頻/雙頻環境
                  </th>
                  <th className="text-left py-3 px-4 text-violet-400/80 font-medium">
                    MUNI 多頻協同
                  </th>
                </tr>
              </thead>
              <tbody>
                {L2.comparison.map((c: any, i: number) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      {c.dimension}
                    </td>
                    <td className="py-3 px-4 text-stone-500">{c.single}</td>
                    <td className="py-3 px-4 text-stone-300">{c.muni}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 協同本質 */}
          <div className="bg-gradient-to-br from-violet-900/15 to-violet-800/5 rounded-2xl p-8 border border-violet-600/15 mb-8">
            <h4 className="font-serif text-lg text-violet-300 mb-4">
              協同的本質：關係設計
            </h4>
            <p className="text-stone-400 leading-relaxed text-sm md:text-base mb-4">
              「疊加」是物理行為，任何人都可以同時輸出多個頻率。「協同」是關係設計——每一個頻率不僅自身有效，還必須在與其他頻率共存時強化彼此而非干涉彼此。
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-lg bg-white/[0.03]">
                <p className="text-stone-300">
                  頻率之間不產生破壞性干涉
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03]">
                <p className="text-stone-300">
                  每個頻率有明確的功能角色
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03]">
                <p className="text-stone-300">
                  整體穩定性高於單一頻率
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03]">
                <p className="text-stone-300">
                  受擾動時能自我修正回協同態
                </p>
              </div>
            </div>
          </div>

          <blockquote className="border-l-2 border-violet-500/50 pl-4 text-stone-400 italic text-sm">
            {L2.quote}
          </blockquote>
        </div>
      </section>

      {/* ─── 第四層：神經系統通道 ─── */}
      <section
        id="layer-4"
        className="py-24 px-4 border-t border-white/5 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-cyan-400">◇</span>
            <div>
              <p className="text-xs text-cyan-400/70 tracking-[0.2em] uppercase font-mono">
                Layer 04
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                {L3.title}
              </h2>
              <p className="text-stone-400 mt-1">{L3.subtitle}</p>
            </div>
          </div>

          <p className="text-stone-300 leading-relaxed mb-10 max-w-3xl text-sm md:text-base">
            {L3.description}
          </p>

          {/* 三條通道 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {L3.channels.map((ch: any, i: number) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/15 to-cyan-800/5 border border-cyan-600/15"
              >
                <div className="text-3xl mb-3">{ch.icon}</div>
                <h4 className="font-serif text-lg text-white mb-1">
                  {ch.name}
                </h4>
                <p className="text-cyan-400/70 text-xs mb-4">{ch.subtitle}</p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {ch.detail}
                </p>
              </div>
            ))}
          </div>

          {/* 三條通道交匯 */}
          <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/5 text-center">
            <h4 className="font-serif text-lg text-white mb-4">
              三條通道的交匯
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
              <div className="text-center">
                <p className="text-cyan-400 text-sm font-medium">嗅覺通道</p>
                <p className="text-stone-500 text-xs mt-1">
                  頻率直送情緒中樞
                </p>
              </div>
              <span className="text-stone-600 hidden md:block">×</span>
              <div className="text-center">
                <p className="text-cyan-400 text-sm font-medium">迷走神經</p>
                <p className="text-stone-500 text-xs mt-1">
                  內臟層面調節平衡
                </p>
              </div>
              <span className="text-stone-600 hidden md:block">×</span>
              <div className="text-center">
                <p className="text-cyan-400 text-sm font-medium">筋膜網絡</p>
                <p className="text-stone-500 text-xs mt-1">
                  結構層面重分配張力
                </p>
              </div>
            </div>
            <blockquote className="text-stone-400 italic text-sm max-w-xl mx-auto">
              {L3.quote}
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── 第五層：物質共振載體 ─── */}
      <section
        id="layer-5"
        className="py-24 px-4 border-t border-white/5 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-rose-400">◆</span>
            <div>
              <p className="text-xs text-rose-400/70 tracking-[0.2em] uppercase font-mono">
                Layer 05
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                {L4.title}
              </h2>
              <p className="text-stone-400 mt-1">{L4.subtitle}</p>
            </div>
          </div>

          <p className="text-stone-300 leading-relaxed mb-10 max-w-3xl text-sm md:text-base">
            {L4.description}
          </p>

          {/* 產品共振矩陣 */}
          <h3 className="font-serif text-xl text-white mb-6">
            多維度共振矩陣
          </h3>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-rose-400/80 font-medium">
                    作用路徑
                  </th>
                  <th className="text-left py-3 px-4 text-rose-400/80 font-medium">
                    產品載體
                  </th>
                  <th className="text-left py-3 px-4 text-rose-400/80 font-medium">
                    共振維度
                  </th>
                </tr>
              </thead>
              <tbody>
                {L4.matrix.map((m: any, i: number) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 px-4 text-white font-medium">
                      {m.path}
                    </td>
                    <td className="py-3 px-4 text-stone-300">{m.products}</td>
                    <td className="py-3 px-4 text-stone-400">{m.dimension}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 產品系統簡介 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 className="font-serif text-base text-rose-300 mb-3">
                嗅覺與外用系統
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                牟尼香精油攜帶 40 種花精頻率的銘印，MUNI Attar
                以古法蒸餾完整捕獲花朵的振動模式，大馬士革玫瑰精露同時攜帶芳香分子與水的頻率記憶。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 className="font-serif text-base text-rose-300 mb-3">
                飲食與內在滋養系統
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                韓國紅蔘、義大利早摘橄欖油、日本有機綠茶、精品巧克力——每種天然食物的分子振盪模式與
                MUNI 基頻具備天然的和諧共振關係。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 className="font-serif text-base text-rose-300 mb-3">
                經絡與物理介入系統
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                Somaniks
                日本針灸貼片在物理層面啟動經絡的振動傳導，與頻率系統形成「由外而內」的雙向共振。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 className="font-serif text-base text-rose-300 mb-3">
                意識覺察系統
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                40 種花精頻率 + 牌卡 +
                牟尼圖——牌卡系統是一個「意識調頻介面」，透過圖像與文字引導，讓注意力進入特定頻率狀態。
              </p>
            </div>
          </div>

          <blockquote className="border-l-2 border-rose-500/50 pl-4 text-stone-400 italic text-sm">
            {L4.quote}
          </blockquote>
        </div>
      </section>

      {/* ─── 第六層：意識維度 ─── */}
      <section
        id="layer-6"
        className="py-24 px-4 border-t border-white/5 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-yellow-400">✦</span>
            <div>
              <p className="text-xs text-yellow-400/70 tracking-[0.2em] uppercase font-mono">
                Layer 06
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                {L5.title}
              </h2>
              <p className="text-stone-400 mt-1">{L5.subtitle}</p>
            </div>
          </div>

          <p className="font-serif text-lg md:text-xl text-stone-300 leading-relaxed mb-10 italic">
            「{L5.description}」
          </p>

          {/* 三個傳統視角 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {L5.perspectives.map((p: any, i: number) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/15 to-amber-800/5 border border-yellow-600/15"
              >
                <p className="text-yellow-400 font-serif font-bold mb-3">
                  {p.tradition}
                </p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {p.insight}
                </p>
              </div>
            ))}
          </div>

          {/* 四個層面的統一 */}
          <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/5 mb-8">
            <h4 className="font-serif text-lg text-white mb-6 text-center">
              同一個共振場的四種表達
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {L5.levels.map((l: any, i: number) => (
                <div key={i} className="text-center p-4">
                  <p className="text-yellow-400/80 text-xs tracking-wider uppercase mb-2">
                    {l.plane}
                  </p>
                  <p className="text-white font-serif">{l.expression}</p>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="border-l-2 border-yellow-500/50 pl-4 text-stone-400 italic text-sm">
            {L5.quote}
          </blockquote>
        </div>
      </section>

      {/* ─── 六層總覽 ─── */}
      <section className="py-24 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-amber-950/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-amber-400/70 tracking-[0.3em] text-xs uppercase mb-4">
            Overview
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-white mb-12">
            六層總覽
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-amber-500/20">
                  <th className="text-left py-3 px-4 text-amber-400/80 font-medium w-16">
                    層級
                  </th>
                  <th className="text-left py-3 px-4 text-amber-400/80 font-medium">
                    名稱
                  </th>
                  <th className="text-left py-3 px-4 text-amber-400/80 font-medium">
                    核心命題
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    name: "MUNI 基頻",
                    core: "萬物共振的原點——從實驗中找到的穩態吸引頻率",
                  },
                  {
                    id: 2,
                    name: "泛音展開",
                    core: "從宏觀場域到微觀分子，一組泛音覆蓋所有尺度",
                  },
                  {
                    id: 3,
                    name: "多頻疊加協同",
                    core: "頻率之間的關係設計，讓振動從獨奏變成合唱",
                  },
                  {
                    id: 4,
                    name: "神經系統通道",
                    core: "迷走神經 × 筋膜網絡 × 嗅覺神經——三條頻率高速公路",
                  },
                  {
                    id: 5,
                    name: "物質共振載體",
                    core: "每一件 MUNI 產品都攜帶多頻協同的共振模式",
                  },
                  {
                    id: 6,
                    name: "意識維度",
                    core: "物質與意識是同一共振場的不同表達",
                  },
                ].map((row) => (
                  <tr key={row.id} className="border-b border-white/5">
                    <td className="py-3 px-4 text-amber-400 font-mono font-bold">
                      0{row.id}
                    </td>
                    <td className="py-3 px-4 text-white font-serif font-medium">
                      {row.name}
                    </td>
                    <td className="py-3 px-4 text-stone-400">{row.core}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 祝福區塊 */}
          <div className="relative my-20 py-16 px-6 md:px-12 rounded-2xl bg-gradient-to-br from-amber-950/20 via-[#15201c] to-amber-950/10 border border-amber-600/15 overflow-hidden">
            {/* 背景裝飾 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-amber-400/70 tracking-[0.3em] text-xs uppercase mb-4">
                Frequency × Blessing
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">
                頻率與祝福的合一
              </h3>
              <p className="text-stone-400 leading-relaxed mb-6 text-sm md:text-base">
                MUNI Frequency Resonance™ 不只是一套頻率技術——
                <br className="hidden md:block" />
                它是帶著「讓萬物回到和諧」的意願，將頻率注入物質的完整過程。
              </p>
              <p className="text-stone-400 leading-relaxed mb-8 text-sm md:text-base">
                每一件 MUNI 產品在接受頻率共振的同時，也接受了一份祝福——
                <br className="hidden md:block" />
                這份祝福不是儀式性的語言，而是實實在在地將「和諧」的意圖
                <br className="hidden md:block" />
                透過頻率的載體，傳遞到每一個分子、每一個細胞。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/[0.03] rounded-xl p-5 border border-white/5">
                  <p className="text-amber-400 font-serif text-lg mb-2">頻率</p>
                  <p className="text-stone-500 text-sm">是方法、是工具、是科學可驗證的物理現象。它讓物質的分子排列趨向穩定，讓神經系統回到平衡。</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-5 border border-white/5">
                  <p className="text-amber-400 font-serif text-lg mb-2">祝福</p>
                  <p className="text-stone-500 text-sm">是心意、是意願、是「讓萬物回到和諧」的真誠期許。它賦予頻率以方向，讓技術不只是機械的操作。</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-5 border border-amber-600/20">
                  <p className="text-amber-400 font-serif text-lg mb-2">合一</p>
                  <p className="text-stone-500 text-sm">當頻率與祝福合一，產品不再只是物質——它成為一個帶著意圖的共振載體，安靜地等待與你相遇。</p>
                </div>
              </div>
              <p className="font-serif text-lg md:text-xl text-amber-300/80 italic leading-relaxed">
                「頻率是方法，祝福是心意。兩者合一，才是 MUNI 的完整表達。」
              </p>
            </div>
          </div>

          {/* 結語 */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-4">
              萬物本有其頻率。
              <br />
              MUNI 的工作，是帶著祝福，讓它們重新和諧。
            </p>
            <p className="text-stone-500 text-sm mb-2">
              古人用「氣」描述它，用「道」指向它，用「寂靜」體驗它。
            </p>
            <p className="text-stone-500 text-sm">
              MUNI
              用頻率測量它，用泛音展開它，用祝福完整它。
            </p>
            <p className="font-serif text-amber-400/80 mt-6 italic">
              不同的語言，同一個真實。
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-950/10 to-[#0f1a16]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            體驗 MUNI 頻率共振
          </h2>
          <p className="text-stone-400 mb-8 text-sm md:text-base">
            告訴 MUNI 療癒顧問你現在的狀態，
            <br className="md:hidden" />
            AI 會為你推薦最適合的頻率共振方案。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3 font-medium transition-all shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              className="inline-flex items-center gap-2 text-stone-400 hover:text-white border border-stone-700 hover:border-stone-500 rounded-full px-8 py-3 font-medium transition-all"
            >
              探索療癒系統 →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-4 bg-[#0f1a16] text-white/50 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg text-white/70 mb-2">MUNI 牟尼</p>
          <p className="text-sm">在寂靜中，承接你的答案。</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white/80 transition-colors">
              首頁
            </Link>
            <Link
              href="/systems"
              className="hover:text-white/80 transition-colors"
            >
              療癒系統
            </Link>
            <Link
              href="/wine"
              className="hover:text-white/80 transition-colors"
            >
              葡萄酒療癒
            </Link>
            <Link
              href="/essential-oil"
              className="hover:text-white/80 transition-colors"
            >
              聖杯精油
            </Link>
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              療癒顧問
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
