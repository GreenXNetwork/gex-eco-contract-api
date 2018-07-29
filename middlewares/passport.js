var debug = require('debug')('my-express-app:passport');

var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

// Configure the Bearer strategy for use by Passport.
//
// The Bearer strategy requires a `verify` function which receives the
// credentials (`token`) contained in the request.  The function must invoke
// `cb` with a user object, which will be set at `req.user` in route handlers
// after authentication.
passport.use(new Strategy(
    function(token, cb) {
      findByToken(token, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        return cb(null, user);
      });
    }
));

//this is just an example, we will use a persistent storage for this later on
var clients = [
    { id: 1, username: 'alphaX', token: '123456789', displayName: 'AlphaX' }
];

//find the matching token from the 'persistent storage', return the user if found
findByToken = function(token, cb) {
    for (var i = 0; i < clients.length; i++) {
      if (clients[i].token === token) {
        debug('token match! ' + JSON.stringify(clients[i]));
        return cb(null, clients[i]);
      }
    }
    debug('No tokens matched!');
    return cb({message: 'No user found!', status: 401});
}

//expose the passport instance
module.exports = passport;