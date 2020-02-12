const express = require("express");

const { config } = require("./config");

const app = express();

// body parser
app.use(express.json());

// Login
app.post("/auth/sing-in", async function(req, res, next) {});

app.post("/auth/sing-up", async function(req, res, next) {});

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

