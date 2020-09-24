import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const HeroContent = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 414px;

  .logo {
    width: 125px;
    height: 40px;
    padding: 16px 0 40px 0;
    margin: 0 0 0 16px;
  }

  ${media.desktop} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    grid-gap: 20px;
    grid-row-gap: 0;
    max-width: 1200px;
    padding-bottom: 40px;
    margin: 0 auto;

    .logo {
      width: 125px;
      height: 40px;
      padding: 40px 0;
      margin: 0;
      grid-column-start: span 12;
    }
  }
`;
