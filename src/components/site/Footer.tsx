const assetBase = import.meta.env.BASE_URL ?? "/";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-margin-desktop py-stack-lg gap-stack-md max-w-container-max mx-auto">
        <div className="flex flex-col gap-4">
          <img
            src={`${assetBase}og-image.png`}
            alt="Dungeon Series"
            className="h-8 w-auto object-contain brightness-150"
          />
          <p className="font-label-caps text-[10px] text-on-secondary-fixed-variant tracking-widest uppercase">
            © 2026 DUNGEON SERIES · 4301 S DREXEL BLVD, CHICAGO, IL 60653
          </p>
        </div>
        <div className="flex gap-8 md:gap-12">
          <a
            href="https://www.instagram.com/dungeonseries/"
            target="_blank"
            rel="noreferrer"
            className="font-label-caps text-label-caps text-on-secondary-fixed-variant hover:text-primary transition-colors"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  );
}
