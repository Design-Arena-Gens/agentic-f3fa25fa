export interface EmailMessage {
  id: string;
  subject: string;
  from: string;
  snippet: string;
  body: string;
  date: string; // ISO string
}

export interface EmailInsight {
  label: string;
  description: string;
  emails: string[];
}

export interface SenderHighlight {
  sender: string;
  count: number;
  subjects: string[];
}

export interface EmailSummary {
  generatedAt: string;
  totalMessages: number;
  timeframe: {
    start: string;
    end: string;
  };
  executiveBrief: string;
  highlights: EmailInsight[];
  senders: SenderHighlight[];
  actionItems: string[];
  messages: EmailMessage[];
  source: "gmail" | "sample";
  timeSinceLatest: string;
}
