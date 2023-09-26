import JWT_AUTH from './func/JWT_AUTH';
import app from './func/firebase_setup'
import { getDatabase, ref, set, get } from "firebase/database";
const db = getDatabase(app);

const Page = () => {
    function getData(){
        var client = JWT_AUTH.getSessionData();
        if(client==null){
            return;    
        };
        var email = client.email;
        var usersRef = ref(db,"users/"+email);
        console.log(db);
        console.log(usersRef);
        get(usersRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                const data = snapshot.val();
                console.log(data);
                } else {
                console.log("No data available");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

    }
    getData();
}
export default Page;