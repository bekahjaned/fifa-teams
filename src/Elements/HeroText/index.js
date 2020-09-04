import styled from "styled-components";

export const HeroText = styled.div`
  grid-column-start: 1;
  grid-column-end: 7;
  color: #161921;

  .title {
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    margin: 0;
    padding: 40px 0;
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
  }
`;
