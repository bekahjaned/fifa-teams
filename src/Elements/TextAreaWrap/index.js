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

  textarea.regular {
    width: 100%;
    height: 140px;
    padding: 8px;
    border-radius: 4px;
    background-color: #313131;
    outline: none;
    overflow: auto;
    color: #f2f2f2;
    font-size: 16px;
    resize: none;
  }

  textarea.bullet {
    width: 100%;
    height: 200px;
    padding: 8px;
    border-radius: 4px;
    background-color: #313131;
    outline: none;
    overflow: auto;
    color: #f2f2f2;
    font-size: 16px;
    resize: none;
  }

  textarea.small {
    width: 300px;
    height: 38px;
    border-radius: 4px;
    background-color: #313131;
    resize: none;
  }
`;
