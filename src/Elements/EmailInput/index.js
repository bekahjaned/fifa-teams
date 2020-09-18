import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const EmailInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  height: 56px;
  

  input {
    color: #3b003c;
    font-size: 16px;
    padding-left: 18px;
    height: 56px;
    border: 1px solid #cc0048;
    border-radius: 4px;
    outline: none;

    :focus {
      color: #3b003c;
      border: 2px solid #cc0048;
    }
  }

}

  ${media.desktop} {
    display: flex;
    flex-direction: column;
    grid-column-start: span 4;
    padding-bottom: 16px;

    input {
      color: #3b003c;
      font-size: 16px;
      padding-left: 18px;
      border-radius: 4px;
      outline: none;
      height: 52px;
      margin: 0;

      :focus {
        color: #3b003c;
        border: 2px solid #cc0048;
      }

      ::placeholder {
        color: rgba(56, 0, 60, 0.5);
      }
    }

  }
`;
