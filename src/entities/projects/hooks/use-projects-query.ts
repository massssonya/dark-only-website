import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../api/fetch-projects";
import { uniqueByClient } from "../model/normalize";
import { groupByClient, groupByFilter, groupBySector, onlyClients } from "../model/selectors";

const projectKeys = {
  all: ['projects'] as const,
  // lists: () => [...productKeys.all, 'list'] as const,
  // list: (filters: object) => [...productKeys.lists(), { ...filters }] as const,
  // details: () => [...productKeys.all, 'detail'] as const,
  // detail: (id: string | number) => [...productKeys.details(), id] as const,
};

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: projectKeys.all,
    queryFn: fetchProjects,
    select: (data) => {

      const normalized = uniqueByClient(data);
      return {
        raw: data,
        projects: normalized,
        clients: onlyClients(data) ?? [],
        groupedProjectsByFilter: groupByFilter(normalized),
        groupedProjectsByClient: groupByClient(data) ?? {},
        groupedSectors: groupBySector(data) ?? {}
      };
    },
  });
};