import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const HeroWrap = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: #3b003c;
  width: 100%;
  height: 100%;

  ${media.desktop} {
    margin: 0 auto;
    background-color: #3b003c;
    height: 591px;
  }
`;
