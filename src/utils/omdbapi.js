const request = require('request');

const omdbapi = (search, imdbID, callback) => {
    const apikey = "21f2e9a8";
    const url = `http://www.omdbapi.com/?s=${search}&i=${imdbID}&apikey=${apikey}`;

    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('No se puede conectar a omdbapi.', undefined);
        } else if (response.body.Error) {
            callback('No se pudo encontrar la pelicula', undefined);
        } else {
            if(search){
                callback(undefined, response.body.Search);
            } else{
                callback(undefined, response.body);
            }
        }
    });
};

module.exports = omdbapi;