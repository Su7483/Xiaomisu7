/* 零依赖静态服务器。
   为什么需要它：Chrome 禁止 file:// 页面 fetch 本地文件，所以官方车模
   （assets/su7.glb）只能在 http 下加载。双击 start.cmd 即可。
   纯 ES 模块运行时不需要这个服务器，直接用极简页/index.html 就行。 */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { spawn } from 'node:child_process';

const ROOT = resolve(process.cwd());
const PORT = Number(process.env.PORT || 5173);
const ENTRY = '/experience.html';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.wasm': 'application/wasm',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.bin': 'application/octet-stream',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://localhost:${PORT}`);
  const requested = decodeURIComponent(url.pathname);
  const target = requested === '/' ? ENTRY : requested;

  // 目录穿越防护：解析后必须仍在项目根目录内
  const full = join(ROOT, normalize(target).replace(/^([/\\])+/, ''));
  if (!full.startsWith(ROOT + sep) && full !== ROOT) {
    response.writeHead(403).end('forbidden');
    return;
  }

  try {
    const info = await stat(full);
    if (!info.isFile()) throw new Error('not a file');
    const body = await readFile(full);
    response.writeHead(200, {
      'Content-Type': MIME[extname(full).toLowerCase()] || 'application/octet-stream',
      'Content-Length': body.length,
      'Cache-Control': 'no-cache',
    });
    response.end(body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('404 ' + target);
  }
});

server.listen(PORT, () => {
  const page = `http://localhost:${PORT}${ENTRY}`;
  console.log('');
  console.log('  小米 SU7 三维体验页已启动');
  console.log('  ' + page);
  console.log('');
  console.log('  极简一屏版：http://localhost:' + PORT + '/index.html');
  console.log('  按 Ctrl+C 停止');
  console.log('');
  if (process.argv.includes('--open')) {
    spawn('cmd', ['/c', 'start', '', page], { detached: true, stdio: 'ignore' }).unref();
  }
});
