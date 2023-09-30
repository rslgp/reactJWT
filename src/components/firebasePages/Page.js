import React, { useState, useEffect } from "react";
import JWT_AUTH from "../func/JWT_AUTH";
import app from "../func/firebase_setup";
import GlobalVariables from "../func/GlobalVariables";
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteField } from "firebase/firestore"; // Updated import statements
import Cookies from "js-cookie";
import AutoComplete from "./AutoComplete";


import { Box, Typography, Avatar, Chip, TextField, Button } from "@mui/material";

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

const removedTags=[];

const Page = () => {
  const [userData, setUserData] = useState(null);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [newPublicContact, setNewPublicContact] = useState("");
  const [newPortfolio, setNewPortfolio] = useState("");
  const [newCurriculo, setNewCurriculo] = useState("");

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
    updateDoc(userDocRef, 
      { tags: updatedTags, 
        publicContact: newPublicContact, 
        portfolio: newPortfolio,
        curriculo: newCurriculo
      });

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

    removedTags.forEach(async (element) => {
      if (element !== "") {
        const tagDocRef = doc(firestore, "tags", element.toLowerCase());
        
        updateDoc(tagDocRef, {
          [userData.public_id.toString()]: deleteField()
        });
        
      }
    });

    alert("Perfil salvo");
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
          if(data.publicContact) setNewPublicContact(data.publicContact);
          if(data.portfolio) setNewPortfolio(data.portfolio);
          if(data.curriculo) setNewCurriculo(data.curriculo);

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

    //if (!/^[A-Za-z ]+$/.test(newTag)) {
    //  // Check if the newTag contains only letters
    //  alert("Tags can only contain letters.");
    //  return;
    //}
    const tag_formatted =  newTag.toLowerCase();
    setNewTag(tag_formatted);

    // Add the new tag to the tags array
    const updatedTags = [...tags, tag_formatted];
    setTags(updatedTags);

    // Update the userData in the database
    const updatedUserData = { ...userData, tags: updatedTags};
    setUserData(updatedUserData);

    // Clear the input field
    setNewTag("");
  };
  
  const checkIfEnterTag = (e) => {
    if(e.key === "Enter") handleAddTag();
  }

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    
    removedTags.push(tagToRemove);

    // Update the userData in the database
    const updatedUserData = { ...userData, tags: updatedTags };
    setUserData(updatedUserData);
  };

  const handleTagInputChange = (e) => {
    setNewTag(e.target.value);
  };
  const handlePublicContactInputChange = (e) => {
    setNewPublicContact(e.target.value);
  };
  const handlePortfolioInputChange = (e) => {
    setNewPortfolio(e.target.value);
  };
  const handleCurriculoInputChange = (e) => {
    setNewCurriculo(e.target.value);
  };

  return (
    <div>
      {userData ? ( <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Profile Information</h2>
        <Avatar
          alt="Profile picture"
          src={userData.profilePictureUrl}
          sx={{
            width: 100,
            height: 100,
            margin: "auto",
          }}
        />
        <Typography variant="h6" component="h3">
          {userData.name}
        </Typography>
        <Typography variant="body1">{userData.email}</Typography>
        <Typography variant="body1">
          Public Id:
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
        </Typography>

        <AutoComplete/>

        <Typography variant="body1">Tags:</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Change the direction to horizontal
            flexWrap: "wrap", // Allow items to wrap to the next line
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              onDelete={() => handleRemoveTag(tag)}
              sx={{
                margin: "5px",
              }}
            />
          ))}
        </Box>

        <div style={{ display: "flex", flexDirection: "row" }}>
        <TextField
          label="Add a tag"
          value={newTag}
          onChange={handleTagInputChange}
          onKeyUp={checkIfEnterTag}
          sx={{
            width: "100%",
            margin: "10px 0",
          }}
        />
        <Button onClick={handleAddTag} style={{borderRadius:"12px",height: "60px", marginTop: "8px", backgroundColor:"#f0f2f5"}} >ADD</Button>
      </div>
        
        <TextField
          label="Add Public Contact"
          placeholder="Enter contact email, number, social media"
          value={newPublicContact}
          onChange={handlePublicContactInputChange}
          sx={{
            width: "100%",
            margin: "10px 0",
          }}
        />

        
        <TextField
          label="Add portfolio URL"
          placeholder="Enter portfolio URL"
          value={newPortfolio}
          onChange={handlePortfolioInputChange}
          sx={{
            width: "100%",
            margin: "10px 0",
          }}
        />

        
        <TextField
          label="Add curriculo URL"
          placeholder="Enter curriculo URL"
          value={newCurriculo}
          onChange={handleCurriculoInputChange}
          sx={{
            width: "100%",
            margin: "10px 0",
          }}
        />

        <Button onClick={saveProfile} style={{borderRadius:"12px",height: "60px", width: "100%", marginTop: "8px", backgroundColor:"#f0f2f5"}} >SAVE</Button>
      </Box>
          </>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default Page;
