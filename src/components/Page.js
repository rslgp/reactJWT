import React, { useState, useEffect } from "react";
import JWT_AUTH from "./func/JWT_AUTH";
import app from "./func/firebase_setup";
import { getDatabase, ref, get, set } from "firebase/database";
import GlobalVariables from "./func/GlobalVariables";

const crypto = require('crypto');

const db = getDatabase(app);

function emailToHash(email) {
  const currentTime = Date.now();
  const dataToHash = `${email}-${currentTime}`;
  
  // Create a hash of the combined data
  const hash = crypto.createHash('md5').update(dataToHash).digest('hex');
  
  // Convert the hexadecimal hash to a decimal number
  const uniqueId = parseInt(hash, 16);
  
  return uniqueId;
}

const Page = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    function getData() {
      const client = JWT_AUTH.getSessionData();
      if (!client) {
        return;
      }
      const email = client.email;
      const id = btoa(email);
      const userPath="users/" + id;
      const userRef = ref(db, userPath);

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setUserData(data);
          } else {
            console.log("No data available");
            const data = {
              email: email,
              name: GlobalVariables.profileData.name,              
              profilePictureUrl: GlobalVariables.profileData.imageUrl,
            };
            const public_id=emailToHash(data.email);
            data.public_id=public_id;
            set(userRef, data);

            const publicRef = ref(db,"public_users/"+public_id);
            set(publicRef,{id:id})
            
            setUserData(data);
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
            <strong>Public Id:</strong> <a href={GlobalVariables.homepage+"/"+GlobalVariables.publicProfilePage.split(":")[0]+userData.public_id}>{userData.public_id}</a>
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
