import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const MovieList = ({ movieList = [], favourites, favouritesList = [] }) => {
  const favouriteCheck = (row) => {
    let component = (
      <button
        className="btn btn-primary"
        onClick={() => {
          favourites(row);
        }}
      >
        A favoritos
      </button>
    );
    if (favouritesList && favouritesList.length) {
      favouritesList.forEach((favourite) => {
        if (favourite.imdbID === row.imdbID) {
          component = <p className="alert alert-info">Ya en Favoritos</p>;
        }
      });
    }

    return component;
  };

  return (
    <>
      {movieList.map((data, key) => {
        if (data) {
          return (
            <div key={key} className="mt-4 cardContainer">
              <Card className="cardStyle">
                <CardMedia
                  className="cardImageHeight"
                  component="img"
                  alt="Poster Pelicula"
                  height="400"
                  image={data.Poster}
                  title="Poster Pelicula"
                />
                <CardContent>
                  <h5>{data.Title}</h5>
                  {favouriteCheck(data)}
                </CardContent>
              </Card>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default MovieList;
