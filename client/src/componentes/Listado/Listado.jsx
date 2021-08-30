import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Container,
  Grid,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { getFavMovies, delFavMovie } from "../../redux/actions";
import useStyles from "../AppCss/styles";

function Listado({ favoritos, getFavMovies, delFavMovie }) {
  const classes = useStyles();

  useEffect(() => {
    getFavMovies();
  }, []);
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="Listado Favoritas"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id Película</TableCell>
                  <TableCell align="center">Título</TableCell>
                  <TableCell align="center">Actores</TableCell>
                  <TableCell align="center">Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favoritos &&
                  favoritos.reverse().map((e) => (
                    <TableRow key={e.id}>
                      <TableCell align="center">{e.idfavmovie}</TableCell>
                      <TableCell align="center">{e.favmovie.Title}</TableCell>
                      <TableCell align="center">{e.favmovie.Actors}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={(element) => {
                            delFavMovie(e.idfavmovie);
                          }}
                        >
                          <DeleteSharpIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    favoritos: state.favoritos,
  };
}

export default connect(mapStateToProps, { getFavMovies, delFavMovie })(Listado);
