
const add = (a, b) => a + b;
const generateGreetings = (name = 'Anonymous') => `Hello ${name}.`;

test('should add two numbers' , () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should greet you from name', () => {
    const greetingMessage = generateGreetings('Umer');
    expect(greetingMessage).toBe('Hello Umer.');
});
test('should greet you without name', () => {
    const greetingMessage = generateGreetings();
    expect(greetingMessage).toBe('Hello Anonymous.');
});