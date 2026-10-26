# -*- coding: utf-8 -*-
"""MUNI 三牌陣參考實作 v2（對應 Spec v1.2）
- schema v2：text={zh,en?}、register、status
- 選取：status=approved → trigger/exclude → register 相容 → specificity → 近期排除 → 權重 → md5 種子
- 抽牌時一次選完全部槽（selections 含 brief 與 full 所需的所有槽）；variant 只決定渲染子集，不進 state
純標準函式庫，無相依套件。TypeScript 引擎需與本檔對五組示範牌輸出相同的 state 與 selections。
"""
import json,hashlib,os,uuid,re
HERE=os.path.dirname(os.path.abspath(__file__))
def _p(f): return os.path.join(HERE,f)
cards={x["id"]:x for x in json.load(open(_p("cards_v4_patched.json"),encoding="utf8"))}
byname={x["nameZh"]:x for x in cards.values()}
T=json.load(open(_p("slot_templates_all.v2.json"),encoding="utf8"))
P={(r["card_id"],r["position"]):r for r in json.load(open(_p("position_text.v2.json"),encoding="utf8"))}
MIRROR_PATH=_p("mirror_text.v2.json")  # 模式 C 專用 78 段（Phase 2 產出；缺檔時退回位置短文）
M={r["card_id"]:r for r in json.load(open(MIRROR_PATH,encoding="utf8"))} if os.path.exists(MIRROR_PATH) else {}
E={"火":"Fire","水":"Water","風":"Air","地":"Earth"}
def elem(c): return E[c["element"][0]]
def kind(c): return "major" if c["suit"]=="major" else ("pip" if c.get("number") else "court")
def layer(c): return "L2" if kind(c)=="pip" else "L1"
SUITS_ZH=("權杖","聖杯","寶劍","錢幣")
INTEG={"節制","星星","世界"}|{s+"十" for s in SUITS_ZH}|{s+"國王" for s in SUITS_ZH}   # 11 張（原版對字串迭代，只剩 3 張；2026-10-26 修正）
RANKW={"Ace":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10}
ROMAN={"0":0,"I":1,"II":2,"III":3,"IV":4,"V":5,"VI":6,"VII":7,"VIII":8,"IX":9,"X":10,"XI":11,"XII":12,"XIII":13,"XIV":14,"XV":15,"XVI":16,"XVII":17,"XVIII":18,"XIX":19,"XX":20,"XXI":21}
COURT_RANK={"侍者":11,"騎士":12,"皇后":13,"國王":14}
def nr(c):
    if kind(c)=="major": return ROMAN[c["number"]]/21
    if kind(c)=="pip": return (RANKW[c["number"]]-1)/13
    return (COURT_RANK[c["nameZh"][2:]]-1)/13
friendly={frozenset(["Fire","Air"]),frozenset(["Water","Earth"])}; hostile={frozenset(["Fire","Water"]),frozenset(["Air","Earth"])}
def rel(a,b):
    if a==b: return "same"
    p=frozenset([a,b]); return "friendly" if p in friendly else "hostile" if p in hostile else "neutral"
def suit(c): return None if kind(c)=="major" else c["suit"]
def arc(c1,c2,c3):
    if rel(elem(c1),elem(c3))=="hostile" and kind(c2)=="major": return "rupture"
    if c3["nameZh"] in INTEG: return "resolve"
    if (suit(c1) and suit(c1)==suit(c3)) or (kind(c1)=="major" and kind(c3)=="major" and elem(c1)==elem(c3)): return "repeat"
    d=nr(c3)-nr(c1); return "advance" if d>=0.15 else "settle" if d<=-0.15 else "hold"
REGISTER_OF_ARC={"rupture":"收","settle":"收","hold":"持","repeat":"持","advance":"開","resolve":"開"}
def state(c1,c2,c3,user_mbti=None,mode="A"):
    s={"mode":mode,"rel_12":rel(elem(c1),elem(c2)),"rel_23":rel(elem(c2),elem(c3)),"arc":arc(c1,c2,c3),
       "major_count":sum(kind(c)=="major" for c in (c1,c2,c3)),"flags":[]}
    s["register"]=REGISTER_OF_ARC[s["arc"]]
    s["same_suit_12"]=bool(suit(c1) and suit(c1)==suit(c2)); s["same_suit_23"]=bool(suit(c2) and suit(c2)==suit(c3))
    k=lambda a,b:f"{kind(a)}-{kind(b)}"; s["kinds_12"]=k(c1,c2); s["kinds_23"]=k(c2,c3)
    if s["rel_12"]=="hostile" and s["rel_23"]=="hostile": s["flags"].append("both_sides_hostile")
    pairs=[(a,b) for a in (c1,c2,c3) for b in (c1,c2,c3) if a is not b and a["bachFlowerEn"]==b["bachFlowerEn"] and layer(a)!=layer(b) and "Rescue" not in a["bachFlowerEn"]]
    s["resonance"]="pair" if pairs else "none"
    courts=[c for c in (c2,c1,c3) if kind(c)=="court"]          # 此刻優先、其次來處、再其次去向
    s["court_present"]=bool(courts); s["user_mbti"]=bool(user_mbti)
    s["court_rank"]=courts[0]["nameZh"][2:] if courts else None
    s["mbti_relation"]=None   # 需要宮廷牌 ↔ MBTI 對照表，由正式引擎填入
    s["rescue_count"]=sum("Rescue" in c["bachFlowerEn"] for c in (c1,c2,c3))
    s["rescue_at"]=[p for p,c in zip(("origin","now","direction"),(c1,c2,c3)) if "Rescue" in c["bachFlowerEn"]]
    if all(kind(c)=="pip" and c["number"]=="10" for c in (c1,c2,c3)): s["flags"].append("all_tens")
    return s
def match(t,s):
    for k,v in t["trigger"].items():
        if k=="flags":
            if not all(f in s["flags"] for f in v): return False
        elif s.get(k)!=v: return False
    for k,v in t["exclude"].items():
        if k=="flags" and any(f in s["flags"] for f in v): return False
        if k!="flags" and s.get(k) in v: return False
    return True
def pick(slot,s,seed,recent=None):
    """recent: {slot: [template_id,...]} 使用者最近 N 篇在此槽看過的句子"""
    c=[t for t in T if t["slot"]==slot and t["status"]=="approved" and match(t,s)]
    if not c: return None
    c2=[t for t in c if s["register"] in t["register"]]
    if c2: c=c2                                    # register 相容者優先；全不相容時退回全部（並應在測試中被標記）
    m=max(len(t["trigger"]) for t in c); c=[t for t in c if len(t["trigger"])==m]   # specificity 先於近期排除
    if recent and recent.get(slot) and len(c)>1:
        c3=[t for t in c if t["template_id"] not in recent[slot]]
        if c3: c=c3                                # 同一特異層內排除；全被排除時允許重複
    pool=[t for t in c for _ in range(t["weight"])]
    h=int(hashlib.md5(f"{seed}|{slot}".encode()).hexdigest(),16); return pool[h%len(pool)]
def fill(text,c1,c2,c3):
    zh={"Fire":"火","Water":"水","Air":"風","Earth":"地"}
    dup=[c1,c2,c3]; ess=next((c for c in dup if [x["bachFlowerEn"] for x in dup].count(c["bachFlowerEn"])>1),c2)
    return text.format(elem_1=zh[elem(c1)],elem_2=zh[elem(c2)],elem_3=zh[elem(c3)],essence_zh=ess["bachFlowerZh"],essence_en=ess["bachFlowerEn"],
        court_name="",court_type="",user_type="",archetype=c1["nameZh"],persona=c2["nameZh"],situation=c3["nameZh"])
BRIEF_TEMPLATE_SLOTS={"exception","mirror_synthesis","arc","cta_brief","closing"}   # 精簡版渲染的模板槽（mirror_synthesis 只在模式 C 出現）
def select_all(s,seed,recent=None,mode="A"):
    """抽牌當下一次選完所有槽；回傳 {slot: template}（只含實際會出場的槽）"""
    sel={}
    def put(slot):
        t=pick(slot,s,seed,recent)
        if t: sel[slot]=t
    put("opening"); put("exception")
    if "exception" not in sel: put("structure") if mode!="C" else put("mirror_synthesis")
    if mode!="C": put("rel_both") if s["flags"] and "both_sides_hostile" in s["flags"] else put("rel_12")
    if mode!="C" and "both_sides_hostile" not in s["flags"]: put("rel_23")
    if "exception" not in sel: put("arc")
    put("resonance")
    put("court") if s["user_mbti"] else put("court_generic")
    put("cta_brief"); put("cta_full"); put("closing")
    return sel
def mirror_ok(c1,c2,c3):
    """鏡像短文全有或全無：三張任一缺核准稿即整篇退回位置短文"""
    return all(c["id"] in M and M[c["id"]]["status"]=="approved" for c in (c1,c2,c3))
def render(c1,c2,c3,s,sel,mode="A",variant="full",locale="zh"):
    out=[]; use_mirror=(mode=="C" and mirror_ok(c1,c2,c3))
    def put(slot):
        if slot not in sel: return
        if variant=="brief" and slot not in BRIEF_TEMPLATE_SLOTS: return
        if variant=="full" and slot=="cta_brief": return
        t=sel[slot]; out.append(fill(t["text"][locale],c1,c2,c3)+f"　`{t['template_id']}`"); out.append("")
    def pos(c,position):
        r=M[c["id"]] if use_mirror else P[(c["id"],position)]
        out.append(r["text"][locale]); out.append("")
    put("opening"); put("exception"); put("structure"); put("mirror_synthesis")
    pos(c1,"origin"); put("rel_both"); put("rel_12")
    pos(c2,"now"); put("rel_23")
    pos(c3,"direction")
    put("arc"); put("resonance"); put("court"); put("court_generic")
    if variant=="full":
        roles=[("主",c2),("釋放",c1),("支持",c3)]; seen=set(); parts=[]
        for role,c in roles:
            if c["bachFlowerEn"] in seen: parts.append(f"{role}：（與上同支，已合併）"); continue
            seen.add(c["bachFlowerEn"]); parts.append(f"{role}：{c['bachFlowerZh']}（{c['bachFlowerEn']}）")
        out.append("〔花精複方〕"+"／".join(parts)+f"　共 {len(seen)} 支"); out.append("")
        out.append(f"〔身體練習〕{c3['step3Body']}"); out.append("")
    put("cta_brief"); put("cta_full"); put("closing")
    return "\n".join(out)
def compose(c1,c2,c3,user="demo",date="2026-10-25",mode="A",variant="full",locale="zh",recent=None,user_mbti=None,reading_id=None):
    s=state(c1,c2,c3,user_mbti=user_mbti,mode=mode)
    seed=f"{user}|{date}|{c1['id']}|{c2['id']}|{c3['id']}"
    sel=select_all(s,seed,recent,mode)
    text=render(c1,c2,c3,s,sel,mode,variant,locale)
    def chars(v):
        return sum(len(re.sub(r"　`[^`]+`$","",x)) for x in render(c1,c2,c3,s,sel,mode,v,locale).split("\n"))
    record={"reading_id":reading_id or str(uuid.uuid4()),"user_id":user,"created_at":date,"mode":mode,"initial_variant":variant,"locale":locale,
            "cards":[c1["id"],c2["id"],c3["id"]],"state":s,"selections":{k:v["template_id"] for k,v in sel.items()},
            "content_version":"2026-10","engine_version":"v2","chars":{"brief":chars("brief"),"full":chars("full")},"events":[]}
    return text,record
def replay(record,variant=None,locale=None):
    """由紀錄重播：不重算選取，只依 template_id 取文字（忽略 status，retired 亦可重播）"""
    c1,c2,c3=(cards[i] for i in record["cards"]); byid={t["template_id"]:t for t in T}
    sel={k:byid[v] for k,v in record["selections"].items()}
    return render(c1,c2,c3,record["state"],sel,record["mode"],variant or record["initial_variant"],locale or record["locale"])
def reading(n1,n2,n3,**kw):
    c1,c2,c3=byname[n1],byname[n2],byname[n3]; t,r=compose(c1,c2,c3,**kw)
    s=r["state"]
    head=f"【{n1} → {n2} → {n3}】 {kw.get('mode','A')}/{kw.get('variant','full')} 狀態：{s['rel_12']}/{s['rel_23']}/{s['arc']}({s['register']})/大秘儀{s['major_count']}/{'共振' if s['resonance']=='pair' else '無共振'}{' /'+','.join(s['flags']) if s['flags'] else ''}　brief {r['chars']['brief']} 字／full {r['chars']['full']} 字"
    return head+"\n\n"+t, r
if __name__=="__main__":
    demos=(("聖杯五","愚者","星星"),("星星","愚者","聖杯五"),("權杖一","愚者","星星"),("太陽","權杖十","聖杯騎士"),("寶劍九","寶劍國王","聖杯九"))
    recs=[]
    for a,b,c_ in demos:
        t,r=reading(a,b,c_); print(t); print("="*40); recs.append(r)
    t,r=reading("聖杯五","愚者","星星",variant="brief"); print(t); print("="*40); recs.append(r)
    t,r=reading("愚者","聖杯騎士","權杖一",mode="C"); print(t); print("="*40); recs.append(r)
    # 近期排除示範：同一組牌、同一天，排除上一篇的 arc 句
    t,r=reading("聖杯五","愚者","星星",recent={"arc":[recs[0]["selections"].get("arc")]}); print(t); recs.append(r)
    # 重播檢查：由紀錄重播的完整版必須與直接產生的一致
    for (a,b,c_),r in zip(demos,recs[:5]):
        assert replay(r,"full")==reading(a,b,c_)[0].split("\n\n",1)[1], "replay mismatch"
    print("replay check ok")
    for i,r in enumerate(recs): r["reading_id"]=f"demo-{i+1:02d}"   # 示範用固定 id，正式環境用 server uuid
    json.dump(recs,open(_p("demo_reading_records.json"),"w",encoding="utf8"),ensure_ascii=False,indent=1)
