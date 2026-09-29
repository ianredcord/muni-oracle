import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { isLocale, localeHref, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

// 經絡觀察室介紹頁：先說明工具是什麼、能看什麼，再進入 3D 工作台（/pro）或簡易版（-lite）。
// 文案依《經絡觀察室：產品與設計說明》：人體是主要入口、逐層縮小範圍、誠實呈現完成程度；截圖皆為正式站實際畫面。

type Scene = { image: string; title: string; body: string; note?: string };
type Copy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  tagline: string;
  lead: string;
  preview: string;
  ctaPro: string;
  ctaLite: string;
  proNote: string;
  eastWestTitle: string;
  eastWestBody: string;
  east: { label: string; items: string[] };
  west: { label: string; items: string[] };
  eastWestNote: string;
  entryTitle: string;
  entrySteps: { step: string; title: string; body: string }[];
  scenesTitle: string;
  scenes: Scene[];
  contentTitle: string;
  content: { title: string; body: string }[];
  versionsTitle: string;
  versions: { name: string; href: string; cta: string; points: string[] }[];
  togetherTitle: string;
  togetherBody: string;
  togetherLinks: { href: string; label: string; external?: boolean }[];
  noticeTitle: string;
  notice: string[];
};

const IMG = "/images/meridian-observatory";

const COPY: Record<Locale, Copy> = {
  zh: {
    metaTitle: "經絡觀察室｜3D 人體上的經絡、穴位與解剖 | MUNI 牟尼",
    metaDescription:
      "以 3D 人體探索經絡、穴位與解剖層次，從身體位置出發，對照肌肉、牽涉痛與筋膜路線。東方經絡與董氏奇穴、西方解剖列車與激痛點，在同一具人體上一起觀察。研究預覽，內容未經專業校核。",
    eyebrow: "MERIDIAN OBSERVATORY · 3D 人體",
    title: "經絡觀察室",
    tagline: "以 3D 人體探索經絡、穴位與解剖層次，從身體位置出發，對照肌肉、牽涉痛與筋膜路線。",
    lead: "你不必先知道肌肉或穴位的名字。點一個身體部位，逐層縮小範圍，相關的經絡、肌肉、筋膜路線與牽涉痛示意就會出現在同一具人體上。",
    preview: "研究預覽 · 點位與內容未經專業校核，僅供學習與觀察",
    ctaPro: "進入 PRO 工作台",
    ctaLite: "先試簡易版",
    proNote: "PRO 在桌機與平板體驗最完整；手機建議先用簡易版。",
    eastWestTitle: "東方與西方的身體知識，放在同一具人體上。",
    eastWestBody:
      "經絡、董氏奇穴是東方的身體地圖；解剖列車、FM 點位與激痛點是西方的筋膜與肌肉觀點。觀察室把它們放在同一個 3D 人體與同一組座標上，讓你可以一起勾選、一起旋轉、一起比較位置關係——這是它與一般經絡圖或解剖軟體最大的不同。",
    east: { label: "東方", items: ["十二正經、奇經八脈、經外奇穴", "經別、經筋、皮部、絡脈", "董氏奇穴：十二部位、208 個穴組"] },
    west: { label: "西方", items: ["解剖列車 12 條筋膜路線", "激痛點與牽涉痛分布：111 組示意", "FM 筋膜相關點位與連線", "皮膚、肌肉、骨骼等解剖分層"] },
    eastWestNote: "不同內容系統共用人體座標，不表示經絡、筋膜線與牽涉痛在理論或臨床意義上等同；觀察室提供的是位置對照，不是診斷或處方。",
    entryTitle: "從身體位置出發，逐層縮小範圍。",
    entrySteps: [
      { step: "01", title: "點一個部位", body: "在 3D 人體上點選，或從大部位清單開始：頭頸、肩背、胸腹、腰骶、四肢。" },
      { step: "02", title: "縮小到細部位", body: "選細部位或疼痛位置，畫面只保留相關內容，不會一次堆滿整具人體。" },
      { step: "03", title: "看相關內容", body: "相關肌肉、經絡與穴位、筋膜路線、牽涉痛示意逐一展開；隨時可回到全身、換部位或清除選取。" },
    ],
    scenesTitle: "六種觀察方式",
    scenes: [
      { image: `${IMG}/01-hero-meridian.jpg`, title: "經絡與穴位", body: "選一條或多條經脈疊加，搜尋穴名、看穴位詳情；特定穴分類、五行與配對關係可以一起篩選。" },
      { image: `${IMG}/02-layers-muscles.jpg`, title: "同一位置，多層觀察", body: "在皮膚、肌肉、骨骼之間切換與調整透明度，理解結構的空間關係。", note: "其他組織層以實際提供為準。" },
      { image: `${IMG}/03-tung-points.jpg`, title: "董氏奇穴", body: "依手指、手掌、下臂、上臂、腳趾、腳掌、小腿、大腿、耳朵、頭面、胸部、背部十二部位查找穴組，並與正經同時比較。" },
      { image: `${IMG}/04-anatomy-trains.jpg`, title: "筋膜路線學習", body: "解剖列車 12 條路線：看整條、分段近看、選側別，對照肌肉、骨性附著面、肌腱與來源原圖。藍色肌肉、白色肌腱是它的視覺語言。", note: "缺件處為教學補建並有標示。" },
      { image: `${IMG}/05-trigger-points.jpg`, title: "牽涉痛探索", body: "從疼痛位置或症狀找相關肌肉，開啟激痛點標記與紅色牽涉痛分布示意，再對照來源原圖。", note: "紅色為分布示意，不是已證實的傳導路徑；相關肌肉不等於病因。" },
      { image: `${IMG}/06-instructor-background.jpg`, title: "講師展示", body: "背景色可換（深灰、純黑、霧白、暖米、灰藍、墨綠或自訂），介面文字與模型標籤可放大，全畫面讓學員看清當前重點。" },
    ],
    contentTitle: "目前可觀察的內容",
    content: [
      { title: "經脈與穴位", body: "十二正經、奇經八脈、經外奇穴，以及經別、經筋、皮部、絡脈分類；可用範圍依實際素材而定。" },
      { title: "董氏奇穴", body: "十二部位、208 個穴組名稱；穴組數不等同模型上的點數。" },
      { title: "FM 點位", body: "筋膜相關點位與示意連線的觀察模組。" },
      { title: "激痛點與牽涉痛", body: "111 組目錄、434 個示意標記，0 組完成專業校核；來源原圖可離線放大。" },
      { title: "解剖列車", body: "12 條筋膜路線，含骨性附著面與補建止點腱，依 Anatomy Trains 對照。" },
      { title: "解剖分層", body: "皮膚、肌肉、骨骼等圖層，透明度可調、可聚焦；男女模型可切換，女性解剖素材較少。" },
    ],
    versionsTitle: "兩個版本",
    versions: [
      { name: "簡易版", href: "/meridian-observatory-lite", cta: "進入簡易版", points: ["一次觀察一條經脈與穴位", "介面簡潔、載入輕量，手機也順", "適合初次認識經絡循行"] },
      { name: "PRO", href: "/meridian-observatory/pro", cta: "進入 PRO", points: ["全部內容層：經脈、董氏、FM、激痛點、解剖列車、解剖", "三側工作台：左側工具、右側經絡複選、底部穴位快選", "分段近看、來源原圖對照、背景與文字大小設定"] },
    ],
    togetherTitle: "和 MUNI 一起用：聞、貼、看、動。",
    togetherBody: "聞一下牟尼香讓身體慢下來；貼上 Fascia Point 筋膜貼，留意身體在哪裡被感覺到；到觀察室看那個位置周圍的結構；再做一個熟悉的動作，記下前後的差別。",
    togetherLinks: [
      { href: "/muni-scent", label: "認識牟尼香" },
      { href: "/fascia-point", label: "認識 Fascia Point 筋膜貼", external: true },
    ],
    noticeTitle: "使用前請知道",
    notice: [
      "這是研究預覽：點位精度、牽涉痛配準、原圖一致性與補建構件仍在持續校核，畫面上會保留「待校核」「補建」「示意」等標示。",
      "內容用於學習與位置觀察，不作為診斷、治療或貼用位置的依據；身體不適請諮詢專業人員。",
      "解剖列車路線對照 Thomas W. Myers《Anatomy Trains》；激痛點來源標示於各肌肉頁面。",
    ],
  },
  en: {
    metaTitle: "Meridian Observatory | Meridians, points and anatomy on one 3D body | MUNI",
    metaDescription:
      "Explore meridians, acupoints and anatomical layers on a 3D body. Start from a place on the body and compare muscles, referred pain and fascial lines. Eastern meridians and Tung points alongside Western Anatomy Trains and trigger points. Research preview; content is not professionally verified.",
    eyebrow: "MERIDIAN OBSERVATORY · 3D BODY",
    title: "Meridian Observatory",
    tagline: "Explore meridians, acupoints and anatomical layers on a 3D body — start from a place on the body and compare muscles, referred pain and fascial lines.",
    lead: "You don't need to know the name of a muscle or a point first. Tap a region, narrow it down step by step, and the related meridians, muscles, fascial lines and referred-pain sketches appear on the same body.",
    preview: "Research preview · points and content are not professionally verified · viewer interface is in Chinese",
    ctaPro: "Open the PRO workbench",
    ctaLite: "Try the Lite version",
    proNote: "PRO is best on desktop and tablet; on a phone, start with Lite.",
    eastWestTitle: "Eastern and Western body knowledge on one body.",
    eastWestBody:
      "Meridians and Tung's extraordinary points are an Eastern map of the body; Anatomy Trains, FM points and trigger points are Western views of fascia and muscle. The Observatory places them on the same 3D body and the same coordinates, so you can select, rotate and compare them together — which is what sets it apart from a meridian chart or an anatomy app.",
    east: { label: "East", items: ["12 regular meridians, 8 extraordinary vessels, extra points", "Divergent channels, sinew channels, cutaneous regions, collaterals", "Tung's points: 12 regions, 208 point groups"] },
    west: { label: "West", items: ["12 Anatomy Trains fascial lines", "Trigger points and referred-pain sketches: 111 groups", "FM fascia-related points and lines", "Anatomical layers: skin, muscle, bone and more"] },
    eastWestNote: "Sharing one set of body coordinates does not make meridians, fascial lines and referred pain equivalent in theory or clinical meaning. The Observatory compares positions; it does not diagnose or prescribe.",
    entryTitle: "Start from the body and narrow down.",
    entrySteps: [
      { step: "01", title: "Tap a region", body: "Pick a place on the 3D body or start from the main regions: head and neck, shoulders and back, chest and abdomen, pelvis, limbs." },
      { step: "02", title: "Narrow it down", body: "Choose a sub-region or a pain location. Only the related content stays on screen — the whole body is never covered in markers at once." },
      { step: "03", title: "See what relates", body: "Related muscles, meridians and points, fascial lines and referred-pain sketches unfold one by one. You can always return to the whole body, switch region or clear the selection." },
    ],
    scenesTitle: "Six ways to observe",
    scenes: [
      { image: `${IMG}/01-hero-meridian.jpg`, title: "Meridians and points", body: "Overlay one or more meridians, search point names, open point details, and filter by point category, five phases and pairings." },
      { image: `${IMG}/02-layers-muscles.jpg`, title: "One place, many layers", body: "Move between skin, muscle and bone and adjust transparency to understand spatial relationships.", note: "Other tissue layers depend on what the model provides." },
      { image: `${IMG}/03-tung-points.jpg`, title: "Tung's extraordinary points", body: "Find point groups by twelve regions — fingers, palm, forearm, upper arm, toes, sole, lower leg, thigh, ear, head and face, chest, back — and compare them with the regular meridians." },
      { image: `${IMG}/04-anatomy-trains.jpg`, title: "Fascial line learning", body: "Twelve Anatomy Trains lines: whole line, segment close-ups, side selection, compared with muscles, bony stations, tendons and the source plates. Blue muscle and white tendon is its visual language.", note: "Missing parts are teaching reconstructions and are labelled." },
      { image: `${IMG}/05-trigger-points.jpg`, title: "Referred-pain exploration", body: "Find related muscles from a pain location or symptom, show trigger-point markers and red referred-pain sketches, then check the source figure.", note: "Red areas are distribution sketches, not proven pathways; a related muscle is not a cause." },
      { image: `${IMG}/06-instructor-background.jpg`, title: "Teaching mode", body: "Switch backgrounds (dark grey, black, mist white, warm beige, grey blue, ink green or custom), enlarge interface text and model labels, and go full screen." },
    ],
    contentTitle: "What you can observe today",
    content: [
      { title: "Meridians and points", body: "Regular meridians, extraordinary vessels, extra points, plus divergent, sinew, cutaneous and collateral categories; coverage depends on the available models." },
      { title: "Tung's points", body: "Twelve regions and 208 point-group names; group count is not the number of points on the model." },
      { title: "FM points", body: "An observation module for fascia-related points and lines." },
      { title: "Trigger points and referred pain", body: "111 catalogue groups, 434 illustrative markers, none professionally verified yet; source figures can be enlarged offline." },
      { title: "Anatomy Trains", body: "Twelve fascial lines with bony stations and reconstructed tendons, compared with Anatomy Trains." },
      { title: "Anatomical layers", body: "Skin, muscle, bone and other layers with transparency and focus; male and female models, with fewer anatomy assets for the female model." },
    ],
    versionsTitle: "Two versions",
    versions: [
      { name: "Lite", href: "/meridian-observatory-lite", cta: "Open Lite", points: ["One meridian and its points at a time", "Simple interface, light to load, fine on a phone", "A good first look at meridian pathways"] },
      { name: "PRO", href: "/meridian-observatory/pro", cta: "Open PRO", points: ["All content layers: meridians, Tung, FM, trigger points, Anatomy Trains, anatomy", "Three-rail workbench: tools on the left, meridian selection on the right, point quick-select below", "Segment close-ups, source figures, background and text-size settings"] },
    ],
    togetherTitle: "With MUNI: smell, touch, see, move.",
    togetherBody: "Breathe in MUNI Scent and let the body slow down; put on the Fascia Point patch and notice where the body is felt; look at the structures around that place in the Observatory; then do a familiar movement and note what changed.",
    togetherLinks: [
      { href: "/muni-scent", label: "About MUNI Scent" },
      { href: "/fascia-point", label: "About Fascia Point (Chinese)", external: true },
    ],
    noticeTitle: "Before you begin",
    notice: [
      "This is a research preview: point accuracy, referred-pain registration, figure consistency and reconstructed parts are still being checked, and labels such as 'pending review', 'reconstructed' and 'sketch' stay on screen.",
      "The content is for learning and positional observation only. It is not a basis for diagnosis, treatment or patch placement; see a professional for any discomfort.",
      "Fascial lines are compared with Thomas W. Myers's Anatomy Trains; trigger-point sources are cited on each muscle page.",
    ],
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
    path: "/meridian-observatory",
    title: copy.metaTitle,
    description: copy.metaDescription,
    image: `https://munione.co${IMG}/01-hero-meridian.jpg`,
    imageAlt: copy.title,
  });
}

export default async function MeridianObservatoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = COPY[locale];
  const to = (path: string, external?: boolean) => (external ? path : localeHref(locale, path));

  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      <Header />

      {/* 1. 首屏 */}
      <section className="pt-28 pb-16 px-6 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#9A7B4F]">{copy.eyebrow}</p>
            <h1 className="mb-6 font-serif text-4xl font-light leading-tight text-[#4a5548] md:text-5xl">{copy.title}</h1>
            <p className="mb-5 text-lg leading-relaxed text-[#4a5548] md:text-xl">{copy.tagline}</p>
            <p className="mb-8 max-w-xl leading-loose text-stone-600">{copy.lead}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={to("/meridian-observatory/pro")} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#4a5548] px-8 text-sm font-medium text-white transition-colors hover:bg-[#3a4538]">
                {copy.ctaPro}
              </Link>
              <Link href={to("/meridian-observatory-lite")} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#9A7B4F] px-8 text-sm font-medium text-[#9A7B4F] transition-colors hover:bg-[#9A7B4F] hover:text-white">
                {copy.ctaLite}
              </Link>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-stone-500">{copy.proNote}</p>
            <p className="mt-6 inline-block rounded-full border border-[#9A7B4F]/40 px-3 py-1 text-xs text-[#9A7B4F]">{copy.preview}</p>
          </div>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-stone-200 bg-[#16181c] shadow-lg">
            <Image src={`${IMG}/01-hero-meridian.jpg`} alt={copy.scenes[0].title} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </figure>
        </div>
      </section>

      {/* 2. 東西方整合 */}
      <section className="bg-white/60 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-light leading-snug text-[#4a5548] md:text-4xl">{copy.eastWestTitle}</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center leading-loose text-stone-600">{copy.eastWestBody}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {[copy.east, copy.west].map((side) => (
              <div key={side.label} className="rounded-2xl border border-stone-100 bg-white/80 p-8 backdrop-blur-sm">
                <p className="mb-4 text-xs tracking-[0.25em] text-[#9A7B4F]">{side.label}</p>
                <ul className="space-y-3 text-stone-600">
                  {side.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9A7B4F]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-stone-500">{copy.eastWestNote}</p>
        </div>
      </section>

      {/* 3. 從身體位置出發 */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-light text-[#4a5548] md:text-4xl">{copy.entryTitle}</h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {copy.entrySteps.map((s) => (
              <li key={s.step} className="rounded-2xl border border-stone-100 bg-white/80 p-7 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p className="mb-3 text-xs tracking-[0.25em] text-[#9A7B4F]">{s.step}</p>
                <h3 className="mb-3 font-serif text-xl text-[#4a5548]">{s.title}</h3>
                <p className="leading-relaxed text-stone-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. 六種觀察方式（真實截圖） */}
      <section className="bg-[#1b1d22] px-6 py-20 text-stone-200">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-light text-[#f2eee6] md:text-4xl">{copy.scenesTitle}</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {copy.scenes.map((scene) => (
              <article key={scene.title}>
                <figure className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#16181c]">
                  <Image src={scene.image} alt={scene.title} fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </figure>
                <h3 className="mb-2 font-serif text-2xl text-[#f2eee6]">{scene.title}</h3>
                <p className="leading-relaxed text-stone-300">{scene.body}</p>
                {scene.note && <p className="mt-2 text-sm leading-relaxed text-[#d2af6c]">{scene.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 內容一覽 */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-light text-[#4a5548] md:text-4xl">{copy.contentTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {copy.content.map((c) => (
              <div key={c.title} className="rounded-2xl border border-stone-100 bg-white/80 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-serif text-lg text-[#4a5548]">{c.title}</h3>
                <p className="text-sm leading-relaxed text-stone-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 兩個版本 */}
      <section className="bg-white/60 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-light text-[#4a5548] md:text-4xl">{copy.versionsTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {copy.versions.map((v) => (
              <div key={v.name} className="flex flex-col rounded-2xl border border-stone-100 bg-white/80 p-8 backdrop-blur-sm">
                <h3 className="mb-5 font-serif text-2xl text-[#4a5548]">{v.name}</h3>
                <ul className="mb-8 flex-1 space-y-3 text-stone-600">
                  {v.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9A7B4F]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href={to(v.href)} className="inline-flex min-h-11 items-center justify-center self-start rounded-full bg-[#4a5548] px-7 text-sm font-medium text-white transition-colors hover:bg-[#3a4538]">
                  {v.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 和 MUNI 一起用 */}
      <section className="bg-[#f6eef1] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-light text-[#4a5548] md:text-4xl">{copy.togetherTitle}</h2>
          <p className="mb-8 leading-loose text-stone-600">{copy.togetherBody}</p>
          <div className="flex flex-col items-center justify-center gap-6 text-sm sm:flex-row">
            {copy.togetherLinks.map((l) => (
              <Link key={l.href} href={to(l.href, l.external)} className="inline-flex min-h-11 items-center border-b border-[#9b295a] text-[#9b295a] transition-colors hover:text-[#4a5548]">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 聲明 */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white/70 p-8">
          <h2 className="mb-4 font-serif text-xl text-[#4a5548]">{copy.noticeTitle}</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-stone-600">
            {copy.notice.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
