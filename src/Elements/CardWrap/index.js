import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const CardWrap = styled.div`
  color: #f2f2f2;
  background-color: #282b32;
  padding: 16px 16px 0 16px;
  border-radius: 8px;
  margin-bottom: 32px;

  ${media.desktop} {
    color: #f2f2f2;
    background-color: #282b32;
    padding: 16px 16px 0 16px;
    border-radius: 8px;
  }
`;
