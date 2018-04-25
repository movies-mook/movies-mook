require('dotenv').config();
const express = require('express');
const router  = express.Router();
const mdb = require('moviedb')(process.env.API_KEY)


router.get('/rated', (req, res, next) => {
    // mdb.genreMovies({id: 27},(err, res) => {
    //   console.log(res);
    // });
    mdb.miscTopRatedMovies((err,re) => {
      let data = {
        user: req.user,movies: re.results}
      res.render('movies/index', {data});})
  });
  router.get("/popular", (req, res) => {
    mdb.miscPopularMovies((err, re) => {
      let data = {user: req.user,movies: re.results
      }
      res.render('movies/index', {data});})
  })
  router.get("/playing", (req, res) => {
    mdb.miscNowPlayingMovies((err, re) => {
      let data = {user: req.user,movies: re.results}
      res.render('movies/index', {data});})
  })
  router.get("/horror", (req, res) => {
    mdb.genreMovies({id: 27},(err, re) => {
      let data = {user: req.user,movies: re.results}
      res.render('movies/index', {data});})
  })

  
 
module.exports = router;
