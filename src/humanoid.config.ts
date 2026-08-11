/**
 * The Berkeley Humanoid Lite build log — a personal hardware project.
 * Narrative is condensed from Jose's own build posts; steps are in build
 * order and mix photos with short clips.
 */
export const humanoid = {
  title: "Berkeley Humanoid Lite",
  standfirst:
    "Building an open-source humanoid from scratch — self-funded, in a garage — to get first-hand experience across the whole stack, from soldering to reinforcement learning in NVIDIA Isaac Sim.",
  notes: [
    "Soldering 22 AS5600 magnetic encoders onto B-G431B-ESC1 controllers took two full days. It was also my first time soldering.",
    "Funded by hard work and sheer determination: about $6k in parts, paid for with 80-hour weeks. I came into it oblivious about the time and the cost, but once I'd committed to the printer I decided not to back down.",
    "The original goal was a fully tele-operated robot driven by an Oculus headset before the convention. Midterms, 2,000+ M3 inserts to count, and a few DIY 3D-printer repairs meant the project needed an extension.",
  ],
  status:
    "Arms mostly assembled and calibration underway; next up is finishing the limbs and moving to Isaac Sim for motion control and RL.",
  steps: [
    {
      kind: "image" as const,
      src: "/media/humanoid/01-workshop.jpg",
      alt: "Garage workbench with a 3D printer, staged actuator parts, and a CAD actuator shaft profile open on a laptop.",
      caption: "Bench set up — printer in, parts staged, actuator profiles on screen.",
    },
    {
      kind: "image" as const,
      src: "/media/humanoid/02-actuators.jpg",
      alt: "Jose at the bench holding an actuator housing, with rotors, bearings and gear plates laid out.",
      caption: "Building the actuators — rotors, bearings and housings.",
    },
    {
      kind: "image" as const,
      src: "/media/humanoid/03-wiring.jpg",
      alt: "Wiring diagram: AS5600 magnetic encoder to a B-G431B-ESC1 controller, with CAN H, CAN L and ground chained to the next motor.",
      caption: "One joint's wiring: AS5600 encoder to B-G431B-ESC1, CAN chained onward.",
    },
    {
      kind: "image" as const,
      src: "/media/humanoid/04-soldering.jpg",
      alt: "Two people soldering encoder boards at the bench.",
      caption: "22 encoders to solder, so my sister took a shift.",
    },
    {
      kind: "image" as const,
      src: "/media/humanoid/05-printed-parts.jpg",
      alt: "Bins of orange and black 3D-printed structural parts for the humanoid.",
      caption: "Every structural part, printed and sorted.",
    },
    {
      kind: "image" as const,
      src: "/media/humanoid/06-render.jpg",
      alt: "CAD render showing the full parts breakdown of the humanoid.",
      caption: "The CAD render the build works from.",
    },
    {
      kind: "image" as const,
      src: "/media/humanoid/07-all-soldered.jpg",
      alt: "All 22 actuators with their motor controllers soldered and laid out on the bench.",
      caption: "All 22 actuators and controllers soldered.",
    },
    {
      kind: "video" as const,
      src: "/media/humanoid/08-calibrate-m6c12.mp4",
      poster: "/media/humanoid/08-calibrate-m6c12-poster.jpg",
      alt: "An MC612 actuator spinning on the bench during calibration.",
      caption: "Calibrating an MC612 actuator.",
    },
    {
      kind: "video" as const,
      src: "/media/humanoid/09-calibrate-5010.mp4",
      poster: "/media/humanoid/09-calibrate-5010-poster.jpg",
      alt: "A 5010 actuator under calibration.",
      caption: "Calibrating a 5010 actuator.",
    },
    {
      kind: "image" as const,
      src: "/media/humanoid/10-arms.jpg",
      alt: "Jose assembling an arm at the bench, with printed limb sections and motors around him.",
      caption: "Arms mostly assembled — 12 motors in, 10 to go.",
    },
    {
      kind: "image" as const,
      src: "/media/humanoid/11-printer-broken.jpg",
      alt: "The 3D printer opened up with its screen and ribbon cable removed for repair.",
      caption: "Broke the printer screen — opened it up to replace the screen and cable.",
    },
    {
      kind: "image" as const,
      src: "/media/humanoid/12-printer-fixed.jpg",
      alt: "The repaired 3D printer back in working order.",
      caption: "A stripped screw and one precise drill later: fixed.",
    },
  ],
} as const;
