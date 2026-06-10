# Morning Dashboard

Last updated: 2026-06-10

## System Health
| Component | Status |
|-----------|--------|
| Claude Code | ✓ Owl Alpha via OpenRouter |
| Context7 MCP | ✓ Connected |
| Playwright MCP | ✓ Connected |
| Ruflo MCP | ✓ Connected |
| Vercel MCP | ⚠ Needs auth |
| Hermes | ✓ v0.16.0, doctor passes |
| Codex | ✓ v0.139.0 (optional reviewer) |

## App Health
| Check | Status |
|-------|--------|
| Lint | ✓ Clean |
| Build | ✓ Passes |
| Next.js | v16.2.7 |
| Sentry | ✓ Configured |
| Trigger.dev | ✓ Config valid |
| Vercel previews | 4 active |

## Tooling
| Tool | Status |
|------|--------|
| Supabase CLI | ✓ Installed (local not running) |
| Shopify CLI | ✓ Installed (store not connected) |
| n8n | ✗ Not installed |
| Stripe CLI | Not checked |

## Quick Actions
- `pnpm dev` — start Next.js dev server
- `pnpm build` — production build
- `pnpm lint` — ESLint check
- `vercel ls` — list deployments

## Blocked / Pending
- n8n not installed
- Supabase local not running
- Vercel MCP needs auth
- Mom's website — not building yet
- Production deploy — disabled until approval
