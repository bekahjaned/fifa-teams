import styled from "styled-components";

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  max-width: 1200px;
  padding-bottom: 40px;
  margin: 0 auto;

  .name {
    font-size: 25px;
    font-weight: 700;
    padding: 40px 0;
    margin: 0;
    grid-column-start: span 12;
  }
`;
