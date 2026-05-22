# Replai

Your AI executive assistant. Reads your inbox, drafts replies, extracts tasks, and schedules your week — automatically.

## What it does

Every time you hit "Run Agent" (or on a 15-minute cron), Replai:

- Fetches your unread Gmail
- Hands each email to Claude for analysis — priority, summary, action items
- Drafts a reply if one is needed
- Adds tasks to your dashboard
- Creates Google Calendar events for any deadlines or meetings mentioned

You see everything on a dashboard, with full visibility into what the agent did and why.

## Tech

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4 + shadcn/ui
- Clerk for auth + billing
- Drizzle ORM on Postgres (Railway)
- Anthropic Claude (Haiku 4.5) via the AI SDK
- Google APIs (Gmail + Calendar)

## Run locally

```bash
bun install
bunx drizzle-kit push   # push schema to your Postgres
bun run dev             # http://localhost:3000
```

You'll need a `.env.local` with:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
ANTHROPIC_API_KEY=
ENCRYPTION_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
