/**
 * Use Bookshelf.js to construct Model for database
 */
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'test'
    }
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;