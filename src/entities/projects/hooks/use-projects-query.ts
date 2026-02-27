import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { fetchProjects } from "../api/fetch-projects";
import { projectKeys } from "./keys";
import { normalizeProjects } from "../model/normalize";

export const useProjectsQuery = <T = Awaited<ReturnType<typeof fetchProjects>>>(
  options?: Omit<
    UseQueryOptions<
      Awaited<ReturnType<typeof fetchProjects>>,
      unknown,
      T
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: projectKeys.all,
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000,
    ...options,
  });
};

export const useNormalizedProjects = () => {
  const query = useProjectsQuery({
    select: (data) => normalizeProjects(data),
  });
  
  return {...query}
};