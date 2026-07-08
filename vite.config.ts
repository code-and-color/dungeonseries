import { promises as fs } from "node:fs";
import { join } from "pathe";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = process.env.BASE_PATH ?? "/";
const prerender = process.env.PRERENDER === "1";

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
    ...(prerender
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            routes: ["/", "/events", "/vendors", "/contact"],
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
