class Employee {
    constructor(name, id, email, job) {        
        this.name = name;
        this.id = id;
        this.email = email;
        this.job = job;
    }

    getJob() {
        return `${this.job}`;
    }

    getName() {
        return `${this.name}`; 
    }

    getId() {
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email}`;
    }
}

module.exports = Employee;