# grindbuddy — Session Protocol

Platform type: **Web App / SaaS** (frontend done · backend PAUSED)
Stack: Next.js · Tailwind (frontend) · Backend TBD (Supabase self-hosted is current leaning)
Status: Frontend complete · Backend PAUSED — do NOT start without explicit instruction

---

## ⚠️ BACKEND PAUSED

Do NOT start, design, or suggest backend implementation without Emmanuel's explicit go-ahead.
Safe frontend work: i18n (FR/Chinese completion), design tokens, accessibility pass.

---

## Reference docs — read when triggered

| Doc | Read when |
|---|---|
| `docs/BUILD-CHECKLIST.md` | **Every session start** — even while paused, check frontend open items |
| `docs/ORG-STATUS.md` | Org-wide status · when considering resuming backend |
| `[workspace]/docs/PLATFORM-STANDARDS.md` → Web App/SaaS section | **When unpaused** — full stack decision reference |
| `[workspace]/docs/DEVOPS-GUIDE.md` | **When unpaused** — branch setup, CI, staging |
| `[workspace]/MASTER-CHECKLIST.md` | Security (Phase 0C) · scaling (Phase 7) |

---

## On every session start

1. Read `docs/BUILD-CHECKLIST.md` in full.
2. If backend work is requested → stop and confirm with Emmanuel first.
3. Frontend-safe work only: i18n, tokens, a11y, UI polish.
4. Report only frontend-safe next items unless backend is explicitly unpaused.

## On every session end

1. Update `docs/BUILD-CHECKLIST.md` for anything completed.
2. Commit in the same commit as the code it describes.
3. Push to `origin` (github.com/impactors-academy/grindbuddy).

---

## Skills — invoke by task

### Frontend (safe to action now)
| Task | Skill |
|---|---|
| i18n: FR/Chinese translations | `/senior-frontend` |
| Design token alignment (must match MASTER-CHECKLIST canonical values) | `/design-system` |
| Accessibility pass (WCAG 2.1 AA) | `/a11y-audit` |
| UI polish, component refinement | `/ui-ux-pro-max` · `/senior-frontend` |
| Animation, motion refinement | `/motion-framer` · `/gsap-scrolltrigger` |
| Component sourcing | `/21st-dev` |

### When backend is unpaused (do not action until confirmed)
| Task | Skill |
|---|---|
| Backend stack decision | read `[workspace]/docs/PLATFORM-STANDARDS.md` → Web App/SaaS section first |
| Supabase self-hosted setup | `/senior-devops` · `/senior-architect` |
| Auth (Supabase Auth — replace localStorage) | `/senior-fullstack` |
| DB schema design | `/database-schema-designer` |
| Stripe integration | `/stripe-integration-expert` |
| API routes, business logic | `/senior-backend` · `/senior-fullstack` |
| Test suite | `/tdd-guide` · `/api-test-suite-builder` |
| Coolify deployment | `/senior-devops` · `/ci-cd-pipeline-builder` |
| Security hardening | `/senior-secops` |

### Cross-cutting (any phase)
| Task | Skill |
|---|---|
| SEO (when applicable) | `/seo-audit` · `/schema-markup` |
| Analytics | `/analytics-tracking` |
| Performance | `/performance-profiler` |
| Security audit | `/senior-secops` · `/skill-security-auditor` |

---

## DevOps rules (apply when unpaused)

```
Branches:   feature/* → develop → main
CI:         GitHub Actions — tsc + lint + test + build before merge
Staging:    develop → Coolify staging
Production: main → Coolify production
Release:    git tag vX.Y.Z + CHANGELOG.md after merge to main
```

## Platform-specific rules

- Design tokens MUST match org canonical values in `[workspace]/MASTER-CHECKLIST.md`
- `localStorage` auth is a placeholder — never ship to real users in this state
- Backend decision: Supabase self-hosted is the leaning — confirm with Emmanuel before starting
- i18n: FR and Chinese — both incomplete and safe to finish now
- Motion: `prefers-reduced-motion` must be respected on all animations
- When unpaused: read `PLATFORM-STANDARDS.md` Web App/SaaS section in full before writing backend code
