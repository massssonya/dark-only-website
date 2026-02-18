import { groupByFieldImmutableFast } from "../../../shared/utils/arrayHelpers";
import type { Project } from "./types";

export const FILTER_KEYS = [
    { id: "large", name: "Крупнейшие проекты" },
    { id: "b2c", name: "B2C" },
    { id: "develop", name: "Девелоперы" },
];

export const groupByFilter = (projects: Project[]) => {
    const keys = FILTER_KEYS;

    return groupByFieldImmutableFast({
        items: projects,
        field: "filter",
        keys,
        getGroupKeyFromItem: i => i.filter,
        getGroupKeyFromKey: i => i.id,
        createMutableGroup: k => ({
            title: k.name,
            items: [] as Project[]
        }),
        addItemMutable: (group, item) => {
            if (!group.items.find(i => i.clientId === item.clientId)) {
                group.items.push(item);
            }
        },
        freeze: true
    });
};

export const groupByClient = (data?: Project[]) => {
    if (!data) return [];

    const keys = [
        ...new Set(
            data.flatMap(i => i.filter === "large" ? [i.clientId] : [])
        )
    ].map(key => ({ key }));

    return groupByFieldImmutableFast({
        items: data,
        field: "clientId",
        keys,
        getGroupKeyFromItem: i => i.clientId,
        getGroupKeyFromKey: k => k.key,
        createMutableGroup: () => [] as Pick<Project, 'id' | 'img' | 'sector' | 'client'>[],
        addItemMutable: (group, item) => {
            group.push({
                id: item.id,
                img: item.img,
                sector: item.sector,
                client: item.client
            });
        },
    });
};