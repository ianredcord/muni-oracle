"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PAGE_TEXT } from "@/data/threeCard/pageText";
import { DEEP_BUTTON, DEEP_TRANSITION, EXPAND_BUTTON, EXPAND_TRANSITION, pickVariant } from "@/data/threeCard/uiText";
import { localeHref, type Locale } from "@/i18n/config";
import type { Segment } from "@/lib/threeCard/assemble";
import { createTracker, type ReadingTracker } from "@/lib/threeCard/events";
import { getCachedRender, readingStore, cacheRender, type RenderBundle } from "@/lib/threeCard/storage";
import type { Position, ReadingRecord } from "@/lib/threeCard/types";
import { replayReading } from "../../actions";

const POSITIONS: Position[] = ["origin", "now", "direction"];

function SegmentView({ s, debug, labels }: { s: Segment; debug: boolean; labels: { blend: string; body: string } }) {
  const isNote = s.kind === "blend" || s.kind === "body";
  const text = s.kind === "blend" ? s.text.replace(/^〔花精複方〕/, "") : s.kind === "body" ? s.text.replace(/^〔身體練習〕/, "") : s.text;
  const isClosing = s.kind === "template" && s.slot === "closing";
  const isCta = s.kind === "template" && (s.slot === "cta_brief" || s.slot === "cta_full");
  return (
    <div className={isNote ? "rounded-2xl bg-white/70 backdrop-blur-sm px-5 py-4 border border-white/60" : ""}>
      {isNote && <div className="text-xs tracking-widest text-[#9A7B4F] mb-1">{s.kind === "blend" ? labels.blend : labels.body}</div>}
      <p
        className={
          isClosing
            ? "font-serif text-[#9A7B4F] text-center text-lg"
            : isCta
              ? "text-stone-500 text-sm"
              : s.kind === "position"
                ? "font-serif text-[#4a5548] text-lg leading-loose"
                : "text-stone-700 leading-loose"
        }
      >
        {text}
      </p>
      {debug && s.kind === "template" && <div className="mt-1 text-right font-mono text-[10px] text-stone-400">{s.templateId}</div>}
    </div>
  );
}

export default function ReadingClient({ locale, id }: { locale: Locale; id: string }) {
  const t = PAGE_TEXT[locale];
  const debug = useSearchParams().get("debug") === "1";
  const [record, setRecord] = useState<ReadingRecord | null | undefined>(undefined);
  const [bundle, setBundle] = useState<RenderBundle | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);
  const tracker = useRef<ReadingTracker | null>(null);

  useEffect(() => {
    let alive = true;
    const store = readingStore();
    store.get(id).then((r) => {
      if (!alive) return;
      setRecord(r);
      if (!r) return;
      const cached = getCachedRender(id);
      if (cached) setBundle(cached);
      const tr = createTracker(store, id);
      tracker.current = tr;
      void tr.viewedBrief();
      tr.startDwell();
      if (r.events.some((e) => e.type === "saved")) setSaved(true);
      // 重看一律重播：依 template_id 取最新文字
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

  const expand = () => {
    setExpanded(true);
    void tracker.current?.expandedFull();
  };
  const save = async () => {
    await tracker.current?.saved();
    setSaved(true);
  };
  const share = async () => {
    if (!bundle || !record) return;
    const names = bundle.cards.map((c, i) => `${t.positionNames[record.mode][POSITIONS[i]]}：${c.displayName}`).join("／");
    const body = bundle.brief.filter((s) => s.kind === "position").map((s) => s.text).join("\n\n");
    const text = `${t.title}｜${names}\n\n${body}\n\n${t.intro}`;
    const canNative = typeof navigator.share === "function";
    try {
      if (canNative) await navigator.share({ title: t.title, text });
      else await navigator.clipboard.writeText(text);
      setShared(true);
      void tracker.current?.shared({ method: canNative ? "native" : "clipboard" });
    } catch {
      /* 使用者取消分享 */
    }
  };
  const openDeep = (slug: string) => {
    void tracker.current?.openedDeep({ slug });
  };

  const expandBtn = pickVariant(EXPAND_BUTTON, id).text;
  const expandTr = pickVariant(EXPAND_TRANSITION, id).text;
  const deepBtn = pickVariant(DEEP_BUTTON, id).text;
  const deepTr = pickVariant(DEEP_TRANSITION, id).text;

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
        {record && (
          <>
            <header className="text-center mb-8">
              <div className="text-xs tracking-widest text-[#9A7B4F] mb-2">{t.modeNames[record.mode]}</div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548]">{t.readingTitle}</h1>
              {t.zhOnlyNotice && <p className="mt-2 text-xs text-stone-400">{t.zhOnlyNotice}</p>}
            </header>

            {bundle && (
              <div className="flex justify-center gap-4 md:gap-8 mb-10">
                {bundle.cards.map((c, i) => (
                  <motion.div key={c.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="flex flex-col items-center">
                    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white/80" style={{ width: 110, height: 197 }}>
                      <Image src={c.image} alt={c.displayName} width={110} height={197} className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-2 text-xs tracking-widest text-[#9A7B4F]">{t.positionNames[record.mode][POSITIONS[i]]}</div>
                    <div className="font-serif text-[#4a5548]">{c.displayName}</div>
                    <div className="text-xs text-stone-400">{c.altName}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {!bundle && <p className="text-center text-stone-500">{t.loading}</p>}

            {bundle && (
              <article className="space-y-6">
                {(expanded ? bundle.full : bundle.brief).map((s, i) => (
                  <SegmentView key={`${expanded ? "f" : "b"}-${i}`} s={s} debug={debug} labels={{ blend: t.blendLabel, body: t.bodyLabel }} />
                ))}

                <AnimatePresence>
                  {!expanded && (
                    <motion.div key="expand" exit={{ opacity: 0 }} className="text-center pt-4">
                      <p className="text-sm text-stone-400 mb-4">{expandTr}</p>
                      <button onClick={expand} className="rounded-full bg-[#4a5548] hover:bg-[#3a4538] text-white px-8 py-3 shadow-lg transition-all">{expandBtn}</button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {expanded && (
                  <div className="pt-6 border-t border-stone-200/70">
                    <div className="text-xs tracking-widest text-[#9A7B4F] mb-2 text-center">{t.deepTitle}</div>
                    <p className="text-sm text-stone-400 text-center mb-4">{deepTr}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {bundle.cards.map((c) => (
                        <Link
                          key={c.id}
                          href={localeHref(locale, `/tarot-encyclopedia/${c.slug}`)}
                          onClick={() => openDeep(c.slug)}
                          className="rounded-full bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white px-5 py-2.5 text-sm shadow-md transition-all"
                        >
                          {t.deepButton(c.displayName)}
                        </Link>
                      ))}
                    </div>
                    <p className="mt-3 text-center text-xs text-stone-400">{deepBtn}</p>
                  </div>
                )}
              </article>
            )}

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
