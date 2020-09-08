import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const CardGrid = styled.div`
  display: block;

  ${media.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 32px;
    justify-content: center;
    grid-auto-flow: row;
  }
`;
