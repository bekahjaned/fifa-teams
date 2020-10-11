import styled from "styled-components";

export const DropdownWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;

  select.small {
    width: 200px;
    border-radius: 4px;
    background-color: #313131;
    padding: 8px;
    font-size: 16px;
    color: #f2f2f2;
    border: none;
    outline: none;
  }

  select.medium {
    width: 250px;
    border-radius: 4px;
    background-color: #313131;
    padding: 8px;
    font-size: 16px;
    color: #f2f2f2;
    border: none;
    outline: none;
  }

  select.large {
    width: 300px;
    border-radius: 4px;
    background-color: #313131;
    padding: 8px;
    font-size: 16px;
    color: #f2f2f2;
    border: none;
    outline: none;
  }

  option.no-display {
    display: none;
  }

  .errorMsg {
    color: white;
  }
`;
