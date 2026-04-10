"use client";

/**
 * SevenLayerRing — 七層同心圓 SVG 視覺元件
 * 由內到外：中氣 → 正經 → 經別 → 經筋 → 絡脈 → 奇經 → 花精+Somaniks
 * 每層獨立慢速旋轉動畫，方向交替
 */

const LAYERS = [
  { name: "中氣",   nameEn: "OS",           r: 36,  fill: "#f59e0b", opacity: 0.18, stroke: "#f59e0b", dur: "90s",  dir: "normal"  },
  { name: "正經",   nameEn: "Primary",       r: 58,  fill: "#ef4444", opacity: 0.12, stroke: "#ef4444", dur: "120s", dir: "reverse" },
  { name: "經別",   nameEn: "Divergent",     r: 80,  fill: "#a855f7", opacity: 0.10, stroke: "#a855f7", dur: "100s", dir: "normal"  },
  { name: "經筋",   nameEn: "Sinew",         r: 102, fill: "#f97316", opacity: 0.09, stroke: "#f97316", dur: "130s", dir: "reverse" },
  { name: "絡脈",   nameEn: "Collateral",    r: 124, fill: "#3b82f6", opacity: 0.08, stroke: "#3b82f6", dur: "110s", dir: "normal"  },
  { name: "奇經",   nameEn: "Extraordinary", r: 146, fill: "#eab308", opacity: 0.07, stroke: "#eab308", dur: "140s", dir: "reverse" },
  { name: "花精",   nameEn: "Flower+Soma",   r: 168, fill: "#ec4899", opacity: 0.06, stroke: "#ec4899", dur: "150s", dir: "normal"  },
];

const CX = 200;
const CY = 200;

export default function SevenLayerRing() {
  return (
    <div className="relative w-[260px] md:w-[360px] mx-auto overflow-visible">
      {/* Glow backdrop */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#9A7B4F]/10 via-[#006494]/5 to-[#da7101]/8 blur-[40px]" />

      <svg
        viewBox="0 0 400 400"
        className="relative w-full h-auto overflow-visible"
        aria-label="七層系統架構同心圓"
      >
        <defs>
          {/* Radial glow filter */}
          <filter id="ring-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Rotating animation keyframes via CSS */}
          <style>{`
            @keyframes ring-spin {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            .ring-layer {
              transform-origin: ${CX}px ${CY}px;
            }
            ${LAYERS.map((l, i) => `
              .ring-${i} {
                animation: ring-spin ${l.dur} linear infinite;
                animation-direction: ${l.dir};
              }
            `).join("")}

            @keyframes pulse-center {
              0%, 100% { opacity: 0.9; }
              50%      { opacity: 0.5; }
            }
            .center-pulse {
              animation: pulse-center 4s ease-in-out infinite;
            }

            @keyframes dash-flow {
              to { stroke-dashoffset: -40; }
            }
            .dash-ring {
              animation: dash-flow 3s linear infinite;
            }
          `}</style>
        </defs>

        {/* Layer rings — outer to inner so inner draws on top */}
        {[...LAYERS].reverse().map((layer, ri) => {
          const i = LAYERS.length - 1 - ri;
          return (
            <g key={layer.nameEn} className={`ring-layer ring-${i}`}>
              {/* Filled ring band */}
              <circle
                cx={CX} cy={CY} r={layer.r}
                fill="none"
                stroke={layer.fill}
                strokeWidth={i === 0 ? 36 : 22}
                strokeOpacity={layer.opacity}
                filter="url(#ring-glow)"
              />
              {/* Bright edge line */}
              <circle
                cx={CX} cy={CY} r={layer.r}
                fill="none"
                stroke={layer.stroke}
                strokeWidth={1}
                strokeOpacity={0.3}
                strokeDasharray={i === 0 ? "none" : "6 8"}
                className={i !== 0 ? "dash-ring" : ""}
              />
            </g>
          );
        })}

        {/* Layer labels — static (not rotating) */}
        {LAYERS.map((layer, i) => {
          // Place label at top of each ring
          const labelY = CY - layer.r;
          if (i === 0) return null; // Center label handled separately
          return (
            <g key={`label-${layer.nameEn}`}>
              <text
                x={CX}
                y={labelY + 5}
                textAnchor="middle"
                fill={layer.stroke}
                fillOpacity={0.7}
                fontSize={i < 3 ? 10 : 9}
                fontWeight={500}
              >
                {layer.name}
              </text>
            </g>
          );
        })}

        {/* Center — 中氣 */}
        <circle
          cx={CX} cy={CY} r={18}
          fill="#f59e0b"
          fillOpacity={0.15}
          className="center-pulse"
        />
        <circle
          cx={CX} cy={CY} r={18}
          fill="none"
          stroke="#f59e0b"
          strokeWidth={1.5}
          strokeOpacity={0.5}
        />
        <text
          x={CX} y={CY - 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#92400e"
          fontSize={14}
          fontWeight={700}
          fontFamily="serif"
        >
          中氣
        </text>
        <text
          x={CX} y={CY + 13}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#92400e"
          fillOpacity={0.5}
          fontSize={7}
        >
          OS Layer
        </text>

        {/* Outermost label */}
        <text
          x={CX} y={CY - LAYERS[6].r - 6}
          textAnchor="middle"
          fill="#ec4899"
          fillOpacity={0.6}
          fontSize={9}
          fontWeight={500}
        >
          花精 + Somaniks
        </text>
      </svg>
    </div>
  );
}
