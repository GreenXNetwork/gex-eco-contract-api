var bookshelf = require('../services/db');

module.exports = bookshelf.Model.extend({
    tableName: 'user'
})