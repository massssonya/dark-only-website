import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { css } from "@emotion/react";

const variants = {
    container: css`
    
    `,
    word: css`
        &:has(+ [class*="-icon"]) {
            margin-right: 8px;
        }
    `,
    icon: css`
        display: inline-flex;
        height: 28px;

        @media (min-width: 768px) {
            height: 36px;
        }

        & svg {
            display: block;
            height: 100%;
            width: 100%;
            overflow: visible;
        }

        &:has(+ [class*="-word"]) {
            margin-right: 8px;
        }
    `,
    'line-break': css`
        flex-basis: 100%; 
        height: 0
    `
}

export type VariantSpanComponent = keyof typeof variants

interface Props {
    $variant?: VariantSpanComponent;
}

const variantStyles = ({ $variant = 'line-break' }: Props) => variants[$variant]


export const SpanComponent = styled.span<Props>`
    ${variantStyles}
`

export const MotionSpanComponent = styled(motion.span) <Props>`
    display: inline-block;
    ${variantStyles}
`