# Language-guided waiter demonstration

Prepared 2026-10-14 from an existing recorded simulation. The source is labeled `phase 3b SmolVLA policy`, development layout 1300. No new render, rollout, training, or synthesized media was produced. This is a selected demonstration; the on-screen display is explicitly marked as not a gate.

## Source and outputs

- Source: `/nfs/hpc/share/sanchej7/Humanoid_Lite/solutions-20260930/campaign-waiter/clips/run1/task/phase 3b SmolVLA policy_seed1300.mp4`.
- Source video: **54.40 s**, **810 × 484**, **12.5 fps**, H.264, **9,539,392 bytes**.
- Portfolio export: [`language-guided-task.mp4`](language-guided-task.mp4), **18.12 s**, **810 × 484**, **25 fps**, H.264 / yuv420p, **1,812,380 bytes**.
- Poster: [`language-guided-task.jpg`](language-guided-task.jpg), **810 × 484**, **82,981 bytes**, extracted at **6.00 s** of the exported video (source timestamp approximately **18.00 s**).

The MP4 plays at **3× speed**, matching the existing GIF's playback convention. The entire source was passed through the encoder without an input trim. The slight duration rounding comes from the 25 fps output cadence. No frames were interpolated. The full main view, head-camera panel, instruction, and status text retain the original framing; there is no crop, resize, or added overlay. The output has no audio.

The inspected poster shows the blue tumbler on the tray, with the language instruction and policy-input camera visible. It depicts an intermediate state, not an independently verified task-success score.

## Encoding

FFmpeg **7.0.2-static**, libx264, `-preset slow -crf 20`, `yuv420p`, and `+faststart` for progressive browser playback. JPEG extraction uses `-q:v 2`.

```sh
ffmpeg -i "phase 3b SmolVLA policy_seed1300.mp4" \
  -map 0:v:0 -vf 'setpts=(PTS-STARTPTS)/3,fps=25' -an \
  -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p \
  -movflags +faststart language-guided-task.mp4

ffmpeg -ss 6 -i language-guided-task.mp4 \
  -frames:v 1 -q:v 2 language-guided-task.jpg
```

## SHA-256

- Source: `e0049735705701d1edc01ba2b47df31e19399c3e026b0f904092935976cc45f3`
- MP4: `a2b61957248d079537f37d8da7a0726ccb3b9d9fdda7fa12cef31f5780f5fa27`
- JPG: `948c18af7ec7765ff2fbed4833cfb86fbab88f56a1e70174eeeabe8cb46b26f2`

Validation: the entire exported MP4 decoded successfully with FFmpeg `-xerror`; its `moov` atom precedes `mdat` as required by the faststart export.
