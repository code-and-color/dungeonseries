import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/events", label: "EVENTS" },
  { to: "/pricing", label: "PRICING" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/15">
      <nav className="flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center">
            <img
              src="/og-image.png"
              alt="Dungeon Series"
              className="h-8 md:h-10 w-auto object-contain"
            />
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
          <Link
            to="/events"
            className="bg-primary-container text-white px-8 py-3 font-label-caps text-label-caps hover:brightness-110 transition-all active:scale-95"
          >
            GET TICKETS
          </Link>
        </div>
      </nav>
    </header>
  );
}
