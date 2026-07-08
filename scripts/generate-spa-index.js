// Generates dist/client/index.html for SPA hosting (GitHub Pages).
// Runs after `vite build`, picks up the hashed CSS asset, and points the
// client entry (dist/client/index.js) as a module script. Uses BASE_PATH
// so asset URLs are correct under project pages (e.g. /dungeonseries/).
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const base = (process.env.BASE_PATH ?? "/").replace(/\/+$/, "") + "/";
const candidates = ["dist/client", ".output/public"];
const clientDir = candidates.find((d) => existsSync(d));
if (!clientDir) {
  console.error(`Missing client build dir. Tried: ${candidates.join(", ")}`);
  process.exit(1);
}


const assets = readdirSync(join(clientDir, "assets"));
const cssFile = assets.find((f) => f.startsWith("styles") && f.endsWith(".css"));
if (!cssFile) {
  console.error("Could not find styles-*.css in dist/client/assets");
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dungeon Series Festival — August 9</title>
    <meta name="description" content="Dungeon Series Festival — August 9, 8:00 AM to 8:00 PM." />
    <meta property="og:title" content="Dungeon Series Festival — August 9" />
    <meta property="og:description" content="Dungeon Series Festival — August 9, 8:00 AM to 8:00 PM." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${base}og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="${base}favicon.png" />
    <link rel="stylesheet" href="${base}assets/${cssFile}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="${base}index.js"></script>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log(`Wrote ${clientDir}/index.html (base=${base}, css=${cssFile})`);
