import React from "react";

function LeagueDropdown({ handleLeagueChange, leagues }) {
  return (
    <div>
      <label>
        League <span>*</span>
      </label>
      <select onChange={handleLeagueChange}>
        <option className="no-display">Select League</option>
        {leagues}
      </select>
    </div>
  );
}

export default LeagueDropdown;
