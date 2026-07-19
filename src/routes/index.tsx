import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { SiteLayout } from "@/components/site/SiteLayout";
import { startBackgroundMusic } from "@/components/site/BackgroundMusic";
import { events, resolveImage, SCHEDULE } from "@/data/events";
import { ScheduleTable } from "@/components/site/ScheduleTable";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const mediaBase = `${import.meta.env.BASE_URL ?? "/"}media/`;
const festivalClip = { url: `${mediaBase}festival-clip.mp4` };
const clip1 = { url: `${mediaBase}clip1.mp4` };
const clip2 = { url: `${mediaBase}clip2.mp4` };
const clip3 = { url: `${mediaBase}clip3.mp4` };

// Add more moments here anytime — just drop the image in `public/moments/`
// and append an entry below. To give a photo a real caption (like an artist
// name), add it near the top of the list with a `caption` string.
const momentsBase = `${import.meta.env.BASE_URL ?? "/"}moments/`;
const DEFAULT_MOMENT_CAPTION = "";
const NAMED_MOMENTS: Array<{ file: string; alt: string; caption: string }> = [
  { file: "maestro.png", alt: "Steve Maestro on the decks", caption: "STEVE MAESTRO" },
  { file: "bracken.png", alt: "Dion Bracken in the booth", caption: "DION BRACKEN" },
];
const EXTRA_MOMENT_FILES: string[] = [
  "crowd-1.jpg",
  "image000001.JPG",
  "740628622_26844506721895336_852612985528828770_n.jpg",
  "DSC00788.jpg","DSC00798.jpg","DSC00805.jpg","DSC00808.jpg","DSC00811.jpg",
  "DSC00814.jpg","DSC00820.jpg","DSC00829.jpg","DSC00834.jpg","DSC00835.jpg",
  "DSC00838.jpg","DSC00850.jpg","DSC00854.jpg","DSC00861.jpg","DSC00862.jpg",
  "DSC00867.jpg","DSC00871.jpg","DSC00891.jpg","DSC00893.jpg","DSC00954.jpg",
  "DSC00957.jpg","DSC00960.jpg","DSC00961.jpg","DSC00969.jpg","DSC00975.jpg",
  "DSC00978.jpg","DSC00984.jpg","DSC00990.jpg","DSC00993.jpg","DSC00996.jpg",
  "DSC00999.jpg","DSC01000.jpg","DSC01005.jpg","DSC01008.jpg","DSC01014.jpg",
  "DSC01017.jpg","DSC01022.jpg","DSC01029.jpg","DSC01030.jpg","DSC01035.jpg",
  "DSC01038.jpg","DSC01041.jpg","DSC01044.jpg","DSC01050.jpg","DSC01053.jpg",
  "DSC01059.jpg","DSC01071.jpg","DSC01074.jpg","DSC01080.jpg","DSC01083.jpg",
  "DSC01089.jpg","DSC01092.jpg","DSC01095.jpg","DSC01101.jpg","DSC01104.jpg",
  "DSC01110.jpg","DSC01113.jpg","DSC01119.jpg","DSC01125.jpg","DSC01131.jpg",
  "DSC01140.jpg","DSC01143.jpg","DSC01146.jpg","DSC01149.jpg","DSC01161.jpg",
  "DSC01163.jpg","DSC01167.jpg","DSC01170.jpg","DSC01173.jpg","DSC01176.jpg",
  "DSC01179.jpg","DSC01182.jpg","DSC01185.jpg","DSC01188.jpg","DSC01191.jpg",
  "DSC01200.jpg","DSC01203.jpg","DSC01206.jpg","DSC01212.jpg","DSC01215.jpg",
  "DSC01221.jpg","DSC01230.jpg","DSC01233.jpg","DSC01239.jpg","DSC01245.jpg",
  "DSC01251.jpg","DSC01260.jpg","DSC01266.jpg","DSC01269.jpg",
];
const MOMENTS: Array<{ src: string; alt: string; caption: string }> = [
  ...NAMED_MOMENTS.map((m) => ({
    src: `${momentsBase}${encodeURIComponent(m.file)}`,
    alt: m.alt,
    caption: m.caption,
  })),
  ...EXTRA_MOMENT_FILES.map((file) => ({
    src: `${momentsBase}${encodeURIComponent(file)}`,
    alt: "Dungeon Series past event photo",
    caption: DEFAULT_MOMENT_CAPTION,
  })),
];


const baseUrl = import.meta.env.BASE_URL ?? "/";

const HOME_TITLE = "Dungeon Series Outside · August 9, 2026 · Chicago";
const HOME_DESC =
  "Dungeon Series Outside returns August 9, 2026 in Chicago. One day. One destination. Get tickets, view the lineup, and become a vendor.";

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
  const target = new Date(`${targetIso}T09:00:00-05:00`).getTime();
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

// ─── Lineup (maps to public/events/*.png) ───────────────────────────────────
type Artist = { name: string; image: string; headliner?: boolean };

const HEADLINERS: Artist[] = [
  { name: "JAMIE 3:26", image: "Jamie326_Elevator.png", headliner: true },
  { name: "OSUNLADE", image: "Osunlade.jpeg", headliner: true },
];

const SUPPORT: Artist[] = [
  { name: "BRACKEN", image: "Dungeon Series Festival - Bracken.png" },
  { name: "BREATHLEZZ", image: "Dungeon Series Festival - Breathlezz.png" },
  { name: "COSEY", image: "Dungeon Series Festival - Cosey.png" },
  { name: "CTRLZORA", image: "Dungeon Series Festival - CTRLZORA.png" },
  { name: "HARDISON", image: "Dungeon Series Festival - Hardison.png" },
  { name: "HUNT", image: "Dungeon Series Festival - Hunt (1).png" },
  { name: "KOKO", image: "Dungeon Series Festival - Koko (1).png" },
  { name: "MAESTRO", image: "Dungeon Series Festival - Maestro.png" },
  { name: "MAXWELL", image: "Dungeon Series Festival - Maxwell.png" },
  { name: "POWELL", image: "Dungeon Series Festival - Powell.png" },
];

const STATS = [
  { value: "1", suffix: "", label: "DAY OF MUSIC" },
  { value: "10", suffix: "+", label: "HOURS" },
  { value: "10", suffix: "+", label: "ARTISTS" },
];

const FAQS = [
  {
    q: "Is this a rain or shine event?",
    a: "Yes — the festival takes place rain or shine. No refunds for weather.",
  },
  {
    q: "What time do gates open?",
    a: "Gates open at 9:00 AM. Music starts at 10:00 AM and runs until 8:00 PM. Arrive early to skip the line.",
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

function Splash({ onEnter, ticketUrl }: { onEnter: () => void; ticketUrl: string }) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,85,64,0.28),transparent_60%)] pointer-events-none" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
      {/* Fine scanlines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:repeating-linear-gradient(0deg,#fff_0,#fff_1px,transparent_1px,transparent_3px)]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-[fadeIn_1s_ease-out]">
        {/* Logo emblem — circular masked video with rotating aura */}
        <div className="relative mb-12 group">
          {/* Rotating conic ring */}
          <div
            className="absolute -inset-3 rounded-full opacity-70 blur-[2px] animate-[spin_9s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(255,85,64,0) 0deg, rgba(255,85,64,0.9) 90deg, rgba(255,85,64,0) 180deg, rgba(255,85,64,0.6) 270deg, rgba(255,85,64,0) 360deg)",
              WebkitMask:
                "radial-gradient(circle, transparent 58%, #000 60%, #000 100%)",
              mask:
                "radial-gradient(circle, transparent 58%, #000 60%, #000 100%)",
            }}
          />
          {/* Soft outer bloom */}
          <div className="absolute -inset-10 rounded-full bg-primary-container/30 blur-3xl pointer-events-none" />
          {/* Inner hairline */}
          <div className="absolute inset-0 rounded-full border border-primary-container/40 pointer-events-none" />
          {/* Circular animated emblem */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-black shadow-[0_0_80px_rgba(255,85,64,0.45)]">
            <picture>
              <source srcSet={`${mediaBase}logo-spotlight.webp`} type="image/webp" />
              <img
                src={`${mediaBase}logo-spotlight.gif`}
                alt="Dungeon Series spotlight logo"
                className="w-full h-full object-cover scale-[1.02] pointer-events-none"
              />
            </picture>

            {/* Subtle inner shading */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.55)] pointer-events-none" />
          </div>
        </div>

        {/* Wordmark */}
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-10 bg-on-background/30" />
          <p className="font-label-caps text-[11px] md:text-xs text-primary-container tracking-[0.65em]">
            DUNGEON SERIES OUTSIDE
          </p>
          <span className="h-px w-10 bg-on-background/30" />
        </div>

        <h1 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-background uppercase leading-[0.9] mb-6">
          AUGUST 9<br />CHICAGO
        </h1>
        <p className="text-on-background/60 font-body-md mb-12 tracking-widest">
          GATES 9:00 AM · MUSIC 10:00 AM — 8:00 PM
        </p>


        {/* CTA */}
        <a
          href={ticketUrl}
          target="_blank"
          rel="noreferrer"
          onClick={onEnter}
          className="spotlight-cta bg-primary-container text-white px-16 py-5 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95 tracking-[0.4em] mb-8"
        >
          GET TICKETS
        </a>

        <button
          onClick={onEnter}
          className="text-on-background/50 hover:text-on-background font-label-caps text-[11px] tracking-[0.3em] underline underline-offset-4 transition-colors"
        >
          ENTER SITE
        </button>

      </div>
    </div>
  );
}


function HomePage() {
  const festival = events.find((e) => e.featured) ?? events[0];
  const { d, h, m, s } = useCountdown(festival.date);
  const heroFlyer = festival.flyers?.[0];
  const [splashOpen, setSplashOpen] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("ds-splash-seen") !== "1";
  });
  const dismissSplash = () => {
    sessionStorage.setItem("ds-splash-seen", "1");
    setSplashOpen(false);
    startBackgroundMusic();
  };

  return (
    <SiteLayout>
      {splashOpen && <Splash onEnter={dismissSplash} ticketUrl={festival.ticketUrl} />}
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale-[0.5] brightness-[0.28]"
            alt="Dungeon Series Outside crowd"
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
            DUNGEON SERIES LIVE OUTSIDE
          </p>
          <h1 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-background leading-[0.9] uppercase mb-8">
            DUNGEON SERIES<br />LIVE OUTSIDE.
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
        <div className="flex flex-wrap justify-center gap-6">
          {STATS.map((st) => (
            <div
              key={st.label}
              className="glass-panel p-8 text-center flex-1 min-w-[160px] md:min-w-[220px]"
            >
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

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {HEADLINERS.map((artist) => (
              <div
                key={artist.name}
                className="group relative aspect-[3/4] w-[calc(50%-0.5rem)] md:w-[280px] overflow-hidden glass-panel border-primary-container/30 hover:border-primary-container transition-colors"
              >
                <img
                  src={resolveImage(artist.image)}
                  alt={artist.name}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <span className="font-label-caps text-[10px] tracking-[0.25em] text-primary-container mb-1 block">
                    HEADLINER
                  </span>
                  <span className="font-headline-md text-[18px] uppercase text-on-background">
                    {artist.name}
                  </span>
                </div>
              </div>
            ))}
          </div>


          <div className="border-t border-white/10 pt-8">
            <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-background/40 mb-6 text-center">
              WITH SUPPORT FROM
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {SUPPORT.map((artist) => (
                <div
                  key={artist.name}
                  className="group relative aspect-[3/4] overflow-hidden glass-panel hover:border-primary-container/50 transition-colors"
                >
                  <img
                    src={resolveImage(artist.image)}
                    alt={artist.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.retried) {
                        img.dataset.retried = "1";
                        const url = new URL(img.src, window.location.href);
                        url.searchParams.set("r", "1");
                        img.src = url.toString();
                      }
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}

            </div>
            <p className="text-center text-on-background/40 text-body-md mt-8 italic">
              More artists announced in waves. Follow @dungeonseries for drops.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPACT SCHEDULE ─────────────────────────────────────────────── */}
      <section className="py-stack-lg px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <ScheduleTable
          items={SCHEDULE}
          compact
          title="SET TIMES"
          highlight={["Osunlade", "Jaime 3:26"]}
        />
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
                THE MARQUEE EVENT
              </p>
              <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-on-background uppercase mb-6">
                ONE DAY IN CHICAGO
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
                <Link
                  to="/vendors"
                  className="border border-white/20 text-white px-8 py-4 font-label-caps text-label-caps hover:bg-white/5 transition-all"
                >
                  BECOME A VENDOR
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── VIDEO GALLERY ────────────────────────────────────────────────── */}
      <section className="py-stack-lg px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-background uppercase">
            WE MISS YOU
          </h2>
        </div>
        <div className="glass-panel overflow-hidden aspect-[9/16] sm:aspect-video max-w-3xl mx-auto mb-4 bg-black">
          <video
            key={festivalClip.url}
            src={festivalClip.url}
            className="w-full h-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
          />
        </div>
        <p className="text-center font-label-caps text-[12px] tracking-[0.3em] text-on-background/60">
          RON CARROLL
        </p>
      </section>

      {/* ── MOMENTS ──────────────────────────────────────────────────────── */}
      <section className="py-stack-lg bg-surface-container-lowest border-y border-white/5">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-background uppercase">
              DUNGEON SERIES SCENES FROM PAST EVENTS
            </h2>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {MOMENTS.map((m) => (
                <CarouselItem
                  key={m.src}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <figure className="group relative aspect-[3/4] overflow-hidden glass-panel">
                    <img
                      src={m.src}
                      alt={m.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {m.caption && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                        <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-center font-label-caps text-label-caps tracking-[0.3em] text-on-background">
                          {m.caption}
                        </figcaption>
                      </>
                    )}
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-background/80 border-white/20 text-on-background hover:bg-primary-container hover:text-white" />
            <CarouselNext className="hidden md:flex -right-4 bg-background/80 border-white/20 text-on-background hover:bg-primary-container hover:text-white" />
          </Carousel>
          <p className="text-center text-on-background/40 text-body-md mt-6 italic">
            Auto-scrolling · hover to pause.
          </p>
        </div>
      </section>




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
          <br />
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
