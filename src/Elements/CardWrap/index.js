import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const CardWrap = styled.div`
  color: #f2f2f2;
  margin-bottom: 32px;

  ${media.desktop} {
    color: #f2f2f2;
    margin: 0;
  }
`;
