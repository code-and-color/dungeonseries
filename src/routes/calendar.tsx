import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

const TITLE = "Calendar & Tickets · Dungeon Series Chicago";
const DESC =
  "Upcoming Dungeon Series events in Chicago. Book tickets through TicketFalcon for the Dungeon Series Festival and recurring rituals.";

// TODO: replace with the real TicketFalcon organizer link when ready.
const TICKET_FALCON_BASE = "https://www.ticketfalcon.com/dungeon-series";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/calendar" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/calendar" }],
  }),
  component: CalendarPage,
});

type CalendarEvent = {
  id: string;
  date: string; // ISO date
  dateLabel: string;
  timeLabel: string;
  title: string;
  venue: string;
  blurb: string;
  ticketUrl: string;
  featured?: boolean;
  flyers?: { src: string; alt: string; label: string }[];
};

const events: CalendarEvent[] = [
  {
    id: "festival-2026",
    date: "2026-10-31",
    dateLabel: "OCT 31 — NOV 02, 2026",
    timeLabel: "48 HOURS · DOORS 21:00",
    title: "DUNGEON SERIES FESTIVAL",
    venue: "Undisclosed · West Loop, Chicago",
    blurb:
      "The flagship. Three floors, forty-eight hours, one descent. Lineup unveiled in waves — each flyer marks a new chamber.",
    ticketUrl: `${TICKET_FALCON_BASE}/festival-2026`,
    featured: true,
    flyers: [
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
    ticketUrl: `${TICKET_FALCON_BASE}/bass-harvest-2026-12-04`,
  },
  {
    id: "red-shift-dec",
    date: "2026-12-11",
    dateLabel: "DEC 11, 2026",
    timeLabel: "22:00 — 04:00",
    title: "THE RED SHIFT",
    venue: "The Catacombs · Chicago",
    blurb: "High-tempo techno and kinetic visuals. Pulse monitoring at the door.",
    ticketUrl: `${TICKET_FALCON_BASE}/red-shift-2026-12-11`,
  },
];

function CalendarPage() {
  const featured = events.find((e) => e.featured);
  const rest = events.filter((e) => !e.featured);

  return (
    <SiteLayout>
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop pt-12 pb-stack-lg">
        <section className="mb-stack-lg">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.2em]">
            CALENDAR · TICKETS
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-background uppercase mt-3">
            BOOK YOUR
            <br />
            <span className="text-primary-container">DESCENT</span>
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mt-4">
            All Dungeon Series tickets are issued through TicketFalcon. Select an event below to
            secure your entry.
          </p>
        </section>

        {featured && (
          <section className="mb-stack-lg">
            <div className="border-b border-white/10 pb-4 mb-stack-md flex items-center justify-between">
              <h2 className="font-label-caps text-label-caps text-primary tracking-[0.2em]">
                MAIN EVENT
              </h2>
              <span className="font-label-caps text-[10px] text-secondary opacity-50">
                MULTI-PHASE LINEUP
              </span>
            </div>

            <div className="glass-card p-stack-md md:p-stack-lg flex flex-col gap-stack-md">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="font-label-caps text-[10px] text-primary">
                    {featured.dateLabel} · {featured.timeLabel}
                  </span>
                  <h3 className="font-headline-xl text-headline-lg font-extrabold uppercase leading-none tracking-tight mt-2">
                    {featured.title}
                  </h3>
                  <p className="font-body-md text-sm text-secondary mt-2">{featured.venue}</p>
                </div>
                <a
                  href={featured.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit bg-primary-container text-white px-8 py-3 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95"
                >
                  BUY TICKETS · TICKETFALCON
                </a>
              </div>

              <p className="font-body-md text-secondary max-w-2xl">{featured.blurb}</p>

              {featured.flyers && (
                <div>
                  <span className="font-label-caps text-[10px] text-secondary opacity-60">
                    FLYERS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md mt-3">
                    {featured.flyers.map((f) => (
                      <a
                        key={f.label}
                        href={featured.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block aspect-[3/4] overflow-hidden border border-white/10 hover:border-primary-container transition-colors"
                      >
                        <img
                          src={f.src}
                          alt={f.alt}
                          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        <span className="absolute bottom-3 left-3 font-label-caps text-[10px] text-on-background">
                          {f.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        <section>
          <div className="border-b border-white/10 pb-4 mb-stack-md">
            <h2 className="font-label-caps text-label-caps text-primary tracking-[0.2em]">
              UPCOMING DATES
            </h2>
          </div>

          <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {rest.map((e) => (
              <li
                key={e.id}
                className="grid grid-cols-12 gap-4 items-center py-6 group hover:bg-white/[0.02] transition-colors px-2"
              >
                <div className="col-span-12 md:col-span-3">
                  <span className="font-label-caps text-[10px] text-primary block">
                    {e.dateLabel}
                  </span>
                  <span className="font-label-caps text-[10px] text-secondary opacity-60">
                    {e.timeLabel}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h3 className="font-headline-md text-2xl font-bold uppercase group-hover:text-primary-container transition-colors">
                    {e.title}
                  </h3>
                  <p className="font-body-md text-sm text-secondary">{e.venue}</p>
                  <p className="font-body-md text-sm text-secondary opacity-80 mt-1">
                    {e.blurb}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <a
                    href={e.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-primary text-primary px-6 py-3 font-label-caps text-label-caps hover:bg-primary-container hover:text-white hover:border-primary-container transition-colors"
                  >
                    BUY TICKETS
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <p className="font-label-caps text-[10px] text-secondary opacity-60 mt-stack-md">
            TICKETS POWERED BY TICKETFALCON. ALL SALES FINAL.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}
