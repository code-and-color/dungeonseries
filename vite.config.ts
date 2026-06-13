// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When deploying to GitHub Pages under a project page (username.github.io/dungeonseries/),
// set BASE_PATH=/dungeonseries/ at build time. Lovable preview leaves it unset → "/".
const basePath = process.env.BASE_PATH ?? "/";

// Static export for GitHub Pages: prerender every page to plain HTML.
const STATIC_EXPORT = process.env.STATIC_EXPORT === "true";

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    server: { entry: "server" },
    ...(STATIC_EXPORT && {
      prerender: {
        enabled: true,
        crawlLinks: true,
        routes: ["/", "/events", "/pricing", "/contact"],
      },
      pages: [
        { path: "/" },
        { path: "/events" },
        { path: "/pricing" },
        { path: "/contact" },
      ],
    }),
  },
});
