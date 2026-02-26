import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const style = css`
    display: inline-flex;
    margin-right: 15px;
    height: 28px;

    @media (min-width: 768px) {
        height: 36px;
    }

    & svg {
        display: block;
        height: 100%;
        width: auto;
        overflow: visible;
    }
`

export const TextWithIcons = styled.span`
    ${style}
`

export const MotionTextWithIcons = styled(motion.span)`
    ${style}
`