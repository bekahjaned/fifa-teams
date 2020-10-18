import styled from "styled-components";

export const DropdownWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;

  select {
    border: none;
  }

  select.errorState {
    border: 1px solid #de4343;
  }

  select#small {
    width: 200px;
    border-radius: 4px;
    background-color: #313131;
    padding: 8px;
    font-size: 16px;
    color: #f2f2f2;
    outline: none;
  }

  select#medium {
    width: 250px;
    border-radius: 4px;
    background-color: #313131;
    padding: 8px;
    font-size: 16px;
    color: #f2f2f2;
    outline: none;
  }

  select#large {
    width: 300px;
    border-radius: 4px;
    background-color: #313131;
    padding: 8px;
    font-size: 16px;
    color: #f2f2f2;
    outline: none;
  }

  option.no-display {
    display: none;
  }

  span.errorMsg {
    color: #de4343;
    font-size: 16px;
    margin-left: 16px;
  }

  div {
    width: 600px;
  }
`;
