const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Steve Jobs', '12', 'jobs@apple.com', 'Intern', 'USU');
    expect(intern.name).toBe('Steve Jobs');
    expect(intern.id).toBe('12');
    expect(intern.email).toBe('jobs@apple.com');
    expect(intern.job).toBe('Intern');
    expect(intern.school).toBe('USU');
});

test("gets intern's name", () => {    
    const intern = new Intern('Steve Jobs', '12', 'jobs@apple.com', 'Intern', 'USU');
    expect(intern.getName()).toBe(intern.name);
});

test("gets intern's id", () => {    
    const intern = new Intern('Steve Jobs', '12', 'jobs@apple.com', 'Intern', 'USU');
    expect(intern.getId()).toBe(intern.id);
});

test("gets intern's email", () => {    
    const intern = new Intern('Steve Jobs', '12', 'jobs@apple.com', 'Intern', 'USU');
    expect(intern.getEmail()).toBe(intern.email);
});

test("gets intern's school", () => {
    const intern = new Intern('Steve Jobs', '12', 'jobs@apple.com', 'Intern', 'USU');
    expect(intern.getSchool()).toBe(intern.school);
});

test("gets manager's job title", () => {    
    const intern = new Intern('Steve Jobs', '12', 'jobs@apple.com', 'Intern', 'USU');
    expect(intern.getJob()).toBe(intern.job);
});