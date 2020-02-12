const express = require("express");
const passport = require("passport");
const boom = require("@hapi/boom");
const cookieParser = require("cookie-parser");
const axios = require("axios");

const { config } = require("./config");

const app = express();

// body parser
app.use(express.json());

// cookie parser
app.use(cookieParser());

// Basic strategy
require("./utils/auth/strategies/basic");

// Login
app.post("/auth/sing-in", async function(req, res, next) {
  passport.authenticate("basic", function(error, data) {
    try {
      if (error || !data) next(boom.unauthorized());

      req.login(data, { session: false }, async function(error) {
        const { token, ...user } = data;
        if (error) next(error);

        res.cookie("token", token, {
          httpOnly: !config.dev,
          secure: !config.dev
        });

        res.status(200).json(user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post("/auth/sing-up", async function(req, res, next) {
  const { body: user } = req;

  try {
    await axios({
      url: `${config.apiUrl}/api/auth/sing-up`,
      method: "POST",
      data: user
    });

    res.status(201).json({ message: "user created" });
  } catch (error) {
    next(error);
  }
});

// Movies
app.get("/movies", async function(req, res, next) {});
app.get("/movies/:movieId", async function(req, res, next) {});
app.post("/movies", async function(req, res, next) {});
app.put("/movies/:movieId", async function(req, res, next) {});
app.delete("/movies/:movieId", async function(req, res, next) {});

// User Movies
app.get("/user-movies", async function(req, res, next) {});
app.post("/user-movies", async function(req, res, next) {});
app.delete("/user-movies/:userMovieId", async function(req, res, next) {});
