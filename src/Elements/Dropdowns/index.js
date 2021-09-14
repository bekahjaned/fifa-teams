import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const Dropdowns = styled.div`
  margin: 0 auto;
  max-width: 414px;

  ${media.desktop} {
    margin: 0;
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;
