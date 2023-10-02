import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import Cookies from "js-cookie";
import GlobalVariables from "./func/GlobalVariables";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

const signout = () => {
  Cookies.remove("access_token");
  localStorage.removeItem("userData");
  window.location.href =
    GlobalVariables.homepage + "/" + GlobalVariables.loginPage;
};

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: GlobalVariables.themeColor }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Button onClick={() => (window.location.href =
              GlobalVariables.homepage + "/" + GlobalVariables.profilePage)}>
              <HomeIcon />
            </Button>
            <Button onClick={() => (window.location.href =
              GlobalVariables.homepage + "/" + GlobalVariables.multiTagPage)}>
              <SearchIcon />
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" onClick={signout} style={{ color: "black" }}>
              <LogoutIcon /> Sign Out
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
