# CLAUDE.md

## Purpose

classicusd-com — website for Classic USD (product TBD). Currently an empty repo awaiting initial development.

## Stack

Not yet configured. Update this section when stack is chosen.

```bash
# Install dependencies
# npm install | pnpm install | pip install -r requirements.txt

# Run dev server
# npm run dev | pnpm dev | python manage.py runserver

# Build
# npm run build | pnpm build

# Test (not configured)
```

## Structure

```
classicusd-com/
├── CLAUDE.md          # This file
├── README.md          # Project readme
└── .claude/           # Claude Code configuration
    ├── commands/      # Slash commands
    ├── agents/        # Subagent definitions
    └── hooks.json     # Automation hooks
```

## Guardrails

**Do not edit:**
- `.env*` files (secrets)
- `**/secrets/**` or `**/credentials/**`
- Production config files (`*.prod.*`, `prod.config.*`)

**Tests not configured** — add test runner before using `/test` command.

## Conventions

- Keep commits atomic and well-described
- Follow language-specific naming conventions once stack is chosen
- Prefer explicit over implicit

## How to Work with Claude in This Repo

1. **Use `/plan` before starting features** — get alignment on approach
2. **Keep diffs small** — one concern per change
3. **Run tests before committing** — once tests exist
4. **Use `/review` on completed work** — catch issues early
5. **Update CLAUDE.md** — when stack/structure changes
6. **Don't commit secrets** — use environment variables
