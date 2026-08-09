// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  // TODO: set this to your real domain (or your-project.vercel.app) before deploying
  site: "https://jose-sanchez-portfolio.vercel.app",
  integrations: [mdx()],
});
