# Quest VR preview

## 2026-10-14: developer → diagnostics → calibration / Onshape

The panel overview now follows this order:

1. **Developer mode:** the recorded terminal and in-headset workspace.
2. **Sensor diagnostics:** separate frames of IMU telemetry and lidar output.
3. **Calibration / Onshape:** the Onshape-derived robot model and joint details.

`operator-dashboard.jpg` is the complete three-column overview. The three named
panel JPGs provide larger views in the VR case study. These are compositions
of actual recording frames, not a synchronized live sensor dashboard. The
front-page video shows the new overview at 4–7 seconds and ends with the recorded
model-to-joint-details transition at 12.5–16.5 seconds. Physical teleoperation
still leads; the complete preview remains 16.5 seconds at 1280 × 720 / 24 fps.

The model transition was recovered from the saved video at website commit
`44f65bdc4f12f7c8385417b5ab9232c1a0defd89` (source time 8.55–12.55 seconds).
The telemetry still comes from `e4a77cafbe04e1de5a9c779b110c987957c4c4ae`
at 11.55 seconds. Its source already clips the telemetry panel's left and lower
edges; a tighter static detail appears inside the overview, and the previous moving zoom
is not restored. No missing regions or measurements were generated.

[Frame timestamps, crops, source hashes, and export hashes](dashboard-frames.json)
record the exact edit. The developer terminal is cropped to its window;
the telemetry still also uses a tighter crop around the readings.
The other selected frames retain the captured view. The exported video fully decodes
to 396 frames / 16.5 seconds. Stereo/depth retains its labeled 1.5× playback;
the other footage retains its source playback rate.

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

The front-page leg-motion clip now joins the site's demo playback controls:
it loops automatically while visible, pauses off-screen, and respects reduced
motion and the global Pause demos button. The project-page clip uses the same
behavior when its section is opened and visible.

`supported-leg-motion.gif` provides an actual looping GIF as well: the full
portrait recording at 360 × 640 and 10 fps, with a 64-color palette. The edit
reduces resolution, frame rate, and colors without cropping or speeding up the
source. The GIF has no audio. [Export hashes and provenance](supported-leg-motion.json).

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
