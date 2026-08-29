import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OIL_COPY } from "@/content/pages/essential-oil";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FrequencyBadge from "@/components/FrequencyBadge";

const INGREDIENT_STYLES = [
  { num: "01", color: "from-amber-50 to-yellow-50", borderColor: "border-amber-200", accent: "text-amber-700" },
  { num: "02", color: "from-orange-50 to-amber-50", borderColor: "border-orange-200", accent: "text-orange-700" },
  { num: "03", color: "from-stone-100 to-stone-50", borderColor: "border-stone-300", accent: "text-stone-700" },
  { num: "04", color: "from-rose-50 to-pink-50", borderColor: "border-rose-200", accent: "text-rose-700" },
  { num: "05", color: "from-violet-50 to-purple-50", borderColor: "border-violet-200", accent: "text-violet-700" },
  { num: "06", color: "from-lime-50 to-green-50", borderColor: "border-lime-200", accent: "text-lime-700" },
];

const SCIENCE_SOURCES: { text: string; url: string }[][] = [
  [
    {
      text: "Liu S, et al. (2020). Dopaminergic Modulation of Glomerular Circuits in the Mouse Olfactory Bulb. Frontiers in Cellular Neuroscience, 14:172.",
      url: "https://www.frontiersin.org/journals/cellular-neuroscience/articles/10.3389/fncel.2020.00172/full",
    },
  ],
  [
    {
      text: "Moussaieff A, et al. (2008). Incensole acetate, an incense component, elicits psychoactivity by activating TRPV3 channels in the brain. The FASEB Journal.",
      url: "https://www.sciencedaily.com/releases/2008/05/080520110415.htm",
    },
    {
      text: "Moussaieff A, et al. (2012). Incensole acetate reduces depressive-like behavior and modulates hippocampal BDNF and CRF expression of submissive animals. Journal of Psychopharmacology.",
      url: "https://pubmed.ncbi.nlm.nih.gov/23015543/",
    },
  ],
  [
    {
      text: "Harada H, et al. (2018). Linalool Odor-Induced Anxiolytic Effects in Mice. Frontiers in Behavioral Neuroscience, 12:241.",
      url: "https://www.frontiersin.org/journals/behavioral-neuroscience/articles/10.3389/fnbeh.2018.00241/full",
    },
    {
      text: "Malcolm BJ & Tallian K. (2018). Essential oil of lavender in anxiety disorders: Ready for prime time? Mental Health Clinician, 7(4):147-155.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6007527/",
    },
  ],
  [
    {
      text: "Chen MC, et al. (2021). Effect of aromatherapy on autonomic nervous system regulation with physical exercise intervention. PLOS ONE.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8043395/",
    },
  ],
  [
    {
      text: "Wang S, et al. (2022). Aromas Influencing the GABAergic System. PMC/PubMed Central.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9026314/",
    },
  ],
  [
    {
      text: "(2025). Dopamine induces fear extinction by activating the reward circuitry. Proceedings of the National Academy of Sciences (PNAS).",
      url: "https://www.pnas.org/doi/10.1073/pnas.2501331122",
    },
  ],
];

const GRAIL_ICONS = [
  { bg: "bg-amber-100", text: "text-amber-700", glyph: "⚗" },
  { bg: "bg-teal-100", text: "text-teal-700", glyph: "☸" },
  { bg: "bg-violet-100", text: "text-violet-700", glyph: "◎" },
];

const CHAKRA_COLORS = [
  "bg-violet-100 text-violet-700 border-violet-200",
  "bg-indigo-100 text-indigo-700 border-indigo-200",
  "bg-sky-100 text-sky-700 border-sky-200",
  "bg-emerald-100 text-emerald-700 border-emerald-200",
  "bg-yellow-100 text-yellow-700 border-yellow-200",
  "bg-orange-100 text-orange-700 border-orange-200",
  "bg-red-100 text-red-700 border-red-200",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = OIL_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/essential-oil",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function EssentialOilPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = OIL_COPY[locale];
  const ingredients = copy.ingredientNames.map((item, i) => ({
    ...item,
    ...INGREDIENT_STYLES[i],
  }));
  const scienceSections = copy.scienceSections.map((sec, i) => ({
    ...sec,
    sources: SCIENCE_SOURCES[i],
  }));

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href={localeHref(locale, "/systems")}
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-[#4a5548] transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {copy.backToSystems}
          </Link>
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
            {copy.eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#4a5548] mb-6 leading-tight">
            {copy.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#4a5548] font-serif mb-6 leading-relaxed">
            {copy.tagline}
          </p>
          <p className="text-stone-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 whitespace-pre-line">
            {copy.heroBody}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#ingredients"
              className="inline-flex items-center gap-2 bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-6 py-3 text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              {copy.ctaIngredients}
            </a>
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-6 py-3 text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              {copy.ctaExperience}
            </a>
          </div>
        </div>
      </section>

      {/* 聖杯的故事 */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-8 text-center">
            {copy.storyTitle}
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-100">
            <div className="space-y-5 text-stone-600 leading-relaxed text-base md:text-lg">
              <p className="text-[#4a5548] font-medium text-lg md:text-xl">
                {copy.storyLead}
              </p>
              <p className="whitespace-pre-line">{copy.storyP1}</p>
              <p>
                <strong className="text-[#4a5548]">{copy.storyMuniLabel}</strong>
                {copy.storyMuniRest}
                <br />
                <strong className="text-[#4a5548]">{copy.storyGrailLabel}</strong>
                {copy.storyGrailRest}
              </p>
              <p className="whitespace-pre-line">{copy.storyP4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 六種珍稀精油 */}
      <section id="ingredients" className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-3">
              {copy.ingredientsTitle}
            </h2>
            <p className="text-stone-500">{copy.ingredientsSub}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {ingredients.map((item) => (
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
              <span className="whitespace-pre-line">{copy.sandalNoteBefore}</span>
              <strong className="text-[#4a5548]">{copy.sandalNoteStrong}</strong>
              {copy.sandalNoteAfter}
            </p>
          </div>
        </div>
      </section>

      {/* 為什麼是「聖杯」？ */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4 text-center">
            {copy.grailTitle}
          </h2>
          <p className="text-stone-500 text-center mb-12 text-lg">{copy.grailSub}</p>
          <p className="text-stone-600 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            {copy.grailLead}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.grailCards.map((card, idx) => (
              <div key={card.title} className="bg-[#F9F7F2] rounded-2xl p-6 border border-stone-100">
                <div className={`w-10 h-10 rounded-full ${GRAIL_ICONS[idx].bg} flex items-center justify-center mb-4`}>
                  <span className={`${GRAIL_ICONS[idx].text} text-lg`}>{GRAIL_ICONS[idx].glyph}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-3">{card.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 科學原理 */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto pt-16">
          <div className="text-center mb-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-3">
              {copy.scienceTitle}
            </h2>
            <p className="text-stone-400 text-sm italic">
              {copy.scienceSub}
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {scienceSections.map((section, idx) => (
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
                      {copy.scienceSourcesLabel}
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
            {copy.chakraTitle}
          </h2>
          <p className="text-stone-500 mb-10">
            {copy.chakraSub}
          </p>

          <div className="flex flex-col items-center gap-3">
            {copy.chakras.map((chakra, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center gap-3 px-5 py-2.5 rounded-full border ${CHAKRA_COLORS[idx]} text-sm font-medium`}
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
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
