import React from "react";
import { Paper, Typography } from "@mui/material";

const Tutorial = () => {
  const paperStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
  };

  const headingStyle = {
    fontWeight: "bold",
    color:"red"
  };

  return (
    <Paper sx={paperStyle}>
      <Typography variant="h6" sx={headingStyle}>
        Adicione tags (requerido) para ser encontrado
      </Typography>
      <Typography>
        Perfil sem tag não é encontrado pela busca
      </Typography>
      <Typography>
        Tags podem ser, por exemplo:
      </Typography>
      <ul>
        <Typography component="li">
          Área de atuação: backend, frontend, gerente de projetos, design, ux, cientista de dados, PO, analista de requisitos, jogos, testes, mobile...
        </Typography>
        <Typography component="li">
          Programação: python, java, javascript, typescript, sql, html...
        </Typography>
        <Typography component="li">
          Frameworks, libraries, ferramentas: figma, react, nodejs, angular, nextjs, express, django, spring boot, flask...
        </Typography>
        <Typography component="li">
          Sigla da universidade que estuda, disponibilidade remoto...
        </Typography>
      </ul>
      <Typography variant="h6" sx={{fontWeight:"bold"}}>
        Qualquer termo relevante para a busca te achar!
      </Typography>
    </Paper>
  );
};

export default Tutorial;
