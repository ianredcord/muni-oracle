# 以參考實作重播八組示範，輸出 brief／full 文字做為 TS 引擎的對照夾具。
#   python3 -I scripts/dump-python-demo-texts.py
import json, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "handoff", "data"))
import muni_assemble_reference as m  # noqa: E402

recs = json.load(open(os.path.join(ROOT, "handoff", "data", "demo_reading_records.json"), encoding="utf8"))
out = [{"reading_id": r["reading_id"], "brief": m.replay(r, "brief"), "full": m.replay(r, "full")} for r in recs]
dst = os.path.join(ROOT, "tests", "three-card", "fixtures", "python-demo-texts.json")
json.dump(out, open(dst, "w", encoding="utf8"), ensure_ascii=False, indent=1)
print(f"wrote {dst} ({len(out)} records)")
