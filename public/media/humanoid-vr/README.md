# Quest VR preview

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
