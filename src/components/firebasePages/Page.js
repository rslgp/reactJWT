import React, { useState, useEffect } from "react";
import JWT_AUTH from "../func/JWT_AUTH";
import app from "../func/firebase_setup";
import GlobalVariables from "../func/GlobalVariables";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; // Updated import statements
import Cookies from "js-cookie";

// Initialize Firestore
const firestore = getFirestore(app);

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
    const userDocRef = doc(firestore, "users", id);

    const updatedTags = tags;

    // Update the user document with the new tags
    updateDoc(userDocRef, { tags: updatedTags });

    updatedTags.forEach(async (element) => {
      if (element !== "") {
        const tagDocRef = doc(firestore, "tags", element.toLowerCase());
        
        const tagDoc = await getDoc(tagDocRef);
        if(tagDoc.exists()){
          updateDoc(tagDocRef, {
            [userData.public_id.toString()]: true
          });
        }else{
          setDoc(tagDocRef, {
            [userData.public_id.toString()]: true
          });
        }
        
      }
    });
  };

  useEffect(() => {
    async function getData() {
      const client = JWT_AUTH.getSessionData();
      if (!client) {
        return;
      }
      const email = client.email;
      const id = btoa(email);
      const userDocRef = doc(firestore, "users", id);

      try {
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData(data);
          if (data.tags) {
            setTags(data.tags); // Set the existing tags
          }
        } else {
          console.log("No data available");
          try{
            const profileData = JSON.parse(Cookies.get("profile"));
            Cookies.remove("profile"); //run only once
            const data = {
              email: email,
              name: profileData.name,
              profilePictureUrl: profileData.imageUrl,
              tags: [], // Initialize tags as an empty array
            };
            const public_id = emailToHash(data.email);
            data.public_id = public_id;
            await setDoc(userDocRef, data);
            console.log(public_id.toString());
            const publicDocRef = doc(firestore, "public_users", public_id.toString());

            // Create or update a public user document with an 'id' field
            await setDoc(publicDocRef, { id: id });
            setUserData(data);
          }catch(e){
            console.log(e.message);
            console.log("no data available create new - error");
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []); // Empty dependency array to run this effect only once

  const handleAddTag = () => {
    if (newTag.trim() === "" || tags.includes(newTag)) return; // Don't add empty tags

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
