import styled from "styled-components";

export const EmailInput = styled.input`
  font-size: 16px;
  color: #666e80;
  padding-left: 18px;
  border: 1px solid #161921;
  border-radius: 4px;
  grid-column-start: span 4;
  outline: none;
  max-height: 56px;

  :focus {
    border: 2px solid #161921;
  }
`;
