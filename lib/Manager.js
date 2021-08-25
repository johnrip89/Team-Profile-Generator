const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, job, officeNumber) {
        super(name, id, email, job);       
        this.officeNumber = officeNumber;        
    }    
    getOffice() {
        return `${this.officeNumber}`;
    }
}

module.exports = Manager;