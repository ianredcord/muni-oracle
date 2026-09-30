"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Plus } from "lucide-react";
import { localeHref, type Locale } from "@/i18n/config";
import { Footer } from "@/components/Footer";
import type { Copy } from "./page";
import s from "./observatory.module.css";

export default function ObservatoryLanding({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const zh = locale === "zh";
  const to = (path: string) => localeHref(locale, path);
  const labels = zh ? ["經絡穴位", "解剖分層", "董氏奇穴", "解剖列車", "激痛點", "教學展示"] : ["Meridians", "Anatomy", "Tung points", "Fascial lines", "Trigger points", "Teaching"];
  // 進場動畫只在客戶端掛載後啟用：伺服器輸出與動畫失效時內容都保持可見（手機首屏曾因此整段隱形）。
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const animated = mounted && !reduced;
  const reveal = animated ? { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .1 }, transition: { duration: .7 } } : { initial: false as const };
  const heroReveal = animated ? { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: .7 } } : { initial: false as const };
  return <main className={s.page} lang={zh ? "zh-TW" : "en"}>
    <header className={s.header}>
      <Link href={to("/")} className={s.brand} aria-label={zh ? "MUNI 首頁" : "MUNI home"}>MUNI<span>牟尼</span></Link>
      <nav aria-label={zh ? "頁面導覽" : "Page navigation"}>
        <a href="#explore">{zh ? "探索內容" : "Explore"}</a>
        <a href="#approach">{zh ? "如何觀察" : "Approach"}</a>
        <Link href={localeHref(zh ? "en" : "zh", "/meridian-observatory")} lang={zh ? "en" : "zh-TW"}>{zh ? "EN" : "中文"}</Link>
      </nav>
      <Link className={s.headerCta} href={to("/meridian-observatory/pro")}>{zh ? "開啟觀察室" : "Open the Observatory"}<ArrowUpRight size={16}/></Link>
    </header>

    <section className={s.hero}>
      <div className={s.heroVisual} aria-hidden="true"><Image src={copy.scenes[5].image} alt="" fill priority sizes="100vw" /></div>
      <motion.div className={s.heroCopy} {...heroReveal}>
        <p className={s.eyebrow}>MUNI · FASCIA OBSERVATORY</p>
        <h1>{zh ? <>筋膜<br/>觀察室<span className={s.titleDot}>。</span></> : <>Fascia<br/>Observatory.</>}</h1>
        <p className={s.heroSubtitle}>{zh ? "換一個維度，理解身體。" : "A new dimension of understanding."}</p>
        <p className={s.heroDescription}>{zh ? "從筋膜出發，連結經絡、肌肉與骨骼。\n在同一具 3D 人體上，觀察身體的關係。" : "Start with fascia, then connect meridians, muscles and bone on one 3D body."}</p>
        <div className={s.actions}><Link className={s.primary} href={to("/meridian-observatory/pro")}>{zh ? "開始 3D 探索" : "Explore in 3D"}<ArrowUpRight size={19}/></Link><Link className={s.textLink} href={to("/meridian-observatory-lite")}>{copy.ctaLite}<span>↗</span></Link></div>
      </motion.div>
      <div className={s.heroCaption}><span>01 / FASCIA & BODY SYSTEM</span><p>{zh ? "筋膜、經絡與解剖 · 實際操作畫面" : "Fascia, meridians & anatomy · Actual product view"}</p></div>
      <div className={s.heroFoot}><span>{zh ? "研究預覽 · 供學習與觀察" : "RESEARCH PREVIEW · FOR LEARNING"}</span><a href="#explore">{zh ? "向下探索" : "Discover"}<ArrowDown size={15}/></a></div>
    </section>

    <section id="explore" className={s.explore}>
      <motion.div {...reveal} className={s.sectionHead}><p className={s.eyebrow}>01 — EXPLORE THE BODY</p><div><h2>{zh ? <>一具人體，<br/>不同的觀察視角。</> : <>One body.<br/>Different perspectives.</>}</h2><p>{zh ? "把平面的知識放回立體的身體。選擇一種視角，看看觀察室能呈現什麼。" : "Bring knowledge into three dimensions. Choose a perspective to see what you can explore."}</p></div></motion.div>
      <div role="tablist" aria-label={zh ? "觀察方式" : "Observation views"} className={s.tabs}>{labels.map((label, i) => <button key={label} id={`view-tab-${i}`} role="tab" aria-selected={active === i} aria-controls="view-panel" tabIndex={active === i ? 0 : -1} onKeyDown={e => { if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) { e.preventDefault(); const n = e.key === "Home" ? 0 : e.key === "End" ? 5 : (active + (e.key === "ArrowRight" ? 1 : 5)) % 6; setActive(n); document.getElementById(`view-tab-${n}`)?.focus(); } }} onClick={() => setActive(i)}><span>0{i + 1}</span>{label}</button>)}</div>
      <div className={s.stage} id="view-panel" role="tabpanel" aria-labelledby={`view-tab-${active}`}>
        <motion.div key={active} initial={{ opacity: reduced ? 1 : .3 }} animate={{ opacity: 1 }} transition={{ duration: .4 }} className={s.stageImage}><Image src={copy.scenes[active].image} alt={copy.scenes[active].title + (zh ? "實際操作畫面" : " product screenshot")} width={1440} height={900} sizes="(max-width: 760px) 100vw, 85vw" /></motion.div>
        <div className={s.stageCaption}><span>0{active + 1} / 06</span><h3>{copy.scenes[active].title}</h3><p>{copy.scenes[active].body}{copy.scenes[active].note && <small>{copy.scenes[active].note}</small>}</p></div>
      </div>
    </section>

    <section id="approach" className={s.approach}>
      <motion.div {...reveal} className={s.approachIntro}><p className={s.eyebrow}>02 — FOLLOW YOUR CURIOSITY</p><h2>{zh ? <>不必先知道名字。<br/>從你想了解的地方開始。</> : <>Start with a place.<br/>You don’t need its name.</>}</h2><p>{zh ? "讓人體成為索引。由大到小、由位置到結構，一次只專注於眼前的問題。" : "Let the body be your index. Move from region to structure, one question at a time."}</p><Link className={s.textLink} href={to("/meridian-observatory/pro")}>{zh ? "在人體上試試看" : "Try it on the body"}<ArrowUpRight size={18}/></Link></motion.div>
      <div className={s.steps}>{copy.entrySteps.map(step => <article key={step.step}><span>{step.step}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></article>)}</div>
    </section>

    <section className={s.compare}><motion.div {...reveal}><p className={s.eyebrow}>03 — A SHARED PERSPECTIVE</p><h2>{zh ? <>東方的經絡，西方的解剖。<br/>一起觀察，保留各自的脈絡。</> : <>Meridians meet anatomy.<br/>Each with its own context.</>}</h2></motion.div><div className={s.compareColumns}><div><span>MERIDIAN & ACUPOINT</span><h3>{zh ? "循行與穴位" : "Pathways & points"}</h3>{copy.east.items.map(t => <p key={t}>{t}</p>)}</div><Plus className={s.plus} size={28}/><div><span>ANATOMY & FASCIA</span><h3>{zh ? "結構與筋膜" : "Structure & fascia"}</h3>{copy.west.items.map(t => <p key={t}>{t}</p>)}</div></div><p className={s.compareNote}>{copy.eastWestNote}</p></section>

    <section className={s.together}><motion.div {...reveal}><p className={s.eyebrow}>04 — WITH MUNI</p><h2>{copy.togetherTitle}</h2><p>{copy.togetherBody}</p><div className={s.togetherLinks}>{copy.togetherLinks.map(l => <Link key={l.href} className={s.textLink} href={l.external ? l.href : to(l.href)}>{l.label}<ArrowUpRight size={16}/></Link>)}</div></motion.div></section>

    <section id="start" className={s.start}><p className={s.eyebrow}>YOUR OBSERVATION STARTS HERE</p><h2>{zh ? "現在，從身體開始。" : "Begin with the body."}</h2><div className={s.versions}>{copy.versions.map((v,i) => <article key={v.name}><span>{i === 0 ? "LITE / FIRST EXPLORATION" : "PRO / DEEPER OBSERVATION"}</span><h3>{v.name}</h3><ul>{v.points.map(p => <li key={p}>{p}</li>)}</ul><Link className={i === 1 ? s.primary : s.outline} href={to(v.href)}>{v.cta}<ArrowUpRight size={18}/></Link></article>)}</div><p className={s.deviceNote}>{copy.proNote}</p></section>
    <footer className={s.footer}><div><Link className={s.brand} href={to("/")}>MUNI<span>牟尼</span></Link><p>{copy.preview}</p><ul className={s.notice} aria-label={copy.noticeTitle}>{copy.notice.map(n => <li key={n}>{n}</li>)}</ul></div><div><Link href={to("/")}>{zh ? "返回 MUNI" : "Back to MUNI"} ↗</Link><Link href={to("/fascia-point")}>Fascia Point ↗</Link><span>© {new Date().getFullYear()} MUNI</span></div></footer>
    <Footer />
  </main>;
}
