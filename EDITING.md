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

## The quick way: just write markdown

Every project file has two halves. The top half (between the `---` lines) is
labeled fields — title, tags, the hero picture. **Below the closing `---` you
can write plain markdown, and it appears on the page in exactly the order you
write it.** That is the place to reshuffle text and pictures without touching
any field or component:

```markdown
---
title: "Point Cloud Classification"
...frontmatter stays up here...
---

## How it started

A paragraph. Just type it.

![A rotating chair point cloud](/media/pointcloud/pointnet_good_chair.mp4)

Another paragraph, after the picture. Move this block above the picture and
it moves on the page. Nothing else needs to change.

## What broke

- bullets work
- so do `code`, **bold**, and [links](https://example.com)
```

Rules of thumb:

- Order in the file = order on the page. Cut and paste blocks to reorder.
- `![alt text](/media/folder/file.jpg)` for a picture; the same syntax with a
  `.mp4` gives a looping clip.
- Pictures live in `public/media/<project>/`; the path in the markdown always
  starts at `/media/`.
- This free-form section renders after Problem / Approach / Result and the
  numbered figure sections, and before Stack. If you only want free-form
  writing, leave the optional `sections:` field out of the frontmatter
  entirely.

Use the labeled fields when you want the strict, consistent look (the card
summary, the FIG. NN figure strips). Use the markdown body when you just want
to write.

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
