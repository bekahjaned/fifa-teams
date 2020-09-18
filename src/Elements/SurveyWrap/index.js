import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const SurveyWrap = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    color: #f2f2f2;
    font-size: 20px;
    padding-bottom: 40px;
  }

  ${media.desktop} {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
      color: #f2f2f2;
      font-size: 25px;
      padding-bottom: 40px;
    }
  }
`;
