// 牟尼香・聖杯版頁面的中英文文案（/essential-oil）
import type { Locale } from "@/i18n/config";

export type OilText = {
  metaTitle: string;
  metaDescription: string;
  backToSystems: string;
  eyebrow: string;
  title: string;
  tagline: string;
  heroBody: string;
  ctaIngredients: string;
  ctaExperience: string;
  storyTitle: string;
  storyLead: string;
  storyP1: string;
  storyMuniLabel: string;
  storyMuniRest: string;
  storyGrailLabel: string;
  storyGrailRest: string;
  storyP4: string;
  ingredientsTitle: string;
  ingredientsSub: string;
  ingredientNames: { name: string; origin: string; role: string }[];
  sandalNoteBefore: string;
  sandalNoteStrong: string;
  sandalNoteAfter: string;
  grailTitle: string;
  grailSub: string;
  grailLead: string;
  grailCards: { title: string; body: string }[];
  scienceTitle: string;
  scienceSub: string;
  scienceSourcesLabel: string;
  scienceSections: { title: string; content: string }[];
  chakraTitle: string;
  chakraSub: string;
  chakras: { name: string; ingredient: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

const zh: OilText = {
  metaTitle: "牟尼香・聖杯版 | MUNI 核心支持",
  metaDescription:
    "以阿曼皇家綠乳香為神聖容器，融合六種珍稀精油與東印度檀香基底，讓身體從第一息開始，就浸泡在安全的頻率中。",
  backToSystems: "返回療癒系統總覽",
  eyebrow: "MUNI 核心支持",
  title: "牟尼香・聖杯版",
  tagline: "在神聖的芬芳中，遇見真正的寂靜。",
  heroBody:
    "以阿曼皇家綠乳香為神聖容器，融合六種珍稀精油與東印度檀香基底，\n讓身體從第一息開始，就浸泡在安全的頻率中。",
  ctaIngredients: "了解配方",
  ctaExperience: "立即體驗",
  storyTitle: "聖杯的故事",
  storyLead: "為什麼古老的寺廟讓人一踏入就感到平靜？",
  storyP1: "不是透過意志力，而是透過呼吸。\n不是說服大腦，而是讓身體記起安全的感覺。",
  storyMuniLabel: "牟尼（Muni）",
  storyMuniRest: "，梵語中意為「寂靜的聖者」。",
  storyGrailLabel: "聖杯",
  storyGrailRest: "，是承接一切的容器——不是向外追尋，而是向內收攝。",
  storyP4:
    "牟尼香・聖杯版，是一瓶為當代心靈而生的神聖香氛。\n它不要求你改變，而是先讓你回到「可以改變的狀態」。",
  ingredientsTitle: "六種珍稀精油",
  ingredientsSub: "100% 純天然無添加",
  ingredientNames: [
    { name: "阿曼皇家綠乳香", origin: "阿曼・野生採集，神聖樹脂之王", role: "神聖容器・全脈輪調和" },
    { name: "Mitti Attar", origin: "印度 Kannauj・傳統蒸餾，東印度檀香基底", role: "大地之母・深層接地" },
    { name: "沉香 Attar", origin: "東印度檀香基底，古老智慧之木", role: "深層意識・天地橋樑" },
    { name: "大馬士革玫瑰 Attar", origin: "東印度檀香基底，花中之后", role: "心輪柔觸・情感療癒" },
    { name: "薰衣草", origin: "日本有機栽種", role: "眉心橋接・安定守護" },
    { name: "佛手柑（FCF 去光敏）", origin: "義大利產區", role: "頂輪微光・溫柔開啟" },
  ],
  sandalNoteBefore:
    "三種 Attar 共享東印度檀香作為蒸餾基底，形成隱藏的靈性中軸——\n約 ",
  sandalNoteStrong: "23%",
  sandalNoteAfter: " 的檀香，在你未察覺時，已經啟動了副交感神經的安定機制。",
  grailTitle: "為什麼是「聖杯」？",
  grailSub: "承接，而非追尋",
  grailLead: "牟尼香聖杯版的設計哲學，源自三個古老傳統的交匯：",
  grailCards: [
    {
      title: "煉金術的聖杯",
      body: "聖杯是「容器」，承接生命的轉化。乳香 51% 構成的保護場域，讓所有成分在其中安全運作。",
    },
    {
      title: "藏傳佛教的寂靜",
      body: "「牟尼」意為寂默者，頂層刻意壓低，呼應內收的禪定本質。不是讓你「飛起來」，而是讓你「沉下去、安住」。",
    },
    {
      title: "榮格心理學的個體化",
      body: "聖杯是容器，賢者之石是煉金過程。這瓶精油陪伴你走過黑化、白化、黃化、紅化，走向完整的自己。",
    },
  ],
  scienceTitle: "想了解背後的科學原理？",
  scienceSub: "如果你只想感受，不一定要看這一段。",
  scienceSourcesLabel: "研究出處",
  scienceSections: [
    {
      title: "一、嗅覺與情緒的直接通路",
      content:
        "嗅覺是唯一不經過理性分析、直接進入情緒與記憶中心的感官。嗅球中的多巴胺神經元透過 D1 與 D2 受體調控氣味訊號的處理與傳遞——D1 受體增強氣味偵測靈敏度，D2 受體在嗅神經層進行前突觸抑制，兩者協同運作，構成「先安撫、再開啟」的神經保護機制。",
    },
    {
      title: "二、乳香——TRPV3 離子通道與抗焦慮",
      content:
        "乳香樹脂中的 Incensole Acetate（乙醯基乳香醇）能激活大腦中的 TRPV3 離子通道，顯著影響與情緒相關的腦區及神經迴路，產生抗焦慮與抗抑鬱效果。",
    },
    {
      title: "三、薰衣草——GABA 受體與芳樟醇的抗焦慮機制",
      content:
        "薰衣草中的主要成分芳樟醇（Linalool）與乙酸芳樟酯（Linalyl Acetate），透過嗅覺路徑啟動 GABA_A 受體的苯二氮平結合位，產生抗焦慮效果，且不影響運動能力（有別於傳統鎮靜藥物）。",
    },
    {
      title: "四、檀香與薰衣草——副交感神經激活",
      content:
        "2021 年發表於 PLOS ONE 的研究顯示，檀香與薰衣草的複方吸入可有效調節自律神經系統，降低交感神經活性、激活副交感神經，達到壓力舒緩效果。",
    },
    {
      title: "五、沉香——鎮靜與 GABA 能系統",
      content:
        "沉香精油及其主要成分的吸入，在動物實驗中顯著降低自發性運動活性，研究者認為其可能透過 GABA 能系統展現鎮靜活性，對神經系統疾病的治療具有潛力。",
    },
    {
      title: "六、多巴胺與恐懼消除",
      content:
        "2025 年 PNAS 發表的最新研究證實，多巴胺活性能雙向控制恐懼消除——透過基底外側杏仁核（BLA）中恐懼神經元與消除神經元的不同活動模式。這為「先安撫杏仁核，再建立安全感」的聖杯版設計提供了最新科學支持。",
    },
  ],
  chakraTitle: "從頂輪到海底輪，完整覆蓋",
  chakraSub: "每一種成分對應一個能量中心，由上而下形成完整的保護場域。",
  chakras: [
    { name: "頂輪", ingredient: "佛手柑" },
    { name: "眉心輪", ingredient: "薰衣草" },
    { name: "喉輪", ingredient: "乳香" },
    { name: "心輪", ingredient: "大馬士革玫瑰" },
    { name: "太陽神經叢", ingredient: "沉香" },
    { name: "臍輪", ingredient: "Mitti Attar" },
    { name: "海底輪", ingredient: "東印度檀香（基底）" },
  ],
  ctaTitle: "讓身體先回到安全的頻率",
  ctaBody:
    "不需要改變什麼，只需要深呼吸一次。\n牟尼香・聖杯版，陪你回到可以改變的狀態。",
  ctaButton: "問問 MUNI 療癒顧問",
};

const en: OilText = {
  metaTitle: "MUNI Scent · Grail edition | The core of MUNI",
  metaDescription:
    "Royal green frankincense from Oman as the sacred vessel, six rare oils and a base of East Indian sandalwood — so that from the first breath, the body is held in a frequency of safety.",
  backToSystems: "Back to the healing systems",
  eyebrow: "The core of MUNI",
  title: "MUNI Scent · Grail edition",
  tagline: "In sacred fragrance, meet a real stillness.",
  heroBody:
    "Royal green frankincense from Oman as the sacred vessel, six rare oils and a base of East Indian sandalwood —\nso that from the first breath, the body is held in a frequency of safety.",
  ctaIngredients: "See the formulation",
  ctaExperience: "Try it",
  storyTitle: "The story of the grail",
  storyLead: "Why does stepping into an old temple settle you at once?",
  storyP1:
    "Not through willpower, but through breath.\nNot by persuading the mind, but by letting the body remember what safety feels like.",
  storyMuniLabel: "Muni",
  storyMuniRest: " means the silent sage in Sanskrit.",
  storyGrailLabel: "The grail",
  storyGrailRest:
    " is the vessel that receives everything — not a search outward but a gathering inward.",
  storyP4:
    "MUNI Scent · Grail edition is a sacred fragrance made for a contemporary mind.\nIt doesn't ask you to change; it brings you first to a state in which change is possible.",
  ingredientsTitle: "Six rare oils",
  ingredientsSub: "100% natural, nothing added",
  ingredientNames: [
    {
      name: "Royal green frankincense",
      origin: "Oman · wild-harvested, the king of sacred resins",
      role: "The sacred vessel · harmonising every centre",
    },
    {
      name: "Mitti attar",
      origin: "Kannauj, India · traditionally distilled onto East Indian sandalwood",
      role: "Mother earth · deep grounding",
    },
    {
      name: "Agarwood attar",
      origin: "On an East Indian sandalwood base — the wood of ancient wisdom",
      role: "Deep consciousness · a bridge between earth and sky",
    },
    {
      name: "Damask rose attar",
      origin: "On an East Indian sandalwood base — the queen of flowers",
      role: "A soft touch at the heart · emotional healing",
    },
    {
      name: "Lavender",
      origin: "Organically grown in Japan",
      role: "Bridging the brow · steady protection",
    },
    {
      name: "Bergamot (FCF, phototoxin-free)",
      origin: "From Italy",
      role: "Light at the crown · a gentle opening",
    },
  ],
  sandalNoteBefore:
    "All three attars share East Indian sandalwood as their distillation base, forming a hidden spiritual axis —\nroughly ",
  sandalNoteStrong: "23%",
  sandalNoteAfter:
    " sandalwood, already engaging the parasympathetic settling response before you notice it.",
  grailTitle: "Why the grail?",
  grailSub: "Receiving, not searching",
  grailLead:
    "The design philosophy of the Grail edition comes from where three old traditions meet:",
  grailCards: [
    {
      title: "The alchemical grail",
      body: "The grail is the vessel that receives life's transformation. A protective field of 51% frankincense lets every other component work safely within it.",
    },
    {
      title: "The stillness of Tibetan Buddhism",
      body: "Muni means the one who is silent. The top notes are deliberately kept low, echoing the inward nature of meditation. Not to lift you up, but to let you settle and stay.",
    },
    {
      title: "Individuation in Jungian psychology",
      body: "The grail is the vessel; the philosopher's stone is the process. This oil accompanies you through nigredo, albedo, citrinitas and rubedo, towards a whole self.",
    },
  ],
  scienceTitle: "Want the science behind it?",
  scienceSub: "If you only want to feel it, you don't have to read this part.",
  scienceSourcesLabel: "Sources",
  scienceSections: [
    {
      title: "1. The direct route from smell to emotion",
      content:
        "Smell is the only sense that bypasses rational analysis and reaches the centres of emotion and memory directly. Dopaminergic neurons in the olfactory bulb regulate the processing and transmission of odour signals through D1 and D2 receptors — D1 raises detection sensitivity, D2 provides presynaptic inhibition at the olfactory nerve layer. Together they form a neural protective mechanism that settles first and opens second.",
    },
    {
      title: "2. Frankincense — the TRPV3 channel and anxiolysis",
      content:
        "Incensole acetate in frankincense resin activates TRPV3 ion channels in the brain, significantly affecting emotion-related regions and circuits and producing anxiolytic and antidepressant effects.",
    },
    {
      title: "3. Lavender — GABA receptors and the anxiolytic action of linalool",
      content:
        "Linalool and linalyl acetate, lavender's principal constituents, act through the olfactory pathway on the benzodiazepine binding site of the GABA_A receptor, producing anxiolytic effects without impairing motor function — unlike conventional sedatives.",
    },
    {
      title: "4. Sandalwood and lavender — parasympathetic activation",
      content:
        "A 2021 study in PLOS ONE showed that inhaling a sandalwood and lavender blend effectively regulates the autonomic nervous system, lowering sympathetic activity and activating the parasympathetic branch, with a stress-relieving effect.",
    },
    {
      title: "5. Agarwood — sedation and the GABAergic system",
      content:
        "Inhalation of agarwood oil and its principal constituents significantly reduced spontaneous locomotor activity in animal studies. Researchers suggest a sedative action via the GABAergic system, with potential for treating nervous-system conditions.",
    },
    {
      title: "6. Dopamine and fear extinction",
      content:
        "A 2025 PNAS study confirmed that dopamine activity bidirectionally controls fear extinction, through distinct activity patterns of fear and extinction neurons in the basolateral amygdala. This gives the Grail edition's design — settle the amygdala first, then build safety — its most recent scientific support.",
    },
  ],
  chakraTitle: "Crown to root, fully covered",
  chakraSub:
    "Each component answers one energy centre, forming a complete protective field from the top down.",
  chakras: [
    { name: "Crown", ingredient: "Bergamot" },
    { name: "Brow", ingredient: "Lavender" },
    { name: "Throat", ingredient: "Frankincense" },
    { name: "Heart", ingredient: "Damask rose" },
    { name: "Solar plexus", ingredient: "Agarwood" },
    { name: "Sacral", ingredient: "Mitti attar" },
    { name: "Root", ingredient: "East Indian sandalwood (base)" },
  ],
  ctaTitle: "Let the body return to a safe frequency first",
  ctaBody:
    "Nothing needs changing. One deep breath is enough.\nMUNI Scent · Grail edition brings you back to a state in which change is possible.",
  ctaButton: "Ask the MUNI Healing Consultant",
};

export const OIL_COPY: Record<Locale, OilText> = { zh, en };
