import { Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800/60 bg-[#0B0F12]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">Stay connected</h3>
            <p className="mt-1 text-sm text-slate-400">Follow for updates, drops, and highlights.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@deepakyadavok"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-300 transition hover:border-red-400/50 hover:bg-red-500/20 hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-red-500/40"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/deepak._x0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 transition hover:border-pink-400/50 hover:bg-pink-500/20 hover:text-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-800/60 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} dkeditzofficial. All rights reserved.</p>
          <p className="text-slate-600">Dark‑mode • Futuristic • Electric blue</p>
        </div>
      </div>
    </footer>
  );
}
