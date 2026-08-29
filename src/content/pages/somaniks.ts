// 牟尼微針頁面的中英文文案（/somaniks）
import type { Locale } from "@/i18n/config";

export type SomaniksCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  howEyebrow: string;
  howTitle: string;
  steps: { title: string; desc: string }[];
  howNote: string;
  whatEyebrow: string;
  whatTitle: string;
  whatParagraphs: { before: string; strong?: string; after?: string }[];
  productImageAlt: string;
  madeInLabel: string;
  madeInValue: string;
  whyEyebrow: string;
  whyTitle: string;
  whyLead: string;
  whyCards: { title: string; desc: string }[];
  philosophyEyebrow: string;
  philosophyTitle: string;
  philosophyBody: string;
  certEyebrow: string;
  certifications: { icon: string; title: string; desc: string }[];
  certNote: string;
  ctaTitle: string;
  ctaBody: string;
  ctaPick: string;
  ctaDraw: string;
};

const zh: SomaniksCopy = {
  metaTitle: "牟尼微針 | 從身體開始，讓改變發生 | MUNI × SOMANIKS",
  metaDescription:
    "不知道該怎麼調整自己時，可以先從身體開始。選一個最接近你現在的感覺，貼上 Somaniks，讓身體帶你回來。",
  eyebrow: "MUNI × SOMANIKS",
  heroTitle: "當你不知道該怎麼調整自己時\n可以先從身體開始",
  heroLead: "選一個最接近你現在的感覺，讓身體帶你回來",
  howEyebrow: "How to Start",
  howTitle: "只需要這樣做",
  steps: [
    { title: "抽一張花精牌卡", desc: "讓直覺幫你選擇今天的方向" },
    { title: "聞一下牟尼香", desc: "讓嗅覺先打開身體的準備" },
    { title: "貼上 Somaniks", desc: "讓身體從這個位置開始改變" },
  ],
  howNote: "不需要一次做好全部，只要讓身體先開始一點點改變就好。",
  whatEyebrow: "What is Somaniks",
  whatTitle: "它不是強烈刺激身體\n而是輕輕地提醒身體可以開始調整",
  whatParagraphs: [
    {
      before:
        "Somaniks 來自日本，是一種不刺入皮膚的微錐貼片。貼在身上的時候，你幾乎感覺不到什麼——但身體會開始自己做出反應。",
    },
    {
      before: "它透過非常細微的接觸，啟動皮膚底下的",
      strong: "自然反射",
      after: "，讓血液循環改善、肌肉慢慢放鬆、緊繃的地方開始鬆開。",
    },
    {
      before:
        "沒有藥物、沒有疼痛、不損傷皮膚。你只需要選對位置，貼上去，然後讓身體做它本來就會做的事。",
    },
  ],
  productImageAlt: "SOMANIKS 微錐貼片",
  madeInLabel: "日本製造",
  madeInValue: "57+ 年精密技術",
  whyEyebrow: "Why it Works",
  whyTitle: "為什麼身體會開始改變",
  whyLead: "你不需要完全理解原理，也可以讓身體開始感受到不同。",
  whyCards: [
    {
      title: "身體比頭腦更快開始改變",
      desc: "你不需要先「想通」才能好起來。皮膚接收到微小的刺激，身體就會自己啟動修復。",
    },
    {
      title: "不需要完全理解也可以開始",
      desc: "就像你不需要知道花怎麼開，只要把種子放進土裡。身體的修復也是一樣。",
    },
    {
      title: "小小的刺激，啟動自我調節",
      desc: "微錐不是在治療你，而是在提醒你的身體：「嘿，你可以開始調整了。」",
    },
  ],
  philosophyEyebrow: "MUNI Philosophy",
  philosophyTitle: "花精平衡情緒，牟尼香打開嗅覺，\nSomaniks 讓身體開始回應",
  philosophyBody:
    "MUNI 的療癒系統不是讓外力來修復你，而是透過花精、精油和微錐，同時打開情緒、嗅覺與觸覺三個通道——讓你的身體自己找到回來的路。",
  certEyebrow: "Certifications & Trust",
  certifications: [
    { icon: "🇯🇵", title: "日本醫療器材認證", desc: "一般醫療機器製造販賣認證" },
    { icon: "🇪🇺", title: "CE 認證", desc: "歐盟醫療器材合規認證" },
    { icon: "🇺🇸", title: "FDA 認證", desc: "美國食品藥物管理局認證" },
    { icon: "🔬", title: "共同研究開發", desc: "東京都健康長壽醫療中心" },
    { icon: "📺", title: "NHK 推薦", desc: "「東洋醫學 真正的力量」節目介紹" },
    { icon: "🏅", title: "日本專利技術", desc: "特許第 4828166 號" },
  ],
  certNote: "日本全國多家醫療機構導入使用 · 日本製造（靜岡縣富士市）",
  ctaTitle: "開始你的第一步",
  ctaBody: "不需要想太多。選一個位置，貼上去，讓身體帶你回來。",
  ctaPick: "重新選一個位置",
  ctaDraw: "先抽一張牌卡",
};

const en: SomaniksCopy = {
  metaTitle: "Somaniks | Start with the body | MUNI × SOMANIKS",
  metaDescription:
    "When you don't know how to adjust anything, start with the body. Choose the state closest to how you are, place a Somaniks, and let the body lead you back.",
  eyebrow: "MUNI × SOMANIKS",
  heroTitle:
    "When you don't know how to adjust anything,\nstart with the body",
  heroLead:
    "Choose the state closest to how you are, and let the body lead you back",
  howEyebrow: "How to Start",
  howTitle: "This is all it takes",
  steps: [
    { title: "Draw a flower essence card", desc: "Let intuition choose today's direction" },
    { title: "Breathe in MUNI Scent", desc: "Let smell prepare the body first" },
    { title: "Place the Somaniks", desc: "Let the change begin from that point" },
  ],
  howNote:
    "You don't have to get it all right at once. Letting the body begin to shift a little is enough.",
  whatEyebrow: "What is Somaniks",
  whatTitle:
    "It doesn't stimulate the body hard.\nIt reminds the body, gently, that it can begin adjusting",
  whatParagraphs: [
    {
      before:
        "Somaniks comes from Japan: a microcone patch that doesn't pierce the skin. When it's on you, you feel almost nothing — and the body begins to respond on its own.",
    },
    {
      before: "Through very fine contact it triggers a ",
      strong: "natural reflex",
      after:
        " beneath the skin, improving circulation, letting muscle release slowly, and loosening places that were held tight.",
    },
    {
      before:
        "No medication, no pain, no damage to the skin. Choose the right place, put it on, and let the body do what it already knows how to do.",
    },
  ],
  productImageAlt: "SOMANIKS microcone patch",
  madeInLabel: "Made in Japan",
  madeInValue: "57+ years of precision engineering",
  whyEyebrow: "Why it Works",
  whyTitle: "Why the body begins to change",
  whyLead:
    "You don't have to understand the mechanism for the body to start feeling different.",
  whyCards: [
    {
      title: "The body changes before the mind does",
      desc: "You don't have to think your way through before you can feel better. The skin receives a small stimulus and the body starts its own repair.",
    },
    {
      title: "You can begin without understanding it",
      desc: "You don't need to know how a flower opens in order to put the seed in the ground. Repair works the same way.",
    },
    {
      title: "A small stimulus, self-regulation begins",
      desc: "The microcone isn't treating you. It's telling your body: you can start adjusting now.",
    },
  ],
  philosophyEyebrow: "MUNI Philosophy",
  philosophyTitle:
    "Essences settle emotion, MUNI Scent opens smell,\nand Somaniks lets the body respond",
  philosophyBody:
    "The MUNI system doesn't have an outside force repair you. Through essences, oils and microcones it opens three channels at once — emotion, smell and touch — so your body can find its own way back.",
  certEyebrow: "Certifications & Trust",
  certifications: [
    { icon: "🇯🇵", title: "Japanese medical device approval", desc: "General medical device manufacturing and sales approval" },
    { icon: "🇪🇺", title: "CE marking", desc: "EU medical device conformity" },
    { icon: "🇺🇸", title: "FDA registration", desc: "US Food and Drug Administration" },
    { icon: "🔬", title: "Joint research", desc: "Tokyo Metropolitan Institute for Geriatrics and Gerontology" },
    { icon: "📺", title: "Featured on NHK", desc: "In the programme on the real power of East Asian medicine" },
    { icon: "🏅", title: "Japanese patent", desc: "Patent no. 4828166" },
  ],
  certNote:
    "In use at medical institutions across Japan · Made in Japan (Fuji, Shizuoka)",
  ctaTitle: "Take your first step",
  ctaBody:
    "No need to think it through. Choose a place, put it on, and let the body lead you back.",
  ctaPick: "Choose a place again",
  ctaDraw: "Draw a card first",
};

export const SOMANIKS_COPY: Record<Locale, SomaniksCopy> = { zh, en };
