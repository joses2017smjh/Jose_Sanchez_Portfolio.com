# Editing guide — where every word and picture lives

No component or layout code ever needs touching to change content. Everything
you can see on the site comes from the files below. Edit, save, refresh.

## The map

| What you see | Where to edit it |
|---|---|
| Your name, the line under it, the bio paragraph | `src/site.config.ts` |
| GitHub / LinkedIn / Email / Resume links | `src/site.config.ts` (the `links` array) |
| Resume panel + "Beyond programming" panel text | `src/resume.config.ts` |
| Everything on a project card and its detail page | `src/content/projects/<project>.mdx` |
| Entries on the /now page | `src/content/now/<date>-<name>.md` |
| The images themselves | `public/media/<project>/` |
| Your resume | drop the PDF at `public/resume.pdf` |
| Colors, fonts, spacing | the `:root` block at the top of `src/styles/global.css` |
| Section headings ("Projects", "Now"), nav labels | `src/pages/index.astro`, `src/pages/now.astro`, `src/layouts/Base.astro` |

## Editing project text

Open the project's file in `src/content/projects/`. It's all labeled fields:

```yaml
title: "..."        # max 60 characters
summary: "..."      # the one-liner on the card — max 120
problem: >-         # 2-3 sentences — max 400
  ...
approach: >-        # 3-5 sentences — max 700
  ...
result: >-          # the numbers — max 350
  ...
tags: ["PyTorch", "ROS2"]   # up to 10 tags
```

The limits are enforced on purpose: if text is too long, `npm run build`
fails and the error names the exact field and file. Cut words, don't look
for a way around it — depth belongs in the GitHub README it links to.

## Changing a picture

1. Put the new file in `public/media/<project>/` (jpg/png/svg, or mp4/webm
   for motion — never gif).
2. In the project's `.mdx`, point at it:

```yaml
image: "/media/depth/my_new_figure.jpg"   # the hero
alt: "One sentence describing it for screen readers."
figcaption: "Short caption under the figure."  # max 120
```

3. Gallery slides (the horizontal strip on detail pages) are the same three
   lines repeated under `gallery:` — add, remove, or reorder freely:

```yaml
gallery:
  - image: "/media/depth/another_figure.png"
    alt: "..."
    caption: "..."
```

For a video loop instead of an image, use `video:` plus a required
`poster:` frame (shown to reduced-motion visitors), and drop `image:`.

## Reordering / adding / hiding projects

- `order: 1` in each `.mdx` controls position (lowest first) and the FIG.
  number.
- New project = new `.mdx` file in the same folder; the filename becomes
  the URL.
- `draft: true` hides a project without deleting it.

## Adding a /now entry

New file `src/content/now/2026-09-01-whatever.md`:

```yaml
---
date: 2026-09-01
title: "Short title"
---
A sentence or three about what you're building.
```

Newest date automatically appears first.

## Reformatting (colors, type, spacing)

All design decisions are variables in one block at the top of
`src/styles/global.css` — background, text colors, the blue and red, font
sizes, spacing steps, column width. Change a variable there and it applies
everywhere at once.

## Seeing and publishing changes

```sh
npm run dev        # live preview at localhost:4321 — updates as you save
git add -A && git commit -m "update content" && git push
```

The push is the publish button: Vercel rebuilds the live site from it
automatically in about a minute.
