"use client";

import { useMemo } from "react";

interface AgentBadgeProps {
  source: "gmail" | "sample";
  timeSinceLatest: string;
}

export function AgentBadge({ source, timeSinceLatest }: AgentBadgeProps) {
  const { label, tone } = useMemo(() => {
    if (source === "gmail") {
      return { label: "Live Gmail", tone: "bg-agent-indigo/20 text-agent-sky border-agent-indigo/40" };
    }
    return { label: "Demo Sandbox", tone: "bg-amber-500/10 text-amber-300 border-amber-400/30" };
  }, [source]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-100 ${tone}`}>
        <span className="h-2 w-2 rounded-full bg-current"></span>
        {label}
      </span>
      <span className="text-xs text-slate-400">Latest email processed {timeSinceLatest}</span>
    </div>
  );
}
