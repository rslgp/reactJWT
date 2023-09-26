import GoogleLogin from  "@stack-pulse/next-google-login"

import saveToGoogleSheets from './func/saveToGoogleSheets'

import Cookies from "js-cookie"

var jwt = require("jsonwebtoken")

const credentials = {
  "google":process.env.REACT_APP_GOOGLE_CLIENTID,
  "jwt":process.env.REACT_APP_JWT
}

function Login() {

    function onLogin(googleResponse){
        console.log(googleResponse);
        var inseriu = saveToGoogleSheets(googleResponse.profileObj);
        if(inseriu) alert("Ponto registrado");
        else alert("Falha no ponto")
        saveCookie(googleResponse.profileObj)
    }

    function saveCookie(profileObj){
      const data = {"email":profileObj.email};
      var token = jwt.sign(data, credentials.jwt);
      Cookies.set('access_token',token);
    }
    window.teste= ()=>{
      var token = Cookies.get("access_token");
      var client = jwt.verify(token, credentials.jwt);
      console.log(client.email)
    }
  return (
    <div className="GoogleLogin">
        <button onClick={()=>{saveCookie({"email":"teste"})}}>TESTE</button>
        <GoogleLogin
        clientId={credentials.google}
        buttonText="Continue with Google"
        onSuccess={onLogin}
        onFailure={console.log}
        cookiePolicy={'single_host_origin'}
        />
        <button onClick={()=>{window.teste()}}>TESTE2</button>
        
    </div>
  );
}

export default Login;
