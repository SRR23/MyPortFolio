/**
 * Calm ambient backdrop: slow aurora-style color washes + a faint engineering grid.
 * No busy text — reads as intentional “product” polish rather than novelty.
 */
export default function AmbientBackground() {
  return (
    <div
      className="ambient pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Base + soft top spotlight */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-25%,rgba(45,212,191,0.08),transparent_50%)]" />

      {/* Precision grid (very low contrast) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Drifting color fields */}
      <div
        className="ambient-drift-a absolute -left-[18%] -top-[12%] h-[min(70vw,28rem)] w-[min(70vw,28rem)] rounded-full bg-gradient-to-br from-teal-400/25 via-cyan-500/10 to-transparent blur-[90px]"
        aria-hidden
      />
      <div
        className="ambient-drift-b absolute -right-[12%] top-[12%] h-[min(65vw,26rem)] w-[min(65vw,26rem)] rounded-full bg-gradient-to-bl from-violet-500/22 via-indigo-500/8 to-transparent blur-[96px]"
        aria-hidden
      />
      <div
        className="ambient-drift-c absolute bottom-[-8%] left-[18%] h-[min(55vw,22rem)] w-[min(90vw,36rem)] rounded-full bg-gradient-to-t from-rose-500/10 via-amber-500/5 to-transparent blur-[100px]"
        aria-hidden
      />
      <div
        className="ambient-drift-d absolute left-1/2 top-[38%] h-[min(50vw,18rem)] w-[min(50vw,18rem)] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/8 via-transparent to-teal-500/8 blur-[72px]"
        aria-hidden
      />

      {/* Horizon line + read fade */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090b]/90 to-transparent" />
    </div>
  )
}
