const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, job, github) {
        super(name, id, email, job); 
        this.github = github;        
    }    
    getGithub() {
        return `${this.github}`;
    }
}

module.exports = Engineer;