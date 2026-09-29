import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FrequencyBadge from "@/components/FrequencyBadge";
import { isLocale, localeHref, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

const SYSTEMS = [
  {
    id: "flower-essence",
    title: "巴哈花精",
    subtitle: "情緒的自然處方",
    description:
      "源自英國巴哈醫師的 38 種花精，透過植物頻率共振，溫柔地平衡情緒狀態。每一種花精對應一種情緒模式，幫助你從恐懼、焦慮、憤怒中回到內在的寧靜。",
    href: "/flowers",
    icon: "🌸",
    color: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200",
    status: "available",
  },
  {
    id: "essential-oil",
    title: "MUNI 牟尼香",
    subtitle: "嗅覺的療癒入口",
    description:
      "以印度千年 Attar 蒸餾工藝與 MUNI Frequency Resonance™ 技術融合，將沈香、玫瑰、檀香、岩蘭草、綿花籽、小萳香六大天然植物精華濃縮於一瓶。透過嗅覺直達邊緣系統，啟動身體的自我修復機制。",
    href: "/essential-oil",
    icon: "🫧",
    color: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-200",
    status: "available",
  },
  {
    id: "acupuncture",
    title: "董氏心氣神針",
    subtitle: "經絡的精準調理",
    description:
      "傳承自董氏奇穴的心氣神針法，以獨特的穴位系統精準調理氣血。搭配 MUNI 精油與日本針灸貼，在家即可進行穴位保健。",
    href: "/acupuncture",
    icon: "📍",
    color: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-200",
    status: "available",
  },
  {
    id: "fascia-point",
    title: "Fascia Point 筋膜貼 · MUNI Edition",
    subtitle: "皮膚接觸 × 本體感覺 × 身體覺察",
    description:
      "貼在皮膚上的筋膜貼，以微錐系統喚起皮膚與筋膜的本體感覺，作為身體覺察的入口；技術結構在 Dr. Robert Schleip 的筋膜研究與科學指導下建立。MUNI Edition 加入牟尼共振技術，搭配牟尼香與經絡觀察室，聞、貼、看、動一起使用。",
    href: "/fascia-point",
    icon: "🩹",
    color: "from-sky-50 to-blue-50",
    borderColor: "border-sky-200",
    status: "available",
  },
  {
    id: "ginseng",
    title: "MUNI × 韓國頂級人蔘",
    subtitle: "千年本草智慧 × 共振頻率",
    description:
      "嚴選韓國六年根紅參，結合沉香、鹿茸等珍貴原料。透過 MUNI Frequency Resonance™ 六層共振校準，讓人蔘皂苷的能量頻率與人體細胞達到最深層的諧振。三款嚴選製品，從溫補元氣到美容養顏。",
    href: "/ginseng",
    icon: "🌿",
    color: "from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    status: "available",
  },
  {
    id: "olive-oil",
    title: "MUNI × Fonte di Foiano 橄欖油",
    subtitle: "義大利早摘初榨橄欖油 × 頻率共振",
    description:
      "攜手義大利 Bolgheri 產區的 Fonte di Foiano 莊園，以早摘初榨工藝鎖住橄欖最鮮活的多酚與生命能量。Flos Olei 99/100 全球最高評分，家族三代傳承的百年橄欖園。四款嚴選橄欖油，從旗艦 Grand Cru 到日常 Toscano PGI。",
    href: "/olive-oil",
    icon: "🫒",
    color: "from-lime-50 to-green-50",
    borderColor: "border-lime-200",
    status: "available",
  },
  {
    id: "green-tea",
    title: "MUNI × 日本有機綠茶",
    subtitle: "百年有機茶園 × 頻率共振",
    description:
      "攜手日本百年有機茶園，嚴選宇治抹茶、鹿兒島玉露、煎茶與焙茶四款頂級有機綠茶。自 1858 年種茶至今超過 165 年，一年一採，立春後第 88 天春收，手工採摘、6 小時內蒸青完成。橫跨日本、美國、歐盟的完整有機認證。",
    href: "/green-tea",
    icon: "🍵",
    color: "from-teal-50 to-emerald-50",
    borderColor: "border-teal-200",
    status: "available",
  },
  {
    id: "chocolate",
    title: "MUNI × CECILIA 巧克力",
    subtitle: "世界頂級手工精品巧克力 × 頻率療癒",
    description:
      "MUNI 攜手世界第一位女性 Maître Chocolatier Cecilia Rabassi，以托斯卡尼雪花石工藝與頻率共振，打造世界最好的手工精品巧克力。",
    href: "/chocolate",
    icon: "🍫",
    color: "from-amber-50 to-stone-50",
    borderColor: "border-amber-200",
    status: "available",
  },
  {
    id: "wine",
    title: "MUNI × Kellerei Eisacktal 葡萄酒",
    subtitle: "阿爾卑斯山地葡萄酒 × 療癒儀式",
    description:
      "攜手南蒂羅爾 Kellerei Eisacktal 酒莊，以花崗岩與白雲石孕育的山地葡萄酒，透過品飲儀式連結大地的礦物能量。9 款精選酒款，從旗艦限量到經典日常。",
    href: "/wine",
    icon: "🍷",
    color: "from-purple-50 to-indigo-50",
    borderColor: "border-purple-200",
    status: "available",
  },
];

const LAYERS = [
  {
    name: "身體層",
    description: "透過精油、穴位、針灸貼與飲食，調理身體的氣血與能量",
    systems: ["精油", "董氏穴位", "針灸貼", "人蔘", "橄欖油"],
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    name: "情緒層",
    description: "透過花精頻率與芳香療法，平衡情緒與心理狀態",
    systems: ["花精", "精油", "巧克力", "葡萄酒"],
    color: "bg-rose-100 text-rose-800",
  },
  {
    name: "儀式層",
    description: "將療癒融入日常，建立穩定的身心安定節奏",
    systems: ["綠茶儀式", "冥想", "呼吸覺察"],
    color: "bg-amber-100 text-amber-800",
  },
];

const SYSTEMS_EN: Record<string, { title: string; subtitle: string; description: string }> = {
  "flower-essence": {
    title: "Bach flower essences",
    subtitle: "A natural prescription for emotion",
    description:
      "The 38 essences developed by Dr Bach in England work through the resonance of plant frequencies to settle emotional states gently. Each essence answers one emotional pattern, helping you return from fear, anxiety or anger to an inner quiet.",
  },
  "essential-oil": {
    title: "MUNI Scent",
    subtitle: "The doorway of smell",
    description:
      "India's thousand-year attar distillation meets MUNI Frequency Resonance™, concentrating six natural plant essences — agarwood, rose, sandalwood, vetiver, cottonseed and cumin — into a single bottle. Smell reaches the limbic system directly and wakes the body's own repair.",
  },
  acupuncture: {
    title: "Tung's heart-qi-spirit needling",
    subtitle: "Precise work along the channels",
    description:
      "The heart-qi-spirit method inherited from Master Tung's extraordinary points regulates qi and blood through a distinctive point system. Paired with MUNI oil and Japanese acupuncture patches, you can care for the points at home.",
  },
  "fascia-point": {
    title: "Fascia Point patch · MUNI Edition",
    subtitle: "Skin contact × proprioception × body awareness",
    description:
      "A patch worn on the skin. Its microcone system wakes the proprioceptive sense of skin and fascia as a doorway into body awareness; the technical structure was built under the fascia research and scientific direction of Dr. Robert Schleip. The MUNI Edition adds MUNI resonance technology and pairs with MUNI Scent and the Meridian Observatory: smell, touch, see, move.",
  },
  ginseng: {
    title: "MUNI × premium Korean ginseng",
    subtitle: "Millennia of herbal wisdom × resonant frequency",
    description:
      "Six-year Korean red ginseng, selected and combined with agarwood, deer antler and other rare materials. Six layers of MUNI Frequency Resonance™ calibration bring the energetic frequency of the ginsenosides into deep resonance with the body's cells. Three preparations, from warming vitality to skin and beauty.",
  },
  "olive-oil": {
    title: "MUNI × Fonte di Foiano olive oil",
    subtitle: "Italian early-harvest extra virgin oil × frequency resonance",
    description:
      "In partnership with the Fonte di Foiano estate in Italy's Bolgheri region, early harvesting and cold pressing lock in the olives' liveliest polyphenols. Flos Olei 99/100 — the highest score in the world — from a century-old grove held by three generations of one family. Four oils, from the flagship Grand Cru to everyday Toscano PGI.",
  },
  "green-tea": {
    title: "MUNI × Japanese organic green tea",
    subtitle: "A century-old organic tea garden × frequency resonance",
    description:
      "With a Japanese organic tea garden of more than a century: Uji matcha, Kagoshima gyokuro, sencha and hojicha. Tea has grown here since 1858 — over 165 years — harvested once a year on the 88th day after the start of spring, picked by hand and steamed within six hours. Fully certified organic in Japan, the United States and the EU.",
  },
  chocolate: {
    title: "MUNI × CECILIA chocolate",
    subtitle: "World-class artisan chocolate × frequency healing",
    description:
      "MUNI works with Cecilia Rabassi, the world's first female Maître Chocolatier, combining Tuscan alabaster craft with frequency resonance to make the finest artisan chocolate there is.",
  },
  wine: {
    title: "MUNI × Kellerei Eisacktal wine",
    subtitle: "Alpine mountain wine × a ritual of care",
    description:
      "With the Kellerei Eisacktal winery in South Tyrol, mountain wines raised on granite and dolomite connect you to the mineral energy of the earth through the ritual of tasting. Nine selected wines, from limited flagships to classic everyday bottles.",
  },
};

const LAYERS_EN = [
  {
    name: "The body",
    description:
      "Oils, points, acupuncture patches and food work with the qi, blood and energy of the body",
    systems: ["Oils", "Tung's points", "Patches", "Ginseng", "Olive oil"],
  },
  {
    name: "Emotion",
    description:
      "Flower essence frequencies and aromatics settle emotional and psychological states",
    systems: ["Essences", "Oils", "Chocolate", "Wine"],
  },
  {
    name: "Ritual",
    description:
      "Healing folded into daily life, building a steady rhythm of settledness",
    systems: ["The tea ritual", "Meditation", "Breath awareness"],
  },
];

const PAGE_COPY: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  layersTitle: string;
  systemsTitle: string;
  learnMore: string;
  comingSoon: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}> = {
  zh: {
    metaTitle: "MUNI 療癒生態系統 | 完整知識架構",
    metaDescription:
      "探索 MUNI 的完整療癒生態——花精、精油、董氏心氣神針、日本針灸貼、人蔘、橄欖油、日本綠茶、巧克力、葡萄酒，九大系統守護你的身心靈平衡。",
    eyebrow: "MUNI HEALING ECOSYSTEM",
    title: "MUNI 療癒生態系統",
    intro:
      "MUNI 不只是花精品牌，而是一套完整的「身心靈整體生活儀式系統」。\n九大系統從身體、情緒到日常儀式，層層守護你的內在平衡。",
    layersTitle: "三層療癒架構",
    systemsTitle: "九大療癒系統",
    learnMore: "深入了解",
    comingSoon: "即將推出",
    ctaTitle: "不確定哪個系統適合你？",
    ctaBody:
      "每個人的身心狀態都不同，讓 MUNI 療癒顧問根據你此刻的感受，\n從九大系統中為你挑選最適合的療癒組合。",
    ctaButton: "問問 MUNI 療癒顧問",
  },
  en: {
    metaTitle: "The MUNI healing ecosystem | The whole picture",
    metaDescription:
      "Explore MUNI's full healing ecosystem — flower essences, essential oils, Tung's heart-qi-spirit needling, Japanese acupuncture patches, ginseng, olive oil, Japanese green tea, chocolate and wine. Nine systems holding your balance.",
    eyebrow: "MUNI HEALING ECOSYSTEM",
    title: "The MUNI healing ecosystem",
    intro:
      "MUNI isn't only a flower essence brand; it's a complete system of daily ritual for body, feeling and spirit.\nNine systems hold your inner balance, from the body through emotion to everyday ritual.",
    layersTitle: "Three layers of healing",
    systemsTitle: "The nine systems",
    learnMore: "Read more",
    comingSoon: "Coming soon",
    ctaTitle: "Not sure which system fits you?",
    ctaBody:
      "Every person's state is different. Let the MUNI Healing Consultant read how you are right now\nand choose the combination from these nine systems that suits you best.",
    ctaButton: "Ask the MUNI Healing Consultant",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = PAGE_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/systems",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function SystemsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = PAGE_COPY[locale];
  const systems = SYSTEMS.map((s) =>
    locale === "en" && SYSTEMS_EN[s.id] ? { ...s, ...SYSTEMS_EN[s.id] } : s,
  );
  const layers = LAYERS.map((l, i) =>
    locale === "en" ? { ...l, ...LAYERS_EN[i] } : l,
  );

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
            {copy.eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#4a5548] mb-6 leading-tight">
            {copy.title}
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
            {copy.intro}
          </p>
        </div>
      </section>

      {/* 三層架構圖 */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] text-center mb-10">
            {copy.layersTitle}
          </h2>
          <div className="space-y-4">
            {layers.map((layer) => (
              <div
                key={layer.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${layer.color} whitespace-nowrap`}
                  >
                    {layer.name}
                  </span>
                  <p className="text-stone-600 text-sm flex-1">
                    {layer.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {layer.systems.map((sys) => (
                    <span
                      key={sys}
                      className="px-3 py-1 bg-stone-50 text-stone-600 rounded-full text-xs border border-stone-200"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 八大系統卡片 */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] text-center mb-10">
            {copy.systemsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system) => (
              <div
                key={system.id}
                className={`relative bg-gradient-to-br ${system.color} rounded-2xl p-6 border ${system.borderColor} transition-all duration-300 ${
                  system.status === "available"
                    ? "hover:shadow-lg hover:-translate-y-1"
                    : "opacity-75"
                }`}
              >
                {system.status === "coming" && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 bg-stone-200 text-stone-500 rounded-full text-xs">
                    {copy.comingSoon}
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{system.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-1">
                      {system.title}
                    </h3>
                    <p className="text-sm text-[#9A7B4F] mb-3">
                      {system.subtitle}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {system.description}
                    </p>
                    {system.status === "available" ? (
                      <Link
                        href={localeHref(locale, system.href)}
                        className="inline-flex items-center gap-1.5 text-[#4a5548] hover:text-[#3a4538] text-sm font-medium transition-colors"
                      >
                        {copy.learnMore}
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA：導向療癒顧問 */}
      <section className="py-20 px-4 bg-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6">
            {copy.ctaTitle}
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 whitespace-pre-line">
            {copy.ctaBody}
          </p>
          <a
            href="https://ai.munione.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
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
            {copy.ctaButton}
          </a>
        </div>
      </section>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />

      <Footer />
    </div>
  );
}
