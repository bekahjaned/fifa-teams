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
  // $(".bullet").focus(function () {
  //   if (document.getElementById("bullet").value === " ") {
  //     document.getElementById("bullet").value += "• ";
  //   }
  // });

  // $(".bullet").keyup(function (event) {
  //   let keycode = event.keycode ? event.keycode : event.which;
  //   if (keycode === "13") {
  //     document.getElementById("bullet").value += "• ";
  //   }

  //   let txtval = document.getElementById("bullet").value;
  //   if (txtval.substr(txtval.length - 1) === "\n") {
  //     document.getElementById("bullet").value = txtval.substring(
  //       0,
  //       txtval.length - 1
  //     );
  //   }
  // });

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
}

export default TextAreaItem;

//
