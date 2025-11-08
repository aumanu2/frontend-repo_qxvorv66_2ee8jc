import { Flame, Rocket, Crown, Badge } from "lucide-react";

const games = [
  {
    key: 'gta',
    title: 'GTA',
    desc: 'Open‑world chaos, cinematic visuals, and limitless mods.',
    accent: 'from-sky-500/20 to-sky-400/10',
    icon: Rocket,
  },
  {
    key: 'pubg',
    title: 'PUBG',
    desc: 'Tactical battlegrounds and high‑octane competitive moments.',
    accent: 'from-cyan-500/20 to-cyan-400/10',
    icon: Crown,
  },
  {
    key: 'bgmi',
    title: 'BGMI',
    desc: 'Refined battle royale built for clutch plays and highlights.',
    accent: 'from-blue-500/20 to-blue-400/10',
    icon: Flame,
  },
  {
    key: 'fs20',
    title: 'FS 20',
    desc: 'Farming sim mastery with ultra‑smooth, immersive sessions.',
    accent: 'from-indigo-500/20 to-indigo-400/10',
    icon: Badge,
  },
];

function GameCard({ title, desc, accent, Icon }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-800/70 bg-gradient-to-b from-slate-900/60 to-[#0B0F12] p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-20px] hover:shadow-sky-500/40">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-60 mix-blend-overlay`} />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-inset ring-sky-400/30">
          <Icon className="h-5 w-5 text-sky-300" />
        </div>
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
        <p className="mt-2 text-sm text-slate-400">{desc}</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-sm font-medium text-sky-300 underline-offset-4 hover:underline"
          >
            View content
          </a>
        </div>
      </div>
    </article>
  );
}

export default function GamesGrid() {
  return (
    <section id="games" className="relative mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Featured Games</h2>
          <p className="mt-1 text-slate-400">A grid‑based layout with prominent cards for each title.</p>
        </div>
        <span className="hidden rounded-md border border-slate-800/70 bg-slate-900/60 px-3 py-1 text-xs text-slate-400 md:block">
          Electric blue aesthetic
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {games.map((g) => (
          <GameCard key={g.key} title={g.title} desc={g.desc} accent={g.accent} Icon={g.icon} />
        ))}
      </div>
    </section>
  );
}
