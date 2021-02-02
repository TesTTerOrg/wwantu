import axios from "axios";
import swal from "sweetalert2";
const apiIMDB = "42146d36"; //Esto deberia ir en el archivo .env

export function searchMovie(busqueda) {
  return function (dispatch) {
    fetch("http://www.omdbapi.com/?t=" + busqueda + "&apikey=" + apiIMDB)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          dispatch({ type: "SEARCH_MOVIE", payload: data });
        } else {
          swal.fire({
            title: "Error",
            text: "No hay una película con ese título",
            icon: "warning",
          });
        }
      });
  };
}

export function addFavMovie(pelicula) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/fav/new", { pelicula })
      .then((res) => {
        if (res.status === 200) {
          swal.fire({
            title: "¡Su película ha sido agregada a Favoritos!",
            icon: "success",
          });
          dispatch({ type: "ADD_MOVIE_FAV", payload: res.data });
        }
      })
      .catch(() => {
        swal.fire({
          title: "¡No se pueden agregar películas repetidas. Sería un caos!",
          icon: "error",
        });
      });
  };
}

export function delFavMovie(id) {
  return function (dispatch) {
    axios
      .delete("http://localhost:3001/fav/del/" + id)
      .then((res) => {
        if (res.status === 200) {
          swal.fire({
            title: "¡Su película ha sido eliminada de Favoritos!",
            icon: "success",
          });

          dispatch({ type: "DEL_MOVIE_FAV", payload: id });
        }
      })
      .catch(() => {
        swal.fire({
          title: "No hemos podido eliminar esta película",
          icon: "error",
        });
      });
  };
}
export function getFavMovies() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/fav/all")
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_MOVIE_FAV", payload: res.data });
        }
        if (res.status === 400) {
          console.log(res);
          dispatch({ type: "GET_MOVIE_FAV", payload: res.status });
        }
      })
      .catch(() => {
        swal.fire({
          title:
            "Esta consulta no está disponible por el momento. Intente más tarde",
          icon: "error",
        });
      });
  };
}
