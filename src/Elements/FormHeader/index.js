import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const FormHeader = styled.div`
  h1 {
    color: #f2f2f2;
    font-size: 36px;
    font-weight: 700px;
    padding-bottom: 24px;
    margin: 0;
  }

  ${media.desktop} {
    h1 {
      font-size: 50px;
      padding-bottom: 60px;
      margin: 0;
    }
  }
`;
