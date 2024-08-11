const express = require('express');
const { Pool } = require('pg');
const inquirer = require('inquirer');

const pool = new Pool(
    {
      user: 'postgres',
      password: 'CodingBootcamp5!',
      host: 'localhost',
      database: 'employees_db'
    });