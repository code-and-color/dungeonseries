import { access, copyFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, join } from 'pathe';

const serverDir = join(process.cwd(), 'dist/server');
const nitroServerDir = join(process.cwd(), 'dist/nitro/server');
const outputServerDir = join(process.cwd(), '.output/server');
const serverJs = join(serverDir, 'server.js');
const candidateFiles = [
  join(nitroServerDir, 'server.js'),
  join(nitroServerDir, 'index.mjs'),
  join(nitroServerDir, 'index.js'),
  join(outputServerDir, 'index.mjs'),
  join(outputServerDir, 'server.js'),
  join(serverDir, 'server.js'),
  join(serverDir, 'index.mjs'),
  join(serverDir, 'index.js'),
  join(serverDir, 'cloudflare-module.js'),
  join(serverDir, 'dist/server.js'),
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function findServerEntry() {
  for (const path of candidateFiles) {
    if (path === serverJs) continue;
    if (await exists(path)) {
      return path;
    }
  }

  const entries = await readdir(serverDir, { withFileTypes: true });
  const jsFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.js') && !entry.name.startsWith('_'))
    .map((entry) => join(serverDir, entry.name));

  if (jsFiles.length === 1) {
    return jsFiles[0];
  }

  return undefined;
}

async function main() {
  await mkdir(dirname(serverJs), { recursive: true });

  if (await exists(serverJs)) {
    console.log(`Server entry already exists at ${serverJs}`);
    return;
  }

  const source = await findServerEntry();
  if (!source) {
    console.error(`No server entry file found in ${serverDir}`);
    process.exit(1);
  }

  try {
    await copyFile(source, serverJs);
    console.log(`Created ${serverJs} from ${source}`);
  } catch (error) {
    console.error(`Failed to create ${serverJs} from ${source}:`, error);
    process.exit(1);
  }
}

main();
