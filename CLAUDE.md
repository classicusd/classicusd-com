# CLAUDE.md

## Purpose

classicusd-com — Professional website for Classic USD (USC), the first fiat-backed stablecoin on Ethereum Classic. Inspired by Circle USDC and Paxos USDP.

## Stack

| Component | Version | Notes |
|-----------|---------|-------|
| Node.js | 22.x LTS | Use .nvmrc |
| Next.js | 16.x | Turbopack default |
| React | 19.x | Server Components |
| Tailwind | 4.x | Oxide engine |
| TypeScript | 5.x | Strict mode |
| pnpm | 9.x | Package manager |
| Framer Motion | 12.x | Animations |

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

## Structure

```
classicusd-com/
├── CLAUDE.md              # This file - project context
├── MILESTONES.md          # Development progress tracker
├── README.md              # Public readme
├── docs/                  # Research and documentation
│   └── RESEARCH.md        # Product and tech research
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── globals.css    # Tailwind + tokens
│   │   └── api/           # Route handlers
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   ├── ui/            # Reusable components
│   │   └── animations/    # Framer Motion components
│   └── lib/
│       ├── constants.ts   # Addresses, links, metadata
│       └── animations.ts  # Animation presets
├── public/                # Static assets
└── .claude/               # Claude Code configuration
```

## Guardrails

**Do not edit:**
- `.env*` files (secrets, API keys)
- `**/secrets/**` or `**/credentials/**`
- Production config files (`*.prod.*`, `prod.config.*`)

**Do not commit:**
- Private keys or mnemonics
- API keys (use environment variables)
- Future integration details (Rain Cards, Coinflow, 1Konto, etc.)

**Tests not configured** — add test runner before using `/test` command.

## Key References

- **MILESTONES.md** — Development progress and phase tracking
- **docs/RESEARCH.md** — Product info, partner details, tech research
- Pattern reference: `../wrappedether` (similar single-page marketing site)
- Pattern reference: `../ethereumclassic-com` (larger multi-page site)

## Conventions

- **Components**: PascalCase (`Hero.tsx`, `WhyUsc.tsx`)
- **Utilities**: camelCase (`usePrice.ts`, `animations.ts`)
- **CSS**: Tailwind 4 with design tokens in `globals.css`
- **Animations**: Use presets from `/lib/animations.ts`
- **Constants**: Centralize addresses/links in `/lib/constants.ts`

## How to Work with Claude in This Repo

1. **Use `/plan` before features** — get alignment on approach
2. **Check MILESTONES.md** — track progress, mark tasks complete
3. **Keep diffs small** — one concern per change
4. **Reference sister projects** — reuse patterns from wrappedether/ethereumclassic-com
5. **Use `/review` on completed work** — catch issues early
6. **Update docs/** — when research or requirements change
7. **Don't expose future integrations** — internal roadmap stays private
