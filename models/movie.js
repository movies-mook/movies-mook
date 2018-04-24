const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema ({
     title: String,
     vote_average: Number,
     popularity: Number,
     poster_path: String,
     overview: String,
     genre_ids: Array
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
