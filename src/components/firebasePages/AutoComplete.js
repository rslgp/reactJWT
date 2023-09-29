import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../func/firebase_setup"; // Import your Firebase configuration file

const firestore = getFirestore(app);

const AutoComplete = () => {
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

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

    fetchData();
  }, []);

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
    <Link
      to={`/tags/${suggestion}`} // Replace with your route for tag details
      className="suggestion-link"
    >
      {suggestion}
    </Link>
  );

  const inputProps = {
    placeholder: "Search for a tag",
    value,
    onChange,
  };

  return (
    <div>
      <h2>All Tags:</h2>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
};

export default AutoComplete;
