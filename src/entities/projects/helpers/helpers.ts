import { useMemo } from "react";
import { useProjectsQuery } from "../hooks/use-projects-query";
import type { Project } from "../model/types";

export function useProjectsDerived<T>(
    selector: (data: Project[]) => T,
    fallback: T,
    isMemo?: boolean
) {
    const query = useProjectsQuery();

    const derived = !query.data
        ? fallback
        : isMemo
            ? useMemo(() => selector(query.data), [query.data, selector])
            : selector(query.data)

    return {
        ...query,
        data: derived,
    };
}