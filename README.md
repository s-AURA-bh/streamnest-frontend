# Pulse frontend

Dark-first frontend foundation for Pulse, a personal growth operating system.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style primitives
- Framer Motion
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Architecture

```text
src/
├── app/                    # Routes, layout, loading UI
├── components/
│   ├── ui/                 # Reusable shadcn-style primitives
│   └── ...                 # Application shell and navigation
├── features/
│   ├── dashboard/          # Dashboard data and composed sections
│   └── shell/              # Reusable feature-route foundation
├── hooks/                  # Shared client hooks
├── lib/                    # Navigation, formatting, class utilities
└── types/                  # Shared TypeScript contracts
```

The dashboard is intentionally data-driven so future API, persistence, AI
reflection, planning, analytics, memory search, and recommendation layers can be
added without restructuring the presentation layer.
