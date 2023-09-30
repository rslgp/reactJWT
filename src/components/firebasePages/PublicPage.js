import React, { useState, useEffect } from "react";
import app from "../func/firebase_setup";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';


import { Box, Typography, Avatar, Chip, Link } from "@mui/material";
import GlobalVariables from "../func/GlobalVariables";

const firestore = getFirestore(app);

const PublicPage = () => {
  const { profile_id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getData() {
      const publicUserDocRef = doc(firestore, "public_users", profile_id);

      try {
        const publicUserDoc = await getDoc(publicUserDocRef);

        if (publicUserDoc.exists()) {
          const data = publicUserDoc.data();
          const userDocRef = doc(firestore, "users", data.id);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            const { email, ...otherProps } = userData;
            setUserData(otherProps);
          } else {
            console.log("No data available for user");
          }
        } else {
          console.log("No data available for public user");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, [profile_id]); // Empty dependency array to run this effect only once

  return (
    <div>
  {userData ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Profile Information</h2>
      <Typography variant="h6" component="h3">
        {userData.name}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px", // Add gap between the links
          marginTop: "10px", // Add margin to the top
        }}
      >
        {userData.publicContact ? (
          <Link href={`${GlobalVariables.fixURL(userData.publicContact)}`} target="_blank" rel="noreferrer">
            {userData.publicContact}
          </Link>
        ) : null}

        {userData.portfolio ? (
          <Link href={`${GlobalVariables.fixURL(userData.portfolio)}`} target="_blank" rel="noreferrer">
            Portfolio
          </Link>
        ) : null}

        {userData.curriculo ? (
          <Link href={`${GlobalVariables.fixURL(userData.curriculo)}`} target="_blank" rel="noreferrer">
            Curriculo
          </Link>
        ) : null}
      </Box>


      <Avatar
        alt="Profile picture"
        src={userData.profilePictureUrl}
        sx={{
          width: 100,
          height: 100,
          margin: "auto",
        }}
      />
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
        {userData.tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            sx={{
              margin: "5px",
            }}
          />
        ))}
      </Box>
    </Box>
  ) : (
    <p>Loading profile data...</p>
  )}
</div>
  );
};

export default PublicPage;
