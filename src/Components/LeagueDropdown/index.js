import React from "react";

import { DropdownLabel } from "../../Elements/DropdownLabel/";
import { DropdownWrap } from "../../Elements/DropdownWrap/";

function LeagueDropdown({ handleLeagueChange, leagues }) {
  return (
    <DropdownWrap>
      <DropdownLabel>
        League <span>*</span>
      </DropdownLabel>
      <select className="large" onChange={handleLeagueChange}>
        <option className="no-display">Select League</option>
        {leagues}
      </select>
    </DropdownWrap>
  );
}

export default LeagueDropdown;
