import styled from "@emotion/styled"

{/* <div className="
                    h-auto rounded-xl overflow-hidden aspect-square
                    transition-all duration-300 group-hover:rounded-4xl group-hover:scale-[1.02]
                    "> */}

const variants = {
    base: `
        overflow: hidden;
        height: auto;

        border-radius: 20px;
    `
} as const

const hovers = {
    increaseRounded: `

    `
} as const

interface Props {
    $variant?: keyof typeof variants
    $hover?: keyof typeof hovers
    $aspect?: string
}

export const Wrapper = styled.div<Props>`
${({ $variant = 'base', $hover = 'increaseRounded', $aspect }) => {
        const variant = variants[$variant]
        const hover = hovers[$hover]
        const aspect = $aspect
        return `
        ${variant}
        ${aspect && 'aspect-ratio: '+aspect+';'}
        :hover{
            ${hover}
        }
  `
    }
    }
`