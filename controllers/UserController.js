var debug = require('debug')('my-express-app:controller');
var User = require('../models/User');

exports.index = (req, res) => {
    debug('controller is sending response');
    //fetch all users in user table (Bookshelf.Model.fetchAll() returns Bookshelf.Collection)
    User.fetchAll({}).then((users) => {
        res.send('list of users: ' + JSON.stringify(users.serialize()));
    })
}