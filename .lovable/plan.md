## Changes

1. **New Jamie 3:26 headliner photo**
   - Convert the uploaded photo to black & white and save as `public/events/Jamie326_BW.png`.
   - Update `HEADLINERS` in `src/routes/index.tsx` to point to the new file (replaces `Jamie326_Elevator.png`).

2. **Remove the "HEADLINER" label**
   - Delete the small `HEADLINER` badge rendered under each headliner card in `src/routes/index.tsx` (line ~403) and `src/routes/events.tsx` (line ~165). The artists themselves stay; only the word is removed.

3. **Remove flyers** from `src/data/events.ts`
   - Delete the `KOKO` and `HARDISON` entries from the `flyers` array on the festival event.

4. **Footer cleanup** (`src/components/site/Footer.tsx`)
   - Remove the `TWITTER`, `YOUTUBE`, and `TERMS` links.
   - Remove the `ROOM 43` label and the email-address input/subscribe block entirely.
   - Keep only the logo/copyright line and the `INSTAGRAM` link.

5. **Address update — global**
   - Replace every instance of `1039 E 43rd Street` / `1039 E 43RD ST` with **`4301 S Drexel Blvd, Chicago, IL 60653`**.
   - Files: `src/data/events.ts` (venue), `src/components/site/Footer.tsx` (copyright line), plus any other occurrences a quick `rg` sweep finds (contact page, SEO meta, JSON-LD, etc.).

6. **FAQ update** (`src/routes/index.tsx`, ~line 172)
   - Change the "Can I bring outside food or drinks?" answer to:
     > "Outside food: yes. No grills, no glass bottles. You can bring tents."

## Out of scope
- No layout, color, or typography changes.
- Headliner ordering, other flyers, and other FAQ items stay as-is.
