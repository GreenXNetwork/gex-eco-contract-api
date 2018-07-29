# gex-eco-contract-api
DEMO: Contract API server for GEX platforms   
Install:   
1/ `npm install`   
2/ `npm install knex -g`   
3/ `knex init`  
  This will create `knexfile.js`, set up your database settings, example  
  `development: {  
    client: 'mysql',   
    connection: {   
      database: 'test',   
      user:     'root',   
      password: ''    
    }   
  }`   
4/ create a schema in MySQL called 'test'
5/ `knex migrate:latest`   
  This creates the `user` table   
6/ `knex seed:run`   
  This populates data into `user` table   
7/ To run the project: `nodemon`   
Done!~ happy exploring
