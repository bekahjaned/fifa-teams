import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const Nav = styled.div`
  margin: 0 auto;
  max-width: 414px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 125px;
    height: 40px;
    padding: 16px 0 40px 0;
    margin: 0 0 0 16px;
  }

  ${media.desktop} {
    max-width: 1200px;
    margin: 0 auto;

    .logo {
      width: 125px;
      height: 40px;
      padding: 40px 0;
      margin: 0;
    }
  }
`;
