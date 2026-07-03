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
    venue: "Chicago, IL",
    blurb:
      "The flagship. One day, one city, one descent. Lineup unveiled in waves — each flyer marks a new chamber.",
    ticketUrl: `${TF}/festival-2026`,
    featured: true,
    flyers: [
      // Drop files into public/events/ and reference by filename:
      //   { src: "festival-phase-1.jpg", alt: "Phase I lineup", label: "PHASE I · HEADLINERS" },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDj5Nig7Mr03MBoj7hcrtXUYyrseZkf3kz6zr2ZrKB9n7UpjMqAzkV8UslLXGT5oJr9q__cXtjNlRF_S0YTzejGC1DWzji5UbhuVQjfnh76U6NN20YLPHyrjwAdvx6lOjQVXCKECsekRj6Xv2c3buzqqIfjE9cfwUxF5ODrwrMOQgiWLR1QGg-HVKB-1j7ivRSWeo04tYwCwEchheiiUSSItRLbx8_59VohHI1I_DQxreXr_haBNndHk1PJnGUuwVP9RVxri7yIp3T",
        alt: "Dungeon Series Festival — Phase I flyer",
        label: "PHASE I · HEADLINERS",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDq497O9De1qH7b9_PIxu5puyyrZayFXGrYhEB0foE90jYbir_a5uyvZZOjil9oLqcrWPdMPHpPZ4azf9sQCpgL56XjlGeyUYotJfa8MqU1JNt32d4eLIQxNz65aDE7ByAyi2xi6rmzd4PpfhgsR0QVVuQqajLeoxWFv-oeBnXuY_k29EjC0yobsWG8vmLR3XgOVGilLLZiJJv1W_iokfshAk0orYE_c8x-CT2rMSxqzeMD3-ntK6nm8bbZ7rz3d3znlIPBRh7i4ad",
        alt: "Dungeon Series Festival — Phase II flyer",
        label: "PHASE II · SUPPORT",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy6skl3fY8aRgKukVJChz0EykYHfdwZrWGZ8UjDfLdtV_EAAIthHg8JSGeOujdx7uJpRVLZhUwuB0ELQZIQoVQTNlsLT-krZ7Kmjlk9x-ZMXwXMJq9IFFPCBaRe5lxNHn_IDp3wgm1OHh_sfu4DTZWd7YJBB75Mw8_avsek1khaGZjAwXsPHSpBxhCGGgxaNVQmB9uNKjZJ64_vMgJxzCDn6PWwNRDFnVgcce90uEbaqdKx8yvJcpamPLdjiJqhKLxofCd1CkQER07",
        alt: "Dungeon Series Festival — Phase III flyer",
        label: "PHASE III · AFTERMATH",
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
  return `${base}events/${src}`.replace(/([^:])\/{2,}/g, "$1/");
}

/** Public URL of the festival vendor packet PDF (drop it at this path). */
export const VENDOR_PACKET_URL = `${import.meta.env.BASE_URL ?? "/"}vendors/vendor-packet.pdf`.replace(
  /([^:])\/{2,}/g,
  "$1/",
);
