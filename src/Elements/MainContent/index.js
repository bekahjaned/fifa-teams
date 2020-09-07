import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const MainContent = styled.div`
  max-width: 414px;
  margin: 0 16px;

  .main-title {
    font-size: 36px;
    font-weight: 700;
    line-height: 41px;
    color: #ffcc00;
    padding: 60px 0 8px 0;
    margin: 0;
  }

  .main-description {
    font-size: 20px;
    line-height: 25px;
    color: #e6e6e6;
    padding-bottom: 32px;
    margin: 0;
  }

  ${media.desktop} {
    max-width: 1200px;
    margin: 0 auto;

    .main-title {
      font-size: 50px;
      font-weight: 700;
      color: #ffcc00;
      padding: 60px 0 8px 0;
      margin: 0;
    }

    .main-description {
      font-size: 25px;
      line-height: 35px;
      color: #e6e6e6;
      padding-bottom: 32px;
      margin: 0;
    }
  }
`;
