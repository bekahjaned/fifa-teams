import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const FormContent = styled.div`
  margin: 0 auto;
  max-width: 414px;

  ${media.desktop} {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 100px;

    form {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      grid-gap: 20px;
      grid-row-gap: 0;
    }
  }
`;
