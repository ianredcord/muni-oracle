"use client";

import { useState } from "react";
import Image from "next/image";

/* ─── 傳承人資料 ─── */
const lineageData = [
  {
    generation: "創始人",
    name: "董景昌 先生",
    years: "1916 – 1975",
    image: "https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-3-0董公.jpg",
    summary: "祖籍山東平度縣，看診四十餘年，治療人次達四十餘萬。1971 年治癒高棉龍諾總統中風半身不遂，舉世聞名，被譽為「當代針聖」。1973 年出版《董氏針灸正經奇穴學》，一生共收 75 位弟子。",
  },
  {
    generation: "一代傳人",
    name: "胡文智 先生",
    years: "1943 –",
    image: "https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-3-1胡文智.jpg",
    summary: "1964 年起拜師董公景昌先生，前後近 12 年學習與跟診，蒙董公將隨身《臨症手札》交付保存，盡得董公針術真傳。1987 年出版《最新實用董氏針灸奇穴全集》，公佈董氏 72 絕針與 32 解穴。",
  },
  {
    generation: "二代傳人",
    name: "李國政 先生",
    years: "",
    image: "https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-3-2-李國政.jpg",
    summary: "董氏門人中承先啟後的奇人。首位提出運用全息律揭秘董氏穴位系統心法之人，提出「董針秘要，手足一如。全息倒馬，針到病除」。三十年間著作董針書籍 38 本，收入門弟子 398 位，是推廣董針的極大功臣。",
  },
  {
    generation: "三代傳人",
    name: "程守羿（希智）博士",
    years: "",
    image: "https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-3-3-程稀智.jpg",
    summary: "李國政先生在台灣所收最後一位入門弟子。廣州中醫藥大學針灸推拿學博士、台灣大學電機工程學碩士。結合氣功、中醫醫理、量子力學，著有《針灸通用全息密碼》、《六根身心統合療法與董針》等書。創立董氏奇穴心氣神養生協會。",
  },
];

/* ─── Tab 定義 ─── */
type TabKey = "intro" | "lineage" | "holographic" | "cheng";

const tabs: { key: TabKey; label: string; anchor: string }[] = [
  { key: "intro", label: "董氏奇穴簡介", anchor: "about" },
  { key: "lineage", label: "傳承脈絡", anchor: "lineage" },
  { key: "holographic", label: "全息心法", anchor: "holographic" },
  { key: "cheng", label: "三代傳人 程守羿", anchor: "cheng" },
];

export default function AboutTungsClient() {
  const [activeTab, setActiveTab] = useState<TabKey>("intro");

  return (
    <>
      {/* ─── 關於董氏奇穴 ─── */}
      <section id="about" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-3">ABOUT TUNG&apos;S ACUPUNCTURE</p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#4a5548] mb-4">
              關於董氏奇穴
            </h2>
            <p className="text-stone-500 leading-relaxed max-w-2xl mx-auto">
              董氏針灸由董景昌先生帶來這個世界，在台灣傳承，已揚名於世界。
              <br className="hidden sm:inline" />
              以全息心法為核心，開創易學、易懂、安全、有效的療癒體系。
            </p>
          </div>

          {/* Tab 切換 */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-[#4a5548] text-white shadow-md"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-[#4a5548] hover:text-[#4a5548]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 內容 */}
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
            {/* ─── 董氏奇穴簡介 ─── */}
            {activeTab === "intro" && (
              <div className="p-6 md:p-10">
                {/* 董景昌先生照片與簡介 */}
                <div className="flex flex-col md:flex-row gap-8 mb-10">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 shadow-md">
                      <Image
                        src="https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-1-董公.jpg"
                        alt="董景昌先生"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <p className="text-center text-sm text-stone-500 mt-3 font-serif">
                      董景昌先生（1916 – 1975）
                    </p>
                  </div>
                  <div className="md:w-2/3 space-y-4 text-stone-600 leading-relaxed">
                    <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-2">
                      當代針聖 · 董景昌先生
                    </h3>
                    <p>
                      董景昌先生，祖籍山東平度縣，生於 1916 年 5 月 23 日，逝於 1975 年 11 月 7 日，享年 60 歲。先生少年時期，社會局勢動盪，母親為保全獨子而將其送入青島嶗山道觀避亂，先生因此而有緣接觸道法之修煉。
                    </p>
                    <p>
                      董景昌先生於 1939 年開始在山東家鄉為人下針看診，期間經常為鄰里服務而不計較診察費用。1949 年因國共戰爭到了台灣，1953 年退役後於台北開設診所，救人無數。景昌先生看診四十餘年，其所治療人次達四十餘萬人，數度榮膺好人好事代表，其大醫精誠之風骨極受人所讚譽。
                    </p>
                    <p>
                      1971 年，高棉的龍諾總統因中風而半身不遂，曾赴美就醫治療數月未見效。經邀請景昌先生前往高棉下針治療，僅下針第二天，龍諾總統即可感覺到過去八個月無法感覺到的左腳，下針三周已可起身拿拐杖走路。先生前後共五度前往高棉，完全治癒龍諾總統的中風半身不遂，受龍諾總統頒授感謝狀、醫學博士、軍級國防勳章，同時也獲蔣介石總統頒贈最高榮譽狀，為中醫界獲得此項殊榮之第一人。
                    </p>
                  </div>
                </div>

                {/* 龍諾總統治療照片 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className="relative aspect-square rounded-lg overflow-hidden bg-stone-100 border border-stone-100">
                      <Image
                        src={`https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/董公${n <= 1 ? '治癒' : n === 2 ? '因治癒' : '治癒'}龍諾總統疾病${n}-300x${n === 1 ? '206' : n === 2 ? '300' : n === 3 ? '167' : n === 4 ? '274' : '230'}.jpg`}
                        alt={`董公治癒龍諾總統 ${n}`}
                        fill
                        className="object-cover"
                        sizes="20vw"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>

                {/* 著作 */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-stone-50 rounded-xl">
                  <div className="w-32 h-40 relative rounded-lg overflow-hidden bg-white shadow-md flex-shrink-0">
                    <Image
                      src="https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-1-董氏針灸正經奇穴學.jpg"
                      alt="董氏針灸正經奇穴學"
                      fill
                      className="object-contain"
                      sizes="128px"
                      unoptimized
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-serif font-bold text-[#4a5548] mb-2">《董氏針灸正經奇穴學》</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      景昌先生於 1973 年 8 月出版此書，正式將董氏穴位公開於世，並且開始收弟子廣傳其絕妙針術。先生一生共計收有 75 位弟子，時至今日，董氏針灸已遍傳世界各地，並以其收效甚宏而在國際針灸界獲得各方高度肯定與讚譽。景昌先生也因此被佳譽為「當代針聖」。
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ─── 傳承脈絡 ─── */}
            {activeTab === "lineage" && (
              <div id="lineage" className="p-6 md:p-10 scroll-mt-20">
                <div className="text-center mb-10">
                  <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                    董氏針灸傳承脈絡
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-2xl mx-auto">
                    董氏針灸由董景昌先生帶來這個世界，在台灣傳承，並已揚名於世界。
                    經過數代真傳傳人的心法整理與推廣，造福了世上無數病患。
                  </p>
                </div>

                {/* 傳承時間線 */}
                <div className="relative">
                  {/* 垂直線 */}
                  <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4a5548] via-[#9A7B4F] to-[#C4A265] hidden sm:block" />

                  <div className="space-y-12">
                    {lineageData.map((person, idx) => (
                      <div
                        key={idx}
                        className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                          idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                        }`}
                      >
                        {/* 時間線節點 */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4a5548] rounded-full border-4 border-[#F9F7F2] z-10 hidden sm:block" />

                        {/* 內容卡片 */}
                        <div className={`sm:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "sm:pr-8" : "sm:pl-8"} w-full`}>
                          <div className="bg-stone-50 rounded-xl p-5 border border-stone-100 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                              <div className="w-20 h-24 relative rounded-lg overflow-hidden bg-white shadow-sm flex-shrink-0">
                                <Image
                                  src={person.image}
                                  alt={person.name}
                                  fill
                                  className="object-cover"
                                  sizes="80px"
                                  unoptimized
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="inline-block px-2.5 py-0.5 bg-[#4a5548] text-white text-xs rounded-full mb-1.5">
                                  {person.generation}
                                </span>
                                <h4 className="font-serif font-bold text-[#4a5548] text-lg">
                                  {person.name}
                                </h4>
                                {person.years && (
                                  <p className="text-xs text-stone-400 mb-1">{person.years}</p>
                                )}
                              </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed mt-3">
                              {person.summary}
                            </p>
                          </div>
                        </div>

                        {/* 佔位 */}
                        <div className="sm:w-[calc(50%-2rem)] hidden sm:block" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 傳承核心精神 */}
                <div className="mt-12 p-6 bg-gradient-to-br from-[#4a5548]/5 to-[#9A7B4F]/5 rounded-xl border border-stone-100">
                  <blockquote className="text-center">
                    <p className="font-serif text-lg md:text-xl text-[#4a5548] leading-relaxed italic">
                      「董針秘要，手足一如。全息倒馬，針到病除。」
                    </p>
                    <footer className="mt-3 text-sm text-stone-500">
                      — 李國政先生 提出之董針運用心法
                    </footer>
                  </blockquote>
                </div>
              </div>
            )}

            {/* ─── 全息心法 ─── */}
            {activeTab === "holographic" && (
              <div id="holographic" className="p-6 md:p-10 scroll-mt-20">
                <div className="text-center mb-10">
                  <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                    全息心法 · 董氏奇穴的科學原理
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-2xl mx-auto">
                    董氏奇穴的核心在於「全息原理」——身體的每一個區段，
                    都包含了人體的完整訊息。
                  </p>
                </div>

                {/* 全息圖示 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {[
                    { src: "https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-2-腳底按摩圖.jpg", label: "腳底按摩圖", desc: "腳底反射區對應全身臟腑" },
                    { src: "https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-2-耳穴圖.jpg", label: "耳穴圖", desc: "耳朵穴位對應全身系統" },
                    { src: "https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-2-第二掌骨全息示意圖.jpg", label: "第二掌骨全息示意圖", desc: "掌骨全息對應人體各部" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-stone-50 rounded-xl p-4 border border-stone-100 text-center">
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-white mb-3">
                        <Image
                          src={item.src}
                          alt={item.label}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          unoptimized
                        />
                      </div>
                      <h4 className="font-serif font-bold text-[#4a5548] text-sm mb-1">{item.label}</h4>
                      <p className="text-xs text-stone-500">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* 全息原理說明 */}
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  <div className="p-5 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                    <h4 className="font-serif font-bold text-[#9A7B4F] mb-2">什麼是全息原理？</h4>
                    <p className="text-sm">
                      「全息原理」（Holographic Principle）是量子宇宙論的重要性質：「一個空間裡面的所有訊息都以編碼的形式存在於它的相對較低次元的邊界上。」中醫早已運用此原理——腳底按摩圖和耳穴圖，正是在有限的邊界中，存在著全身的訊息。
                    </p>
                  </div>

                  <div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
                    <h4 className="font-serif font-bold text-[#4a5548] mb-2">張穎清教授的生物全息律</h4>
                    <p className="text-sm">
                      1973 年張穎清教授以第二掌指骨作為範例提出中醫的全息律：「每個人身上任何一個具有生命功能又相對獨立的區段上，都包含了人體的完整訊息！」經各國醫生臨床研究證實，生物全息診療法在 200 多種疾病的診斷準確率和治療有效率都超過 90%。
                    </p>
                  </div>

                  <div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
                    <h4 className="font-serif font-bold text-[#4a5548] mb-2">董針的三大秘密</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
                      {[
                        { title: "貼骨下針", desc: "穴位位於骨側，貼骨下針時即有頗大刺激量，無需多餘手法即有極佳針效。" },
                        { title: "倒馬針法", desc: "一根針是一根針的效果；二根針不是乘以二，而是更多；三針倒馬，效果更是數倍。" },
                        { title: "留針時間", desc: "留針時間應至少五十分鐘以上，經數十年實證，確實非常有助於提高針效。" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-stone-100">
                          <div className="w-8 h-8 bg-[#4a5548] text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">
                            {idx + 1}
                          </div>
                          <h5 className="font-bold text-[#4a5548] text-sm mb-1">{item.title}</h5>
                          <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 bg-gradient-to-br from-[#4a5548]/5 to-[#9A7B4F]/5 rounded-xl border border-stone-100">
                    <h4 className="font-serif font-bold text-[#4a5548] mb-2">跨次元的療癒</h4>
                    <p className="text-sm">
                      董公景昌先生依據全息心法所設置的穴位，與身體原本就有高度的相關連結，期間的溝通乃是屬於訊息層次的傳遞。正因如此，下針治療的訊息可以不必受到身體特定通道阻塞的影響，而直接傳送到所要治療的標的。這就是為什麼許多久病、怪病，董針能夠在短時間內治癒的重要原因之一。
                    </p>
                    <p className="text-sm mt-3">
                      董針並非如傳統經絡一般只走身體層次。董針常扎針在骨側骨縫或經絡附近，確實加大了身體層次的刺激；但董針的全息應用其實還走在信息層次，是超越肉體層次的<strong>跨次元治療</strong>。這才是董針不需強調傳統經絡但卻能收效神速的真正重要原因。
                    </p>
                  </div>
                </div>

                {/* 引用 */}
                <div className="mt-8 p-6 bg-white rounded-xl border border-stone-200 text-center">
                  <blockquote className="font-serif text-lg text-[#4a5548] italic leading-relaxed">
                    「徹底瞭解一根中指，就可以診治百病。」
                  </blockquote>
                  <footer className="mt-2 text-sm text-stone-500">— 董景昌先生</footer>
                </div>
              </div>
            )}

            {/* ─── 三代傳人程守羿 ─── */}
            {activeTab === "cheng" && (
              <div id="cheng" className="p-6 md:p-10 scroll-mt-20">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="md:w-1/3 flex-shrink-0 space-y-4">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 shadow-md">
                      <Image
                        src="https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-5-程希智向李國政入門拜師儀式合影.jpg"
                        alt="程希智向李國政入門拜師儀式合影"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <p className="text-center text-xs text-stone-400">程希智向李國政入門拜師儀式合影</p>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-1">
                      程守羿（希智）博士
                    </h3>
                    <p className="text-sm text-[#9A7B4F] mb-4">董氏奇穴第三代真傳傳人</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {[
                        "董氏奇穴心氣神養生協會理事長",
                        "六根統合療法第一代真傳傳人",
                        "廣州中醫藥大學針灸推拿學博士",
                        "台灣大學電機工程學碩士",
                        "「針灸通用全息密碼」作者",
                        "「六根身心統合療法與董針」作者",
                        "守羿思塾 養生學苑帶領人",
                      ].map((title, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full"
                        >
                          {title}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
                      <p>
                        程守羿先生為李國政先生在台灣所收最後一位入門弟子。自幼起長年研習氣功、中醫、太極拳、命理、佛道。得名師指點，通徹了解董氏穴位之全息心法後，結合氣功、中醫醫理、量子力學等觀念，發現董氏穴位結合了全息、衛氣營血、臟腑五行、經絡、神經感傳、肌筋膜感傳等中醫醫理及解剖觀念。
                      </p>
                      <p>
                        穴位運作經常橫跨物質、能量、信息等各個次元，其中道理極為深妙。其所整理之門人三階心法，成為學生們能快速進步的系統性教學法，希望能效法其恩師李國政先生，上承董公志業盡量廣傳，將高深醫理以淺顯易懂之方式推廣，讓更多人受惠。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 師徒合影 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white">
                      <Image
                        src="https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-5-李國政與程希智合影於深圳.jpg"
                        alt="李國政與程希智合影於深圳"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                    <p className="text-center text-xs text-stone-500 mt-2">李國政與程希智合影於深圳</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white">
                      <Image
                        src="https://www.tungs-acupuncture.com/wp-content/uploads/2020/08/2-5-李國政授-得我真傳-墨寶予程希智.jpg"
                        alt="李國政授「得我真傳」墨寶予程希智"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                    <p className="text-center text-xs text-stone-500 mt-2">李國政授「得我真傳」墨寶予程希智</p>
                  </div>
                </div>

                {/* 作者序文節錄 */}
                <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                  <h4 className="font-serif font-bold text-[#9A7B4F] mb-3">
                    《針灸通用全息密碼》作者序文節錄
                  </h4>
                  <div className="space-y-3 text-stone-600 text-sm leading-relaxed italic">
                    <p>
                      「幾年前攻讀廣州中醫藥大學針灸推拿學博士班時，因緣巧合之下，選擇了董針作為論文題目，開始認識董針。我發現董針的觀念與傳統中醫不僅絲毫沒有違背之處，反而可以說是從更多更廣更深的角度體現了中醫的精髓！」
                    </p>
                    <p>
                      「入門以來細細體會，深感『大道至簡』。若能了解病與治療的原理，又何需如此辛苦？若能體會『心中無穴處處穴』的奧秘，又何需苦讀死記？」
                    </p>
                    <p>
                      「在思考董針全息運用的過程中，過去台大電機碩士的背景及對近代物理的興趣，竟然對我有非常多啟發。近代物理的發展證明了信息—能量—物質這三個層次中，信息的重要。董針即蘊含非常高明的信息層次運用。了解其中奧秘之後，只要掌握心法，不必執著於穴點位置，仍見奇效！」
                    </p>
                  </div>
                </div>

                {/* 核心理念 */}
                <div className="mt-8 p-6 bg-white rounded-xl border border-stone-200 text-center">
                  <blockquote className="font-serif text-lg text-[#4a5548] italic leading-relaxed">
                    「全息即是天人合一的體現，即是道，即是宇宙之真理與規律。」
                  </blockquote>
                  <footer className="mt-2 text-sm text-stone-500">— 程守羿 博士</footer>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
