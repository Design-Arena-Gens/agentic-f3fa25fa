import type { EmailInsight } from "@/types/email";

interface HighlightsPanelProps {
  highlights: EmailInsight[];
  totalMessages: number;
}

const gradientPalette = [
  "from-agent-sky/80 via-agent-indigo/70 to-blue-900/80",
  "from-emerald-500/40 via-emerald-400/20 to-emerald-900/60",
  "from-amber-500/40 via-amber-400/20 to-orange-900/60",
  "from-purple-500/40 via-purple-400/20 to-indigo-900/60"
];

export function HighlightsPanel({ highlights, totalMessages }: HighlightsPanelProps) {
  if (highlights.length === 0) {
    return (
      <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-slate-100">Key Themes</h2>
        <p className="mt-4 text-sm text-slate-400">No dominant themes detected in the current inbox sample.</p>
      </section>
    );
  }

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-100">Key Themes ({highlights.length})</h2>
        <span className="text-xs uppercase tracking-wide text-slate-400">Across {totalMessages} messages</span>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {highlights.map((highlight, index) => {
          const gradient = gradientPalette[index % gradientPalette.length];
          return (
            <article
              key={highlight.label}
              className={`rounded-3xl border border-slate-800 bg-gradient-to-br ${gradient} p-5 transition hover:translate-y-px hover:border-agent-sky/40`}
            >
              <h3 className="text-base font-semibold text-slate-50">{highlight.label}</h3>
              <p className="mt-2 text-sm text-slate-100/80">{highlight.description}</p>
              <p className="mt-3 text-xs text-slate-200/60">Signal detected in {highlight.emails.length} messages</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
