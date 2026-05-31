import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dungeon Series | The Sanctuary — Chicago Events" },
      {
        name: "description",
        content:
          "Dungeon Series is Chicago's underground sanctuary for high-fidelity sound and exclusive nocturnal events.",
      },
      { property: "og:title", content: "Dungeon Series | The Sanctuary" },
      {
        property: "og:description",
        content:
          "A curated descent into Chicago's electronic subculture and exclusive nocturnal rituals.",
      },
    ],
  }),
  component: HomePage,
});

const socialTiles = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGyPoXkjlzaJOv1peXtw3m5VDfWKGyPkIrDo5H-ftfQL4Y8C_DAgqIInWPDqPyGQM8TZtBjdVgfYuZjvtNi_sNHYjlKTW9cE071eumSPjlQdf_88AQ1ClEiY4dRglVtl7wzLIRwrszcbH21qn9LGMB3c3YTpXxssLI-FSt0Mh6TFvy6GbyX5X7VOXsSMsgrLGHVcOMRlnT8NXCfzDcLI4LZdStz6faoZlam39E_a_iX0OeJB8DHO7C4RVruJMhx6PR7vH3Dg7iahAB",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9pFtBYl0xlp6lKCKJDlAnSQwpYVtUQ4cvn-X59TnEb1nMKwacxbSZMtlD4g0RTNaFp4XByMSwGx56l7LjJGcvjdCBzvZ7OkDgkteOUgqci3xaMCLFSVG29T7ZDBb0g8zmJo9fNS-vRzUQ5kdPR37bq9M6Ia4zHtLkI_-qJzJNtqzookr0Z15doqbUbNQa7i65OKVLWs2RycrXCF9Ftjb5wWwbHpGKKKlIOLMB7KlHWVAKCmKL5GhbpA_GedTxt9ndUsejIZfLdVML",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCRtVg37tWmqVhuMQvYgXT8J0yzWioNz7mWHxcreDx4M5LpDz-0bK0bSbH2NZloUUQnCLJe5N6ZxiwBs_-sS491zP7Jv4rriJlQCGiPp1WXIijyJv8LVIwu46EMFSVOF2z-UsRJ9ne3k7rtqAvO1x-fDInb_i6wvT8RUixSeBk0NOIL1LnOaaIl7XoHgAICiHb3VJyouwL6m6nTWc0oSWvYCMWSzfPBWNAzN1LS8gNS-NNDIfTOtZTZjsO9C9ic2mrHTUbOIqOh2fQ4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBCqSDo5LICAwtdlSR18sHaSabYR672bOTbCc5ZQglKS6iweJ-Op9SEc2lKgt1fCMCJyX4AGtIP-OPvNzC5AWHhSdrCYjL3d6VY6IkYG22RdKrf23-uIlqDDzBUosYVWSlLgUZ8zKvdWQdIsBHMl_GDuYq3ghdJ_k3dTDSkG2asXhFjDUZA3LgShOqUTkoERHm7prT8-h-_K1blabdk9zgCdwN_XtNAezdDPpF8adhJjf31xgQGHl4Q5iCU8nEX2gyo4GiLxsGBuUad",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBgfuYwrYi8tni0OY_iItiHLPBlo7MvUNWZMF9dg-QxxgvazsFQf9dsx8USTla5Anl7w_0bOJtXW17Bs8CE9rS06WQ-h3zi1ZFf0vgTbhQ0vcVj0QCBy_nQgGmZSjB45Vxf_h9vjV6FZfpoKqQKCnDv5tC2b1FESY8Ab32G2akUJXeq9aw8sIAEGX3S6HlkDdy_Td8L7UAskcbDW6dfMR5ZZAcG5mvx0d7hWlGN564B46cadDEBLbLm8rhBjNBeHVuXPTU7rBaVBAQC",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale-[0.4] brightness-[0.3]"
            alt="High-end Chicago underground stage cut by crimson lasers through atmospheric haze."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3rVvJQ07MtxeyYSP5N1vYZ029Zng8Wj2yKlHhCdrYqDjfUUwdBBELXoS9vHHFmY54nCJp-Nf8LXpLsASJMfgC7tMmEoDb57G5oaTJvsc2dH04lxyR0OQHT8ZOZDudqarfWLRiyylU63uai81h065Ghd5G61IC_W5nXbnqr_Oyzx0YqscjQojFUv9DOfXdKmXy2XU83qtrj4MkGPWgCAguUtSileqkNf5iJToJZCvfh6ESmG0X7bb7Zr2Mk9j0V7Epn81XK6UAZRRJ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-3xl">
            <p className="font-label-caps text-label-caps text-primary-container mb-4 tracking-[0.3em]">
              THE SANCTUARY · CHICAGO
            </p>
            <h1 className="font-headline-xl text-headline-xl text-on-background mb-8 leading-none uppercase">
              SANCTUARY <br /> OF SOUND
            </h1>
            <p className="font-body-lg text-body-lg text-on-background/60 mb-10 max-w-xl">
              Enter the perimeter of high-fidelity auditory experiences. A curated descent into the
              depths of Chicago's electronic subculture and exclusive nocturnal events.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-white px-10 py-5 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95 neon-glow">
                GET ACCESS
              </button>
              <button className="border border-white/20 text-white px-10 py-5 font-label-caps text-label-caps hover:bg-white/5 transition-all active:scale-95">
                VIEW CALENDAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rituals — Bento */}
      <section className="py-stack-lg px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-wrap gap-4 justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-2 uppercase">
              FEATURED RITUALS
            </h2>
            <p className="font-body-md text-body-md text-on-background/50">
              Secure your passage to our upcoming sonic installments.
            </p>
          </div>
          <a
            href="/events"
            className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-primary-container hover:border-primary-container transition-colors"
          >
            VIEW ALL EVENTS
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[700px]">
          <div className="lg:col-span-8 group relative overflow-hidden glass-panel min-h-[400px]">
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-60"
              alt="DJ mixing on a Chicago warehouse stage in red neon."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjXZXkOYE81ujAhymCP298ffEctMzYJRFFq2noTjwCe810Lzwf-pbWPJQWk1tYw-hu8C-xjZEt6Zats2XWIYrVmmrpvs81yvo1eUq12ANeChKoqmA20_usgJbN_5rpyKfTD4N_WdYcoRbDdvc_5CzDdCl0fPvRRgUTbSFVAx7i3vpjttIpL2hmakYT8uOYbxkziMBcyW4vlLivHZ9wtPOMZnvjGj-k7Gaym3AQI-wbzjRO-eFYgQXdA6gI2MtoAXuX7XbSrl-omi9N"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="flex gap-2 mb-4">
                <span className="bg-primary-container text-white px-3 py-1 font-label-caps text-[10px]">
                  SOLD OUT
                </span>
                <span className="border border-white/30 text-white px-3 py-1 font-label-caps text-[10px]">
                  EXCLUSIVE
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background mb-2 uppercase">
                VOID // 004 : TECHNO NOIR
              </h3>
              <div className="flex flex-wrap items-center gap-6 text-on-background/60 font-label-caps text-label-caps">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span> OCT
                  24
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">location_on</span> THE
                  VAULT · WEST LOOP
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            {[
              {
                tag: "VINYL ONLY",
                title: "ANALOG DEPTHS",
                cta: "BOOK NOW",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhM2O8A45qNDHZaLa-Z5CbwOKJ9cDzunyTtVMX-2teVu6kDH45JradOpLyZFF885qVcYJ8M0GvkmokuCnayOxoLj5bGNuVXpLnOOULN6tTIyYgE1zZ3Dz5KGiKE4iqvDHmWuHp2oV9JUoyW5e6ri6OZ8ksoLi3kV_khJ9ap9N2HwRJPOT3PTIC2jvsGTc-oNUuRTh34-SMRXu5np2IPBbE4BCIWdQJGe4xuyUhMtuRDQ2aDNcu-6JsnC72aeDRb1H1ffjJZzA9dEzE",
              },
              {
                tag: "MEMBERS ONLY",
                title: "THE RED ROOM",
                cta: "JOIN WAITLIST",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvw48hl7nBi7RNIbgiposCbVqpysIf0vZVe14P0oWmzT4ZbwOdavz2UTUUfgAR0KGYgaV7hUm33d4HpUhHfHEz0Nr9b3tdzAEApGGz4Rq76QtlNnRz6dmIcxD-Out8M-Qz8jS9Qc9yLR9DyRmOTuc_PrySDuXwktWJZq5RLZ76OhiZtLjUnssc0gnFKwHHKZi6HjPH--Y4ZeLycF_cAJMT5SxYfqnzmW2_ioCf26-wvQK9G_mOVFGPNOhZ_7vHCaCDoUu5-TGJHw4E",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="lg:h-1/2 min-h-[280px] group relative overflow-hidden glass-panel"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-40"
                  alt={c.title}
                  src={c.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="font-label-caps text-[10px] text-primary-container mb-1">{c.tag}</p>
                  <h4 className="font-headline-md text-[24px] text-on-background mb-4 uppercase">
                    {c.title}
                  </h4>
                  <button className="font-label-caps text-[10px] text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">
                    {c.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-stack-lg bg-surface-container-lowest">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="glass-panel p-10 md:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden md:block">
              <span
                className="material-symbols-outlined text-[400px] absolute -right-20 -top-20 text-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield
              </span>
            </div>
            <div className="max-w-xl relative z-10">
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-6 uppercase">
                BECOME AN INITIATE
              </h2>
              <p className="font-body-lg text-body-lg text-on-background/60 mb-10">
                Gain priority access to all Chicago events, exclusive releases, and the private
                Discord sanctuary. No escape from the rhythm.
              </p>
              <div className="flex flex-wrap items-center gap-10">
                <div>
                  <p className="font-label-caps text-[10px] text-on-background/40 uppercase tracking-widest mb-2">
                    Starting from
                  </p>
                  <p className="font-headline-md text-headline-md text-primary-container">
                    $49<span className="text-on-background/40 text-body-md">/mo</span>
                  </p>
                </div>
                <button className="bg-primary-container text-white px-12 py-5 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95 neon-glow">
                  START MEMBERSHIP
                </button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4 relative z-10">
              {[
                { icon: "star", title: "PRIORITY PASS", text: "Skip the queue for every ritual." },
                { icon: "lock", title: "SECRET SETS", text: "Exclusive member-only locations." },
                { icon: "token", title: "DIGITAL ASSETS", text: "Limited edition event drops." },
                { icon: "forum", title: "COMMUNITY", text: "Access to the inner circle." },
              ].map((p) => (
                <div key={p.title} className="p-6 border border-white/10 bg-white/5">
                  <span className="material-symbols-outlined text-primary-container mb-4">
                    {p.icon}
                  </span>
                  <h5 className="font-label-caps text-label-caps mb-2">{p.title}</h5>
                  <p className="text-on-background/40 text-[12px]">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-stack-lg px-6 md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <h2 className="font-headline-md text-headline-md text-on-background mb-12 text-center uppercase">
          @DUNGEONSERIES FLOW
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {socialTiles.map((src, i) => (
            <div key={i} className="aspect-square glass-panel overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
                alt=""
                src={src}
              />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
