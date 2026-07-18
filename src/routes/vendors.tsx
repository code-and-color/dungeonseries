import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { VENDOR_PACKET_URL } from "@/data/events";

const TITLE = "Festival Vendors · Dungeon Series Chicago";
const DESC =
  "Apply to vend at Dungeon Series Outside. Download the vendor packet for booth pricing, load-in details, and application instructions.";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vendors" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/vendors" }],
  }),
  component: VendorsPage,
});

function VendorsPage() {
  return (
    <SiteLayout>
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop pt-12 pb-stack-lg">
        <section className="mb-stack-lg">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.2em]">
            FESTIVAL · VENDORS
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-background uppercase mt-3">
            VEND AT THE
            <br />
            <span className="text-primary-container">DUNGEON</span>
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mt-4">
            Join us at Room 43 for the Dungeon Series Festival. We host local DJs to curate a unique atmosphere. Download the vendor packet to join in and promote 
            your business with us.
          </p>
        </section>

        <section className="glass-card p-stack-md md:p-stack-lg flex flex-col md:flex-row md:items-center gap-6 justify-between mb-stack-lg">
          <div>
            <span className="font-label-caps text-[10px] text-primary">DOCUMENT</span>
            <h2 className="font-headline-md text-2xl font-bold uppercase mt-2">
              Festival Vendor Packet
            </h2>
            <p className="font-body-md text-sm text-secondary mt-2 max-w-xl">
              Latest version. Includes booth pricing, electrical, insurance requirements, and the
              application form.
            </p>
          </div>
          <a
            href={VENDOR_PACKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit bg-primary-container text-white px-8 py-3 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95"
          >
            DOWNLOAD PACKET · PDF
          </a>
        </section>

        <section>
          <div className="border-b border-white/10 pb-4 mb-stack-md">
            <h2 className="font-label-caps text-label-caps text-primary tracking-[0.2em]">
              QUESTIONS
            </h2>
          </div>
          <p className="font-body-md text-secondary max-w-2xl">
            Email <span className="text-primary">tyfharvey2@gmail.com</span> with your packet, menu
            / product list, and any electrical or refrigeration needs. Applications are reviewed on
            a rolling basis until the floor is full.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}
