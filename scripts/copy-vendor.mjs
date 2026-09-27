/* 把运行时需要以「文件」形式存在、不能打进 bundle 的资源复制到 dist/。
   目前只有 Draco 解码器：DRACOLoader 是异步加载 .js/.wasm 的，必须能按路径取到。 */

import { cp, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const JOBS = [
  // 目录名刻意不叫 dist：Netlify Drop 会把 dist 当成构建产物目录直接忽略，
  // 结果是页面 404 拿不到 bundle，开场遮罩永远不消失（踩过一次）
  { from: 'node_modules/three/examples/jsm/libs/draco', to: 'runtime/draco' },
];

for (const job of JOBS) {
  await mkdir(job.to, { recursive: true });
  const entries = await readdir(job.from, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    await cp(join(job.from, entry.name), join(job.to, entry.name));
  }
  console.log('copied ' + job.from + ' -> ' + job.to + ' (' + entries.length + ' entries)');
}
