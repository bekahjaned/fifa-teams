import React from "react";

import { TextAreaWrap } from "../../Elements/TextAreaWrap";

function TextAreaItem(props) {
  return (
    <TextAreaWrap>
      <p>
        {props.title} <span>*</span>
      </p>
      <p>{props.extra}</p>
      <textarea className={props.class}></textarea>
    </TextAreaWrap>
  );
}

export default TextAreaItem;
