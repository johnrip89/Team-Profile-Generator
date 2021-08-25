const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Steve Jobs', '12', 'jobs@apple.com', 'Manager', '100');
    expect(manager.name).toBe('Steve Jobs');
    expect(manager.id).toBe('12');
    expect(manager.email).toBe('jobs@apple.com');    
    expect(manager.job).toBe('Manager');
    expect(manager.officeNumber).toBe('100');
});

test("gets manager's name", () => {    
    const manager = new Manager('Steve Jobs', '12', 'jobs@apple.com', 'Manager', '100');
    expect(manager.getName()).toBe(manager.name);
});

test("gets engineer's id", () => {    
    const manager = new Manager('Steve Jobs', '12', 'jobs@apple.com', 'Manager', '100');
    expect(manager.getId()).toBe(manager.id);
});

test("gets manager's email", () => {    
    const manager = new Manager('Steve Jobs', '12', 'jobs@apple.com', 'Manager', '100');
    expect(manager.getEmail()).toBe(manager.email);
});

test("gets manager's office number", () => {    
    const manager = new Manager('Steve Jobs', '12', 'jobs@apple.com', 'Manager', '100');
    expect(manager.getOffice()).toBe(manager.officeNumber);
});

test("gets manager's job title", () => {    
    const manager = new Manager('Steve Jobs', '12', 'jobs@apple.com', 'Manager', '100');
    expect(manager.getJob()).toBe(manager.job);
});