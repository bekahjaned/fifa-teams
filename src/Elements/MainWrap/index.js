import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const MainWrap = styled.div`
  margin: 0 auto;
  background-color: #161921;
  padding-bottom: 28px;

  ${media.desktop} {
    padding-bottom: 60px;
  }
`;
