import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  padding-bottom: 16px;

  ${media.desktop} {
    height: 437px;
    width: 590px;
    grid-column-start: 7;
    grid-column-end: 12;
  }
`;
