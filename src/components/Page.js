import React, { useState, useEffect } from "react";
import JWT_AUTH from "./func/JWT_AUTH";
import app from "./func/firebase_setup";
import { getDatabase, ref, get } from "firebase/database";

const db = getDatabase(app);

const Page = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    function getData() {
      const client = JWT_AUTH.getSessionData();
      if (!client) {
        return;
      }
      const email = client.email;
      const usersRef = ref(db, "users/" + email);

      get(usersRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setUserData(data);
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
            <strong>Email:</strong> {userData.email}
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
