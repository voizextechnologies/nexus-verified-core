// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Prerender static HTML so the site can be hosted on Netlify / any static host.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
