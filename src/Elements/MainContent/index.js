import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const MainContent = styled.div`
  max-width: 414px;
  margin: 0 auto;

  .main-title {
    font-size: 36px;
    font-weight: 700;
    line-height: 41px;
    color: #f2f2f2;
    padding: 60px 0 8px 0;
    margin: 0;
  }

  .main-description {
    font-size: 20px;
    line-height: 25px;
    color: #f2f2f2;
    padding-bottom: 32px;
    margin: 0;

    span {
      color: #04f5ff;
      font-weight: 700;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  ${media.desktop} {
    max-width: 1200px;
    margin: 0 auto;

    .main-title {
      color: #f2f2f2;
      font-size: 50px;
      font-weight: 700;
      padding: 60px 0 8px 0;
      margin: 0;
    }

    .main-description {
      color: #f2f2f2;
      font-size: 25px;
      line-height: 35px;
      padding-bottom: 32px;
      margin: 0;

      span {
        color: #04f5ff;
        font-weight: 700;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
