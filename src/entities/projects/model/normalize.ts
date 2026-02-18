import type { Project } from "./types";

export const uniqueByClient = (projects?: Project[]) => {
    if (!projects) return [];

    const seen = new Set<string>();
  
    return projects.filter(p => {
      if (seen.has(p.clientId)) return false;
      seen.add(p.clientId);
      return true;
    });
  };