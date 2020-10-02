import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const NavWrap = styled.div`
  background-color: #3b003c;

  ${media.desktop} {
    position: sticky;
  }
`;
