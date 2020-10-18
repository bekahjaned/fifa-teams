import styled from "styled-components";

export const TextAreaWrap = styled.div`
  margin-bottom: 24px;

  p {
    font-size: 16px;
    color: rgba(242, 242, 242, 0.85);
    padding-bottom: 4px;
    margin: 0;
  }

  p.errorText {
    color: #de4343;
  }

  textarea {
    font-family: "Nunito", sans-serif;
    border-radius: 4px;
    background-color: #313131;
    resize: none;
    color: #f2f2f2;
    font-size: 16px;
    padding: 8px;
    border: 1px solid black;
    outline: none;
  }

  textarea:focus {
    border: 1px solid #eaff04;
    box-shadow: 0px -2px 3px 0px rgba(234, 255, 4, 0.5),
      -2px 0px 3px 0px rgba(234, 255, 4, 0.5),
      0px 2px 3px 0px rgba(234, 255, 4, 0.5),
      2px 0px 3px 0px rgba(234, 255, 4, 0.5);
  }

  textarea#regular {
    width: 98.5%;
    height: 140px;
    outline: none;
    overflow: auto;
  }

  textarea#bullet {
    width: 98.5%;
    height: 200px;
    outline: none;
    overflow: auto;
  }

  textarea#small {
    width: 300px;
    height: 38px;
  }

  textarea.errorState {
    border: 1px solid #de4343;
  }

  textarea.errorState:focus {
    box-shadow: none;
  }

  div.extra {
    display: flex;
    justify-content: space-between;
  }

  span.errorMsg {
    color: #de4343;
  }
`;
