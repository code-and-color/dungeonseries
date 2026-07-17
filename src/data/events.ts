// ─────────────────────────────────────────────────────────────────────────────
// DUNGEON SERIES — EVENTS DATA
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW TO ADD A NEW EVENT  (non-technical guide):
//
//   1. Copy one of the blocks below (between the { and }, including the comma).
//   2. Paste it inside the `events` array.
//   3. Change the fields. `id` must be unique. Date is YYYY-MM-DD.
//   4. Save the file. The /calendar page updates automatically.
//
// HOW TO ADD FLYER IMAGES:
//
//   1. Drop your image file into the folder:  public/events/
//      (e.g.  public/events/festival-phase-1.jpg)
//   2. In the `flyers` array below, use just the filename:
//          { src: "festival-phase-1.jpg", alt: "...", label: "PHASE I" }
//   3. You can also paste a full URL (https://...) instead of a filename.
//
// MAIN / FEATURED EVENT:
//   Set `featured: true` to highlight an event at the top of the calendar
//   page with its big flyer gallery. (Usually just the festival.)
//
// VENDOR PACKET (festival only):
//   Drop the PDF at  public/vendors/vendor-packet.pdf  and the festival card
//   will show a "Download Vendor Packet" button automatically.
//
// ─────────────────────────────────────────────────────────────────────────────

export type Flyer = {
  /** Filename in /public/events/  OR a full https:// URL */
  src: string;
  alt: string;
  label: string;
};

export type CalendarEvent = {
  id: string;
  /** ISO date, used for sorting. Format: YYYY-MM-DD */
  date: string;
  /** Human-readable date shown on the page */
  dateLabel: string;
  timeLabel: string;
  title: string;
  venue: string;
  blurb: string;
  /** TicketFalcon URL for this event */
  ticketUrl: string;
  /** Set true for the main event (festival) */
  featured?: boolean;
  flyers?: Flyer[];
};

// TODO: replace with the real TicketFalcon organizer link.
const TF = "https://www.ticketfalcon.com/dungeon-series";

export const events: CalendarEvent[] = [
  {
    id: "festival-2026",
    date: "2026-08-09",
    dateLabel: "AUGUST 9, 2026",
    timeLabel: "8:00 AM — 8:00 PM",
    title: "DUNGEON SERIES FESTIVAL",
    venue: "1039 E 43rd Street, Chicago, IL",
    blurb:
      "The marquee event presented by Ty Harvey. ",
    ticketUrl: `${TF}/festival-2026`,
    featured: true,
    flyers: [
      // Headliners first, then support. Files live in public/events/.
      {
        src: "Dungeon Series Festival - CTRLZORA.png",
        alt: "Zora Murphy — Dungeon Series Festival performer",
        label: "ZORA MURPHY",
      },
      {
        src: "Dungeon Series Festival - Powell.png",
        alt: "Dwayne Powell — Dungeon Series Festival performer",
        label: "DWAYNE POWELL",
      },
      {
        src: "Dungeon Series Festival - Bracken.png",
        alt: "Bracken — Dungeon Series Festival performer",
        label: "BRACKEN",
      },
      {
        src: "Dungeon Series Festival - Breathlezz.png",
        alt: "Breathlezz — Dungeon Series Festival performer",
        label: "BREATHLEZZ",
      },
      {
        src: "Dungeon Series Festival - Cosey.png",
        alt: "Cosey — Dungeon Series Festival performer",
        label: "COSEY",
      },
      {
        src: "Dungeon Series Festival - Hardison.png",
        alt: "Hardison — Dungeon Series Festival performer",
        label: "HARDISON",
      },
      {
        src: "Dungeon Series Festival - Hunt (1).png",
        alt: "Hunt — Dungeon Series Festival performer",
        label: "HUNT",
      },
      {
        src: "Dungeon Series Festival - Jamie 326.png",
        alt: "Jamie 326 — Dungeon Series Festival performer",
        label: "JAMIE 326",
      },
      {
        src: "Dungeon Series Festival - Koko (1).png",
        alt: "Koko — Dungeon Series Festival performer",
        label: "KOKO",
      },
      {
        src: "Dungeon Series Festival - Maestro.png",
        alt: "Maestro — Dungeon Series Festival performer",
        label: "MAESTRO",
      },
      {
        src: "Dungeon Series Festival - Maxwell.png",
        alt: "Maxwell — Dungeon Series Festival performer",
        label: "MAXWELL",
      },
    ],
  },
  {
    id: "bass-harvest-dec",
    date: "2026-12-04",
    dateLabel: "DEC 04, 2026",
    timeLabel: "21:00 — LATE",
    title: "BASS HARVEST",
    venue: "The Lower Chambers · Chicago",
    blurb: "Deep frequency exploration in the lower chambers. Weekly ritual edition.",
    ticketUrl: `${TF}/bass-harvest-2026-12-04`,
  },
  {
    id: "red-shift-dec",
    date: "2026-12-11",
    dateLabel: "DEC 11, 2026",
    timeLabel: "22:00 — 04:00",
    title: "THE RED SHIFT",
    venue: "The Catacombs · Chicago",
    blurb: "High-tempo techno and kinetic visuals. Pulse monitoring at the door.",
    ticketUrl: `${TF}/red-shift-2026-12-11`,
  },
];

/**
 * Resolves a flyer `src` (filename or full URL) into a usable image URL.
 * - "https://..."          -> used as-is
 * - "festival-phase-1.jpg" -> /events/festival-phase-1.jpg (under BASE_URL)
 */
export function resolveImage(src: string): string {
  if (/^https?:\/\//i.test(src)) return src;
  const base = import.meta.env.BASE_URL ?? "/";
  // encode spaces, parens, etc. so browsers can fetch the file
  const encoded = encodeURIComponent(src);
  return `${base}events/${encoded}`.replace(/([^:])\/{2,}/g, "$1/");
}

/** Public URL of the festival vendor packet PDF (drop it at this path). */
export const VENDOR_PACKET_URL = `${import.meta.env.BASE_URL ?? "/"}vendors/vendor-packet.pdf`.replace(
  /([^:])\/{2,}/g,
  "$1/",
);
