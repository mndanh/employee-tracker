const inquirer = require('inquirer');
// const { getAllEmployees, addEmployee, getAllDepartments } = require("./queries");
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
        name: "menuOptions",
        choices: menuOptions
    }
    ])
    if( result.menuOptions === "View all exmployees" ){
        displayEmployees()
    }
    if( result.menuOptions === "View all departments" ){
        displayDepartments()
    }
    if( result.menuOptions === "View all role" ){
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
    console.tanle(data)
    start()
}

async function addEmployee(){
    const listOfDepartments = db.getAllDepartments().map( department => ({
        name: department_name,
        value: department.id
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
        type: "input",
        name: "role",
        message: "what is the employees role?"
    },
    {
        type: "list",
        name: "department",
        choices: listOfDepartments
    }
    ])
    // addEmployee(result)
    start()
}

async function addRole(){
    const listOfDepartments = db.getAllDepartments().map( department => ({
        name: department_name,
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
    db.addRole(result.title,result.salary,result.department)
    start()
}