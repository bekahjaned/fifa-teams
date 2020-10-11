import React from "react";

import { DropdownLabel } from "../../Elements/DropdownLabel";
import { DropdownWrap } from "../../Elements/DropdownWrap";

function DropdownItem({ title, value, size, handleChange, options, error }) {
  return (
    <DropdownWrap>
      <DropdownLabel>
        {title} <span>*</span>
      </DropdownLabel>
      <select className={size} onChange={handleChange}>
        <option className="no-display" value={value}>
          {value}
        </option>
        {options}
      </select>
      <div className="errorMsg">{error}</div>
    </DropdownWrap>
  );
}

export default DropdownItem;
