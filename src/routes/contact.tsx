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
            Booking inquiries, partnerships, press — reach out by email or connect with us on socials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Email */}
          <a
            href="mailto:43rdStreetMusicFestival@gmail.com"
            className="glass-panel p-8 group transition-all duration-300 hover:border-primary-container/50 block"
          >
            <span className="font-label-caps text-label-caps text-primary mb-4 block">
              EMAIL
            </span>
            <h3 className="font-headline-md text-headline-md mb-2 uppercase">Management</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              43rdStreetMusicFestival@gmail.com
            </p>
            <span className="inline-flex items-center gap-2 font-label-caps text-label-caps text-white group-hover:text-primary transition-colors">
              SEND AN EMAIL
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>

          {/* Socials */}
          <div className="glass-panel p-8">
            <span className="font-label-caps text-label-caps text-primary mb-6 block">
              SOCIALS
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/dungeonseries/"
                target="_blank"
                rel="noreferrer"
                className="font-body-md text-body-md text-white hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                Instagram — @dungeonseries
              </a>
              <span className="font-body-md text-body-md text-on-surface-variant inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                Facebook — Ty Harvey
              </span>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
