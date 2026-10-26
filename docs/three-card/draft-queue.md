# 三牌陣草稿核准佇列（2026-10-26 產生）

逐句核准後告訴我 template_id（或整類），由我批次改 status。字數以碼點計，佔位符以 3 字估算。

## A. 模板（draft）

## B. 鏡像短文（draft）

### archetype（0 段）

| 牌 | text | 字數 |
|---|---|---|

### persona（0 段）

| 牌 | text | 字數 |
|---|---|---|

### situation（0 段）

| 牌 | text | 字數 |
|---|---|---|

## C. UI 文字（draft）

| 群組 | id | text | 字數 |
|---|---|---|---|
| mode A 說明 | A/description | 看一段歷程：你從哪裡來、此刻在哪裡、往哪裡去。 | 23 |
| mode A 問句 | A/origin | 你是帶著什麼走到這裡的？ | 12 |
| mode A 問句 | A/now | 此刻，你站在什麼位置？ | 11 |
| mode A 問句 | A/direction | 如果你允許，接下來會往哪裡去？ | 15 |
| mode B 說明 | B/description | 看一個卡點：處境是什麼、卡在哪裡、下一步可以是什麼。 | 26 |
| mode B 問句 | B/origin | 你目前的處境是什麼？ | 10 |
| mode B 問句 | B/now | 是什麼卡住了？ | 7 |
| mode B 問句 | B/direction | 如果你允許，下一步可以是什麼？ | 15 |
| mode C 說明 | C/description | 看整體的自己：我是誰、我怎麼表現、我在哪裡。 | 22 |
| mode C 問句 | C/origin | 我是誰？底下那一層是什麼？ | 13 |
| mode C 問句 | C/now | 我怎麼表現？別人看見的是什麼？ | 15 |
| mode C 問句 | C/direction | 我在哪裡？此刻站在什麼場裡？ | 14 |
| MODE_PROMPT | PROMPT_01 | 你今天想看一段歷程、一個卡點，還是整體的自己？ | 23 |
| MODE_PROMPT | PROMPT_02 | 今天想看的是一段路、一個卡住的地方，還是整個你？ | 24 |
| MODE_PROMPT | PROMPT_03 | 今天想從哪裡看：歷程、卡點，還是三面鏡子裡的自己？ | 25 |
| EXPAND_BUTTON | BTN_EXPAND_01 | 展開完整解讀 | 6 |
| EXPAND_BUTTON | BTN_EXPAND_02 | 看完整解讀 | 5 |
| EXPAND_BUTTON | BTN_EXPAND_03 | 往下展開 | 4 |
| EXPAND_TRANSITION | TR_EXPAND_01 | 完整版會把三張牌之間的關係、花精複方與身體練習接上。 | 26 |
| EXPAND_TRANSITION | TR_EXPAND_02 | 往下是三張牌怎麼連起來，以及今天的花精與身體練習。 | 25 |
| DEEP_BUTTON | BTN_DEEP_01 | 進入深度解析 | 6 |
| DEEP_BUTTON | BTN_DEEP_02 | 看每張牌的三步 | 7 |
| DEEP_BUTTON | BTN_DEEP_03 | 打開深度解析 | 6 |
| DEEP_TRANSITION | TR_DEEP_01 | 深度解析是每張牌單獨的三步：狀態、允許、身體。 | 23 |
| DEEP_TRANSITION | TR_DEEP_02 | 想多停一下的話，每張牌都有自己的一頁。 | 19 |
