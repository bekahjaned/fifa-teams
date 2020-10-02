import React from "react";

import { DropdownLabel } from "../../Elements/DropdownLabel/";
import { DropdownWrap } from "../../Elements/DropdownWrap/";

function TeamDropdown({ handleTeamChange, teams }) {
  return (
    <DropdownWrap>
      <DropdownLabel>
        Team <span>*</span>
      </DropdownLabel>
      <select className="medium" onChange={handleTeamChange}>
        <option className="no-display">Select Team</option>
        {teams}
      </select>
    </DropdownWrap>
  );
}

export default TeamDropdown;
