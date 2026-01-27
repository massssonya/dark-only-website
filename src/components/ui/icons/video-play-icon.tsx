import type { IconProps } from "./icon.types";

export const VideoPlayIcon = (props: IconProps) =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
        {...props}
    >
        <g clipPath="url(#playButton_svg__a)">
            <path
                fill="#0E0E0E"
                d="M23 11.768c1.333.77 1.333 2.694 0 3.464L8.75 23.46c-1.333.77-3-.192-3-1.732V5.273c0-1.54 1.667-2.502 3-1.732z">
            </path>
        </g>
        <defs>
            <clipPath id="playButton_svg__a">
                <path fill="#fff" d="M0 0h28v28H0z"></path>
            </clipPath>
        </defs>
    </svg>