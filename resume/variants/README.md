# Four resume variants

All four are standalone `.tex` files — copy any one into Overleaf and compile.
Same header, same experience, same education. What changes is the tagline, the
summary, the skills grouping, and which four projects appear.

Each file has a comment block at the top naming its projects, why they were
chosen, and — if it runs onto a second page — the exact order to cut things.

## Which one to send

| File | Send it when | Projects |
|---|---|---|
| `resume_general.tex` | **Default.** Any AI/ML role without a strong reason to send another. | SPUR depth · Humanoid Ladder · MetaNaviT · Agentic Forecasting |
| `resume_robotics.tex` | Robotics, perception, simulation, sim-to-real, autonomy. | SPUR depth · Humanoid Ladder · Isaac Pruning · Garment Folding |
| `resume_halluminate.tex` | Halluminate, and any RL-environment / agent-evaluation company. | Humanoid Ladder · Agentic Forecasting · MetaNaviT · Garment Folding |
| `resume_rag-ml.tex` | RAG, LLM systems, applied NLP, general ML engineering. | MetaNaviT · Agentic Forecasting · DoM · SPUR depth |

## Why `general` is the recommendation

It carries one project each from computer vision, reinforcement learning,
retrieval, and agents, and every one of them has a measured number attached.
That combination is rare in a new-graduate resume — most show either depth in
one area or breadth with no numbers. It also survives being read by a recruiter
who does not know which of your specialties their team actually needs.

Send `robotics` or `rag-ml` when the posting is unambiguous. Send `halluminate`
only to companies whose product is environments, benchmarks, or agent evals.

## The one-page question

None of these have been compiled — the LaTeX toolchain on the cluster is missing
`titlesec`, `fancyhdr` and base font metrics, so it cannot typeset this template.
They were sized by measuring typeset character count against `../resume.tex`,
which is known to fit on one page:

| variant | vs. the known one-page resume |
|---|---|
| robotics | +1% |
| rag-ml | +3% |
| general | +4% |
| halluminate | +5% |

That should fit, but +4–5% is close enough that a line or two could push over.
**Compile each in Overleaf and check.** If one spills, the header comment in that
file lists what to cut first.

## What is claimed, and what is not

Every number comes from the repository it cites. Two are worth stating precisely,
because they are easy to misread:

- **Garment folding.** The bullets say you *reproduced a method that placed
  first* — not that you placed first. The trained policy folds 0 of 9; every
  success in that repo is a demonstration replay, and the resume bullet is about
  the renderer-gap diagnosis, not a success rate.
- **SPUR.** The headline `0.0445 m` is the multi-view DINOv2 result from the
  paper. The hold-out affine number (`0.0344 m`) and the predicted-mask cost
  (`0.031 → 0.110 m`) are separate measurements; only the mask cost appears on
  the resume, framed as the sim-to-real cost. No TensorRT number appears
  anywhere, because there is no `.plan` on disk.

---

# Making these more competitive

You said you are open to adding features. Ranked by how much resume value each
adds per unit of work.

## 1. Get one number onto the folding project — highest value

Right now the policy folds 0 of 9, and the bullet sells the *diagnosis*. That is
genuinely good engineering, but a reviewer skimming sees a project with no
success metric. The renderer gap is already measured; what is missing is the
obvious follow-up:

**Fine-tune or augment on Storm-rasterised frames and report the new gap.** Even
a partial closure ("+0.976 → +0.31 after 2k rasterised frames, gap 1.014 → 0.67")
turns a failure analysis into a fix. This is the single highest-leverage addition
across all seven repositories, and the experiment is already scaffolded.

## 2. Close the loop on the pruning workflow

`isaac-sim-pruning-workflow` reports component checks, not a task metric. Its own
ROADMAP says learned depth, CuRobo execution and PPO training are unfinished. A
single end-to-end number — *cut success rate over N spurs on held-out trees* —
would let it lead the robotics resume instead of sitting third. The Isaac tool
hold currently fails its own gate (20.12 mm drift against a <5 mm limit); fixing
that gate is the prerequisite and is itself a reportable result.

## 3. Put a real corpus behind MetaNaviT

The benchmark is 136 questions over a 61-file demo tree. That is honest and
well-built, but "61 files" invites the question of whether it scales. Re-running
the *same* benchmark over your actual capstone directory — thousands of files,
genuinely adversarial staleness — and reporting how the metrics move would make
the strongest single line in the RAG resume much harder to dismiss.

## 4. Publish one of these

None of the seven is a preprint. The BHL robustness study and the folding
renderer-gap finding are both publishable as workshop papers, and either one
would let you add a Publications section — which changes how research-oriented
teams read the whole document. The BHL report is already written at that length.

## 5. Two things NOT to add

- **More projects.** Seven repositories is already more than fits. The
  constraint is page space, not material.
- **More tools in the skills list.** They are already dense. Every additional
  keyword dilutes the ones that matter.

## Gaps a reviewer will notice

- **No industry experience.** Both experience entries are university teaching.
  Nothing on this list fixes that, but the depth of the project work is the
  strongest available substitute — which is why the bullets carry numbers.
- **No published papers**, addressed in (4) above.
- **Location**, if you are applying to San Francisco companies. State
  relocation intent in the first line of the cover letter, not the resume.
