import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Projects.
 *
 * All narrative content lives in frontmatter, on purpose: the max lengths
 * below are the brevity contract. If a field won't fit, the build fails and
 * the fix is to cut words, not raise the limit. Depth belongs in the GitHub
 * README, not here.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string().max(60),
    // What it does, not how. One line.
    summary: z.string().max(120),
    // 2-3 sentences.
    problem: z.string().max(400),
    // 3-5 sentences, hiring-manager altitude.
    approach: z.string().max(700),
    // Concrete numbers where you have them.
    result: z.string().max(350),
    // Real-text skill tags for keyword scanners.
    tags: z.array(z.string().max(24)).min(1).max(10),
    // Omit for private/coursework projects with no public repo.
    repo: z.string().url().optional(),
    paper: z.string().url().optional(),
    demo: z.string().url().optional(),
    // Media, from /public. Provide video (mp4/webm) when a motion asset
    // exists; poster is required with video (reduced-motion fallback).
    video: z.string().optional(),
    poster: z.string().optional(),
    image: z.string().optional(),
    alt: z.string().max(160),
    figcaption: z.string().max(120),
    // Named demo sections on the detail page (e.g. one per model), each
    // with its own figure strip. Their letters run first; the gallery's
    // continue after them.
    sections: z
      .array(
        z.object({
          heading: z.string().max(60),
          body: z.string().max(400).optional(),
          figures: z
            .array(
              z.object({
                image: z.string(),
                alt: z.string().max(160),
                caption: z.string().max(120),
              }),
            )
            .min(1)
            .max(4),
        }),
      )
      .max(4)
      .optional(),
    // Extra figures shown as a horizontal scroll-snap strip on the
    // detail page (FIG. NNA, NNB, ...).
    gallery: z
      .array(
        z.object({
          image: z.string(),
          alt: z.string().max(160),
          caption: z.string().max(120),
        }),
      )
      .max(8)
      .optional(),
    date: z.coerce.date(),
    // Lower = earlier in the list (and lower figure number).
    order: z.number().int().nonnegative(),
    draft: z.boolean().default(false),
  })
    .refine((p) => p.video || p.image, {
      message: "A project needs a video or an image.",
    })
    .refine((p) => !p.video || p.poster, {
      message: "A video needs a poster frame for reduced-motion viewers.",
    }),
});

/**
 * /now — dated log entries, newest first. Keep them short.
 */
const now = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/now" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().max(80),
  }),
});

export const collections = { projects, now };
