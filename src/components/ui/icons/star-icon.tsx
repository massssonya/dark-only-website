import type { IconProps } from "./icon.types"

export const StarIcon = (props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="22"
        fill="none"
        viewBox="0 0 30 22"
        {...props}
      >
        <rect width="30" height="22" fill="#00FFA9" rx="11"></rect>
        <path
          fill="#0E0E0E"
          fillRule="evenodd"
          d="M8.5 11a6.5 6.5 0 0 1 6.509-6.5A6.496 6.496 0 0 1 21.5 11c0 3.59-2.906 6.5-6.491 6.5A6.5 6.5 0 0 1 8.5 11m5.047-2.021 1.288-3.974h.348L16.47 8.98h4.176q.053.156.105.33l-3.376 2.458 1.287 3.956-.278.209-3.394-2.457-3.358 2.457-.279-.21 1.288-3.973-3.376-2.44a12 12 0 0 1 .104-.33z"
          clipRule="evenodd">
        </path>
      </svg>
    )
  }