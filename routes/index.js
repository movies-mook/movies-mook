require('dotenv').config();
const express = require('express');
const router  = express.Router();
const mdb = require('moviedb')('904b49c7f16b003d4169b1b312367c9b');

router.get('/', (req, res, next) => {
  // mdb.genreMovies({id: 27},(err, res) => {
  //   console.log(res);
  // });
  res.render('index', {user: req.user});
});

module.exports = router;
