## Plan

Add a simple time/artist schedule for the August 9 festival to both pages. Keep the data centralized so the client can update it later without touching components.

### Changes

1. **Centralize schedule data in `src/data/events.ts`**
   - Add a `SCHEDULE` array with `{ time, artist }` entries:
     - 10:00 AM – 11:00 AM → Stephen Cosey
     - 11:00 AM – 12:00 PM → CntrlZora
     - 12:00 PM – 1:00 PM → Maestro
     - 1:00 PM – 2:00 PM → Steve Maxwell
     - 2:00 PM – 3:00 PM → Bracken
     - 3:00 PM – 4:00 PM → Gene Hunt
     - 4:00 PM – 5:00 PM → Duane Powell
     - 5:00 PM – 6:30 PM → Osunlade
     - 6:30 PM – 8:00 PM → Jaime 3:26
   - Export it so both pages can import it.

2. **Create a reusable `ScheduleTable` component**
   - New file: `src/components/site/ScheduleTable.tsx`
   - Props: `items`, optional `compact` boolean, optional `highlightHeadliners` array.
   - Compact mode hides the section header and uses tighter padding.
   - Full mode shows the full-width table with the existing glass-panel styling.

3. **Add compact schedule to `src/routes/index.tsx`**
   - Place it after the lineup section and before the flyer/video gallery.
   - Heading: "SET TIMES" / "FESTIVAL SCHEDULE"
   - Show all times/artists in a condensed table.

4. **Add full schedule to `src/routes/events.tsx`**
   - Place it after the festival hero details and before the flyer gallery.
   - Heading: "FESTIVAL SCHEDULE" / "AUGUST 9 SET TIMES"
   - Use the full-width table.

### Visual approach

- Use the existing glass-panel + label-caps styling.
- Time column in `text-primary-container`, artist in `text-on-background`.
- No artist links for now (matches "simple time/artist table" request).

### Out of scope

- No TicketFalcon links per set time.
- No schedule editing UI — the client will edit `src/data/events.ts` directly.