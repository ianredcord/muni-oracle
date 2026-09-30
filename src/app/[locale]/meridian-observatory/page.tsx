import type { Metadata } from "next";
import ObservatoryLanding from "./ObservatoryLanding";

import { notFound } from "next/navigation";



import { isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

// 筋膜觀察室介紹頁：先說明工具是什麼、能看什麼，再進入 3D 工作台（/pro）或簡易版（-lite）。

type Scene = { video?: string; videoMp4?: string; image: string; title: string; body: string; note?: string };
export type Copy = {
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
    metaTitle: "筋膜觀察室｜3D 人體上的經絡、筋膜與解剖 | MUNI 牟尼",
    metaDescription:
      "以 3D 人體探索筋膜、經絡、穴位與解剖層次，從身體位置出發，對照肌肉、激痛點與筋膜路線。在同一具人體上，觀察不同知識系統的空間關係。研究預覽，內容未經專業校核。",
    eyebrow: "FASCIA OBSERVATORY · 3D 人體",
    title: "筋膜觀察室",
    tagline: "以 3D 人體探索經絡、穴位與解剖層次，從身體位置出發，對照肌肉、激痛點與筋膜路線。",
    lead: "你不必先知道肌肉或穴位的名字。從一個身體部位開始，逐步縮小範圍，在同一具人體上查看相關的經絡、肌肉、筋膜路線與激痛點標記。",
    preview: "研究預覽 · 點位與內容未經專業校核，僅供學習與觀察",
    ctaPro: "進入 PRO 工作台",
    ctaLite: "先試簡易版",
    proNote: "桌機與平板適合使用 PRO，深入觀察各個層次；手機可先從簡易版開始。",
    eastWestTitle: "經絡描繪能量的流向，筋膜承載身體的張力。兩種語言，在同一具人體上對照。",
    eastWestBody:
      "從經絡與董氏奇穴，到解剖列車、FM 點位與激痛點，不同的身體知識在同一具 3D 人體上展開。透過分層、旋轉與疊加，觀察彼此的位置關係，也保留各自的理論脈絡。",
    east: { label: "東方", items: ["十二正經、奇經八脈、經外奇穴", "經別、經筋、皮部、絡脈", "董氏奇穴：十二部位、208 個穴組"] },
    west: { label: "西方", items: ["解剖列車 12 條筋膜路線", "激痛點：111 組示意", "FM 筋膜相關點位與連線", "皮膚、肌肉、骨骼等解剖分層"] },
    eastWestNote: "共用人體座標，讓不同內容可以對照位置；經絡、筋膜路線與激痛點仍有各自的理論與臨床意義。觀察室供學習與觀察，不提供診斷或處方。",
    entryTitle: "從身體位置出發，逐層縮小範圍。",
    entrySteps: [
      { step: "01", title: "選一個部位", body: "在 3D 人體上點選，或從部位清單選擇頭頸、肩背、胸腹、腰骶與四肢。" },
      { step: "02", title: "聚焦想了解的位置", body: "進一步選擇細部位或疼痛位置，縮小顯示範圍，讓眼前的結構更清楚。" },
      { step: "03", title: "逐層觀察與比較", body: "逐一查看相關肌肉、經絡穴位、筋膜路線與激痛點標記。隨時可以回到全身、切換部位，或清除選取重新探索。" },
    ],
    scenesTitle: "六種觀察方式",
    scenes: [
      { image: `${IMG}/01-meridians-all.webp`, video: `${IMG}/01-meridians-flow.webm`, videoMp4: `${IMG}/01-meridians-flow.mp4`, title: "全身經脈 · 循行觀察", body: "將十二正經、奇經八脈與模型中現有的穴位疊加顯示，從正面略帶側角的視角，觀察全身路線與循行動畫。暫停影片，就能仔細對照位置。", note: "循行動畫沿現有模型路線播放，方向與路段銜接尚未完成校核；男性模型仍缺少 4 個胃經路段。" },
      { image: `${IMG}/02-anatomy-split.webp`, title: "表層與深層 · 肌肉、骨骼與器官", body: "以相同人體與視角並列兩種分層畫面：左側呈現骨骼與內臟器官，右側呈現肌肉與肌腱，讓表層與深層的空間關係更容易理解。", note: "此圖由工作台的兩個分層畫面合成；目前工作台尚未提供半身切割功能。" },
      { image: `${IMG}/03-tung-hand-close.webp`, title: "董氏奇穴 · 手與前臂近看", body: "放大一一部位（手指）、二二部位（手掌）與三三部位（下臂），近看穴位標記與繁體穴名。進入工作台後，可旋轉模型，查看手背與前臂背側的點位。", note: "畫面取自現有模型；此視角無法同時呈現手背與前臂背側的全部點位。" },
      { image: `${IMG}/04-trains-fullscreen.webp`, title: "解剖列車 · 淺背線全身觀察", body: "從背面略帶側角的視角，沿頭後、背部與腿後一路觀察至足跟，對照藍色肌肉、白色肌腱與骨骼的位置關係。工作台提供 12 條路線，可切換、分段近看，並對照來源原圖。", note: "模型缺少的構件以教學補建呈現，並保留補建標示。" },
      { image: `${IMG}/05-trigger-fullscreen.webp`, title: "激痛點 · 肩背近看", body: "以岡下肌為例，從背面略帶側角的視角，近看粉紅色 × 候選激痛點及其周圍的肌肉結構。在工作台中，可依疼痛位置或症狀查找相關肌肉，再對照來源原圖。", note: "紅色區域為疼痛分布示意，並非已證實的傳導路徑；列出的相關肌肉也不代表已確認的病因。" },
      { image: `${IMG}/06-fm-points.webp`, title: "FM · 點位與連線", body: "透過分類顏色辨識全身 FM 點位與連線，依部位、代碼或分類篩選，也能與其他圖層疊加比較。", note: "目前有 218 筆點位資料，對應 422 個定位標記，皆為待校對初稿。連線僅表示點位關係，尚未完成路徑與解剖驗證。" },
    ],
    contentTitle: "目前可觀察的內容",
    content: [
      { title: "經脈與穴位", body: "十二正經、奇經八脈、經外奇穴，以及經別、經筋、皮部、絡脈分類；可用範圍依實際素材而定。" },
      { title: "董氏奇穴", body: "十二部位、208 個穴組名稱；穴組數不等同模型上的點數。" },
      { title: "FM 點位", body: "筋膜相關點位與示意連線的觀察模組。" },
      { title: "激痛點", body: "111 組目錄、434 個示意標記，0 組完成專業校核；來源原圖可離線放大。" },
      { title: "解剖列車", body: "12 條筋膜路線，含骨性附著面與補建止點腱，依 Anatomy Trains 對照。" },
      { title: "解剖分層", body: "皮膚、肌肉、骨骼等圖層，透明度可調、可聚焦；男女模型可切換，女性解剖素材較少。" },
    ],
    versionsTitle: "兩個版本",
    versions: [
      { name: "簡易版", href: "/meridian-observatory-lite", cta: "進入簡易版", points: ["一次專注一條經脈及其穴位", "介面簡潔、載入輕量，適合手機瀏覽", "適合初次認識經絡循行"] },
      { name: "PRO", href: "/meridian-observatory/pro", cta: "進入 PRO", points: ["整合經脈穴位、董氏奇穴、FM、激痛點、解剖列車與解剖分層", "左側選工具、右側複選經絡、底部快速查找穴位", "支援分段近看、來源原圖對照，以及背景與字級調整"] },
    ],
    togetherTitle: "回到自己，從一張牌開始。",
    togetherBody: "抽一張牟尼牌卡，覺察此刻的自己。聞牟尼香，給自己片刻停留；使用 Fascia Point 筋膜貼時，留意身體的感受。再到筋膜觀察室，理解那個位置周圍的結構。最後，記下感受，把覺察帶回日常。",
    togetherLinks: [
      { href: "/muni-scent", label: "認識牟尼香" },
      { href: "/fascia-point", label: "認識 Fascia Point 筋膜貼", external: true },
    ],
    noticeTitle: "開始之前，請先了解",
    notice: [
      "觀察室目前為研究預覽。點位精度、示意區域在模型上的對應位置、與原圖的一致性，以及補建構件仍在持續校核；畫面保留「待校核」「補建」「示意」等標示，方便辨識內容狀態。",
      "內容僅供學習與位置觀察，不作為診斷、治療或筋膜貼貼用位置的依據。如有身體不適，請諮詢專業人員。",
      "解剖列車路線參照 Thomas W. Myers《Anatomy Trains》；激痛點的參考來源列於各肌肉頁面。",
    ],
  },
  en: {
    metaTitle: "Fascia Observatory | Fascia, meridians and anatomy on one 3D body | MUNI",
    metaDescription:
      "Explore fascia, meridians, acupoints and anatomical layers on a 3D body. Compare muscles, trigger points and fascial lines across different knowledge systems. Research preview; content is not professionally verified.",
    eyebrow: "FASCIA OBSERVATORY · 3D BODY",
    title: "Fascia Observatory",
    tagline: "Explore meridians, acupoints and anatomical layers on a 3D body — start from a place on the body and compare muscles, trigger points and fascial lines.",
    lead: "You don't need to know the name of a muscle or a point first. Tap a region, narrow it down step by step, and the related meridians, muscles, fascial lines and trigger-point markers appear on the same body.",
    preview: "Research preview · points and content are not professionally verified · viewer interface is in Chinese",
    ctaPro: "Open the PRO workbench",
    ctaLite: "Try the Lite version",
    proNote: "PRO is best on desktop and tablet; on a phone, start with Lite.",
    eastWestTitle: "Meridians map the flow of energy; fascia carries the body’s tension. Two languages, side by side on one body.",
    eastWestBody:
      "Meridians and Tung's extraordinary points are an Eastern map of the body; Anatomy Trains, FM points and trigger points are Western views of fascia and muscle. The Observatory places them on the same 3D body and the same coordinates, so you can select, rotate and compare them together — which is what sets it apart from a meridian chart or an anatomy app.",
    east: { label: "East", items: ["12 regular meridians, 8 extraordinary vessels, extra points", "Divergent channels, sinew channels, cutaneous regions, collaterals", "Tung's points: 12 regions, 208 point groups"] },
    west: { label: "West", items: ["12 Anatomy Trains fascial lines", "Trigger points: 111 groups", "FM fascia-related points and lines", "Anatomical layers: skin, muscle, bone and more"] },
    eastWestNote: "Sharing one set of body coordinates does not make meridians, fascial lines and trigger points equivalent in theory or clinical meaning. The Observatory compares positions; it does not diagnose or prescribe.",
    entryTitle: "Start from the body and narrow down.",
    entrySteps: [
      { step: "01", title: "Tap a region", body: "Pick a place on the 3D body or start from the main regions: head and neck, shoulders and back, chest and abdomen, pelvis, limbs." },
      { step: "02", title: "Narrow it down", body: "Choose a sub-region or a pain location. Narrow the display to make the structures easier to see." },
      { step: "03", title: "Explore related structures", body: "Related muscles, meridians and points, fascial lines and trigger-point markers unfold one by one. You can always return to the whole body, switch region or clear the selection." },
    ],
    scenesTitle: "Six ways to observe",
    scenes: [
      { image: `${IMG}/01-meridians-all.webp`, video: `${IMG}/01-meridians-flow.webm`, videoMp4: `${IMG}/01-meridians-flow.mp4`, title: "All meridians in motion", body: "Regular meridians, extraordinary vessels and existing points are displayed together in a front three-quarter view. Pause the video to compare positions.", note: "Flow is an illustration along existing routes; direction and continuity are unverified. Four male stomach-meridian segments are missing." },
      { image: `${IMG}/02-anatomy-split.webp`, title: "Surface & depth · Muscles, bones & organs", body: "The same body and camera: bones and organs on the left, muscle and tendon on the right.", note: "Composited from two workbench layers; this is not a live half-body clipping feature." },
      { image: `${IMG}/03-tung-hand-close.webp`, title: "Tung points · Hand & forearm", body: "A close-up of regions 11, 22 and 33: fingers, palm and forearm, with the existing point markers and Traditional Chinese labels.", note: "Rotate in the workbench to inspect dorsal points hidden from this view." },
      { image: `${IMG}/04-trains-fullscreen.webp`, title: "Anatomy Trains · Superficial Back Line", body: "A rear oblique view follows the Superficial Back Line from the back of the head to the heels, showing blue muscles, white tendons and their relationship to the skeleton. In the workbench, explore 12 lines, zoom into segments and compare them with source figures.", note: "Missing parts are teaching reconstructions and are labelled." },
      { image: `${IMG}/05-trigger-fullscreen.webp`, title: "Trigger points · Shoulder close-up", body: "A close-up of the infraspinatus shows pink × candidate trigger points and the surrounding muscle structures. In the workbench, search by pain location or symptom to explore related muscles and compare them with source figures.", note: "Red areas are distribution sketches, not proven pathways; a related muscle is not a cause." },
      { image: `${IMG}/06-fm-points.webp`, title: "FM points & connections", body: "Explore FM points and connections by category colour, body region and code.", note: "218 point records correspond to 422 existing placement markers. Placements and connections are preliminary illustrations awaiting review." },
    ],
    contentTitle: "What you can observe today",
    content: [
      { title: "Meridians and points", body: "Regular meridians, extraordinary vessels, extra points, plus divergent, sinew, cutaneous and collateral categories; coverage depends on the available models." },
      { title: "Tung's points", body: "Twelve regions and 208 point-group names; group count is not the number of points on the model." },
      { title: "FM points", body: "An observation module for fascia-related points and lines." },
      { title: "Trigger points", body: "111 catalogue groups, 434 illustrative markers, none professionally verified yet; source figures can be enlarged offline." },
      { title: "Anatomy Trains", body: "Twelve fascial lines with bony stations and reconstructed tendons, compared with Anatomy Trains." },
      { title: "Anatomical layers", body: "Skin, muscle, bone and other layers with transparency and focus; male and female models, with fewer anatomy assets for the female model." },
    ],
    versionsTitle: "Two versions",
    versions: [
      { name: "Lite", href: "/meridian-observatory-lite", cta: "Open Lite", points: ["One meridian and its points at a time", "A simple, lightweight interface suited to phones", "A good first look at meridian pathways"] },
      { name: "PRO", href: "/meridian-observatory/pro", cta: "Open PRO", points: ["All content layers: meridians, Tung, FM, trigger points, Anatomy Trains, anatomy", "Three-rail workbench: tools on the left, meridian selection on the right, point quick-select below", "Segment close-ups, source figures, background and text-size settings"] },
    ],
    togetherTitle: "Return to yourself, beginning with a card.",
    togetherBody: "Draw a MUNI card and notice how you feel now. Pause with MUNI Scent, then pay attention to your body when using a Fascia Point patch. Explore the structures around that area in the Fascia Observatory. Finally, record your feelings and bring that awareness into everyday life.",
    togetherLinks: [
      { href: "/muni-scent", label: "About MUNI Scent" },
      { href: "/fascia-point", label: "About Fascia Point", external: true },
    ],
    noticeTitle: "Before you begin",
    notice: [
      "This is a research preview: point accuracy, illustrative-area placement, figure consistency and reconstructed parts are still being checked, and labels such as 'pending review', 'reconstructed' and 'sketch' stay on screen.",
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
    image: `https://munione.co${IMG}/01-meridians-all.webp`,
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
  return <ObservatoryLanding locale={locale} copy={copy} />;
}
