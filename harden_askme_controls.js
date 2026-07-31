const fs = require('fs');

const filePath = 'c:\\Users\\kirti\\OneDrive\\Desktop\\mydiarykv\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add direct inline onclick/onkeydown to HTML elements
content = content.replace(
  '<button id="chatMinimizeBtn" title="Minimize"',
  '<button id="chatMinimizeBtn" onclick="if(window.minimizeAskMe) window.minimizeAskMe();" title="Minimize"'
);

content = content.replace(
  '<button class="chat-close-btn" id="chatbotCloseBtn" title="Close"',
  '<button class="chat-close-btn" id="chatbotCloseBtn" onclick="if(window.closeAskMe) window.closeAskMe();" title="Close"'
);

content = content.replace(
  '<input type="text" class="chat-input" id="chatInput" placeholder="Type your mathematics question in English..." autocomplete="off" style="flex:1;">',
  '<input type="text" class="chat-input" id="chatInput" placeholder="Type your mathematics question in English..." autocomplete="off" onkeydown="if(event.key===\'Enter\'){ event.preventDefault(); if(window.sendAskMe) window.sendAskMe(); }" style="flex:1;">'
);

content = content.replace(
  '<button class="chat-send-btn" id="chatSendBtn" title="Send">',
  '<button class="chat-send-btn" id="chatSendBtn" onclick="if(window.sendAskMe) window.sendAskMe();" title="Send">'
);

// 2. Harden script in <head> with sendAskMe, closeAskMe, minimizeAskMe, and helper methods attached to window
const oldHeadScript = `<script>
    window.openAskMe = function() {
      var overlay = document.getElementById('askMeOverlay') || document.querySelector('.askme-overlay');
      var panel   = document.getElementById('chatbotPanel') || document.querySelector('.chatbot-panel');
      var minBtn  = document.getElementById('chatMinimizeBtn');
      var input   = document.getElementById('chatInput');
      if (!overlay || !panel) return;

      overlay.style.display = 'flex';
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
      overlay.classList.add('active');

      panel.style.display = 'flex';
      panel.style.opacity = '1';
      panel.style.visibility = 'visible';
      panel.style.transform = 'scale(1) translateY(0)';
      panel.style.maxHeight = '';
      panel.classList.add('active');

      if (minBtn) minBtn.innerHTML = '<i class="fas fa-minus"></i>';
      setTimeout(function(){ if (input) input.focus(); }, 150);
    };

    window.closeAskMe = function() {
      var overlay = document.getElementById('askMeOverlay') || document.querySelector('.askme-overlay');
      var panel   = document.getElementById('chatbotPanel') || document.querySelector('.chatbot-panel');

      if (overlay) {
        overlay.classList.remove('active');
        overlay.style.display = 'none';
      }
      if (panel) {
        panel.classList.remove('active');
        panel.style.display = 'none';
        panel.style.opacity = '0';
      }
    };
  </script>`;

const newHeadScript = `<script>
    window.isAskMeMinimized = false;

    window.openAskMe = function() {
      var overlay = document.getElementById('askMeOverlay') || document.querySelector('.askme-overlay');
      var panel   = document.getElementById('chatbotPanel') || document.querySelector('.chatbot-panel');
      var minBtn  = document.getElementById('chatMinimizeBtn');
      var input   = document.getElementById('chatInput');
      if (!overlay || !panel) return;

      window.isAskMeMinimized = false;
      overlay.style.display = 'flex';
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
      overlay.classList.add('active');

      panel.style.display = 'flex';
      panel.style.opacity = '1';
      panel.style.visibility = 'visible';
      panel.style.transform = 'scale(1) translateY(0)';
      panel.style.maxHeight = '';
      panel.classList.add('active');

      if (minBtn) minBtn.innerHTML = '<i class="fas fa-minus"></i>';
      setTimeout(function(){ if (input) input.focus(); }, 150);
    };

    window.closeAskMe = function() {
      var overlay = document.getElementById('askMeOverlay') || document.querySelector('.askme-overlay');
      var panel   = document.getElementById('chatbotPanel') || document.querySelector('.chatbot-panel');

      if (overlay) {
        overlay.classList.remove('active');
        overlay.style.display = 'none';
      }
      if (panel) {
        panel.classList.remove('active');
        panel.style.display = 'none';
        panel.style.opacity = '0';
      }
    };

    window.minimizeAskMe = function() {
      var panel  = document.getElementById('chatbotPanel');
      var minBtn = document.getElementById('chatMinimizeBtn');
      if (!panel) return;

      window.isAskMeMinimized = !window.isAskMeMinimized;
      if (window.isAskMeMinimized) {
        panel.style.maxHeight = '58px';
        panel.style.overflow = 'hidden';
        if (minBtn) minBtn.innerHTML = '<i class="fas fa-expand-alt"></i>';
      } else {
        panel.style.maxHeight = '';
        panel.style.overflow = 'hidden';
        if (minBtn) minBtn.innerHTML = '<i class="fas fa-minus"></i>';
      }
    };

    window.sendAskMe = function() {
      var input = document.getElementById('chatInput');
      if (!input) return;
      var q = input.value.trim();
      if (!q) return;

      if (window.addAskMeMessage) {
        window.addAskMeMessage(q, 'user');
      }
      input.value = '';
      if (window.showAskMeTyping) window.showAskMeTyping();
      if (window.processAskMeQuery) window.processAskMeQuery(q);
    };
  </script>`;

if (content.includes(oldHeadScript)) {
  content = content.replace(oldHeadScript, newHeadScript);
  console.log('Successfully updated head script with sendAskMe and minimizeAskMe!');
} else {
  console.log('oldHeadScript not matched exactly, appending global definitions...');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated HTML inline handlers in index.html!');
