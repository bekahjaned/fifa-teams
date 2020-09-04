import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 16px;
  justify-items: center;
  justify-content: center;
  grid-auto-flow: row;
  height: 50px;
`;
