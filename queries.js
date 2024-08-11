const pool = require("./db/connection")

class DB {
    constructor() {

    }

    async query(sqlStatement, args = []) {
        const client = await pool.connect()
        try {
            const result = await client.query(sqlStatement, args)
            return result
        }
        finally {
            client.release()
        }
    }
    getAllEmployees() {
        //   select statement
        // returns back the result
        this.query("SELECT * FROM EMPLOYEE;")
    }

    addEmployee(first_name, last_name, role_id, manager_id) {
        this.query("INSERT INTO employee ( first_name, last_name, role_id, manager_id VALUES ($1,$2,$3,$4);", [first_name, last_name, role_id, manager_id])
    }

    addDepartment(department_name) {
        this.query("INSERT INTO department (department_name) VALUES ($1);", department_name)
    }

    getallDepartments() {
        this.query("SELECT * FROM DEPARTMENT;")
    }

    addRole(title, salary, department_id) {
        this.query("INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3);", [title, salary, department_id])
    }

    getallRoles() {
        this.query("SELECT * FROM ROLES;")
    }



}
module.exports =new DB()