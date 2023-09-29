import React, { useState } from "react";
import getUsersWithTags from './func/queryTags';
import GlobalVariables from "./func/GlobalVariables";

const MultiTag = () => {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [values, setValues] = useState([]); // State to store split values

  // Function to handle input value changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to split input value by comma and update the 'values' state
  const handleSplitValues = async () => {
    const splitValues = inputValue.split(",").map((value) => value.trim());
    setValues(await getUsersWithTags(splitValues));
  };

  return (
    <div>
      <h2>Multi-Value Input</h2>
      <input
        type="text"
        placeholder="Enter values separated by comma"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSplitValues}>Split Values</button>

      <div>
        <h3>Split Values:</h3>
        <div>
          {values.map((value, index) => (            
          <div key={index}><a target="_blank"
          rel="noreferrer"
          href={
            GlobalVariables.homepage +
            "/" +
            GlobalVariables.publicProfilePage.split(":")[0] +
            value.public_id}>{value.public_id}</a>{value.name}<br/></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiTag;
