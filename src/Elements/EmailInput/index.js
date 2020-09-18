import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const EmailInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  height: 56px;
  

  input {
    font-size: 16px;
    color: #666e80;
    padding-left: 18px;
    height: 56px;
    border: 1px solid #161921;
    border-radius: 4px;
    outline: none;

    :focus {
      border: 2px solid #161921;
    }
  }

}

  ${media.desktop} {
    display: flex;
    flex-direction: column;
    grid-column-start: span 4;
    padding-bottom: 16px;

    input {
      font-size: 16px;
      color: #666e80;
      padding-left: 18px;
      border-radius: 4px;
      outline: none;
      height: 52px;
      margin: 0;

      :focus {
        border: 2px solid #161921;
      }
    }

  }
`;
