import type { ScheduleSlot } from "@/data/events";

type ScheduleTableProps = {
  items: ScheduleSlot[];
  compact?: boolean;
  highlight?: string[];
  title?: string;
  subtitle?: string;
};

export function ScheduleTable({
  items,
  compact = false,
  highlight = [],
  title,
  subtitle,
}: ScheduleTableProps) {
  const isHighlighted = (artist: string) =>
    highlight.some((h) => artist.toLowerCase().includes(h.toLowerCase()));

  return (
    <div>
      {!compact && (title || subtitle) && (
        <div className="text-center mb-10">
          {subtitle && (
            <p className="font-label-caps text-label-caps text-primary-container tracking-[0.3em] mb-3">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-background uppercase">
              {title}
            </h2>
          )}
        </div>
      )}
      {compact && title && (
        <h3 className="font-headline-md text-headline-md md:text-headline-lg text-on-background uppercase tracking-[0.15em] mb-6 text-center">
          {title}
        </h3>
      )}
      <div className={`space-y-2 ${compact ? "max-w-2xl mx-auto" : ""}`}>
        {items.map((slot, i) => (
          <div
            key={`${slot.time}-${slot.artist}-${i}`}
            className={`flex items-center justify-between gap-4 glass-panel ${
              compact ? "px-4 py-3" : "px-6 py-4"
            } ${isHighlighted(slot.artist) ? "border-primary-container/40" : ""}`}
          >
            <span
              className={`font-label-caps tracking-[0.15em] text-primary-container tabular-nums shrink-0 ${
                compact ? "text-[11px] md:text-xs" : "text-xs md:text-sm"
              }`}
            >
              {slot.time}
            </span>
            <span className="flex-1 border-b border-white/10 mx-2 hidden sm:block" />
            <span
              className={`font-headline-md uppercase text-on-background text-right ${
                compact ? "text-sm md:text-base" : "text-base md:text-lg"
              } ${isHighlighted(slot.artist) ? "text-primary-container" : ""}`}
            >
              {slot.artist}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
