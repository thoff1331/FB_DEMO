require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const authController = require("./controllers/authController");
const massive = require("massive");
const session = require("express-session");

app.use(express.json());
const { CONNECTION_STRING, SESSION_SECRET } = process.env;
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connected");
  })
  .catch(err => {
    console.log("Not connected");
  });
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);
// endPoints
app.post("/auth/signup", authController.signup);
app.post("/auth/login", authController.login);
app.get("/auth/cookie", authController.getUser);
app.delete("/auth/logout", authController.logout);

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
