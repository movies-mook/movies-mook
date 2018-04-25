const express = require("express");
const passport = require("passport");
const router = express.Router();
// User model
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const ensureLogin = require("connect-ensure-login");
const multer  = require('multer');
const User = require("../models/User");
const uploadCloud = require('../config/cloudinary.js');

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup",uploadCloud.single('photo'), (req, res, next) => {
  const namereal = req.body.namereal;
  const username = req.body.username;
  const password = req.body.password;
  const pais = req.body.pais;
  const img = req.file.url;
  console.log(req.file)


  if (username === "" || password === "") {
    res.render("auth/signup", {
      message: "Indicate username and password"
    });
    reject();
  }

  User.findOne({ username })
    .then(user => {
      if (user !== null) throw new Error("The username already exists");
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = new User({
        namereal,
        username,
        pais,
        img: req.file.url,
        password: hashPass
      });
      return newUser.save();
    })
    .then(newUser => {
      res.redirect("/auth/login");
    })
    .catch(e => {
      res.render("auth/signup", { message: e.message });
    });
});

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});



router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get('/perfil/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then ((user) => {
    res.render('auth/perfil', { user });
  })
  .catch((err) => {
    console.log(err);
    next(err);
  }); 
});

    router.get('/favorites/:id', (req, res, next) => {
      User.findById(req.params.id)
      .then ((user) => {
      res.render('favlist/favorites');
    })
    .catch((err) => {
      console.log(err);
      next(err);
    }); 
});
    router.get('/watchlist/:id', (req, res, next) => {
      User.findById(req.params.id)
      .then ((user) => {
      res.render('favlist/watchlist');
    })
    .catch((err) => {
      console.log(err);
      next(err);
    }); 
});
    

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: false,
    failureMessage: "Invalid Username or Password",
    passReqToCallback: false
  })
);

module.exports = router;
