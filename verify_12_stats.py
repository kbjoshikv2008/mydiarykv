import json

with open('scratch_class12_records.json', 'r', encoding='utf-8') as f:
    records = json.load(f)

print("Class 12 Summary Statistics:")
total_students = len(records)
passed = [r for r in records if r['scaled_100'] >= 33]
failed = [r for r in records if r['scaled_100'] < 33]
avg = sum(r['scaled_100'] for r in records) / total_students
highest = max(records, key=lambda x: x['scaled_100'])

print(f"Total Students: {total_students}")
print(f"Passed: {len(passed)} ({len(passed)*100/total_students:.1f}%)")
print(f"Needs Imp.: {len(failed)} ({len(failed)*100/total_students:.1f}%)")
print(f"Class Average: {avg:.2f}%")
print(f"Highest: {highest['scaled_100']:.2f}% ({highest['name']} - {highest['grade']})")

r_bins = {'R1': [], 'R2': [], 'R3': [], 'R4': [], 'R5': [], 'R6': []}
for r in records:
    pct = r['scaled_100']
    if pct < 33: r_bins['R1'].append(r)
    elif pct <= 45: r_bins['R2'].append(r)
    elif pct < 60: r_bins['R3'].append(r)
    elif pct < 75: r_bins['R4'].append(r)
    elif pct < 90: r_bins['R5'].append(r)
    else: r_bins['R6'].append(r)

labels = [
    ("R1", "1. Less than 33%", "< 33.00"),
    ("R2", "2. 33% to 45%", "33.00 - 45.00"),
    ("R3", "3. More than 45% but less than 60%", "45.01 - 59.99"),
    ("R4", "4. 60% to less than 75%", "60.00 - 74.99"),
    ("R5", "5. 75% to less than 90%", "75.00 - 89.99"),
    ("R6", "6. 90% and Above", ">= 90.00")
]

print("\n--- 6 Range Breakdown ---")
for key, title, m_range in labels:
    lst = r_bins[key]
    cnt = len(lst)
    pct = cnt * 100 / total_students
    rolls = ", ".join(f"Roll {x['roll']} ({x['name'].split()[0]})" for x in lst) if lst else "Nil"
    print(f"{title:<36} | {m_range:<14} | Count: {cnt:2d} ({pct:5.1f}%) | {rolls}")
