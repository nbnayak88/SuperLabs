#!/usr/bin/env python3
"""Validate seven-academy SuperLabs registries and draft activity packs."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def load(path): return json.loads((ROOT/path).read_text(encoding="utf-8"))
labs=load("registry/labs.json")["labs"]
academies=load("registry/academies.json")["academies"]
labids={x["id"] for x in labs}
assert len(labids)==20 and labids=={f"SL{i:02d}" for i in range(1,21)}
assert len(academies)==7
assert len({a["id"] for a in academies})==7
total=0
for a in academies:
    code=a["id"]
    mapping=load(f"mappings/{code.lower()}.json")
    pack=load(f"content-packs/{code}/starter-activities.json")
    streams=mapping["streams"]
    activities=pack["activities"]
    assert mapping["academy_id"]==code==pack["academy_id"]
    assert len(streams)==len(activities)==12
    assert len({s["stream_id"] for s in streams})==12
    by_stream={x["stream_id"]:x for x in activities}
    assert len(by_stream)==12
    for stream in streams:
        core=set(stream["core_lab_ids"])
        other=set(stream["other_lab_ids"])
        assert len(core)==4 and len(other)==16 and core.isdisjoint(other)
        assert core|other==labids
        activity=by_stream[stream["stream_id"]]
        assert activity["lab_id"] in core
        assert activity["stream_folder"]==stream["township_folder"]
        assert sum(row["weight"] for row in activity["assessment_rubric"])==100
        assert activity["steps"] and activity["output_artifacts"] and activity["reflection_prompts"]
        total+=1
    print(f"PASS {code}: 12 mapped streams and 12 starter activities")
assert total==84
print("PASS all seven domains, 84 streams, 84 starter activities, 20 canonical labs")
