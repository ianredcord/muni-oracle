import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "MUNI × CECILIA | 世界頂級手工精品巧克力 × 頻率療癒",
  description:
    "MUNI 攜手世界第一位女性 Maître Chocolatier Cecilia Rabassi，以托斯卡尼雪花石工藝與頻率共振，打造世界最好的手工精品巧克力。",
};

const PRODUCTS = [
  {
    name: "Myway",
    description: "80% 特濃黑巧克力",
    detail: "堅定走自己的路，如同 Cecilia 三十年的巧克力之旅。高濃度可可帶來深沉的風味層次，適合喜歡純粹、有個性的你。",
    image: "https://ceciliarabassi.com/wp-content/uploads/2022/02/Myway_front.jpg",
    category: "tablets",
  },
  {
    name: "Weekend",
    description: "70% 特濃黑巧克力",
    detail: "週末的放鬆時刻，讓純粹的可可帶你回到內在的寧靜。恰到好處的甜苦平衡，是日常犒賞自己的最佳選擇。",
    image: "https://ceciliarabassi.com/wp-content/uploads/2022/02/Weekend_front.jpg",
    category: "tablets",
  },
  {
    name: "Bluemoon",
    description: "牛奶巧克力",
    detail: "如月光般柔和溫暖，適合需要被溫柔擁抱的時刻。絲滑的牛奶與可可交融，帶來安定與幸福的味覺體驗。",
    image: "https://ceciliarabassi.com/wp-content/uploads/2022/02/Bluemoon_front.jpg",
    category: "tablets",
  },
];

const AWARDS = [
  { year: "2006–2016", title: "倫敦巧克力學院 Oscar 獎", detail: "六度獲獎，「世界最佳巧克力」殊榮" },
  { year: "2007", title: "義大利共和國功績勳章", detail: "Made in Italy 最高榮譽大使" },
  { year: "2008", title: "義大利美食學院 Dino Villani 獎", detail: "表彰對義大利傳統美食的卓越貢獻" },
  { year: "2021", title: "倫敦巧克力學院首屆會長獎", detail: "表彰過去 30 年革命可可與巧克力世界的人" },
  { year: "2022", title: "Tavoletta d'Oro 金牌獎", detail: "Icon Peru 85% 獲原產地黑巧克力類別金獎" },
];

export default function ChocolatePage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero — 深色背景，呼應巧克力的深邃 */}
      <section className="relative pt-20 pb-24 px-4 bg-gradient-to-b from-[#1a1210] via-[#2a1f1a] to-[#3a2a20] text-white overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-800 rounded-full blur-[150px]" />
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
                MUNI × CECILIA RABASSI
              </p>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-amber-200">世界最好的</span>
                <br />
                手工精品巧克力
                <br />
                <span className="text-amber-400">× 頻率療癒</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                當世界第一位女性巧克力大師的三十年工藝，
                遇上 MUNI 的頻率療癒哲學——
                每一口巧克力，都是一次與內在的深度對話。
              </p>
            </div>

            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-full blur-2xl" />
              <Image
                src="https://ceciliarabassi.com/wp-content/uploads/2021/10/ceciliatessieri-5591.jpg"
                alt="Cecilia Rabassi — 世界第一位女性 Maître Chocolatier"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* MUNI × CECILIA 合作宣言 */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#3a2a20] to-[#F9F7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
            <p className="text-sm tracking-[0.3em] text-amber-600 mb-6">
              A COLLABORATION OF FREQUENCY & CRAFT
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6 leading-relaxed">
              當頻率遇上工藝
              <br />
              巧克力不再只是甜點
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-left md:text-center">
              <p>
                MUNI 相信，<strong className="text-[#4a5548]">食物攜帶著頻率</strong>。
                從可可豆在陽光下生長的那一刻起，它就承載了大地的能量。
                而 Cecilia Rabassi 三十年來對巧克力的執著——從產地選豆、
                雪花石盆呢護、到手工調溫——正是在守護這份頻率的完整性。
              </p>
              <p>
                MUNI × CECILIA 的合作，不只是品牌聯名，
                而是<strong className="text-[#4a5548]">兩種療癒哲學的共振</strong>：
                Cecilia 用三十年的工藝守護可可的純粹頻率，
                MUNI 用花精與精油的智慧引導這份頻率與你的身心對話。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cecilia Rabassi 品牌故事 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              THE MAÎTRE CHOCOLATIER
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#4a5548] mb-4">
              Cecilia Rabassi
            </h2>
            <p className="text-stone-500 text-lg">
              世界第一位女性 Maître Chocolatier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://ceciliarabassi.com/wp-content/uploads/2021/10/ceciliatessieri-6163.jpg"
                alt="Cecilia Rabassi 在托斯卡尼"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-amber-400 pl-6 py-2">
                <p className="text-stone-600 italic leading-relaxed text-lg">
                  &ldquo;製作巧克力如同舞蹈——需要優雅、嚴謹、紀律，
                  以及不斷嘗試每一個步驟直到找到完美平衡的力量。&rdquo;
                </p>
                <footer className="mt-3 text-sm text-stone-400">— Cecilia Rabassi</footer>
              </blockquote>

              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  近三十年前，Cecilia 從義大利<strong className="text-[#4a5548]">托斯卡尼</strong>出發，
                  遠赴法國、比利時、德國學藝，師從多位巧克力大師。
                  回到義大利後，她創立了享譽全球的 <strong className="text-[#4a5548]">Amedei Tuscany</strong>，
                  成為世界第一位女性 Maître Chocolatier。
                </p>
                <p>
                  如今，她回到原點——一間小型手工工坊，
                  專注於用<strong className="text-[#4a5548]">沃爾泰拉雪花石（Alabaster of Volterra）</strong>
                  呢護可可豆的獨家製程，創造前所未有的感官和諧。
                </p>
                <p>
                  她親自前往馬達加斯加與南美洲的可可種植園選豆，
                  在比薩山丘擁有私人榛果園，
                  從原料到成品，每一個環節都親自把關。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 雪花石的秘密 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              THE SECRET OF ALABASTER
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              雪花石的秘密 × 頻率的守護
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                沃爾泰拉雪花石
              </h3>
              <p className="text-stone-600 leading-relaxed">
                來自托斯卡尼沃爾泰拉的雪花石，是 Cecilia 獨家製程的核心。
                可可豆在雪花石盆中被細心呢護，這種古老的天然礦石
                能保持穩定的溫度與濕度，讓可可的風味分子在最佳狀態下發展，
                創造出獨一無二的<strong className="text-[#4a5548]">感官和諧（Sensory Harmonies）</strong>。
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-rose-50 rounded-2xl p-8 border border-violet-100">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                MUNI 頻率共振
              </h3>
              <p className="text-stone-600 leading-relaxed">
                在 MUNI 的療癒哲學中，高品質的可可富含
                <strong className="text-[#4a5548]">色胺酸</strong>與
                <strong className="text-[#4a5548]">苯乙胺</strong>，
                能自然提升血清素與多巴胺——這是身體自己的「幸福頻率」。
                當 Cecilia 的雪花石工藝守護了可可的完整頻率，
                MUNI 的花精與精油則引導這份頻率與你的情緒共振。
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#2a1f1a] to-[#3a2a20] rounded-2xl p-8 text-center text-white">
            <p className="text-amber-300 text-sm tracking-[0.2em] mb-3">MUNI FREQUENCY RITUAL</p>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl mx-auto">
              在安靜的時刻，滴一滴 MUNI 聖杯精油在手腕，
              深呼吸三次，然後慢慢品嚐一片 Cecilia 的巧克力——
              讓嗅覺與味覺的頻率同時作用，
              這就是 MUNI 的<strong className="text-amber-200">「巧克力冥想儀式」</strong>。
            </p>
          </div>
        </div>
      </section>

      {/* 獲獎紀錄 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              AWARDS & RECOGNITION
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548]">
              國際殊榮
            </h2>
          </div>

          <div className="space-y-4">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 bg-white rounded-xl p-5 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium whitespace-nowrap border border-amber-200">
                  {award.year}
                </span>
                <div className="flex-1">
                  <h3 className="font-medium text-[#4a5548]">{award.title}</h3>
                  <p className="text-sm text-stone-500 mt-0.5">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 產品展示 — 巧克力片 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              CHOCOLATE COLLECTION
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              手工巧克力系列
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              每一片都由 Cecilia 親手調溫、手工包裝，
              從可可豆到成品（Seed to Bar），全程掌控品質。
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {PRODUCTS.map((product, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-b from-stone-50 to-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square bg-stone-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#9A7B4F] mb-2">{product.description}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{product.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* MUNI 巧克力儀式 */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#2a1f1a] to-[#1a1210] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.4em] text-amber-400/80 mb-4">
              MUNI CHOCOLATE RITUAL
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-amber-100 mb-4">
              MUNI 巧克力療癒儀式
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              三個步驟，讓一片巧克力成為一次深度的自我療癒
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "準備",
                icon: "🫧",
                description:
                  "選擇一款 MUNI 聖杯精油，滴在手腕內側。閉上眼睛，深呼吸三次，讓精油的頻率先安定你的神經系統。",
              },
              {
                step: "02",
                title: "品嚐",
                icon: "🍫",
                description:
                  "慢慢打開一片 Cecilia 的巧克力，先聞它的香氣。放入口中，不要咀嚼，讓它在舌尖慢慢融化，感受可可的頻率在口腔中展開。",
              },
              {
                step: "03",
                title: "覺察",
                icon: "🧘",
                description:
                  "在巧克力融化的過程中，觀察自己的身體感受和情緒變化。這個片刻的「停下來」，就是療癒的開始。",
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

      {/* 搭配推薦 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              PAIRING SUGGESTIONS
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              巧克力 × 精油搭配建議
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                chocolate: "Myway（80% 特濃黑巧克力）",
                oil: "聖杯二號 — 定心",
                mood: "需要堅定信念、走自己的路的時刻",
                color: "from-violet-50 to-purple-50",
                border: "border-violet-200",
              },
              {
                chocolate: "Weekend（70% 黑巧克力）",
                oil: "聖杯三號 — 開心",
                mood: "週末的自我犒賞時刻，喚醒內在喜悅",
                color: "from-amber-50 to-yellow-50",
                border: "border-amber-200",
              },
              {
                chocolate: "Bluemoon（牛奶巧克力）",
                oil: "聖杯五號 — 靜心",
                mood: "睡前的安定儀式，讓心回到寧靜",
                color: "from-teal-50 to-emerald-50",
                border: "border-teal-200",
              },
            ].map((pair, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${pair.color} rounded-2xl p-6 border ${pair.border}`}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🍫</span>
                      <span className="font-medium text-[#4a5548]">{pair.chocolate}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🫧</span>
                      <span className="font-medium text-[#4a5548]">{pair.oil}</span>
                    </div>
                    <p className="text-sm text-stone-500 pl-8">{pair.mood}</p>
                  </div>
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
            想知道哪款巧克力最適合你此刻的狀態？
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            告訴 MUNI 療癒顧問你現在的心情，
            <br className="hidden sm:inline" />
            AI 會為你推薦最適合的巧克力 × 精油搭配方案。
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
              className="inline-flex items-center justify-center gap-2 bg-[#2a1f1a] hover:bg-[#1a1210] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#4a5548] text-white/70">
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
