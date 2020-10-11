import styled from "styled-components";

export const TextAreaWrap = styled.div`
  margin-bottom: 24px;

  p {
    font-size: 16px;
    color: rgba(242, 242, 242, 0.85);
    padding-bottom: 4px;
    margin: 0;

    span {
      color: #c20b0b;
    }
  }

  textarea {
    font-family: "Nunito", sans-serif;
    border-radius: 4px;
    background-color: #313131;
    resize: none;
    color: #f2f2f2;
    font-size: 16px;
    padding: 8px;
  }

  textarea.regular {
    width: 100%;
    height: 140px;
    outline: none;
    overflow: auto;
  }

  textarea.bullet {
    width: 100%;
    height: 200px;
    outline: none;
    overflow: auto;
  }

  textarea.small {
    width: 300px;
    height: 38px;
  }

  span.errorMsg {
    color: white;
  }
`;
