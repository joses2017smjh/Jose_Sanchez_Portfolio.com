/**
 * The /beyond page — four tiles, everything outside the code.
 * Order is the grid order: humanoid, hiking, dogs, jiu-jitsu.
 */
export const beyond = [
  {
    id: "humanoid",
    title: "Berkeley Humanoid Lite",
    kicker: "The build",
    body: "Building an open-source humanoid from scratch, self-funded, in a garage — soldering, actuators, CAD, and eventually reinforcement learning in Isaac Sim. Twelve steps of it are logged on the home page.",
    href: "/#beyond",
    media: [
      {
        kind: "image" as const,
        src: "/media/beyond/humanoid-tile.jpg",
        alt: "Screenshot of the Berkeley Humanoid Lite build log: workshop bench, actuator assembly and a wiring diagram in a row.",
      },
    ],
  },
  {
    id: "hiking",
    title: "Hiking",
    kicker: "Outside",
    body: "I love waterfalls and lakes — the colder the better, apparently.",
    media: [
      {
        kind: "image" as const,
        src: "/media/beyond/hiking-lake.jpg",
        alt: "Swimming in a turquoise glacial lake below a cirque of snow-streaked mountains.",
      },
    ],
  },
  {
    id: "dogs",
    title: "Three dogs",
    kicker: "Xolotl · Cosito · Tlaloc",
    body: "Most of my time off goes to these three — on the water in summer, underfoot the rest of the year.",
    media: [
      {
        kind: "image" as const,
        src: "/media/beyond/dogs-paddleboard.jpg",
        alt: "Jose paddleboarding on a lake with one of his dogs riding the front of the board.",
      },
      {
        kind: "video" as const,
        src: "/media/beyond/dogs-holidays.mp4",
        poster: "/media/beyond/dogs-holidays-poster.jpg",
        alt: "The dogs at home over the holidays.",
      },
    ],
  },
  {
    id: "jujitsu",
    title: "Jiu-jitsu & lifting",
    kicker: "Mat and bar",
    body: "Karate from 5 to 12, then Brazilian jiu-jitsu in college, where I joined the club. Looking for a gym at the moment — lifting to kill time until then. 315 on the bench, going for four plates.",
    media: [
      {
        kind: "image" as const,
        src: "/media/beyond/jujitsu.jpg",
        alt: "Jose in a gi at jiu-jitsu practice.",
      },
      {
        kind: "video" as const,
        src: "/media/beyond/lifting.mp4",
        poster: "/media/beyond/lifting-poster.jpg",
        alt: "A working set on the bench press.",
      },
    ],
  },
] as const;
