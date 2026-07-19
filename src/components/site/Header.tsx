import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { events } from "@/data/events";

const assetBase = import.meta.env.BASE_URL ?? "/";
const festival = events.find((e) => e.featured) ?? events[0];

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/events", label: "EVENTS" },
  { to: "/vendors", label: "VENDORS" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/15">
      <nav className="flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="inline-flex items-center justify-center rounded-full bg-inverse-surface p-1.5 shadow-sm">
              <img
                src={`${assetBase}og-image.png`}
                alt="Dungeon Series"
                className="h-7 md:h-9 w-auto object-contain"
              />
            </span>
          </Link>
          <div className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="font-label-caps text-label-caps text-on-background/70 hover:text-on-background transition-colors pb-1"
                activeProps={{
                  className:
                    "font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/dungeonseries/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline font-label-caps text-label-caps text-primary hover:text-primary-container transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href={festival.ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block bg-primary-container text-white px-8 py-3 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95"
          >
            GET TICKETS
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 text-on-background hover:text-primary transition-colors"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/15 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="font-label-caps text-label-caps text-on-background/80 hover:text-primary transition-colors"
                activeProps={{
                  className:
                    "font-label-caps text-label-caps text-primary transition-colors",
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/dungeonseries/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="font-label-caps text-label-caps text-primary hover:text-primary-container transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href={festival.ticketUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 bg-primary-container text-white text-center px-8 py-3 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95"
            >
              GET TICKETS
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
