import type { IconProps } from "./icon.types"

export const CSSDAIcon = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" fill="currentColor" viewBox="0 0 24 40" {...props}>
            <path fill="currentColor" d="M14.357 24.22 7.18 17.121l7.178-7.098H7.18L0 17.12l3.59 3.59 3.589 3.509 3.589 3.51z"></path>
            <path fill="currentColor" d="m19.46 20.71-3.59-3.59-3.59-3.51-3.509 3.51 7.099 7.099-7.179 7.098h7.179l3.59-3.51 3.589-3.588z"></path>
        </svg>
    )
}