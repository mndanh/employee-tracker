const pool = require("./db/connection")

class DB {
    constructor() {

    }

    async query(sqlStatement, args = []) {
        const client = await pool.connect()
        try {
            const result = await client.query(sqlStatement, args)
            return result.rows
        }
        finally {
            client.release()
        }
    }

    getAllEmployees() {
        return(this.query("SELECT * FROM EMPLOYEE;"))
    }

    addEmployee(first_name, last_name, role_id, manager_id) {
        return(this.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1,$2,$3,$4);", [first_name, last_name, role_id, manager_id]))
    }

    addDepartment(department_name_param) {
        return(this.query("INSERT INTO department (department_name) VALUES ($1);", [department_name_param]))
    }

    getAllDepartments() {
        return(this.query("SELECT * FROM DEPARTMENT;"))
    }

    addRole(title, salary, department_id) {
        return(this.query("INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3);", [title, salary, department_id]))
    }

    getAllRoles() {
        return(this.query("SELECT * FROM ROLES;"))
    }

    getAllManagers() {
        return(this.query("SELECT * FROM EMPLOYEE;"))
    }

    updateEmployeeRole(employee_id, role_id){
        return(this.query('UPDATE EMPLOYEE SET role_id = $1 WHERE id = $2' , [role_id, employee_id]))
    }


}
module.exports =new DB()