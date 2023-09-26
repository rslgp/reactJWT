import Cookies from "js-cookie";
var jwt = require("jsonwebtoken")

var credentials = {}
credentials.jwt = process.env.REACT_APP_JWT;

const cookieName="access_token";
const JWT_AUTH = {
    "getSessionData": function getSessionData(){
        var token = Cookies.get(cookieName);
        var client = jwt.verify(token, credentials.jwt);
        return client;
    },
    "saveSessionData": function saveSessionData(clientData){
        const data = {"email":clientData.email};
        var token = jwt.sign(data, credentials.jwt);
        Cookies.set(cookieName,token);      
    }
}
export default JWT_AUTH;