import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

const EVENTS_TITLE = "Events · Dungeon Series Chicago";
const EVENTS_DESC =
  "The operational calendar for Dungeon Series — weekly rituals, annual anthems, and one-night summits across Chicago.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: EVENTS_TITLE },
      { name: "description", content: EVENTS_DESC },
      { property: "og:title", content: EVENTS_TITLE },
      { property: "og:description", content: EVENTS_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/events" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:alt", content: "Dungeon Series emblem" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: EVENTS_TITLE },
      { name: "twitter:description", content: EVENTS_DESC },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const rituals = [
  {
    when: "EVERY TUESDAY",
    title: "BASS HARVEST",
    desc: "Deep frequency exploration in the lower chambers. Membership required.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy6skl3fY8aRgKukVJChz0EykYHfdwZrWGZ8UjDfLdtV_EAAIthHg8JSGeOujdx7uJpRVLZhUwuB0ELQZIQoVQTNlsLT-krZ7Kmjlk9x-ZMXwXMJq9IFFPCBaRe5lxNHn_IDp3wgm1OHh_sfu4DTZWd7YJBB75Mw8_avsek1khaGZjAwXsPHSpBxhCGGgxaNVQmB9uNKjZJ64_vMgJxzCDn6PWwNRDFnVgcce90uEbaqdKx8yvJcpamPLdjiJqhKLxofCd1CkQER07",
  },
  {
    when: "EVERY THURSDAY",
    title: "THE RED SHIFT",
    desc: "High-tempo techno and kinetic visuals. Pulse monitoring at the door.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDq497O9De1qH7b9_PIxu5puyyrZayFXGrYhEB0foE90jYbir_a5uyvZZOjil9oLqcrWPdMPHpPZ4azf9sQCpgL56XjlGeyUYotJfa8MqU1JNt32d4eLIQxNz65aDE7ByAyi2xi6rmzd4PpfhgsR0QVVuQqajLeoxWFv-oeBnXuY_k29EjC0yobsWG8vmLR3XgOVGilLLZiJJv1W_iokfshAk0orYE_c8x-CT2rMSxqzeMD3-ntK6nm8bbZ7rz3d3znlIPBRh7i4ad",
  },
  {
    when: "SUNDAY NOON",
    title: "SILENT ASCENT",
    desc: "Ambient decompression for the elite survivors. Absolute silence enforced.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlTe1VJhVZq6u4Sfkg3jp-k5bQEfwtK2HxOdUHqc4Lqwhhy9PwJhJAfziNY_mJx-O7XWGeyqIFMX1W2zrZw-cSpNXZlPdNE3TmRHHsxcPZmf2M13dsVx9j1iFYvyi7904igX7MXijNyECdponROhSBNR38tlDsdXa5d-oljd4j5SaBOi8PF7q07DwSL0JGNSnd-aWcfXtdDqmaJgT4WFQBqps2zeajLiFE5rX8Yvac0LzzUU0NXitB4nQDjMBsHI98LZRZ4ripiEzy",
  },
];

const calendarDays: Array<{
  label: string;
  state?: "off" | "today" | "event";
  event?: string;
}> = [
  { label: "26", state: "off" },
  { label: "27", state: "off" },
  { label: "28", state: "off" },
  { label: "29", state: "off" },
  { label: "30", state: "off" },
  { label: "01", state: "today" },
  { label: "02" },
  { label: "03" },
  { label: "04", state: "event", event: "BASS HARVEST · 21:00" },
  { label: "05" },
  { label: "06", event: "TECHNO RITUAL" },
  { label: "07" },
  { label: "08" },
  { label: "09" },
];

function EventsPage() {
  return (
    <SiteLayout>
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop pt-12 pb-stack-lg">
        {/* Title */}
        <section className="mb-stack-lg">
          <h2 className="font-headline-xl text-headline-xl text-on-background uppercase mb-4">
            THE RHYTHM
            <br />
            <span className="text-primary-container">OF THE VOID</span>
          </h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            A curated calendar of high-intensity encounters and sonic rituals across Chicago,
            designed for the elite underground. No compromises. No escape.
          </p>
        </section>

        <div className="grid grid-cols-12 gap-gutter">
          {/* Weekly Rituals */}
          <section className="col-span-12 lg:col-span-5 flex flex-col gap-stack-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-label-caps text-label-caps text-primary tracking-[0.2em]">
                WEEKLY RITUALS
              </h3>
              <span className="font-label-caps text-[10px] text-secondary opacity-50">
                RECURRING SERIES
              </span>
            </div>
            {rituals.map((r) => (
              <div
                key={r.title}
                className="glass-card p-6 flex gap-stack-md group cursor-pointer hover:border-primary-container transition-all"
              >
                <div className="w-24 h-24 bg-surface-container-highest shrink-0 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={r.title}
                    src={r.src}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-label-caps text-[10px] text-primary mb-1">{r.when}</span>
                  <h4 className="font-headline-md text-xl font-bold uppercase group-hover:text-primary-container transition-colors">
                    {r.title}
                  </h4>
                  <p className="font-body-md text-sm text-secondary line-clamp-2">{r.desc}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Annual Anthems */}
          <section className="col-span-12 lg:col-span-7 flex flex-col gap-stack-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-label-caps text-label-caps text-primary tracking-[0.2em]">
                ANNUAL ANTHEMS
              </h3>
              <span className="font-label-caps text-[10px] text-secondary opacity-50">
                PREMIUM PILGRIMAGES
              </span>
            </div>
            <div className="relative w-full h-[500px] overflow-hidden group">
              <img
                className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                alt="Catacomb Summit — 48-hour sonic flagship."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDj5Nig7Mr03MBoj7hcrtXUYyrseZkf3kz6zr2ZrKB9n7UpjMqAzkV8UslLXGT5oJr9q__cXtjNlRF_S0YTzejGC1DWzji5UbhuVQjfnh76U6NN20YLPHyrjwAdvx6lOjQVXCKECsekRj6Xv2c3buzqqIfjE9cfwUxF5ODrwrMOQgiWLR1QGg-HVKB-1j7ivRSWeo04tYwCwEchheiiUSSItRLbx8_59VohHI1I_DQxreXr_haBNndHk1PJnGUuwVP9RVxri7yIp3T"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-stack-lg flex flex-col gap-4">
                <div className="flex gap-2">
                  <span className="bg-primary-container text-on-primary-container font-label-caps text-[10px] px-3 py-1">
                    SOLD OUT
                  </span>
                  <span className="glass-card text-on-background font-label-caps text-[10px] px-3 py-1">
                    OCT 31 — NOV 02
                  </span>
                </div>
                <h4 className="font-headline-xl text-headline-lg font-extrabold uppercase leading-none tracking-tight">
                  CATACOMB
                  <br />
                  SUMMIT 2026
                </h4>
                <p className="font-body-md text-secondary max-w-md">
                  Our flagship 48-hour sonic experience. Three floors of absolute darkness and
                  architectural sound under the West Loop. Only for the initiated.
                </p>
                <button className="w-fit border border-primary text-primary px-8 py-3 font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-colors">
                  VIEW DOSSIER
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-stack-md">
              {[
                { when: "COMING WINTER", title: "FROST OVERRIDE", icon: "ac_unit" },
                { when: "COMING SPRING", title: "VIOLET REBIRTH", icon: "auto_awesome" },
              ].map((b) => (
                <div
                  key={b.title}
                  className="glass-card p-stack-md flex flex-col justify-between group cursor-pointer hover:border-primary transition-all"
                >
                  <div className="mb-8">
                    <span className="font-label-caps text-primary text-[10px]">{b.when}</span>
                    <h5 className="font-headline-md text-2xl font-bold uppercase mt-2">
                      {b.title}
                    </h5>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-on-background/20 group-hover:text-primary transition-colors">
                    {b.icon}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Calendar */}
        <section className="mt-stack-lg">
          <div className="border-b border-white/10 pb-4 mb-stack-md">
            <h3 className="font-label-caps text-label-caps text-primary tracking-[0.2em]">
              OPERATIONAL CALENDAR
            </h3>
          </div>
          <div className="grid grid-cols-7 gap-px bg-white/10 overflow-hidden border border-white/10">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
              <div
                key={d}
                className="bg-surface-container-lowest p-4 text-center font-label-caps text-[10px] text-secondary"
              >
                {d}
              </div>
            ))}
            {calendarDays.map((d, i) => (
              <div
                key={i}
                className={`bg-black/50 aspect-square p-4 flex flex-col justify-between transition-colors ${
                  d.state === "off" ? "opacity-20" : ""
                } ${d.state === "event" ? "border-2 border-primary-container" : ""} ${
                  !d.state ? "hover:bg-surface-container cursor-pointer" : ""
                }`}
              >
                <span className="font-label-caps text-[10px]">{d.label}</span>
                {d.state === "today" && (
                  <div className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse" />
                )}
                {d.event && (
                  <div
                    className={`font-label-caps text-[9px] leading-tight ${
                      d.state === "event" ? "text-primary-container" : "text-on-background/40"
                    }`}
                  >
                    {d.event}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
