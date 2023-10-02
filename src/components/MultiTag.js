import React, { useState } from "react";
import getUsersWithTags from "./func/queryTags";
import GlobalVariables from "./func/GlobalVariables";

import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  Link,
  CircularProgress,
} from "@mui/material";
import "../App.css";
import NavBar from "./NavBar";
import saveToGoogleSheets from "./func/saveToGoogleSheets";


import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MultiTag = (props) => {
  const [inputValue, setInputValue] = useState(""); 
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false); // Track button disabled state

  const showNotification = (message, type = "success") => {
    toast[type](message, {
      position: "bottom-right", // You can change the position as needed
      autoClose: 3000, // Notification will close automatically after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  
  // Function to handle input value changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to split input value by comma and update the 'values' state
  const handleSplitValues = async () => {
	if(inputValue.length===0) return;
	var busca = inputValue.replaceAll(", ",",").toLowerCase();
    const splitValues = busca
      .split(",")
      .map((value) => value.trim());

    setLoading(true);
    setButtonDisabled(true); // Disable the button
    const resultado = await getUsersWithTags(splitValues);
    setValues(resultado);
    setLoading(false);
    
    // Enable the button after 30 seconds
    setTimeout(() => {
      setButtonDisabled(false);
    }, 3000);

    saveToGoogleSheets({ Busca: busca });

    if (resultado.length === 0) showNotification("busca sem resultados", "warning");
    //alert("busca sem resultados");
    
  };

  return (
    <div>
      <ToastContainer />
      {props.hideNavBar ? null : <NavBar />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Buscador de perfil por tags</h2>
        <TextField
          type="text"
          placeholder="tags separado por vírgulas"
          value={inputValue}
          onChange={handleInputChange}
          sx={{
            width: "100%",
            marginBottom: "10px",
          }}
        />
        <Button
          onClick={handleSplitValues}
          variant="contained"
          disabled={buttonDisabled} // Disable the button based on the state
        >
          {buttonDisabled ? (
            <CircularProgress size={24} /> // Show CircularProgress when button is disabled
          ) : (
            "Buscar"
          )}
        </Button>

        {loading ? (
          <CircularProgress sx={{ mt: 2 }} />
        ) : (
          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            <List>
              {values.map((value, index) => (
                <ListItem key={index}>
                  <Link
                    className="espacamento"
                    target="_blank"
                    rel="noreferrer"
                    href={`${GlobalVariables.homepage}/${GlobalVariables.publicProfilePage.split(":")[0]}${value.public_id}`}
                  >
                    {value.public_id}
                  </Link>
                  {value.name}

                  {value.publicContact ? (
                    <Link
                      className="espacamento"
                      href={`${GlobalVariables.fixURL(value.publicContact)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {value.publicContact}
                    </Link>
                  ) : null}

                  {value.portfolio ? (
                    <Link
                      className="espacamento"
                      href={`${GlobalVariables.fixURL(value.portfolio)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      portfolio
                    </Link>
                  ) : null}

                  {value.curriculo ? (
                    <Link
                      className="espacamento"
                      href={`${GlobalVariables.fixURL(value.curriculo)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      currículo
                    </Link>
                  ) : null}
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default MultiTag;
