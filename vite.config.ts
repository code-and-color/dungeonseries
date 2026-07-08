// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, nitro, componentTagger, and error logger plugins.
import { existsSync, copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "pathe";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = process.env.BASE_PATH ?? "/";
const prerender = process.env.PRERENDER === "1";

// The tanstack-start prerender step spins up a Node preview server, which
// imports `dist/server/<entry>.js` and calls `default.fetch(request)` with no
// env argument. Nitro's Cloudflare adapter expects `env.ASSETS`, so we:
//   1) copy `dist/server/index.mjs` → `dist/server/server.js` (entry name)
//   2) wrap the default export to inject a fallback env when missing.
function copyServerEntryPlugin() {
  return {
    name: "copy-nitro-server-entry",
    closeBundle() {
      const src = join(process.cwd(), "dist/server/index.mjs");
      const dest = join(process.cwd(), "dist/server/server.js");
      if (!existsSync(src) || existsSync(dest)) return;
      let code = readFileSync(src, "utf8");
      // Nitro emits `export { cloudflareModule as default, ... }`. Rewrite the
      // default export so `fetch(req)` (no env) gets a stub ASSETS binding.
      code = code.replace(
        /export\s*{([^}]*)}\s*;?\s*$/,
        (match, inner) => {
          const parts = inner.split(",").map((p: string) => p.trim()).filter(Boolean);
          const kept: string[] = [];
          let originalDefault: string | null = null;
          for (const part of parts) {
            const m = part.match(/^(\S+)\s+as\s+default$/);
            if (m) {
              originalDefault = m[1];
            } else {
              kept.push(part);
            }
          }
          if (!originalDefault) return match;
          const suffix = `\nconst __fallbackEnv = { ASSETS: { fetch: async () => new Response(null, { status: 404 }) } };\nconst __wrappedDefault = { fetch: (req, env, ctx) => ${originalDefault}.fetch(req, env ?? __fallbackEnv, ctx ?? { waitUntil() {}, passThroughOnException() {} }) };\nexport { __wrappedDefault as default${kept.length ? ", " + kept.join(", ") : ""} };\n`;
          return suffix;
        }
      );
      writeFileSync(dest, code);
      console.log("[copy-nitro-server-entry] wrote dist/server/server.js with env fallback");
    },
  };
}

export default defineConfig({
  plugins: [copyServerEntryPlugin()],
  vite: {
    base: basePath,
    server: { hmr: { overlay: false } },
    build: {
      rollupOptions: { output: { entryFileNames: "[name].js" } },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    ...(prerender
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
          },
          pages: [
            { path: "/" },
            { path: "/events" },
            { path: "/vendors" },
            { path: "/contact" },
          ],
        }
      : {}),
  },
});
