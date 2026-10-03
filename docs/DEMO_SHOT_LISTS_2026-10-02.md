# Demo shot lists — October 2, 2026

Use real executions, original outcome labels, and the producing repository. Preserve playback timing or label acceleration. Each proposed edit lasts 15–30 seconds and links to its evidence. The website uses MP4 plus a static poster; GitHub uses a compact GIF or linked preview.

## 1. Berkeley Humanoid Lite: Quest VR — 25 seconds

**Available:** the supplied October 1 recording and `/media/humanoid-vr/quest-vr-teleop.mp4`, a 23-second montage. This edited footage is qualitative hardware evidence; it is not an uninterrupted timing experiment.

1. **0–4 s · Starting state:** show the physical robot and headset; label “Quest arm teleoperation · Berkeley Humanoid Lite.” Introduce the controller-to-arm interface.
2. **4–13 s · Strongest flow:** show tracked controller motion and the physical arm response, with headset feedback. Retain the footage's actual pace.
3. **13–20 s · Technical differentiator:** show a brief interface diagram or existing calibration panel: WebXR → IK → SocketCAN, per-joint gravity feedforward, held-grip motion gating. Label any inserted diagram as an explanation rather than live telemetry.
4. **20–25 s · Final result:** show the arm and the evidence links: ten joints marked OK; one wrist's ±10° steps reach 90% in 0.23–0.25 s. Keep the calibration date and single-joint scope visible.

**Proposed additions:** the four-stage introduction and evidence end card. Do not claim learned locomotion-policy transfer, metric stereo, or full-robot tracking accuracy.

## 2. Vision-guided pruning — 25 seconds

**Available:** the selected baseline 20-second sequence and the October 2 evening before/after clips under `/media/pruning/`. The depth-aware variant and unchanged appearance gate are separate runs.

1. **0–5 s · Starting state:** show target 15004 at evening light and the jaw's shadow crossing the tracked bark patch. Label simulator ground-truth depth.
2. **5–13 s · Strongest flow:** play the depth-aware run through approach, closure, surrogate detachment, and retreat.
3. **13–20 s · Technical differentiator:** compare the earlier appearance stop with the surface-consistency check. Show only recorded tracker/depth decisions; genuine jaw and wire occlusions still stop.
4. **20–25 s · Final result:** show “17/17 checks in this episode; 4/4 targeted low-sun trials.” Link the closed-loop receipt and population studies; label rigid-piece release.

**Proposed edit:** a synchronized comparison with a scoped end card. Do not pool the separate 3/3 known-map jaw-hold variant into these counts. Its held-frame freshness waiver requires its own label.

## 3. SPUR metric depth — 25 seconds

**Available:** synthetic RGB/depth figures, six-view diagrams, and `/media/depth/service_reconstruct.mp4`. An API demonstration requires the real checkpoint; dummy mode must be named if used.

1. **0–5 s · Starting state:** show thin branches in synthetic RGB beside ground-truth depth. Identify metre-scale ambiguity and the synthetic setting.
2. **5–12 s · Strongest flow:** submit a six-view group through the real-weight inference path and show predicted depth in metres. Record this step only when the checkpoint is available.
3. **12–20 s · Technical differentiator:** show RGB+D refinement, split ONNX encoder/fuse-decode graphs, then calibrated back-projection into the existing point-cloud orbit.
4. **20–25 s · Final result:** show “five saved best-validation scores: trunk RMSE 0.0445 ± 0.0057 m.” If latency appears, label “V100 fp16 refiner-only p50 156 ms; excludes DA2 and HTTP.”

**Proposed addition:** real-weight API screencast and evidence end card. Do not substitute a dummy response for model inference or describe synthetic RMSE as field accuracy.

## 4. Humanoid Robustness Ladder — 25 seconds

**Available:** `/media/bhl/multi_lab.mp4` and `/media/bhl/dr_pair.mp4`; the repository also has lidar-maze footage. Selected demonstrations are separate from aggregate scores and the October 2 gait-clock study.

1. **0–5 s · Starting state:** show policies receiving the same command in MuJoCo. Label “Isaac Lab training → MuJoCo evaluation.”
2. **5–13 s · Strongest flow:** play the matched disturbance or strafe comparison, keeping the fall visible. Identify the randomization configurations.
3. **13–20 s · Technical differentiator:** show the actual scorer and aggregate artifact, or a separately labelled navigation excerpt: learned gait, lidar-built map, scripted A*, oracle pose/goal.
4. **20–25 s · Final result:** for the transfer sequence, show “21/90 falls without randomization; 0/90 with defaults.” For a navigation edit, use the corresponding 24/24 biped or 12/12 humanoid population instead. Link one matching protocol.

**Proposed edit:** select one coherent study per clip. A new turning clip must retain the combined recipe's failure: only 1/3 actor-clock seeds qualifies when two are required. No hardware locomotion claim.

## 5. Bimanual garment folding — 25 seconds

**Available:** historical policy success/failure, both wrist views, and the seed-0 failure under `/media/folding/`. The historical success is a latched checker pass, not v8's settled-fold result.

1. **0–5 s · Starting state:** show the garment and both arms; name the checkpoint, garment class, and development pose.
2. **5–13 s · Strongest flow:** play a labelled historical policy fold and wrist views. State that images plus joint state feed joint-target chunks; no demonstration actions are injected.
3. **13–20 s · Technical differentiator:** show the v8 matched evaluation diagram: interleaved baseline/candidate, H10 versus H50, 600 actions plus 60 settling steps. This is an explanatory diagram, not footage of a new trial.
4. **20–25 s · Final result:** show “v8: H10 9/16 vs 2/16; H50 6/16 vs 8/16. Full gate fails; baseline retained.” Link the report. Keep development-pose and shared-seed limitations visible.

**Proposed edit:** connect existing footage to the later evaluation without conflating checkpoints or success definitions. A replacement settled-fold recording requires its own trajectory provenance.

## Optional software-role substitution: MetaNaviT — 25 seconds

0–5 s: conflicting current/archive configuration. 5–12 s: ask a question and open the cited file. 12–20 s: show configured retrieval, reranking, and staleness handling. 20–25 s: show the 136-query / 61-file fixture result and a separate reviewable change proposal. Existing exported-trace animations must be labelled as such; they do not establish a production deployment.
