import { css } from "@emotion/react"
import styled from "@emotion/styled"

const variants = {
  base: css`
        
    `,
  projectCard: css`
        width: 315px;

        @media (min-width: 768px) {
            width: auto;
        }
`,
  clientWithProjectsCard: css`
        overflow: hidden;
        width: 315px;
        height: 240px;

        @media (min-width: 768px) {
            height: 280px;
            width: 357px;
        }

        @media (min-width: 1280px) {
          height: 23.4375vw;
          width: 23.046875vw;
        }
`
} as const

const hovers = {
  none: '',
  increaseRounded: ``
} as const

interface Props {
  $variant?: keyof typeof variants
  $hover?: keyof typeof hovers
  $onlyHoverTarget?: boolean
}

export const HoverTarget = styled.div`
  transition: transform 0.3s ease, border-radius 0.3s ease;
`

export const Card = styled.div<Props>`
  border-radius: 20px;
  ${({ $variant = 'base' }) => variants[$variant]}

  transition: border-radius 0.3s ease;

  ${({ $onlyHoverTarget = false }) => $onlyHoverTarget
    ? css`
    & ${HoverTarget} {
      overflow: hidden;
      border-radius: 20px;
    }
    &:hover ${HoverTarget} {
      border-radius: 50px;
      transform: scale(1.02);
    }
  `
    : css`
    &:hover {
      border-radius: 50px;
    }
    &:hover ${HoverTarget} {
      transform: scale(1.02);
    }
  `}
`