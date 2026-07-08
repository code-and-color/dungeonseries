// Generates dist/client/index.html for SPA hosting (GitHub Pages).
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const base = (process.env.BASE_PATH ?? "/").replace(/\/+$/, "") + "/";
const clientDir = ["dist/client", ".output/public"].find((d) => existsSync(d));
if (!clientDir) {
  console.error("Missing client build dir");
  process.exit(1);
}

const assets = readdirSync(join(clientDir, "assets"));
const cssFile = assets.find((f) => f.startsWith("styles") && f.endsWith(".css"));
if (!cssFile) {
  console.error("Could not find styles-*.css");
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dungeon Series Festival — August 9</title>
    <meta name="description" content="Dungeon Series Festival — August 9, 8:00 AM to 8:00 PM." />
    <meta property="og:image" content="${base}og-image.png" />
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
console.log(`Wrote ${clientDir}/index.html`);
