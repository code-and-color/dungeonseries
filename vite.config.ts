// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, nitro, componentTagger, and error logger plugins.
import { existsSync, copyFileSync } from "node:fs";
import { join } from "pathe";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = process.env.BASE_PATH ?? "/";
const prerender = process.env.PRERENDER === "1";

// The tanstack-start prerender step spins up the preview server, which imports
// `dist/server/<entry>.js`. Nitro actually emits `dist/server/index.mjs`, so we
// copy it in a `closeBundle` hook before prerender runs.
function copyServerEntryPlugin() {
  return {
    name: "copy-nitro-server-entry",
    closeBundle() {
      const src = join(process.cwd(), "dist/server/index.mjs");
      const dest = join(process.cwd(), "dist/server/server.js");
      if (existsSync(src) && !existsSync(dest)) {
        copyFileSync(src, dest);
        console.log("[copy-nitro-server-entry] dist/server/index.mjs → server.js");
      }
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
