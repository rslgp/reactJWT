import Cookies from "js-cookie";
var jwt = require("jsonwebtoken");

var credentials = {}
credentials.jwt = process.env.REACT_APP_JWT;

const cookieName = "access_token";
const LOGIN_PAGE = "/";
const expirationHours=1;

const JWT_AUTH = {
  getSessionData: function () {
    try {
      var token = Cookies.get(cookieName);
      if (!token) {
        return null; // Token is not present
      }
      var client = jwt.verify(token, credentials.jwt);

      // Check if token has expired
      if (client.exp && client.exp < Date.now() / 1000) {
        // Token has expired
        this.removeSessionData(); // Remove the expired token
        window.location.href = LOGIN_PAGE;
        return null;
      }
      return client;
    } catch (e) {
      window.location.href = LOGIN_PAGE;
      return null;
    }
  },
  saveSessionData: function (clientData) {
    const expInSeconds = expirationHours * 60 * 60;
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
