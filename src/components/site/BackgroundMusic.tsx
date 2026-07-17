import { useEffect, useState } from "react";

const TRACK_URL = `${import.meta.env.BASE_URL ?? "/"}media/background-loop.mp3`;

// Module-level singleton so audio survives route changes and re-mounts.
let audioEl: HTMLAudioElement | null = null;
let started = false;

function getAudio(): HTMLAudioElement {
  if (!audioEl) {
    audioEl = new Audio(TRACK_URL);
    audioEl.loop = true;
    audioEl.preload = "auto";
    audioEl.volume = 0.20;
  }
  return audioEl;
}

export const SPLASH_DISMISSED_EVENT = "ds-splash-dismissed";

export function startBackgroundMusic() {
  const a = getAudio();
  started = true;
  a.play().catch(() => {
    /* autoplay blocked — user can tap the toggle */
  });
  window.dispatchEvent(new CustomEvent("ds-music-state"));
}

export function BackgroundMusic() {
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = getAudio();

    // If splash was already dismissed (route change / refresh after enter), resume.
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("ds-splash-seen") === "1" &&
      a.paused
    ) {
      a.play().catch(() => {});
    }

    const onSplash = () => startBackgroundMusic();
    const onState = () => {
      setPlaying(!a.paused);
      setMuted(a.muted);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    window.addEventListener(SPLASH_DISMISSED_EVENT, onSplash);
    window.addEventListener("ds-music-state", onState);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);

    setPlaying(!a.paused);
    setMuted(a.muted);

    return () => {
      window.removeEventListener(SPLASH_DISMISSED_EVENT, onSplash);
      window.removeEventListener("ds-music-state", onState);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const a = getAudio();
    if (!started || a.paused) {
      started = true;
      a.muted = false;
      a.play().catch(() => {});
      setMuted(false);
    } else if (a.muted) {
      a.muted = false;
      setMuted(false);
    } else {
      a.muted = true;
      setMuted(true);
    }
  };

  const isOn = playing && !muted;

  return (
    <button
      onClick={toggle}
      aria-label={isOn ? "Mute background music" : "Play background music"}
      className="fixed bottom-4 right-4 z-[90] w-11 h-11 rounded-full bg-background/80 backdrop-blur border border-primary-container/50 text-primary-container flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors shadow-lg"
    >
      <span className="material-symbols-outlined text-[22px]">
        {isOn ? "volume_up" : "volume_off"}
      </span>
    </button>
  );
}
