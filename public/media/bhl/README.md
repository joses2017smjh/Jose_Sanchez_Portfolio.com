# Humanoid media provenance

## Portfolio exports — 2026-10-14

These MP4 files are byte-for-byte copies of existing simulation recordings. No new rendering, training, rollouts, compositing, cropping, or playback-speed changes were performed for this export. Their H.264 / yuv420p encoding, 1280 × 720 framing, and 25 fps cadence are unchanged.

Source bundle: `/nfs/stak/users/sanchej7/humanoid_media/humanoid_relief_arms_20261014/`. Source hashes are recorded in `film/exports_complete.json` and `arms_film/arms_complete.json` in that bundle and match the exported files.

The terrain clips are selected camera views of an existing shared simulation, with the original 1× playback and on-screen labels retained. The separate arms clip uses the existing upstream full-body policy with 22 joint targets. These demonstrations do not establish hardware transfer or a new evaluation result.

| Export | Source within bundle | Duration | MP4 bytes | Poster time | JPG bytes |
|---|---|---:|---:|---:|---:|
| `terrain-ramp.mp4` | `film/detail_ramp_traverse.mp4` | 8.00 s | 1,886,264 | 4.00 s | 81,385 |
| `terrain-gravel.mp4` | `film/detail_gravel_traverse.mp4` | 8.00 s | 3,590,030 | 4.00 s | 144,017 |
| `terrain-bumpy.mp4` | `film/detail_bumpy_traverse.mp4` | 6.00 s | 2,044,006 | 3.00 s | 75,139 |
| `full-body-arms.mp4` | `arms_film/full_body_arms.mp4` | 16.00 s | 3,918,963 | 8.00 s | 63,290 |

Each poster is a native frame extracted from its matching exported MP4 using FFmpeg 7.0.2, JPEG quality `-q:v 2`. All four posters were inspected after extraction; source framing and labels are intact. The poster basename matches its video basename.

```sh
ffmpeg -ss POSTER_SECONDS -i CLIP.mp4 -frames:v 1 -q:v 2 CLIP.jpg
```

SHA-256 of each exported MP4:

- `terrain-ramp.mp4`: `5efc0b9e58877ad29b40ecdf3c338d64ba36aed240ad66c9000e92fc7879aa15`
- `terrain-gravel.mp4`: `1555ec572751f5fdbc72f1fb69de1a4119dc460dff8d1886f8de93d908f08564`
- `terrain-bumpy.mp4`: `1eb5907b89f98591ad6eb6aff28e01223421669a77cc3f87a0c3ade9758d279c`
- `full-body-arms.mp4`: `e7c1bb31da8ca1898547d35886503150b5c6d2b466426aa58cf0634f8d5b6b9c`

Validation: all four entire MP4 files decoded successfully with FFmpeg `-xerror`; their SHA-256 hashes match the original export manifests.
