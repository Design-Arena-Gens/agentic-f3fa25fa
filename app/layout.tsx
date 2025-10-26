import "./globals.css";
import type { Metadata } from "next";

const title = "Inbox Intelligence Agent";
const description = "An autonomous agent that reads your inbox and distills the key takeaways.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 sm:px-12">
          <header className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Inbox Intelligence Agent</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                Connect your email account securely, let the agent sweep your inbox, and receive a clear
                briefing of what matters most.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-200 shadow-sm transition hover:border-agent-sky hover:text-agent-sky"
              href="https://mail.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Open Inbox
            </a>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
            Built with modern web technologies and designed for secure inbox intelligence.
          </footer>
        </div>
      </body>
    </html>
  );
}
