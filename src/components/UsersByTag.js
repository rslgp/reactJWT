import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import GlobalVariables from "./func/GlobalVariables";

const UsersByTag = () => {
  const { tag } = useParams(); // Get the tag from the URL params
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Firebase database reference
    const db = getDatabase();

    // Reference to the "tags" node for the specific tag
    const tagRef = ref(db, `tags/${tag}`);

    // Fetch user IDs associated with the tag
    get(tagRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const tagData = snapshot.val();

          // Get the user IDs associated with the tag
          const userIds = Object.keys(tagData);
        
          setUsers(userIds);
        }
      })
      .catch((error) => {
        console.error("Error fetching tag data:", error);
      });
  }, [tag]); // Fetch data whenever the tag URL parameter changes

  return (
    <div>
      <h2>Users with Tag: {tag}</h2>
      <div>
        {users.map((user) => (
          <><a target="_blank"
          rel="noreferrer"
          href={
            GlobalVariables.homepage +
            "/" +
            GlobalVariables.publicProfilePage.split(":")[0] +
            user}>{user}</a><br/></>
        ))}
      </div>
    </div>
  );
};

export default UsersByTag;
