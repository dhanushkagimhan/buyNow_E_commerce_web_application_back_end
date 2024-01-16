import "dotenv/config";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth2/Strategy";

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.clientID,
            clientSecret: process.env.clientSecret,
            callbackURL: "http://localhost:5000/google/callback",
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
        },
    ),
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});