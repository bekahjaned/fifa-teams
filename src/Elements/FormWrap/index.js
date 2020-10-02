import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const FormWrap = styled.div`
  margin: 0 auto;
  max-width: 414px;

  ${media.desktop} {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
