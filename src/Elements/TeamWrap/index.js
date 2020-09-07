import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const TeamWrap = styled.div`
  display: flex;
  padding-bottom: 16px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    margin-right: 16px;
  }

  h1 {
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 2px;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-size: 14px;
    margin: 0;
  }

  ${media.desktop} {
    display: flex;
    padding-bottom: 16px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 8px;
      margin-right: 16px;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 30px;
      font-weight: 700;
      line-height: 41px;
      padding-bottom: 2px;
      text-transform: uppercase;
      margin: 0;
    }

    p {
      font-size: 16px;
      margin: 0;
    }
  }
`;
