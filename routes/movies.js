require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require('../models/User');
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

// Details
router.get('/details/:id', (req, res, next) => {
  mdb.movieInfo({id: req.params.id}, (err, movie) => {
    res.render('movies/details', {movie});
  });
});

router.get('/addFav/:id', (req, res, next) => {
  User.findOneAndUpdate({_id: req.user}, {$push: {favorites: req.params.id}}, {new:true})
  .then((us) => {
    res.redirect('back');
  })
})

router.get('/addWish/:id', (req, res, next) => {
  User.findOneAndUpdate({_id: req.user}, {$push: {watchlist: req.params.id}}, {new:true})
  .then((usx) => {
    res.redirect('back');
  })
})

// router.get('account/:id/favorite_movies', (req, res, next) => {
//   mdb.accountFavoriteMovies({}, (err, movie) => {
//     let data = { user: req.user, movies: re.results };
//     res.render('favlist/favorites', {data});
//   });
// });

module.exports = router;
