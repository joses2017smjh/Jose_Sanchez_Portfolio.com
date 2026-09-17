/**
 * The project registry — one source of truth.
 *
 * Every project page, card, README header, OG tag, and repo description is
 * generated from this file. Nothing here is prose: the narrative lives in
 * src/content/projects/*.mdx, the method lives in each repo. This file holds
 * only the facts that have to agree across the site, the repos, and the
 * resume.
 *
 * THE RULE ON NUMBERS
 * Every metric carries a `source` — a path, inside the repo named by
 * `repoUrl`, to a file that actually contains that value. A value that could
 * not be traced to such a file is `"TODO"`, never a plausible-looking number.
 * `note` records provenance trouble: a figure two files in the same repo
 * disagree about, or one whose only witness is outside the repo.
 *
 * `npm run check:links` enforces all of it.
 */

/** Which hiring lane a project is evidence for. */
export type Lane = "perception" | "robotics-rl" | "ml-engineering";

export type Status =
  /** Runs, measured, not being changed. */
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
  /** Full URL to a specific file, notebook, or figure — never a repo root. */
  url: string;
}

export interface Project {
  /** Canonical slug. Also the site URL segment. */
  slug: string;
  /**
   * Filename in src/content/projects/ when it differs from `slug`.
   * Present only where renaming the slug would break a published URL.
   */
  contentId?: string;
  title: string;
  /** One sentence, contains a number. The same string everywhere it appears. */
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
  /** 2–3 exact files a reader should open. */
  deepLinks: DeepLink[];
  stack: string[];
  /** Set when the repo is not solely the author's work. Scopes the claim. */
  collaboration?: string;
}

const SITE = "https://jose-sanchez-portfolio-com.vercel.app";

export const PROJECTS: Project[] = [
  {
    slug: "metric-depth-pruning",
    contentId: "depth-estimation-robotic-pruning",
    title: "Vision-Based Metric Depth Estimation for Robotic Pruning",
    oneLineResult:
      "DINOv2 RGB+D refinement over 3 stereo pairs reaches 0.0445 ± 0.0057 m validation RMSE on synthetic dormant apple trees, served at 156 ms p50 on a V100.",
    lane: ["perception", "ml-engineering"],
    period: "Jan 2026 – Aug 2026",
    status: "shipped",
    heroAsset: "/media/depth/service_reconstruct.mp4",
    heroPoster: "/media/depth/gt_depth_example.png",
    metrics: [
      {
        label: "Validation RMSE — DINOv2 RGB+D, 3 stereo pairs, 5 seeds",
        value: "0.0445 ± 0.0057 m",
        source: "bench/results/seed_rmse.json",
        note: "Mean and sample std over the 5 listed best_rmse_m values. The file notes these are read from checkpoints, not re-scored on disk.",
      },
      {
        label: "Fine-tuned monocular baseline RMSE",
        value: "TODO",
        source: "TODO",
        note: 'Site and resume both claim 0.0550 m. Not present in any file under bench/results/. Likely the DA2-ft bar in the capstone paper ablation — confirm and commit a file, or drop the comparison.',
      },
      {
        label: "Held-out affine RMSE — DA2-ft, 2 paper validation trees",
        value: "0.0344 m",
        source: "bench/results/holdout_affine_2026-08-22.json",
        note: "holdout_rmse.da2_holdout_affine_m.rmse_m, n = 78 frames. Affine fit on 7 non-paper trees.",
      },
      {
        label: "Refiner p50 latency — V100 fp16, 6 views",
        value: "156 ms",
        source: "bench/results/tesla-v100-sxm3-32gb_2026-08-22.json",
        note: "Fourth entry (p50 156.05, mean 156.06). The file holds two runs per precision; the first fp32/fp16 pair is contended (p99 3247 ms) and must not be quoted.",
      },
      {
        label: "Refiner p50 latency — V100 fp32, 6 views",
        value: "393 ms",
        source: "bench/results/tesla-v100-sxm3-32gb_2026-08-22.json",
        note: "Third entry (p50 393.47, mean 393.53).",
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
        note: "best_val_iou at epoch 12, n_val = 120. The site currently says 0.894, which appears nowhere in this file — epoch 1 is 0.8984. Fix the site.",
      },
      {
        label: "Depth RMSE through ground-truth vs predicted masks",
        value: "0.031 m → 0.112 m",
        source: "bench/results/trunk_unet_100tree.json",
        note: "field_rmse.da2_on_gt_mask_m 0.03069 vs da2_on_pred_mask_m 0.11197, n = 24. The site rounds the second to 0.110; it is 0.112.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/spur-depth-service",
    repoBranch: "master",
    siteUrl: `${SITE}/projects/metric-depth-pruning`,
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
        label: "Latency by GPU and precision",
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
      {
        label: "Deterministic agent evaluation suite",
        value: "TODO",
        source: "TODO",
        note: 'Site claims a "28-task deterministic agent suite". evals/golden_set.py shows 11 task constructors. Recount and state the real number, or drop the claim.',
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
      "A local-attention point transformer reaches 86.79% accuracy on 2,468 held-out ModelNet10 clouds, and its confusion matrix shows where the geometry stops being enough.",
    lane: ["perception"],
    period: "Winter 2025",
    status: "coursework",
    heroAsset: "/media/pointcloud/pointtransformer_good_monitor.mp4",
    heroPoster: "/media/pointcloud/pointtransformer_architecture.svg",
    metrics: [
      {
        label: "Point Transformer test accuracy — ModelNet10",
        value: "86.79%",
        source: "train_pointtransformer.ipynb",
        note: "Notebook output cell, run 2025-03-21, over 2,468 test examples. The only committed number in this repo.",
      },
      {
        label: "PointNet baseline test accuracy",
        value: "TODO",
        source: "TODO",
        note: "train_pointnet.ipynb has no accuracy in its saved outputs. Re-run it to get the comparison the write-up implies.",
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
      "Hybrid retrieval with routing and staleness filtering reaches Recall@50 0.938 and nDCG@10 0.493 over a frozen 61-file corpus scored by 136 labeled queries.",
    lane: ["ml-engineering"],
    period: "Oct 2024 – Aug 2026",
    status: "shipped",
    heroAsset: "/media/metanavit/ask.mp4",
    heroPoster: "/media/metanavit/ask_poster.jpg",
    metrics: [
      {
        label: "Recall@50 — 136 gold queries, 61-file corpus",
        value: "0.938",
        source: "bench/results/latest.json",
        note: "results[].retrieval for hybrid and every stage after it: 0.9382. Unchanged by rerank, router, or staleness.",
      },
      {
        label: "nDCG@10 — full stack",
        value: "0.493",
        source: "bench/results/latest.json",
        note: "hybrid+rerank+router+staleness = 0.4926. Requires the staleness tier; overlap rerank alone is 0.4517. The site's wording credits rerank and should name staleness.",
      },
      {
        label: "Exact-path nDCG@10 — rerank, then + router (n = 8)",
        value: "0.875 → 0.938",
        source: "bench/results/latest.json",
        note: "by_category.exact_path: 0.875 at hybrid+rerank, 0.9375 with the router. The repo README quotes 0.596 → 0.938, a different pair of configs; both are true.",
      },
      {
        label: "Benchmark scale",
        value: "136 questions over 61 files, 8 categories",
        source: "bench/gold/questions.jsonl",
        note: "File is 136 lines. n_gold and n_files in latest.json agree. No LLM judge.",
      },
      {
        label: "Graph expansion — the committed negative control",
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

  // ---------------------------------------------------------------------
  // Below this line: on the site and among the strongest work, but absent
  // from the six repos named in the brief. Flagged for a keep/cut decision.
  // ---------------------------------------------------------------------

  {
    slug: "isaac-pruning-workflow",
    title: "Vision-Guided Pruning in Isaac Sim",
    oneLineResult:
      "A UR5e drives from live wrist RGB-D to a gated spur release in Isaac Sim, passing 17 of 17 independent sequence checks and returning home within 0.001 mm.",
    lane: ["perception", "robotics-rl"],
    period: "Aug 2026 – Sep 2026",
    status: "active",
    heroAsset: "/media/pruning/isaac_two_trees_vision_sequence.mp4",
    heroPoster: "/media/pruning/isaac_two_trees_vision_sequence.jpg",
    metrics: [
      {
        label: "Independent sequence checks passed — job 21328323",
        value: "17 / 17",
        source: "docs/evidence/two_tree_summary_2026-09-14.json",
        note: "Graded from the saved capture, not the renderer's own success label. 11 capture checks also passed.",
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
      "USD",
      "Slurm",
    ],
  },

  {
    slug: "bhl-robustness-ladder",
    title: "Humanoid Robustness Ladder",
    oneLineResult:
      "Scoring PPO policies in MuJoCo across 6,348 sim-to-sim episodes inverts the training-reward ranking: the unrandomized policy falls 23% of the time where the default falls 0%.",
    lane: ["robotics-rl"],
    period: "Jun 2026 – Sep 2026",
    status: "active",
    heroAsset: "/media/bhl/multi_race.mp4",
    heroPoster: "/media/bhl/multi_race_poster.jpg",
    metrics: [
      {
        label: "Scored sim-to-sim episodes",
        value: "6,348",
        source: "docs/FINDINGS.md",
        note: "288 rendered rollouts alongside. REPORT.md agrees on this number.",
      },
      {
        label: "Policies trained",
        value: "TODO",
        source: "TODO",
        note: "The repo contradicts itself: README.md and docs/FINDINGS.md say 156; docs/REPORT.md says 89 with a breakdown that sums (48 biped + 8 22-DoF + 33 cooperative-lift). The site currently says 156. Pick one, fix the other two files, then set this.",
      },
      {
        label: "MuJoCo fall rate — unrandomized vs repo default",
        value: "23% vs 0%",
        source: "docs/REPORT.md",
        note: "Finding 1. The highest-training-reward policy is the one that falls.",
      },
      {
        label: "Findings, of which retractions",
        value: "13 findings, 4 retractions",
        source: "docs/FINDINGS.md",
        note: "Retracted: 7, 9, 13, and the wedge argument in section 5. Left public.",
      },
      {
        label: "Best cooperative lift, then collapse",
        value: "7.8 cm, then a 41 cm drop before contact",
        source: "docs/FINDINGS.md",
      },
      {
        label: "Rough terrain fall rate — 22-DoF vs biped at d = 1.0",
        value: "11.7% vs 37.8%",
        source: "docs/REPORT.md",
        note: "Finding 3. An 11× reduction against the randomization-only biped.",
      },
      {
        label: "Free-standing rigid-proxy sort",
        value: "TODO",
        source: "TODO",
        note: 'Site claims "sorts 22 of 24 rigid proxies with no falls". Neither REPORT.md nor FINDINGS.md contains 22-of-24; the cloth sweep there records a garment moving 0.07 mm (job 21300493). Find the run or cut the sentence.',
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
        label: "Per-arm episode results",
        url: "https://github.com/joses2017smjh/bhl-robustness-ladder/tree/main/results/arms",
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
      "A flow-matching VLA policy folds short pants in 2 of 8 held-out poses, scored success by the LeHome challenge's own checker, up from 0 of 16 before the domain-gap fix.",
    lane: ["robotics-rl", "perception"],
    period: "Aug 2026 – present",
    status: "active",
    heroAsset: "/media/folding/demonstration-replay.mp4",
    heroPoster: "/media/folding/demonstration-replay.jpg",
    metrics: [
      {
        label: "Short-pants fold success — held-out poses",
        value: "2 of 8 (25%)",
        source: "README.md",
        note: "Closed-loop policy, no demonstration actions. Scored by the challenge's own success_checker_garment_fold.",
      },
      {
        label: "Other three garment classes",
        value: "0 of 4",
        source: "README.md",
        note: "Each class has its own fold criteria; passing one says nothing about the others. Not a solved task.",
      },
      {
        label: "Rasterised training frames",
        value: "18,200",
        source: "README.md",
        note: "Reaching 2-of-8 from 0-of-16 took the domain-gap diagnosis plus unfreezing the action decoder.",
      },
      {
        label: "Checker fire step on the headline fold",
        value: "step 119 of 400",
        source: "README.md",
      },
      {
        label: "Action-fidelity sweep",
        value: "TODO",
        source: "results/outcome_sweep.tsv",
        note: "The file is committed but I have not read a headline value out of it. Name the number this sweep establishes, or drop the row.",
      },
    ],
    repoUrl: "https://github.com/joses2017smjh/IsaacSimFolding",
    repoBranch: "main",
    siteUrl: `${SITE}/projects/isaac-folding`,
    collaboration:
      "A reproduction. The 'Learning to Fold' work being reproduced placed 1st of 62 in the LeHome Challenge 2026 — that placement is the original authors', not mine. What is mine is the Isaac Sim port, the domain-gap diagnosis, and the scored rollouts.",
    deepLinks: [
      {
        label: "Outcome sweep",
        url: "https://github.com/joses2017smjh/IsaacSimFolding/blob/main/results/outcome_sweep.tsv",
      },
      {
        label: "Action fidelity at 30k steps",
        url: "https://github.com/joses2017smjh/IsaacSimFolding/blob/main/results/action_fidelity_030000.json",
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
