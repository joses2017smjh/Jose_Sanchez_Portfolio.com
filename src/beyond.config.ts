/**
 * /beyond — four tiles, each opening its own page.
 * `tile` is a zoomed-in crop of one of the section's own pictures.
 */
export const beyond = [
  {
    slug: "humanoid",
    title: "Open source robotics",
    kicker: "Berkeley Humanoid Lite",
    blurb:
      "Building an open-source humanoid from scratch, self-funded, in a garage — soldering, actuators, CAD, and eventually reinforcement learning in Isaac Sim.",
    tile: "/media/beyond/humanoid-tile.jpg",
    tileAlt:
      "The humanoid build log: workshop bench, actuator assembly and a wiring diagram in a row.",
    // the build log itself is rendered by the page
    body: [],
    media: [],
  },
  {
    slug: "hiking",
    title: "Hiking",
    kicker: "Trails and water",
    blurb: "I love waterfalls and lakes — the colder the better, apparently.",
    tile: "/media/beyond/hiking-tile.jpg",
    tileAlt: "A turquoise glacial lake below a cirque of snow-streaked mountains.",
    body: [
      "I love waterfalls and lakes. Most weekends I can get away, that's where I end up — and if the water is cold enough to hurt, better.",
      "This one is a glacial lake in Montana: a mile of switchbacks, a wall of rock still holding snow in July, and water the colour of a swimming pool.",
    ],
    media: [
      {
        kind: "image" as const,
        src: "/media/beyond/hiking-lake.jpg",
        alt: "Swimming in a turquoise glacial lake below a cirque of snow-streaked mountains.",
        caption: "Glacial lake, Montana — worth the swim.",
      },
    ],
  },
  {
    slug: "dogs",
    title: "Three dogs",
    kicker: "Xolotl · Cosito · Tlaloc",
    blurb:
      "Most of my time off goes to these three — on the water in summer, underfoot the rest of the year.",
    tile: "/media/beyond/dogs-tile.jpg",
    tileAlt: "Three small dogs crowded together on a snowy barrel.",
    body: [],
    media: [],
  },
  {
    slug: "jujitsu",
    title: "Jiu-jitsu & lifting",
    kicker: "Mat and bar",
    blurb:
      "Karate from 5 to 12, Brazilian jiu-jitsu in college, and a barbell in between gyms.",
    tile: "/media/beyond/jujitsu-tile.jpg",
    tileAlt: "Rolling on the mat during a jiu-jitsu session.",
    body: [
      "I did karate from age five to twelve. It's the reason I can still be thrown around without panicking.",
      "In college I started Brazilian jiu-jitsu and joined the club. Rolling is the closest thing I've found to debugging with your whole body — you're solving a problem that solves you back.",
      "I'm between gyms at the moment and looking for one, so I've been lifting to kill time. 315 on the bench right now; four plates is the goal.",
    ],
    media: [
      {
        kind: "image" as const,
        src: "/media/beyond/jujitsu.jpg",
        alt: "Rolling on the mat during a jiu-jitsu session.",
        caption: "Club practice — rolling.",
      },
      {
        kind: "video" as const,
        src: "/media/beyond/lifting.mp4",
        poster: "/media/beyond/lifting-poster.jpg",
        alt: "A working set on the bench press.",
        caption: "Bench — 315, chasing four plates.",
      },
    ],
  },
] as const;

/** The dogs page: pick a name, meet the dog. */
export const dogs = [
  {
    id: "xolotl",
    name: "Xolotl",
    meaning:
      "Aztec god of fire and lightning, and the dog-headed twin of Quetzalcoatl who guides souls through the underworld. The Xoloitzcuintli breed carries his name.",
    line: "Paddleboard co-pilot. Will stand at the front of the board the whole way out.",
    kind: "image" as const,
    src: "/media/beyond/dogs-paddleboard.jpg",
    alt: "Jose paddleboarding on a lake with Xolotl riding the front of the board.",
  },
  {
    id: "cosito",
    name: "Cosito",
    meaning:
      "Spanish for 'little thing' — the diminutive you use when something is too small for its own name.",
    line: "Holiday dog. Dresses for the occasion whether or not there is one.",
    kind: "video" as const,
    src: "/media/beyond/dogs-holidays.mp4",
    poster: "/media/beyond/dogs-holidays-poster.jpg",
    alt: "Cosito in a holiday bandana under the Christmas tree.",
  },
  {
    id: "tlaloc",
    name: "Tlaloc",
    meaning:
      "Aztec god of rain and water, who gave the harvest and could just as easily take it back with a storm.",
    line: "Snow dog. Named for rain, prefers it frozen.",
    kind: "image" as const,
    src: "/media/beyond/dogs-tlaloc.jpg",
    alt: "Tlaloc standing in fresh snow.",
  },
] as const;
