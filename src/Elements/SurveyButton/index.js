import styled from "styled-components";

export const SurveyButton = styled.button`
  grid-column-start: span 2;
  background-color: #0d0d0d;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  font-size: 16px;
  color: #f2f2f2;
  padding: 18px 46px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #f2f2f2;
    color: #0d0d0d;
  }

  :active {
    background-color: #cdcdcd;
    border: 1px solid #cdcdcd;
    color: #0d0d0d;
  }
`;
