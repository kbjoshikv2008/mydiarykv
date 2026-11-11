const fs = require('fs');
const vm = require('vm');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let hasErrors = false;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match script blocks
  const scriptRegex = /<script(?![^>]*type=['"]text\/(?:html|template)['"])[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let count = 0;
  while ((match = scriptRegex.exec(content)) !== null) {
    const code = match[1];
    // Skip empty or purely whitespace scripts or src-only
    if (!code || !code.trim()) continue;
    count++;
    try {
      new vm.Script(code, { filename: `${file}#script${count}` });
    } catch (err) {
      console.error(`Syntax error in ${file} (script #${count}):`, err.message);
      hasErrors = true;
    }
  }
});

if (!hasErrors) {
  console.log(`Audited all ${htmlFiles.length} HTML files successfully: 0 syntax errors.`);
} else {
  process.exit(1);
}
