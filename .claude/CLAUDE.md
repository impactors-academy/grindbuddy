# grindbuddy — Session Protocol

Platform type: **Web App / SaaS** (frontend done, backend PAUSED)
Stack: Next.js · Tailwind (frontend complete) · Backend TBD
Status: Frontend done · Backend PAUSED — do not start without explicit instruction

---

## ⚠️ PAUSED — READ BEFORE DOING ANYTHING

GrindBuddy backend work is explicitly paused. Do NOT:
- Start backend implementation
- Choose a backend stack
- Write any server-side code
- Set up a database

Resume only when Emmanuel explicitly says to unpause. When resumed, read:
- `[workspace]/docs/PLATFORM-STANDARDS.md` → Web App / SaaS section
- `docs/BUILD-CHECKLIST.md` → open items for backend decisions

---

## Reference docs — read when triggered

| Doc | Read when |
|---|---|
| `docs/BUILD-CHECKLIST.md` | **Every session start** — even while paused, audit frontend open items |
| `docs/ORG-STATUS.md` | Checking org-wide status · when considering resuming |
| `[workspace]/docs/PLATFORM-STANDARDS.md` | **When unpaused** — Web App/SaaS section for full stack decision |
| `[workspace]/docs/DEVOPS-GUIDE.md` | **When unpaused** — branch setup, CI, staging |
| `[workspace]/MASTER-CHECKLIST.md` | Security (Phase 0C) · scaling (Phase 7) · when grindbuddy is unpaused |

---

## On every session start

1. Read `docs/BUILD-CHECKLIST.md` in full.
2. If work is requested on paused backend items — stop and confirm with Emmanuel first.
3. Frontend work is allowed — i18n (FR/Chinese), design tokens, accessibility.
4. Report only frontend-safe next items unless backend is explicitly unpaused.

## On every session end

1. Update `docs/BUILD-CHECKLIST.md` for anything completed.
2. Commit in the same commit as the code it describes.
3. Push to `origin` (github.com/impactors-academy/grindbuddy) from this directory.

---

## DevOps rules (see `[workspace]/docs/DEVOPS-GUIDE.md` — apply when unpaused)

```
Branches:   feature/* → develop → main
CI:         GitHub Actions — tsc + lint + test + build (Phase 0B item)
Staging:    develop → Coolify staging (when unpaused)
Production: main → Coolify production (when unpaused)
```

## Platform-specific rules (frontend, safe to action now)

- i18n: FR and Chinese translations incomplete — safe to finish
- Design tokens: must match org canonical values from MASTER-CHECKLIST.md
- Accessibility: WCAG 2.1 AA — safe to action
- Auth: localStorage auth is a placeholder — do not ship to users until replaced
- Backend decision: Supabase self-hosted is the current leaning — confirm before starting
