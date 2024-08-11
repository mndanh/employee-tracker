\c postgres;

DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  title: VARCHAR(30) UNIQUE NOT NULL,
  salary: DECIMAL NOT NULL,
  department_id: INTEGER NOT NULL,
  FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id: SERIAL PRIMARY KEY,
    first_name: VARCHAR(30) NOT NULL,
    last_name: VARCHAR(30) NOT NULL,
    role_id: INTEGER NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
    manager_id: INTEGER DEFAULT 0,
    FOREIGN KEY (manager_id)
    REFERENCES managers(id)
    ON DELETE SET NULL

)