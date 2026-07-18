## Fix image loading + Moments carousel

### 1. Support-artist flyers loading intermittently

Symptom: some support flyer tiles (Bracken, Cosey, Hunt, Koko) render as empty dark squares even though the files exist in `public/events/`. Cause: browsers throttle many simultaneous image requests to the same origin on first paint, and the current `<img>` tags don't hint at priority/decoding.

Fix in `src/routes/index.tsx` (and mirror in `src/routes/events.tsx` where the same lineup grid renders):
- Add `loading="lazy"` and `decoding="async"` to the support-flyer `<img>` tags so the browser can stagger fetches without blocking paint.
- Add `loading="eager"` + `fetchPriority="high"` to the two headliner images so they win first.
- Add `onError` fallback that retries once with a cache-buster to recover from any transient hiccup.

### 2. Moments carousel showing empty

The Moments array only references `maestro.png` and `bracken.png`, so the carousel only ever has two slides. Meanwhile `public/moments/` already contains ~90 real event photos (DSC00788.jpg … DSC01269.jpg, crowd-1.jpg, etc.). Nothing about captions is blocking render — the array is just tiny.

Fix in `src/routes/index.tsx`:
- Rebuild the `MOMENTS` array to include the real photos from `public/moments/`.
- Keep the two named/captioned entries at the front:
  - `maestro.png` → "STEVE MAESTRO"
  - `bracken.png` → "DION BRACKEN"
- Append the rest of the `DSC*.jpg` + `crowd-1.jpg` + `image000001.JPG` with a generic caption ("DUNGEON SERIES · PAST EVENT") so every slide has a caption and the carousel is populated.
- Add a short comment above the array explaining how the client can drop in new files and add/rename captions later.

### 3. Verify

- Reload the home route in the preview.
- Confirm all 10 support flyer tiles render.
- Confirm the Moments carousel scrolls through many slides.

### Out of scope

- No visual/style changes to the lineup or carousel components.
- No changes to the schedule, splash, or other sections.
