import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { isLocale, localeHref, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

type Copy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  heroBody: string;
  whatTitle: string;
  whatBody: string[];
  whenTitle: string;
  useCases: { title: string; desc: string }[];
  channelsTitle: string;
  channelsBody: string;
  ctaTitle: string;
  ctaDraw: string;
  ctaFascia: string;
  togetherTitle: string;
  togetherIntro: string;
  togetherSteps: { step: string; title: string; desc: string }[];
  togetherFascia: string;
  togetherObservatory: string;
};

const COPY: Record<Locale, Copy> = {
  zh: {
    metaTitle: "牟尼香｜六味精油 × 40 種花精頻率 | MUNI",
    metaDescription:
      "牟尼香融合六種精油與 40 種花精頻率，透過嗅覺直達邊緣系統，是 MUNI 療癒系統的嗅覺入口。",
    eyebrow: "MUNI SCENT",
    title: "牟尼香",
    heroBody:
      "六味精油與 40 種花精頻率的融合。\n不是香氛，而是一個讓你回到內在的嗅覺入口。",
    whatTitle: "什麼是牟尼香",
    whatBody: [
      "牟尼香是 MUNI 療癒系統的核心之一。",
      "它融合了六種精油配方與 40 種巴赫花精頻率，透過嗅覺直接抵達大腦邊緣系統——負責情緒、記憶與自律神經調節的區域。",
      "你不需要理解它怎麼運作。只需要在需要的時候聞一下，讓身體自己開始回應。",
    ],
    whenTitle: "什麼時候可以用",
    useCases: [
      {
        title: "當你抽完牌卡",
        desc: "聞一下牟尼香，讓牌卡帶來的覺察更容易被身體接收。",
      },
      {
        title: "當你貼上筋膜貼",
        desc: "先聞牟尼香，讓身體慢下來，再貼上 Fascia Point 筋膜貼，同時打開嗅覺與觸覺兩個通道。",
      },
      {
        title: "當你只是需要安靜一下",
        desc: "不需要做任何事，只是聞一下，讓自己慢下來。",
      },
    ],
    channelsTitle: "情緒・嗅覺・觸覺",
    channelsBody:
      "MUNI 相信，真正的療癒不是從外力介入，而是同時打開三個通道——花精平衡情緒，牟尼香啟動嗅覺，筋膜貼讓身體被感覺到。牟尼香是這三者之間的橋樑。",
    ctaTitle: "開始使用牟尼香",
    ctaDraw: "先抽一張牌卡",
    ctaFascia: "搭配筋膜貼使用",
    togetherTitle: "聞、貼、看、動",
    togetherIntro: "牟尼香、Fascia Point 筋膜貼與經絡觀察室，是 MUNI 身體覺察的三個入口。可以這樣一起使用：",
    togetherSteps: [
      { step: "01", title: "聞", desc: "聞一下牟尼香，讓身體先慢下來。" },
      { step: "02", title: "貼", desc: "貼上筋膜貼，留意身體在哪裡被感覺到。" },
      { step: "03", title: "看", desc: "打開經絡觀察室，看看那個位置周圍的結構與循行。" },
      { step: "04", title: "動", desc: "做一個熟悉的動作，記下前後的差別。" },
    ],
    togetherFascia: "認識 Fascia Point 筋膜貼",
    togetherObservatory: "進入經絡觀察室",
  },
  en: {
    metaTitle: "MUNI Scent | Six essential oils × 40 essence frequencies | MUNI",
    metaDescription:
      "MUNI Scent blends six essential oils with 40 flower essence frequencies. Smell reaches the limbic system directly, making it the olfactory doorway into the MUNI system.",
    eyebrow: "MUNI SCENT",
    title: "MUNI Scent",
    heroBody:
      "Six essential oils blended with 40 flower essence frequencies.\nNot a fragrance — a doorway back to yourself through scent.",
    whatTitle: "What MUNI Scent is",
    whatBody: [
      "MUNI Scent is one of the cornerstones of the MUNI system.",
      "It brings together a six-oil formulation and the frequencies of 40 Bach flower essences. Smell reaches the limbic system directly — the region that handles emotion, memory and autonomic regulation.",
      "You don't have to understand how it works. Breathe it in when you need it, and let the body begin its own response.",
    ],
    whenTitle: "When to use it",
    useCases: [
      {
        title: "After you've drawn a card",
        desc: "Breathe in the scent so the awareness the card brought is easier for the body to receive.",
      },
      {
        title: "Before you put on the Fascia Point patch",
        desc: "Breathe in the scent first so the body slows down, then put on the Fascia Point patch — opening the channels of smell and touch together.",
      },
      {
        title: "When you simply need a quiet moment",
        desc: "Nothing to do — just breathe it in and let yourself slow down.",
      },
    ],
    channelsTitle: "Emotion · smell · touch",
    channelsBody:
      "MUNI holds that real healing isn't imposed from outside but opens three channels at once — flower essences settle emotion, MUNI Scent engages smell, and the Fascia Point patch lets the body be felt. MUNI Scent is the bridge between the three.",
    ctaTitle: "Begin with MUNI Scent",
    ctaDraw: "Draw a card first",
    ctaFascia: "Use it with Fascia Point",
    togetherTitle: "Smell, touch, see, move",
    togetherIntro: "MUNI Scent, the Fascia Point patch and the Meridian Observatory are three doorways into body awareness. Use them together like this:",
    togetherSteps: [
      { step: "01", title: "Smell", desc: "Breathe in MUNI Scent and let the body slow down first." },
      { step: "02", title: "Touch", desc: "Put on the Fascia Point patch and notice where the body is being felt." },
      { step: "03", title: "See", desc: "Open the Meridian Observatory and look at the structures and channels around that place." },
      { step: "04", title: "Move", desc: "Do a familiar movement and note what changed." },
    ],
    togetherFascia: "Discover Fascia Point (Chinese)",
    togetherObservatory: "Enter the Meridian Observatory",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/muni-scent",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function MuniScentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = COPY[locale];

  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      <Header />

      {/* ── 1. Hero ── */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#9A7B4F]/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#9A7B4F] text-sm tracking-[0.3em] uppercase mb-5">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#4a5548] mb-6 leading-tight">
            {copy.title}
          </h1>
          <p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto whitespace-pre-line">
            {copy.heroBody}
          </p>
        </div>
      </section>

      {/* ── 2. 什麼是牟尼香 ── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a5548] text-center mb-10">
            {copy.whatTitle}
          </h2>
          <div className="space-y-6 text-stone-600 leading-relaxed text-base md:text-lg">
            {copy.whatBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 使用時機 ── */}
      <section className="py-20 px-4 bg-white/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a5548] text-center mb-12">
            {copy.whenTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.useCases.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100"
              >
                <h3 className="font-serif text-lg text-[#4a5548] mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 三個通道 ── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a5548] mb-8">
            {copy.channelsTitle}
          </h2>
          <p className="text-stone-600 leading-relaxed text-base md:text-lg">
            {copy.channelsBody}
          </p>
        </div>
      </section>

      {/* ── 4b. 聞、貼、看、動：與筋膜貼、經絡觀察室一起使用 ── */}
      <section className="py-20 px-4 bg-[#f6eef1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a5548] text-center mb-4">
            {copy.togetherTitle}
          </h2>
          <p className="text-stone-600 text-center leading-relaxed max-w-2xl mx-auto mb-12">
            {copy.togetherIntro}
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {copy.togetherSteps.map((item) => (
              <li key={item.step} className="bg-white/80 rounded-2xl p-6 border border-stone-100">
                <p className="text-xs tracking-[0.2em] text-[#9b295a] mb-2">{item.step}</p>
                <h3 className="font-serif text-xl text-[#4a5548] mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <Link href="/fascia-point" className="inline-flex min-h-11 items-center border-b border-[#9b295a] text-[#9b295a] hover:text-[#4a5548] transition-colors">
              {copy.togetherFascia} →
            </Link>
            <Link href={localeHref(locale, "/meridian-observatory")} className="inline-flex min-h-11 items-center border-b border-[#9A7B4F] text-[#9A7B4F] hover:text-[#4a5548] transition-colors">
              {copy.togetherObservatory} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="py-20 px-4 bg-white/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a5548] mb-10">
            {copy.ctaTitle}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={localeHref(locale, "/draw")}
              className="inline-block px-8 py-3 rounded-full bg-[#4a5548] text-white text-sm font-medium hover:bg-[#3a4538] transition-colors"
            >
              {copy.ctaDraw}
            </Link>
            <Link
              href="/fascia-point"
              className="inline-block px-8 py-3 rounded-full border border-[#9A7B4F] text-[#9A7B4F] text-sm font-medium hover:bg-[#9A7B4F] hover:text-white transition-colors"
            >
              {copy.ctaFascia}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
