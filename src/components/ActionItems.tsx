interface ActionItemsProps {
  items: string[];
}

export function ActionItems({ items }: ActionItemsProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="text-lg font-semibold text-slate-100">Action Items</h2>
      {items.length === 0 ? (
        <p className="mt-3 text-sm text-slate-400">No explicit action items detected.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-100">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-agent-sky"></span>
              <span className="flex-1 leading-relaxed text-slate-200">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
