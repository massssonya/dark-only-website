import styled from "@emotion/styled"
import { motion } from "framer-motion";

const variants = {
    base: `
        padding: 0.694444vw 1.04167vw;

        display: flex;
        gap: 0.78125vw;

        border-radius: 0.555556vw;
        background-color: black;
        
        color:rgba(245, 245, 245, 0.86);
        text-transform: lowercase;

        transition: color 0.3s ease, background-color 0.3s ease;
        :hover {
            color: white;
            background-color: rgba(29, 29, 29, 0.86);
        }
    `,
    asBaseButton: `
        font-family: 'TT Runs Trial', sans-serif;
        height: fit-content;
        padding: 1.30208vw 3.90625vw;
        display: inline-block;

        border-radius: 10px;
        background-color: white;
        
        transition: background-color .3s ease, color .3s ease, border-radius .3s ease, scale .3s ease, box-shadow .3s ease;
        
        font-weight: 600;
        text-align: center;
        color: black;

        :hover {
            background-color: black;
            color: white;
            border-radius: calc(10px*2);
            box-shadow: 0 7px 18px -15px hsla(0, 0%, 5%, .04), 0 20px 20px 0 hsla(0, 0%, 5%, .05), 0 24px 19px -30px hsla(0, 0%, 5%, .25);
            scale: 1.1;
        }

        @media (min-width: 768px) {
            padding: 16px 53px;
        }

        @media (min-width: 1280px) {
            padding: 1.52778vw 4.51389vw;
        }
    `
}

const width = {
    full: '100%',
    fit: 'fit-content'
} as const

interface Props {
    $variant?: keyof typeof variants;
    $width?: keyof typeof width;
}

export const MotionLink = styled(motion.a)<Props>`
${({ $variant = 'base', $width = 'fit' }) => {
        const v = variants[$variant]
        const w = width[$width]
        return `
      ${v}
      width: ${w};
      cursor: pointer;
  `
    }
    }
`

export const Link = styled.a<Props>`
${({ $variant = 'base', $width = 'fit' }) => {
        const v = variants[$variant]
        const w = width[$width]
        return `
      ${v}
      width: ${w};
      cursor: pointer;
  `
    }
    }
`

