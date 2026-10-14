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
const section = (id) => home.match(new RegExp(`<section[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/section>`))?.[1];
const humanoid = section("projects");
const rag = section("ai-software");
const vision = section("vision-vla");
const hero = section("about");
assert.ok(humanoid, "Humanoid Simulation row must exist");
assert.ok(rag, "RAG & Agents row must exist");
assert.ok(vision, "Computer Vision & VLA row must exist");
assert.ok(home.indexOf(humanoid) < home.indexOf(rag) && home.indexOf(rag) < home.indexOf(vision), "Featured rows must stay in the requested order");
assert.ok(hero, "Role-focused hero must exist");
for (const [track, slugs] of [
  [humanoid, ["bhl-robustness-ladder", "humanoid-navigation", "language-guided-manipulation"]],
  [rag, ["metanavit", "agentic-soccer-mcp"]],
  [vision, ["isaac-folding", "isaac-pruning-workflow", "depth-estimation-robotic-pruning"]],
]) {
  assert.equal((track.match(/class="project-title"/g) ?? []).length, slugs.length, "Unexpected number of case studies in track");
  for (const slug of slugs) {
    assert.ok(track.includes(`/projects/${slug}`), `Missing project in its track: ${slug}`);
    assert.ok(existsSync(join(dist, "projects", slug, "index.html")));
  }
}
for (const href of ["#projects", "#ai-software", "#vision-vla", "/projects/humanoid-navigation", "/projects/metanavit", "/projects/isaac-pruning-workflow", "/resume.pdf"]) {
  assert.ok(hero.includes(`href="${href}"`), `Missing direct hero entry point: ${href}`);
}
assert.ok(!rag.includes("/projects/dom-math-transformer") && !rag.includes("/projects/point-cloud-classification"), "RAG projects must remain distinct from coursework");
assert.ok(section("beyond").includes("/projects/berkeley-humanoid-vr"), "Keep the physical VR control case study accessible from Hardware");
assert.ok(!humanoid.includes("/projects/berkeley-humanoid-vr"), "Physical VR control belongs in Hardware");

const bhl = plain(readPage("projects/bhl-robustness-ladder"));
for (const evidence of ["0/360", "77/360", "simulation results, not hardware validation", "learned locomotion has not transferred to hardware", "retracted"]) {
  assert.ok(bhl.includes(evidence), `Missing BHL result boundary: ${evidence}`);
}
const navigation = plain(readPage("projects/humanoid-navigation"));
for (const evidence of ["12/12", "259/288", "247/288", "oracle pose/goal", "clustered observations"]) {
  assert.ok(navigation.includes(evidence), `Missing navigation result boundary: ${evidence}`);
}
const waiter = plain(readPage("projects/language-guided-manipulation"));
for (const evidence of ["Language-Guided Manipulation", "75/100", "76/100", "stance lock", "oracle", "six", "simulation"]) {
  assert.ok(waiter.includes(evidence), `Missing language-guided manipulation result boundary: ${evidence}`);
}
for (const [slug, report] of [["humanoid-navigation", "RANDOM_MAZE.md"], ["language-guided-manipulation", "WAITER_PROGRAM.md"]]) {
  assert.ok(readPage(`projects/${slug}`).includes(`href="https://github.com/joses2017smjh/bhl-robustness-ladder/blob/main/docs/${report}"`), `Missing focused technical report: ${slug}`);
}
const folding = plain(readPage("projects/isaac-folding"));
for (const evidence of ["9/16", "2/16", "6/16", "8/16", "gate fails: baseline retained", "Historical policy clips", "Eight reused development poses", "not settled-fold scores"]) {
  assert.ok(folding.includes(evidence), `Missing folding caveat: ${evidence}`);
}
assert.ok(!/1st of 62|2 of 8|Closed-loop and reproducible/.test(folding), "Do not restore superseded folding claims");
const pruning = plain(readPage("projects/isaac-pruning-workflow"));
for (const evidence of ["4/4 targeted", "2/7", "ground-truth depth", "rigid-piece release", "17/17 demo is one episode, not a population success rate", "no blade CAD or wood fracture model"]) {
  assert.ok(pruning.includes(evidence), `Missing pruning result boundary: ${evidence}`);
}
const depth = plain(readPage("projects/depth-estimation-robotic-pruning"));
for (const evidence of ["0.0445", "0.0057", "Five saved best-validation scores", "Synthetic evaluation", "real-orchard accuracy remains unverified", "excluding DA2 and HTTP", "1.5e-5"]) {
  assert.ok(depth.includes(evidence), `Missing depth result boundary: ${evidence}`);
}
const soccer = plain(readPage("projects/agentic-soccer-mcp"));
for (const evidence of ["1,520 matches", "1.0229", "0.9407 closing market", "86.9%", "90% target", "synthetic model and demo backends", "historical results are a separate evaluation", "do not establish live profitability"]) {
  assert.ok(soccer.includes(evidence), `Missing soccer result boundary: ${evidence}`);
}
const metanavit = plain(readPage("projects/metanavit"));
for (const evidence of ["original six-person team", "Independent 2026 extensions", "SciFact, 300 queries", "0.075", "Illustrated retrieval workflow", "not a large-corpus or live-model benchmark"]) {
  assert.ok(metanavit.includes(evidence), `Missing MetaNaviT attribution or result boundary: ${evidence}`);
}

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
console.log(`Portfolio checks passed: 3 humanoid + 2 RAG/agents + 3 vision/VLA projects, hero entry points, hardware access, evidence boundaries, ${pages.length} pages, ${mediaReferences} local media references.`);
