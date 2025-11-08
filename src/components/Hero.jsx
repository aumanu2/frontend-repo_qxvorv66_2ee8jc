import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col items-start justify-center px-4 py-24 md:min-h-[85vh] md:px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F12]/20 via-[#0B0F12]/60 to-[#0B0F12]" />

        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-sky-300">
            Futuristic multi‑game content hub
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-100 drop-shadow md:text-6xl">
            Elevate your gameplay with a modern, electric experience
          </h1>
          <p className="mt-4 text-slate-300 md:text-lg">
            Discover curated content, mods, and highlights across GTA, PUBG, BGMI, and FS 20 — crafted in a sleek, dark interface with electric blue accents.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#games" className="rounded-md border border-sky-500/40 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-200 shadow-[0_0_30px_-12px] shadow-sky-500/50 transition-colors hover:border-sky-400 hover:text-sky-100">
              Explore the Grid
            </a>
            <a href="#contact" className="rounded-md border border-slate-700/70 bg-slate-800/40 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-600 hover:text-slate-100">
              Connect with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
