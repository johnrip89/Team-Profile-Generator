const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Steve Jobs', '12', 'jobs@apple.com', 'USU');
    expect(intern.name).toBe('Steve Jobs');
    expect(intern.id).toBe('12');
    expect(intern.email).toBe('jobs@apple.com');
    expect(intern.school).toBe('USU');
});

test("gets intern's name", () => {
    const intern = new Intern();
    expect(intern.getName()).toBe(expect.stringContaining(`${Intern.name}`));
});

test("gets intern's school", () => {
    const intern = new Intern();
    expect(intern.getSchool()).toBe(expect.stringContaining(`${Intern.school}`));
});