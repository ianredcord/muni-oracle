import type { Metadata } from "next";
import ObservatoryLanding from "./ObservatoryLanding";

import { notFound } from "next/navigation";



import { isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

// 筋膜觀察室介紹頁：先說明工具是什麼、能看什麼，再進入 3D 工作台（/pro）或簡易版（-lite）。

type Scene = { video?: string; image: string; title: string; body: string; note?: string };
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
      "以 3D 人體探索筋膜、經絡、穴位與解剖層次，從身體位置出發，對照肌肉、牽涉痛與筋膜路線。不同知識系統在同一具人體上一起觀察。研究預覽，內容未經專業校核。",
    eyebrow: "FASCIA OBSERVATORY · 3D 人體",
    title: "筋膜觀察室",
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
      { image: `${IMG}/01-meridians-all.webp`, video: `${IMG}/01-meridians-flow.webm`, title: "全身經脈，一起循行", body: "十二正經、奇經八脈與現有穴位一起顯示，以正面微側的視角觀察全身路線與流光。可暫停影片，仔細比較位置。", note: "流光為沿現有模型路線播放的示意；方向與銜接未校核。男性模型仍缺少 4 個胃經路段。" },
      { image: `${IMG}/02-anatomy-split.webp`, title: "一半骨骼器官，一半肌肉", body: "同一具人體、同一個鏡頭：左半呈現骨骼與內臟器官，右半呈現肌肉與肌腱，對照表層與深層的空間關係。", note: "此圖由工作台兩個分層畫面合成，並非工作台目前的半身切割功能。" },
      { image: `${IMG}/03-tung-hand-close.webp`, title: "董氏奇穴 · 手與前臂近看", body: "放大一一手指、二二手掌、三三下臂三個部位，直接看穴位標記與繁體穴名。進入工作台後可旋轉到手背，查看另一側點位。", note: "取自現有模型；單一角度無法呈現手背與前臂背側的全部點位。" },
      { image: `${IMG}/04-anatomy-trains.jpg`, title: "筋膜路線學習", body: "解剖列車 12 條路線：看整條、分段近看、選側別，對照肌肉、骨性附著面、肌腱與來源原圖。藍色肌肉、白色肌腱是它的視覺語言。", note: "缺件處為教學補建並有標示。" },
      { image: `${IMG}/05-trigger-points.jpg`, title: "牽涉痛探索", body: "從疼痛位置或症狀找相關肌肉，開啟激痛點標記與紅色牽涉痛分布示意，再對照來源原圖。", note: "紅色為分布示意，不是已證實的傳導路徑；相關肌肉不等於病因。" },
      { image: `${IMG}/06-fm-points.webp`, title: "FM · 點位與連線", body: "以分類顏色觀察全身 FM 點位與連線，也可依部位、代碼與分類篩選，與其他內容層一起比較。", note: "422 個現有定位標記為待校對初稿；連線為點位關係示意，尚未經路徑或解剖驗證。" },
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
    metaTitle: "Fascia Observatory | Fascia, meridians and anatomy on one 3D body | MUNI",
    metaDescription:
      "Explore fascia, meridians, acupoints and anatomical layers on a 3D body. Compare muscles, referred pain and fascial lines across different knowledge systems. Research preview; content is not professionally verified.",
    eyebrow: "FASCIA OBSERVATORY · 3D BODY",
    title: "Fascia Observatory",
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
      { image: `${IMG}/01-meridians-all.webp`, video: `${IMG}/01-meridians-flow.webm`, title: "All meridians in motion", body: "Regular meridians, extraordinary vessels and existing points are displayed together in a front three-quarter view. Pause the video to compare positions.", note: "Flow is an illustration along existing routes; direction and continuity are unverified. Four male stomach-meridian segments are missing." },
      { image: `${IMG}/02-anatomy-split.webp`, title: "Bones & organs meet muscle", body: "The same body and camera: bones and organs on the left, muscle and tendon on the right.", note: "Composited from two workbench layers; this is not a live half-body clipping feature." },
      { image: `${IMG}/03-tung-hand-close.webp`, title: "Tung points · Hand & forearm", body: "A close-up of regions 11, 22 and 33: fingers, palm and forearm, with the existing point markers and Traditional Chinese labels.", note: "Rotate in the workbench to inspect dorsal points hidden from this view." },
      { image: `${IMG}/04-anatomy-trains.jpg`, title: "Fascial line learning", body: "Twelve Anatomy Trains lines: whole line, segment close-ups, side selection, compared with muscles, bony stations, tendons and the source plates. Blue muscle and white tendon is its visual language.", note: "Missing parts are teaching reconstructions and are labelled." },
      { image: `${IMG}/05-trigger-points.jpg`, title: "Referred-pain exploration", body: "Find related muscles from a pain location or symptom, show trigger-point markers and red referred-pain sketches, then check the source figure.", note: "Red areas are distribution sketches, not proven pathways; a related muscle is not a cause." },
      { image: `${IMG}/06-fm-points.webp`, title: "FM points & connections", body: "Explore FM points and connections by category colour, body region and code.", note: "Existing placements and connections are preliminary illustrations awaiting review." },
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
