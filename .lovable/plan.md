# Bigger, cleaner spotlight on the home page

## 1. Remove the AI watermark from the spotlight media
The current `public/media/logo-spotlight.{webp,gif,mp4}` were generated from a source video that has AI-tool text baked into a corner. I'll regenerate clean, circular-safe versions:

- Use `imagegen--edit_image` on a representative frame to produce a clean, watermark-free circular spotlight still (crimson glow, logo-forward), then use that same clean art to re-render the animated versions by re-processing the existing video/gif with a crop + mask that trims the watermarked region before rebuilding `logo-spotlight.webp` and `logo-spotlight.gif`.
- The `.mp4` will also be re-encoded from the cropped source so nothing anywhere in the site shows the AI text.
- Files replaced in-place at `public/media/logo-spotlight.webp`, `.gif`, `.mp4` so no code paths change.

If the crop can't fully cover the watermark without losing the logo, I'll fall back to regenerating the spotlight as a pure looping animation from the clean still + a subtle scan/glow effect.

## 2. Enlarge the home-page spotlight
In `src/routes/index.tsx` hero (around line 295), the emblem is `w-40 md:w-52` (~160/208px). Splash uses roughly the same size. I'll bump the home hero to `w-64 md:w-96` (~256/384px) and scale the ambient glow ring / blur proportionally so it still feels balanced above the headline. Splash page stays as-is.

## Technical notes
- Only `src/routes/index.tsx` and the three files under `public/media/logo-spotlight.*` change.
- No component API or route changes; existing `<picture>` markup is preserved.
