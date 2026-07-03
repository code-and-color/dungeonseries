import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { events, VENDOR_PACKET_URL, resolveImage } from "@/data/events";

const baseUrl = import.meta.env.BASE_URL ?? "/";

const HOME_TITLE = "Dungeon Series Festival · August 9, 2026 · Chicago";
const HOME_DESC =
  "The Dungeon Series Festival returns August 9, 2026 in Chicago. One day. One descent. Get tickets, view the lineup, and become a vendor.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: baseUrl },
      { property: "og:image", content: `${baseUrl}og-image.png` },
      { property: "og:image:alt", content: "Dungeon Series emblem" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
      { name: "twitter:image", content: `${baseUrl}og-image.png` },
    ],
    links: [{ rel: "canonical", href: baseUrl }],
  }),
  component: HomePage,
});

// ─── Countdown ──────────────────────────────────────────────────────────────
function useCountdown(targetIso: string) {
  const target = new Date(`${targetIso}T14:00:00-05:00`).getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

const pad = (n: number) => n.toString().padStart(2, "0");

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-panel px-4 py-3 md:px-6 md:py-4 min-w-[72px] md:min-w-[96px] text-center">
        <span className="font-headline-lg text-headline-md md:text-headline-lg text-on-background tabular-nums">
          {pad(value)}
        </span>
      </div>
      <span className="font-label-caps text-[10px] tracking-[0.25em] text-on-background/50 mt-2">
        {label}
      </span>
    </div>
  );
}

// ─── Placeholder lineup (edit freely) ───────────────────────────────────────
const HEADLINERS = [
  "TBA HEADLINER",
  "TBA HEADLINER",
  "TBA HEADLINER",
  "TBA HEADLINER",
];
const LINEUP = [
  "ARTIST ONE",
  "ARTIST TWO",
  "ARTIST THREE",
  "ARTIST FOUR",
  "ARTIST FIVE",
  "ARTIST SIX",
  "ARTIST SEVEN",
  "ARTIST EIGHT",
];

const STATS = [
  { value: "1", suffix: "", label: "DAY OF MUSIC" },
  { value: "12", suffix: "+", label: "HOURS" },
  { value: "20", suffix: "+", label: "ARTISTS" },
  { value: "1", suffix: "", label: "CITY · CHICAGO" },
];

const FAQS = [
  {
    q: "Is this a rain or shine event?",
    a: "Yes — the festival takes place rain or shine. No refunds for weather.",
  },
  {
    q: "What time do gates open?",
    a: "Gates open at 2:00 PM. Music runs until late night. Arrive early to skip the line.",
  },
  {
    q: "How do I receive my tickets?",
    a: "All tickets are delivered digitally through TicketFalcon. Bring a screenshot or printout to entry.",
  },
  {
    q: "Are there age restrictions?",
    a: "The festival is 21+. Valid government-issued ID required at the door.",
  },
  {
    q: "Can I bring outside food or drinks?",
    a: "No outside food, drinks, or coolers. Food trucks and full bars will be on-site.",
  },
  {
    q: "How do I become a vendor or sponsor?",
    a: "Download the vendor packet at the bottom of this page, then email us at bookings@dungeonseries.com.",
  },
];

function HomePage() {
  const festival = events.find((e) => e.featured) ?? events[0];
  const { d, h, m, s } = useCountdown(festival.date);
  const heroFlyer = festival.flyers?.[0];

  return (
    <SiteLayout>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale-[0.5] brightness-[0.28]"
            alt="Dungeon Series Festival crowd"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3rVvJQ07MtxeyYSP5N1vYZ029Zng8Wj2yKlHhCdrYqDjfUUwdBBELXoS9vHHFmY54nCJp-Nf8LXpLsASJMfgC7tMmEoDb57G5oaTJvsc2dH04lxyR0OQHT8ZOZDudqarfWLRiyylU63uai81h065Ghd5G61IC_W5nXbnqr_Oyzx0YqscjQojFUv9DOfXdKmXy2XU83qtrj4MkGPWgCAguUtSileqkNf5iJToJZCvfh6ESmG0X7bb7Zr2Mk9j0V7Epn81XK6UAZRRJ"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,85,64,0.18),transparent_60%)]" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-margin-desktop max-w-container-max mx-auto py-24 text-center">
          <img
            src={`${baseUrl}og-image.png`}
            alt="Dungeon Series"
            className="mx-auto w-28 md:w-36 mb-8 drop-shadow-[0_0_30px_rgba(255,85,64,0.35)]"
          />
          <p className="font-label-caps text-label-caps text-primary-container tracking-[0.4em] mb-6">
            THE DUNGEON SERIES FESTIVAL
          </p>
          <h1 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-background leading-[0.9] uppercase mb-8">
            ONE DAY.<br />ONE DESCENT.
          </h1>
          <p className="font-body-lg text-on-background/70 max-w-xl mx-auto mb-10">
            {festival.dateLabel} · {festival.venue}
            <br />
            <span className="text-on-background/50 text-body-md">{festival.timeLabel}</span>
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-3 md:gap-5 mb-12">
            <CountdownUnit value={d} label="DAYS" />
            <CountdownUnit value={h} label="HOURS" />
            <CountdownUnit value={m} label="MINUTES" />
            <CountdownUnit value={s} label="SECONDS" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={festival.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-primary-container text-white px-12 py-5 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95 neon-glow"
            >
              GET TICKETS
            </a>
            <a
              href="#lineup"
              className="border border-white/20 text-white px-12 py-5 font-label-caps text-label-caps hover:bg-white/5 transition-all active:scale-95"
            >
              VIEW LINEUP
            </a>
          </div>
        </div>
      </section>

      {/* ── DATE MARQUEE ─────────────────────────────────────────────────── */}
      <section className="border-b border-white/5 bg-surface-container-lowest overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] py-6 md:py-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-headline-lg text-[48px] md:text-[96px] uppercase tracking-tight text-on-background/10 px-8 flex items-center gap-8"
            >
              AUG · 09 · CHICAGO
              <span className="text-primary-container">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-stack-lg px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((st) => (
            <div key={st.label} className="glass-panel p-8 text-center">
              <div className="font-headline-lg text-headline-lg text-primary-container tabular-nums">
                {st.value}
                <span className="text-on-background/60">{st.suffix}</span>
              </div>
              <div className="font-label-caps text-[10px] tracking-[0.25em] text-on-background/50 mt-3">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LINEUP ───────────────────────────────────────────────────────── */}
      <section id="lineup" className="py-stack-lg bg-surface-container-lowest border-y border-white/5">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <p className="font-label-caps text-label-caps text-primary-container tracking-[0.3em] mb-3 text-center">
            2026 LINEUP
          </p>
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase text-center mb-12">
            MEET THE DUNGEON
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {HEADLINERS.map((name, i) => (
              <div
                key={i}
                className="aspect-square glass-panel flex items-center justify-center p-4 text-center hover:border-primary-container/50 transition-colors"
              >
                <span className="font-headline-md text-[20px] uppercase text-on-background">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-background/40 mb-6 text-center">
              WITH SUPPORT FROM
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {LINEUP.map((name) => (
                <span
                  key={name}
                  className="font-headline-md text-[18px] md:text-[22px] uppercase text-on-background/70 hover:text-primary-container transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-center text-on-background/40 text-body-md mt-8 italic">
              Full lineup announced in waves. Follow @dungeonseries for drops.
            </p>
          </div>
        </div>
      </section>

      {/* ── FLYER ────────────────────────────────────────────────────────── */}
      {heroFlyer && (
        <section className="py-stack-lg px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-panel overflow-hidden">
              <img
                src={resolveImage(heroFlyer.src)}
                alt={heroFlyer.alt}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-primary-container tracking-[0.3em] mb-4">
                THE FLAGSHIP EVENT
              </p>
              <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-on-background uppercase mb-6">
                A ONE-DAY RITUAL IN CHICAGO
              </h3>
              <p className="text-on-background/60 font-body-lg mb-8">
                {festival.blurb}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={festival.ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary-container text-white px-8 py-4 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95 neon-glow"
                >
                  BUY TICKETS
                </a>
                <a
                  href={VENDOR_PACKET_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 text-white px-8 py-4 font-label-caps text-label-caps hover:bg-white/5 transition-all"
                >
                  BECOME A VENDOR
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-stack-lg bg-surface-container-lowest border-y border-white/5">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto max-w-3xl">
          <p className="font-label-caps text-label-caps text-primary-container tracking-[0.3em] mb-3 text-center">
            KNOW BEFORE YOU GO
          </p>
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase text-center mb-12">
            FAQS
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="glass-panel p-6 group cursor-pointer"
              >
                <summary className="flex justify-between items-center gap-4 list-none">
                  <span className="font-headline-md text-[18px] md:text-[20px] uppercase text-on-background">
                    {f.q}
                  </span>
                  <span className="material-symbols-outlined text-primary-container transition-transform group-open:rotate-45">
                    add
                  </span>
                </summary>
                <p className="text-on-background/60 font-body-md mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────────────── */}
      <section className="py-stack-lg px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-background uppercase leading-none mb-6">
          SEE YOU<br />ON THE 9TH.
        </h2>
        <p className="text-on-background/60 mb-10">
          {festival.dateLabel} · {festival.venue}
        </p>
        <a
          href={festival.ticketUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-primary-container text-white px-16 py-6 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95 neon-glow"
        >
          GET TICKETS
        </a>
      </section>
    </SiteLayout>
  );
}
