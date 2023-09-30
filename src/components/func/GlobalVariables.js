const GlobalVariables = {}
GlobalVariables.homepage="http://rslgp.github.io/reactJWT/#";
GlobalVariables.loginPage="auth/login";
GlobalVariables.profilePage="page";
GlobalVariables.publicProfilePage="profile/:profile_id";
GlobalVariables.tagPage="tags/:tag";
GlobalVariables.allTagPage="tags";
GlobalVariables.multiTagPage="querytags";

GlobalVariables.fixURL = (malFormedURL) => {
    if(!malFormedURL) return;

    if(malFormedURL.includes("http")){
        return malFormedURL;
    }
    if(malFormedURL.includes("9")){
        return "https://wa.me/55"+malFormedURL;
    }
    return "https://"+malFormedURL;
}

GlobalVariables.themeColor = "#f0f2f5";

export default GlobalVariables;