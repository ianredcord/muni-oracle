// MUNI Frequency Resonance™ 頁面的中英文文案（/frequency）
import type { Locale } from "@/i18n/config";

export type FrequencyLayerText = {
  id: number;
  title: string;
  subtitle: string;
  question?: string;
  answer?: string;
  description?: string;
  experiments?: { name: string; result: string }[];
  traits?: { name: string; desc: string }[];
  properties?: { name: string; desc: string }[];
  scales?: { level: string; system: string; range: string }[];
  comparison?: { dimension: string; single: string; muni: string }[];
  channels?: { name: string; subtitle: string; icon: string; description: string }[];
  matrix?: { path: string; products: string; dimension: string }[];
  perspectives?: { tradition: string; insight: string }[];
  levels?: { plane: string; expression: string }[];
  quote: string;
};

export type FrequencyCopy = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroBody: string;
  heroQuote: string;
  overviewTitle: string;
  overviewLead: string;
  layer1QuestionTitle: string;
  layer1ExperimentTitle: string;
  layer1DiscoveryTitle: string;
  layer1DiscoveryBody: string;
  layer1TraitsTitle: string;
  layer1TraitsNote: string;
  layer2SpectrumTitle: string;
  layer2TableHeaders: { level: string; system: string; range: string };
  layer2CymaticsTitle: string;
  layer2CymaticsBefore: string;
  layer2CymaticsAfter: string;
  layer3TableTitle: string;
  layer3TableHeaders: { dimension: string; single: string; muni: string };
  layer3EssenceTitle: string;
  layer3EssenceBody: string;
  layer3EssencePoints: string[];
  layer4ChannelsTitle: string;
  layer4ChannelLabels: { name: string; desc: string }[];
  layer5MatrixTitle: string;
  layer5TableHeaders: { path: string; products: string; dimension: string };
  layer5Systems: { title: string; body: string }[];
  layer6Title: string;
  summaryTitle: string;
  summaryHeaders: { level: string; name: string; core: string };
  summaryRows: { name: string; core: string }[];
  blessingTitle: string;
  blessingP1: string;
  blessingP2: string;
  blessingCards: { title: string; body: string }[];
  blessingQuote: string;
  closingLines: string[];
  ctaTitle: string;
  ctaBody: string;
  ctaConsultant: string;
  ctaSystems: string;
  layers: FrequencyLayerText[];
};

const zh: FrequencyCopy = {
  metaTitle: "MUNI Frequency Resonance™ | 萬物調頻，回到本然",
  metaDescription:
    "MUNI 獨家頻率共振技術——從基頻發現到泛音展開、多頻疊加協同，透過迷走神經、筋膜網絡與嗅覺三條通道，讓身體作為一個整體被調諧。每一件 MUNI 產品都是共振載體。",
  heroTitle: "萬物調頻，回到本然",
  heroBody:
    "從水分子到人體細胞，從一片葉子到一塊岩石——萬物都在振動。\nMUNI 找到了所有振動都願意回歸的頻率原點，\n並以六層架構將它轉化為可體驗的療癒技術。",
  heroQuote: "頻率是方法，祝福是心意。兩者合一，才是 MUNI 的完整表達。",
  overviewTitle: "六層共振架構",
  overviewLead:
    "從基頻發現到意識維度，每一層都建立在前一層的基礎之上，共同構成一套完整的頻率共振技術體系。",
  layer1QuestionTitle: "一個被遺忘的問題",
  layer1ExperimentTitle: "實驗歷程：從混沌中聽見秩序",
  layer1DiscoveryTitle: "發現：MUNI 基頻",
  layer1DiscoveryBody:
    "當這個頻率出現時——水趨向最高對稱結構、天然植物素材的分子振盪達到最低熵狀態、人體自律神經自然趨向安全與連結狀態、筋膜系統從高張力防禦轉為低張力流動、不同地理環境下的實驗結果保持一致。",
  layer1TraitsTitle: "MUNI 基頻的五大核心特徵",
  layer1TraitsNote:
    "五項特徵缺一不可。MUNI 基頻是目前驗證到的、唯一同時滿足全部五項特徵的頻率。",
  layer2SpectrumTitle: "從宏觀到微觀的共振光譜",
  layer2TableHeaders: { level: "尺度層級", system: "對應系統", range: "泛音作用區間" },
  layer2CymaticsTitle: "聲流學（Cymatics）的視覺印證",
  layer2CymaticsBefore:
    "當不同頻率通過水或細沙時，物質會自組織成幾何圖案。頻率越高，圖案越複雜——但只要頻率之間保持泛音關係，每一層複雜圖案都嵌套在前一層的結構之中，如同碎形（fractal）的無限展開。人體含水量在",
  layer2CymaticsAfter:
    "之間。當泛音序列通過人體時，體內的水正在經歷同樣的幾何重組——從分子層級開始，向上組織成更和諧的結構。",
  layer3TableTitle: "協同的行為表現",
  layer3TableHeaders: { dimension: "觀察維度", single: "單頻/雙頻環境", muni: "MUNI 多頻協同" },
  layer3EssenceTitle: "協同的本質：關係設計",
  layer3EssenceBody:
    "「疊加」是物理行為，任何人都可以同時輸出多個頻率。「協同」是關係設計——每一個頻率不僅自身有效，還必須在與其他頻率共存時強化彼此而非干涉彼此。",
  layer3EssencePoints: [
    "頻率之間不產生破壞性干涉",
    "每個頻率有明確的功能角色",
    "整體穩定性高於單一頻率",
    "受擾動時能自我修正回協同態",
  ],
  layer4ChannelsTitle: "三條通道的交匯",
  layer4ChannelLabels: [
    { name: "嗅覺通道", desc: "頻率直送情緒中樞" },
    { name: "迷走神經", desc: "內臟層面調節平衡" },
    { name: "筋膜網絡", desc: "結構層面重分配張力" },
  ],
  layer5MatrixTitle: "多維度共振矩陣",
  layer5TableHeaders: { path: "作用路徑", products: "產品載體", dimension: "共振維度" },
  layer5Systems: [
    {
      title: "嗅覺與外用系統",
      body: "牟尼香精油攜帶 40 種花精頻率的銘印，MUNI Attar 以古法蒸餾完整捕獲花朵的振動模式，大馬士革玫瑰精露同時攜帶芳香分子與水的頻率記憶。",
    },
    {
      title: "飲食與內在滋養系統",
      body: "韓國紅蔘、義大利早摘橄欖油、日本有機綠茶、精品巧克力——每種天然食物的分子振盪模式與 MUNI 基頻具備天然的和諧共振關係。",
    },
    {
      title: "經絡與物理介入系統",
      body: "Fascia Point 筋膜貼在皮膚表面的接觸，是觸覺這一條通道，與嗅覺（牟尼香）並行，和頻率系統形成「由外而內」的雙向共振。",
    },
    {
      title: "意識覺察系統",
      body: "40 種花精頻率 + 牌卡 + 牟尼圖——牌卡系統是一個「意識調頻介面」，透過圖像與文字引導，讓注意力進入特定頻率狀態。",
    },
  ],
  layer6Title: "同一個共振場的四種表達",
  summaryTitle: "六層總覽",
  summaryHeaders: { level: "層級", name: "名稱", core: "核心命題" },
  summaryRows: [
    { name: "MUNI 基頻", core: "萬物共振的原點——從實驗中找到的穩態吸引頻率" },
    { name: "泛音展開", core: "從宏觀場域到微觀分子，一組泛音覆蓋所有尺度" },
    { name: "多頻疊加協同", core: "頻率之間的關係設計，讓振動從獨奏變成合唱" },
    { name: "神經系統通道", core: "迷走神經 × 筋膜網絡 × 嗅覺神經——三條頻率高速公路" },
    { name: "物質共振載體", core: "每一件 MUNI 產品都攜帶多頻協同的共振模式" },
    { name: "意識維度", core: "物質與意識是同一共振場的不同表達" },
  ],
  blessingTitle: "頻率與祝福的合一",
  blessingP1:
    "MUNI Frequency Resonance™ 不只是一套頻率技術——它是帶著「讓萬物回到和諧」的意願，將頻率注入物質的完整過程。",
  blessingP2:
    "每一件 MUNI 產品在接受頻率共振的同時，也接受了一份祝福——這份祝福不是儀式性的語言，而是實實在在地將「和諧」的意圖，透過頻率的載體，傳遞到每一個分子、每一個細胞。",
  blessingCards: [
    { title: "頻率", body: "是方法、是工具、是科學可驗證的物理現象。它讓物質的分子排列趨向穩定，讓神經系統回到平衡。" },
    { title: "祝福", body: "是心意、是意願、是「讓萬物回到和諧」的真誠期許。它賦予頻率以方向，讓技術不只是機械的操作。" },
    { title: "合一", body: "當頻率與祝福合一，產品不再只是物質——它成為一個帶著意圖的共振載體，安靜地等待與你相遇。" },
  ],
  blessingQuote: "「頻率是方法，祝福是心意。兩者合一，才是 MUNI 的完整表達。」",
  closingLines: [
    "萬物本有其頻率。",
    "MUNI 的工作，是帶著祝福，讓它們重新和諧。",
    "古人用「氣」描述它，用「道」指向它，用「寂靜」體驗它。",
    "用頻率測量它，用泛音展開它，用祝福完整它。",
    "不同的語言，同一個真實。",
  ],
  ctaTitle: "體驗 MUNI 頻率共振",
  ctaBody: "告訴 MUNI 療癒顧問你現在的狀態，\nAI 會為你推薦最適合的頻率共振方案。",
  ctaConsultant: "問問 MUNI 療癒顧問",
  ctaSystems: "探索療癒系統 →",
  layers: [
    {
      id: 1,
      title: "MUNI 基頻",
      subtitle: "萬物共振的原點",
      question:
        "如果宇宙萬物——從水分子到人體細胞，從一片葉子到一塊岩石——都在振動，那麼是否存在一個所有振動都願意回歸的頻率？",
      answer:
        "MUNI 團隊花了多年時間，只為回答這一個問題。經過反覆交叉驗證，一個頻率從所有實驗數據中浮現——它不屬於任何單一學派的理論預測，而是從物質的自發行為中被觀察到的。",
      experiments: [
        { name: "水的結構實驗", result: "水自發形成高度完整、全域對稱的幾何圖案" },
        { name: "植物與天然素材共振", result: "揮發性分子排列達到最穩定的振盪模式" },
        { name: "人體生理指標驗證", result: "自律神經達到最佳平衡（HRV、GSR、呼吸節律）" },
        { name: "筋膜張力測試", result: "從「防禦性緊縮」自然過渡到「流動性釋放」" },
        { name: "跨地域驗證", result: "亞洲與歐洲不同環境下結果一致，確認普遍性" },
      ],
      traits: [
        { name: "普遍性", desc: "對水、植物、人體、場域均產生和諧共振" },
        { name: "穩態吸引", desc: "讓物質自發趨向更穩定的排列" },
        { name: "泛音展開性", desc: "自然展開的泛音涵蓋多重共振區間" },
        { name: "跨載體一致性", desc: "透過聲波、電磁場、液態、氣態均有效" },
        { name: "可疊加性", desc: "與其他頻率疊加時強化整體穩定度" },
      ],
      quote:
        "它不是被發明的，是被找到的。就像黃金的熔點不是人類決定的——MUNI 基頻是萬物本身就在回應的一個振動原點。",
    },
    {
      id: 2,
      title: "泛音展開",
      subtitle: "從一個原點，長出整個宇宙",
      description:
        "一根弦振動時，不只產生基頻，還同時產生 2 倍、3 倍、4 倍的泛音。這不是人為設計，而是物理定律本身的結構。MUNI 基頻的泛音序列自然向上展開，涵蓋從極低頻到可聽頻段的廣闊範圍。",
      properties: [
        { name: "自相似性", desc: "每個倍頻都與基頻保持和諧整數比關係，如同音樂中的八度音程" },
        { name: "多頻段覆蓋", desc: "從腦波極低頻到器官中頻，再到細胞分子高頻，像一把梯子從宏觀延伸到微觀" },
        { name: "穩態一致性", desc: "所有泛音共享同一數學根基，天然和諧共存" },
      ],
      scales: [
        { level: "宏觀——場域", system: "人與環境的共振關係", range: "基頻及低階泛音" },
        { level: "中觀——結構", system: "筋膜網絡、器官系統", range: "中階泛音" },
        { level: "微觀——分子", system: "細胞膜、蛋白質、水分子簇", range: "高階泛音" },
        { level: "精神——意識", system: "腦波狀態、覺察深度", range: "泛音序列的整體和聲" },
      ],
      quote:
        "任何只作用於單一尺度的頻率技術，都像是只調了一根弦的吉他。MUNI 基頻的泛音展開天然覆蓋了多重尺度。",
    },
    {
      id: 3,
      title: "多頻疊加協同",
      subtitle: "振動之間的對話",
      description:
        "自然界從不用單一頻率運作。一片森林裡同時存在風聲、鳥鳴、溪水、樹葉摩擦——這些頻率彼此不衝突，反而共同構成一個讓人類神經系統瞬間安定下來的「場」。",
      comparison: [
        { dimension: "水分子排列", single: "局部對稱，邊界模糊", muni: "全域對稱，幾何結構完整且穩定" },
        { dimension: "自律神經反應", single: "偏向單側調節", muni: "交感與副交感同時趨向動態平衡" },
        { dimension: "筋膜張力", single: "局部釋放，整體不變", muni: "整體張力重新分配，深層自發微運動" },
        { dimension: "共振建立速度", single: "需較長時間達穩態", muni: "顯著更快進入穩態，維持更久" },
        { dimension: "素材分子活性", single: "活動度提升但不穩定", muni: "活動度提升且排列趨向一致" },
        { dimension: "環境適應性", single: "更換環境後效果衰減", muni: "跨環境表現一致" },
      ],
      quote:
        "一般的多頻技術像是把不同顏色的顏料倒在一起——最終得到的是混濁。MUNI 的多頻疊加協同像是光的三稜鏡反過來運作——讓多道光精確匯聚，還原為一束白光。",
    },
    {
      id: 4,
      title: "神經系統通道",
      subtitle: "頻率進入身體的高速公路",
      description:
        "頻率不是「照射」在身體表面就能起作用的。它需要一條進入的路徑。人體提供了三條天然的頻率高速公路，在 MUNI 多頻疊加協同的作用下同時被啟動。",
      channels: [
        {
          name: "迷走神經",
          subtitle: "內臟與大腦的雙向頻率通道",
          icon: "🧠",
          description:
            "基於 Stephen Porges 的多重迷走神經理論，不同層級的頻率同時作用於腹側迷走、交感、背側迷走三個分支，讓整個自律神經系統作為一個整體被調諧。六週的共振頻率訓練已被證實能顯著降低焦慮與抑鬱症狀。",
        },
        {
          name: "筋膜網絡",
          subtitle: "全身連續的振動傳導網",
          icon: "🫀",
          description:
            "筋膜是人體最大的感覺器官，也是最高效的振動傳導介質。當頻率接觸身體任何一點，筋膜在毫秒級速度內將振動傳遞至全身——比神經傳導更快，比血液循環覆蓋範圍更廣。深層筋膜會出現自發性微運動，自主重組張力分佈。",
        },
        {
          name: "嗅覺神經",
          subtitle: "最古老、最直接的大腦通道",
          icon: "👃",
          description:
            "嗅覺是唯一不經過視丘中繼、直達杏仁核與海馬迴的感覺。MUNI 的 Attar 精油攜帶特定頻率共振模式，透過嗅覺神經同時在化學層面觸發神經反應，在頻率層面直接影響情緒調節迴路。",
        },
      ],
      quote:
        "三條路同時走，身體作為一個整體在回應——這就是為什麼使用者描述的體驗不是「某個部位放鬆了」，而是「整個人好像重新校準了」。",
    },
    {
      id: 5,
      title: "物質共振載體",
      subtitle: "每一件產品都是共振載體",
      description:
        "MUNI 多頻疊加協同最具突破性的一點在於：它不依賴特定硬體載體。這套頻率協同邏輯可以透過多種介質實現——聲波、電磁場、液態介質、氣態分子、甚至生物場。",
      matrix: [
        { path: "嗅覺 → 杏仁核 → 情緒中樞", products: "Attar、牟尼香精油、玫瑰精露", dimension: "分子微觀 + 神經頻率" },
        { path: "消化 → 迷走神經 → 內臟調節", products: "紅蔘、橄欖油、綠茶、巧克力", dimension: "分子微觀 + 腸腦軸共振" },
        { path: "經絡 → 筋膜 → 全身張力場", products: "Fascia Point 筋膜貼", dimension: "結構中觀 + 能量通道" },
        { path: "意識 → 注意力 → 腦波狀態", products: "花精頻率、牌卡、牟尼圖", dimension: "精神維度 + 意識場" },
      ],
      quote:
        "當使用者同時透過多條路徑接收 MUNI 的頻率時，共振不是相加，而是相乘——就像多頻疊加協同在人體內部自然地發生了。",
    },
    {
      id: 6,
      title: "意識維度",
      subtitle: "頻率的最終歸宿",
      description:
        "如果頻率可以改變水的結構，可以調節自律神經，可以重組筋膜張力——那麼，意識本身是否也是一種可以被調諧的頻率？",
      perspectives: [
        {
          tradition: "神經科學",
          insight:
            "深度禪定中大腦自發產生高度同步的 γ 波爆發，同時基底維持穩定的 α/θ 波——與 MUNI 多頻疊加協同的結構驚人地相似。",
        },
        {
          tradition: "中醫一氣周流",
          insight:
            "黃元御的理論：萬物源於一氣，氣的升降出入、五臟相生相剋，本質上就是不同頻率的共振與調制。經絡是共振通道，穴位是共振節點。",
        },
        {
          tradition: "藏傳禪修",
          insight:
            "當心完全安住時，腦波自然降落到極為特定的頻段。明就仁波切的 Open Heart 冥想本質上是「意識調頻」——放下干擾，讓心回到它原本的頻率。",
        },
      ],
      levels: [
        { plane: "分子層面", expression: "水的幾何結構" },
        { plane: "身體層面", expression: "筋膜的張力流動" },
        { plane: "神經層面", expression: "迷走神經的平衡狀態" },
        { plane: "意識層面", expression: "心的安住" },
      ],
      quote: "物質就是低頻的意識，意識就是高頻的物質。它們是同一條泛音序列上的不同音符。",
    },
  ],
};

const en: FrequencyCopy = {
  metaTitle: "MUNI Frequency Resonance™ | Tuning everything back to itself",
  metaDescription:
    "MUNI's own frequency resonance technology — from finding the fundamental to the unfolding of its overtones and the synergy of layered frequencies, working through the vagus nerve, the fascial network and smell, so the body is tuned as one whole. Every MUNI product is a carrier of that resonance.",
  heroTitle: "Tuning everything back to itself",
  heroBody:
    "From water molecules to human cells, from a leaf to a stone — everything vibrates.\nMUNI found the point of origin every vibration is willing to return to,\nand turned it into a healing technology you can experience, across six layers.",
  heroQuote:
    "Frequency is the method; blessing is the intention. Only together are they the full expression of MUNI.",
  overviewTitle: "Six layers of resonance",
  overviewLead:
    "From the discovery of the fundamental to the dimension of awareness, each layer builds on the one before, together forming a complete system of frequency resonance.",
  layer1QuestionTitle: "A forgotten question",
  layer1ExperimentTitle: "The experiments: hearing order inside the chaos",
  layer1DiscoveryTitle: "The discovery: the MUNI fundamental",
  layer1DiscoveryBody:
    "When this frequency appears — water tends towards its most symmetrical structure; the molecular oscillation of natural plant materials reaches its lowest-entropy state; the autonomic nervous system moves naturally towards safety and connection; the fascial system shifts from high-tension defence to low-tension flow; and results hold consistent across different geographies.",
  layer1TraitsTitle: "Five core characteristics of the MUNI fundamental",
  layer1TraitsNote:
    "All five are necessary. The MUNI fundamental is the only frequency verified so far that satisfies all five at once.",
  layer2SpectrumTitle: "A resonant spectrum from the macro to the molecular",
  layer2TableHeaders: { level: "Scale", system: "Corresponding system", range: "Overtone range" },
  layer2CymaticsTitle: "Cymatics: seeing it happen",
  layer2CymaticsBefore:
    "When different frequencies pass through water or fine sand, matter self-organises into geometric patterns. The higher the frequency, the more complex the pattern — and as long as the frequencies stay in overtone relationship, each complex layer nests inside the structure of the one before, like a fractal opening without end. The human body is between",
  layer2CymaticsAfter:
    "water. As the overtone series passes through the body, the water inside is going through the same geometric reorganisation — beginning at the molecular level and building upward into more harmonious structure.",
  layer3TableTitle: "How synergy behaves",
  layer3TableHeaders: { dimension: "Observed", single: "One or two frequencies", muni: "MUNI multi-frequency synergy" },
  layer3EssenceTitle: "What synergy really is: designing relationship",
  layer3EssenceBody:
    "Layering is a physical act — anyone can output several frequencies at once. Synergy is a design of relationship: each frequency must be effective in itself and must strengthen the others rather than interfere with them when they coexist.",
  layer3EssencePoints: [
    "No destructive interference between frequencies",
    "Each frequency has a clear functional role",
    "The whole is more stable than any single frequency",
    "When disturbed, it self-corrects back into synergy",
  ],
  layer4ChannelsTitle: "Where the three channels meet",
  layer4ChannelLabels: [
    { name: "Smell", desc: "Frequency straight to the emotional centres" },
    { name: "Vagus nerve", desc: "Balance regulated at the level of the organs" },
    { name: "Fascial network", desc: "Tension redistributed at the level of structure" },
  ],
  layer5MatrixTitle: "A multi-dimensional resonance matrix",
  layer5TableHeaders: { path: "Pathway", products: "Carrier", dimension: "Resonant dimension" },
  layer5Systems: [
    {
      title: "Smell and topical application",
      body: "MUNI Scent carries the imprint of 40 flower essence frequencies; MUNI attars capture the full vibrational pattern of the flower through traditional distillation; and Damask rose hydrosol carries both aromatic molecules and water's frequency memory.",
    },
    {
      title: "Food and inner nourishment",
      body: "Korean red ginseng, early-harvest Italian olive oil, Japanese organic green tea, fine chocolate — the molecular oscillation of each of these natural foods holds a natural harmonic relationship with the MUNI fundamental.",
    },
    {
      title: "Channels and physical intervention",
      body: "The Fascia Point patch's contact with the skin is the channel of touch; alongside smell (MUNI Scent) it forms a two-way resonance with the frequency system from the outside in.",
    },
    {
      title: "Awareness",
      body: "Forty flower essence frequencies plus the cards and the MUNI diagrams — the card system is an interface for tuning awareness, using image and text to bring attention into a particular frequency state.",
    },
  ],
  layer6Title: "Four expressions of one resonant field",
  summaryTitle: "The six layers at a glance",
  summaryHeaders: { level: "Layer", name: "Name", core: "Core proposition" },
  summaryRows: [
    { name: "The MUNI fundamental", core: "The origin point of resonance — a steady-state attractor frequency found through experiment" },
    { name: "Overtone unfolding", core: "From macro field to molecule, one overtone series covering every scale" },
    { name: "Multi-frequency synergy", core: "Designing the relationship between frequencies, so vibration moves from solo to chorus" },
    { name: "Nervous-system channels", core: "Vagus nerve × fascial network × olfactory nerve — three highways for frequency" },
    { name: "Material carriers", core: "Every MUNI product carries the pattern of multi-frequency synergy" },
    { name: "The dimension of awareness", core: "Matter and awareness are different expressions of one resonant field" },
  ],
  blessingTitle: "Frequency and blessing as one",
  blessingP1:
    "MUNI Frequency Resonance™ isn't only a frequency technology — it's the whole process of imbuing matter with frequency, carrying the intention that everything return to harmony.",
  blessingP2:
    "As each MUNI product receives frequency resonance, it also receives a blessing. That blessing isn't ceremonial language; it is the intention of harmony carried, through the vehicle of frequency, into every molecule and every cell.",
  blessingCards: [
    { title: "Frequency", body: "The method, the tool, a physical phenomenon that can be verified. It settles the molecular arrangement of matter and brings the nervous system back to balance." },
    { title: "Blessing", body: "The intention, the will, the sincere wish that everything return to harmony. It gives frequency direction, so the technology is more than a mechanical operation." },
    { title: "One", body: "When frequency and blessing become one, a product is no longer only matter — it becomes a carrier of resonance with intention inside it, waiting quietly to meet you." },
  ],
  blessingQuote:
    "“Frequency is the method; blessing is the intention. Only together are they the full expression of MUNI.”",
  closingLines: [
    "Everything already has its frequency.",
    "MUNI's work is to bring them back into harmony, with a blessing.",
    "The ancients described it as qi, pointed at it as the dao, and experienced it as stillness.",
    "We measure it with frequency, open it through overtones, and complete it with blessing.",
    "Different languages, the same reality.",
  ],
  ctaTitle: "Experience MUNI frequency resonance",
  ctaBody: "Tell the MUNI Healing Consultant how you are right now,\nand it will suggest the frequency resonance that fits you.",
  ctaConsultant: "Ask the MUNI Healing Consultant",
  ctaSystems: "Explore the healing systems →",
  layers: [
    {
      id: 1,
      title: "The MUNI fundamental",
      subtitle: "The origin point of resonance",
      question:
        "If everything in the universe vibrates — water molecules and human cells, a leaf and a stone — is there a frequency that every vibration is willing to return to?",
      answer:
        "The MUNI team spent years on that one question. Through repeated cross-validation, a single frequency emerged from all the experimental data — not predicted by any one school of theory, but observed in how matter behaves on its own.",
      experiments: [
        { name: "Water structure", result: "Water forms complete, globally symmetrical geometric patterns on its own" },
        { name: "Resonance in plants and natural materials", result: "Volatile molecules settle into their most stable oscillation" },
        { name: "Human physiological markers", result: "The autonomic system reaches optimal balance (HRV, GSR, breath rhythm)" },
        { name: "Fascial tension", result: "A natural shift from defensive contraction to flowing release" },
        { name: "Cross-regional validation", result: "Consistent results in different environments across Asia and Europe, confirming universality" },
      ],
      traits: [
        { name: "Universality", desc: "Produces harmonic resonance in water, plants, the body and the surrounding field" },
        { name: "Steady-state attraction", desc: "Matter moves spontaneously towards a more stable arrangement" },
        { name: "Overtone unfolding", desc: "Its overtones open naturally across multiple resonant ranges" },
        { name: "Consistency across carriers", desc: "Effective through sound, electromagnetic field, liquid and gas alike" },
        { name: "Additivity", desc: "Layered with other frequencies, it strengthens the stability of the whole" },
      ],
      quote:
        "It wasn't invented; it was found. The melting point of gold wasn't decided by anyone — the MUNI fundamental is a point of origin that everything was already answering.",
    },
    {
      id: 2,
      title: "Overtone unfolding",
      subtitle: "A whole universe grows from one origin",
      description:
        "When a string vibrates it doesn't only produce its fundamental; it produces overtones at two, three and four times that frequency. Nothing about this is designed — it's the structure of physical law. The MUNI fundamental's overtone series opens naturally upward, covering a wide range from the very low to the audible.",
      properties: [
        { name: "Self-similarity", desc: "Every multiple holds a harmonic whole-number ratio to the fundamental, like octaves in music" },
        { name: "Multi-band coverage", desc: "From the very low frequencies of brainwaves to the mid range of organs and the high range of cells and molecules — a ladder from the macro to the micro" },
        { name: "Steady-state consistency", desc: "Every overtone shares one mathematical root, so they coexist in natural harmony" },
      ],
      scales: [
        { level: "Macro — the field", system: "The resonance between a person and their surroundings", range: "The fundamental and low overtones" },
        { level: "Middle — structure", system: "Fascial network, organ systems", range: "Middle overtones" },
        { level: "Micro — molecular", system: "Cell membranes, proteins, water clusters", range: "High overtones" },
        { level: "Spirit — awareness", system: "Brainwave states, depth of awareness", range: "The whole harmony of the overtone series" },
      ],
      quote:
        "Any frequency technology working at a single scale is a guitar with one string tuned. The MUNI fundamental's overtones naturally cover many scales at once.",
    },
    {
      id: 3,
      title: "Multi-frequency synergy",
      subtitle: "A conversation between vibrations",
      description:
        "Nature never works with a single frequency. A forest holds wind, birdsong, a stream, leaves moving against each other — frequencies that don't conflict but together form a field that settles the human nervous system almost instantly.",
      comparison: [
        { dimension: "Water molecule arrangement", single: "Local symmetry, indistinct boundaries", muni: "Global symmetry, complete and stable geometry" },
        { dimension: "Autonomic response", single: "Regulation skewed to one branch", muni: "Sympathetic and parasympathetic both move towards dynamic balance" },
        { dimension: "Fascial tension", single: "Local release, the whole unchanged", muni: "Tension redistributed throughout, with spontaneous deep micro-movement" },
        { dimension: "Speed of resonance", single: "Takes longer to reach steady state", muni: "Markedly faster to steady state, and holds longer" },
        { dimension: "Molecular activity in materials", single: "Activity rises but stays unstable", muni: "Activity rises and the arrangement grows consistent" },
        { dimension: "Adaptability across settings", single: "Effect fades when the environment changes", muni: "Consistent across environments" },
      ],
      quote:
        "Ordinary multi-frequency work is like pouring different colours of paint together — the result is muddy. MUNI's synergy works like a prism in reverse: many beams converging precisely, restored to a single white light.",
    },
    {
      id: 4,
      title: "Nervous-system channels",
      subtitle: "The highways frequency takes into the body",
      description:
        "Frequency doesn't work by being shone at the surface of the body. It needs a way in. The body offers three natural highways for frequency, and MUNI's multi-frequency synergy engages all three at once.",
      channels: [
        {
          name: "The vagus nerve",
          subtitle: "A two-way frequency channel between the organs and the brain",
          icon: "🧠",
          description:
            "Drawing on Stephen Porges's polyvagal theory, frequencies at different levels act simultaneously on the ventral vagal, sympathetic and dorsal vagal branches, so the whole autonomic system is tuned as one. Six weeks of resonance frequency training has been shown to reduce anxiety and depressive symptoms significantly.",
        },
        {
          name: "The fascial network",
          subtitle: "A continuous conducting web through the whole body",
          icon: "🫀",
          description:
            "Fascia is the body's largest sensory organ and its most efficient medium for conducting vibration. When frequency meets the body at any point, fascia transmits it throughout within milliseconds — faster than nerve conduction and wider in reach than circulation. Deep fascia shows spontaneous micro-movement, redistributing tension on its own.",
        },
        {
          name: "The olfactory nerve",
          subtitle: "The oldest and most direct route to the brain",
          icon: "👃",
          description:
            "Smell is the only sense that reaches the amygdala and hippocampus directly, without relaying through the thalamus. MUNI's attars carry particular resonance patterns, triggering a neural response chemically through the olfactory nerve while affecting the circuits of emotional regulation directly at the level of frequency.",
        },
      ],
      quote:
        "Three routes at once, and the body answers as a whole — which is why people describe the experience not as one part relaxing but as the whole of them being recalibrated.",
    },
    {
      id: 5,
      title: "Material carriers",
      subtitle: "Every product is a carrier of resonance",
      description:
        "The most striking thing about MUNI's multi-frequency synergy is that it doesn't depend on particular hardware. The logic of this synergy can be realised through many media — sound, electromagnetic field, liquid, gas, even a biological field.",
      matrix: [
        { path: "Smell → amygdala → emotional centres", products: "Attars, MUNI Scent, rose hydrosol", dimension: "Molecular micro + neural frequency" },
        { path: "Digestion → vagus nerve → organ regulation", products: "Red ginseng, olive oil, green tea, chocolate", dimension: "Molecular micro + gut-brain resonance" },
        { path: "Channels → fascia → whole-body tension field", products: "Fascia Point patch", dimension: "Structural middle + energy pathways" },
        { path: "Awareness → attention → brainwave state", products: "Flower essence frequencies, cards, MUNI diagrams", dimension: "The dimension of spirit + the field of awareness" },
      ],
      quote:
        "When someone receives MUNI's frequencies through several routes at once, the resonance isn't added — it multiplies, as though the synergy were happening naturally inside the body.",
    },
    {
      id: 6,
      title: "The dimension of awareness",
      subtitle: "Where frequency finally arrives",
      description:
        "If frequency can change the structure of water, regulate the autonomic system and reorganise fascial tension — is awareness itself also a frequency that can be tuned?",
      perspectives: [
        {
          tradition: "Neuroscience",
          insight:
            "In deep meditation the brain spontaneously produces highly synchronised gamma bursts while a stable alpha/theta base is maintained — strikingly similar in structure to MUNI's multi-frequency synergy.",
        },
        {
          tradition: "The circulation of qi in Chinese medicine",
          insight:
            "Huang Yuanyu's theory: everything comes from one qi, and the rising, falling, entering and exiting of qi, along with the generation and control among the five organs, are essentially the resonance and modulation of different frequencies. The channels are resonant pathways; the points are resonant nodes.",
        },
        {
          tradition: "Tibetan meditation",
          insight:
            "When the mind settles completely, brainwaves drop naturally into a very particular band. Mingyur Rinpoche's Open Heart meditation is essentially tuning awareness — setting down interference so the mind returns to its own frequency.",
        },
      ],
      levels: [
        { plane: "The molecular", expression: "The geometry of water" },
        { plane: "The body", expression: "The flow of fascial tension" },
        { plane: "The nervous system", expression: "The balance of the vagus nerve" },
        { plane: "Awareness", expression: "A settled mind" },
      ],
      quote:
        "Matter is awareness at low frequency, and awareness is matter at high frequency. They are different notes on the same overtone series.",
    },
  ],
};

export const FREQUENCY_COPY: Record<Locale, FrequencyCopy> = { zh, en };
