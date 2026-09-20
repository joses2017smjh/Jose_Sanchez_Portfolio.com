# Validation and publication record — 20 September 2026

## Rendering gate

- Original gate 21360435 failed on the robot asset path; the existing array and report dependencies remain unchanged.
- First replacement 21367674 loaded the robot, then failed on the same inferred root for the apartment scene (35 s, exit 3).
- Corrected gate **21367715 completed in 3m51s, exit 0:0**.
- Saved output: **600 policy actions, 601 validated render calls, four GIF views**.
- `success=false`, `terminal_success=false`: a valid policy failure, not an infrastructure error or new policy success.
- CPU checks: 4 asset regressions, 8 camera/episode checks, 3 media-pipeline checks and 51 existing pure checks: **66 passed**.
- Preflight validated 132 frozen source/config files, the robot and apartment USDs, garment references, and selected checkpoint hashes.
- All original running, held and dependency-blocked jobs were still present with the same dependencies at the final queue check. No additional experiment array was submitted.

[Repair and receipt](https://github.com/joses2017smjh/IsaacSimFolding/commit/7f6851d) ·
[Completed result and media](https://github.com/joses2017smjh/IsaacSimFolding/commit/73dc4d5) ·
[Scorer JSON](https://github.com/joses2017smjh/IsaacSimFolding/blob/main/docs/evidence/media-gate-2026-09-20/21367715-rollout.json).

## Website

- `npm run build`: **15 static pages built**, with the content schema enforced.
- Headless Chromium: homepage plus all four featured case studies at **1440×1000 and 390×844**.
- All ten page/viewport checks returned 200, with no horizontal overflow, missing video posters or JavaScript page errors.
- The page-wide pause control stops videos. Reduced-motion preference disables automatic playback.
- **377 local references** across generated pages resolved to real pages, media or documents.
- Browser inspection caught and corrected mobile navigation overflow. Muted text contrast and hero spacing were improved after reviewing screenshots.
- New poster frames were extracted from existing footage. New folding video is a compressed derivative of the verified gate, with unchanged episode ordering.
- This is a focused layout/media check, not a full WCAG audit or a Lighthouse performance certification.

[Desktop capture](validation/home-desktop.png) · [Mobile capture](validation/home-mobile.png).

## Depth service

`python -m pytest tests/test_api.py -q`: **11 passed in 7.30s**, using the dummy
runner without GPU or checkpoint loading. This checks requests, readiness,
validation errors and queue behavior; it does not remeasure model accuracy.

The shared environment lacked the already-declared `python-multipart` package;
it was installed under `/tmp` only. The sandboxed run could not complete with its
socket restrictions; the bounded local-socket test run passed outside that
sandbox. Shared Python environments were not changed.

## Public documentation

| Repository | Published change |
|---|---|
| `joses2017smjh/joses2017smjh` | `dbcbfdb`: profile README with four featured projects |
| `IsaacSimFolding` | `7f6851d`, `73dc4d5`: asset repair, receipt, completed failure evidence and previews |
| `spur-depth-service` | `632b2b8`: engineering summary, corrected training link and labelled dummy-mode setup |
| `Vision-Based-Metric-Depth-Estimation-for-Robotic-Pruning` | `77828a0`: correct clone URL, synthetic result scope, Python 3.10 limitation, clear stack |
| `MetaNavT` | `6d127be`: benchmark size/backend labels near the headline and fewer decorative badges |

Descriptions, homepage links and relevant topics were updated on the profile's
featured projects, folding, depth research and the portfolio repository.

The large training benchmarks were **not rerun** for a presentation change.
Existing results were checked against committed README/source/benchmark records;
the new folding gate was actually executed. The website's existing deployment
integration is checked separately after pushing this commit.

## Remaining items

- Set the four native GitHub pins through the authenticated profile UI; the featured README is already public.
- BHL has concurrent local work, including a separate unpublished commit. This session did not bundle or publish that work. A remaining contradictory README row about low-friction depth should be replaced with: “Retracted: misplaced friction patches invalidate this result; see the findings ledger.” The portfolio makes no claim from that row.
- The original media array remains blocked by the original failed gate, as requested. Further media episodes require a separate submission; this handoff stops after the replacement gate.
