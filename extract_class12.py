import os
import json
import openpyxl

base_dir = r"samagam result data\class 12"
months = ["April", "June", "July", "August"]

students = {}

for m in months:
    for f in os.listdir(base_dir):
        if f.endswith('.xlsx') and m in f:
            path = os.path.join(base_dir, f)
            wb = openpyxl.load_workbook(path, data_only=True)
            ws = wb.active
            for r in range(2, ws.max_row + 1):
                roll = ws.cell(r, 1).value
                sid = ws.cell(r, 2).value
                name = ws.cell(r, 3).value
                obt = ws.cell(r, 4).value
                if sid is not None and str(sid).strip() != '':
                    sid = int(sid)
                    roll = int(roll) if roll is not None else None
                    name = str(name).strip() if name is not None else ''
                    if sid not in students:
                        students[sid] = {'sid': sid, 'roll': roll, 'name': name, 'marks': {}}
                    if roll is not None:
                        students[sid]['roll'] = roll
                    if name:
                        students[sid]['name'] = name
                    students[sid]['marks'][m] = obt

def get_grade(pct):
    if pct >= 91: return 'A1'
    if pct >= 81: return 'A2'
    if pct >= 71: return 'B1'
    if pct >= 61: return 'B2'
    if pct >= 51: return 'C1'
    if pct >= 41: return 'C2'
    if pct >= 33: return 'D'
    return 'E'

records = []
for sid, s in students.items():
    ap = s['marks'].get('April')
    ju = s['marks'].get('June')
    jl = s['marks'].get('July')
    au = s['marks'].get('August')
    
    def parse_m(v):
        if v is None: return None, 0
        if str(v).strip().upper() == 'AB': return 'AB', 0
        try:
            return float(v), float(v)
        except:
            return None, 0
            
    ap_display, ap_num = parse_m(ap)
    ju_display, ju_num = parse_m(ju)
    jl_display, jl_num = parse_m(jl)
    au_display, au_num = parse_m(au)
    
    tot_obtained = ap_num + ju_num + jl_num + au_num
    tests_valid = [x for x in [ap_display, ju_display, jl_display, au_display] if x is not None]
    max_marks = len(tests_valid) * 40 if len(tests_valid) > 0 else 160
    
    pct_prop = (tot_obtained / max_marks) * 100.0 if max_marks > 0 else 0
    scaled_100 = round(pct_prop, 2)
    grade = get_grade(scaled_100)
    result = 'Passed' if scaled_100 >= 33 else 'Needs Imp.'
    
    # Weightages: monthly tests out of 40 raw, scaled / converted
    # If converted to 10 marks weightage each (4 tests x 10M = 40M or 4 tests x 25M = 100M, or 4 tests x 2.5M = 10M internal assessment)
    # Let's record raw and converted
    records.append({
        'roll': s['roll'],
        'sid': s['sid'],
        'name': s['name'],
        'ap_raw': ap_display if ap_display is not None else '-',
        'ap_num': ap_num,
        'ju_raw': ju_display if ju_display is not None else '-',
        'ju_num': ju_num,
        'jl_raw': jl_display if jl_display is not None else '-',
        'jl_num': jl_num,
        'au_raw': au_display if au_display is not None else '-',
        'au_num': au_num,
        'tot_obtained': tot_obtained,
        'max_marks': max_marks,
        'scaled_100': scaled_100,
        'grade': grade,
        'result': result
    })

records.sort(key=lambda x: (x['roll'] if x['roll'] is not None else 999, x['name']))

with open('scratch_class12_records.json', 'w', encoding='utf-8') as out:
    json.dump(records, out, indent=2)

print(f"Computed {len(records)} Class 12 student records.")
for r in records:
    print(f"Roll {r['roll']:2d} | {r['sid']} | {r['name']:<24} | Apr: {str(r['ap_raw']):>4} | Jun: {str(r['ju_raw']):>4} | Jul: {str(r['jl_raw']):>4} | Aug: {str(r['au_raw']):>4} | Tot: {r['tot_obtained']:5.1f}/{r['max_marks']:3d} | {r['scaled_100']:6.2f}% | {r['grade']} | {r['result']}")
