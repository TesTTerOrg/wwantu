import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Button,
  Box,
} from "@material-ui/core";
import {
  searchMovie,
  addFavMovie,
  delFavMovie,
  getFavMovies,
} from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import useStyles from "../AppCss/styles";

function General({
  pelicula,
  searchMovie,
  addFavMovie,
  delFavMovie,
  getFavMovies,
  favoritos,
}) {
  const classes = useStyles();
  const [busqueda, setBusqueda] = useState("");

  const teclaEntrada = (e) => {
    if (e.which === 13) {
      searchMovie(busqueda);
      setBusqueda("");
    }
  };
  useEffect(() => {
    getFavMovies();
  }, []);
  const favSubmitAdd = (e) => {
    addFavMovie(pelicula);
  };
  const favSubmitDel = (e) => {
    delFavMovie(pelicula.imdbID);
  };

  const movieData = () => {
    return (
      pelicula.Title && (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {pelicula.Type}
              </Avatar>
            }
            title={pelicula.Title}
            subheader={pelicula.Released}
          />
          <Grid container spacing={1} className={classes.GridCard}>
            <Grid item xs={7}>
              <CardMedia
                className={classes.media}
                image={pelicula.Poster}
                title={pelicula.Title}
              />
            </Grid>
            <Grid item xs={4}>
              <CardContent>
                <Paper className={classes.paper}>
                  <h4>Actors</h4>
                  {pelicula.Actors}
                  <h4> Awards </h4>
                  {pelicula.Awards}
                  <h4>Plot </h4>
                  {pelicula.Plot}
                  <h4>Genre</h4> {pelicula.Genre}
                </Paper>
                <Box className={classes.paper}>
                  <Button
                    onClick={(e) => favSubmitAdd(e)}
                    className={classes.rootButton}
                  >
                    Agregar a Favoritos
                  </Button>
                  <Button
                    onClick={(e) => favSubmitDel(e)}
                    className={classes.rootButton}
                  >
                    Eliminar de Favoritos
                  </Button>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      )
    );
  };
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Paper className={classes.root}>
            <NavBar />
            <TextField
              id="filled-basic"
              className={classes.textField}
              value={busqueda}
              size="small"
              label="Buscador"
              variant="filled"
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyPress={(e) => teclaEntrada(e)}
            />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.root}>{movieData()}</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    pelicula: state.pelicula,
    favoritos: state.favoritos,
  };
}

export default connect(mapStateToProps, {
  searchMovie,
  addFavMovie,
  delFavMovie,
  getFavMovies,
})(General);
