"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MODE_TEXT } from "@/data/threeCard/modes";
import { PAGE_TEXT } from "@/data/threeCard/pageText";
import { MODE_PROMPT, pickVariant } from "@/data/threeCard/uiText";
import { localeHref, type Locale } from "@/i18n/config";
import { getDeviceId } from "@/lib/threeCard/device";
import { recentForUser, saveReading, type CardView } from "@/lib/threeCard/storage";
import type { Mode, Position } from "@/lib/threeCard/types";
import { cn } from "@/lib/utils";
import { drawReading } from "./actions";

type Phase = "mode" | "draw" | "revealing";
const POSITIONS: Position[] = ["origin", "now", "direction"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ThreeCardClient({ locale, cards }: { locale: Locale; cards: CardView[] }) {
  const router = useRouter();
  const t = PAGE_TEXT[locale];
  const [phase, setPhase] = useState<Phase>("mode");
  const [mode, setMode] = useState<Mode | null>(null);
  const [picked, setPicked] = useState<(number | null)[]>([null, null, null]);
  const [error, setError] = useState<string | null>(null);
  const [prompt] = useState(() => pickVariant(MODE_PROMPT, new Date().toISOString().slice(0, 10)).text);
  // 洗牌順序：進入抽牌階段時決定一次
  const [order, setOrder] = useState<CardView[]>([]);

  const byId = new Map(cards.map((c) => [c.id, c]));

  const startMode = (m: Mode) => {
    setMode(m);
    setPicked([null, null, null]);
    setOrder(shuffle(cards));
    setPhase("draw");
  };

  /** 模式 C 每個位置只能從對應牌池選 */
  const poolFor = (m: Mode, position: Position): CardView[] => {
    if (m !== "C") return order;
    const want = position === "origin" ? "major" : position === "now" ? "court" : "pip";
    return order.filter((c) => c.kind === want);
  };

  /** 以函數式更新避免連續點擊時讀到舊狀態 */
  const toggleCard = (id: number) => {
    if (phase !== "draw" || !mode) return;
    setPicked((prev) => {
      const at = prev.indexOf(id);
      if (at >= 0) return prev.map((x, i) => (i === at ? null : x));
      if (mode === "C") {
        const c = byId.get(id)!;
        const slot = c.kind === "major" ? 0 : c.kind === "court" ? 1 : 2;
        return prev.map((x, i) => (i === slot ? id : x));
      }
      const nextEmpty = prev.findIndex((x) => x === null);
      if (nextEmpty < 0) return prev;
      return prev.map((x, i) => (i === nextEmpty ? id : x));
    });
  };

  const reveal = async () => {
    if (!mode || picked.some((x) => x === null)) return;
    setPhase("revealing");
    setError(null);
    const userId = getDeviceId();
    const recent = await recentForUser(userId);
    const res = await drawReading({ mode, ids: picked as number[], locale, userId, recent });
    if (!res.ok) { setError(res.error); setPhase("draw"); return; }
    await saveReading(res.record, { brief: res.brief, full: res.full, cards: res.cards });
    router.push(localeHref(locale, `/tarot/three-card/reading/${res.record.reading_id}`));
  };

  const cardW = 56;
  const cardH = Math.round(cardW * 1.79);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800 overflow-x-hidden">
      <Header />
      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16 min-h-screen flex flex-col items-center">
        <header className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-3">{t.title}</h1>
          <p className="text-stone-500 text-base max-w-xl mx-auto leading-relaxed">
            {phase === "mode" ? prompt : phase === "draw" ? t.pickHint(3 - picked.filter(Boolean).length) : t.revealing}
          </p>
        </header>

        <AnimatePresence mode="wait">
          {phase === "mode" && (
            <motion.div key="mode" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="w-full max-w-5xl">
              <div className="grid gap-5 md:grid-cols-3">
                {(["A", "B", "C"] as Mode[]).map((m) => {
                  const mt = MODE_TEXT[m];
                  return (
                    <button
                      key={m}
                      onClick={() => startMode(m)}
                      className="text-left rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-white/60"
                    >
                      <div className="text-xs tracking-widest text-[#9A7B4F] mb-2">{t.modeNames[m]}</div>
                      <div className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                        {POSITIONS.map((p) => t.positionNames[m][p]).join("・")}
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">{mt.description}</p>
                      <ul className="space-y-1 text-sm text-stone-500">
                        {POSITIONS.map((p) => (
                          <li key={p}>
                            <span className="text-[#9A7B4F]">{t.positionNames[m][p]}</span>　{mt.questions[p]}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
              <p className="mt-10 text-center text-sm text-stone-400">{t.intro}</p>
              <p className="mt-4 text-center">
                <a href={localeHref(locale, "/tarot/three-card/history")} className="text-sm text-[#9A7B4F] underline underline-offset-4">{t.history}</a>
              </p>
            </motion.div>
          )}

          {(phase === "draw" || phase === "revealing") && mode && (
            <motion.div key="draw" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-5xl flex flex-col items-center">
              {/* 三個位置 */}
              <div className="flex gap-4 md:gap-8 mb-8">
                {POSITIONS.map((p, i) => {
                  const id = picked[i];
                  const c = id ? byId.get(id) : undefined;
                  return (
                    <div key={p} className="flex flex-col items-center">
                      <div
                        className={cn("rounded-xl overflow-hidden border-2 flex items-center justify-center bg-white/60", id ? "border-[#9A7B4F]" : "border-dashed border-stone-300")}
                        style={{ width: 90, height: Math.round(90 * 1.79) }}
                      >
                        {c ? (
                          <Image src={phase === "revealing" ? c.image : "/cards/back.jpg"} alt={c.displayName} width={90} height={161} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-stone-300 text-2xl">{i + 1}</span>
                        )}
                      </div>
                      <div className="mt-2 text-sm text-[#4a5548]">{t.positionNames[mode][p]}</div>
                      {c && phase === "revealing" && <div className="text-xs text-stone-500">{c.displayName}</div>}
                    </div>
                  );
                })}
              </div>

              {/* 牌池 */}
              {phase === "draw" && (
                <div className="w-full space-y-6">
                  {(mode === "C" ? POSITIONS : (["origin"] as Position[])).map((p) => (
                    <div key={p}>
                      {mode === "C" && <div className="text-xs tracking-widest text-[#9A7B4F] mb-2">{t.positionNames.C[p]}</div>}
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {poolFor(mode, p).map((c) => {
                          const sel = picked.includes(c.id);
                          return (
                            <motion.button
                              key={c.id}
                              onClick={() => toggleCard(c.id)}
                              whileHover={{ y: -4 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={sel ? `取消 ${c.displayName}` : "card"}
                              className={cn("rounded-md overflow-hidden shadow-sm transition-all", sel ? "ring-2 ring-[#9A7B4F] opacity-40" : "")}
                              style={{ width: cardW, height: cardH }}
                            >
                              <Image src="/cards/back.jpg" alt="" width={cardW} height={cardH} className="w-full h-full object-cover" />
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

              <div className="mt-8 flex gap-3">
                <button onClick={() => setPhase("mode")} disabled={phase === "revealing"} className="rounded-full border border-stone-300 px-6 py-3 text-sm text-stone-600 hover:bg-white/70 disabled:opacity-50">
                  {t.back}
                </button>
                <button
                  onClick={reveal}
                  disabled={phase === "revealing" || picked.some((x) => x === null)}
                  className="rounded-full bg-[#4a5548] hover:bg-[#3a4538] disabled:opacity-40 text-white px-8 py-3 text-base shadow-lg transition-all"
                >
                  {phase === "revealing" ? t.revealing : t.reveal}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
