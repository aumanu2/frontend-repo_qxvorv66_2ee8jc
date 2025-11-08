import { Rocket, Gamepad2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-[#0B0F12]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0B0F12]/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-sky-500/10 ring-1 ring-inset ring-sky-400/30">
            <Rocket className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:-rotate-12" />
          </span>
          <div className="leading-tight">
            <div className="font-semibold tracking-wide text-slate-100">dkeditzofficial</div>
            <div className="text-xs uppercase tracking-wider text-slate-400">multi‑game hub</div>
          </div>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <a href="#home" className="text-sm text-slate-300 transition-colors hover:text-sky-400">Home</a>
          </li>
          <li>
            <a href="#games" className="text-sm text-slate-300 transition-colors hover:text-sky-400">Games</a>
          </li>
          <li>
            <a href="#contact" className="text-sm text-slate-300 transition-colors hover:text-sky-400">Contact</a>
          </li>
        </ul>

        <a
          href="#games"
          className="inline-flex items-center gap-2 rounded-md border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-300 shadow-[0_0_20px_-8px] shadow-sky-500/40 transition hover:border-sky-400/50 hover:text-sky-200"
        >
          <Gamepad2 className="h-4 w-4" /> Explore Games
        </a>
      </nav>
    </header>
  );
}
