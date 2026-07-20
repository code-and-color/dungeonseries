# Replace the spotlight with the new uploaded video

## What changes
Replace the current spotlight assets used on both the splash overlay and the home hero emblem with the newly uploaded `Untitled_design.mp4`.

## Steps
1. Copy `user-uploads://Untitled_design.mp4` into `public/media/logo-spotlight.mp4` (overwrite).
2. Regenerate the animated fallbacks from the new video using ffmpeg so all three references stay in sync:
   - `public/media/logo-spotlight.webp` (animated WebP loop)
   - `public/media/logo-spotlight.gif` (GIF fallback)
3. Keep the existing circular frame, padding, glow, and sizing in `src/routes/index.tsx` — no layout/CSS changes.
4. Verify by loading the splash and home hero in the preview to confirm the new video plays inside the emblem with no watermark and no clipping.

## Notes
- No component or route code changes; only the three files under `public/media/logo-spotlight.*` are replaced.
- If the new video has an aspect ratio that clips oddly inside the circle, I'll center-crop to a square during the ffmpeg pass so the logo stays framed.
