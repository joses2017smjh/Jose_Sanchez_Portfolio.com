# GitHub and portfolio audit — 20 September 2026

Scope: public GitHub `joses2017smjh` and the existing Astro portfolio at
[https://jose-sanchez-portfolio-com.vercel.app](https://jose-sanchez-portfolio-com.vercel.app).
Positioning uses the existing robotics / perception / ML focus; the request's
role, URL and stack placeholders were not filled in. Technologies come from
actual repositories. No new experience, users or performance figures were invented.

## 1. Prioritized audit

| Priority | Finding | Action |
|---|---|---|
| P0 | Folding gate failed before any policy frames; replay media could be mistaken for new policy results. | Repair asset resolution, preserve old jobs, publish the gate receipt and independently inspect its outcome. Gate 21367715 completed 600 actions / 601 validated renders; the policy failed this illustrative fold. |
| P0 | Depth-research setup cloned an old repository name; the service linked to that stale name. | Replace both with the actual public research repository. |
| P1 | No profile README or pinned projects were present. | Publish a concise profile README with four evidence-linked projects. Native pins need the authenticated GitHub profile UI; exact selection is below. |
| P1 | The homepage claimed four selected projects but marked five as featured. | Lead with four projects; retain folding under supporting work. |
| P1 | Mobile navigation overflowed a 390 px viewport. | Wrap the header and navigation; verify desktop and mobile layouts. |
| P1 | Autoplay demos lacked a universal pause control; some clips lacked posters. | Add native controls, a page-wide pause button, reduced-motion handling and extracted poster frames. |
| P1 | Project source/README links were buried below long pages. | Put them directly below every case-study introduction. |
| P1 | Retrieval metrics lacked backend scope near the top; counts and simulator variants could be conflated. | Label 136-query / 61-file fixtures, hash embeddings and overlap reranking. Keep simulator, checkpoint and protocol limits attached to results. |
| P2 | README copy and site styling were inconsistent; decorative badges displaced the depth summary. | Use concise engineering summaries, a reusable README structure, and verified setup details. Preserve repository URLs rather than rename them. |

BHL also has a contradictory low-friction row despite its own retraction. Exact
replacement text and the concurrent-work boundary are recorded in the validation
report; no claim from that row is used in the portfolio.

The existing portfolio already has a useful project schema, local fonts, static
output, visual case studies, résumé links and meaningful failure cases. The
work strengthens those foundations rather than replacing the entire design.

## 2. Recommended featured projects

| Order | GitHub repository | Hiring signal | Necessary qualification |
|---|---|---|---|
| 1 | `isaac-sim-pruning-workflow` | Integrated sensing, robot control, release gates and independent validation | Classical tracker; simulator depth and discrete rigid-piece release |
| 2 | `spur-depth-service` | Research-to-service implementation, contracts, ONNX and geometric reconstruction | Synthetic evaluation; real-orchard accuracy unverified |
| 3 | `bhl-robustness-ladder` | Policy evaluation, curricula, cross-simulator diagnostics and negative controls | Distinguish 12-DoF recovery from 22-DoF frozen-gait demonstrations |
| 4 | `MetaNavT` | Retrieval engineering, evaluation fixtures and reviewable file operations | Small fixture benchmark; configured backends must be stated |

The depth-research repository supports SPUR rather than competing for a second
slot. Folding remains a valuable manipulation case study, with its new failure
recording and partial historical success clearly separated.

**Native pins:** on [your profile](https://github.com/joses2017smjh), choose
**Customize your pins**, select the four repositories in this table, then
**Save pins** and arrange them in this order. The available GitHub GraphQL
mutation schema exposes no repository-profile pin mutation, and this session
has no authenticated browser session. The four projects are already featured
in the profile README. [GitHub's pinning instructions](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile).

## 3. Revised GitHub profile README

Exact copy: [PROFILE_README.md](PROFILE_README.md).
Published profile repository: [joses2017smjh/joses2017smjh](https://github.com/joses2017smjh/joses2017smjh).
It includes a brief introduction, one real simulator demo, four projects,
technical focus, portfolio, résumé, LinkedIn and email links.

## 4. Reusable technical project README

Use [PROJECT_README_TEMPLATE.md](PROJECT_README_TEMPLATE.md). The order is:
problem and contribution → demonstration → measured result and limits →
architecture → engineering decisions → setup → validation → deployment → stack.
Keep detailed research history behind links. Label dummy APIs and historical
replays before a reader runs or interprets them.

## 5. Revised portfolio structure and copy

- **Hero:** “I build perception and simulation for robots.”
- **Role:** “Seeking robotics software and perception / ML engineering roles.”
- **Primary action:** Explore selected work.
- **Secondary actions:** Download résumé; Get in touch.
- **Selected work:** the four projects above, with a visual, contribution,
  measured result, scope and direct technical README link.
- **Supporting work:** folding, language and 3D learning; existing case-study URLs remain stable.
- **Background:** education and existing experience; no new biographical claims.
- **Contact:** robotics/perception invitation, email, LinkedIn and résumé.

Project pages put source, technical README, demo and paper links immediately
below the summary when available. Media keeps static posters and explicit
controls. The folding case study includes the new adapted-policy failure, with
its checkpoint and development-pose limitation.

## 6. GIF / demo shot lists

[DEMO_SHOT_LISTS.md](DEMO_SHOT_LISTS.md) specifies 20–25 second sequences for all
four featured projects and a separate folding sequence. Each shows the starting
problem, an actual flow, the technical distinction and a measured outcome.
These are editing recommendations; existing previews are not represented as
newly recorded full sequences.

## 7. Exact implementation changes

- `src/site.config.ts`, `src/pages/index.astro`: focused robotics copy and calls to action; retain the user's updated email.
- `src/content/projects/*.mdx`: four featured projects, scoped evidence, corrected service status, poster references, and new folding media.
- `src/pages/projects/[slug].astro`: resource links at the start of each case study.
- `src/components/Figure.astro`, `FigureStrip.astro`, `src/layouts/Base.astro`: native video controls, page-wide pause/play, dynamic reduced-motion preference; controls are outside media links.
- `src/styles/global.css`: header wrapping, readable muted text, tighter hero spacing and pause-button styling.
- `public/media/`: real extracted poster frames and a compact MP4 of gate 21367715; no generated or fabricated robot imagery.
- `README.md`, `docs/`: real clone URL, current deployment information, audit, profile copy, README template and shot lists.
- Folding GitHub: separate frozen asset-root repair, tests, submission receipt, failure evidence and labelled preview.
- Depth-service and depth-research READMEs: concrete summaries, corrected repository links and setup limits.
- MetaNaviT README: fixture/backend qualifications beside the headline result.
- Repository descriptions and topics: factual domain and implementation tags; no repository renames.

## 8. Recruiter-style quality check

- A reader can identify the target role from the hero and reach four selected projects immediately.
- Every featured project distinguishes personal contribution from upstream systems.
- The strongest visible outcomes link to repositories; selected footage is not used as an aggregate benchmark.
- Pruning, humanoid control and garment folding keep separate provenance.
- Historical replay, simulator runs, fixture traces and dummy API modes are labelled.
- No physical pruning, hardware walking, real-orchard accuracy or new successful adapted fold is claimed.
- The build and browser checks, executed commands, and publication receipts are recorded in [VALIDATION_2026-09-20.md](VALIDATION_2026-09-20.md).
- Remaining manual item: set the four native GitHub pins. No recruiter conversion or hiring outcome is claimed.

## Context and effort guidance

The VS Code active file supplies editor context; it does not change the agent's
shell working directory. This session started in `Computer_Vision`, while the
media job lived in `Humanoid_Lite/lehome-fold-repro` and weekend orchestration
lived in `bhl-robustness-ladder`. That mismatch explains the earlier mixed-project
answer. Check the working directory and Git remote before every project change,
and name the producing repository for every clip and metric.

For this kind of maintenance, **high reasoning effort** is a reasonable default.
Reserve the highest setting for ambiguous simulator failures, experiment design,
or competing methodological explanations. Routine queue inspection, known path
repairs, documentation and pushing validated changes seldom justify that cost.
This is a workflow recommendation, not a measured model-quality comparison.
