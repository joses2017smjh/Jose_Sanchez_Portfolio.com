# Demo shot lists

Each sequence is 25 seconds. These are recording/editing plans; this refresh reuses existing authentic media and does not claim to have recorded new experiments. Keep captions readable on a phone, show the mode (hardware, simulation, replay, or synthetic demo), and label playback speed. Use a compact GIF or linked poster on GitHub and MP4 with controls and a poster on the website.

## Humanoid VR teleoperation

| Time | Shot | Message |
|---|---|---|
| 0–4 s | Physical arms at rest, Quest controllers in view. | Control a physical robot from headset input. |
| 4–12 s | Operator moves a controller; the corresponding arm follows. | Show the clearest uninterrupted arm movement. |
| 12–20 s | Pair the movement with the joint/IK view and grip release. | Controller pose → IK → SocketCAN; grip gates motion. |
| 20–25 s | Hold the final pose; show the calibration report link. | Ten joints have calibration checks; this is arm teleoperation. |

Existing source: [Quest demo](https://github.com/joses2017smjh/quest-vr-teleop/blob/main/docs/demo/quest-vr-teleop.gif). Do not imply learned leg control or whole-body sim-to-real transfer. Include grip release only if clearly captured; otherwise record it before making that visual claim.

## SPUR metric depth and branch perception

| Time | Shot | Message |
|---|---|---|
| 0–4 s | Synthetic orchard RGB beside reference depth. | Branch geometry needs metric scale. |
| 4–12 s | Show model depth and the reconstructed point cloud. | Turn image observations into geometry. |
| 12–20 s | Compare six views or the RGB-D tree-graph output. | Show the actual refinement/geometry stage with its input requirements. |
| 20–25 s | Result card links to its dataset, metric, and report. | Synthetic evaluation; real-orchard depth accuracy remains unverified. |

Sources: [SPUR README](https://github.com/joses2017smjh/spur-depth-service#readme), existing `docs/readme/hero_strip.png`, `six_views.png`, and `reconstruct.gif`. A new real-weight API capture needs its checkpoint and input assets. Do not present the orchard camera-rig video as a recording of model inference. RGB-D geometry consumes depth; it is not automatically RGB-only depth inference.

## Vision-guided pruning

| Time | Shot | Message |
|---|---|---|
| 0–4 s | Simulated orchard, target branch and wrist view. | Approach a selected target while preserving tracking. |
| 4–12 s | UR5e approaches with RGB-D overlay. | Show the working perception/control loop. |
| 12–20 s | Sensor checks permit release; arm returns home. | Show ToF/contact gates beside the motion. |
| 20–25 s | Outcome and a clearly separate stopped attempt. | A selected success and a failure are different trials. |

Source: [Pruning demos and evidence](https://github.com/joses2017smjh/isaac-sim-pruning-workflow#readme). Label Isaac Sim and the actual depth source. Do not imply a physical cut, learned manipulation policy, or population success from one selected clip.

## Humanoid locomotion and navigation

| Time | Shot | Message |
|---|---|---|
| 0–4 s | Maze, start and goal; label MuJoCo. | Walk to a goal without falling or contacting walls. |
| 4–12 s | Humanoid takes a turn toward the goal. | Show the existing navigation clip. |
| 12–20 s | Lidar map and planned route beside the robot. | Learned gait + scripted A*; oracle pose and goal. |
| 20–25 s | Final position and link to the matching aggregate report. | Selected rollout; measured results belong to the named study. |

Source: [Maze study](https://github.com/joses2017smjh/bhl-robustness-ladder/blob/main/docs/RANDOM_MAZE.md) and `docs/gifs/random-maze-humanoid-sensors.gif`. Stereo/flow/IMU panels in this clip are display only. Do not imply that this historical clip records a new navigation campaign or physical locomotion. Use a separate capture for a learned navigator or estimator-driven policy.

## MetaNaviT — retrieval and RAG

| Time | Shot | Message |
|---|---|---|
| 0–4 s | Current and archived research configs disagree. | Which value should the answer use? |
| 4–12 s | Query for the current setting; open the cited source. | Find an answer with inspectable evidence. |
| 12–20 s | Show retrieval candidates, source path and staleness trace. | Explain why this file was selected. |
| 20–25 s | Resolved value plus a link to a named benchmark. | Keep the demo corpus distinct from external ranking evaluation. |

Sources: [MetaNaviT](https://github.com/joses2017smjh/MetaNavT#readme), `doc/gifs/ask.gif`, and `doc/demo/traces.json`. Existing animated traces must remain labelled illustrations/fixture replays. If adding a file-change approval scene, capture it as a separate flow and show the preview before applying.

## Bimanual garment folding

| Time | Shot | Message |
|---|---|---|
| 0–4 s | Garment, two arms and three camera inputs. | Fold from camera observations. |
| 4–12 s | Existing policy attempts the fold. | Label the checkpoint and playback speed. |
| 12–20 s | Show transient success versus the settled-fold check. | The final state matters, not just a favorable frame. |
| 20–25 s | Paired evaluation result and baseline-retained decision. | Short-horizon improvement failed the deployed-horizon gate. |

Source: [Folding evidence](https://github.com/joses2017smjh/IsaacSimFolding#readme). Historical success footage is not the latest candidate; show the evaluation report as a separate labelled panel. Do not edit two checkpoints into an apparent single successful episode.

## Agentic Soccer MCP

| Time | Shot | Message |
|---|---|---|
| 0–4 s | Match-selection screen, synthetic-demo label visible. | Request a matchup forecast. |
| 4–12 s | Submit a natural-language query; view the response. | Show the working agent interface. |
| 12–20 s | Expand the MCP/tool trace and uncertainty output. | Inspect how the response was assembled. |
| 20–25 s | Completed forecast and historical backtest link. | Demo output is distinct from historical evaluation. |

Sources: [Soccer project](https://github.com/joses2017smjh/Agentic-Soccer-Match-Prediction-MCP#readme) and [hosted demo](https://agentic-soccer-match-prediction-mcp.vercel.app/). Verify these interface steps during recording. Do not imply live odds, real-time squads, guaranteed uncertainty coverage, or realized betting returns.
