import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

const CONTACT_TITLE = "Contact · Dungeon Series Chicago";
const CONTACT_DESC =
  "Booking inquiries, partnerships, and press for Dungeon Series — based in Chicago, IL.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: CONTACT_TITLE },
      { name: "description", content: CONTACT_DESC },
      { property: "og:title", content: CONTACT_TITLE },
      { property: "og:description", content: CONTACT_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:alt", content: "Dungeon Series emblem" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: CONTACT_TITLE },
      { name: "twitter:description", content: CONTACT_DESC },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop pt-12 pb-stack-lg">
        {/* Hero */}
        <div className="mb-stack-lg border-l-4 border-primary-container pl-8">
          <h1 className="font-headline-xl text-headline-xl uppercase">Get in Touch</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">
            Booking inquiries, partnerships, press — send us a message and our team in Chicago
            will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Information Column */}
          <div className="md:col-span-5 flex flex-col gap-stack-md">
            <div className="glass-panel p-8 group transition-all duration-300">
              <span className="font-label-caps text-label-caps text-primary mb-4 block">
                BOOKINGS &amp; PARTNERSHIPS
              </span>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Management</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Connect with our management team for artist bookings, brand collaborations, and
                large-scale event logistics.
              </p>
              <a
                className="inline-flex items-center gap-2 font-label-caps text-label-caps text-white group-hover:text-primary transition-colors"
                href="mailto:ops@dungeonseries.com"
              >
                OPS@DUNGEONSERIES.COM
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            <div className="glass-panel overflow-hidden transition-all duration-300">
              <div className="h-64 w-full bg-surface-container-high relative">
                <img
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  alt="Aerial night view of Chicago's industrial corridor in moody red light."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyq-NlbZXuAPxcjO5YMItxPlAHnGmGy2BI84tIGSpnlPsfROZgHqiNYaEh9svk5rMJXwzu27V_63kov8KGVzd296qJSytBcoXiuCl1j1_01v3ztlAFyTnpMX9FdoWWGCPelNewdjnjVoi18gFoIAO86kHzSbXcsT9_eatE3cMP2rAjjDMkgryWIGZoLJyWu9Lp4sggPRDl1BpLVsVmMkaYWvnaCvGKickEK19BqRQOsa1kkAMdc1E6KPhqk9Xdg_LQySWQXoJ2AfUp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-container text-on-primary-container font-label-caps text-[10px] px-2 py-1">
                    CHICAGO HQ
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline-md text-headline-md mb-2 uppercase">
                  Chicago Office
                </h3>
                <address className="not-italic font-body-md text-body-md text-on-surface-variant flex flex-col gap-1">
                  <span>1039 E 43rd Street</span>
                  <span>Chicago, IL</span>
                </address>
                <div className="mt-6 flex gap-4">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-primary">
                      PHONE
                    </span>
                    <span className="font-body-md text-body-md">+1 (312) 555-0107</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7">
            <div className="glass-panel p-10 h-full">
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                      NAME
                    </label>
                    <input
                      type="text"
                      placeholder="REQUIRED"
                      className="bg-black border-0 border-b border-white/20 focus:ring-0 focus:border-primary-container focus:outline-none text-white placeholder:text-white/10 font-body-md px-0 py-3 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className="bg-black border-0 border-b border-white/20 focus:ring-0 focus:border-primary-container focus:outline-none text-white placeholder:text-white/10 font-body-md px-0 py-3 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">
                    INQUIRY TYPE
                  </label>
                  <select className="bg-black border-0 border-b border-white/20 focus:ring-0 focus:border-primary-container focus:outline-none text-white font-body-md px-0 py-3 transition-colors appearance-none">
                    <option>GENERAL INQUIRY</option>
                    <option>BOOKING REQUEST</option>
                    <option>PARTNERSHIP PROPOSAL</option>
                    <option>PRESS ACCESS</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">
                    MESSAGE
                  </label>
                  <textarea
                    rows={6}
                    placeholder="ENTER MESSAGE..."
                    className="bg-black border-0 border-b border-white/20 focus:ring-0 focus:border-primary-container focus:outline-none text-white placeholder:text-white/10 font-body-md px-0 py-3 transition-colors resize-none"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-primary-container text-on-primary-container px-12 py-5 font-label-caps text-label-caps neon-glow transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    SEND MESSAGE
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Secondary social grid */}
        <div className="mt-gutter grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {[
            ["INSTAGRAM", "@DUNGEONSERIES", "https://www.instagram.com/dungeonseries/"],
            ["TWITTER / X", "/DUNGEON_SERIES", ""],
            ["DISCORD", "THE_SANCTUARY_V7", ""],
            ["TELEGRAM", "T.ME/DUNGEON_HQ", ""],
          ].map(([label, value, url]) => (
            <div
              key={label}
              className="glass-panel p-6 border-l-2 border-primary-container"
            >
              <span className="font-label-caps text-[10px] text-on-surface-variant block mb-2">
                {label}
              </span>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body-md text-body-md text-white hover:text-primary transition-colors"
                >
                  {value}
                </a>
              ) : (
                <span className="font-body-md text-body-md text-white">{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
