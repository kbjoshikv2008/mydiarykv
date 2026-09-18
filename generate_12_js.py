import json

with open('scratch_class12_records.json', 'r', encoding='utf-8') as f:
    records = json.load(f)

# Convert to clean JS array structure:
# { roll, sid, name, ap_raw, ju_raw, jl_raw, au_raw }
js_students = []
for r in records:
    # ensure raw values are numbers, strings ('AB' or '-')
    ap = r['ap_raw']
    if isinstance(ap, float) and ap.is_integer(): ap = int(ap)
    ju = r['ju_raw']
    if isinstance(ju, float) and ju.is_integer(): ju = int(ju)
    jl = r['jl_raw']
    if isinstance(jl, float) and jl.is_integer(): jl = int(jl)
    au = r['au_raw']
    if isinstance(au, float) and au.is_integer(): au = int(au)
    
    js_students.append({
        'roll': r['roll'],
        'sid': r['sid'],
        'name': r['name'],
        'ap_raw': ap,
        'ju_raw': ju,
        'jl_raw': jl,
        'au_raw': au
    })

print("const samagam12Data = " + json.dumps(js_students, indent=6) + ";")
