import type { IconProps } from "./icon.types";

export const TelegramIcon = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            fill="currentColor"
            viewBox="0 0 15 14"
            {...props}
        >
            <g clipPath="url(#telegram_fill_svg__a)">
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12.037 2.584a.875.875 0 0 1 1.202.949l-1.323 8.025a1.153 1.153 0 0 1-1.687.832 34 34 0 0 1-2.27-1.338c-.397-.26-1.611-1.09-1.462-1.682.128-.506 2.17-2.406 3.336-3.537.458-.444.25-.7-.291-.291-1.343 1.014-3.499 2.555-4.211 2.99-.63.382-.958.447-1.35.382a9 9 0 0 1-1.92-.528c-.73-.303-.695-1.309 0-1.602z"
                    clipRule="evenodd"></path>
            </g>
            <defs>
                <clipPath>
                    <path
                        fill="#fff"
                        d="M.5 0h14v14H.5z">
                    </path>
                </clipPath>
            </defs>
        </svg>
    )
}