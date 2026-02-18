import { useProjectsQuery } from "./use-projects-query";

export function useProjects() {
  const { data, ...query } = useProjectsQuery();
  return {
    ...query,
    ...data,
  };
}