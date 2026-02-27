import memoizeOne from "memoize-one";
import type { Project } from "./types";

export const uniqueByClient = (data?: Project[]) => {
  if (!data) return [];

  const seen = new Set<string>();

  return data.filter(p => {
    if (seen.has(p.clientId)) return false;
    seen.add(p.clientId);
    return true;
  });
};

export const normalizeProjects = memoizeOne((data: Project[]) => {
  const byId: Record<string, Project> = {};
  const allIds: string[] = [];

  for (const project of data) {
    byId[project.id] = project;
    allIds.push(project.id);
  }

  return { byId, allIds };
});