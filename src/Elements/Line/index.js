import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const Line = styled.div`
  max-width: 414px;
  height: 2px;
  background-color: #f2f2f2;

  ${media.desktop} {
    max-width: 1200px;
  }
`;
