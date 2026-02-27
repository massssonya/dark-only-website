import { useProjectsDerived } from "../helpers"
import { normalizeProjects, uniqueByClient } from "../model/normalize";
import { groupByClient, groupByFilter, groupBySector, onlyClients } from "../model/selectors";

export const useProjectsByClient = () =>
    useProjectsDerived(groupByClient, {});

export const useProjectsByFilter = () =>
    useProjectsDerived(groupByFilter, {});

export const useProjectsClients = () =>
    useProjectsDerived(onlyClients, []);

export const useProjectsSectors = () =>
    useProjectsDerived(groupBySector, []);

export const useUniqueProjects = () =>
    useProjectsDerived(
        (data) => {
            const normalized = normalizeProjects(data);
            return uniqueByClient(Object.values(normalized.byId));
        },
        []
    );