const greet = require('./greet');

test('Write a method greet(name)', () => {
    expect(greet("Bob"));
})

test('when name is "Bob", the method should return a string "Hello, Bob."', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
})

test('when name is null, then the method should return the string "Hello, my friend."', () => {
    expect(greet()).toBe("Hello, my friend.");
})

test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', () => {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
})

test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
})