const inquirer = {}
const { getAllEmployees, addEmployee, getAllDepartments } = require("./queries");

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

    if( result.menuOptions === "View all departments" ){
        displayEmployees()
    }
}

async function displayEmployees(){
    const data = await getAllEmployees()
    start()
}

async function addEmployee(){
    const listOfDepartments = getAllDepartments().map( department => {
        name: department_name,
        value: department_id
    }),
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
    addEmployee(result)
    start()
}