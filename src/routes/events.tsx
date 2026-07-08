import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { events, resolveImage, VENDOR_PACKET_URL } from "@/data/events";

const festival = events.find((e) => e.featured) ?? events[0];

const EVENTS_TITLE = "Dungeon Series Festival · August 9, 2026 · Chicago";
const EVENTS_DESC =
  "The Dungeon Series Festival returns August 9, 2026 in Chicago. One day. One destination. Get tickets, view the lineup, and join us.";

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

function EventsPage() {
  return (
    <SiteLayout>
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop pt-12 pb-stack-lg">
        {/* ── FESTIVAL HERO ─────────────────────────────────────────────── */}
        <section className="mb-stack-lg">
          <div className="grid lg:grid-cols-2 gap-gutter items-center">
            <div className="order-2 lg:order-1">
              <p className="font-label-caps text-label-caps text-primary-container tracking-[0.3em] mb-4">
                FEATURED EVENT
              </p>
              <h1 className="font-headline-xl text-headline-xl text-on-background uppercase leading-[0.9] mb-6">
                {festival.title}
              </h1>
              <p className="font-body-lg text-body-lg text-secondary mb-8 max-w-xl">
                {festival.blurb}
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div>
                  <span className="font-label-caps text-[10px] tracking-[0.2em] text-primary block mb-1">
                    DATE
                  </span>
                  <span className="font-headline-md text-lg text-on-background">
                    {festival.dateLabel}
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-[10px] tracking-[0.2em] text-primary block mb-1">
                    TIME
                  </span>
                  <span className="font-headline-md text-lg text-on-background">
                    {festival.timeLabel}
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-[10px] tracking-[0.2em] text-primary block mb-1">
                    LOCATION
                  </span>
                  <span className="font-headline-md text-lg text-on-background">
                    {festival.venue}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={festival.ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary-container text-white px-10 py-4 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95 neon-glow"
                >
                  GET TICKETS
                </a>
                <a
                  href={VENDOR_PACKET_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 text-white px-10 py-4 font-label-caps text-label-caps hover:bg-white/5 transition-all"
                >
                  BECOME A VENDOR
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="glass-panel overflow-hidden">
                {festival.flyers?.[0] ? (
                  <img
                    src={resolveImage(festival.flyers[0].src)}
                    alt={festival.flyers[0].alt}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <div className="aspect-square bg-surface-container-highest flex items-center justify-center">
                    <span className="font-label-caps text-secondary">FESTIVAL FLYER</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── LINEUP ────────────────────────────────────────────────────── */}
        {festival.flyers && festival.flyers.length > 0 && (
          <section className="py-stack-lg bg-surface-container-lowest border-y border-white/5 -mx-6 md:-mx-margin-desktop px-6 md:px-margin-desktop mb-stack-lg">
            <p className="font-label-caps text-label-caps text-primary-container tracking-[0.3em] mb-3 text-center">
              2026 LINEUP
            </p>
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase text-center mb-12">
              MEET THE DUNGEON
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {festival.flyers.map((flyer, i) => (
                <div
                  key={flyer.label}
                  className={`group relative aspect-[3/4] overflow-hidden glass-panel hover:border-primary-container transition-colors ${
                    i < 2 ? "border-primary-container/30" : ""
                  }`}
                >
                  <img
                    src={resolveImage(flyer.src)}
                    alt={flyer.alt}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    {i < 2 && (
                      <span className="font-label-caps text-[10px] tracking-[0.25em] text-primary-container mb-1 block">
                        HEADLINER
                      </span>
                    )}
                    <span className="font-headline-md text-[16px] uppercase text-on-background">
                      {flyer.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── MORE EVENTS ─────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-stack-md">
            <h3 className="font-label-caps text-label-caps text-primary tracking-[0.2em]">
              MORE EVENTS
            </h3>
            <span className="font-label-caps text-[10px] text-secondary opacity-50">
              COMING SOON
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-stack-md">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="glass-card p-stack-md flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <span className="font-label-caps text-[10px] text-primary mb-2 block">
                    TBA
                  </span>
                  <h4 className="font-headline-md text-2xl font-bold uppercase text-on-background mb-2">
                    TBD
                  </h4>
                  <p className="font-body-md text-secondary mb-4">Location TBA</p>
                  <p className="font-body-md text-sm text-on-background/60 line-clamp-2">
                    More details coming soon.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-label-caps text-[10px] text-secondary">
                    TBA
                  </span>
                  <span className="border border-white/20 text-white/40 px-6 py-2 font-label-caps text-[10px]">
                    TICKETS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
