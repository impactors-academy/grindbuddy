## Session start/end protocol — BUILD-CHECKLIST.md

**At the start of every session in this repo**, before doing anything else:
1. Read docs/BUILD-CHECKLIST.md in full.
2. Audit the current repo state against every unchecked item — check actual code,
   not just filenames or intentions. Update checkboxes to match reality.
3. If any item's state is ambiguous or requires a judgment call (not just a
   factual check), list it under an "Open Flags" section rather than guessing,
   and ask before proceeding on that specific item.
4. Report the 1-3 next items you'd tackle, in priority order, with a one-line
   reason each, before starting any implementation work.

**At the end of every session** (when the person indicates they're wrapping up,
or after a meaningful chunk of work has landed):
1. Update docs/BUILD-CHECKLIST.md to reflect everything completed, with a
   one-line note per item on what was actually built.
2. Commit the checklist update alongside the code, in the same commit as the
   work it describes — not as a separate cleanup commit later.
3. Do not mark an item complete unless you've verified it in the actual code —
   no marking something done based on intent or a partial implementation.

Also read `docs/ORG-STATUS.md` if it exists — if it appears stale vs. what you know
about the org's current state, note it in the session-end summary and flag it.

This protocol runs automatically every session in this repo — don't wait to be
asked to check the list.
