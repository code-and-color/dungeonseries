// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, nitro, componentTagger, and error logger plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  vite: {
    base: basePath,
    server: { hmr: { overlay: false } },
    build: {
      rollupOptions: { output: { entryFileNames: "[name].js" } },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
