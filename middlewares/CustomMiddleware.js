var debug = require('debug')('my-express-app:custom middleware');

module.exports.customFilter = (req, res, next) => {
    debug('using custom filter ... ');
    //TO STUFF

    //call next() to move on the next controller/middleware inside sub-router users.js
    //in this case, it is userController.index
    //if we don't call this function, the request will hang
    next();
}