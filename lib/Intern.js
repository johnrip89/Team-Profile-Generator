const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);        
        this.job = 'Intern';
        this.school = school;
    }
    getJob() {
        return `${this.job}`;
    }
    getSchool() {
        return `${this.school}`;
    }
}

module.exports = Intern;