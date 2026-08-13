// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // the live deployment; robots.txt points at this domain's sitemap too
  site: "https://jose-sanchez-portfolio-com.vercel.app",
  integrations: [mdx(), sitemap()],
});
