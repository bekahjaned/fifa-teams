import React from "react";

import { InputLabel } from "../../Elements/InputLabel";
import { TextAreaWrap } from "../../Elements/TextAreaWrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function TextAreaItem({
  name,
  value,
  title,
  extra,
  errorText,
  errorShow,
  handleChange,
  id,
  className,
  error,
}) {


  return (
    <TextAreaWrap>
      <InputLabel>
        <FontAwesomeIcon className={errorShow} icon={faExclamationTriangle} />
        <h2 className={errorText}>
          {title}
          <span>*</span>
        </h2>
      </InputLabel>
      <div className="extra">
        <p className={errorText}>{extra}</p>
        <span className="errorMsg">{error}</span>
      </div>

      <textarea
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
        className={className}
      />
    </TextAreaWrap>
  );
};

export default TextAreaItem;
