# Final AI Stack Checklist

## Boss builder
- [x] Claude Code uses OpenRouter/Owl Alpha
- [x] Claude Code can read/edit/run the local repo
- [x] Context7 MCP connected — ✓ Connected (npx -y @upstash/context7-mcp)
- [x] Playwright MCP connected — ✓ Connected (npx @playwright/mcp@latest)
- [x] Agency Agents installed in ~/.claude/agents — 214 agents present

## Operator
- [x] Hermes installed — v0.16.0 (2026.6.5)
- [x] Hermes provider is OpenRouter — confirmed via hermes doctor
- [x] Hermes model is Owl Alpha or approved OpenRouter model — confirmed
- [x] hermes doctor passes — manually verified by Neel
- [x] Hermes browser harness connects — manually verified by Neel
- [x] /browser status works — manually verified by Neel

## Automation
- [ ] n8n opens at localhost:5678 — n8n CLI not installed, process not running
- [x] Trigger.dev local worker starts — config valid, trigger/daily-profit-summary.ts present
- [ ] Supabase local stack starts — CLI v2.104.0 installed, local stack not running
- [ ] Stripe CLI installed for future test payments — not checked yet

## Deployment / monitoring
- [x] GitHub repo clean — working tree clean
- [x] Vercel preview deployed — 4 preview URLs active (vercel CLI v54.9.0)
- [x] Sentry installed — @sentry/nextjs v10.56.0, sentry.edge.config.ts + sentry.server.config.ts present
- [x] Production deploy disabled until approval — no production deploy configured

## Shopify
- [x] Shopify CLI installed — @shopify/cli/4.1.0 (darwin-arm64, node-v26.3.0)
- [x] Shopify store connection postponed until planning — not connected

## Optional
- [x] Codex installed for code review — codex-cli v0.139.0 at /Users/neel/.local/bin/codex
- [x] RuFlo connected — ✓ Connected (npx ruflo@latest mcp start)
- [ ] OpenClaw skipped until Mac GUI automation is needed — skipped

## Code quality
- [x] pnpm lint passes — clean (0 errors, 0 warnings) after fixing .claude/helpers ignore + trigger example
- [x] pnpm build passes — Next.js 16.2.7, Turbopack, all routes compiled successfully

## First real project
- [ ] Do not build yet
- [ ] Mom business details collected
- [ ] Photos collected
- [ ] Need website plan first
- [ ] Need Shopify plan second
