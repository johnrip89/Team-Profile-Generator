const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Steve Jobs', '12', 'jobs@apple.com', '100');
    expect(manager.name).toBe('Steve Jobs');
    expect(manager.id).toBe('12');
    expect(manager.email).toBe('jobs@apple.com');
    expect(manager.officeNumber).toBe('100');
});