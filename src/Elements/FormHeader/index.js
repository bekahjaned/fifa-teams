import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const FormHeader = styled.div`
  img {
    color: #f2f2f2;
  }

  h1 {
    color: #f2f2f2;
    font-size: 50px;
    font-weight: 700px;
    padding-bottom: 24px;
    margin: 0;
  }

  ${media.desktop} {
    grid-column-start: 1;
    grid-column-end: 13;
    padding-bottom: 60px;
    margin: 0;
  }
`;
