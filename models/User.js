var bookshelf = require('../services/db');

/**
 * The User model
 */
class User {
    constructor(){
        this.User = bookshelf.Model.extend({
            tableName: 'user'
        });
    }

    //public function that is able to be called from other modules
    async getAll() {
        //fetchAll is a promise function, use 'await' to 'wait' for this function to finish
        let users = await this.User.fetchAll({});
        //console.log(JSON.stringify(users.serialize()));
        return JSON.stringify(users.serialize());
    }
}

//exports an instance (Nodejs will only use 1 instance of User)
module.exports = new User();