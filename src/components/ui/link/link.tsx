import styled from "@emotion/styled"

interface Props {

}

export const Link = styled.a<Props>`
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
`