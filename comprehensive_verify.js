const fs = require('fs');
const vm = require('vm');

console.log("=== COMPREHENSIVE VERIFICATION FOR NIHARIKA MOHAN IN CLASS 11B ===");

const files = [
  'analysis.html',
  'consolidated.html',
  'learners.html',
  'ptm.html',
  'single-digit-marks.html',
  'slow-learners-attendance.html'
];

let allPassed = true;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\nChecking ${file}:`);
  
  // 1. Check if NIHARIKA MOHAN is present in 11B roster
  const hasInRoster = content.includes('"NEHA NEGI", "NIHARIKA MOHAN", "PARAS SATI"');
  console.log(`  - 11B roster has NIHARIKA MOHAN in alphabetical sequence: ${hasInRoster ? 'PASS' : 'FAIL'}`);
  if (!hasInRoster) allPassed = false;
  
  // 2. Check if HY marks has NIHARIKA MOHAN: 60 (ptm.html does not have fallback marks)
  if (content.includes('fallbackMarks')) {
    const hasHyMark = /"NIHARIKA MOHAN":\s*60/.test(content);
    console.log(`  - Fallback HY marks has "NIHARIKA MOHAN": 60: ${hasHyMark ? 'PASS' : 'FAIL'}`);
    if (!hasHyMark) allPassed = false;
  }
  
  // 3. Check mobile number 9410729583
  const hasMobile = content.includes('9410729583');
  console.log(`  - Mobile number 9410729583 bound: ${hasMobile ? 'PASS' : 'FAIL'}`);
  if (!hasMobile) allPassed = false;

  // 4. Check that there are NO filters removing NIHARIKA MOHAN
  const hasRemoveFilter = /!==\s*["']NIHARIKA MOHAN["']/.test(content);
  console.log(`  - No negative filters removing NIHARIKA MOHAN: ${!hasRemoveFilter ? 'PASS' : 'FAIL (STILL PRESENT!)'}`);
  if (hasRemoveFilter) allPassed = false;
});

// Now test simulation of analysis.html loadData & roster
const analysisContent = fs.readFileSync('analysis.html', 'utf8');

// Mock a browser environment to run loadData
const mockLocalStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = v; },
  removeItem(k) { delete this.store[k]; }
};

const sandbox = {
  localStorage: mockLocalStorage,
  window: {
    addEventListener: () => {},
    removeEventListener: () => {}
  },
  console: console,
  document: {
    addEventListener: () => {},
    getElementById: () => ({ value: "" })
  }
};
sandbox.window.window = sandbox.window;
sandbox.addEventListener = () => {};

try {
  const scriptRegex = /<script(?![^>]*type=['"]text\/(?:html|template)['"])[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(analysisContent)) !== null) {
    const code = match[1];
    if (code.includes('fallbackRosters') && code.includes('loadData')) {
      vm.createContext(sandbox);
      vm.runInContext(code, sandbox);
      break;
    }
  }

  // Call loadData in sandbox
  sandbox.loadData();
  const students11B = sandbox.studentData["11B"];
  console.log(`\nSimulation in analysis.html sandbox:`);
  console.log(`  - Total 11B students count: ${students11B.length} (Expected: 21)`);
  if (students11B.length !== 21) allPassed = false;

  const niharika = students11B.find(s => s.name === "NIHARIKA MOHAN");
  console.log(`  - Found NIHARIKA MOHAN:`, niharika ? 'YES' : 'NO');
  if (niharika) {
    console.log(`    * Roll No: ${niharika.rollNo} (Expected: 14)`);
    console.log(`    * Parent Mobile: ${niharika.parentMobile} (Expected: 9410729583)`);
    console.log(`    * HY Marks: ${niharika.marks && niharika.marks.hy} (Expected: 60)`);
    if (niharika.rollNo !== 14 || niharika.parentMobile !== '9410729583' || niharika.marks.hy !== 60) {
      allPassed = false;
    }
  } else {
    allPassed = false;
  }

  // Check student before and after Niharika
  const roll13 = students11B[12];
  const roll14 = students11B[13];
  const roll15 = students11B[14];
  console.log(`  - Roll 13: ${roll13.rollNo} ${roll13.name}`);
  console.log(`  - Roll 14: ${roll14.rollNo} ${roll14.name}`);
  console.log(`  - Roll 15: ${roll15.rollNo} ${roll15.name}`);
  if (roll13.name !== "NEHA NEGI" || roll14.name !== "NIHARIKA MOHAN" || roll15.name !== "PARAS SATI") {
    console.error("Alphabetical sorting mismatch!");
    allPassed = false;
  }
} catch (err) {
  console.error("Simulation error:", err);
  allPassed = false;
}

if (allPassed) {
  console.log("\n>>> ALL CHECKS PASSED PERFECTLY (100% MATCH) <<<");
} else {
  console.error("\n>>> VERIFICATION FAILED! <<<");
  process.exit(1);
}
