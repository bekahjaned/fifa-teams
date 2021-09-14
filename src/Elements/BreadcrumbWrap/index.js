import styled from "styled-components";

export const BreadcrumbWrap = styled.div`
  width: 110px;

  a {
    text-decoration: none;

    .breadcrumbLink {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
        font-size: 16px;
        color: #f2f2f2;
        text-decoration: none;
      }
    }
  }

  a:hover {
    text-decoration: underline;

    path {
      color: #cc0048;
    }

    p {
      color: #cc0048;
      text-decoration: underline;
    }
  }
`;
