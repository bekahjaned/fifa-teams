import React from "react";

import { DropdownWrap } from "../../Elements/DropdownWrap";
import { InputLabel } from "../../Elements/InputLabel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function DropdownItem({
  title,
  errorText,
  errorShow,
  size,
  errorState,
  handleChange,
  options,
  error,
  placeholder,
}) {
  return (
    <DropdownWrap>
      <InputLabel>
        <FontAwesomeIcon className={errorShow} icon={faExclamationTriangle} />
        <h2 className={errorText}>
          {title}
          <span>*</span>
        </h2>
      </InputLabel>
      <div>
        <select className={errorState} id={size} onChange={handleChange}>
          <option className="no-display" value="select">
            {placeholder}
          </option>
          {options}
        </select>
        <span className="errorMsg">{error}</span>
      </div>
    </DropdownWrap>
  );
}

export default DropdownItem;
