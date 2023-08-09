// TypeScript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));  // Output: Hello, Alice!
console.log(greet(123));      // Error: Argument of type 'number' is not assignable to parameter of type 'string'.