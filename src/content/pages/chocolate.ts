// MUNI × CECILIA 巧克力頁面的中英文文案（/chocolate）
import type { Locale } from "@/i18n/config";

export type ChocolateCopy = {
  metaTitle: string;
  metaDescription: string;
  backToSystems: string;
  eyebrow: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3: string;
  heroBody: string;
  portraitAlt: string;
  collabEyebrow: string;
  collabTitle: string;
  collabP1Before: string;
  collabP1Strong: string;
  collabP1After: string;
  collabP2Before: string;
  collabP2Strong: string;
  collabP2After: string;
  makerEyebrow: string;
  makerName: string;
  makerRole: string;
  tuscanyAlt: string;
  makerQuote: string;
  makerQuoteSource: string;
  makerParagraphs: { before: string; strong?: string; middle?: string; strong2?: string; after?: string }[];
  alabasterEyebrow: string;
  alabasterTitle: string;
  alabasterCardTitle: string;
  alabasterCardBefore: string;
  alabasterCardStrong: string;
  alabasterCardAfter: string;
  resonanceCardTitle: string;
  resonanceCardBefore: string;
  resonanceCardStrong1: string;
  resonanceCardMiddle: string;
  resonanceCardStrong2: string;
  resonanceCardAfter: string;
  ritualLabel: string;
  ritualBefore: string;
  ritualStrong: string;
  ritualAfter: string;
  awardsEyebrow: string;
  awardsTitle: string;
  awards: { year: string; title: string; detail: string }[];
  collectionEyebrow: string;
  collectionTitle: string;
  collectionLead: string;
  products: { name: string; description: string; detail: string }[];
  ritualEyebrow: string;
  ritualTitle: string;
  ritualLead: string;
  rituals: { step: string; title: string; icon: string; description: string }[];
  pairingEyebrow: string;
  pairingTitle: string;
  pairings: { chocolate: string; oil: string; mood: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaConsultant: string;
  ctaSystems: string;
};

const zh: ChocolateCopy = {
  metaTitle: "MUNI × CECILIA | 世界頂級手工精品巧克力 × 頻率療癒",
  metaDescription:
    "MUNI 攜手世界第一位女性 Maître Chocolatier Cecilia Rabassi，以托斯卡尼雪花石工藝與頻率共振，打造世界最好的手工精品巧克力。",
  backToSystems: "返回療癒系統總覽",
  eyebrow: "MUNI × CECILIA RABASSI",
  heroLine1: "世界最好的",
  heroLine2: "手工精品巧克力",
  heroLine3: "× 頻率療癒",
  heroBody:
    "當世界第一位女性巧克力大師的三十年工藝，遇上 MUNI 的頻率療癒哲學——每一口巧克力，都是一次與內在的深度對話。",
  portraitAlt: "Cecilia Rabassi — 世界第一位女性 Maître Chocolatier",
  collabEyebrow: "A COLLABORATION OF FREQUENCY & CRAFT",
  collabTitle: "當頻率遇上工藝\n巧克力不再只是甜點",
  collabP1Before: "MUNI 相信，",
  collabP1Strong: "食物攜帶著頻率",
  collabP1After:
    "。從可可豆在陽光下生長的那一刻起，它就承載了大地的能量。而 Cecilia Rabassi 三十年來對巧克力的執著——從產地選豆、雪花石呵護、到手工調溫——正是在守護這份頻率的完整性。",
  collabP2Before: "MUNI × CECILIA 的合作，不只是品牌聯名，而是",
  collabP2Strong: "兩種療癒哲學的共振",
  collabP2After:
    "：Cecilia 用三十年的工藝守護可可的純粹頻率，MUNI 用花精與精油的智慧引導這份頻率與你的身心對話。",
  makerEyebrow: "THE MAÎTRE CHOCOLATIER",
  makerName: "Cecilia Rabassi",
  makerRole: "世界第一位女性 Maître Chocolatier",
  tuscanyAlt: "Cecilia Rabassi 在托斯卡尼",
  makerQuote:
    "「製作巧克力如同舞蹈——需要優雅、嚴謹、紀律，以及不斷嘗試每一個步驟直到找到完美平衡的力量。」",
  makerQuoteSource: "— Cecilia Rabassi",
  makerParagraphs: [
    {
      before: "近三十年前，Cecilia 從義大利",
      strong: "托斯卡尼",
      middle: "出發，遠赴法國、比利時、德國學藝，師從多位巧克力大師。回到義大利後，她創立了享譽全球的 ",
      strong2: "Amedei Tuscany",
      after: "，成為世界第一位女性 Maître Chocolatier。",
    },
    {
      before: "如今，她回到原點——一間小型手工工坊，專注於用",
      strong: "沃爾泰拉雪花石（Alabaster of Volterra）",
      after: "呵護可可豆的獨家製程，創造前所未有的感官和諧。",
    },
    {
      before:
        "她親自前往馬達加斯加與南美洲的可可種植園選豆，在比薩山丘擁有私人榛果園，從原料到成品，每一個環節都親自把關。",
    },
  ],
  alabasterEyebrow: "THE SECRET OF ALABASTER",
  alabasterTitle: "雪花石的秘密 × 頻率的守護",
  alabasterCardTitle: "沃爾泰拉雪花石",
  alabasterCardBefore:
    "來自托斯卡尼沃爾泰拉的雪花石，是 Cecilia 獨家製程的核心。可可豆在雪花石盆中被細心呵護，這種古老的天然礦石能保持穩定的溫度與濕度，讓可可的風味分子在最佳狀態下發展，創造出獨一無二的",
  alabasterCardStrong: "感官和諧（Sensory Harmonies）",
  alabasterCardAfter: "。",
  resonanceCardTitle: "MUNI 頻率共振",
  resonanceCardBefore: "在 MUNI 的療癒哲學中，高品質的可可富含",
  resonanceCardStrong1: "色胺酸",
  resonanceCardMiddle: "與",
  resonanceCardStrong2: "苯乙胺",
  resonanceCardAfter:
    "，能自然提升血清素與多巴胺——這是身體自己的「幸福頻率」。當 Cecilia 的雪花石工藝守護了可可的完整頻率，MUNI 的花精與精油則引導這份頻率與你的情緒共振。",
  ritualLabel: "MUNI FREQUENCY RITUAL",
  ritualBefore:
    "在安靜的時刻，滴一滴 MUNI 牟尼香在手腕，深呼吸三次，然後慢慢品嘗一片 Cecilia 的巧克力——讓嗅覺與味覺的頻率同時作用，這就是 MUNI 的",
  ritualStrong: "「巧克力冥想儀式」",
  ritualAfter: "。",
  awardsEyebrow: "AWARDS & RECOGNITION",
  awardsTitle: "國際殊榮",
  awards: [
    { year: "2006–2016", title: "倫敦巧克力學院 Oscar 獎", detail: "六度獲獎，「世界最佳巧克力」殊榮" },
    { year: "2007", title: "義大利共和國功績勳章", detail: "Made in Italy 最高榮譽大使" },
    { year: "2008", title: "義大利美食學院 Dino Villani 獎", detail: "表彰對義大利傳統美食的卓越貢獻" },
    { year: "2021", title: "倫敦巧克力學院首屆會長獎", detail: "表彰過去 30 年革命可可與巧克力世界的人" },
    { year: "2022", title: "Tavoletta d'Oro 金牌獎", detail: "Icon Peru 85% 獲原產地黑巧克力類別金獎" },
  ],
  collectionEyebrow: "CHOCOLATE COLLECTION",
  collectionTitle: "手工巧克力系列",
  collectionLead:
    "每一片都由 Cecilia 親手調溫、手工包裝，從可可豆到成品（Seed to Bar），全程掌控品質。",
  products: [
    {
      name: "Myway",
      description: "80% 特濃黑巧克力",
      detail:
        "堅定走自己的路，如同 Cecilia 三十年的巧克力之旅。高濃度可可帶來深沉的風味層次，適合喜歡純粹、有個性的你。",
    },
    {
      name: "Weekend",
      description: "70% 特濃黑巧克力",
      detail:
        "週末的放鬆時刻，讓純粹的可可帶你回到內在的寧靜。恰到好處的甜苦平衡，是日常犒賞自己的最佳選擇。",
    },
    {
      name: "Bluemoon",
      description: "牛奶巧克力",
      detail:
        "如月光般柔和溫暖，適合需要被溫柔擁抱的時刻。絲滑的牛奶與可可交融，帶來安定與幸福的味覺體驗。",
    },
  ],
  ritualEyebrow: "MUNI CHOCOLATE RITUAL",
  ritualTitle: "MUNI 巧克力療癒儀式",
  ritualLead: "三個步驟，讓一片巧克力成為一次深度的自我療癒",
  rituals: [
    {
      step: "01",
      title: "準備",
      icon: "🫧",
      description:
        "滴一滴 MUNI 牟尼香在手腕內側。閉上眼睛，深呼吸三次，讓牟尼香的植物頻率先安定你的神經系統。",
    },
    {
      step: "02",
      title: "品嘗",
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
  ],
  pairingEyebrow: "PAIRING SUGGESTIONS",
  pairingTitle: "巧克力 × 牟尼香搭配建議",
  pairings: [
    { chocolate: "Myway（80% 特濃黑巧克力）", oil: "牟尼香", mood: "需要堅定信念、走自己的路的時刻" },
    { chocolate: "Weekend（70% 黑巧克力）", oil: "牟尼香", mood: "週末的自我犒賞時刻，喚醒內在喜悅" },
    { chocolate: "Bluemoon（牛奶巧克力）", oil: "牟尼香", mood: "睡前的安定儀式，讓心回到寧靜" },
  ],
  ctaTitle: "想知道哪款巧克力最適合你此刻的狀態？",
  ctaBody: "告訴 MUNI 療癒顧問你現在的心情，\nAI 會為你推薦最適合的巧克力品嘗方案。",
  ctaConsultant: "問問 MUNI 療癒顧問",
  ctaSystems: "探索更多 MUNI 療癒系統",
};

const en: ChocolateCopy = {
  metaTitle: "MUNI × CECILIA | World-class artisan chocolate × frequency healing",
  metaDescription:
    "MUNI works with Cecilia Rabassi, the world's first female Maître Chocolatier, combining Tuscan alabaster craft with frequency resonance to make the finest artisan chocolate there is.",
  backToSystems: "Back to the healing systems",
  eyebrow: "MUNI × CECILIA RABASSI",
  heroLine1: "The world's finest",
  heroLine2: "artisan chocolate",
  heroLine3: "× frequency healing",
  heroBody:
    "When thirty years of craft from the world's first female chocolate master meet MUNI's philosophy of frequency, every mouthful becomes a deep conversation with what's inside you.",
  portraitAlt: "Cecilia Rabassi — the world's first female Maître Chocolatier",
  collabEyebrow: "A COLLABORATION OF FREQUENCY & CRAFT",
  collabTitle: "When frequency meets craft,\nchocolate stops being only a dessert",
  collabP1Before: "MUNI holds that ",
  collabP1Strong: "food carries frequency",
  collabP1After:
    ". From the moment a cacao bean grows in the sun it carries the earth's energy. And Cecilia Rabassi's thirty years of devotion to chocolate — selecting beans at origin, tending them in alabaster, tempering by hand — is exactly the work of keeping that frequency whole.",
  collabP2Before: "MUNI × CECILIA isn't a co-branding exercise but ",
  collabP2Strong: "two philosophies of healing in resonance",
  collabP2After:
    ": Cecilia guards the pure frequency of cacao with thirty years of craft, and MUNI uses the wisdom of essences and oils to bring that frequency into conversation with your body and mind.",
  makerEyebrow: "THE MAÎTRE CHOCOLATIER",
  makerName: "Cecilia Rabassi",
  makerRole: "The world's first female Maître Chocolatier",
  tuscanyAlt: "Cecilia Rabassi in Tuscany",
  makerQuote:
    "“Making chocolate is like dancing — it takes grace, rigour, discipline, and the strength to try every step again until you find the perfect balance.”",
  makerQuoteSource: "— Cecilia Rabassi",
  makerParagraphs: [
    {
      before: "Nearly thirty years ago Cecilia set out from ",
      strong: "Tuscany",
      middle:
        " to study in France, Belgium and Germany under several chocolate masters. Back in Italy she founded the internationally renowned ",
      strong2: "Amedei Tuscany",
      after: " and became the world's first female Maître Chocolatier.",
    },
    {
      before:
        "Today she has returned to where she began: a small artisan workshop, focused on her own process of tending cacao beans in ",
      strong: "alabaster of Volterra",
      after: ", creating sensory harmonies that had not existed before.",
    },
    {
      before:
        "She travels herself to plantations in Madagascar and South America to select beans, keeps a private hazelnut grove in the hills near Pisa, and oversees every step from raw material to finished bar.",
    },
  ],
  alabasterEyebrow: "THE SECRET OF ALABASTER",
  alabasterTitle: "The secret of alabaster × keeping the frequency",
  alabasterCardTitle: "Alabaster of Volterra",
  alabasterCardBefore:
    "Alabaster from Volterra in Tuscany is at the heart of Cecilia's process. The beans are tended in alabaster vessels; this ancient natural stone holds temperature and humidity steady, letting the flavour molecules of cacao develop in their best conditions and creating a singular ",
  alabasterCardStrong: "sensory harmony",
  alabasterCardAfter: ".",
  resonanceCardTitle: "MUNI frequency resonance",
  resonanceCardBefore:
    "In MUNI's philosophy, high-quality cacao is rich in ",
  resonanceCardStrong1: "tryptophan",
  resonanceCardMiddle: " and ",
  resonanceCardStrong2: "phenylethylamine",
  resonanceCardAfter:
    ", which naturally raise serotonin and dopamine — the body's own frequency of wellbeing. Where Cecilia's alabaster craft keeps the frequency of cacao intact, MUNI's essences and oils guide it into resonance with how you feel.",
  ritualLabel: "MUNI FREQUENCY RITUAL",
  ritualBefore:
    "In a quiet moment, put a drop of MUNI Scent on your wrist, take three deep breaths, then taste a piece of Cecilia's chocolate slowly — letting the frequencies of smell and taste work at once. This is MUNI's ",
  ritualStrong: "chocolate meditation",
  ritualAfter: ".",
  awardsEyebrow: "AWARDS & RECOGNITION",
  awardsTitle: "International recognition",
  awards: [
    { year: "2006–2016", title: "Academy of Chocolate Awards, London", detail: "Six-time winner, recognised for the world's finest chocolate" },
    { year: "2007", title: "Order of Merit of the Italian Republic", detail: "The highest honour as an ambassador for Made in Italy" },
    { year: "2008", title: "Dino Villani Prize, Italian Academy of Cuisine", detail: "For outstanding contribution to Italy's culinary tradition" },
    { year: "2021", title: "Academy of Chocolate inaugural President's Award", detail: "For thirty years of revolutionising the world of cacao and chocolate" },
    { year: "2022", title: "Tavoletta d'Oro gold medal", detail: "Icon Peru 85% took gold in the single-origin dark chocolate category" },
  ],
  collectionEyebrow: "CHOCOLATE COLLECTION",
  collectionTitle: "The artisan collection",
  collectionLead:
    "Every bar is tempered and wrapped by Cecilia's own hand, with quality controlled from seed to bar.",
  products: [
    {
      name: "Myway",
      description: "80% extra dark",
      detail:
        "Going your own way, as Cecilia has for thirty years. High cacao content brings deep layers of flavour — for anyone who likes things pure and with character.",
    },
    {
      name: "Weekend",
      description: "70% extra dark",
      detail:
        "A weekend's ease, letting pure cacao bring you back to an inner quiet. The balance of sweet and bitter is exactly right for treating yourself.",
    },
    {
      name: "Bluemoon",
      description: "Milk chocolate",
      detail:
        "Soft and warm as moonlight, for moments that call for a gentle embrace. Silky milk and cacao together bring a settled, contented taste.",
    },
  ],
  ritualEyebrow: "MUNI CHOCOLATE RITUAL",
  ritualTitle: "The MUNI chocolate ritual",
  ritualLead: "Three steps that turn one piece of chocolate into a deep act of care",
  rituals: [
    {
      step: "01",
      title: "Prepare",
      icon: "🫧",
      description:
        "Put a drop of MUNI Scent on your inner wrist. Close your eyes, take three deep breaths, and let the plant frequency settle your nervous system first.",
    },
    {
      step: "02",
      title: "Taste",
      icon: "🍫",
      description:
        "Unwrap a piece of Cecilia's chocolate slowly and smell it first. Put it in your mouth without chewing and let it melt on the tongue, feeling the frequency of cacao open.",
    },
    {
      step: "03",
      title: "Notice",
      icon: "🧘",
      description:
        "As it melts, observe what happens in your body and your feeling. This one moment of stopping is where the healing begins.",
    },
  ],
  pairingEyebrow: "PAIRING SUGGESTIONS",
  pairingTitle: "Chocolate × MUNI Scent pairings",
  pairings: [
    { chocolate: "Myway (80% extra dark)", oil: "MUNI Scent", mood: "For moments that call for conviction and going your own way" },
    { chocolate: "Weekend (70% dark)", oil: "MUNI Scent", mood: "For a weekend treat, waking an inner gladness" },
    { chocolate: "Bluemoon (milk chocolate)", oil: "MUNI Scent", mood: "For a settling ritual before sleep, bringing the heart to quiet" },
  ],
  ctaTitle: "Want to know which chocolate suits where you are?",
  ctaBody:
    "Tell the MUNI Healing Consultant how you're feeling,\nand it will suggest the chocolate and the way to taste it.",
  ctaConsultant: "Ask the MUNI Healing Consultant",
  ctaSystems: "Explore more MUNI healing systems",
};

export const CHOCOLATE_COPY: Record<Locale, ChocolateCopy> = { zh, en };
