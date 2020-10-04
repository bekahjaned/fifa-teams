import React from "react";

import { DropdownLabel } from "../../Elements/DropdownLabel";
import { DropdownWrap } from "../../Elements/DropdownWrap";

function DropdownItem({ title, size, handleChange, placeholder, options }) {
  return (
    <DropdownWrap>
      <DropdownLabel>
        {title} <span>*</span>
      </DropdownLabel>
      <select className={size} onChange={handleChange}>
        <option className="no-display">{placeholder}</option>
        {options}
      </select>
    </DropdownWrap>
  );
}

export default DropdownItem;
