"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { acupoints } from "@/data/flow-system/acupoints";
import { emotionGroups } from "@/data/flow-system/emotions";
import type {
  FiveElement,
  Acupoint,
  EmotionGroup,
  FlowerEntry,
} from "@/data/flow-system/types";
import BlueOrangeBadge from "@/components/flow-system/BlueOrangeBadge";
import FiveElementBadge from "@/components/flow-system/FiveElementBadge";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type TabKey = "all" | "flower" | "acupoint" | "emotion";
type SomaniksFilter = "all" | "drain" | "tonify";

interface FlowerResult {
  kind: "flower";
  flower: FlowerEntry;
  group: EmotionGroup;
}

interface AcupointResult {
  kind: "acupoint";
  acupoint: Acupoint;
}

interface EmotionResult {
  kind: "emotion";
  group: EmotionGroup;
}

type SearchResult = FlowerResult | AcupointResult | EmotionResult;

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "flower", label: "花精" },
  { key: "acupoint", label: "穴位" },
  { key: "emotion", label: "情緒族群" },
];

const SOMANIKS_OPTIONS: { key: SomaniksFilter; label: string; color: string }[] =
  [
    { key: "all", label: "全部", color: "bg-gray-100 text-gray-700 border-gray-200" },
    {
      key: "drain",
      label: "藍洩",
      color: "bg-[#006494]/10 text-[#006494] border-[#006494]/30",
    },
    {
      key: "tonify",
      label: "橘補",
      color: "bg-[#da7101]/10 text-[#da7101] border-[#da7101]/30",
    },
  ];

const ELEMENTS: FiveElement[] = ["water", "wood", "fire", "earth", "metal"];

const ELEMENT_LABELS: Record<FiveElement, string> = {
  water: "水",
  wood: "木",
  fire: "火",
  earth: "土",
  metal: "金",
};

const ELEMENT_COLORS: Record<
  FiveElement,
  { active: string; inactive: string }
> = {
  water: {
    active: "bg-slate-700 text-white border-slate-700",
    inactive:
      "bg-slate-700/10 text-slate-700 border-slate-700/20 hover:bg-slate-700/20",
  },
  wood: {
    active: "bg-emerald-700 text-white border-emerald-700",
    inactive:
      "bg-emerald-700/10 text-emerald-700 border-emerald-700/20 hover:bg-emerald-700/20",
  },
  fire: {
    active: "bg-rose-700 text-white border-rose-700",
    inactive:
      "bg-rose-700/10 text-rose-700 border-rose-700/20 hover:bg-rose-700/20",
  },
  earth: {
    active: "bg-amber-700 text-white border-amber-700",
    inactive:
      "bg-amber-700/10 text-amber-700 border-amber-700/20 hover:bg-amber-700/20",
  },
  metal: {
    active: "bg-stone-500 text-white border-stone-500",
    inactive:
      "bg-stone-500/10 text-stone-500 border-stone-500/20 hover:bg-stone-500/20",
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function buildAllItems(): SearchResult[] {
  const items: SearchResult[] = [];

  // Flowers (flattened from emotion groups)
  for (const group of emotionGroups) {
    for (const flower of group.flowers) {
      items.push({ kind: "flower", flower, group });
    }
  }

  // Acupoints
  for (const acupoint of acupoints) {
    items.push({ kind: "acupoint", acupoint });
  }

  // Emotion groups
  for (const group of emotionGroups) {
    items.push({ kind: "emotion", group });
  }

  return items;
}

function matchesQuery(item: SearchResult, q: string): boolean {
  if (!q) return true;
  const lower = q.toLowerCase();

  switch (item.kind) {
    case "flower": {
      const f = item.flower;
      const g = item.group;
      return [
        f.name,
        f.emotionTheme,
        f.mainPoint,
        f.couplePoint,
        f.somaniksNote,
        g.name,
      ].some((s) => s.toLowerCase().includes(lower));
    }
    case "acupoint": {
      const a = item.acupoint;
      return [
        a.name,
        a.fullName,
        a.code,
        a.meridian,
        a.extraordinaryVessel,
        a.functionText,
        a.somaniksNote,
      ].some((s) => s.toLowerCase().includes(lower));
    }
    case "emotion": {
      const g = item.group;
      return [
        g.name,
        g.nameEn,
        g.compassPosition,
        g.wuShen,
        g.somaniksNote,
        g.flowDescription,
      ].some((s) => s.toLowerCase().includes(lower));
    }
  }
}

function matchesTab(item: SearchResult, tab: TabKey): boolean {
  if (tab === "all") return true;
  if (tab === "flower") return item.kind === "flower";
  if (tab === "acupoint") return item.kind === "acupoint";
  if (tab === "emotion") return item.kind === "emotion";
  return true;
}

function matchesSomaniks(item: SearchResult, filter: SomaniksFilter): boolean {
  if (filter === "all") return true;
  switch (item.kind) {
    case "flower":
      return item.flower.somaniks === filter;
    case "acupoint":
      return item.acupoint.somaniks === filter;
    case "emotion":
      return item.group.somaniks === filter;
  }
}

function matchesElement(
  item: SearchResult,
  selected: Set<FiveElement>
): boolean {
  if (selected.size === 0) return true;
  switch (item.kind) {
    case "flower":
      return selected.has(item.group.element);
    case "acupoint":
      return selected.has(item.acupoint.element);
    case "emotion":
      return selected.has(item.group.element);
  }
}

/* ------------------------------------------------------------------ */
/*  Result cards                                                       */
/* ------------------------------------------------------------------ */

function FlowerCard({ flower, group }: { flower: FlowerEntry; group: EmotionGroup }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
          花精
        </span>
        <BlueOrangeBadge type={flower.somaniks} size="sm" />
        <FiveElementBadge element={group.element} />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{flower.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{flower.emotionTheme}</p>
      <div className="mt-3 space-y-1 text-sm text-gray-500">
        <p>
          情緒族群：
          <Link
            href={`/internal/flow-system/emotions/${group.slug}`}
            className="text-[#4a5548] underline decoration-[#4a5548]/30 hover:decoration-[#4a5548]"
          >
            {group.name}
          </Link>
        </p>
        <p>
          主穴 {flower.mainPoint}
          {flower.couplePoint !== "—" && ` ＋ 配穴 ${flower.couplePoint}`}
        </p>
        <p>Farrell：{flower.farrellLayer}</p>
      </div>
    </div>
  );
}

function AcupointCard({ acupoint }: { acupoint: Acupoint }) {
  return (
    <Link
      href={`/internal/flow-system/acupoints/${acupoint.slug}`}
      className="block rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
          穴位
        </span>
        <BlueOrangeBadge type={acupoint.somaniks} size="sm" />
        <FiveElementBadge element={acupoint.element} />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{acupoint.fullName}</h3>
      <div className="mt-3 space-y-1 text-sm text-gray-500">
        <p>
          {acupoint.meridian} / {acupoint.extraordinaryVessel}
        </p>
        <p>氣流位置：{acupoint.flowPosition}</p>
      </div>
    </Link>
  );
}

function EmotionCard({ group }: { group: EmotionGroup }) {
  return (
    <Link
      href={`/internal/flow-system/emotions/${group.slug}`}
      className="block rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
          情緒族群
        </span>
        <BlueOrangeBadge type={group.somaniks} size="sm" />
        <FiveElementBadge element={group.element} />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{group.name}</h3>
      <div className="mt-3 space-y-1 text-sm text-gray-500">
        <p>{group.compassPosition}</p>
        <p>五神：{group.wuShen}</p>
        <p>花精數量：{group.flowers.length} 支</p>
      </div>
    </Link>
  );
}

function ResultCard({ result }: { result: SearchResult }) {
  switch (result.kind) {
    case "flower":
      return <FlowerCard flower={result.flower} group={result.group} />;
    case "acupoint":
      return <AcupointCard acupoint={result.acupoint} />;
    case "emotion":
      return <EmotionCard group={result.group} />;
  }
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

const ALL_ITEMS = buildAllItems();

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [somaniksFilter, setSomaniksFilter] = useState<SomaniksFilter>("all");
  const [selectedElements, setSelectedElements] = useState<Set<FiveElement>>(
    new Set()
  );

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setQuery(val);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setDebouncedQuery(val), 200);
    },
    []
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const toggleElement = useCallback((el: FiveElement) => {
    setSelectedElements((prev) => {
      const next = new Set(prev);
      if (next.has(el)) {
        next.delete(el);
      } else {
        next.add(el);
      }
      return next;
    });
  }, []);

  const results = useMemo(() => {
    return ALL_ITEMS.filter(
      (item) =>
        matchesQuery(item, debouncedQuery) &&
        matchesTab(item, activeTab) &&
        matchesSomaniks(item, somaniksFilter) &&
        matchesElement(item, selectedElements)
    );
  }, [debouncedQuery, activeTab, somaniksFilter, selectedElements]);

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/internal/flow-system"
            className="text-sm text-[#4a5548] hover:underline"
          >
            &larr; 返回整合系統
          </Link>
          <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-0.5 text-xs font-medium text-amber-700">
            內部測試版
          </span>
        </div>

        <h1 className="mb-6 text-2xl font-bold text-gray-900">搜尋</h1>

        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="搜尋花精、情緒、穴位、五行..."
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-lg shadow-sm outline-none transition-shadow placeholder:text-gray-400 focus:border-[#4a5548]/40 focus:ring-2 focus:ring-[#4a5548]/20"
          />
        </div>

        {/* Filters (sticky) */}
        <div className="sticky top-0 z-10 -mx-4 bg-[#F9F7F2] px-4 pb-4 pt-2 sm:-mx-6 sm:px-6">
          {/* Tabs */}
          <div className="mb-3 flex gap-1 overflow-x-auto border-b border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "border-b-2 border-[#4a5548] text-[#4a5548]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Somaniks + Element filters */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Somaniks */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500">Somaniks：</span>
              {SOMANIKS_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setSomaniksFilter(opt.key)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                    somaniksFilter === opt.key
                      ? opt.key === "drain"
                        ? "bg-[#006494] text-white border-[#006494]"
                        : opt.key === "tonify"
                        ? "bg-[#da7101] text-white border-[#da7101]"
                        : "bg-gray-700 text-white border-gray-700"
                      : opt.color
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Five element */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500">五行：</span>
              {ELEMENTS.map((el) => (
                <button
                  key={el}
                  onClick={() => toggleElement(el)}
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${
                    selectedElements.has(el)
                      ? ELEMENT_COLORS[el].active
                      : ELEMENT_COLORS[el].inactive
                  }`}
                >
                  {ELEMENT_LABELS[el]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mb-4 text-sm text-gray-500">
          共 {results.length} 個結果
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((result, i) => (
              <ResultCard key={`${result.kind}-${i}`} result={result} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-16 text-center">
            <p className="text-lg font-medium text-gray-500">
              找不到符合條件的結果
            </p>
            <p className="mt-2 text-sm text-gray-400">
              試試不同的關鍵字，或調整篩選條件
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
