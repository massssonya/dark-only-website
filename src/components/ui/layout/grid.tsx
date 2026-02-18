import styled from "@emotion/styled"
import { css } from "@emotion/react"

type BreakpointConfig = {
    columns?: string
    rows?: string
    areas?: string[]
    gap?: string
    rowGap?: string
    columnGap?: string
}

export type GridProps = {
    base?: BreakpointConfig
    md?: BreakpointConfig
    xl?: BreakpointConfig
}

const createAreas = (areas?: string[]) =>
    areas
        ? `grid-template-areas: ${areas.map(a => `"${a}"`).join(' ')};`
        : ''

const applyConfig = (c?: BreakpointConfig) =>
    c &&
    css`
        ${c.columns && `grid-template-columns: ${c.columns};`}
        ${c.rows && `grid-template-rows: ${c.rows};`}
        ${createAreas(c.areas)}
        ${c.gap && `gap: ${c.gap};`}
        ${c.rowGap && `row-gap: ${c.rowGap};`}
        ${c.columnGap && `column-gap: ${c.columnGap};`}
    `

export const Grid = styled.div<GridProps>`
    display: grid;

    ${({ base }) => applyConfig(base)}

    @media (min-width: 768px) {
        ${({ md }) => applyConfig(md)}
    }

    @media (min-width: 1280px) {
        ${({ xl }) => applyConfig(xl)}
    }
`

export const GridItem = styled.div<{ area: string }>`
    grid-area: ${({ area }) => area}
`