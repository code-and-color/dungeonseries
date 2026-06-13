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
            © 2026 DUNGEON SERIES · CHICAGO, IL · NO ESCAPE.
          </p>
        </div>
        <div className="flex gap-8 md:gap-12">
          {["INSTAGRAM", "TWITTER", "YOUTUBE", "TERMS"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-label-caps text-label-caps text-on-secondary-fixed-variant hover:text-primary transition-colors grayscale hover:grayscale-0"
            >
              {s}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-start md:items-end gap-4">
          <p className="font-label-caps text-[10px] text-on-secondary-fixed-variant tracking-widest">
            STAY INFECTED
          </p>
          <div className="flex border-b border-white/20 pb-2 w-64">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent border-none p-0 text-[12px] font-label-caps w-full focus:ring-0 focus:outline-none placeholder:text-on-secondary-fixed-variant/50 text-on-background"
            />
            <button className="text-primary hover:text-primary-container transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
