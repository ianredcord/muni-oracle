import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import FrequencyBadge from "@/components/FrequencyBadge";

export const metadata: Metadata = {
  title: "牟尼香・聖杯版 | MUNI 核心支持",
  description:
    "以阿曼皇家綠乳香為神聖容器，融合六種珍稀精油與東印度檀香基底，讓身體從第一息開始，就浸泡在安全的頻率中。",
};

const INGREDIENTS = [
  {
    num: "01",
    name: "阿曼皇家綠乳香",
    origin: "阿曼・野生採集，神聖樹脂之王",
    role: "神聖容器・全脈輪調和",
    color: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-200",
    accent: "text-amber-700",
  },
  {
    num: "02",
    name: "Mitti Attar",
    origin: "印度 Kannauj・傳統蒸餾，東印度檀香基底",
    role: "大地之母・深層接地",
    color: "from-orange-50 to-amber-50",
    borderColor: "border-orange-200",
    accent: "text-orange-700",
  },
  {
    num: "03",
    name: "沉香 Attar",
    origin: "東印度檀香基底，古老智慧之木",
    role: "深層意識・天地橋樑",
    color: "from-stone-100 to-stone-50",
    borderColor: "border-stone-300",
    accent: "text-stone-700",
  },
  {
    num: "04",
    name: "大馬士革玫瑰 Attar",
    origin: "東印度檀香基底，花中之后",
    role: "心輪柔觸・情感療癒",
    color: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200",
    accent: "text-rose-700",
  },
  {
    num: "05",
    name: "薰衣草",
    origin: "日本有機栽種",
    role: "眉心橋接・安定守護",
    color: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
    accent: "text-violet-700",
  },
  {
    num: "06",
    name: "佛手柑（FCF 去光敏）",
    origin: "義大利產區",
    role: "頂輪微光・溫柔開啟",
    color: "from-lime-50 to-green-50",
    borderColor: "border-lime-200",
    accent: "text-lime-700",
  },
];

const SCIENCE_SECTIONS = [
  {
    title: "一、嗅覺與情緒的直接通路",
    content:
      "嗅覺是唯一不經過理性分析、直接進入情緒與記憶中心的感官。嗅球中的多巴胺神經元透過 D1 與 D2 受體調控氣味訊號的處理與傳遞——D1 受體增強氣味偵測靈敏度，D2 受體在嗅神經層進行前突觸抑制，兩者協同運作，構成「先安撫、再開啟」的神經保護機制。",
    sources: [
      {
        text: "Liu S, et al. (2020). Dopaminergic Modulation of Glomerular Circuits in the Mouse Olfactory Bulb. Frontiers in Cellular Neuroscience, 14:172.",
        url: "https://www.frontiersin.org/journals/cellular-neuroscience/articles/10.3389/fncel.2020.00172/full",
      },
    ],
  },
  {
    title: "二、乳香——TRPV3 離子通道與抗焦慮",
    content:
      "乳香樹脂中的 Incensole Acetate（乙醯基乳香醇）能激活大腦中的 TRPV3 離子通道，顯著影響與情緒相關的腦區及神經迴路，產生抗焦慮與抗抑鬱效果。",
    sources: [
      {
        text: "Moussaieff A, et al. (2008). Incensole acetate, an incense component, elicits psychoactivity by activating TRPV3 channels in the brain. The FASEB Journal.",
        url: "https://www.sciencedaily.com/releases/2008/05/080520110415.htm",
      },
      {
        text: "Moussaieff A, et al. (2012). Incensole acetate reduces depressive-like behavior and modulates hippocampal BDNF and CRF expression of submissive animals. Journal of Psychopharmacology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23015543/",
      },
    ],
  },
  {
    title: "三、薰衣草——GABA 受體與芳樟醇的抗焦慮機制",
    content:
      "薰衣草中的主要成分芳樟醇（Linalool）與乙酸芳樟酯（Linalyl Acetate），透過嗅覺路徑啟動 GABA_A 受體的苯二氮平結合位，產生抗焦慮效果，且不影響運動能力（有別於傳統鎮靜藥物）。",
    sources: [
      {
        text: "Harada H, et al. (2018). Linalool Odor-Induced Anxiolytic Effects in Mice. Frontiers in Behavioral Neuroscience, 12:241.",
        url: "https://www.frontiersin.org/journals/behavioral-neuroscience/articles/10.3389/fnbeh.2018.00241/full",
      },
      {
        text: "Malcolm BJ & Tallian K. (2018). Essential oil of lavender in anxiety disorders: Ready for prime time? Mental Health Clinician, 7(4):147-155.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6007527/",
      },
    ],
  },
  {
    title: "四、檀香與薰衣草——副交感神經激活",
    content:
      "2021 年發表於 PLOS ONE 的研究顯示，檀香與薰衣草的複方吸入可有效調節自律神經系統，降低交感神經活性、激活副交感神經，達到壓力舒緩效果。",
    sources: [
      {
        text: "Chen MC, et al. (2021). Effect of aromatherapy on autonomic nervous system regulation with physical exercise intervention. PLOS ONE.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8043395/",
      },
    ],
  },
  {
    title: "五、沉香——鎮靜與 GABA 能系統",
    content:
      "沉香精油及其主要成分的吸入，在動物實驗中顯著降低自發性運動活性，研究者認為其可能透過 GABA 能系統展現鎮靜活性，對神經系統疾病的治療具有潛力。",
    sources: [
      {
        text: "Wang S, et al. (2022). Aromas Influencing the GABAergic System. PMC/PubMed Central.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9026314/",
      },
    ],
  },
  {
    title: "六、多巴胺與恐懼消除",
    content:
      "2025 年 PNAS 發表的最新研究證實，多巴胺活性能雙向控制恐懼消除——透過基底外側杏仁核（BLA）中恐懼神經元與消除神經元的不同活動模式。這為「先安撫杏仁核，再建立安全感」的聖杯版設計提供了最新科學支持。",
    sources: [
      {
        text: "(2025). Dopamine induces fear extinction by activating the reward circuitry. Proceedings of the National Academy of Sciences (PNAS).",
        url: "https://www.pnas.org/doi/10.1073/pnas.2501331122",
      },
    ],
  },
];

const CHAKRAS = [
  { name: "頂輪", ingredient: "佛手柑", color: "bg-violet-100 text-violet-700 border-violet-200" },
  { name: "眉心輪", ingredient: "薰衣草", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  { name: "喉輪", ingredient: "乳香", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { name: "心輪", ingredient: "大馬士革玫瑰", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { name: "太陽神經叢", ingredient: "沉香", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  { name: "臍輪", ingredient: "Mitti Attar", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { name: "海底輪", ingredient: "東印度檀香（基底）", color: "bg-red-100 text-red-700 border-red-200" },
];

export default function EssentialOilPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/systems"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-[#4a5548] transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回療癒系統總覽
          </Link>
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
            MUNI 核心支持
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#4a5548] mb-6 leading-tight">
            牟尼香・聖杯版
          </h1>
          <p className="text-xl md:text-2xl text-[#4a5548] font-serif mb-6 leading-relaxed">
            在神聖的芬芳中，遇見真正的寂靜。
          </p>
          <p className="text-stone-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            以阿曼皇家綠乳香為神聖容器，融合六種珍稀精油與東印度檀香基底，
            <br className="hidden sm:inline" />
            讓身體從第一息開始，就浸泡在安全的頻率中。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#ingredients"
              className="inline-flex items-center gap-2 bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-6 py-3 text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              了解配方
            </a>
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-6 py-3 text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              立即體驗
            </a>
          </div>
        </div>
      </section>

      {/* 聖杯的故事 */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-8 text-center">
            聖杯的故事
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-100">
            <div className="space-y-5 text-stone-600 leading-relaxed text-base md:text-lg">
              <p className="text-[#4a5548] font-medium text-lg md:text-xl">
                為什麼古老的寺廟讓人一踏入就感到平靜？
              </p>
              <p>
                不是透過意志力，而是透過呼吸。
                <br />
                不是說服大腦，而是讓身體記起安全的感覺。
              </p>
              <p>
                <strong className="text-[#4a5548]">牟尼（Muni）</strong>，梵語中意為「寂靜的聖者」。
                <br />
                <strong className="text-[#4a5548]">聖杯</strong>，是承接一切的容器——不是向外追尋，而是向內收攝。
              </p>
              <p>
                牟尼香・聖杯版，是一瓶為當代心靈而生的神聖香氛。
                <br />
                它不要求你改變，而是先讓你回到「可以改變的狀態」。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 六種珍稀精油 */}
      <section id="ingredients" className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-3">
              六種珍稀精油
            </h2>
            <p className="text-stone-500">100% 純天然無添加</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {INGREDIENTS.map((item) => (
              <div
                key={item.num}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 border ${item.borderColor} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-2xl font-serif font-bold ${item.accent} opacity-40`}>
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-1">
                      {item.name}
                    </h3>
                    <p className="text-stone-500 text-sm mb-2">{item.origin}</p>
                    <p className={`text-sm font-medium ${item.accent}`}>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 檀香隱藏中軸 */}
          <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 border border-stone-100 shadow-sm">
            <p className="text-stone-600 leading-relaxed text-center">
              三種 Attar 共享東印度檀香作為蒸餾基底，形成隱藏的靈性中軸——
              <br className="hidden sm:inline" />
              約 <strong className="text-[#4a5548]">23%</strong> 的檀香，在你未察覺時，已經啟動了副交感神經的安定機制。
            </p>
          </div>
        </div>
      </section>

      {/* 為什麼是「聖杯」？ */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4 text-center">
            為什麼是「聖杯」？
          </h2>
          <p className="text-stone-500 text-center mb-12 text-lg">承接，而非追尋</p>
          <p className="text-stone-600 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            牟尼香聖杯版的設計哲學，源自三個古老傳統的交匯：
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F9F7F2] rounded-2xl p-6 border border-stone-100">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <span className="text-amber-700 text-lg">⚗</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-3">
                煉金術的聖杯
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                聖杯是「容器」，承接生命的轉化。乳香 51% 構成的保護場域，讓所有成分在其中安全運作。
              </p>
            </div>

            <div className="bg-[#F9F7F2] rounded-2xl p-6 border border-stone-100">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <span className="text-teal-700 text-lg">☸</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-3">
                藏傳佛教的寂靜
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                「牟尼」意為寂默者，頂層刻意壓低，呼應內收的禪定本質。不是讓你「飛起來」，而是讓你「沉下去、安住」。
              </p>
            </div>

            <div className="bg-[#F9F7F2] rounded-2xl p-6 border border-stone-100">
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mb-4">
                <span className="text-violet-700 text-lg">◎</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-3">
                榮格心理學的個體化
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                聖杯是容器，賢者之石是煉金過程。這瓶精油陪伴你走過黑化、白化、黃化、紅化，走向完整的自己。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 科學原理 */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto pt-16">
          <div className="text-center mb-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-3">
              想了解背後的科學原理？
            </h2>
            <p className="text-stone-400 text-sm italic">
              如果你只想感受，不一定要看這一段。
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {SCIENCE_SECTIONS.map((section, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden"
              >
                <summary className="cursor-pointer px-6 py-5 flex items-center justify-between hover:bg-stone-50/50 transition-colors">
                  <h3 className="font-serif text-base md:text-lg font-bold text-[#4a5548]">
                    {section.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-stone-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  <div className="bg-stone-50 rounded-xl p-4 space-y-2">
                    <p className="text-xs font-medium text-stone-400 tracking-wider uppercase mb-2">
                      研究出處
                    </p>
                    {section.sources.map((source, sIdx) => (
                      <p key={sIdx} className="text-xs text-stone-500 leading-relaxed">
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#4a5548] transition-colors underline underline-offset-2"
                        >
                          {source.text}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 從頂輪到海底輪 */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
            從頂輪到海底輪，完整覆蓋
          </h2>
          <p className="text-stone-500 mb-10">
            每一種成分對應一個能量中心，由上而下形成完整的保護場域。
          </p>

          <div className="flex flex-col items-center gap-3">
            {CHAKRAS.map((chakra, idx) => (
              <div
                key={idx}
                className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border ${chakra.color} text-sm font-medium`}
                style={{ width: `${220 + idx * 20}px`, maxWidth: "100%" }}
              >
                <span className="font-serif">{chakra.name}</span>
                <span className="opacity-40">·</span>
                <span className="opacity-70 text-xs">{chakra.ingredient}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6">
            讓身體先回到安全的頻率
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            不需要改變什麼，只需要深呼吸一次。
            <br className="hidden sm:inline" />
            牟尼香・聖杯版，陪你回到可以改變的狀態。
          </p>
          <a
            href="https://ai.munione.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
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
        </div>
      </section>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#4a5548] text-white/70">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg text-white/90 mb-2">MUNI 牟尼</p>
          <p className="text-sm">在寂靜中，承接你的答案。</p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              首頁
            </Link>
            <Link href="/flowers" className="hover:text-white transition-colors">
              花精百科
            </Link>
            <Link href="/systems" className="hover:text-white transition-colors">
              療癒系統
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
