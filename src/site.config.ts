/**
 * Everything personal in one place, so editing the site never means
 * touching a component.
 */
export const site = {
  name: "Jose Sanchez Gonzalez",
  positioning:
    "I build robot perception, control, and simulation.",
  seeking: "Seeking robotics software, AI/ML, and computer vision engineering roles.",
  bio: [
    "I connect perception to robot behavior: RGB-D pruning control, metric-depth inference, humanoid policy evaluation, and Quest VR arm teleoperation on my Berkeley Humanoid Lite build. I also build retrieval tools with source tracing and measured evaluations.",
    "M.S. in Artificial Intelligence and B.S. in Computer Science, Oregon State University. My project pages show what I built, how I tested it, and what still needs work.",
  ].join(" "),
  email: "josejsanchez20172@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/joses2017smjh" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/jose-j-sanchez-gonzalez-84a800257/",
    },
    { label: "Email", href: "mailto:josejsanchez20172@gmail.com" },
    // Drop your resume at public/resume.pdf
    { label: "Resume", href: "/resume.pdf" },
  ],
} as const;
