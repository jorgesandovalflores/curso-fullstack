// JavaScript
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

const dog = new Dog("Buddy");
console.log(dog.name);       // Output: Buddy
dog.makeSound();             // Output: Woof!