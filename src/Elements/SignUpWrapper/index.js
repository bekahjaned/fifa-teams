import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const SignUpWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  ${media.desktop} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    padding: 0;
    height: 87px;
  }
`;
