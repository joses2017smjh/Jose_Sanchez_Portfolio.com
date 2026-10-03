/**
 * Supporting project evidence registry, maintained manually.
 *
 * Astro renders pages and cards from src/content/projects/*.mdx via
 * src/lib/projects.ts. This file is not currently imported by those pages;
 * it does not generate READMEs, metadata, or repository descriptions.
 *
 * THE RULE ON NUMBERS
 * Every metric carries a `source` — a path, inside the repo named by
 * `repoUrl`, to a file that actually contains that value. A value that could
 * not be traced to such a file is `"TODO"`, never a plausible-looking number.
 * `note` records provenance trouble: a figure two files in the same repo
 * disagree about, or one whose only witness is outside the repo.
 *
 * There is no automated cross-document or check:links enforcement.
 */

/** Which hiring lane a project is evidence for. */
export type Lane = "perception" | "robotics-rl" | "ml-engineering";

export type Status =
  /** Completed software artifact; does not imply a production deployment. */
  | "shipped"
  /** Being worked on now; numbers still move. */
  | "active"
  /** Course project, left as it was submitted. */
  | "coursework";

export interface Metric {
  label: string;
  /** "TODO" until a real file in the repo is known to contain it. */
  value: string;
  /** Repo-relative path to the file containing `value`. */
  source: string;
  /** Provenance caveat: disagreement between files, or an outside witness. */
  note?: string;
}

export interface DeepLink {
  label: string;
  /** Full URL to evidence, implementation, or an attributed upstream project. */
  url: string;
}

export interface Project {
  /** Registry key; siteUrl and contentId identify the published page. */
  slug: string;
  /**
   * Filename in src/content/projects/ when it differs from `slug`.
   * Present only where renaming the slug would break a published URL.
   */
  contentId?: string;
  title: string;
  /** Concise scoped result; keep aligned with manually authored MDX. */
  oneLineResult: string;
  lane: Lane[];
  period: string;
  status: Status;
  /** Path under /public — the depth map, cloud, reconstruction, or agent run. */
  heroAsset: string;
  /** Still frame for `heroAsset` when it is video (reduced-motion fallback). */
  heroPoster?: string;
  metrics: Metric[];
  repoUrl: string;
  /** Default branch. Deep links and `source` paths resolve against it. */
  repoBranch: string;
  siteUrl: string;
  paperUrl?: string;
  /** Direct evidence and method links a reader should open. */
  deepLinks: DeepLink[];
  stack: string[];
  /** Set when the repo is not solely the author's work. Scopes the claim. */
  collaboration?: string;
}

const SITE = "https://jose-sanchez-portfolio-com.vercel.app";

export const PROJECTS: Project[] = [
  {
    slug: "berkeley-humanoid-vr",
    title: "Berkeley Humanoid Lite: Quest VR Teleoperation",
    oneLineResult:
      "Quest 2 poses drive an offline joint model and physical humanoid arms; ten joints are calibrated, and one wrist reaches 90% of ±10° steps in 0.23–0.25 s.",
    lane: ["robotics-rl", "perception"],
    period: "2026 – present",
    status: "active",
    heroAsset: "/media/humanoid-vr/quest-vr-teleop.mp4",
    heroPoster: "/media/humanoid-vr/quest-vr-teleop.jpg",
    metrics: [
      {
        label: "Physical arm calibration — September 24",
        value: "10 / 10 joints marked OK",
        source: "arm_validation/calibration_20260924_1111.md",
        note: "Per-joint calibration and torque ceilings on the as-built robot; not a manipulation success rate.",
      },
      {
        label: "One left wrist — 90% rise time for ±10° steps",
        value: "0.23–0.25 s",
        source: "arm_validation/closed_loop/20260924_110748_can0_id9/report.txt",
        note: "One joint and one test condition, including step and return phases. October 1 montage is qualitative arm-control evidence, not a tracking benchmark.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/quest-vr-teleop",
    repoBranch: "main",
    siteUrl: `${SITE}/projects/berkeley-humanoid-vr/`,
    collaboration:
      "I built and calibrated this physical robot and implemented Quest input, the bridge, arm supervisor, tuning, diagnostics, and feedback panels. Berkeley supplies the robot design and low-level platform. Simulation-to-hardware integration does not establish learned locomotion-policy transfer.",
    deepLinks: [
      {
        label: "Operator and setup guide",
        url: "https://github.com/joses2017smjh/quest-vr-teleop/blob/main/docs/VR_TELEOP.md",
      },
      {
        label: "Ten-joint calibration report",
        url: "https://github.com/joses2017smjh/quest-vr-teleop/blob/main/arm_validation/calibration_20260924_1111.md",
      },
      {
        label: "Single-wrist closed-loop step report",
        url: "https://github.com/joses2017smjh/quest-vr-teleop/blob/main/arm_validation/closed_loop/20260924_110748_can0_id9/report.txt",
      },
    ],
    stack: ["Python", "WebXR", "Quest 2", "Pink", "Pinocchio", "SocketCAN", "OpenCV"],
  },

  {
    slug: "metric-depth-pruning",
    contentId: "depth-estimation-robotic-pruning",
    title: "Vision-Based Metric Depth Estimation for Robotic Pruning",
    oneLineResult:
      "Five stored best-validation scores average 0.0445 ± 0.0057 m trunk RMSE on synthetic trees; V100 fp16 refiner-only p50 is 156 ms, excluding DA2 and HTTP.",
    lane: ["perception", "ml-engineering"],
    period: "Jan 2026 – Aug 2026",
    status: "shipped",
    heroAsset: "/media/depth/service_reconstruct.mp4",
    heroPoster: "/media/depth/service_reconstruct.jpg",
    metrics: [
      {
        label: "Stored best-validation RMSE — 3 stereo pairs, 5 seeds",
        value: "0.0445 ± 0.0057 m",
        source: "bench/results/seed_rmse.json",
        note: "Mean and sample std over the 5 listed best_rmse_m values. The file notes these are read from checkpoints, not re-scored on disk.",
      },
      {
        label: "Seed-1 re-render RMSE — 60 six-view groups",
        value: "0.0467 m",
        source: "bench/results/tesla-v100-sxm3-32gb_2026-08-22_eval.json",
        note: "Changed renders make this a separate evaluation, not a repeat of the stored best-validation scores. Real-orchard accuracy is unverified.",
      },
      {
        label: "Refiner-only p50 latency — V100 fp16, 6 views",
        value: "156 ms",
        source: "bench/results/tesla-v100-sxm3-32gb_2026-08-22.json",
        note: "Six 280×512 views, batch 1, 20 warmups and 200 timed calls; excludes DA2 and HTTP. Final fp16 entry p50 156.05 ms; earlier contended runs remain in the artifact.",
      },
      {
        label: "Refiner-only p50 latency — V100 fp32, 6 views",
        value: "393 ms",
        source: "bench/results/tesla-v100-sxm3-32gb_2026-08-22.json",
        note: "Final fp32 entry p50 393.47 ms; same timing scope, excluding DA2 and HTTP.",
      },
      {
        label: "Torch vs ONNX agreement — encoder, max abs",
        value: "1.5e-5",
        source: "bench/results/onnx_parity_2026-08-22.json",
        note: "graphs[0].max_abs = 1.52587890625e-05, gate < 1e-4. Split graph: encoder 1.23 GB, fuse_decode 26.9 MB.",
      },
      {
        label: "Trunk segmenter best validation IoU",
        value: "0.9295",
        source: "bench/results/trunk_unet_100tree.json",
        note: "best_val_iou at epoch 12, n_val = 120 synthetic images. Real-orchard accuracy is unverified.",
      },
      {
        label: "Depth RMSE through ground-truth vs predicted masks",
        value: "0.031 m → 0.112 m",
        source: "bench/results/trunk_unet_100tree.json",
        note: "field_rmse.da2_on_gt_mask_m 0.03069 vs da2_on_pred_mask_m 0.11197, n = 24. Predicted segmentation remains a deployment constraint.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/spur-depth-service",
    repoBranch: "master",
    siteUrl: `${SITE}/projects/depth-estimation-robotic-pruning/`,
    deepLinks: [
      {
        label: "Seed RMSE (the headline number)",
        url: "https://github.com/joses2017smjh/spur-depth-service/blob/master/bench/results/seed_rmse.json",
      },
      {
        label: "ONNX parity check",
        url: "https://github.com/joses2017smjh/spur-depth-service/blob/master/bench/results/onnx_parity_2026-08-22.json",
      },
      {
        label: "Refiner-only latency by GPU and precision",
        url: "https://github.com/joses2017smjh/spur-depth-service/blob/master/bench/results/tesla-v100-sxm3-32gb_2026-08-22.json",
      },
      {
        label: "Training experiments repo",
        url: "https://github.com/joses2017smjh/Vision-Based-Metric-Depth-Estimation-for-Robotic-Pruning",
      },
    ],
    stack: [
      "Python",
      "PyTorch",
      "DINOv2",
      "ONNX Runtime",
      "FastAPI",
      "Blender",
      "Docker",
    ],
  },

  {
    slug: "volumetric-twin",
    title: "Metric Depth to Volumetric Twin",
    oneLineResult:
      "Reproduced the SoccerNet-v3D baselines to 0.813 AP@0.5 against a published 0.81, then cut monocular ball-depth median error from 3.26 m to 2.82 m with a ballistic-window fit.",
    lane: ["perception", "ml-engineering"],
    period: "Jul 2026 – Aug 2026",
    status: "active",
    heroAsset: "TODO",
    metrics: [
      {
        label: "Ball detection AP@0.5 — YOLOopt, SNv3D-test",
        value: "0.813 (paper: 0.81)",
        source: "eval/PHASE1_RESULTS.md",
        note: "Cross-validated against Ultralytics model.val() at 0.816, agreement within 0.003.",
      },
      {
        label: "Geometry validation — reprojection vs published rep_error",
        value: "median 0.002 px over 4,051 frames",
        source: "README.md",
        note: "Asserted in the Status section. Committing the script output as a file under eval/ would make this self-proving.",
      },
      {
        label: "Monocular 3D error — localized frames, D = 0.22 m",
        value: "3.76 m median / 4.51 m mean (paper: 4.2 m)",
        source: "eval/PHASE1_RESULTS.md",
      },
      {
        label: "Ball depth median error — size prior vs ballistic window",
        value: "3.26 m → 2.82 m",
        source: "eval/TRACK2_RESULTS.md",
        note: "ISSIA-3D, cameras 3 and 4, 9-frame (360 ms) window, gated to 73% of windows.",
      },
      {
        label: "Estimates within 2 m (P2m)",
        value: "0.07 → 0.37 (5.4×)",
        source: "eval/TRACK2_RESULTS.md",
        note: "Mean worsens to 13.51 m — the physics estimator is bimodal. Quote both.",
      },
      {
        label: "Parallax gate — impossible annotations removed",
        value: "−57% by discarding 1.2%",
        source: "eval/TRACK4_RESULTS.md",
        note: "Spearman(sigma, reprojection error) = −0.188: reprojection error is anti-correlated with 3D reliability.",
      },
      {
        label: "Temporal aggregation — AP@0.5 (negative result)",
        value: "0.2180 → 0.2039",
        source: "eval/TRACK1_RESULTS.md",
        note: "Recall gains +2 to +6 points; AP drops across all 54 swept configs. Kept as a published negative result.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/Metric-Depth-to-Volumetric-Twin",
    repoBranch: "main",
    siteUrl: `${SITE}/projects/volumetric-twin`,
    paperUrl: "https://arxiv.org/abs/2504.10106",
    deepLinks: [
      {
        label: "Phase 1 — baseline reproduction",
        url: "https://github.com/joses2017smjh/Metric-Depth-to-Volumetric-Twin/blob/main/eval/PHASE1_RESULTS.md",
      },
      {
        label: "Track 2 — physics-constrained depth",
        url: "https://github.com/joses2017smjh/Metric-Depth-to-Volumetric-Twin/blob/main/eval/TRACK2_RESULTS.md",
      },
      {
        label: "Trajectory fit implementation",
        url: "https://github.com/joses2017smjh/Metric-Depth-to-Volumetric-Twin/blob/main/src/v3d/trajectory.py",
      },
    ],
    stack: ["Python", "PyTorch", "YOLOv11", "NumPy", "SciPy", "Camera Calibration"],
  },

  {
    slug: "soccer-mcp",
    contentId: "agentic-soccer-mcp",
    title: "Agentic Match Forecasting",
    oneLineResult:
      "Trained strictly pre-tournament on 8,946 internationals, the forecaster scores 0.9013 log loss and 62.75% accuracy over 102 played World Cup 2026 matches.",
    lane: ["ml-engineering"],
    period: "Jun 2026 – Aug 2026",
    status: "shipped",
    heroAsset: "/media/soccer/agent_console.mp4",
    heroPoster: "/media/soccer/agent_console_poster.jpg",
    metrics: [
      {
        label: "Log loss — 102 played WC26 matches",
        value: "0.9013",
        source: "docs/wc26_report.md",
        note: "Brier 0.5331, RPS 0.1773. Trained on data strictly before 2026-06-01; no tournament leakage.",
      },
      {
        label: "Accuracy — same 102 matches",
        value: "62.75%",
        source: "docs/wc26_report.md",
        note: "Table value is 0.6275. Site and resume round to 62.7%.",
      },
      {
        label: "Split-conformal coverage vs 0.90 target",
        value: "0.951 (mean set size 2.45)",
        source: "docs/wc26_report.md",
      },
      {
        label: "Training internationals (2016 – May 2026)",
        value: "8,946",
        source: "docs/wc26_report.md",
        note: "Runs without a market anchor: no odds exist for free international data.",
      },
    ],
    repoUrl:
      "https://github.com/joses2017smjh/Agentic-Soccer-Match-Prediction-MCP",
    repoBranch: "main",
    siteUrl: `${SITE}/projects/soccer-mcp`,
    deepLinks: [
      {
        label: "World Cup 2026 scored report",
        url: "https://github.com/joses2017smjh/Agentic-Soccer-Match-Prediction-MCP/blob/main/docs/wc26_report.md",
      },
      {
        label: "Metric implementations",
        url: "https://github.com/joses2017smjh/Agentic-Soccer-Match-Prediction-MCP/blob/main/src/eval/metrics.py",
      },
      {
        label: "Deterministic agent golden set",
        url: "https://github.com/joses2017smjh/Agentic-Soccer-Match-Prediction-MCP/blob/main/evals/golden_set.py",
      },
    ],
    stack: [
      "Python",
      "LangGraph",
      "MCP",
      "XGBoost",
      "Conformal Prediction",
      "FastAPI",
      "Next.js",
      "Docker",
    ],
  },

  {
    slug: "point-cloud-classification",
    title: "Point Cloud Classification",
    oneLineResult:
      "The saved 40-class Point Transformer notebook reports 86.79% test accuracy on 2,468 ModelNet40 clouds.",
    lane: ["perception"],
    period: "Winter 2025",
    status: "coursework",
    heroAsset: "/media/pointcloud/pointtransformer_good_monitor.mp4",
    heroPoster: "/media/pointcloud/pointtransformer_architecture.svg",
    metrics: [
      {
        label: "Point Transformer test accuracy — ModelNet40",
        value: "86.79%",
        source: "train_pointtransformer.ipynb",
        note: "Saved notebook output, run 2025-03-21: 9,843 training examples, 2,468 test examples, 40 classes. The separate 10-class architecture figure is an older experiment.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/PointCloudclassification",
    repoBranch: "main",
    siteUrl: `${SITE}/projects/point-cloud-classification`,
    deepLinks: [
      {
        label: "Point Transformer training notebook",
        url: "https://github.com/joses2017smjh/PointCloudclassification/blob/main/train_pointtransformer.ipynb",
      },
      {
        label: "Attention model implementation",
        url: "https://github.com/joses2017smjh/PointCloudclassification/blob/main/pointtransformer.py",
      },
      {
        label: "PointNet baseline",
        url: "https://github.com/joses2017smjh/PointCloudclassification/blob/main/pointnet.py",
      },
    ],
    stack: ["Python", "PyTorch", "Point Clouds", "Attention"],
  },

  {
    slug: "omr-llm",
    contentId: "dom-math-transformer",
    title: "DoM: Math Problems to Computation Graphs",
    oneLineResult:
      "Constrained decoding into valid computation graphs reaches 77.45% exact graph match and 84.78% 2-gram BLEU on the MathQA test set.",
    lane: ["ml-engineering"],
    period: "Fall 2025 – Jan 2026",
    status: "coursework",
    heroAsset: "/media/dom/success_hard.mp4",
    heroPoster: "/media/dom/success_hard_poster.jpg",
    metrics: [
      {
        label: "Exact graph match — MathQA test, smart_sample decoding",
        value: "77.45%",
        source: "EXTERNAL: public/media/papers/dom-paper.pdf",
        note: "Course report, test table with smart_sample. Verified against main.tex Table tab:test_results_smart_sample. The repo commits no report — stats/accuracies_test.txt instead logs 77.65%. Resolve before an interview.",
      },
      {
        label: "2-gram BLEU — same run",
        value: "84.78%",
        source: "EXTERNAL: public/media/papers/dom-paper.pdf",
        note: "Repo log says 84.89%. Same disagreement as above.",
      },
      {
        label: "Average graph edit distance — same run",
        value: "2.72",
        source: "EXTERNAL: public/media/papers/dom-paper.pdf",
        note: "Repo log says 2.56.",
      },
      {
        label: "Trainable parameters",
        value: "12,075,298",
        source: "stats/accuracies_test.txt",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/OMR_LLM",
    repoBranch: "main",
    siteUrl: `${SITE}/projects/omr-llm`,
    paperUrl: `${SITE}/media/papers/dom-paper.pdf`,
    collaboration:
      "Course project with a co-author. I co-developed the tokenizer, data loader, model, training loop, and the constrained decoder.",
    deepLinks: [
      {
        label: "Constrained decoder",
        url: "https://github.com/joses2017smjh/OMR_LLM/blob/main/models/DecoderTransformer.py",
      },
      {
        label: "Graph edit distance scoring",
        url: "https://github.com/joses2017smjh/OMR_LLM/blob/main/graph_edit.py",
      },
      {
        label: "Evaluation entry point",
        url: "https://github.com/joses2017smjh/OMR_LLM/blob/main/evaluate.py",
      },
    ],
    stack: ["Python", "PyTorch", "Transformers", "NetworkX"],
  },

  {
    slug: "metanavit",
    title: "MetaNaviT: Retrieval over Research Files",
    oneLineResult:
      "On 300 SciFact queries, hybrid retrieval plus reranking improves paired nDCG@10 by 0.075 over BM25 (95% bootstrap CI 0.053–0.101); the fp16/cap-512 GPU configuration lowers benchmark p50 from 923 to 191 ms with a quality tie.",
    lane: ["ml-engineering"],
    period: "Oct 2024 – Aug 2026",
    status: "shipped",
    heroAsset: "/media/metanavit/ask.mp4",
    heroPoster: "/media/metanavit/ask_poster.jpg",
    metrics: [
      {
        label: "SciFact paired nDCG@10 gain over BM25 — 300 queries",
        value: "+0.075; 95% bootstrap CI [0.053, 0.101]",
        source: "bench/results/beir_scifact.json",
        note: "Hybrid RRF plus bge-reranker-v2-m3 over the recorded BM25 baseline, real embedding/reranking models. One dataset and domain; the reranker increment over hybrid alone is a statistical tie.",
      },
      {
        label: "SciFact in-memory GPU benchmark query p50",
        value: "923 → 191 ms; quality tie",
        source: "bench/results/beir_scifact.json",
        note: "fp32 uncapped versus fp16/cap-512 reranker, top 20. Paired nDCG@10 delta +0.002, CI [-0.008, 0.010]. Not end-to-end service latency; CPU uses a different configuration.",
      },
      {
        label: "Historical fixture Recall@50 — 136 queries, 61 files",
        value: "0.938",
        source: "bench/results/latest.json",
        note: "Historical hash-embedding/token-overlap fixture, not a live neural-model or large-corpus benchmark. results[].retrieval is 0.9382; unchanged by rerank, router, or staleness.",
      },
      {
        label: "Historical fixture nDCG@10 — full stack",
        value: "0.493",
        source: "bench/results/latest.json",
        note: "Historical hash-embedding/token-overlap fixture: hybrid+rerank+router+staleness = 0.4926; overlap rerank alone is 0.4517. Separate from SciFact neural-model evaluation.",
      },
      {
        label: "Historical fixture exact-path nDCG@10 — router (n = 8)",
        value: "0.875 → 0.938",
        source: "bench/results/latest.json",
        note: "by_category.exact_path: 0.875 at hybrid+rerank, 0.9375 with the router. The repo README quotes 0.596 → 0.938, a different pair of configs; both are true.",
      },
      {
        label: "Historical fixture scale",
        value: "136 questions over 61 files, 8 categories",
        source: "bench/gold/questions.jsonl",
        note: "File is 136 lines. n_gold and n_files in latest.json agree. No LLM judge.",
      },
      {
        label: "Historical fixture graph expansion — negative control",
        value: "Recall@50 0.938 → 0.986, nDCG@10 0.495 → 0.446",
        source: "bench/results/sweeps.json",
        note: "One hop costs ~6× wall time and loses ranking quality; default stays graph_hops = 0.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/MetaNavT",
    repoBranch: "main",
    siteUrl: `${SITE}/projects/metanavit`,
    collaboration:
      "MetaNaviT began as a team capstone at klaurie/MetaNaviT, where I am one of seven contributors (40 of 305 commits). This repository is my own later rebuild, and every metric above was measured here, not there.",
    deepLinks: [
      {
        label: "SciFact neural-model paired benchmark",
        url: "https://github.com/joses2017smjh/MetaNavT/blob/main/bench/results/beir_scifact.json",
      },
      {
        label: "Committed benchmark run",
        url: "https://github.com/joses2017smjh/MetaNavT/blob/main/bench/results/latest.json",
      },
      {
        label: "136-question gold set",
        url: "https://github.com/joses2017smjh/MetaNavT/blob/main/bench/gold/questions.jsonl",
      },
      {
        label: "Query router",
        url: "https://github.com/joses2017smjh/MetaNavT/blob/main/app/retrieval/router.py",
      },
      {
        label: "Original team capstone",
        url: "https://github.com/klaurie/MetaNaviT",
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "BM25",
      "RRF",
      "MCP",
      "Docker",
    ],
  },

  {
    slug: "isaac-pruning-workflow",
    title: "Vision-Guided Pruning in Isaac Sim",
    oneLineResult:
      "Depth-aware appearance checks pass 4/4 targeted low-sun trials and reject genuine occlusion controls; a separate tree1 population passes 2/7, with 199/199 ROS 2 replay decision matches.",
    lane: ["perception", "robotics-rl"],
    period: "Aug 2026 – present",
    status: "active",
    heroAsset: "/media/pruning/isaac_tree1_v15004_evening_depth_check_pass.mp4",
    heroPoster: "/media/pruning/isaac_tree1_v15004_evening_depth_check_pass.jpg",
    metrics: [
      {
        label: "Depth-aware appearance variant — targeted low-sun trials",
        value: "4 / 4 pass 17 / 17 checks",
        source: "docs/evidence/depth_loop_verdicts_2026-10-02.json",
        note: "Target 15004, morning/evening, two repeats each. Changed gate uses noise-free, perfectly registered RTX simulator depth; genuine jaw/wire controls stop. Separate from baseline populations.",
      },
      {
        label: "First registered sweep — planned trials",
        value: "0 / 40; 20 infrastructure errors",
        source: "docs/evidence/eval_2026-09-23.json",
        note: "Invalid tree1 registrations account for 20 trials. This planned denominator is not a valid reliability estimate.",
      },
      {
        label: "Later listed tree1 target population",
        value: "2 / 7",
        source: "docs/evidence/tree1_listed_2026-09-24.json",
        note: "Separate registered-target protocol with no infrastructure errors; not the targeted depth-aware variant.",
      },
      {
        label: "Seeded tree1 target population",
        value: "1 / 30",
        source: "docs/evidence/perception_round_2026-09-28/tree1-seeded30-20260926.json",
        note: "Separate sampling protocol; 21 trials refuse their initial layout. Do not pool with listed targets or diagnostic variants.",
      },
      {
        label: "ROS 2 Humble software-in-the-loop decision parity",
        value: "199 / 199 states; 67 command comparisons within 2 mm",
        source: "docs/evidence/ros2_sil_parity_2026-09-23.json",
        note: "Replay of one simulator capture; maximum command difference 1.9954 mm. No physical sensor input or hardware actuation.",
      },
      {
        label: "Selected baseline episode — job 21328323 checks",
        value: "17 / 17",
        source: "docs/evidence/two_tree_summary_2026-09-14.json",
        note: "Graded from the saved capture; one selected episode, not a population success rate. 11 capture checks also passed. Only the public aggregate was rechecked here.",
      },
      {
        label: "Vision commands applied",
        value: "68 over 200 frames (20 s)",
        source: "docs/evidence/two_tree_summary_2026-09-14.json",
      },
      {
        label: "Spur release and measured fall",
        value: "7.8 s, 809.49 mm",
        source: "docs/evidence/two_tree_summary_2026-09-14.json",
        note: "maximum_post_detach_drop_m 0.80949. Discrete rigid-piece release; no wood fracture model.",
      },
      {
        label: "Home return error",
        value: "7.5e-7 m",
        source: "docs/evidence/two_tree_summary_2026-09-14.json",
        note: "final_home_error_m. Under 0.001 mm.",
      },
      {
        label: "Published failure — job 21317409",
        value: "stopped at 7.7 s, confidence 0.14165 below the 0.15 gate",
        source: "docs/evidence/two_tree_summary_2026-09-14.json",
        note: "Two more failures (21316823 incoherent motion, 21317169 tracking loss) stay in the same file.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/isaac-sim-pruning-workflow",
    repoBranch: "develop",
    siteUrl: `${SITE}/projects/isaac-pruning-workflow`,
    deepLinks: [
      {
        label: "October 2 depth-aware appearance verdicts",
        url: "https://github.com/joses2017smjh/isaac-sim-pruning-workflow/blob/develop/docs/evidence/depth_loop_verdicts_2026-10-02.json",
      },
      {
        label: "ROS 2 replay methodology",
        url: "https://github.com/joses2017smjh/isaac-sim-pruning-workflow/blob/develop/docs/ROS2_SIL.md",
      },
      {
        label: "Measured two-tree summary",
        url: "https://github.com/joses2017smjh/isaac-sim-pruning-workflow/blob/develop/docs/evidence/two_tree_summary_2026-09-14.json",
      },
      {
        label: "Closure-failure evidence",
        url: "https://github.com/joses2017smjh/isaac-sim-pruning-workflow/blob/develop/docs/demo/isaac_two_trees_closure_failure.json",
      },
      {
        label: "Success recording",
        url: "https://github.com/joses2017smjh/isaac-sim-pruning-workflow/releases/download/isaac-vision-2026-09-13/isaac_two_trees_vision_sequence.mp4",
      },
    ],
    stack: [
      "Python",
      "Isaac Sim",
      "Isaac Lab",
      "OpenCV",
      "RGB-D",
      "Time of Flight",
      "ROS 2",
      "C++17",
      "USD",
      "Slurm",
    ],
  },

  {
    slug: "bhl-robustness-ladder",
    title: "Humanoid Robustness Ladder",
    oneLineResult:
      "Biped transfer falls in 21/90 unrandomized MuJoCo episodes versus 0/90 with the default; lidar mapping and scripted A* reach 24/24 unseen mazes with oracle pose and goal.",
    lane: ["robotics-rl"],
    period: "Jun 2026 – present",
    status: "active",
    heroAsset: "/media/bhl/multi_lab.mp4",
    heroPoster: "/media/bhl/multi_lab.jpg",
    metrics: [
      {
        label: "Biped MuJoCo falls — no randomization vs default",
        value: "21 / 90 vs 0 / 90",
        source: "results/flat_summary.csv",
        note: "Three trained policies, six commands, and five evaluation seeds per setting. Simulation comparison, not hardware locomotion.",
      },
      {
        label: "Biped unseen-maze completion — 5×5 and 6×6",
        value: "24 / 24; no falls or wall contacts",
        source: "docs/RANDOM_MAZE.md",
        note: "Two 12-layout conditions. Learned gait, lidar-built map, scripted A*, oracle pose and goal; not learned navigation.",
      },
      {
        label: "Qualified 22-DoF humanoid — fresh 6×6 mazes",
        value: "12 / 12",
        source: "results/maze-humanoid-20260928/humanoid-hard-6x6/summary.json",
        note: "One qualified checkpoint; separate from the biped populations. Scripted mapping/planning uses oracle pose and goal.",
      },
      {
        label: "Hard mazes — 35% lidar packet dropout",
        value: "12 / 12 goals; 11 / 12 without wall contacts",
        source: "results/maze-robust-20260926/dropout35-hard-6x6/summary.json",
        note: "Separate sensor-dropout condition; do not pool with nominal clean navigation.",
      },
      {
        label: "October 2 actor-clock recipe qualification",
        value: "FAIL; 1 / 3 seeds qualifies",
        source: "results/repo-gpu-20260923/turngait-r12-20261001/verdict/R1.json",
        note: "Turning improves across three seeds, but only one also passes unchanged straight-walk and push qualification; the recipe requires two.",
      },
      {
        label: "October 2 critic-only clock control",
        value: "FAIL; 0 / 3 seeds qualifies",
        source: "results/repo-gpu-20260923/turngait-r12-20261001/verdict/R2.json",
        note: "Negative control; turning alone does not establish a qualified locomotion recipe.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/bhl-robustness-ladder",
    repoBranch: "main",
    siteUrl: `${SITE}/projects/bhl-robustness-ladder`,
    deepLinks: [
      {
        label: "Findings ledger, retractions included",
        url: "https://github.com/joses2017smjh/bhl-robustness-ladder/blob/main/docs/FINDINGS.md",
      },
      {
        label: "Full technical report",
        url: "https://github.com/joses2017smjh/bhl-robustness-ladder/blob/main/docs/REPORT.md",
      },
      {
        label: "Lidar-mapped navigation",
        url: "https://github.com/joses2017smjh/bhl-robustness-ladder/blob/main/docs/RANDOM_MAZE.md",
      },
      {
        label: "October 2 actor-clock verdict",
        url: "https://github.com/joses2017smjh/bhl-robustness-ladder/blob/main/results/repo-gpu-20260923/turngait-r12-20261001/verdict/R1.json",
      },
    ],
    stack: [
      "Python",
      "Isaac Lab",
      "MuJoCo",
      "PPO",
      "ONNX",
      "Reinforcement Learning",
      "Slurm",
    ],
  },

  {
    slug: "isaac-folding",
    title: "Bimanual Garment Folding in Isaac Sim",
    oneLineResult:
      "Paired v8 evaluation improves H10 settled folds to 9/16 from 2/16, but H50 drops to 6/16 from 8/16; the checkpoint promotion gate fails and the baseline is retained.",
    lane: ["robotics-rl", "perception"],
    period: "Aug 2026 – present",
    status: "active",
    heroAsset: "/media/folding/policy-fold-success.mp4",
    heroPoster: "/media/folding/policy-fold-success.jpg",
    metrics: [
      {
        label: "v8 settled-fold outcome — H10 candidate vs baseline",
        value: "9 / 16 vs 2 / 16",
        source: "campaigns/20260926-anchor-diagnostic-v8/ledger/driver_state.json",
        note: "600 actions plus 60-step settle; H10 replans after 10 actions of a 50-action chunk. Eight reused development poses, shared-seed repeats, anchor overlap, and GPU effects limit generalization.",
      },
      {
        label: "v8 settled-fold outcome — H50 candidate vs baseline",
        value: "6 / 16 vs 8 / 16",
        source: "campaigns/20260926-anchor-diagnostic-v8/ledger/driver_state.json",
        note: "H50 executes the full 50-action chunk and is the shipped configuration. Long-horizon non-regression fails despite the H10 improvement.",
      },
      {
        label: "v8 valid scored episodes and promotion verdict",
        value: "64 / 64 valid; FAIL; baseline retained",
        source: "campaigns/20260926-anchor-diagnostic-v8/REPORT.md",
        note: "Latest completed paired study, September 27; confirmatory set unspent. Episode validity is separate from fold success. Later v9 status has no completed outcome.",
      },
      {
        label: "Historical short-pants checker-pass sweep",
        value: "2 / 8 transient passes",
        source: "results/outcome_sweep.tsv",
        note: "Earlier checkpoint and ever-triggered/latched checker metric; not the final settled-fold endpoint. Hero media shows a historical selected transient checker pass, separate from v8.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/IsaacSimFolding",
    repoBranch: "main",
    siteUrl: `${SITE}/projects/isaac-folding`,
    collaboration:
      "I built the Isaac Sim port, observation path, domain-gap diagnostics, recovery-training adaptations, and paired evaluation drivers. SmolVLA, robot and garment assets, and the challenge checker are upstream components.",
    deepLinks: [
      {
        label: "Historical transient checker-pass sweep",
        url: "https://github.com/joses2017smjh/IsaacSimFolding/blob/main/results/outcome_sweep.tsv",
      },
      {
        label: "Latest completed paired study",
        url: "https://github.com/joses2017smjh/IsaacSimFolding/blob/main/campaigns/20260926-anchor-diagnostic-v8/REPORT.md",
      },
      {
        label: "Long-form method notes",
        url: "https://github.com/joses2017smjh/IsaacSimFolding/blob/main/docs/README_long.md",
      },
    ],
    stack: [
      "Python",
      "Isaac Sim",
      "Flow Matching",
      "Vision-Language-Action",
      "Imitation Learning",
      "Slurm",
    ],
  },
];

/** Lookup by slug. */
export const bySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);

/** Projects carrying evidence for one hiring lane. */
export const byLane = (lane: Lane): Project[] =>
  PROJECTS.filter((p) => p.lane.includes(lane));

/** Every metric still lacking a defensible value or source. */
export const openMetrics = (): Array<{ slug: string; metric: Metric }> =>
  PROJECTS.flatMap((p) =>
    p.metrics
      .filter((m) => m.value === "TODO" || m.source === "TODO")
      .map((metric) => ({ slug: p.slug, metric })),
  );
