import { generateEmailSummary } from "@/lib/emailAgent";
import { AgentBadge } from "@/components/AgentBadge";
import { ExecutiveBrief } from "@/components/ExecutiveBrief";
import { HighlightsPanel } from "@/components/HighlightsPanel";
import { SenderLeaderboard } from "@/components/SenderLeaderboard";
import { ActionItems } from "@/components/ActionItems";
import { MessageTimeline } from "@/components/MessageTimeline";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const summary = await generateEmailSummary();

  return (
    <div className="space-y-10">
      <AgentBadge source={summary.source} timeSinceLatest={summary.timeSinceLatest} />
      <ExecutiveBrief text={summary.executiveBrief} />
      <HighlightsPanel highlights={summary.highlights} totalMessages={summary.totalMessages} />
      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <MessageTimeline messages={summary.messages} />
        <div className="space-y-6">
          <ActionItems items={summary.actionItems} />
          <SenderLeaderboard senders={summary.senders} />
        </div>
      </div>
    </div>
  );
}
