import type { Metadata } from "next";
import Link from "next/link";
import { RelatedLinks } from "@/components/flow-system";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "FPS 臨床速查卡 | MAX 內部系統",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Helper components                                                  */
/* ------------------------------------------------------------------ */

function SomDot({ color }: { color: "orange" | "blue" }) {
  return (
    <span
      className={`inline-block w-3 h-3 rounded-full border ${
        color === "orange"
          ? "bg-[#da7101] border-[#c06000]"
          : "bg-[#006494] border-[#004d73]"
      }`}
    />
  );
}

function Badge({
  variant,
  children,
}: {
  variant: "wood" | "fire" | "blue" | "orange";
  children: React.ReactNode;
}) {
  const styles = {
    wood: "bg-[#2e7d32] text-white",
    fire: "bg-[#c62828] text-white",
    blue: "bg-[#006494] text-white",
    orange: "bg-[#da7101] text-white",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SpeedCardPage() {
  return (
    <>
      {/* Print styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              @page { size: A4 landscape; margin: 8mm; }
              body { background: #fff !important; }
              .print\\:hidden { display: none !important; }
              .print-card { break-inside: avoid; }
              nav, footer, .back-link, .internal-badge { display: none !important; }
            }
          `,
        }}
      />

      <div className="min-h-screen bg-[#F9F7F2] print:bg-white">
        {/* Internal badge */}
        <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm internal-badge print:hidden">
          內部測試版
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 print:py-2 print:px-0 print:max-w-none">
          {/* Back link + Print button */}
          <div className="flex items-center justify-between mb-6 print:hidden back-link">
            <Link
              href="/internal/flow-system"
              className="inline-flex items-center gap-1.5 text-sm text-[#4a5548]/50 hover:text-[#4a5548] transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              返回系統首頁
            </Link>
            <PrintButton />
          </div>

          {/* Card Header */}
          <div className="print-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2 border-[#4a5548] pb-3 mb-6 print:mb-3">
              <div>
                <h1 className="font-serif text-2xl md:text-3xl print:text-xl text-[#4a5548] tracking-tight font-bold">
                  FPS 形氣精神四層一體 臨床速查卡
                </h1>
                <p className="text-sm text-[#4a5548]/60 mt-1">
                  Somaniks 11 片 + CF 手法 3 區 + 呼吸引導 = 32 分鐘全身處方
                </p>
              </div>
              <span className="text-xs text-[#4a5548]/40 mt-2 sm:mt-0">
                v2 · 2026.04
              </span>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 print:gap-2 print:grid-cols-3 print:text-[9px]">
              {/* COLUMN 1: Assessment + Typing */}
              <div className="space-y-4 print:space-y-2">
                {/* Decision Flow */}
                <div className="rounded-2xl bg-stone-100/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-5 print:p-2 print:rounded-md border-l-4 border-l-[#4a5548]">
                  <h2 className="text-base print:text-[10px] font-bold text-[#4a5548] mb-3 pb-2 border-b border-stone-200">
                    1. 分型判斷（30秒）
                  </h2>

                  {/* Step 1 */}
                  <div className="flex items-start gap-2 mb-1">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4a5548] text-white text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <p className="text-sm print:text-[8.5px] text-[#4a5548]">
                      有外感（發熱惡寒脈浮）？→{" "}
                      <strong>暫不做 CF</strong> · 只貼遠端 Somaniks
                    </p>
                  </div>
                  <p className="text-xs text-[#4a5548]/40 ml-7 mb-1">↓ 無</p>

                  {/* Step 2 */}
                  <div className="flex items-start gap-2 mb-1">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4a5548] text-white text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <p className="text-sm print:text-[8.5px] text-[#4a5548]">
                      上面有火？
                      <span className="text-red-700 font-bold">面紅</span> /{" "}
                      <span className="text-red-700 font-bold">目赤</span> /{" "}
                      <span className="text-red-700 font-bold">頭脹</span> /{" "}
                      <span className="text-red-700 font-bold">舌紅尖赤</span> /{" "}
                      <span className="text-red-700 font-bold">咬肌緊</span>？
                    </p>
                  </div>
                  <p className="text-xs text-[#4a5548]/40 ml-7 mb-1">↓ 有火</p>
                  <div className="ml-7 mb-1 text-sm print:text-[8.5px] text-[#4a5548]">
                    <p>
                      → 坎也枯（腰冷 + 潮熱）？→{" "}
                      <Badge variant="blue">坎離型</Badge> 先交坎離
                    </p>
                    <p>
                      → 坎不枯？→ <Badge variant="fire">火逆型</Badge>{" "}
                      先降右 0 + 0.5 優先
                    </p>
                  </div>
                  <p className="text-xs text-[#4a5548]/40 ml-7 mb-1">↓ 無火</p>

                  {/* Step 3 */}
                  <div className="flex items-start gap-2 mb-1">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4a5548] text-white text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <p className="text-sm print:text-[8.5px] text-[#4a5548]">
                      中間堵？痰濕（苔厚膩）→ 清中土 / 血瘀（少腹痛經暗）→ 先化瘀
                    </p>
                  </div>
                  <p className="text-xs text-[#4a5548]/40 ml-7 mb-1">↓ 不堵</p>

                  {/* Step 4 */}
                  <div className="flex items-start gap-2 mb-1">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4a5548] text-white text-xs font-bold flex items-center justify-center">
                      4
                    </span>
                    <p className="text-sm print:text-[8.5px] text-[#4a5548]">
                      有鬱？（脅脹嘆氣情緒抑鬱）→{" "}
                      <Badge variant="wood">木鬱型</Badge> 先疏木
                    </p>
                  </div>
                  <p className="text-xs text-[#4a5548]/40 ml-7 mb-1">↓ 無鬱</p>

                  {/* Step 5 */}
                  <div className="flex items-start gap-2 mb-1">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4a5548] text-white text-xs font-bold flex items-center justify-center">
                      5
                    </span>
                    <p className="text-sm print:text-[8.5px] text-[#4a5548]">
                      根枯？（極度疲倦畏寒腰膝痠軟）→ 先培坎陽
                    </p>
                  </div>
                  <p className="text-xs text-[#4a5548]/40 ml-7 mb-1">
                    ↓ 以上皆無
                  </p>

                  {/* Step 6 */}
                  <div className="flex items-start gap-2 mb-2">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4a5548] text-white text-xs font-bold flex items-center justify-center">
                      6
                    </span>
                    <p className="text-sm print:text-[8.5px] text-[#4a5548]">
                      <Badge variant="wood">默認木鬱型</Badge> 先升左 1-2-3 優先
                    </p>
                  </div>

                  <p className="text-xs text-[#4a5548]/50 border-t border-stone-200 pt-2 mt-2">
                    急則治標 → 險則避害 → 堵則疏通 → 枯則培根 → 常態歸本
                  </p>
                </div>

                {/* Wood-stagnation config */}
                <div className="rounded-2xl bg-green-50/80 backdrop-blur-sm border border-green-200/50 shadow-sm p-5 print:p-2 print:rounded-md border-l-4 border-l-green-700">
                  <h2 className="text-base print:text-[10px] font-bold text-[#4a5548] mb-3 flex items-center gap-2">
                    <Badge variant="wood">木鬱</Badge> 萬用三穴配色
                  </h2>
                  <table className="w-full text-sm print:text-[8px]">
                    <tbody>
                      <tr className="border-b border-green-200/50">
                        <td className="py-1.5 text-[#4a5548]">太衝 LR3</td>
                        <td className="py-1.5">
                          <SomDot color="orange" />{" "}
                          <span className="text-[#da7101] font-bold">橘</span>
                          （補木升）
                        </td>
                      </tr>
                      <tr className="border-b border-green-200/50">
                        <td className="py-1.5 text-[#4a5548]">公孫 SP4</td>
                        <td className="py-1.5">
                          <SomDot color="orange" />{" "}
                          <span className="text-[#da7101] font-bold">橘</span>
                          （補中土）
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-[#4a5548]">內關 PC6</td>
                        <td className="py-1.5">
                          <SomDot color="blue" />{" "}
                          <span className="text-[#006494] font-bold">藍</span>
                          （瀉火助降）
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-green-700 mt-2">
                    方劑：達鬱湯 + 黃芽湯 | 操作：1-2-3 優先（由下往上）
                  </p>
                </div>

                {/* Fire-reversal config */}
                <div className="rounded-2xl bg-red-50/80 backdrop-blur-sm border border-red-200/50 shadow-sm p-5 print:p-2 print:rounded-md border-l-4 border-l-red-700">
                  <h2 className="text-base print:text-[10px] font-bold text-[#4a5548] mb-3 flex items-center gap-2">
                    <Badge variant="fire">火逆</Badge> 萬用三穴配色
                  </h2>
                  <table className="w-full text-sm print:text-[8px]">
                    <tbody>
                      <tr className="border-b border-red-200/50">
                        <td className="py-1.5 text-[#4a5548]">太衝 LR3</td>
                        <td className="py-1.5">
                          <SomDot color="blue" />{" "}
                          <span className="text-[#006494] font-bold">藍</span>
                          （瀉木火上沖）
                        </td>
                      </tr>
                      <tr className="border-b border-red-200/50">
                        <td className="py-1.5 text-[#4a5548]">公孫 SP4</td>
                        <td className="py-1.5">
                          <SomDot color="orange" />{" "}
                          <span className="text-[#da7101] font-bold">橘</span>
                          （補中土）
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-[#4a5548]">內關 PC6</td>
                        <td className="py-1.5">
                          <SomDot color="orange" />{" "}
                          <span className="text-[#da7101] font-bold">橘</span>
                          （斂火歸元）
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-red-700 mt-2">
                    方劑：地魄湯 | 操作：0 + 0.5 優先（先降火）+ 加 Step 0.5 顳筋膜
                  </p>
                </div>

                {/* Gongsun always orange */}
                <div className="rounded-2xl bg-purple-50/80 backdrop-blur-sm border border-purple-200/50 shadow-sm p-5 print:p-2 print:rounded-md border-l-4 border-l-purple-700">
                  <h2 className="text-base print:text-[10px] font-bold text-purple-800 mb-2">
                    公孫永遠橘
                  </h2>
                  <p className="text-sm print:text-[8px] text-[#4a5548]">
                    中土永遠需要補——黃元御「四維之病悉因于中氣」。不論木鬱火逆，公孫都貼{" "}
                    <SomDot color="orange" /> 橘。
                  </p>
                </div>
              </div>

              {/* COLUMN 2: Protocol */}
              <div className="space-y-4 print:space-y-2">
                {/* Step 0 */}
                <div className="rounded-2xl bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 shadow-sm p-5 print:p-2 print:rounded-md border-l-4 border-l-[#006494]">
                  <h2 className="text-base print:text-[10px] font-bold text-[#4a5548] mb-3 pb-2 border-b border-blue-200/50">
                    2. Step 0 環境預設（3-5min）
                  </h2>

                  <h3 className="text-sm print:text-[8.5px] font-bold text-[#4a5548]/80 mb-2">
                    0a 顱端（降交感 + 升迷走）
                  </h3>
                  <table className="w-full text-sm print:text-[8px] mb-3">
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="py-1 text-[#4a5548]">C6 棘突旁</td>
                        <td className="py-1">
                          <SomDot color="blue" /> x2
                        </td>
                        <td className="py-1 text-[#4a5548]/60">
                          星狀神經節 ↓
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 text-[#4a5548]">C2 枕下</td>
                        <td className="py-1">
                          <SomDot color="blue" /> x2
                        </td>
                        <td className="py-1 text-[#4a5548]/60">
                          NTS → 迷走 ↑ + TCC 抑制
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h3 className="text-sm print:text-[8.5px] font-bold text-[#4a5548]/80 mb-2">
                    0c 骶端（骶段副交感）
                  </h3>
                  <table className="w-full text-sm print:text-[8px] mb-3">
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="py-1 text-[#4a5548]">
                          次髎 BL32 + 中髎 BL33
                        </td>
                        <td className="py-1">
                          <SomDot color="blue" /> x2
                        </td>
                        <td className="py-1 text-[#4a5548]/60">
                          S2-S4 副交感直通車
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 text-[#4a5548]">長強 GV1</td>
                        <td className="py-1">
                          <SomDot color="orange" /> x1
                        </td>
                        <td className="py-1 text-[#4a5548]/60">督脈起點</td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="text-xs text-[#006494]">
                    古典：「泄寒水以達風木」（骨空論）
                    <br />
                    分子：NE ↓ → TNF-alpha ↓ → hyaluronidase ↓（關水龍頭）
                  </p>
                </div>

                {/* Step 1 */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-5 print:p-2 print:rounded-md border-l-4 border-l-[#da7101]">
                  <h2 className="text-base print:text-[10px] font-bold text-[#da7101] mb-2">
                    3. Step 1 遠端 Somaniks（1min）
                  </h2>
                  <p className="text-sm print:text-[8px] text-[#4a5548] mb-2">
                    萬用三穴按分型配色（見左欄）· 左右各一 = 6 片
                  </p>
                  <div className="text-xs text-[#4a5548]/60 space-y-0.5">
                    <p>太衝 = 木升起動（厥陰入穴 +「絡諸筋」遠端）</p>
                    <p>公孫 = 中土左旋（衝脈 + 脾絡）</p>
                    <p>內關 = 火降歸元（陰維 + 心包絡）</p>
                  </div>
                </div>

                {/* Step 2 CF */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-5 print:p-2 print:rounded-md border-l-4 border-l-green-700 flex-1">
                  <h2 className="text-base print:text-[10px] font-bold text-green-700 mb-3">
                    4. Step 2 CF 手法 3 區（26min）
                  </h2>

                  <h3 className="text-sm print:text-[8.5px] font-bold text-[#4a5548]/80 mb-1">
                    A. 膕窩 CF ge-re = 委中 BL40（10min）
                  </h3>
                  <div className="text-sm print:text-[8px] text-[#4a5548] mb-3">
                    <p>
                      <strong>CP 第 1</strong>：6 足經筋結膝 + HA90 + 經別第一離穴 +
                      太陽開
                    </p>
                    <p className="text-[#4a5548]/60">
                      位置：膕橫紋中央 + 兩側肌腱間
                    </p>
                    <p className="text-[#4a5548]/60">
                      手法：深壓 + 切向力 · 以痛為輸 · 以知為數
                    </p>
                  </div>

                  <h3 className="text-sm print:text-[8.5px] font-bold text-[#4a5548]/80 mb-1">
                    B. 腹股溝 CF cx-la = 環跳 GB30（10min）
                  </h3>
                  <div className="text-sm print:text-[8px] text-[#4a5548] mb-3">
                    <p>
                      <strong>CP 第 2</strong>：6 足經筋聚髀 + HA~90 + 木升起動點 + 4
                      經別
                    </p>
                    <p className="text-[#4a5548]/60">
                      位置：大轉子與骶骨裂孔連線外 1/3
                    </p>
                    <p className="text-[#4a5548]/60">手法：側臥 · 深壓 + 切向力</p>
                  </div>

                  <h3 className="text-sm print:text-[8.5px] font-bold text-[#4a5548]/80 mb-1">
                    C. 腋窩 CF sc-an = 極泉 HT1 附近（6min）
                  </h3>
                  <div className="text-sm print:text-[8px] text-[#4a5548] mb-3">
                    <p>
                      <strong>CP 第 3</strong>：6 手經筋入腋 + 手三陰經別入穴（心 +
                      心包 + 肺）
                    </p>
                    <p className="text-[#4a5548]/60">
                      位置：腋前壁 · 胸小肌附著處深層
                    </p>
                    <p className="text-[#4a5548]/60">
                      手法：仰臥舉臂 · 深壓腋前壁
                    </p>
                  </div>

                  <div className="rounded-lg bg-green-50 p-3 text-xs print:text-[7.5px]">
                    <p className="text-green-700 font-bold">
                      CF 後仍異常？
                      <span className="font-normal text-[#4a5548]">
                        {" "}
                        加 CC：殷門（腘繩）/ 伏兔（股四頭）/ 大包（前鋸）
                      </span>
                    </p>
                    <p className="text-green-700 font-bold mt-1">
                      跨中線症狀？
                      <span className="font-normal text-[#4a5548]">
                        {" "}
                        沿螺旋到對側 CF 操作（右膕窩緊 + 左肩僵 → 右 ge-re + 左
                        sc-re）
                      </span>
                    </p>
                  </div>
                </div>

                {/* Step 5 breathing */}
                <div className="rounded-2xl bg-teal-50/80 backdrop-blur-sm border border-teal-200/50 shadow-sm p-5 print:p-2 print:rounded-md border-l-4 border-l-teal-700">
                  <h2 className="text-base print:text-[10px] font-bold text-teal-800 mb-2">
                    5. 膈帶呼吸引導（3min）
                  </h2>
                  <p className="text-sm print:text-[8px] text-[#4a5548]">
                    不用手法 · 引導深呼吸 = 膈肌自主鬆解 = 中土斡旋恢復
                  </p>
                  <p className="text-sm print:text-[8px] text-[#4a5548] font-medium mt-1">
                    吸 4 秒 → 屏 2 秒 → 呼 6 秒 x 15 次
                  </p>
                </div>
              </div>

              {/* COLUMN 3: Special + Verify + Quick ref */}
              <div className="space-y-4 print:space-y-2">
                {/* Step 0.5 Fire-reversal special */}
                <div className="rounded-2xl bg-red-50/80 backdrop-blur-sm border border-red-200/50 shadow-sm p-5 print:p-2 print:rounded-md border-l-4 border-l-red-700">
                  <h2 className="text-base print:text-[10px] font-bold text-[#4a5548] mb-3">
                    Step 0.5 火逆型專用
                  </h2>
                  <p className="text-sm print:text-[8px] text-red-700 font-bold mb-2">
                    僅火逆型加做（咬肌緊 + 太陽穴壓痛 + 磨牙 + 頭皮緊）
                  </p>
                  <div className="text-sm print:text-[8px] text-[#4a5548] space-y-1">
                    <p>1. 顳筋膜 CF（顴弓上 2cm 顳窩中央）</p>
                    <p>
                      2. 咬肌 <SomDot color="blue" /> 藍色（顴弓下 2cm = 頰車 ST6）
                    </p>
                    <p>3. 枕下肌群鬆解（切斷肌硬膜橋）</p>
                  </div>
                  <p className="text-xs text-red-700 mt-2">
                    → TCC 脫敏 → 頸段運動神經元 ↓ → 頸肩才能真正鬆
                  </p>
                </div>

                {/* Verification */}
                <div className="rounded-2xl bg-orange-50/80 backdrop-blur-sm border border-orange-300/60 shadow-sm p-5 print:p-2 print:rounded-md">
                  <h2 className="text-base print:text-[10px] font-bold text-[#4a5548] mb-3">
                    6. 驗證（望診）
                  </h2>
                  <table className="w-full text-sm print:text-[8px]">
                    <thead>
                      <tr className="border-b border-orange-200">
                        <th className="py-1 text-left text-[#4a5548]/60 font-medium text-xs">
                          指標
                        </th>
                        <th className="py-1 text-left text-[#4a5548]/60 font-medium text-xs">
                          改善 = 成功
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[#4a5548]">
                      <tr className="border-b border-orange-100/50">
                        <td className="py-1 font-medium">目神</td>
                        <td className="py-1">
                          呆滯 → 有光（經別合穴貫通）
                        </td>
                      </tr>
                      <tr className="border-b border-orange-100/50">
                        <td className="py-1 font-medium">面色</td>
                        <td className="py-1">
                          晦暗 → 潤澤 或 面紅 → 退紅
                        </td>
                      </tr>
                      <tr className="border-b border-orange-100/50">
                        <td className="py-1 font-medium">表情</td>
                        <td className="py-1">
                          緊繃 → 放鬆（腹側迷走上線）
                        </td>
                      </tr>
                      <tr className="border-b border-orange-100/50">
                        <td className="py-1 font-medium">呼吸</td>
                        <td className="py-1">淺快 → 深慢</td>
                      </tr>
                      <tr className="border-b border-orange-100/50">
                        <td className="py-1 font-medium">腹鳴</td>
                        <td className="py-1">有咕嚕聲 = 腸蠕動重啟</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-medium">手溫</td>
                        <td className="py-1">
                          冰冷 → 回暖（末梢循環改善）
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 32-minute timeline */}
                <div className="rounded-2xl bg-stone-50/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-5 print:p-2 print:rounded-md">
                  <h2 className="text-base print:text-[10px] font-bold text-[#4a5548] mb-3">
                    32 分鐘時間軸
                  </h2>
                  <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm print:text-[8px]">
                    <span className="text-right font-mono text-[#4a5548]/50 font-bold">
                      0:00
                    </span>
                    <span className="text-[#4a5548]">
                      Somaniks 11 片貼敷（0 + 1）
                    </span>
                    <span className="text-right font-mono text-[#4a5548]/50 font-bold">
                      3:00
                    </span>
                    <span className="text-[#4a5548]">
                      等 Step 0 生效（3-5min）
                    </span>
                    <span className="text-right font-mono text-[#4a5548]/50 font-bold">
                      5:00
                    </span>
                    <span className="text-[#4a5548]">
                      膕窩 CF x 兩側（10min）
                    </span>
                    <span className="text-right font-mono text-[#4a5548]/50 font-bold">
                      15:00
                    </span>
                    <span className="text-[#4a5548]">
                      腹股溝 CF x 兩側（10min）
                    </span>
                    <span className="text-right font-mono text-[#4a5548]/50 font-bold">
                      25:00
                    </span>
                    <span className="text-[#4a5548]">
                      腋窩 CF x 兩側（6min）
                    </span>
                    <span className="text-right font-mono text-[#4a5548]/50 font-bold">
                      31:00
                    </span>
                    <span className="text-[#4a5548]">
                      膈帶呼吸引導（3min）
                    </span>
                    <span className="text-right font-mono text-[#4a5548]/50 font-bold">
                      34:00
                    </span>
                    <span className="text-[#4a5548]">望診驗證 + 結束</span>
                  </div>
                </div>

                {/* Core logic */}
                <div className="rounded-2xl bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 shadow-sm p-5 print:p-2 print:rounded-md">
                  <h2 className="text-base print:text-[10px] font-bold text-[#4a5548] mb-3">
                    核心邏輯
                  </h2>
                  <table className="w-full text-sm print:text-[8px]">
                    <tbody className="text-[#4a5548]">
                      <tr className="border-b border-amber-100">
                        <td className="py-1.5 font-bold whitespace-nowrap">
                          先關水龍頭
                        </td>
                        <td className="py-1.5 text-[#4a5548]/70">
                          Step 0 降交感 = 停止切碎 HA + 停止驅動 myofibroblast
                        </td>
                      </tr>
                      <tr className="border-b border-amber-100">
                        <td className="py-1.5 font-bold whitespace-nowrap">
                          再擦地板
                        </td>
                        <td className="py-1.5 text-[#4a5548]/70">
                          CF 手法 = 物理性逆轉已存在的 HA gel
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold whitespace-nowrap">
                          確認沒漏
                        </td>
                        <td className="py-1.5 text-[#4a5548]/70">
                          望診 = 副交感貫通 → 經別合出現
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-[#4a5548]/50 mt-2 pt-2 border-t border-amber-100">
                    神（0 降交感）→ 氣（2 行氣解 HA）→ 形（5 鬆 myofibroblast）
                  </p>
                </div>

                {/* Safety warnings */}
                <div className="rounded-2xl bg-white backdrop-blur-sm border-2 border-red-400 shadow-sm p-5 print:p-2 print:rounded-md">
                  <h2 className="text-base print:text-[10px] font-bold text-red-700 mb-3">
                    安全提醒
                  </h2>
                  <ul className="text-sm print:text-[7.5px] text-[#4a5548] space-y-1.5 list-disc list-inside">
                    <li>
                      膕窩：「刺委中大脈令人仆脫色」→{" "}
                      <strong>避開膕動脈</strong>
                    </li>
                    <li>
                      腹股溝：「刺氣街中脈腫鼠仆」→{" "}
                      <strong>避開股動脈</strong>
                    </li>
                    <li>
                      少陰經筋：「筋折紐紐發數甚者死」→{" "}
                      <strong>脊柱深層輕柔</strong>
                    </li>
                    <li>
                      外感表證 →{" "}
                      <strong>不做 CF 手法</strong>（避免引邪入裡）
                    </li>
                    <li>
                      熱 · 筋縱（軟鬆熱）→{" "}
                      <strong>不用燔針/深壓</strong> · 改用橘色補法
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-stone-300 mt-6 pt-3 text-xs text-[#4a5548]/40 print:mt-2 print:pt-1">
              <span>形氣精神四層一體治療系統（FP-Somaniks）</span>
              <span>
                Somaniks 11 片 + CF 3 區 + 呼吸引導 = 32min = 12 經筋 + 6 經別 +
                一氣周流全覆蓋
              </span>
              <span>munione.co</span>
            </div>
          </div>
        </div>

        {/* Related Links (screen only) */}
        <div className="print:hidden mt-12 mb-8 max-w-5xl mx-auto px-4">
          <RelatedLinks
            links={[
              { label: "最高效處方流程", href: "/internal/flow-system/protocols" },
              { label: "六區臨床操作", href: "/internal/flow-system/six-zones" },
              { label: "核心三穴深度發展", href: "/internal/flow-system/core-discovery" },
              { label: "九區段穴位總圖", href: "/internal/flow-system/nine-zones" },
            ]}
          />
        </div>

        {/* Footer (screen only) */}
        <footer className="py-8 text-center print:hidden">
          <p className="text-xs text-[#4a5548]/40">
            內部測試版 — 請勿公開分享
          </p>
        </footer>
      </div>
    </>
  );
}
