import Cookies from "js-cookie";
import GlobalVariables from "./GlobalVariables";
var jwt = require("jsonwebtoken");

var credentials = {}
credentials.jwt = process.env.REACT_APP_JWT;

const cookieName = "access_token";
const expirationHours=1;

const JWT_AUTH = {
  getSessionData: function () {
    try {
        var token = Cookies.get(cookieName);
        if (!token) {
            // Token is not present
            throw new Error('No Auth Cookie');
        }
        var client = jwt.verify(token, credentials.jwt);

        // Check if token has expired
        if (client.exp && client.exp < Date.now() / 1000) {
            // Token has expired
            this.removeSessionData(); // Remove the expired token            
            throw new Error('Token Expired');
        }
        return client;
    } catch (e) {
        console.log(e.message);
        window.location.href=GlobalVariables.homepage +"/"+ GlobalVariables.loginPage;
        return null;
    }
  },
  saveSessionData: function (clientData) {
    const expInSeconds = (expirationHours+1) * 60 * 60;
    const data = {
      email: clientData.email,
      exp: Math.floor(Date.now() / 1000) + expInSeconds,
    };
    var token = jwt.sign(data, credentials.jwt);
    Cookies.set(cookieName, token, { expires: expirationHours / 24 }); // Set the cookie expiration in days
  },
  removeSessionData: function () {
    Cookies.remove(cookieName);
  },
};

export default JWT_AUTH;
