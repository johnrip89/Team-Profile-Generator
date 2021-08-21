const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);        
        this.job = 'Team Manager';
        this.officeNumber = officeNumber;
    }
    getJob() {
        return `${this.job}`;
    }
    getOffice() {
        return `${this.officeNumber}`;
    }
}

module.exports = Manager;