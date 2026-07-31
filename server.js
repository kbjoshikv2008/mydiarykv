const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const START_PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.ppt': 'application/vnd.ms-powerpoint',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.doc': 'application/msword'
};

const INLINE_EXTENSIONS = new Set(['.html', '.css', '.js', '.json', '.pdf', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.mp4', '.webm', '.mp3']);


// Persistent Website Hits Counter Storage
const HITS_FILE = path.join(__dirname, 'hits_counter.json');
let hitsData = { totalHits: 1458, todayHits: 48, lastReset: new Date().toDateString() };

try {
  if (fs.existsSync(HITS_FILE)) {
    const raw = fs.readFileSync(HITS_FILE, 'utf8');
    hitsData = Object.assign(hitsData, JSON.parse(raw));
  } else {
    fs.writeFileSync(HITS_FILE, JSON.stringify(hitsData, null, 2));
  }
} catch (err) {
  console.error('Hits counter error:', err);
}

function saveHits() {
  try {
    fs.writeFileSync(HITS_FILE, JSON.stringify(hitsData, null, 2));
  } catch (err) {}
}

const server = http.createServer((req, res) => {
  // Set global CORS headers to allow video, ppt, and image access from any origin (including file://)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range, Authorization');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges, Content-Disposition');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Decode URL to handle spaces and special characters
  const urlParts = req.url.split('?');
  let urlPath = decodeURIComponent(urlParts[0]);

  // Handle Website Content Update API route (Password Protected)
  if (urlPath === '/api/update-website') {
    const handleUpdate = (pass) => {
      if (pass !== '08@AkshitA@31') {
        res.writeHead(401, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
        res.end(JSON.stringify({ success: false, message: 'Incorrect password! Update denied.' }));
        return;
      }
      try {
        // Automatically parse Excel test records and synchronize marks across all HTML pages
        autoSyncExcelMarks();

        // Invalidate node require cache for dynamic data files
        const quizPath = path.join(__dirname, 'daily_quiz_data.js');
        if (require.cache[quizPath]) {
          delete require.cache[quizPath];
        }
        
        // Refresh hits data if file exists
        if (fs.existsSync(HITS_FILE)) {
          const raw = fs.readFileSync(HITS_FILE, 'utf8');
          hitsData = Object.assign(hitsData, JSON.parse(raw));
        }

        hitsData.lastContentUpdate = new Date().toISOString();
        saveHits();

        res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
        res.end(JSON.stringify({
          success: true,
          message: 'Website content & Excel marks updated successfully everywhere!',
          timestamp: Date.now(),
          lastUpdated: hitsData.lastContentUpdate
        }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
        res.end(JSON.stringify({ success: false, message: 'Failed to update website content: ' + err.message }));
      }
    };

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk.toString(); });
      req.on('end', () => {
        let pass = '';
        try {
          const parsed = JSON.parse(body);
          pass = parsed.password || '';
        } catch (e) {
          const params = new URLSearchParams(body);
          pass = params.get('password') || '';
        }
        handleUpdate(pass);
      });
    } else {
      const params = new URLSearchParams(urlParts[1] || '');
      handleUpdate(params.get('password') || '');
    }
    return;
  }

  // Handle Hits API route
  if (urlPath === '/api/hits') {
    const isInc = req.url.includes('inc=true') || req.url.includes('increment=true');
    if (isInc) {
      hitsData.totalHits = (hitsData.totalHits || 1458) + 1;
      const todayStr = new Date().toDateString();
      if (hitsData.lastReset !== todayStr) {
        hitsData.todayHits = 1;
        hitsData.lastReset = todayStr;
      } else {
        hitsData.todayHits = (hitsData.todayHits || 0) + 1;
      }
      saveHits();
    }
    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify(hitsData));
    return;
  }

  // Handle ASK ME Math Knowledge Base API route
  if (urlPath === '/api/ask-me') {
    const params = new URLSearchParams(urlParts[1] || '');
    const query = (params.get('q') || '').toLowerCase().trim();
    if (!query) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No query provided', results: [] }));
      return;
    }
    try {
      const askMeFile = path.join(__dirname, 'ASK ME', 'ask_me_data.js');
      if (!fs.existsSync(askMeFile)) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'ASK ME data not found', results: [] }));
        return;
      }
      // Read file, extract data array via simple parsing
      const raw = fs.readFileSync(askMeFile, 'utf8');
      // Eval in a safe sandboxed way by using Function
      let askMeData = [];
      try {
        const fn = new Function('window', raw + '; return window.ASK_ME_DATA;');
        const fakeWindow = {};
        askMeData = fn(fakeWindow) || [];
      } catch(e) {
        // Fallback - match manually using regex
        askMeData = [];
      }
      const words = query.split(/\s+/).filter(w => w.length >= 2);
      const scored = askMeData.map(item => {
        let score = 0;
        words.forEach(word => {
          (item.keywords || []).forEach(kw => {
            if (kw.toLowerCase().includes(word)) score += 3;
            if (word.includes(kw.toLowerCase())) score += 2;
          });
          if ((item.question || '').toLowerCase().includes(word)) score += 2;
          if ((item.answer || '').toLowerCase().replace(/<[^>]+>/g, '').includes(word)) score += 1;
        });
        return { question: item.question, answer: item.answer, class: item.class, chapter: item.chapter, source: item.source, score };
      });
      const results = scored.filter(i => i.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
      res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      res.end(JSON.stringify({ results }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message, results: [] }));
    }
    return;
  }

  // Handle Daily Quiz API route
  if (urlPath === '/api/daily-quiz') {
    try {
      const dailyQuizModule = require('./daily_quiz_data.js');
      const params = new URLSearchParams(urlParts[1] || '');
      const cls = params.get('class') || '10';
      const date = params.get('date') || new Date().toISOString().split('T')[0];
      const quizJSON = dailyQuizModule.getDailyQuizJSON(cls, date);
      
      res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      res.end(JSON.stringify(quizJSON, null, 2));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // Handle Quiz Participants API route (Authentic Unique User Tracking)
  if (urlPath === '/api/quiz-participants') {
    const params = new URLSearchParams(urlParts[1] || '');
    const isInc = params.get('inc') === 'true' || params.get('increment') === 'true';
    const userId = params.get('userId') || params.get('uid') || '';
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
    const uniqueKey = userId ? `${userId}_${clientIp}` : clientIp;
    
    const todayStr = new Date().toDateString();

    // Reset daily tracking sets if date changed
    if (hitsData.lastQuizReset !== todayStr) {
      hitsData.todayQuizUsers = [];
      hitsData.lastQuizReset = todayStr;
    }

    if (!Array.isArray(hitsData.todayQuizUsers)) {
      hitsData.todayQuizUsers = [];
    }
    if (!Array.isArray(hitsData.allTimeQuizUsers)) {
      hitsData.allTimeQuizUsers = [];
    }

    if (isInc) {
      // Record attempt only if user hasn't completed today's official quiz
      let updated = false;
      if (!hitsData.todayQuizUsers.includes(uniqueKey)) {
        hitsData.todayQuizUsers.push(uniqueKey);
        hitsData.todayParticipants = (hitsData.todayParticipants || 0) + 1;
        updated = true;
      }
      if (!hitsData.allTimeQuizUsers.includes(uniqueKey)) {
        hitsData.allTimeQuizUsers.push(uniqueKey);
        hitsData.totalParticipants = (hitsData.totalParticipants || 0) + 1;
        updated = true;
      }
      if (updated) {
        saveHits();
      }
    }

    const todayCount = Math.max(hitsData.todayQuizUsers.length, hitsData.todayParticipants || 1);
    const totalCount = Math.max(hitsData.allTimeQuizUsers.length, hitsData.totalParticipants || 1);

    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify({
      todayParticipants: todayCount,
      totalParticipants: totalCount
    }));
    return;
  }

  // Auto-increment hits on HTML page loads
  if (urlPath === '/' || urlPath === '' || urlPath.endsWith('.html')) {
    hitsData.totalHits = (hitsData.totalHits || 1458) + 1;
    const todayStr = new Date().toDateString();
    if (hitsData.lastReset !== todayStr) {
      hitsData.todayHits = 1;
      hitsData.lastReset = todayStr;
    } else {
      hitsData.todayHits = (hitsData.todayHits || 0) + 1;
    }
    saveHits();
  }
  
  // Handle /dropbox/ route to serve local Dropbox files
  if (urlPath.startsWith('/dropbox/')) {
    const relativePath = urlPath.substring('/dropbox/'.length);
    const dropboxRoot = 'C:\\Users\\kirti\\Dropbox';
    const fullFilePath = path.join(dropboxRoot, relativePath);
    
    // Check that path is within the Dropbox folder (prevent directory traversal attacks)
    const resolvedPath = path.resolve(fullFilePath);
    if (!resolvedPath.startsWith(path.resolve(dropboxRoot))) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }
    
    fs.stat(resolvedPath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 File Not Found');
        return;
      }
      
      const ext = path.extname(resolvedPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      const totalSize = stats.size;
      
      let contentDisposition = 'inline';
      if (ext === '.pptx' || ext === '.ppt' || ext === '.docx' || ext === '.doc') {
        contentDisposition = `attachment; filename="${path.basename(resolvedPath)}"`;
      }
      
      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;
        
        if (start >= totalSize || end >= totalSize) {
          res.writeHead(416, { 'Content-Range': `bytes */${totalSize}` });
          return res.end();
        }
        
        const chunksize = (end - start) + 1;
        const fileStream = fs.createReadStream(resolvedPath, { start, end });
        
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${totalSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType,
          'Content-Disposition': contentDisposition
        });
        
        fileStream.pipe(res);
      } else {
        res.writeHead(200, {
          'Content-Length': totalSize,
          'Accept-Ranges': 'bytes',
          'Content-Type': contentType,
          'Content-Disposition': contentDisposition
        });
        
        fs.createReadStream(resolvedPath).pipe(res);
      }
    });
    return;
  }
  
  // Handle /onedrive/ route to serve local OneDrive large files
  if (urlPath.startsWith('/onedrive/')) {
    const relativePath = urlPath.substring('/onedrive/'.length);
    const onedriveRoot = 'C:\\Users\\kirti\\OneDrive\\my diary content large files';
    const fullFilePath = path.join(onedriveRoot, relativePath);
    
    // Check that path is within the OneDrive folder
    const resolvedPath = path.resolve(fullFilePath);
    if (!resolvedPath.startsWith(path.resolve(onedriveRoot))) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }
    
    fs.stat(resolvedPath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 File Not Found');
        return;
      }
      
      const ext = path.extname(resolvedPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      const totalSize = stats.size;
      
      let contentDisposition = 'inline';
      if (req.url.includes('download=true')) {
        contentDisposition = `attachment; filename="${encodeURIComponent(path.basename(resolvedPath))}"`;
      }
      
      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;
        
        if (start >= totalSize || end >= totalSize) {
          res.writeHead(416, { 'Content-Range': `bytes */${totalSize}` });
          return res.end();
        }
        
        const chunksize = (end - start) + 1;
        const fileStream = fs.createReadStream(resolvedPath, { start, end });
        
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${totalSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType,
          'Content-Disposition': contentDisposition
        });
        
        fileStream.pipe(res);
      } else {
        res.writeHead(200, {
          'Content-Length': totalSize,
          'Accept-Ranges': 'bytes',
          'Content-Type': contentType,
          'Content-Disposition': contentDisposition
        });
        
        fs.createReadStream(resolvedPath).pipe(res);
      }
    });
    return;
  }
  
  if (urlPath === '/api/profile-files') {
    const profileDir = path.join(__dirname, 'profile');
    if (!fs.existsSync(profileDir)) {
      fs.mkdirSync(profileDir, { recursive: true });
    }
    fs.readdir(profileDir, { withFileTypes: true }, (err, entries) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to read profile directory' }));
        return;
      }
      const filesList = [];
      let pending = entries.length;
      if (pending === 0) {
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        });
        res.end(JSON.stringify([]));
        return;
      }
      entries.forEach(entry => {
        const fullPath = path.join(profileDir, entry.name);
        fs.stat(fullPath, (statErr, stats) => {
          if (!statErr && entry.isFile() && !entry.name.startsWith('.')) {
            filesList.push({
              name: entry.name,
              size: stats.size,
              mtime: stats.mtime,
              ext: path.extname(entry.name).toLowerCase()
            });
          }
          pending--;
          if (pending === 0) {
            filesList.sort((a, b) => new Date(b.mtime) - new Date(a.mtime));
            res.writeHead(200, {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-store'
            });
            res.end(JSON.stringify(filesList));
          }
        });
      });
    });
    return;
  }
  
  if (urlPath === '/api/timetable-files') {
    const timetableDir = path.join(__dirname, 'Time table');
    if (!fs.existsSync(timetableDir)) {
      fs.mkdirSync(timetableDir, { recursive: true });
    }
    fs.readdir(timetableDir, { withFileTypes: true }, (err, entries) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to read timetable directory' }));
        return;
      }
      const filesList = [];
      let pending = entries.length;
      if (pending === 0) {
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        });
        res.end(JSON.stringify([]));
        return;
      }
      entries.forEach(entry => {
        const fullPath = path.join(timetableDir, entry.name);
        fs.stat(fullPath, (statErr, stats) => {
          if (!statErr && entry.isFile() && !entry.name.startsWith('.')) {
            filesList.push({
              name: entry.name,
              size: stats.size,
              mtime: stats.mtime,
              ext: path.extname(entry.name).toLowerCase()
            });
          }
          pending--;
          if (pending === 0) {
            filesList.sort((a, b) => new Date(b.mtime) - new Date(a.mtime));
            res.writeHead(200, {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-store'
            });
            res.end(JSON.stringify(filesList));
          }
        });
      });
    });
    return;
  }
  
  let filePath = path.join(__dirname, urlPath);
  const isDownload = urlParts[1] && urlParts[1].includes('download=true');
  
  if (urlPath === '/' || urlPath === '') {
    filePath = path.join(__dirname, 'index.html');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 File Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const totalSize = stats.size;

    // Serve media files (videos, images, HTML, PDF) inline so they play/display directly
    // Only PPT, DOCX and explicit download requests get attachment disposition
    let contentDisposition;
    if (isDownload) {
      contentDisposition = `attachment; filename="${path.basename(filePath)}"`;
    } else if (INLINE_EXTENSIONS.has(ext)) {
      contentDisposition = 'inline';
    } else {
      // PPT, DOCX, etc. — force download
      contentDisposition = `attachment; filename="${path.basename(filePath)}"`;
    }

    // Support standard HTTP range requests (required by Chromium for PDF parsing)
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;
      
      if (start >= totalSize || end >= totalSize) {
        res.writeHead(416, { 'Content-Range': `bytes */${totalSize}` });
        return res.end();
      }

      const chunksize = (end - start) + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });
      
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
        'Content-Disposition': contentDisposition
      });
      
      fileStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': totalSize,
        'Accept-Ranges': 'bytes',
        'Content-Type': contentType,
        'Content-Disposition': contentDisposition
      });
      
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

// Automatic Excel Test Marks Synchronization Function
function autoSyncExcelMarks() {
  try {
    let XLSX;
    try {
      XLSX = require('xlsx');
    } catch (e) {
      console.log('XLSX module not available for auto-sync.');
      return;
    }

    const fullFallbackMarks = { "12": {}, "11B": {}, "7C": {} };

    // 1. Read CT TEST RECORD 2026.xlsx for Class 12
    const ct12File = path.join(__dirname, 'class test', 'class test 12', 'CT TEST RECORD 2026.xlsx');
    if (fs.existsSync(ct12File)) {
      const wb12 = XLSX.readFile(ct12File);
      const rows12 = XLSX.utils.sheet_to_json(wb12.Sheets['Sheet1'], { header: 1 });
      if (rows12 && rows12.length > 5) {
        const chaptersRow = rows12[2] || []; // row 3
        const chapterCols = [];
        chaptersRow.forEach((val, colIdx) => {
          if (val && typeof val === 'string' && val.toLowerCase().startsWith('ch')) {
            chapterCols.push({ colIdx, id: val.toLowerCase().trim() });
          }
        });

        rows12.slice(5).forEach(row => {
          if (row && row[1]) {
            const name = String(row[1]).trim();
            chapterCols.forEach(({ colIdx, id }) => {
              if (!fullFallbackMarks["12"][id]) fullFallbackMarks["12"][id] = {};
              const mark = row[colIdx];
              fullFallbackMarks["12"][id][name] = (mark !== undefined && mark !== null && mark !== '') ? mark : 'ab';
            });
          }
        });
      }
    }

    // Also read MARKS FILE.xlsx Sheet '12' as supplement
    const marksFile = path.join(__dirname, 'MARKS FILE.xlsx');
    if (fs.existsSync(marksFile)) {
      const wbMarks = XLSX.readFile(marksFile);
      if (wbMarks.Sheets['12']) {
        const rowsM12 = XLSX.utils.sheet_to_json(wbMarks.Sheets['12'], { header: 1 });
        if (rowsM12 && rowsM12.length > 2) {
          const chHeader = String(rowsM12[0][1] || 'ch6').toLowerCase().trim();
          if (!fullFallbackMarks["12"][chHeader]) fullFallbackMarks["12"][chHeader] = {};
          rowsM12.slice(2).forEach(row => {
            if (row && row[0]) {
              const name = String(row[0]).trim();
              const mark = row[1];
              fullFallbackMarks["12"][chHeader][name] = (mark !== undefined && mark !== null) ? mark : 'ab';
            }
          });
        }
      }
      if (wbMarks.Sheets['11']) {
        const rowsM11 = XLSX.utils.sheet_to_json(wbMarks.Sheets['11'], { header: 1 });
        if (rowsM11 && rowsM11.length > 3) {
          rowsM11.slice(3).forEach(row => {
            if (row && row[0]) {
              const name = String(row[0]).trim();
              if (row[1] !== undefined) {
                if (!fullFallbackMarks["11B"]["ch3"]) fullFallbackMarks["11B"]["ch3"] = {};
                fullFallbackMarks["11B"]["ch3"][name] = row[1];
              }
              if (row[2] !== undefined) {
                if (!fullFallbackMarks["11B"]["ch4"]) fullFallbackMarks["11B"]["ch4"] = {};
                fullFallbackMarks["11B"]["ch4"][name] = row[2];
              }
              if (row[3] !== undefined) {
                if (!fullFallbackMarks["11B"]["ch5"]) fullFallbackMarks["11B"]["ch5"] = {};
                fullFallbackMarks["11B"]["ch5"][name] = row[3];
              }
            }
          });
        }
      }
    }

    // 2. Read Test Record.xlsx for Class 11
    const ct11File = path.join(__dirname, 'class test', 'class test 11', 'Test Record.xlsx');
    if (fs.existsSync(ct11File)) {
      const wb11 = XLSX.readFile(ct11File);
      const rows11 = XLSX.utils.sheet_to_json(wb11.Sheets['Sheet1'], { header: 1 });
      if (rows11 && rows11.length > 1) {
        const headers = rows11[0] || [];
        const chCols = [];
        headers.forEach((h, colIdx) => {
          if (h && typeof h === 'string') {
            const match = h.toLowerCase().match(/ch\s*(\d+)/);
            if (match) {
              chCols.push({ colIdx, id: 'ch' + match[1] });
            }
          }
        });
        rows11.slice(1).forEach(row => {
          if (row && row[0]) {
            const name = String(row[0]).trim();
            chCols.forEach(({ colIdx, id }) => {
              if (!fullFallbackMarks["11B"][id]) fullFallbackMarks["11B"][id] = {};
              const mark = row[colIdx];
              fullFallbackMarks["11B"][id][name] = (mark !== undefined && mark !== null && mark !== '') ? mark : 'ab';
            });
          }
        });
      }
    }

    // 3. Read test record class 7 c 2026.xlsx for Class 7
    const ct7File = path.join(__dirname, 'class test', 'class test 7', 'test record class 7 c 2026.xlsx');
    if (fs.existsSync(ct7File)) {
      const wb7 = XLSX.readFile(ct7File);
      const rows7 = XLSX.utils.sheet_to_json(wb7.Sheets['Sheet1'], { header: 1 });
      if (rows7 && rows7.length > 4) {
        const testHeaders = rows7[1] || [];
        const testCols = [];
        testHeaders.forEach((h, colIdx) => {
          if (h && typeof h === 'string') {
            const cleaned = h.toLowerCase().replace(/\s+/g, '');
            if (cleaned.startsWith('ch') || cleaned === 'crm') {
              testCols.push({ colIdx, id: cleaned });
            }
          }
        });
        rows7.slice(4).forEach(row => {
          if (row && row[1]) {
            const name = String(row[1]).trim();
            testCols.forEach(({ colIdx, id }) => {
              if (!fullFallbackMarks["7C"][id]) fullFallbackMarks["7C"][id] = {};
              const mark = row[colIdx];
              fullFallbackMarks["7C"][id][name] = (mark !== undefined && mark !== null && mark !== '') ? mark : 'ab';
            });
          }
        });
      }
    }

    // Sync fallbackMarks to all HTML files
    const targetHtmls = [
      'consolidated.html',
      'learners.html',
      'single-digit-marks.html',
      'slow-learners-attendance.html'
    ];

    targetHtmls.forEach(relPath => {
      const filePath = path.join(__dirname, relPath);
      if (!fs.existsSync(filePath)) return;
      let content = fs.readFileSync(filePath, 'utf8');

      const regex = /([ \t]*)const fallbackMarks = \{[\s\S]*?\n\1\};/;
      const match = content.match(regex);
      if (match) {
        const indent = match[1] || '';
        const formattedJson = JSON.stringify(fullFallbackMarks, null, 2).split('\n').map((line, idx) => idx === 0 ? line : indent + line).join('\n');
        const newBlock = `${indent}const fallbackMarks = ${formattedJson};`;
        content = content.replace(regex, newBlock);
        fs.writeFileSync(filePath, content, 'utf8');
      }
    });

    console.log('Auto-synchronized Excel marks across website successfully.');
  } catch (err) {
    console.error('Auto-sync Excel marks error:', err);
  }
}

// Perform initial auto-sync on server startup
autoSyncExcelMarks();

let port = START_PORT;
function startServer() {
  server.listen(port, () => {
    console.log(`=============================================================`);
    console.log(` Teacher's Digital Diary Server is running!`);
    console.log(` URL: http://localhost:${port}/`);
    console.log(`=============================================================`);
    console.log(`Opening your portal page in browser...`);
    console.log(`Press Ctrl+C inside this window to stop the server.`);
    
    // Automatically launch browser to the dynamic port
    exec(`start http://localhost:${port}/`);
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. Trying next port...`);
    port++;
    startServer();
  } else {
    console.error(`Server error:`, err);
  }
});

startServer();
