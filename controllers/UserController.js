var debug = require('debug')('my-express-app:controller');
var user = require('../models/User');

exports.index = async (req, res) => {
    debug('controller is sending response');
    //getAll() is an async function (returns promise), so use `await` to
    //make this function `wait` for result before returning 
    let list = await user.getAll();
    //call functions from Model
    res.send('list of users: ' + list);
}