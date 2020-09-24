import styled from "styled-components";

const media = {
  desktop: "@media(min-width: 80%)",
  mid: "@media(min-width: 50%)",
};

export const HeroWrap = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: #3b003c;
  width: 100%;
  height: 100%;

  ${media.desktop} {
    height: 591px;
  }
`;
