var passport = require('passport');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var LocalStrategy = require('passport-local').Strategy;
var userProc = require('../procedures/users.proc');
var pool = require('./db').pool;
var utils = require('../utils');

function configurePassport(app) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function(email, password, done) {
        userProc.readByEmail(email).then(function(user) {
            console.log(user);
            if (!user) {
                return done(null, false, { message: 'Incorrect Login Protocol' });
            }
            utils.checkPassword(password, user.password)
            .then(function(passwordMatches) {
                console.log('checking password');
                console.log(passwordMatches);
                if (passwordMatches) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Incorrect Login Protocol' });
                }
            }, function(err) {
                return done(err);
            });
            // if (user.password !== password) {
            //     return done(null, false, { message: 'Incorrect Login Protocol'});
            // }
            // return done(null, user);
        }, function(err) {
            return done(err);
        });
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        userProc.read(id).then(function(user) {
            done(null, user);
        }, function(err) {
            done(err);
        });
    });

    var sessionStore = new MySQLStore({
        createDatabaseTable: true
    }, pool);

    app.use(session({
        secret: 'rkNxwKboT9AC',
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = configurePassport;