import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import app from "../func/firebase_setup"; // Import your Firebase configuration file

const firestore = getFirestore(app);

const getUsersWithTags = async (tagsToFilter) => {
  try {
    // Reference to the "users" collection
    const usersCollection = collection(firestore, "users");

    // Define the tags you want to filter by
    //const tagsToFilter = ["react", "nodejs"];

    // Build a query to find users with both "react" and "nodejs" tags
    const queryForUsers = query(
      usersCollection,
      where("tags", "array-contains-any", tagsToFilter)
    );

    // Execute the query and get the result
    const querySnapshot = await getDocs(queryForUsers);

    // Process the query results
    const usersWithTags = [];
    querySnapshot.forEach((doc) => {
      // Get user data
      const userData = doc.data();

      // Check if the user has both tags
      if (
        tagsToFilter.every((tag) => userData.tags.includes(tag))
      ) {
        usersWithTags.push(userData);
      }
    });

    // usersWithTags now contains the list of users who have both "react" and "nodejs" tags
    //console.log("Users with both tags:", usersWithTags);
    return usersWithTags;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
export default getUsersWithTags;