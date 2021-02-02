import React from "react";
import { Box, Button, Container } from "@material-ui/core";

import useStyles from "../AppCss/styles";

const NavBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box className={classes.textHeader}>MIS PELICULAS FAVORITAS</Box>
      <Box>
        <Button href="/search" className={classes.rootButton}>
          Buscar
        </Button>
        <Button href="/listado" className={classes.rootButton}>
          Listado
        </Button>
      </Box>
    </Container>
  );
};

export default NavBar;
