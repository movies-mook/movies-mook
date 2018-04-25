require("dotenv").config();
const express = require("express");
const router = express.Router();
const mdb = require("moviedb")(process.env.API_KEY);

// Búsquedas por defecto
router.get("/rated", (req, res, next) => {
  mdb.miscTopRatedMovies((err, re) => {
    let data = {
      user: req.user,
      movies: re.results
    };
    res.render("movies/index", { data });
  });
});
router.get("/popular", (req, res) => {
  mdb.miscPopularMovies((err, re) => {
    let data = {
      user: req.user,
      movies: re.results
    };
    res.render("movies/index", { data });
  });
});
router.get("/playing", (req, res) => {
  mdb.miscNowPlayingMovies((err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});

// Por Género
router.get("/horror", (req, res) => {
  mdb.genreMovies({ id: 27 }, (err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});
router.get("/thriller", (req, res) => {
  mdb.genreMovies({ id: 53 }, (err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});
router.get("/drama", (req, res) => {
  mdb.genreMovies({ id: 18 }, (err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});
router.get("/comedy", (req, res) => {
  mdb.genreMovies({ id: 35 }, (err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});
router.get("/animation", (req, res) => {
  mdb.genreMovies({ id: 16 }, (err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});
router.get("/adventures", (req, res) => {
  mdb.genreMovies({ id: 12 }, (err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});
router.get("/action", (req, res) => {
  mdb.genreMovies({ id: 28 }, (err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});
router.get("/scifi", (req, res) => {
  mdb.genreMovies({ id: 878 }, (err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});

// Por título
router.post("/title", (req, res) => {
  mdb.searchMovie({ query: req.body.search }, (err, re) => {
    let data = { user: req.user, movies: re.results };
    res.render("movies/index", { data });
  });
});

router.get('/details/:id', (req, res, next) => {
  mdb.movieInfo({id: req.params.id}, (err, movie) => {
    console.log(movie)
    res.render('movies/details', {movie});
  });
  
module.exports = router;
