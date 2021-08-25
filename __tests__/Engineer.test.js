const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Steve Jobs', '12', 'jobs@apple.com', 'Engineer', 'sjobs12');
    expect(engineer.name).toBe('Steve Jobs');
    expect(engineer.id).toBe('12');
    expect(engineer.email).toBe('jobs@apple.com');
    expect(engineer.job).toBe('Engineer');
    expect(engineer.github).toBe('sjobs12');
});

test("gets engineer's name", () => {    
    const engineer = new Engineer('Steve Jobs', '12', 'jobs@apple.com', 'Engineer', 'sjobs12');
    expect(engineer.getName()).toBe(engineer.name);
});

test("gets engineer's id", () => {    
    const engineer = new Engineer('Steve Jobs', '12', 'jobs@apple.com', 'Engineer', 'sjobs12');
    expect(engineer.getId()).toBe(engineer.id);
});

test("gets engineer's email", () => {    
    const engineer = new Engineer('Steve Jobs', '12', 'jobs@apple.com', 'Engineer', 'sjobs12');
    expect(engineer.getEmail()).toBe(engineer.email);
});

test("gets engineer's github username", () => {    
    const engineer = new Engineer('Steve Jobs', '12', 'jobs@apple.com', 'Engineer', 'sjobs12');
    expect(engineer.getGithub()).toBe(engineer.github);
});

test("gets engineer's job title", () => {    
    const engineer = new Engineer('Steve Jobs', '12', 'jobs@apple.com', 'Engineer', 'sjobs12');
    expect(engineer.getJob()).toBe(engineer.job);
});