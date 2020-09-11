import styled from "styled-components";

export const SubmitButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  padding: 18px 0;
  color: #e6e6e6;
  background-color: #161921;
  border-radius: 4px;
  grid-column-start: span 2;
  border: none;
  outline: none;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  height: 56px;
  margin: 0;

  :hover {
    background-color: #334366;
  }

  :active {
    background-color: #2d50b3;
  }
`;
