import { apiClient } from "../../../shared/api/clients";
import type { ProjectResponse } from "../model/types";

export const fetchProjects = async (): Promise<ProjectResponse> => {
    const res = await apiClient<ProjectResponse>('/projects.json');
    return res
}