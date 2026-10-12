# Validation — October 12, 2026

This refresh changes presentation and documentation. Published research numbers were checked against existing artifacts; training, physical robot trials, and historical model evaluations were not rerun.

## Executed checks

| Area | Result | Limit |
|---|---|---|
| Portfolio | Production build passed: 16 pages. | No visual browser session was available. |
| Portfolio content | `npm run check:portfolio` passed: five robotics/CV cards, two AI/software cards, current result boundaries, 195 local media references. | Checks rendered content and local assets, not scientific validity. |
| Portfolio static QA | 431 local references/anchors passed; image alt text, video controls/posters/labels, unique IDs, one H1 per page, result ordering checked. | Does not replace testing real mobile/desktop browser rendering. |
| Expandable details | JavaScript behavior checks passed for initial hashes, hash changes, nested details, absent/invalid targets, and avoiding unnecessary scrolling. | Evaluated in a Node VM with DOM stubs. |
| Pruning | 108 focused CPU tests passed; portable demo produced HTML, GIF, poster and JSON. | Ideal CPU demo is distinct from Isaac GPU footage. |
| SPUR | 28 camera/branch tests and 13 API tests passed. | API uses dummy inference; no model accuracy remeasurement. A missing multipart dependency was isolated in the validation workspace. |
| Folding | 67 simulator-free tests passed using the documented `PYTHONPATH=src` command. | No cloth physics or GPU campaign rerun. |
| MetaNaviT | Five README-number contract tests passed; generator `--check` confirms all seven generated blocks remain synchronized. | Neural inference, full Docker stack, and external evaluation not rerun. |
| Soccer | 29 lightweight mobile-adapter tests passed; local HTTP health/predict smoke returned completed demo output and `synthetic-fixture` provenance. | Full historical-data suite, live providers, RL training, and web application stack not run. |
| Quest | Bringup help and isolated session harness passed. | Browser harness stopped at missing local environment/robot assets after early UI checks. No hardware or headset test. |
| BHL | README and archived links resolve; selected flat-fall totals independently summed from saved per-actor verdicts (0/360 vs 77/360). CPU commands match repository CI. | Full CPU suite and simulator replay not rerun for this documentation edit. |
| Documentation | Changed README/reference local paths and relevant heading anchors checked; `git diff --check` passed. Thirteen robotics README external URLs returned HTTP 200. | Network results reflect check time; no blanket guarantee for all historical external links. |
| Profile | Résumé PDF, hardware GIF, and Soccer live-demo URLs returned HTTP 200. | LinkedIn/email destination ownership comes from the existing public profile. |

The focused test total is **250 passed** (108 + 28 + 13 + 67 + 5 + 29), plus the separate harness, generator, link, and static checks above. This is not a claim that all seven complete application test suites passed.

## Existing checker repair

The portfolio's prior checker failed against untouched `origin/main`: it expected four featured projects while the source already defined five, and it required superseded research numbers. The refresh updates those assertions to the intended two-track structure and current sourced boundaries. Media validation and negative-claim safeguards remain enforced.

## Publication and remaining work

Project changes are published to the existing default branches; repository URLs are retained. The portfolio uses its existing Vercel integration. See the commit history for the exact deployed source revision.

The profile currently requires manual selection of the five recommended pins. The authenticated GitHub API in this environment can read pins but offers no repository-pinning mutation.

This refresh creates no new hardware-transfer repository, executes no queued research campaign, and creates no new demo recording. Its proposed repository boundary and shot lists are plans for the next stage.
