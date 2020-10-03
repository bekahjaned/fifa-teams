import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { BreadcrumbWrap } from "../../Elements/BreadcrumbWrap/";
import { BreadcrumbLinkWrap } from "../../Elements/BreadcrumbLinkWrap/";

function Breadcrumb({ text }) {
  return (
    <BreadcrumbWrap>
      <Link to="/">
        <BreadcrumbLinkWrap>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#f2f2f2" />
          <p>{text}</p>
        </BreadcrumbLinkWrap>
      </Link>
    </BreadcrumbWrap>
  );
}

export default Breadcrumb;
