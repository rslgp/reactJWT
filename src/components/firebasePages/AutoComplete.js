import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../func/firebase_setup"; // Import your Firebase configuration file
import { Box } from "@mui/material";

const firestore = getFirestore(app);

const AutoComplete = () => {
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  const [fetchDataClicked, setFetchDataClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to the "tags" collection
        const tagsCollection = collection(firestore, "tags");

        // Fetch all documents within the "tags" collection
        const querySnapshot = await getDocs(tagsCollection);

        const tagData = [];
        querySnapshot.forEach((doc) => {
          // Get the document data and add it to the array
          tagData.push(doc.id);
        });

        setTags(tagData);
      } catch (error) {
        console.error("Error fetching tag data:", error);
      }
    };

    if (fetchDataClicked) {
      // Fetch data only when the button is clicked
      fetchData();
    }
  }, [fetchDataClicked]);

  const getSuggestions = (inputValue) => {
    const inputValueLower = inputValue.toLowerCase();
    return tags.filter((tag) => tag.toLowerCase().includes(inputValueLower));
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const renderSuggestion = (suggestion) => (
    
    <Box
    sx={{
      display: "flex",
      flexDirection: "row", // Change the direction to horizontal
      flexWrap: "wrap", // Allow items to wrap to the next line
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Link
      to={`/tags/${suggestion}`} // Replace with your route for tag details
      className="suggestion-link"
      rel="noreferrer" 
      target="_blank"
    >
      {suggestion}
    </Link>
    </Box>
  );

  const inputProps = {
    placeholder: "Search for a tag",
    value,
    onChange,
  };

  const handleFetchDataClick = () => {
    // Set the flag to trigger data fetching
    setFetchDataClicked(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <b style={{ marginRight: "10px" }}>All Tags:</b>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <div><button onClick={handleFetchDataClick}>Carregar</button></div>
    </div>
  );
};

export default AutoComplete;
