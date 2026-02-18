const COMMON_BG = "https://api.only.digital/storage/2025/08/01/0be693bf177cbba34283430f4417285b61288181.jpg";

export const clientsConfig = {
    default: { bg: COMMON_BG },
    sibur: { bg: "https://api.only.digital/storage/2025/08/05/b28d1b02422ccd6caff351848c3720c0b58d4942.jpg" },
    severstal: { bg: COMMON_BG }
} as const;

export type ClientKey = keyof typeof clientsConfig;