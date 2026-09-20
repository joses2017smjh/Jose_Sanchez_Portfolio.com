# Demo shot lists

Use real executions or clearly labelled illustrations. Keep units and outcome
labels visible. Preserve original playback speed, or label any speed change.
Use a small GIF on GitHub and MP4 plus a static poster on the website.

## 1. Vision-guided pruning — 20–25 seconds

| Time | Shot | Evidence / message |
|---|---|---|
| 0–4 s | Full orchard and selected spur, wrist image alongside | Start from a known target; label Isaac Sim and ground-truth depth. |
| 4–12 s | Arm approach and sensor/closure checks | Classical RGB-D tracking, dual ToF and geometry gate the release. |
| 12–20 s | Released spur falls; arm returns home | Use the existing scored 20-second sequence and its independent grade. |
| 20–25 s | Brief separate closure-failure inset and result link | Label a separate run: confidence loss stops the attempt without release. |

Source: `isaac-sim-pruning-workflow/docs/demo/isaac_two_trees_vision_sequence.gif`
and the matching closure-failure release videos. Do not call it a trained policy,
a physical cut, or robust performance across outdoor conditions.

## 2. SPUR metric depth — 25 seconds

| Time | Shot | Evidence / message |
|---|---|---|
| 0–5 s | Synthetic RGB and ground-truth depth | Thin branch geometry and metric-scale ambiguity motivate the task. |
| 5–12 s | Submit a real-weight input; show depth in metres | Show `/predict` or the six-view `/predict/group` flow. Label dummy mode if used. |
| 12–20 s | Six views → RGB+D refinement → point-cloud orbit | Distinguish learned depth from geometric back-projection. |
| 20–25 s | Validation result and hardware-labelled latency | Link the published protocol; never equate synthetic RMSE with field accuracy. |

Sources: `spur-depth-service/docs/readme/hero_strip.png`, `six_views.png`,
`reconstruct.gif`, the service API, and benchmark artifacts. A new API screencast
requires the real checkpoint; the existing reconstruction preview is available now.

## 3. Humanoid Robustness Ladder — 25 seconds

| Time | Shot | Evidence / message |
|---|---|---|
| 0–5 s | Four policies in the same MuJoCo world | Training reward alone does not prove transfer. |
| 5–14 s | Shared obstacle / perturbation and visible fall | Keep one clock and label each policy configuration. |
| 14–20 s | Evaluation record beside the rollout | Show the scorer and matched comparison; selected footage is illustrative. |
| 20–25 s | Aggregate findings and one documented limitation | Link the report; label sim-to-sim and distinguish biped from humanoid tasks. |

Sources: BHL `docs/gifs/multi_lab.gif`, `docs/REPORT.md`, and findings ledger.
For a weekend follow-up, use inspection success/failure with the **frozen gait
and privileged route supervisor** label. Do not present those as recordings of
the newly trained corridor checkpoints or as newly learned MARL.

## 4. MetaNaviT — 20–25 seconds

| Time | Shot | Evidence / message |
|---|---|---|
| 0–5 s | Current and archived configuration disagree | Show the concrete ambiguity in the fixture corpus. |
| 5–12 s | Ask for the current learning rate and open the cited file | Show a traceable answer rather than an unsupported response. |
| 12–19 s | Retrieval trace and staleness handling | Identify BM25, fusion and the actual configured reranker. |
| 19–25 s | Benchmark result plus a reviewable change proposal | Label 136 queries / 61 fixture files; approval flow is a separate scenario. |

Sources: `MetaNavT/doc/gifs/ask.gif`, `hard-staleness.gif`, `artifacts.gif`,
`doc/demo/traces.json`, and `bench/results/latest.json`. Caption animated traces
as illustrated or generated from exported traces, not a production deployment.

## Supporting folding case study — 20 seconds

0–4 s: identify adaptation seed 0, short top, development pose and three cameras.
4–11 s: play the new gate's full roughly seven-second policy episode.
11–16 s: show the unchanged checker result: never successful; terminal false.
16–20 s: show 600 completed actions / 601 validated renders and the source link.

The new gate proves rendering and records a failed policy episode. The older
short-pants success belongs to another checkpoint; if shown, label it separately.
