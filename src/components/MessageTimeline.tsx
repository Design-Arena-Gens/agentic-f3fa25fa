import { format } from "date-fns";
import type { EmailMessage } from "@/types/email";

interface MessageTimelineProps {
  messages: EmailMessage[];
}

export function MessageTimeline({ messages }: MessageTimelineProps) {
  if (messages.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-100">Message Timeline</h2>
        <span className="text-xs uppercase tracking-wide text-slate-400">{messages.length} emails</span>
      </div>
      <ol className="mt-6 space-y-4">
        {messages.map((message) => (
          <li key={message.id} className="relative rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-agent-sky">{message.subject}</p>
                <p className="text-xs text-slate-400">{message.from}</p>
              </div>
              <time className="text-xs text-slate-500">
                {format(new Date(message.date), "MMM d, yyyy • h:mm a")}
              </time>
            </div>
            <p className="mt-3 text-sm text-slate-200">{message.snippet}</p>
            <details className="mt-3 text-xs text-slate-400">
              <summary className="cursor-pointer text-agent-sky/80">Expand body</summary>
              <pre className="mt-2 whitespace-pre-wrap rounded-xl bg-slate-900/80 p-3 text-left text-slate-300">
                {message.body}
              </pre>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}
