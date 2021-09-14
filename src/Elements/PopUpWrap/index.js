import styled from "styled-components";

export const PopUpWrap = styled.div`
  display: relative;
  height: 48px;
  width: 800px;
  background-color: #de4343;
  margin: 0 auto;
  border-radius: 4px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    margin: 0;

    div.content {
      padding: 0;
      margin: 0;

      h4 {
        font-size: 16px;
        color: white;
        margin: 0px 0px 0px 8px;
      }

      path {
        color: white;
        height: 19px;
        width: 20px;
      }
    }

    .exitIcon {
      color: white;
      cursor: pointer;
    }

    .exitIcon:hover {
      color: grey;
    }
  }
`;
