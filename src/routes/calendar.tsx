import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { events, resolveImage, VENDOR_PACKET_URL } from "@/data/events";

const TITLE = "Calendar & Tickets · Dungeon Series Chicago";
const DESC =
  "Upcoming Dungeon Series events in Chicago. Book tickets through TicketFalcon for the Dungeon Series Festival and recurring rituals.";

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

function CalendarPage() {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const featured = sorted.find((e) => e.featured);
  const rest = sorted.filter((e) => !e.featured);

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
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={featured.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit bg-primary-container text-white px-8 py-3 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95"
                  >
                    BUY TICKETS · TICKETFALCON
                  </a>
                  <a
                    href={VENDOR_PACKET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit border border-primary text-primary px-6 py-3 font-label-caps text-label-caps hover:bg-primary hover:text-background transition-colors"
                  >
                    VENDOR PACKET · PDF
                  </a>
                </div>
              </div>

              <p className="font-body-md text-secondary max-w-2xl">{featured.blurb}</p>

              {featured.flyers && featured.flyers.length > 0 && (
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
                          src={resolveImage(f.src)}
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
                  <p className="font-label-caps text-[10px] text-secondary opacity-50 mt-3">
                    INTERESTED IN VENDING THE FESTIVAL?{" "}
                    <Link to="/vendors" className="underline hover:text-primary">
                      SEE VENDOR INFO →
                    </Link>
                  </p>
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
                  <p className="font-body-md text-sm text-secondary opacity-80 mt-1">{e.blurb}</p>
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
