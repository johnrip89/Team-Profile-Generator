const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generateHTML = require('./utils/generate-html');

function startGenerator() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                    return false;
                }
            }
        }
    ])
}

function addEmployee(teamData) {
    if (!teamData.newEmployee) {
        teamData.newEmployee = [];
    }
    console.log(`
  ====================
  Add another Employee
  ====================
        `);
    return inquirer.prompt([

        {
            type: 'list',
            name: 'job',
            message: "What is the new employee's job title?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the new employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the new employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the new employee's ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the new employee's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the new employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the new employee's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is/was the Intern attending?",
            when: ({ job }) => {
                if (job === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github username?",
            when: ({ job }) => {
                if (job === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'createNewEmployee',
            message: "Would you like to add another employee?",
            default: true
        }
    ])
        .then(newEmployeeData => {
            teamData.newEmployee.push(newEmployeeData);
            if (newEmployeeData.createNewEmployee) {
                return addEmployee(teamData);
            } else {
                return teamData;
            }

        })
};


startGenerator()
    .then(addEmployee)
    .then(teamData => {
        return generateHTML(teamData);
    });
