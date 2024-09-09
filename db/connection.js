const { Pool } = require('pg');

const pool = new Pool(
    {
      user: 'postgres',
      password: 'CodingBootcamp5!',
      host: 'localhost',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  )
  
  module.exports = pool