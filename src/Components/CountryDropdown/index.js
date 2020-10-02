import React from "react";

import { DropdownLabel } from "../../Elements/DropdownLabel/";
import { DropdownWrap } from "../../Elements/DropdownWrap/";

function CountryDropdown({ handleCountryChange, countries }) {
  return (
    <DropdownWrap>
      <DropdownLabel>
        Country <span>*</span>
      </DropdownLabel>
      <select className="small" onChange={handleCountryChange}>
        <option className="no-display">Select Country</option>
        {countries}
      </select>
    </DropdownWrap>
  );
}

export default CountryDropdown;
