import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import GlobalVariables from "../func/GlobalVariables";
import app from "../func/firebase_setup"; // Import your Firebase configuration file

import { Box, Link } from "@mui/material";

const firestore = getFirestore(app);

const AllTags = () => {
  const { tag } = useParams();
  const [tags, setTags] = useState([]);

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
  }, [tag]);

  return (
    <div>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>All Tags:</h2>
      <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Change the direction to horizontal
            flexWrap: "wrap", // Allow items to wrap to the next line
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        {tags.map((tag) => (
          <Link style={{ marginRight: "10px" }} key={tag} href={`${GlobalVariables.homepage}/${GlobalVariables.tagPage.split(":")[0]}${tag}`} rel="noreferrer" target="_blank">
            {tag}
          </Link>
        ))}
      </Box>
    </Box>
    </div>

  );
};

export default AllTags;
