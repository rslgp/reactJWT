import React, { useState, useEffect } from "react";
import app from "./func/firebase_setup";
import { getDatabase, ref, get } from "firebase/database";
import { useParams } from 'react-router-dom';

const db = getDatabase(app);

const Page = () => {
    const { profile_id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    function getData() {
      const publicUserPath="public_users/" + profile_id;
      const publicUserRef = ref(db, publicUserPath);

      get(publicUserRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const userPath="users/" + data.id;
            const userRef = ref(db, userPath);
            get(userRef)
                .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const {email, ...otherprops} = data;
                    setUserData(otherprops);
                } else {
                    console.log("No data available");
                }
                })
                .catch((error) => {
                console.error("Error fetching data:", error);
                });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    getData();
  }, []); // Empty dependency array to run this effect only once

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
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default Page;
