const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generateHTML = require('./utils/generate-html');
const { writeFile } = require('fs');

function startGenerator() {    
    console.log('Welcome to the Team Profile Generator');
    const teamData = [];
    return addEmployee(teamData);   
};

function addEmployee(teamData) {
    
    console.log(`
  ====================
  Add an Employee
  ====================
        `);
    return inquirer.prompt([

        {
            type: 'list',
            name: 'job',
            message: "What is the new employee's job title?",
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: jobInput => {
                if (jobInput) {
                    return true;
                } else {
                    console.log("Please select a job title!");
                    return false;
                }
            }
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
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            when: ({ job }) => {
                if (job === 'Manager') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
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
            },
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the school that your intern is/was attending!");
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
            },
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the new employee's GitHub username!");
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
            let newEmployee = '';

            const name = newEmployeeData.name;
            const id = newEmployeeData.id;
            const email = newEmployeeData.email;
            const job = newEmployeeData.job;

            if (job === 'Manager') {                   
                const officeNumber = newEmployeeData.officeNumber;
                newEmployee = new Manager(name, id, email, job, officeNumber);
            } else if (job === 'Intern') {
                const school = newEmployeeData.school;
                newEmployee = new Intern(name, id, email, job, school);
            } else {
                const github = newEmployeeData.github;
                newEmployee = new Engineer(name, id, email, job, github);
            }

            teamData.push(newEmployee);            

            if (newEmployeeData.createNewEmployee) {                
                return addEmployee(teamData)
            } else {               
                return teamData;
            }
        })    
};

function writeHtml(html) {
    fs.writeFile('./dist/team-profile.html', html, 'utf8', err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your Team Profile has been successfully created!");
    });
};


startGenerator()    
    .then(teamData => {
        return generateHTML(teamData);
    })
    .then(html => {
        return writeHtml(html);
    });
