import { getCollection, type CollectionEntry } from "astro:content";

/** Published projects, sorted by `order`. Index + 1 is the figure number. */
export async function sortedProjects(): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order);
}
