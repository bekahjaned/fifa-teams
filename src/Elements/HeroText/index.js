import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const HeroText = styled.div`
  margin: 0 16px;
  color: #f2f2f2;

  .title {
    font-size: 36px;
    font-weight: 700;
    line-height: 41px;
    margin: 0;
    padding-bottom: 16px;

    span {
      color: #e90052;
    }
  }

  .description {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    padding-bottom: 16px;
  }

  .email-intent {
    font-size: 12px;
    margin: 0;
    padding-bottom: 20px;
  }

  ${media.desktop} {
    grid-column-start: 1;
    grid-column-end: 7;
    color: #f2f2f2;
    margin: 0;

    .title {
      font-size: 50px;
      font-weight: 700;
      line-height: 60px;
      margin: 0;
      padding-bottom: 16px;

      span {
        color: #e90052;
      }
    }

    .description {
      font-size: 25px;
      font-weight: 400;
      line-height: 35px;
      margin: 0;
      padding-bottom: 16px;
    }

    .email-intent {
      font-size: 14px;
      padding-bottom: 16px;
      margin: 0;
    }
  }
`;
