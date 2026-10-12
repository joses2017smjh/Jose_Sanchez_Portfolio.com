# GitHub and portfolio refresh — October 12, 2026

Target roles: robotics software, embodied AI, computer vision, AI/software engineering, and agentic RAG. The website creates interest through demonstrations; GitHub supplies the implementation and evidence.

## 1. Prioritized audit

| Priority | Finding | Change |
|---|---|---|
| 1 | The profile has no custom pins; older unrelated popular repositories occupy that space. | Recommend the five projects below. Pin selection remains a GitHub UI action. |
| 1 | MetaNaviT's first GIF was at line 226; soccer's at line 78. Humanoid research updates appeared before the demo. | Move outcome and existing demo to the first screen. Preserve detailed studies in linked references. |
| 1 | Robotics, RAG, and agents compete for attention without clear navigation. | Add Robotics & Computer Vision and AI & Software entry points; give MetaNaviT and Soccer full cards. |
| 1 | Soccer's opening implied real-market transfer, while its served artifact uses synthetic data. Its clone command was a placeholder. | Label synthetic mode near the demo; fix setup; compare historical forecasts against both naive and market baselines. |
| 2 | Strong results are buried in protocol abbreviations and long descriptions. | Shorten titles and cards; lead case studies with results and scope, then problem, solution, and contribution. |
| 2 | Some metric claims lack nearby scope, or could blur a selected clip with aggregate evaluation. | Keep hardware/simulation, synthetic/real, fixture/live, and development/confirmation distinctions beside claims. |
| 2 | Quest and Soccer lack useful repository descriptions/topics. | Set consistent descriptions, topics, and case-study links on all seven project repositories. Preserve existing URLs. |
| 3 | Long engineering history and research evidence make landing pages difficult to scan. | Retain history in reference documents; keep setup and source maps on the main README. |

The existing site already has genuine MP4s, posters, reduced-motion support, a résumé, and contact links. This is a content and navigation refresh, not a new hosting platform or fabricated demo campaign.

The queued navigation/terrain validation counts supplied in the request are operational context. This refresh does not run, cancel, or claim completion of those jobs. Fresh training results and the pending GIF must pass their existing gates before replacing published evidence.

## 2. Recommended featured projects

Use these five custom pins, in this order:

| Project | What a recruiter sees | Technical proof |
|---|---|---|
| [Humanoid VR teleoperation](https://github.com/joses2017smjh/quest-vr-teleop) | Physical robot integration | WebXR, IK, CAN control, ten-joint calibration records. |
| [SPUR metric depth and branch perception](https://github.com/joses2017smjh/spur-depth-service) | Computer vision plus usable software | Models, metric geometry, API, ONNX, synthetic evaluations and real-image limits. |
| [Vision-guided pruning](https://github.com/joses2017smjh/isaac-sim-pruning-workflow) | Perception driving a control loop | RGB-D control, release checks, independently graded recordings. |
| [Humanoid locomotion and navigation](https://github.com/joses2017smjh/bhl-robustness-ladder) | Embodied AI and disciplined evaluation | Isaac Lab/MuJoCo, matched controls, sensor studies, portable replay. |
| [MetaNaviT](https://github.com/joses2017smjh/MetaNavT) | AI/software and agentic RAG | Retrieval, source tracing, APIs, MCP, approval grants, external ranking studies. |

Keep [folding](https://github.com/joses2017smjh/IsaacSimFolding) and [Agentic Soccer MCP](https://github.com/joses2017smjh/Agentic-Soccer-Match-Prediction-MCP) in the profile's More work section. For a role-specific application, lead with SPUR/pruning for CV; Quest/locomotion for robotics; MetaNaviT/Soccer for AI software.

To pin: open the [GitHub profile](https://github.com/joses2017smjh), choose **Customize your pins**, select the five repositories, and order them as above. The authenticated API exposes the current pins but no repository-pinning mutation in this environment.

Use readable display names now. Renaming repository URLs adds migration work without fixing reading order.

## 3. Revised GitHub profile README

The exact replacement is [PROFILE_README.md](PROFILE_README.md), also used in the profile repository. Opening copy:

> I build robot perception, control, and AI software—from VR control of a physical humanoid to metric-depth models and retrieval tools that show their sources.

The profile retains the real hardware GIF, role statement, education, contact links, five concise project descriptions, supporting folding/Soccer links, and two grouped technical-focus lines.

## 4. Reusable technical project README structure

Use [PROJECT_README_TEMPLATE.md](PROJECT_README_TEMPLATE.md): outcome → labelled demo → problem/contribution → result/limits → architecture → decisions/tradeoffs → setup → validation → deployment → next steps → stack/attribution.

Commands must match real entry points. Separate a dummy API, a fixture replay, and an actual model execution. Keep dataset split, denominator, units, baseline, and provenance close to any metric. Preserve team/upstream attribution.

## 5. Revised portfolio structure and copy

**Hero:** “I build robot perception and AI software.”

**Role line:** “Seeking robotics, computer vision, and AI/software engineering roles.”

**Introduction:** “From a vision-guided pruning arm to source-traced retrieval: I connect working demos to the code, tests, and measured results behind them.”

**Actions:** Robotics & computer vision · AI & software · Download résumé · Get in touch.

**First-row entry points:** Control a physical humanoid arm · Estimate depth in metres · Trace an answer to its source.

Page order:

1. Compact hero and three project shortcuts.
2. Robotics & Computer Vision: Quest, SPUR, pruning, locomotion, folding.
3. AI & Software: MetaNaviT, Agentic Soccer MCP.
4. Compact graduate coursework links.
5. Personal context, résumé, and contact.

Each case study shows its demo, result and limits, problem, solution, personal contribution, and technologies. Long engineering notes remain expandable; source and technical README links remain visible. Cards show four technologies instead of the full stack.

## 6. GIF/demo shot lists

[DEMO_SHOT_LISTS.md](DEMO_SHOT_LISTS.md) gives a 25-second sequence for all seven projects: 0–4 seconds starting problem, 4–12 working flow, 12–20 technical differentiator, and 20–25 outcome and evidence link.

No new videos or GIFs were generated in this refresh. Existing media keeps its original simulation, illustration, speed, and checkpoint labels.

## 7. Exact implementation changes

| Repository / area | Change |
|---|---|
| `joses2017smjh/README.md` | Concise introduction, five featured projects, folding and Soccer links, grouped technical focus. |
| `quest-vr-teleop/README.md` | Outcome-first hardware story, evidence table, source map, setup prerequisites, software checks. |
| `spur-depth-service/README.md`, `docs/RESULTS.md` | Shorter landing page; depth and BranchNet contributions; preserved detailed experiments with repaired relative links. |
| `isaac-sim-pruning-workflow/README.md`, `docs/RESULTS.md` | Clear demo/control story, scoped results, portable CPU setup, retained population failures. |
| `bhl-robustness-ladder/README.md` | Locomotion/navigation display title, demo first, three selected results, architecture, CPU setup. |
| BHL `docs/RESEARCH_OVERVIEW_2026-10-12.md`, `docs/PROJECT_BOUNDARIES.md` | Preserved long overview; documented proposed hardware-repository boundary. |
| `IsaacSimFolding/README.md` | Plain-language opening, baseline-retained outcome, corrected CPU command, project layout. |
| `MetaNavT/README.md`, `doc/engineering-reference.md` | Demo first, team attribution, concise evidence/setup; generated benchmark blocks preserved with drift checks. |
| Soccer `README.md`, `docs/engineering-reference.md` | Demo first, synthetic-mode label, real clone command, separate fixture/full workflows, bounded historical claims. |
| Portfolio `src/site.config.ts`, `src/pages/index.astro`, `src/layouts/Base.astro` | Hero, two role tracks, navigation, contact copy. |
| Portfolio content schema, project MDX files, card/detail components, CSS | Shorter summaries, grouping, four card tags, results first, expandable details, retained accessible media. |
| Portfolio `docs/` | Profile copy, reusable README template, all seven shot lists, this audit, validation receipt. |

**Repository split:** keep locomotion/simulation research in BHL and physical arm control in Quest. Create a future `humanoid-hardware-transfer` repository when it has sensor calibration, a runnable deployment adapter, and an actual hardware recording. Do not present external real-camera replay as closed-loop hardware locomotion. [Proposed boundary and milestones](https://github.com/joses2017smjh/bhl-robustness-ladder/blob/main/docs/PROJECT_BOUNDARIES.md).

## 8. Final recruiter-style quality check

- **Fast first impression:** what Jose builds, target roles, three strong entry points, and contact are immediate.
- **Proof:** every featured project has real existing media, a technical README, and linked implementation/evidence.
- **Ownership:** personal integration/evaluation work is distinguished from upstream robots/models and team contributions.
- **Credibility:** synthetic, simulation, fixture, historical, and unvalidated hardware claims remain labelled; negative results remain visible.
- **Depth:** commands, source maps, tests, tradeoffs, and limits remain available without occupying every project card.
- **Remaining manual action:** set the five GitHub pins. No new sim-to-real result or new recording is claimed.

See [validation and publication status](VALIDATION_2026-10-12.md) for executed checks and their limits. No recruiter response rate, hiring outcome, or performance gain is claimed from this presentation change.
