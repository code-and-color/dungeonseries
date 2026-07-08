// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, nitro, componentTagger, and error logger plugins.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "pathe";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = process.env.BASE_PATH ?? "/";

// Nitro emits `dist/server/index.mjs`; the tanstack preview server (used by
// prerender) expects `dist/server/server.js`. Copy + wrap the default export
// so `fetch(req)` works when called without a Cloudflare env binding.
function copyServerEntryPlugin() {
  return {
    name: "copy-nitro-server-entry",
    closeBundle() {
      const src = join(process.cwd(), "dist/server/index.mjs");
      const dest = join(process.cwd(), "dist/server/server.js");
      if (!existsSync(src) || existsSync(dest)) return;
      let code = readFileSync(src, "utf8");
      code = code.replace(
        /export\s*{([^}]*)}\s*;?\s*$/,
        (match: string, inner: string) => {
          const parts = inner.split(",").map((p: string) => p.trim()).filter(Boolean);
          const kept: string[] = [];
          let originalDefault: string | null = null;
          for (const part of parts) {
            const m = part.match(/^(\S+)\s+as\s+default$/);
            if (m) originalDefault = m[1];
            else kept.push(part);
          }
          if (!originalDefault) return match;
          return `\nconst __fallbackEnv = { ASSETS: { fetch: async () => new Response(null, { status: 404 }) } };\nconst __wrappedDefault = { fetch: (req, env, ctx) => ${originalDefault}.fetch(req, env ?? __fallbackEnv, ctx ?? { waitUntil() {}, passThroughOnException() {} }) };\nexport { __wrappedDefault as default${kept.length ? ", " + kept.join(", ") : ""} };\n`;
        }
      );
      writeFileSync(dest, code);
      console.log("[copy-nitro-server-entry] wrote dist/server/server.js");
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
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: { outputPath: "/index.html", crawlLinks: false },
    },
  },
});
