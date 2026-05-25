## Plan

### 1. Add the Voizex backlink safely
- Add a real footer backlink to `https://voizex.com` from the Stromont website.
- Use natural wording like “Technology partner: Voizex Technologies” instead of spammy SEO text.
- Open it in a new tab with safe `rel` attributes.

### 2. Add SEO fundamentals for the current website
- Add route-level SEO metadata on the home route: title, description, `og:title`, `og:description`, `og:url`, canonical URL, and Organization JSON-LD.
- Add `public/robots.txt` allowing crawlers.
- Add `public/sitemap.xml` with the public site URL.
- Keep metadata aligned with Stromont Consulting while including Voizex as the build/technology partner backlink.

### 3. Fix Netlify manual hosting path
- Keep `public/_redirects` for Netlify fallback routing.
- Keep/add `netlify.toml` so Netlify uses:
  - Build command: `bun run build`
  - Publish directory: `dist/client`
- Fix the current static prerender configuration so the build generates `dist/client/index.html`.
- Verify locally that `bun run build` succeeds and that `dist/client/index.html` exists.

### 4. Final Netlify instructions after code changes
After approval and implementation, use these Netlify settings:

```text
Build command: bun run build
Publish directory: dist/client
Base directory: leave blank
Functions directory: leave blank
Branch: main
```

Then push/sync to GitHub and click **Retry deploy** or let Netlify auto-redeploy.