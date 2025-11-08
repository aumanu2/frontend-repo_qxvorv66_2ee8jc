import { Youtube, Instagram, Twitter } from "lucide-react";

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
            <a href="#" aria-label="YouTube" className="inline-flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-300 transition hover:border-red-400/50 hover:text-red-200">
              <Youtube className="h-4 w-4" /> YouTube
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex items-center gap-2 rounded-md border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-sm font-medium text-pink-300 transition hover:border-pink-400/50 hover:text-pink-200">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="#" aria-label="Twitter" className="inline-flex items-center gap-2 rounded-md border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-300 transition hover:border-sky-400/50 hover:text-sky-200">
              <Twitter className="h-4 w-4" /> Twitter
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
