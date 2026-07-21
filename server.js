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
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.ppt': 'application/vnd.ms-powerpoint',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.doc': 'application/msword',
  '.mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
  // Decode URL to handle spaces and special characters
  const urlParts = req.url.split('?');
  let urlPath = decodeURIComponent(urlParts[0]);
  
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

    let contentDisposition = ext === '.pdf' ? 'inline' : 'attachment';
    if (isDownload) {
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
