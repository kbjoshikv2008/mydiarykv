const fs = require('fs');

const filePath = 'c:\\Users\\kirti\\OneDrive\\Desktop\\mydiarykv\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

const targetUnclosed = `<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
    onload="if(window.renderMathInElement){renderMathInElement(document.getElementById('chatMessages'),{delimiters:[{left:'$',right:'$',display:true},{left:'

  <style>`;

const fixedBlock = `<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
    onload="if(window.renderMathInElement){renderMathInElement(document.getElementById('chatMessages'),{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false});}"></script>

  <style>`;

if (content.includes(targetUnclosed)) {
  content = content.replace(targetUnclosed, fixedBlock);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully fixed unclosed <script> tag on line 13!');
} else {
  console.log('targetUnclosed not matched exactly, inspecting lines around line 13...');
}

