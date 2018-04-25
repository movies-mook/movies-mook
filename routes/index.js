require('dotenv').config();
const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  // mdb.genreMovies({id: 27},(err, res) => {
  //   console.log(res);
  // });
  res.render('index');
});

module.exports = router;
