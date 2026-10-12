/**
 * Everything personal in one place, so editing the site never means
 * touching a component.
 */
export const site = {
  name: "Jose Sanchez Gonzalez",
  positioning:
    "I build robot perception and AI software.",
  seeking: "Seeking robotics, computer vision, and AI/software engineering roles.",
  bio: [
    "My robotics work connects perception to action through RGB-D control, metric-depth inference, humanoid policy evaluation, and physical arm teleoperation. My AI software work covers agentic retrieval and MCP tools with traceable results.",
    "I earned an M.S. in Artificial Intelligence and a B.S. in Computer Science at Oregon State University. Each case study shows my contribution, the evidence, and the remaining limitations.",
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
