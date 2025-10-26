interface ExecutiveBriefProps {
  text: string;
}

export function ExecutiveBrief({ text }: ExecutiveBriefProps) {
  return (
    <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-card">
      <h2 className="text-lg font-semibold text-slate-100">
        <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-agent-indigo/20 text-agent-sky">
          ✦
        </span>
        Executive Briefing
      </h2>
      <p className="mt-4 whitespace-pre-line text-sm text-slate-200 sm:text-base">{text}</p>
    </section>
  );
}
