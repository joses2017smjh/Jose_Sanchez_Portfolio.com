# Jose Sanchez Gonzalez — Portfolio

Personal portfolio site. Astro + TypeScript, MDX content collections, real CSS
with custom properties, no client framework. Deployed on Vercel.

[Live portfolio](https://jose-sanchez-portfolio-com.vercel.app) · [Project README template](docs/PROJECT_README_TEMPLATE.md) · [Demo shot lists](docs/DEMO_SHOT_LISTS_2026-10-02.md)

The October 2 refresh features Berkeley Humanoid VR arm teleoperation, robotic
pruning, depth refinement, humanoid simulation, and deformable-object folding.
Each case study links to the code and evidence behind its results. Hardware
integration, simulation evaluations, and stored validation scores are identified
in the project copy. The résumé downloads use the same verified project claims.

## Reproduce on any machine

Everything is pinned and self-contained — no CDN fonts, no global tooling, no
machine-specific paths.

```sh
git clone https://github.com/joses2017smjh/Jose_Sanchez_Portfolio.com.git
cd Jose_Sanchez_Portfolio.com
nvm use            # or install Node >= 20.3 (version pinned in .nvmrc)
npm ci             # exact versions from package-lock.json
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## Add a project

Create one file: `src/content/projects/<slug>.mdx`. The filename becomes the
URL (`/projects/<slug>`). All content lives in the frontmatter — the Zod
schema in [src/content.config.ts](src/content.config.ts) enforces max lengths
(problem ≤ 400 chars, approach ≤ 700, result ≤ 350) so the build fails if an
entry gets long-winded. Depth belongs in the project's GitHub README.

Media rules:

- Motion assets are **mp4/webm loops, never gifs**. Put them in
  `public/media/`, set `video:` and a `poster:` frame (required — it's the
  `prefers-reduced-motion` fallback, where videos don't autoplay). Every video
  also has manual controls and a descriptive label.
- No motion asset? Set `image:` instead.
- `order:` controls list position and the site-wide figure number.
- `draft: true` hides an entry from the build.

## Add a /now entry

Create `src/content/now/<date>-<slug>.md` with `date` and `title` frontmatter
and a short body. Newest date renders first.

## Personal info

Name, positioning line, bio, and the GitHub/LinkedIn/Email/Resume links live
in [src/site.config.ts](src/site.config.ts) — no component edits needed.
Drop your resume at `public/resume.pdf`.

## Deploy

The production site is [jose-sanchez-portfolio-com.vercel.app](https://jose-sanchez-portfolio-com.vercel.app).
The existing Vercel integration builds pushes to `main`. `npm run build` emits
static files to `dist/`; no application server or private API keys are required.

## Design system

Tokens live in [src/styles/global.css](src/styles/global.css): white
background and readable grey text (blue links, red hover/active), type
(Instrument Sans body, Fragment Mono for tags/dates/captions/section
headers), spacing scale, and the figure system (`FIG. NN` + hairline rule +
mono caption on every visual). All links open in the same tab by design.
