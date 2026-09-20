import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Run after `npm run build`. This checks rendered content, not external links
// or scientific validity; the linked result records still need human review.
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const readPage = (path) => readFileSync(join(dist, path, "index.html"), "utf8");
const plain = (html) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
const home = readPage("");
const featured = home.match(/<section[^>]*id="projects"[^>]*>([\s\S]*?)<\/section>/)?.[1];
assert.ok(featured, "Selected-work section must exist");
assert.equal((featured.match(/class="project-title"/g) ?? []).length, 4, "Feature exactly four case studies");
for (const slug of ["bhl-robustness-ladder", "isaac-pruning-workflow", "depth-estimation-robotic-pruning", "metanavit"]) {
  assert.ok(featured.includes(`/projects/${slug}`), `Missing featured project: ${slug}`);
  assert.ok(existsSync(join(dist, "projects", slug, "index.html")));
}
assert.ok(!featured.includes("/projects/isaac-folding"), "Folding remains further research, not a featured result");

const bhl = plain(readPage("projects/bhl-robustness-ladder"));
for (const evidence of ["379/384", "3/3", "5/5", "not MuJoCo transfer", "oracle", "not cooperative grasping or carrying", "Deliberate negative control"]) {
  assert.ok(bhl.includes(evidence), `Missing BHL result boundary: ${evidence}`);
}
const folding = plain(readPage("projects/isaac-folding"));
for (const evidence of ["8/24", "3/24", "5/12", "no improvement", "Historical recordings"]) {
  assert.ok(folding.includes(evidence), `Missing folding caveat: ${evidence}`);
}
assert.ok(!/1st of 62|2 of 8|Closed-loop and reproducible/.test(folding), "Do not restore superseded folding claims");
const pruning = plain(readPage("projects/isaac-pruning-workflow"));
assert.ok(pruning.includes("17/17") && pruning.includes("not wood fracture"));
const depth = plain(readPage("projects/depth-estimation-robotic-pruning"));
assert.ok(depth.includes("1.53e-5") && depth.includes("synthetic-only"));

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith(".html") ? [path] : [];
  });
}
let mediaReferences = 0;
const pages = htmlFiles(dist);
for (const page of pages) {
  const html = readFileSync(page, "utf8");
  for (const match of html.matchAll(/(?:src|poster|href)="(\/media\/[^"?#]+)(?:[^"\s]*)?"/g)) {
    assert.ok(existsSync(join(dist, match[1])), `Missing local media ${match[1]} in ${page}`);
    mediaReferences += 1;
  }
}
console.log(`Portfolio checks passed: 4 featured projects, evidence boundaries, ${pages.length} pages, ${mediaReferences} local media references.`);
