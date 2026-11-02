# Mission Control — SRE / Platform / AI Systems Portfolio

A modular Next.js 14 + TypeScript + Tailwind + Framer Motion personal portfolio. Obsidian dark palette, emerald/cyber/violet accents, responsive architecture lab cards, deterministic resilience simulations, simulated live telemetry and terminal, case-study dialogs, and skills matrix.

## Running locally

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

### GitHub Pages

`GITHUB_PAGES=true npm run build` exports into `out/` with `/Portfolio/` base path. Upload `out/` to Pages using a workflow or publishing action. For a different repository name, change `basePath` and `assetPrefix` in `next.config.mjs` and the resume URL in `Hero.tsx`.

The existing resume in the upstream repo was not included in this standalone download. Put your valid PDF at `public/Laxmi_Prasad_Dooda_DevOps_Resume.pdf`, or update the resume CTA. On a local `/`-hosted deployment, also change the CTA path to `/Laxmi_Prasad_Dooda_DevOps_Resume.pdf`.

## Content and integrity

- The status strip, terminal and interactive patterns are clearly labeled **simulations**. They do **not** access an actual Kubernetes cluster, AI model, PagerDuty, or AWS account.
- Project descriptions and specific performance assertions were provided in the brief; they are **not independently verified**. Project cards mark claims or design objectives. Replace with measured results and evidence when available.
- GitHub links lead to the public profile until individual verified project repositories are provided.
- R&D priorities are described as research rather than earned certifications or production accomplishments.
- The modal supports Escape and backdrop close; for stricter accessibility audits, consider adding a focus trap and focus restoration.
- The UI does not collect personal data and makes no outbound API calls.

## Structure

- `src/components/Hero.tsx` — rotating roles, terminal feed, CTAs
- `src/components/MetricsWidget.tsx` — simulation status bar
- `src/components/Projects.tsx` — category filters + case-study cards
- `src/components/ArchitectureModal.tsx` — accessible diagram details
- `src/components/SkillsMatrix.tsx` — tabbed tooling domain explorer
- `src/components/ResiliencePlayground.tsx` — five deterministic LLD patterns
- `src/components/TerminalDrawer.tsx` — browser-only command interpreter
- `src/components/MissionControl.tsx` — assembly, roadmap, navigation, contact
- `src/data/content.ts` — editable skills, project data, links

## Deployment checklist

1. Add the real resume PDF and check the link.
2. Verify project implementations, screenshots, metrics and repository links.
3. Run `npm install`, `npm run typecheck`, `npm run build`.
4. Audit mobile breakpoints, screen readers and keyboard focus.
5. Deploy the static export and verify all internal anchor links.

## Production experience vs engineering projects
The homepage features five owner-supplied enterprise case studies, including stated engineering ownership and measurement methods. These are distinct from the engineering projects and exploratory AI/MLOps R&D. Case-study architectures are deliberately sanitized and conceptual. Reported metrics are attributed to the engineer's professional experience, not to live connected telemetry.

## Personalization review before publishing

The hero and navigation now prominently use **Laxmi Prasad Dooda**, with an added career story and measured-outcome highlights. The featured experience is based on the enterprise case studies provided by the portfolio owner. The AI systems work is presented separately as active R&D.

**Résumé:** This ZIP does not contain a verified, up-to-date résumé. The hero currently opens the résumé file in the existing GitHub repository for review. Before publishing, replace this with your latest approved PDF under `public/` and update the link to point to the deployed base path. Never publish confidential client details.

**Build/browser validation:** Run `npm install`, `npm run build`, then check keyboard navigation, responsive behavior, PDF link and case-study interactions in a browser.
