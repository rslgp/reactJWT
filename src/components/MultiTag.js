import React, { useState } from "react";
import getUsersWithTags from './func/queryTags';
import GlobalVariables from "./func/GlobalVariables";

import {Box, TextField, Button, List, ListItem, Link} from "@mui/material";
import "../App.css";
import NavBar from "./NavBar";

const MultiTag = (props) => {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [values, setValues] = useState([]); // State to store split values

  // Function to handle input value changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to split input value by comma and update the 'values' state
  const handleSplitValues = async () => {
    const splitValues = inputValue.split(",").map((value) => value.trim());
    setValues(await getUsersWithTags(splitValues));
  };

return (
  <div>
    {props.hideNavBar ? null : <NavBar/>}
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
        placeholder="tags separado por vírgulas (sem espaço)"
        value={inputValue}
        onChange={handleInputChange}
        sx={{
          width: "100%",
          marginBottom: "10px",
        }}
      />
      <Button onClick={handleSplitValues} variant="contained">Buscar</Button>

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
              
              {value.publicContact ? 
              <Link className="espacamento" href={`${GlobalVariables.fixURL(value.publicContact)}`} target="_blank" rel="noreferrer">
                {value.publicContact}
              </Link> : null}

              {value.portfolio ? 
              <Link className="espacamento" href={`${GlobalVariables.fixURL(value.portfolio)}`} target="_blank" rel="noreferrer">
                portfolio
              </Link> : null}

              {value.curriculo ? 
              <Link className="espacamento" href={`${GlobalVariables.fixURL(value.curriculo)}`} target="_blank" rel="noreferrer">
                currículo
              </Link> : null}

            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  </div>
);
};

export default MultiTag;
