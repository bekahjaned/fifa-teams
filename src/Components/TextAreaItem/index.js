import React from "react";

import { TextAreaWrap } from "../../Elements/TextAreaWrap";

function TextAreaItem({
  name,
  value,
  title,
  extra,
  size,
  handleChange,
  id,
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
      <p>
        {title} <span>*</span>
      </p>
      <p>{extra}</p>
      <textarea
        name={name}
        value={value}
        className={size}
        id={id}
        onChange={handleChange}
      />
      <span className="errorMsg">{error}</span>
    </TextAreaWrap>
  );
}

export default TextAreaItem;
