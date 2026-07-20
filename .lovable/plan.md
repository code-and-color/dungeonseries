# Replace spotlight and remove white background around the circle

## Steps
1. Overwrite `public/media/logo-spotlight.mp4` with `user-uploads://Untitled_design-2.mp4`.
2. Run ffmpeg with `colorkey=white` (tuned similarity/blend) to drop the white square around the circular logo:
   - `public/media/logo-spotlight.webp` — animated, transparent background
   - `public/media/logo-spotlight.gif` — transparent fallback
   - Re-encode `.mp4` composited over the site's near-black background (mp4 has no alpha) so the circle blends seamlessly inside the emblem.
3. Center-crop to a square that hugs the circle so there's no extra empty padding inside the CSS mask.
4. No component/CSS changes — existing markup in `src/routes/index.tsx` (home hero + splash) is left as-is.

## Notes
- If white edges fringe after keying, I'll bump `blend` and add a light despill pass.
