"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MODE_TEXT } from "@/data/threeCard/modes";
import { PAGE_TEXT, type PageText } from "@/data/threeCard/pageText";
import { DEEP_TRANSITION, EXPAND_BUTTON, EXPAND_TRANSITION, pickVariant } from "@/data/threeCard/uiText";
import { localeHref, type Locale } from "@/i18n/config";
import { createTracker, type ReadingTracker } from "@/lib/threeCard/events";
import { ARC_NAME, ARC_SHAPE, blendRows, layoutReading, POSITIONS, type PositionBlock, type ReadingLayout } from "@/lib/threeCard/layout";
import { getCachedRender, readingStore, cacheRender, type CardView, type RenderBundle } from "@/lib/threeCard/storage";
import type { Arc, Mode, ReadingRecord } from "@/lib/threeCard/types";
import { cn } from "@/lib/utils";
import { replayReading } from "../../actions";

type Stage = "walk" | "brief" | "full";

/* ───────── 小元件 ───────── */

function Label({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "muted" }) {
  return <div className={cn("text-xs tracking-widest mb-2", tone === "gold" ? "text-[#9A7B4F]" : "text-stone-400")}>{children}</div>;
}

function Card({ children, tone = "plain", className }: { children: React.ReactNode; tone?: "plain" | "gold" | "white"; className?: string }) {
  return (
    <div className={cn(
      "rounded-2xl px-5 py-4 border",
      tone === "gold" ? "bg-[#9A7B4F]/10 border-[#9A7B4F]/30" : tone === "white" ? "bg-white/80 backdrop-blur-sm border-white/60 shadow-sm" : "bg-white/50 border-white/50",
      className,
    )}>{children}</div>
  );
}

function Debug({ id, show }: { id?: string; show: boolean }) {
  return show && id ? <div className="mt-1 text-right font-mono text-[10px] text-stone-400">{id}</div> : null;
}

function ArcIcon({ arc }: { arc: Arc }) {
  const ys = ARC_SHAPE[arc];
  const pts = ys.map((y, i) => `${8 + i * 20},${6 + y * 20}`).join(" ");
  return (
    <svg viewBox="0 0 56 32" width="56" height="32" className="shrink-0" aria-hidden>
      <polyline points={pts} fill="none" stroke="#9A7B4F" strokeWidth="1.5" />
      {ys.map((y, i) => <circle key={i} cx={8 + i * 20} cy={6 + y * 20} r="3" fill="#9A7B4F" />)}
    </svg>
  );
}

function CardFace({ c, size = 110 }: { c: CardView; size?: number }) {
  const h = Math.round(size * 1.79);
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white/80" style={{ width: size, height: h }}>
      <Image src={c.image} alt={c.displayName} width={size} height={h} className="w-full h-full object-cover" />
    </div>
  );
}

function PositionSection({ block, card, mode, t, debug, big, showAllow = true }: { block: PositionBlock; card: CardView; mode: Mode; t: PageText; debug: boolean; big?: boolean; showAllow?: boolean }) {
  const posName = t.positionNames[mode][block.position];
  return (
    <section>
      <Label>{posName}｜{card.displayName}</Label>
      <p className={cn("font-serif text-[#4a5548] leading-loose", big ? "text-xl" : "text-lg")}>{block.lead}</p>
      {block.allow && !showAllow && <p className="mt-2 text-stone-600 leading-loose">{block.allow}。</p>}
      {block.allow && showAllow && (
        <Card tone="gold" className="mt-4">
          <Label>{t.labels.takeaway}</Label>
          <p className="font-serif text-xl text-[#4a5548] leading-relaxed">{block.allow}。</p>
        </Card>
      )}
      <Debug id={`${block.source}:${card.id}`} show={debug} />
    </section>
  );
}

function RelationBlock({ label, text, debug }: { label: string; text: string; debug: boolean }) {
  return (
    <div className="flex gap-4 items-start pl-1">
      <div className="mt-1 flex flex-col items-center gap-1 shrink-0">
        <span className="w-px h-4 bg-[#9A7B4F]/40" />
        <span className="w-2 h-2 rounded-full border border-[#9A7B4F]/60" />
        <span className="w-px h-4 bg-[#9A7B4F]/40" />
      </div>
      <div>
        <Label tone="muted">{label}</Label>
        <p className="text-stone-600 leading-loose">{text.replace(/^——/, "")}</p>
        <Debug id={label} show={debug} />
      </div>
    </div>
  );
}

/* ───────── 深度層 v3 ───────── */

type DeepItem = { q: string; paras: string[] };

/** 依位置／鏡面選既有深度欄位（deep-layer-design §2.1） */
function deepItemsFor(card: CardView, position: (typeof POSITIONS)[number], mode: Mode, t: PageText): { lead: string; items: DeepItem[] } {
  const d = card.deep;
  const q = t.deepQ;
  if (mode === "C") {
    if (position === "origin") return { lead: t.deepLead.archetype, items: [{ q: q.archetypeWorks, paras: [d.jungianAnalysis] }, { q: q.symbol, paras: [d.symbolReading] }] };
    if (position === "now") return { lead: t.deepLead.persona, items: [{ q: q.core, paras: [d.uprightMessage] }, { q: q.whyFlower, paras: [d.flowerSpectrum] }] };
    return { lead: t.deepLead.situation, items: [{ q: q.fieldState, paras: [d.step1Status] }, { q: q.practice, paras: [d.dailyPractice] }] };
  }
  if (position === "origin") return { lead: t.deepLead.origin, items: [{ q: q.carries, paras: [d.step1Status, d.flowerSpectrum] }, { q: q.symbol, paras: [d.symbolReading] }] };
  if (position === "now") return { lead: t.deepLead.now, items: [{ q: q.core, paras: [d.uprightMessage] }, { q: q.whyFlower, paras: [d.flowerSpectrum, d.jungianAnalysis] }, { q: q.doNow, paras: [d.breathing, d.aromaGuide] }] };
  return { lead: t.deepLead.direction, items: [{ q: q.symbol, paras: [d.symbolReading] }, { q: q.practice, paras: [d.dailyPractice, d.awarenessNote] }] };
}

function DeepPanel({ card, position, mode, t, open, onToggle }: { card: CardView; position: (typeof POSITIONS)[number]; mode: Mode; t: PageText; open: boolean; onToggle: () => void }) {
  const { lead, items } = deepItemsFor(card, position, mode, t);
  return (
    <div className="mt-3">
      <button onClick={onToggle} className="text-xs text-[#9A7B4F] underline underline-offset-4">{open ? t.deepClose : `${t.deepIn} ▾`}</button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="deep" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="mt-3 rounded-2xl bg-white/60 border border-white/60 px-5 py-4 space-y-5">
              <p className="text-xs text-stone-400 leading-relaxed">{lead}</p>
              {items.map((it) => (
                <div key={it.q}>
                  <div className="font-serif text-[#4a5548] mb-1">{it.q}</div>
                  {it.paras.filter(Boolean).map((para, i) => <p key={i} className="text-stone-700 leading-loose text-[15px] mb-2 last:mb-0">{para}</p>)}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** 今天怎麼用這一局（§2.5）：三張牌的實作欄位排成一天 */
function DayPlan({ cards, t }: { cards: CardView[]; t: PageText }) {
  const rows: { slot: string; card: CardView; text: string }[] = [
    { slot: t.dayPlan.morning, card: cards[1], text: cards[1].deep.breathing },
    { slot: t.dayPlan.daytime, card: cards[2], text: cards[2].deep.dailyPractice },
    { slot: t.dayPlan.anytime, card: cards[1], text: cards[1].deep.aromaGuide },
    { slot: t.dayPlan.evening, card: cards[0], text: cards[0].deep.awarenessNote },
  ].filter((r) => r.text);
  return (
    <Card tone="white">
      <Label>{t.dayPlan.title}</Label>
      <p className="text-xs text-stone-400 mb-3">{t.dayPlan.intro}</p>
      <ol className="divide-y divide-stone-200/70">
        {rows.map((r) => (
          <li key={r.slot} className="py-3 flex gap-3">
            <CardFace c={r.card} size={36} />
            <div>
              <div className="text-xs text-[#9A7B4F]">{r.slot}<span className="text-stone-400">　{t.dayPlan.from(r.card.displayName)}</span></div>
              <p className="text-stone-700 leading-loose text-[15px]">{r.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}

/* ───────── 主元件 ───────── */

export default function ReadingClient({ locale, id }: { locale: Locale; id: string }) {
  const t = PAGE_TEXT[locale];
  const debug = useSearchParams().get("debug") === "1";
  const [record, setRecord] = useState<ReadingRecord | null | undefined>(undefined);
  const [bundle, setBundle] = useState<RenderBundle | null>(null);
  const [stage, setStage] = useState<Stage>("walk");
  const [step, setStep] = useState(0);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [deepOpen, setDeepOpen] = useState<Record<string, boolean>>({});
  const tracker = useRef<ReadingTracker | null>(null);

  const toggleDeep = (key: string) => {
    setDeepOpen((prev) => {
      const next = !prev[key];
      if (next) void tracker.current?.openedDeep({ section: key });
      return { ...prev, [key]: next };
    });
  };
  const setAllDeep = (open: boolean) => {
    setDeepOpen({ origin: open, now: open, direction: open });
    if (open) void tracker.current?.openedDeep({ section: "all" });
  };

  useEffect(() => {
    let alive = true;
    const store = readingStore();
    store.get(id).then((r) => {
      if (!alive) return;
      setRecord(r);
      if (!r) return;
      const cached = getCachedRender(id);
      if (cached) setBundle(cached);
      // 重看（已有 viewed_brief 事件）直接進整篇；第一次才逐張翻
      if (r.events.some((e) => e.type === "viewed_brief")) setStage("brief");
      const tr = createTracker(store, id);
      tracker.current = tr;
      void tr.viewedBrief();
      tr.startDwell();
      if (r.events.some((e) => e.type === "saved")) setSaved(true);
      replayReading(r, locale).then((res) => {
        if (!alive || !res.ok) return;
        const b = { brief: res.brief, full: res.full, cards: res.cards };
        setBundle(b);
        cacheRender(id, b);
      });
    });
    const onHide = () => { if (document.visibilityState === "hidden") void tracker.current?.stopDwell(); };
    document.addEventListener("visibilitychange", onHide);
    return () => {
      alive = false;
      document.removeEventListener("visibilitychange", onHide);
      void tracker.current?.stopDwell();
    };
  }, [id, locale]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [step, stage]);

  const expand = () => { setStage("full"); void tracker.current?.expandedFull(); };
  const save = async () => { await tracker.current?.saved(); setSaved(true); };
  const copyTakeaway = async (text: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(true); } catch { /* 無法複製 */ }
  };
  const share = async () => {
    if (!bundle || !record) return;
    const names = bundle.cards.map((c, i) => `${t.positionNames[record.mode][POSITIONS[i]]}：${c.displayName}`).join("／");
    const allow = bundle.cards[1].step2Allow;
    const text = `${t.title}｜${names}\n\n${t.labels.takeaway}：${allow}\n\n${t.intro}`;
    const canNative = typeof navigator.share === "function";
    try {
      if (canNative) await navigator.share({ title: t.title, text });
      else await navigator.clipboard.writeText(text);
      setShared(true);
      void tracker.current?.shared({ method: canNative ? "native" : "clipboard" });
    } catch { /* 使用者取消 */ }
  };
  const openDeep = (slug: string) => { void tracker.current?.openedDeep({ slug }); };

  const expandBtn = pickVariant(EXPAND_BUTTON, id).text;
  const expandTr = pickVariant(EXPAND_TRANSITION, id).text;
  const deepTr = pickVariant(DEEP_TRANSITION, id).text;

  const mode = record?.mode ?? "A";
  const brief: ReadingLayout | null = bundle ? layoutReading(bundle.brief) : null;
  const full: ReadingLayout | null = bundle ? layoutReading(bundle.full) : null;
  const L = stage === "full" ? full : brief;
  const arc = record?.state.arc;

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />
      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        {record === undefined && <p className="text-center text-stone-500 py-20">{t.loading}</p>}
        {record === null && (
          <div className="text-center py-20">
            <p className="text-stone-500 mb-6">{t.notFound}</p>
            <Link href={localeHref(locale, "/tarot/three-card")} className="rounded-full bg-[#4a5548] text-white px-8 py-3">{t.drawAgain}</Link>
          </div>
        )}
        {record && !bundle && <p className="text-center text-stone-500 py-20">{t.loading}</p>}

        {/* ④ 逐張揭示 */}
        {record && bundle && brief && stage === "walk" && (
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
              {POSITIONS.map((p, i) => <span key={p} className={cn("w-2 h-2 rounded-full", i === step ? "bg-[#9A7B4F]" : i < step ? "bg-[#9A7B4F]/40" : "bg-stone-300")} />)}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
                {(() => {
                  const c = bundle.cards[step];
                  const block = brief.positions[step];
                  const p = POSITIONS[step];
                  return (
                    <div className="text-center">
                      <Label>{t.stepOf(step + 1)}｜{t.positionNames[mode][p]}</Label>
                      <p className="text-sm text-stone-500 mb-5">{MODE_TEXT[mode].questions[p]}</p>
                      <motion.div initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} transition={{ duration: 0.5 }} className="inline-block">
                        <CardFace c={c} size={150} />
                      </motion.div>
                      <h2 className="font-serif text-2xl text-[#4a5548] mt-4">{c.displayName}</h2>
                      <div className="text-xs text-stone-400">{c.altName}</div>
                      <div className="mt-2 flex justify-center gap-4 text-xs text-stone-500">
                        <span><span className="text-[#9A7B4F]">{t.flowerLabel}</span>　{c.flowerZh} {c.flowerEn}</span>
                        {c.archetype && <span><span className="text-[#9A7B4F]">{t.archetypeLabel}</span>　{c.archetype}</span>}
                      </div>
                      <div className="mt-6 text-left">
                        <PositionSection block={block} card={c} mode={mode} t={t} debug={debug} big />
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex justify-between items-center">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="text-sm text-stone-500 disabled:opacity-30">← {t.prev}</button>
              {step < 2 ? (
                <button onClick={() => setStep((s) => s + 1)} className="rounded-full bg-[#4a5548] hover:bg-[#3a4538] text-white px-8 py-3 shadow-lg">{t.next} →</button>
              ) : (
                <button onClick={() => setStage("brief")} className="rounded-full bg-[#4a5548] hover:bg-[#3a4538] text-white px-8 py-3 shadow-lg">{t.connect}</button>
              )}
            </div>
          </div>
        )}

        {/* ⑤ 整篇解讀 */}
        {record && bundle && L && stage !== "walk" && (
          <>
            <header className="text-center mb-6">
              <div className="text-xs tracking-widest text-[#9A7B4F] mb-2">{t.modeNames[mode]}</div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548]">{t.readingTitle}</h1>
              {t.zhOnlyNotice && <p className="mt-2 text-xs text-stone-400">{t.zhOnlyNotice}</p>}
            </header>

            {/* 三張牌總覽 */}
            <div className="flex justify-center gap-4 md:gap-8 mb-8">
              {bundle.cards.map((c, i) => (
                <button key={c.id} onClick={() => { setStep(i); setStage("walk"); }} className="flex flex-col items-center group">
                  <CardFace c={c} size={88} />
                  <div className="mt-2 text-xs tracking-widest text-[#9A7B4F]">{t.positionNames[mode][POSITIONS[i]]}</div>
                  <div className="font-serif text-[#4a5548] group-hover:underline underline-offset-4">{c.displayName}</div>
                </button>
              ))}
            </div>

            {stage === "full" && (
              <p className="text-center -mt-2 mb-4">
                <button onClick={() => setAllDeep(!(deepOpen.origin && deepOpen.now && deepOpen.direction))} className="text-xs text-[#9A7B4F] underline underline-offset-4">
                  {deepOpen.origin && deepOpen.now && deepOpen.direction ? t.collapseAll : t.expandAll}
                </button>
              </p>
            )}

            <article className="space-y-7">
              {L.opening && <p className="text-center text-sm text-stone-400">{L.opening}<Debug id="opening" show={debug} /></p>}
              {L.exception && <Card tone="gold"><Label>{t.labels.exception}</Label><p className="text-stone-700 leading-loose">{L.exception}</p></Card>}
              {L.mirrorSynthesis && <Card tone="white"><Label>{t.labels.mirror}</Label><p className="text-stone-700 leading-loose">{L.mirrorSynthesis}</p></Card>}
              {L.structure && <p className="text-sm text-stone-500 text-center"><span className="text-[#9A7B4F]">{t.labels.structure}</span>　{L.structure}</p>}

              <PositionSection block={L.positions[0]} card={bundle.cards[0]} mode={mode} t={t} debug={debug} />
              {stage === "full" && <DeepPanel card={bundle.cards[0]} position="origin" mode={mode} t={t} open={!!deepOpen.origin} onToggle={() => toggleDeep("origin")} />}
              {L.relBoth && <RelationBlock label={t.labels.relBoth} text={L.relBoth} debug={debug} />}
              {L.rel12 && <RelationBlock label={t.labels.rel12} text={L.rel12} debug={debug} />}
              <PositionSection block={L.positions[1]} card={bundle.cards[1]} mode={mode} t={t} debug={debug} showAllow={false} />
              {stage === "full" && <DeepPanel card={bundle.cards[1]} position="now" mode={mode} t={t} open={!!deepOpen.now} onToggle={() => toggleDeep("now")} />}
              {L.rel23 && <RelationBlock label={t.labels.rel23} text={L.rel23} debug={debug} />}
              <PositionSection block={L.positions[2]} card={bundle.cards[2]} mode={mode} t={t} debug={debug} />
              {stage === "full" && <DeepPanel card={bundle.cards[2]} position="direction" mode={mode} t={t} open={!!deepOpen.direction} onToggle={() => toggleDeep("direction")} />}

              {L.arc && arc && (
                <Card tone="white">
                  <div className="flex items-center gap-3 mb-2">
                    <ArcIcon arc={arc} />
                    <div>
                      <Label>{t.labels.arc}</Label>
                      <div className="font-serif text-lg text-[#4a5548] -mt-1">{ARC_NAME[locale][arc]}</div>
                    </div>
                  </div>
                  <p className="text-stone-700 leading-loose">{L.arc}</p>
                  <Debug id="arc" show={debug} />
                </Card>
              )}

              {L.resonance && <Card tone="gold"><Label>{t.labels.resonance}</Label><p className="text-stone-700 leading-loose">{L.resonance}</p></Card>}
              {L.court && (
                <Card tone="white">
                  <Label>{t.labels.court}</Label>
                  <p className="text-stone-700 leading-loose">{L.court}</p>
                </Card>
              )}

              {/* 今天帶走的一句（整篇） */}
              <Card tone="gold" className="text-center">
                <Label>{t.labels.takeaway}</Label>
                <p className="font-serif text-2xl text-[#4a5548] leading-relaxed">{bundle.cards[1].step2Allow}</p>
                <button onClick={() => copyTakeaway(bundle.cards[1].step2Allow)} className="mt-3 text-xs text-[#9A7B4F] underline underline-offset-4">{copied ? t.copied : t.copyTakeaway}</button>
              </Card>

              {stage === "full" && (
                <>
                  <Card tone="white">
                    <Label>{t.labels.blend}</Label>
                    <ul className="divide-y divide-stone-200/70">
                      {blendRows([bundle.cards[0].flowerEn, bundle.cards[1].flowerEn, bundle.cards[2].flowerEn]).map((r) => {
                        const c = bundle.cards[r.cardIndex];
                        return (
                          <li key={r.role} className="py-3 flex items-center gap-4">
                            <CardFace c={c} size={40} />
                            <div className="flex-1">
                              <div className="text-xs text-stone-400">{t.blendRoles[r.role]}</div>
                              <div className={cn("font-serif text-[#4a5548]", r.merged && "line-through text-stone-400")}>{c.flowerZh}（{c.flowerEn}）</div>
                              {r.merged && <div className="text-xs text-[#9A7B4F]">{t.blendRoles.merged}</div>}
                            </div>
                            <div className="text-xs text-stone-400">{c.displayName}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </Card>
                  {L.body && (
                    <Card tone="white">
                      <Label>{t.labels.body}</Label>
                      <p className="text-stone-700 leading-loose">{L.body}</p>
                    </Card>
                  )}
                  <DayPlan cards={bundle.cards} t={t} />
                  <div className="pt-4 border-t border-stone-200/70 text-center">
                    <Label>{t.labels.deep}</Label>
                    <p className="text-sm text-stone-400 mb-1">{deepTr}</p>
                    <p className="text-xs text-stone-400 mb-4">{t.deepNote}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {bundle.cards.map((c) => (
                        <Link key={c.id} href={localeHref(locale, `/tarot-encyclopedia/${c.slug}`)} onClick={() => openDeep(c.slug)}
                          className="rounded-full bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white px-5 py-2.5 text-sm shadow-md transition-all">
                          {t.deepButton(c.displayName)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {L.cta && stage === "brief" && (
                <div className="text-center pt-2">
                  <p className="text-stone-500 text-sm mb-1">{L.cta}</p>
                  <p className="text-xs text-stone-400 mb-4">{expandTr}</p>
                  <button onClick={expand} className="rounded-full bg-[#4a5548] hover:bg-[#3a4538] text-white px-8 py-3 shadow-lg transition-all">{expandBtn}</button>
                </div>
              )}
              {L.cta && stage === "full" && <p className="text-center text-stone-500 text-sm">{L.cta}</p>}
              {L.closing && <p className="font-serif text-[#9A7B4F] text-center text-lg pt-2">{L.closing}</p>}
            </article>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <button onClick={save} className="rounded-full border border-stone-300 px-5 py-2.5 text-sm text-stone-600 hover:bg-white/70">{saved ? t.saved : t.save}</button>
              <button onClick={share} className="rounded-full border border-stone-300 px-5 py-2.5 text-sm text-stone-600 hover:bg-white/70">{shared ? t.shared : t.share}</button>
              <Link href={localeHref(locale, "/tarot/three-card")} className="rounded-full border border-stone-300 px-5 py-2.5 text-sm text-stone-600 hover:bg-white/70">{t.drawAgain}</Link>
              <Link href={localeHref(locale, "/tarot/three-card/history")} className="rounded-full border border-stone-300 px-5 py-2.5 text-sm text-stone-600 hover:bg-white/70">{t.history}</Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
