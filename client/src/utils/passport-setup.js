const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
var db = require("../models");
const keys = require("./keys.js");

passport.use(
    new GoogleStrategy({
    // strategy options
    callbackURL: "/auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
    // passport callback function
    })
)