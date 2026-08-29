// 董氏心氣神針頁面的中英文文案（/acupuncture）
import type { Locale } from "@/i18n/config";

export type LineagePerson = {
  generation: string;
  name: string;
  years: string;
  image: string;
  summary: string;
};

export type AcupunctureCopy = {
  metaTitle: string;
  metaDescription: string;
  backToSystems: string;
  eyebrow: string;
  title: string;
  heroLead: string;
  heroSub: string;
  navAbout: string;
  navLineage: string;
  navHolographic: string;
  navAcupoints: string;
  atlasEyebrow: string;
  atlasTitle: string;
  atlasLead: string;
  atlasLoading: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;

  aboutEyebrow: string;
  aboutTitle: string;
  aboutLead: string;
  tabIntro: string;
  tabLineage: string;
  tabHolographic: string;
  tabCheng: string;

  dongCaption: string;
  dongHeading: string;
  dongParagraphs: string[];
  presidentImageAlt: string;
  bookTitle: string;
  bookBody: string;

  lineageTitle: string;
  lineageLead: string;
  lineage: LineagePerson[];
  lineageQuote: string;
  lineageQuoteSource: string;

  holographicTitle: string;
  holographicLead: string;
  holographicFigures: { label: string; desc: string }[];
  holoWhatTitle: string;
  holoWhatBody: string;
  holoZhangTitle: string;
  holoZhangBody: string;
  holoSecretsTitle: string;
  holoSecrets: { title: string; desc: string }[];
  holoCrossTitle: string;
  holoCrossBody1: string;
  holoCrossBody2Prefix: string;
  holoCrossBody2Strong: string;
  holoCrossBody2Suffix: string;
  holoQuote: string;
  holoQuoteSource: string;

  chengCaption: string;
  chengName: string;
  chengRole: string;
  chengTitles: string[];
  chengParagraphs: string[];
  chengPhoto1: string;
  chengPhoto2: string;
  chengPrefaceTitle: string;
  chengPreface: string[];
  chengQuote: string;
  chengQuoteSource: string;
};

const zh: AcupunctureCopy = {
  metaTitle: "董氏心氣神針 | MUNI 療癒生態系統",
  metaDescription:
    "董氏奇穴心氣神針法完整介紹，涵蓋董景昌先生簡介、傳承脈絡、全息心法原理，以及一一到十十部位共 176 個穴位圖解。搭配 MUNI 牟尼香與日本針灸貼，在家即可進行穴位保健。",
  backToSystems: "返回療癒系統總覽",
  eyebrow: "TUNG'S ACUPUNCTURE · 心氣神針",
  title: "董氏心氣神針",
  heroLead:
    "傳承自董景昌先生的董氏奇穴針法，歷經三代真傳，\n以全息心法為核心，開創跨次元的療癒體系。",
  heroSub:
    "搭配 MUNI 牟尼香塗抹穴位，再貼上 Somaniks 日本針灸貼，讓穴位保健融入你的日常生活。",
  navAbout: "關於董氏奇穴",
  navLineage: "傳承脈絡",
  navHolographic: "全息心法",
  navAcupoints: "穴位詳解",
  atlasEyebrow: "ACUPOINT ATLAS",
  atlasTitle: "穴位詳解",
  atlasLead:
    "十大部位，176 個穴位，完整圖解與詳細說明。\n點擊穴位卡片查看詳細資訊與 MUNI 搭配建議。",
  atlasLoading: "載入穴位資料中...",
  ctaTitle: "想知道哪個穴位適合你？",
  ctaBody:
    "告訴 MUNI 療癒顧問你的身體狀況，\nAI 會為你推薦最適合的穴位搭配精油與針灸貼方案。",
  ctaButton: "問問 MUNI 療癒顧問",

  aboutEyebrow: "ABOUT TUNG'S ACUPUNCTURE",
  aboutTitle: "關於董氏奇穴",
  aboutLead:
    "董氏針灸由董景昌先生帶來這個世界，在台灣傳承，已揚名於世界。\n以全息心法為核心，開創易學、易懂、安全、有效的療癒體系。",
  tabIntro: "董氏奇穴簡介",
  tabLineage: "傳承脈絡",
  tabHolographic: "全息心法",
  tabCheng: "三代傳人 程守羿",

  dongCaption: "董景昌先生（1916 – 1975）",
  dongHeading: "當代針聖 · 董景昌先生",
  dongParagraphs: [
    "董景昌先生，祖籍山東平度縣，生於 1916 年 5 月 23 日，逝於 1975 年 11 月 7 日，享年 60 歲。先生少年時期，社會局勢動盪，母親為保全獨子而將其送入青島嶗山道觀避亂，先生因此而有緣接觸道法之修煉。",
    "董景昌先生於 1939 年開始在山東家鄉為人下針看診，期間經常為鄰里服務而不計較診察費用。1949 年因國共戰爭到了台灣，1953 年退役後於台北開設診所，救人無數。景昌先生看診四十餘年，其所治療人次達四十餘萬人，數度榮膺好人好事代表，其大醫精誠之風骨極受人所讚譽。",
    "1971 年，高棉的龍諾總統因中風而半身不遂，曾赴美就醫治療數月未見效。經邀請景昌先生前往高棉下針治療，僅下針第二天，龍諾總統即可感覺到過去八個月無法感覺到的左腳，下針三周已可起身拿拐杖走路。先生前後共五度前往高棉，完全治癒龍諾總統的中風半身不遂，受龍諾總統頒授感謝狀、醫學博士、軍級國防勳章，同時也獲蔣介石總統頒贈最高榮譽狀，為中醫界獲得此項殊榮之第一人。",
  ],
  presidentImageAlt: "董公治癒龍諾總統",
  bookTitle: "《董氏針灸正經奇穴學》",
  bookBody:
    "景昌先生於 1973 年 8 月出版此書，正式將董氏穴位公開於世，並且開始收弟子廣傳其絕妙針術。先生一生共計收有 75 位弟子，時至今日，董氏針灸已遍傳世界各地，並以其收效甚宏而在國際針灸界獲得各方高度肯定與讚譽。景昌先生也因此被佳譽為「當代針聖」。",

  lineageTitle: "董氏針灸傳承脈絡",
  lineageLead:
    "董氏針灸由董景昌先生帶來這個世界，在台灣傳承，並已揚名於世界。經過數代真傳傳人的心法整理與推廣，造福了世上無數病患。",
  lineage: [
    {
      generation: "創始人",
      name: "董景昌 先生",
      years: "1916 – 1975",
      image: "/images/acupuncture/dong-gong-portrait.jpg",
      summary:
        "祖籍山東平度縣，看診四十餘年，治療人次達四十餘萬。1971 年治癒高棉龍諾總統中風半身不遂，舉世聞名，被譽為「當代針聖」。1973 年出版《董氏針灸正經奇穴學》，一生共收 75 位弟子。",
    },
    {
      generation: "一代傳人",
      name: "胡文智 先生",
      years: "1943 –",
      image: "/images/acupuncture/hu-wenzhi.jpg",
      summary:
        "1964 年起拜師董公景昌先生，前後近 12 年學習與跟診，蒙董公將隨身《臨症手札》交付保存，盡得董公針術真傳。1987 年出版《最新實用董氏針灸奇穴全集》，公佈董氏 72 絕針與 32 解穴。",
    },
    {
      generation: "二代傳人",
      name: "李國政 先生",
      years: "",
      image: "/images/acupuncture/li-guozheng.jpg",
      summary:
        "董氏門人中承先啟後的奇人。首位提出運用全息律揭秘董氏穴位系統心法之人，提出「董針秘要，手足一如。全息倒馬，針到病除」。三十年間著作董針書籍 38 本，收入門弟子 398 位，是推廣董針的極大功臣。",
    },
    {
      generation: "三代傳人",
      name: "程守羿（希智）博士",
      years: "",
      image: "/images/acupuncture/cheng-xizhi.jpg",
      summary:
        "李國政先生在台灣所收最後一位入門弟子。廣州中醫藥大學針灸推拿學博士、台灣大學電機工程學碩士。結合氣功、中醫醫理、量子力學，著有《針灸通用全息密碼》、《六根身心統合療法與董針》等書。創立董氏奇穴心氣神養生協會。",
    },
  ],
  lineageQuote: "「董針秘要，手足一如。全息倒馬，針到病除。」",
  lineageQuoteSource: "— 李國政先生 提出之董針運用心法",

  holographicTitle: "全息心法 · 董氏奇穴的科學原理",
  holographicLead:
    "董氏奇穴的核心在於「全息原理」——身體的每一個區段，都包含了人體的完整訊息。",
  holographicFigures: [
    { label: "腳底按摩圖", desc: "腳底反射區對應全身臟腑" },
    { label: "耳穴圖", desc: "耳朵穴位對應全身系統" },
    { label: "第二掌骨全息示意圖", desc: "掌骨全息對應人體各部" },
  ],
  holoWhatTitle: "什麼是全息原理？",
  holoWhatBody:
    "「全息原理」（Holographic Principle）是量子宇宙論的重要性質：「一個空間裡面的所有訊息都以編碼的形式存在於它的相對較低次元的邊界上。」中醫早已運用此原理——腳底按摩圖和耳穴圖，正是在有限的邊界中，存在著全身的訊息。",
  holoZhangTitle: "張穎清教授的生物全息律",
  holoZhangBody:
    "1973 年張穎清教授以第二掌指骨作為範例提出中醫的全息律：「每個人身上任何一個具有生命功能又相對獨立的區段上，都包含了人體的完整訊息！」經各國醫生臨床研究證實，生物全息診療法在 200 多種疾病的診斷準確率和治療有效率都超過 90%。",
  holoSecretsTitle: "董針的三大秘密",
  holoSecrets: [
    { title: "貼骨下針", desc: "穴位位於骨側，貼骨下針時即有頗大刺激量，無需多餘手法即有極佳針效。" },
    { title: "倒馬針法", desc: "一根針是一根針的效果；二根針不是乘以二，而是更多；三針倒馬，效果更是數倍。" },
    { title: "留針時間", desc: "留針時間應至少五十分鐘以上，經數十年實證，確實非常有助於提高針效。" },
  ],
  holoCrossTitle: "跨次元的療癒",
  holoCrossBody1:
    "董公景昌先生依據全息心法所設置的穴位，與身體原本就有高度的相關連結，期間的溝通乃是屬於訊息層次的傳遞。正因如此，下針治療的訊息可以不必受到身體特定通道阻塞的影響，而直接傳送到所要治療的標的。這就是為什麼許多久病、怪病，董針能夠在短時間內治癒的重要原因之一。",
  holoCrossBody2Prefix:
    "董針並非如傳統經絡一般只走身體層次。董針常扎針在骨側骨縫或經絡附近，確實加大了身體層次的刺激；但董針的全息應用其實還走在信息層次，是超越肉體層次的",
  holoCrossBody2Strong: "跨次元治療",
  holoCrossBody2Suffix: "。這才是董針不需強調傳統經絡但卻能收效神速的真正重要原因。",
  holoQuote: "「徹底瞭解一根中指，就可以診治百病。」",
  holoQuoteSource: "— 董景昌先生",

  chengCaption: "程希智向李國政入門拜師儀式合影",
  chengName: "程守羿（希智）博士",
  chengRole: "董氏奇穴第三代真傳傳人",
  chengTitles: [
    "董氏奇穴心氣神養生協會理事長",
    "六根統合療法第一代真傳傳人",
    "廣州中醫藥大學針灸推拿學博士",
    "台灣大學電機工程學碩士",
    "「針灸通用全息密碼」作者",
    "「六根身心統合療法與董針」作者",
    "守羿思塾 養生學苑帶領人",
  ],
  chengParagraphs: [
    "程守羿先生為李國政先生在台灣所收最後一位入門弟子。自幼起長年研習氣功、中醫、太極拳、命理、佛道。得名師指點，通徹了解董氏穴位之全息心法後，結合氣功、中醫醫理、量子力學等觀念，發現董氏穴位結合了全息、衛氣營血、臟腑五行、經絡、神經感傳、肌筋膜感傳等中醫醫理及解剖觀念。",
    "穴位運作經常橫跨物質、能量、信息等各個次元，其中道理極為深妙。其所整理之門人三階心法，成為學生們能快速進步的系統性教學法，希望能效法其恩師李國政先生，上承董公志業盡量廣傳，將高深醫理以淺顯易懂之方式推廣，讓更多人受惠。",
  ],
  chengPhoto1: "李國政與程希智合影於深圳",
  chengPhoto2: "李國政授「得我真傳」墨寶予程希智",
  chengPrefaceTitle: "《針灸通用全息密碼》作者序文節錄",
  chengPreface: [
    "「幾年前攻讀廣州中醫藥大學針灸推拿學博士班時，因緣巧合之下，選擇了董針作為論文題目，開始認識董針。我發現董針的觀念與傳統中醫不僅絲毫沒有違背之處，反而可以說是從更多更廣更深的角度體現了中醫的精髓！」",
    "「入門以來細細體會，深感『大道至簡』。若能了解病與治療的原理，又何需如此辛苦？若能體會『心中無穴處處穴』的奧秘，又何需苦讀死記？」",
    "「在思考董針全息運用的過程中，過去台大電機碩士的背景及對近代物理的興趣，竟然對我有非常多啟發。近代物理的發展證明了信息—能量—物質這三個層次中，信息的重要。董針即蘊含非常高明的信息層次運用。了解其中奧秘之後，只要掌握心法，不必執著於穴點位置，仍見奇效！」",
  ],
  chengQuote: "「全息即是天人合一的體現，即是道，即是宇宙之真理與規律。」",
  chengQuoteSource: "— 程守羿 博士",
};

const en: AcupunctureCopy = {
  metaTitle: "Tung's heart-qi-spirit needling | The MUNI healing ecosystem",
  metaDescription:
    "A complete introduction to Master Tung's heart-qi-spirit needling: the life of Tung Ching-chang, the lineage that carried it forward, the holographic principle behind it, and illustrated notes on all 176 points across the ten regions. With MUNI Scent and Japanese acupuncture patches, point care becomes something you can do at home.",
  backToSystems: "Back to the healing systems",
  eyebrow: "TUNG'S ACUPUNCTURE · HEART, QI AND SPIRIT",
  title: "Tung's heart-qi-spirit needling",
  heroLead:
    "Master Tung's extraordinary points, handed down from Tung Ching-chang through three generations of direct transmission,\nwith the holographic principle at its centre — a system of healing that works across dimensions.",
  heroSub:
    "Apply MUNI Scent to the point, place a Somaniks Japanese acupuncture patch over it, and point care becomes part of your ordinary day.",
  navAbout: "About Tung's points",
  navLineage: "The lineage",
  navHolographic: "The holographic principle",
  navAcupoints: "The point atlas",
  atlasEyebrow: "ACUPOINT ATLAS",
  atlasTitle: "The point atlas",
  atlasLead:
    "Ten regions, 176 points, fully illustrated and described.\nTap a point card for the detail and for how to pair it with MUNI.",
  atlasLoading: "Loading the point data…",
  ctaTitle: "Want to know which point suits you?",
  ctaBody:
    "Tell the MUNI Healing Consultant how your body is,\nand it will suggest the points, oils and patches that fit you best.",
  ctaButton: "Ask the MUNI Healing Consultant",

  aboutEyebrow: "ABOUT TUNG'S ACUPUNCTURE",
  aboutTitle: "About Tung's extraordinary points",
  aboutLead:
    "Tung's acupuncture was brought into the world by Tung Ching-chang, carried forward in Taiwan, and is now known internationally.\nWith the holographic principle at its centre, it opened a system that is learnable, understandable, safe and effective.",
  tabIntro: "An introduction",
  tabLineage: "The lineage",
  tabHolographic: "The holographic principle",
  tabCheng: "Third generation: Dr Cheng Shou-yi",

  dongCaption: "Tung Ching-chang (1916 – 1975)",
  dongHeading: "The needle sage of his age · Tung Ching-chang",
  dongParagraphs: [
    "Tung Ching-chang's family came from Pingdu county in Shandong. He was born on 23 May 1916 and died on 7 November 1975, aged sixty. In his youth, amid social upheaval, his mother sent her only son to a Daoist temple on Mount Lao near Qingdao for safety — which is how he came to encounter Daoist practice.",
    "From 1939 he began treating people with needles in his home region of Shandong, often serving neighbours without regard to fees. He came to Taiwan in 1949 during the civil war and, after leaving military service in 1953, opened a clinic in Taipei where he treated countless patients. Across more than forty years of practice he treated over four hundred thousand people, was repeatedly honoured as a model citizen, and was widely admired for the integrity of a great physician.",
    "In 1971 President Lon Nol of Cambodia was left hemiplegic after a stroke and had spent months seeking treatment in the United States without result. Tung was invited to Cambodia to treat him. On the second day of needling, the president could feel his left leg for the first time in eight months; within three weeks he could stand and walk with a cane. Tung travelled to Cambodia five times in all and fully resolved the hemiplegia. He received a letter of thanks, an honorary doctorate of medicine and a national defence decoration from President Lon Nol, along with the highest honour from President Chiang Kai-shek — the first person in Chinese medicine to be so recognised.",
  ],
  presidentImageAlt: "Tung Ching-chang treating President Lon Nol",
  bookTitle: "Tung's Acupuncture: Regular Channels and Extraordinary Points",
  bookBody:
    "Tung published this book in August 1973, formally making his point system public and beginning to take students in order to pass on his method. Over his lifetime he accepted 75 disciples. Tung's acupuncture has since spread worldwide and, through its results, has won wide recognition in the international acupuncture community. It is for this that Tung is remembered as the needle sage of his age.",

  lineageTitle: "How Tung's acupuncture was handed down",
  lineageLead:
    "Tung's acupuncture was brought into the world by Tung Ching-chang, carried forward in Taiwan, and is now known internationally. Successive generations of direct lineage holders have organised and taught the method, to the benefit of countless patients.",
  lineage: [
    {
      generation: "Founder",
      name: "Tung Ching-chang",
      years: "1916 – 1975",
      image: "/images/acupuncture/dong-gong-portrait.jpg",
      summary:
        "From Pingdu county, Shandong. More than forty years in practice and over four hundred thousand treatments. In 1971 he resolved President Lon Nol's post-stroke hemiplegia, becoming known worldwide and remembered as the needle sage of his age. He published his book of points in 1973 and accepted 75 disciples in his lifetime.",
    },
    {
      generation: "First generation",
      name: "Hu Wen-chih",
      years: "1943 –",
      image: "/images/acupuncture/hu-wenzhi.jpg",
      summary:
        "A student of Tung from 1964, studying and attending clinic with him for nearly twelve years. Tung entrusted him with his personal clinical notebooks, and he received the full transmission of the method. In 1987 he published a comprehensive practical collection, making public Tung's 72 principal needlings and 32 releasing points.",
    },
    {
      generation: "Second generation",
      name: "Li Kuo-cheng",
      years: "",
      image: "/images/acupuncture/li-guozheng.jpg",
      summary:
        "A remarkable figure who both inherited and advanced the tradition. He was the first to use the holographic law to open up the inner method of Tung's point system, offering the formula \"the secret of Tung's needling: hand and foot as one; the holographic dao ma, and the illness resolves.\" Over thirty years he wrote 38 books on the method and accepted 398 disciples, doing more than anyone to spread it.",
    },
    {
      generation: "Third generation",
      name: "Dr Cheng Shou-yi (Hsi-chih)",
      years: "",
      image: "/images/acupuncture/cheng-xizhi.jpg",
      summary:
        "The last disciple Li Kuo-cheng accepted in Taiwan. He holds a doctorate in acupuncture and tuina from Guangzhou University of Chinese Medicine and a master's in electrical engineering from National Taiwan University. Bringing together qigong, Chinese medical theory and quantum physics, he is the author of works on the universal holographic code in acupuncture and on six-sense integrative therapy with Tung's needling, and founded the Tung's Acupuncture Heart-Qi-Spirit Wellness Association.",
    },
  ],
  lineageQuote:
    "“The secret of Tung's needling: hand and foot as one. The holographic dao ma, and the illness resolves.”",
  lineageQuoteSource: "— Li Kuo-cheng, on the working principle of Tung's needling",

  holographicTitle:
    "The holographic principle · the science behind Tung's points",
  holographicLead:
    "At the centre of Tung's points is the holographic principle — every region of the body contains the complete information of the whole.",
  holographicFigures: [
    { label: "Foot reflexology chart", desc: "Reflex zones of the sole correspond to the organs" },
    { label: "Auricular chart", desc: "Points on the ear correspond to the body's systems" },
    { label: "Second metacarpal hologram", desc: "The metacarpal maps the whole body" },
  ],
  holoWhatTitle: "What is the holographic principle?",
  holoWhatBody:
    "The holographic principle is a significant property in quantum cosmology: all the information within a space exists, encoded, on its lower-dimensional boundary. Chinese medicine has long worked this way — foot reflexology and auricular charts hold information about the whole body within a limited boundary.",
  holoZhangTitle: "Professor Zhang Yingqing's biological holographic law",
  holoZhangBody:
    "In 1973 Professor Zhang Yingqing used the second metacarpal as his example in proposing a holographic law for Chinese medicine: any relatively independent, functionally living segment of a person contains the complete information of the whole body. Clinical research by physicians in several countries reported diagnostic accuracy and treatment effectiveness above 90% across more than 200 conditions.",
  holoSecretsTitle: "Three keys to Tung's needling",
  holoSecrets: [
    {
      title: "Needling against the bone",
      desc: "The points lie beside the bone; needling against it produces considerable stimulation, so strong results come without extra manipulation.",
    },
    {
      title: "The dao ma technique",
      desc: "One needle gives the effect of one needle. Two needles are not double but more. Three needles in dao ma multiply the effect several times over.",
    },
    {
      title: "Retention time",
      desc: "Needles should be retained for at least fifty minutes. Decades of practice show this genuinely raises the effect.",
    },
  ],
  holoCrossTitle: "Healing across dimensions",
  holoCrossBody1:
    "The points Tung established according to the holographic principle already hold a strong relationship with the body, and what passes between them is communication at the level of information. Because of that, the treatment's message need not be affected by a blockage in any particular channel — it can travel straight to its target. This is one of the important reasons Tung's needling can resolve long-standing and unusual conditions in a short time.",
  holoCrossBody2Prefix:
    "Tung's needling doesn't work only at the level of the body, as the classical channels do. Needling beside bone, in the seams of bone or near the channels certainly increases physical stimulation — and the holographic application also works at the level of information. It is a ",
  holoCrossBody2Strong: "treatment across dimensions",
  holoCrossBody2Suffix:
    ", beyond the level of flesh. That is the real reason Tung's needling works so quickly without needing to emphasise the classical channels.",
  holoQuote:
    "“Understand one middle finger thoroughly and you can diagnose and treat a hundred illnesses.”",
  holoQuoteSource: "— Tung Ching-chang",

  chengCaption:
    "Cheng Hsi-chih at the ceremony of formal discipleship under Li Kuo-cheng",
  chengName: "Dr Cheng Shou-yi (Hsi-chih)",
  chengRole: "Third-generation lineage holder of Tung's extraordinary points",
  chengTitles: [
    "Chair, Tung's Acupuncture Heart-Qi-Spirit Wellness Association",
    "First-generation lineage holder, six-sense integrative therapy",
    "PhD in acupuncture and tuina, Guangzhou University of Chinese Medicine",
    "MSc in electrical engineering, National Taiwan University",
    "Author, The Universal Holographic Code in Acupuncture",
    "Author, Six-Sense Integrative Therapy and Tung's Needling",
    "Leader of the Shou-yi Wellness Academy",
  ],
  chengParagraphs: [
    "Cheng Shou-yi was the last disciple Li Kuo-cheng accepted in Taiwan. From childhood he studied qigong, Chinese medicine, taijiquan, the fate arts, Buddhism and Daoism over many years. Guided by his teacher and having grasped the holographic principle behind Tung's points, he brought together qigong, Chinese medical theory and quantum physics, and found that Tung's points draw on holography, the defensive and nutritive qi and blood, the five phases of the organs, the channels, neural transmission and myofascial transmission — both Chinese medical theory and anatomy.",
    "The workings of the points frequently cross the dimensions of matter, energy and information, and the reasoning is subtle. The three-stage method he has organised for students has become a systematic way of teaching that lets people progress quickly. Following his teacher Li Kuo-cheng, he hopes to carry Tung's work forward as widely as possible, presenting profound medical theory in plain terms so that more people benefit.",
  ],
  chengPhoto1: "Li Kuo-cheng and Cheng Hsi-chih in Shenzhen",
  chengPhoto2:
    "Li Kuo-cheng's calligraphy to Cheng Hsi-chih: “you have received my true transmission”",
  chengPrefaceTitle:
    "From the author's preface to The Universal Holographic Code in Acupuncture",
  chengPreface: [
    "“Some years ago, while working on my doctorate in acupuncture and tuina at Guangzhou University of Chinese Medicine, circumstance led me to choose Tung's needling as my thesis subject, and so to encounter it. I found that its ideas not only never contradict classical Chinese medicine but express its essence from a wider, broader and deeper angle.”",
    "“Studying it closely since I began, I have felt strongly that the great way is simple. If you understand the principle of illness and of treatment, why work so hard? If you can grasp the secret that with no point held in mind, every place is a point, why learn by rote?”",
    "“As I thought about the holographic application of Tung's needling, my earlier background in electrical engineering and my interest in modern physics turned out to be extraordinarily illuminating. Modern physics has shown the importance of information among the three levels of information, energy and matter. Tung's needling contains a very sophisticated use of the informational level. Once you understand it, holding the principle is enough — the results appear without being fixed on the exact location of a point.”",
  ],
  chengQuote:
    "“The holographic is the expression of heaven and humanity as one — it is the dao, the truth and the law of the universe.”",
  chengQuoteSource: "— Dr Cheng Shou-yi",
};

export const ACUPUNCTURE_COPY: Record<Locale, AcupunctureCopy> = { zh, en };
