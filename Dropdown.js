import React, { useState } from 'react';

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log("selectedOptions",selectedOptions)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { value: "ocean1", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" }
  ];

  const handleOptionChange = (value) => {
    let updatedOptions;

    if (selectedOptions.includes(value)) {
      updatedOptions = selectedOptions.filter(option => option !== value);
    } else {
      if (value === "blue") {
        updatedOptions = selectedOptions.filter(option => option !== "silver");
        updatedOptions.push("blue");
      } else if (value === "silver") {
        updatedOptions = selectedOptions.filter(option => option !== "blue");
        updatedOptions.push("silver");
      } else {
        updatedOptions = [...selectedOptions, value];
      }
    }

    setSelectedOptions(updatedOptions);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <label>Select Colors:</label>
      <div className="custom-dropdown">
        <div className="dropdown-trigger" onClick={toggleDropdown}>
          {isDropdownOpen ? <select>please select</select> : <select>please select</select>}
        </div>
        {isDropdownOpen && (
          <div className="options">
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={selectedOptions.includes(option.value)}
                      onChange={() => handleOptionChange(option.value)}
                    />
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        Selected values: {selectedOptions.join(', ')}
      </div>
    </div>
  );
};

export default App;
