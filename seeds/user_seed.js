
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name: 'Vu.Duong', email:'VD@gmail.com', password: 'VUDU'},
        {id: 2, name: 'Dung.Tang', email:'DT@gmail.com', password: 'DUTA'},
        {id: 3, name: 'Hao.Nguyen', email:'HN@gmail.com', password: 'HANG'}
      ]);
    });
};
