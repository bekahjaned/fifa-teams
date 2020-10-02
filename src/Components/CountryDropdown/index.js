import React from "react";

function CountryDropdown({ handleCountryChange, countries }) {
  return (
    <div>
      <label>
        Country <span>*</span>
      </label>
      <select onChange={handleCountryChange}>
        <option className="no-display">Select country</option>
        {countries}
      </select>
    </div>
  );
}

export default CountryDropdown;
