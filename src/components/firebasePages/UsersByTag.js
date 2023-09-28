import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../func/firebase_setup"; // Make sure to import the Firebase app instance
import GlobalVariables from "../func/GlobalVariables";

const firestore = getFirestore(app);

const UsersByTag = () => {
  const { tag } = useParams(); // Get the tag from the URL params
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const tagDocRef = doc(firestore, "tags", tag);
        const tagDoc = await getDoc(tagDocRef);
        console.log(tagDoc.data());
        setUsers(Object.keys(tagDoc.data()));
        } catch (error) {
        console.error("Error fetching tag data:", error);
      }
    };

    fetchData();
  }, [tag]); // Fetch data whenever the tag URL parameter changes

  return (
    <div>
      <h2>Users with Tag: {tag}</h2>
      <div>
        {users.map((user) => (
          <div key={user}>
          <a
            target="_blank"
            rel="noreferrer"
            href={`${GlobalVariables.homepage}/${GlobalVariables.publicProfilePage.split(":")[0]}${user}`}
          >
            {user}
          </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersByTag;
