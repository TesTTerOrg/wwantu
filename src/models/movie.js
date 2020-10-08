const mongoose = require("mongoose");

const Movie = mongoose.model("Movie", {
    imdbID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
});

module.exports = Movie;