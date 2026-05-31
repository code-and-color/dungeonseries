import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Membership · Dungeon Series Chicago" },
      {
        name: "description",
        content:
          "Choose your tier of immersion at Dungeon Series — General, VIP, or Inner Circle. Chicago underground membership.",
      },
      { property: "og:title", content: "Membership · Dungeon Series" },
      {
        property: "og:description",
        content: "From entry-level chaos to restricted inner-circle dominance.",
      },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "GENERAL",
    sub: "THE ENTRY POINT",
    price: "$49",
    features: ["Standard Event Access", "Member Lounge Access", "Digital Archive Entry"],
    cta: "INITIATE",
    style: "outline" as const,
  },
  {
    name: "VIP",
    sub: "THE PULSE",
    price: "$149",
    features: [
      "Priority Entry Always",
      "Restricted Sector Access",
      "Monthly Guest Pass (1)",
      "VIP Bottle Service Rates",
    ],
    cta: "ASCEND NOW",
    style: "primary" as const,
    badge: "MOST DEMANDED",
  },
  {
    name: "INNER CIRCLE",
    sub: "THE ABSOLUTE",
    price: "$499",
    features: [
      "Private Sanctuary Access",
      "Personal Concierge 24/7",
      "Global Venue Reciprocity",
      "Invite-Only Secret Events",
    ],
    cta: "SEIZE POWER",
    style: "ghost-primary" as const,
  },
];

const perks: Array<[string, string, string, string]> = [
  ["Global Event Access", "✓", "✓", "✓"],
  ["Priority Security Clearance", "—", "✓", "✓"],
  ["The Vault Digital Access", "Basic", "Full", "Admin Level"],
  ["Private Transport Booking", "—", "Standard", "Armored Elite"],
  ["After-Hours Sanctuary Access", "—", "Limited", "✓"],
  ["Personal Brand Consultant", "—", "—", "✓"],
];

function PricingPage() {
  return (
    <SiteLayout>
      <div className="pb-stack-lg">
        {/* Hero */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop mt-12 mb-20 text-center">
          <span className="font-label-caps text-label-caps text-primary-container mb-4 block uppercase">
            ACCESS PROTOCOLS
          </span>
          <h2 className="font-headline-xl text-headline-xl mb-6 uppercase">
            LEVEL UP YOUR
            <br />
            <span className="text-primary-container">EXISTENCE.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            Choose your tier of immersion. From entry-level chaos to restricted inner-circle
            dominance. No compromises. No retreat.
          </p>
        </section>

        {/* Cards */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`glass-card p-10 flex flex-col justify-between transition-all duration-300 neon-hover group h-full ${
                t.style === "primary"
                  ? "border-primary-container relative scale-105 z-10 bg-surface-container-high/60"
                  : ""
              }`}
            >
              {t.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 font-label-caps text-label-caps uppercase whitespace-nowrap">
                  {t.badge}
                </div>
              )}
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase">
                  {t.name}
                </h3>
                <p
                  className={`font-label-caps text-label-caps mb-8 uppercase ${
                    t.style === "primary" ? "text-primary-container" : "text-secondary"
                  }`}
                >
                  {t.sub}
                </p>
                <div className="mb-8">
                  <span className="font-headline-lg text-headline-lg text-primary-container">
                    {t.price}
                  </span>
                  <span className="font-body-md text-body-md text-secondary">/MONTH</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-primary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="font-body-md text-body-md text-on-surface">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full font-label-caps text-label-caps py-4 uppercase transition-all ${
                  t.style === "primary"
                    ? "bg-primary-container text-on-primary-container hover:brightness-110 active:scale-95"
                    : t.style === "ghost-primary"
                      ? "border border-primary-container text-primary-container hover:bg-primary-container hover:text-on-primary-container"
                      : "border border-white text-on-background hover:bg-white hover:text-black"
                }`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </section>

        {/* Perk Architecture */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop mb-32">
          <div className="mb-12">
            <h2 className="font-headline-lg text-headline-lg uppercase mb-4">PERK ARCHITECTURE</h2>
            <div className="h-1 w-24 bg-primary-container" />
          </div>
          <div className="overflow-x-auto glass-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-8 font-label-caps text-label-caps text-secondary uppercase">
                    FEATURE SET
                  </th>
                  <th className="p-8 font-label-caps text-label-caps text-secondary uppercase text-center">
                    GENERAL
                  </th>
                  <th className="p-8 font-label-caps text-label-caps text-primary-container uppercase text-center bg-white/5">
                    VIP
                  </th>
                  <th className="p-8 font-label-caps text-label-caps text-secondary uppercase text-center">
                    INNER CIRCLE
                  </th>
                </tr>
              </thead>
              <tbody className="font-body-md text-body-md">
                {perks.map(([feature, g, v, ic], i) => (
                  <tr
                    key={feature}
                    className={`hover:bg-white/5 transition-colors ${
                      i < perks.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <td className="p-8">{feature}</td>
                    {[g, v, ic].map((cell, idx) => (
                      <td
                        key={idx}
                        className={`p-8 text-center ${idx === 1 ? "bg-white/5" : ""} ${
                          cell === "—" ? "text-secondary-fixed-dim" : ""
                        }`}
                      >
                        {cell === "✓" ? (
                          <span className="material-symbols-outlined text-primary">check</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* No Regrets */}
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-[0.2] grayscale hover:grayscale-0 duration-700 transition-all"
              alt="High-energy Chicago club scene cut by red lasers."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsvrMmnJ_o6Bs4pyN4lcCUBFXlrApJolMIIk2TO8-92eZOWqTRAB33cngkM2qRSbjSzVyo0_keOPq1RP78T_BQSLqi8rsSoDkgAUz3PAG5eCKRX9ZQmyuL6LgeuM-mcNzBnJtbqb6QCZXawUEVcOcYVSnFtnyosYib9Lid0DuQAx0x5f645FKUXUMVaOVvZ3L-xajB8F7qm-bH_UE1oV8q0k_pl8Ep6f8kQDM99r0vVQAssucrnDNvqaP7-GvxTonpY2NMw-8blXOX"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop w-full">
            <div className="max-w-2xl">
              <h2 className="font-headline-xl text-headline-xl uppercase mb-8 leading-none">
                NO
                <br />
                <span className="text-primary-container">REGRETS.</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface mb-10">
                This isn't just a membership; it's a permanent shift in frequency. Once you enter
                the Dungeon, Chicago will never look the same. Are you ready to commit?
              </p>
              <div className="flex flex-wrap gap-stack-md">
                <button className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-10 py-5 hover:brightness-110 transition-all uppercase tracking-widest active:scale-95">
                  BURN THE SHIPS
                </button>
                <button className="border border-white/20 backdrop-blur-md text-on-background font-label-caps text-label-caps px-10 py-5 hover:bg-white hover:text-black transition-all uppercase tracking-widest">
                  LURK FOR NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
