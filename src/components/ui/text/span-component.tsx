import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { css } from "@emotion/react";

const variants = {
    container: css`
    
    `,
    word: css`
        display: inline-flex;
        gap: 8px;
        align-items: center;

        &:has(+ [class*="-icon"]) {
            margin-right: 8px;
        }
            
        &:has(+ [class*="-word"] > img:first-of-type) {
                margin-right: 8px;
            }
        & img {
            position: relative !important;
            
            &:has(+ [class*="-word"]) {
                margin-right: 8px;
            }
        }

        @media (min-width: 1440px) {
            & img {
                height: 2.7777777778vw;
            }
        }
        
        @media (min-width: 1280px) {
            & img {
                height: 2.8125vw;
            }
        }
        
        @media (min-width: 768px) {
            & img {
                height: 32px;
            }
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
    `,
    badge: css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        
        height: 38px;
        padding: 3px 18px;
        
        background-color: #00FFA9;
        border-radius: 50px;
        
        color: #000000;
        white-space: nowrap;
        line-height: 110%;

        @media (min-width: 768px) {
            span:nth-last-of-type(-n+2) {
                height: 38px;
                margin-top: 8px;
        }
}

        @media (min-width: 1280px) {
            span:nth-last-of-type(-n+2) {
                height: 3.4375vw;
                margin-top: .625vw;
            }
    `,
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