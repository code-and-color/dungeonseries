# Swap the home hero logo for the spotlight emblem

The spotlight will look better — it's already circular, animated, and glow-blended into the dark background, so it naturally solves the "cutout" problem instead of just softening it.

## Change

**`src/routes/index.tsx`** — hero section (~line 295):

Replace the flat `<img src="og-image.png" ...>` with the same spotlight emblem used on the splash page:

- Circular container (`rounded-full`, `overflow-hidden`) sized ~w-40 md:w-52
- Inside: `<picture>` with `logo-spotlight.webp` source + `logo-spotlight.gif` fallback, `object-cover`
- Ambient crimson radial glow behind it + thin crimson ring
- Same spacing above the "DUNGEON SERIES LIVE OUTSIDE" headline

No other pages or assets change. Splash page stays as-is.
