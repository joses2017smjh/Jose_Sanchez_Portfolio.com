# Quest VR preview

## 2026-10-14: physical robot feature and supported leg-motion clip

The front page now places the Quest preview beneath Humanoid Simulation, alongside
the existing complete-build photo and a separate supported leg-motion recording.
The corrected 16.5-second Quest preview below remains the lead video.

`supported-leg-motion.mp4` is a byte-for-byte copy of the supplied `pleasewalk.mp4`:
1,966,384 bytes, H.264/AAC, 480 × 854 portrait, approximately 7.04 seconds at
29 fps. Its source SHA-256 is
`4bbf1f4466436ce759d08b596827f6b0cd6e0bf8dfb8e769984e1d73afedb233`.
The matching poster is the original frame at three seconds, extracted with
FFmpeg 7.0.2 using `-frames:v 1 -q:v 2`. The entire video decoded successfully.

The assembled robot stays on its support rack during the clip. The recording
shows leg motion; no walking-policy identity or hardware-transfer result is
inferred from the filename. Source framing, timing, and audio are preserved.
Playback starts muted and the native controls allow sound to be enabled.

## 2026-10-14: remove the cropped IMU close-up

The previous 19-second preview at website commit
`92b8b4d27565ccedff5d1152dddb9fc43f8aa918` contains an oversized IMU shot
from 11.5 to 14 seconds. Its left and lower panel edges are outside the
recorded frame. The uncropped source recording was not available for this edit.

The revised preview omits that shot and joins the surrounding depth/flow and
lidar footage. It retains the remaining shots, their order and playback rates,
the original panel-summary labels, and the existing poster. The resulting
preview is approximately 16.5 seconds at 1280 × 720, 24 fps, with no audio.
No telemetry or missing image regions were generated.

Reproduce from the previous MP4 with FFmpeg 7.0.2:

```sh
ffmpeg -i quest-before-fix.mp4 \
  -filter_complex '[0:v]trim=end=11.5,setpts=PTS-STARTPTS[a];[0:v]trim=start=14,setpts=PTS-STARTPTS[b];[a][b]concat=n=2:v=1:a=0,fps=24[v]' \
  -map '[v]' -an -c:v libx264 -preset slow -crf 18 \
  -pix_fmt yuv420p -movflags +faststart quest-vr-teleop.mp4
```
