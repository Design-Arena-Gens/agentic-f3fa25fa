import type { SenderHighlight } from "@/types/email";

interface SenderLeaderboardProps {
  senders: SenderHighlight[];
}

export function SenderLeaderboard({ senders }: SenderLeaderboardProps) {
  if (senders.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="text-lg font-semibold text-slate-100">Most Active Senders</h2>
      <ul className="mt-4 space-y-4">
        {senders.map((sender) => (
          <li
            key={sender.sender}
            className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 transition hover:border-agent-sky/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-semibold text-slate-100">{sender.sender}</span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                {sender.count} {sender.count === 1 ? "email" : "emails"}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              {sender.subjects.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
