import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'pathe';

const serverIndex = join(process.cwd(), 'dist/server/index.mjs');
const serverJs = join(process.cwd(), 'dist/server/server.js');

async function main() {
  await mkdir(dirname(serverJs), { recursive: true });
  try {
    await copyFile(serverIndex, serverJs);
    console.log(`Created ${serverJs}`);
  } catch (error) {
    console.error(`Failed to create ${serverJs}:`, error);
    process.exit(1);
  }
}

main();
