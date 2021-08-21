const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Steve Jobs', '12', 'jobs@apple.com', 'sjobs12');
    expect(engineer.name).toBe('Steve Jobs');
    expect(engineer.id).toBe('12');
    expect(engineer.email).toBe('jobs@apple.com');
    expect(engineer.github).toBe('sjobs12');
});