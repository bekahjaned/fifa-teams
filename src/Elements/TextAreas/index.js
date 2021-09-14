import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const TextAreas = styled.div`
  margin-bottom: 36px;

  ${media.desktop} {
    grid-column-start: 1;
    grid-column-end: 13;
    margin: 0;
  }
`;
