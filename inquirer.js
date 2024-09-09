const inquirer = require('inquirer');
const db = require("./queries");

const menuOptions = [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update an employee role"
]

async function start(){
    const result = await inquirer.prompt([
    {
        type: "list",
        message: "What option would you like to choose?",
        name: "menuOptions",
        choices: menuOptions
    }
    ])
    if( result.menuOptions === "View all employees" ){
        displayEmployees()
    }
    if( result.menuOptions === "View all departments" ){
        displayDepartments()
    }
    if( result.menuOptions === "View all roles" ){
        displayRoles()
    }
    if( result.menuOptions === "Add a department" ){
        addDepartment()
    }
    if( result.menuOptions === "Add a role" ){
        addRole()
    }
    if( result.menuOptions === "Add an employee" ){
        addEmployee()
    }
    if( result.menuOptions === "Update an employee role" ){
        updateEmployeeRole()
    }
}

async function displayEmployees(){
    const data = await db.getAllEmployees()
    console.table(data)
    start()
}

async function displayDepartments(){
    const data = await db.getAllDepartments()
    console.table(data)
    start()
}

async function displayRoles(){
    const data = await db.getAllRoles()
    console.table(data)
    start()
}

async function addDepartment(){
    const {department_name} = await inquirer.prompt([
    {
        type: "input",
        name: "department_name",
        message: "what is the name of the department you would like to add?"
    },
    ])
    try {
        await db.addDepartment(department_name)
    }
    catch (err) {
        console.log(err)
    }
    console.log("successfully added department")
        start()
}

async function addEmployee(){
    const roles = await db.getAllRoles();
    const listOfRoles = roles.map( roles => ({
        name: roles.title,
        value: roles.id
    }))
    
    const manager = await db.getAllManagers();
    const listOfManagers = manager.map( employee => ({
        name: employee.first,
        value: employee.id
    }))


    const result = await inquirer.prompt([
    {
        type: "input",
        name: "first_name",
        message: "what is the employees first name?"
    },
    {
        type: "input",
        name: "last_name",
        message: "what is the employees last name?"
    },
    {
        type: "list",
        message: "What is the employees role?",
        name: "role",
        choices: listOfRoles
    },
    {
        type: "list",
        message: "Choose the employees manager by id:",
        name: "manager",
        choices: listOfManagers
    }
    ])
    const queryResults = await db.addEmployee(result.first_name,result.last_name,result.role,result.manager)
    console.log(queryResults)
    start()
}

async function addRole(){
    const departments = await db.getAllDepartments(); 
    const listOfDepartments = departments.map( department => ({
        name: department.name,
        value: department.id
    }))

    const result = await inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "what is the title of the role?"
    },
    {
        type: "input",
        name: "salary",
        message: "what is the salary of the role?"
    },
    {
        type: "list",
        name: "department",
        choices: listOfDepartments
    }
    ])
    try {
    await db.addRole(result.title,result.salary,result.department)
    }
    catch (err) {
        console.log(err)
    }
    console.log("successfully added role")
    start()

}

async function updateEmployeeRole() {
    const employees = await db.getAllEmployees();
    console.log(employees)
    const listOfEmployees = employees.map( employees => ({
        name: `${employees.first_name} ${employees.last_name}`,
        value: employees.id
    }))

    const roles = await db.getAllRoles();
    const listOfRoles = roles.map( roles => ({
        name: roles.title,
        value: roles.id
    }))

    const result = await inquirer.prompt([
        {
            type: "list",
            name: "employees",
            message: "Select an employee to change their role:",
            choices: listOfEmployees
        },
        {
            type: "list",
            message: "What is the employees new role?",
            name: "role",
            choices: listOfRoles
        },
    ])
    console.log(result)
    const queryResults = await db.updateEmployeeRole(result.employees,result.role)
    console.log(queryResults)
    start()
}

start()
