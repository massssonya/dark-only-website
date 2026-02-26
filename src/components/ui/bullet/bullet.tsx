import styled from "@emotion/styled"

export const Bullet = styled.span<{ $active?: boolean }>`
  position: relative;
  display: block;
  width: 60px;
  aspect-ratio: 1;
  background-color: oklch(67.2% 0.01 258.338);
  cursor: pointer;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: white;
    border-radius: 50%;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.3s;
  }

  @media (min-width: 768px) {
    width: 6px;
  }
  
  @media (min-width: 1280px) {
    width: .625vw;
  }
}
`