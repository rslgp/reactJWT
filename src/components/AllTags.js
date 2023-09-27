import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import GlobalVariables from "./func/GlobalVariables";

const UsersByTag = () => {
  const { tag } = useParams(); // Get the tag from the URL params
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Firebase database reference
    const db = getDatabase();

    // Reference to the "tags" node for the specific tag
    const tagRef = ref(db, `tags`);

    // Fetch user IDs associated with the tag
    get(tagRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const tagData = snapshot.val();

          // Get the user IDs associated with the tag
          const userIds = Object.keys(tagData);
        
          setTags(userIds);
        }
      })
      .catch((error) => {
        console.error("Error fetching tag data:", error);
      });
  }, [tag]); // Fetch data whenever the tag URL parameter changes

  return (
    <div>
      <h2>All Tags:</h2>
      <div>
        {tags.map((tag) => (
          <><a target="_blank"
          rel="noreferrer"
          href={
            GlobalVariables.homepage +
            "/" +
            GlobalVariables.tagPage.split(":")[0] +
            tag}>{tag}</a><br/></>
        ))}
      </div>
    </div>
  );
};

export default UsersByTag;
