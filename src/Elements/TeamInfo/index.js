import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const TeamInfo = styled.div`
  padding-bottom: 16px;
  margin: 0;

  h2 {
    font-size: 16px;
    padding-bottom: 2px;
    text-transform: uppercase;
    margin: 0;
  }

  ul {
    font-size: 16px;
    margin: 0;
  }

  ${media.desktop} {
    padding-bottom: 16px;
    margin: 0;

    h2 {
      font-size: 18px;
      padding-bottom: 2px;
      text-transform: uppercase;
      margin: 0;
    }

    }

    ul {
      font-size: 16px;
      margin: 0;
    }
  }
`;
