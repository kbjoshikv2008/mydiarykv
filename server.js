const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // Decode URL to handle spaces and special characters
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(__dirname, urlPath);
  
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

    // Set headers to allow content rendering or attachment downloads
    const headers = { 'Content-Type': contentType };
    if (ext === '.pdf') {
      headers['Content-Disposition'] = 'inline';
    }

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Teacher's Digital Diary Server is running!`);
  console.log(`Open your browser and navigate to: http://localhost:${PORT}/`);
  console.log(`Press Ctrl+C inside this window to stop the server.`);
});
