import React from "react";

function TeamDropdown({ handleTeamChange, teams }) {
  return (
    <div>
      <label>
        Team <span>*</span>
      </label>
      <select onChange={handleTeamChange}>
        <option className="no-display">Select Team</option>
        {teams}
      </select>
    </div>
  );
}

export default TeamDropdown;
