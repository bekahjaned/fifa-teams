import styled from "styled-components";

export const InputLabel = styled.div`
  display: flex;
  align-items: center;

  .svg-inline--fa {
    display: none;
  }

  .errorShow {
    display: block;
    color: #de4343;
    margin-right: 10px;
    height: 20px;
    width: 19px;
  }

  h2 {
    font-size: 35px;
    color: rgba(242, 242, 242, 0.85);
    margin: 0;
    font-weight: 400;
  }

  h2.errorText {
    color: #de4343;
  }

  span {
    color: #eaff04;
    margin-left: 10px;
  }
`;
