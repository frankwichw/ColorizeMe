const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
var db = require("../models");

passport.use(
    new GoogleStrategy({
    // strategy options

    }),
    (accessToken, refreshToken, profile, done) => {
    // passport callback function
    }
)