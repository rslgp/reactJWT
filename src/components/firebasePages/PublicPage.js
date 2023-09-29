import React, { useState, useEffect } from "react";
import app from "../func/firebase_setup";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';

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
        <div>
          <h2>Profile Information</h2>
          <div>
            <strong>Name:</strong> {userData.name}
          </div>
          <div>
            <img
              src={userData.profilePictureUrl}
              alt="Profile"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </div>
          <div>
          <strong>Tags:</strong>
            <ul>
              {userData.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default PublicPage;
