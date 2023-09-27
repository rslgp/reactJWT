import React, { useState, useEffect } from "react";
import JWT_AUTH from "./func/JWT_AUTH";
import app from "./func/firebase_setup";
import { getDatabase, ref, get, set} from "firebase/database";
import GlobalVariables from "./func/GlobalVariables";

const db = getDatabase(app);

function emailToHash(email) {
  let hash = 0;

  for (let i = 0; i < email.length; i++) {
    const char = email.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }

  return Math.abs(hash) + Date.now(); // Convert to a positive number
}

const Page = () => {
  const [userData, setUserData] = useState(null);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const saveProfile = () => {
    const client = JWT_AUTH.getSessionData();
    if (!client) {
      return;
    }
    const email = client.email;
    const id = btoa(email);
    const tagsUserPath = "users/" + id +"/tags";
    const tagsUserRef = ref(db, tagsUserPath);
    
    const updatedTags = [...tags, newTag];
    set(tagsUserRef, updatedTags);

    
    updatedTags.forEach(element => {
      if(element!==""){        
        var tagsPath = "tags/" + element.toLowerCase() + "/" + userData.public_id;
        var tagsRef = ref(db, tagsPath);
        set(tagsRef, true);
      }
    });

  };

  useEffect(() => {
    function getData() {
      const client = JWT_AUTH.getSessionData();
      if (!client) {
        return;
      }
      const email = client.email;
      const id = btoa(email);
      const userPath = "users/" + id;
      const userRef = ref(db, userPath);

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setUserData(data);
            if (data.tags) {
              setTags(data.tags); // Set the existing tags
            }
          } else {
            console.log("No data available");
            const data = {
              email: email,
              name: GlobalVariables.profileData.name,
              profilePictureUrl: GlobalVariables.profileData.imageUrl,
              tags: [], // Initialize tags as an empty array
            };
            const public_id = emailToHash(data.email);
            data.public_id = public_id;
            set(userRef, data);

            const publicRef = ref(db, "public_users/" + public_id);
            set(publicRef, { id: id });

            setUserData(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    getData();
  }, []); // Empty dependency array to run this effect only once

  const handleAddTag = () => {
    if (newTag.trim() === "") return; // Don't add empty tags

    if (!/^[A-Za-z]+$/.test(newTag)) {
      // Check if the newTag contains only letters
      alert("Tags can only contain letters.");
      return;
    }
    setNewTag(newTag.toLowerCase());

    // Add the new tag to the tags array
    const updatedTags = [...tags, newTag];
    setTags(updatedTags);

    // Update the userData in the database
    const updatedUserData = { ...userData, tags: updatedTags };
    setUserData(updatedUserData);

    // Clear the input field
    setNewTag("");
  };

  const handleTagInputChange = (e) => {
    setNewTag(e.target.value);
  };

  return (
    <div>
      {userData ? (
        <div>
          <h2>Profile Information</h2>
          <div>
            <img
              src={userData.profilePictureUrl}
              alt="Profile"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </div>
          <div>
            <strong>Name:</strong> {userData.name}
          </div>
          <div>
            <strong>Email:</strong> {userData.email}
          </div>
          <div>
            <strong>Public Id:</strong>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={
                GlobalVariables.homepage +
                "/" +
                GlobalVariables.publicProfilePage.split(":")[0] +
                userData.public_id
              }
            >
              {userData.public_id}
            </a>
          </div>
          <div>
            <strong>Tags:</strong>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add a tag"
              value={newTag}
              onChange={handleTagInputChange}
            />
            <button onClick={handleAddTag}>Add Tag</button>
          </div>

          <button onClick={saveProfile}>SAVE</button>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default Page;
