import styled from "@emotion/styled"

const variants = {
    contain: `
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;

        @media (min-width: 768px) {
            padding-left: 25px;
            padding-right: 25px;
        }

        @media (min-width: 1280px) {
            padding-left: 1.75rem;
            padding-right: 1.75rem;
        }
    `,
    full: `
        width: 100vw;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
    `
} as const

interface Props {
    $variant?: keyof typeof variants;
  }

export const Container = styled.div<Props>`
  ${({$variant = 'contain'}) => {
    const v = variants[$variant]
    return`
        ${v}
    `
  }}
`