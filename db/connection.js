// const express = require('express');
const { Pool } = require('pg');
// const inquirer = require('inquirer');

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const pool = new Pool(
    {
      user: 'postgres',
      password: 'CodingBootcamp5!',
      host: 'localhost',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  )
  
  // pool.connect()
  module.exports = pool