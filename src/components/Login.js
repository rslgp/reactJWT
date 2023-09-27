import GoogleLogin from  "@stack-pulse/next-google-login"

import saveToGoogleSheets from './func/saveToGoogleSheets'

import JWT_AUTH from "./func/JWT_AUTH"
import GlobalVariables from "./func/GlobalVariables";

const credentials = {
  "google":process.env.REACT_APP_GOOGLE_CLIENTID,
  "jwt":process.env.REACT_APP_JWT
}

function Login() {

    function onLogin(googleResponse){
        console.log(googleResponse);
        //var inseriu = saveToGoogleSheets(googleResponse.profileObj);
        //if(inseriu) alert("Ponto registrado");
        //else alert("Falha no ponto");

        JWT_AUTH.saveSessionData(googleResponse.profileObj);
        GlobalVariables.profileData = googleResponse.profileObj;
        
        window.location.href=GlobalVariables.homepage +"/"+ GlobalVariables.profilePage;
    }
    
    const getSession = ()=>{
      var client = JWT_AUTH.getSessionData();
      if(client) window.location.href=GlobalVariables.homepage +"/"+ GlobalVariables.profilePage;
    }
  return (
    <div className="GoogleLogin">
        <button onClick={()=>{JWT_AUTH.saveSessionData({"email":"teste"})}}>TESTE</button>
        <GoogleLogin
        clientId={credentials.google}
        buttonText="Continue with Google"
        onSuccess={onLogin}
        onFailure={console.log}
        cookiePolicy={'single_host_origin'}
        />
        <button onClick={()=>{getSession()}}>TESTE2</button>
        
    </div>
  );
}

export default Login;
