# GrindBuddy — Agent Protocol

Read this file before writing any code in this repo. Compatible with Claude Code,
OpenClaw, and any other AI coding agent.

## What GrindBuddy is

Execution platform for digital builders — team matching, AI buddy (GrindBot),
collaborative workspace (Kanban), marketplace, dashboard.

**Status: PAUSED. Frontend is complete with mock data and localStorage auth.
Backend does not exist yet. Do not start backend work without an explicit decision
from Emmanuel on stack, scope, and priority.**

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · React Router 7
**i18n:** EN / FR / Chinese (localStorage-persisted)
**Backend:** None yet — all data is mocked, auth is localStorage only.

## Session start — do this first, every time

1. Confirm the project is un-paused before doing any implementation work.
2. Read `docs/BUILD-CHECKLIST.md` in full.
3. Read `docs/ORG-STATUS.md` if it exists — if it looks stale, note it.
4. Audit unchecked items against actual code. Update checkboxes.
5. Report the 1–3 next items to tackle before writing any code.

## Session end

1. Update `docs/BUILD-CHECKLIST.md` — one line per completed item.
2. Commit checklist alongside code in the same commit.
3. Push to `origin` (this repo's remote — never the workspace root).

## Critical rules

- **This project is PAUSED. Do not implement backend features until explicitly asked.**
- localStorage auth is for development only — never ship to production without
  replacing it with a real auth system (httpOnly cookie or secure session).
- Every new UI string needs translation keys in EN, FR, and Chinese before the
  component is considered complete.
- GrindBot (AI buddy) should use the Claude API when implemented — no generic
  OpenAI wrapper unless explicitly decided.
- Do not add dependencies without flagging them — self-hosted alternatives preferred.

## Key file locations

| What | Where |
|---|---|
| App routes | `src/app/routes.tsx` |
| Auth context | `src/app/context/AuthContext.tsx` |
| Components | `src/app/components/` |
| i18n dictionaries | `src/i18n/dictionary/` (en.json, fr.json, ch.json) |
| i18n hook | `src/i18n/I18nProvider.tsx` |

## Skills to invoke (Claude Code) — when un-paused

`/senior-fullstack` for backend decision + scaffolding · `/ui-ux-pro-max` for
design-token + accessibility pass · `/senior-secops` for auth hardening ·
`/claude-api` for GrindBot AI integration
