import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackgroundMusic } from "./BackgroundMusic";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md noise-overlay">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <BackgroundMusic />
    </div>
  );
}
