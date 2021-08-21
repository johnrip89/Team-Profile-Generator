const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);        
        this.job = 'Engineer';
        this.github = github;
    }
    getJob() {
        return `${this.job}`;
    }
    getGithub() {
        return `${this.github}`;
    }
}

module.exports = Engineer;