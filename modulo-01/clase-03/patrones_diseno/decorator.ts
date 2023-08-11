// Componente
interface Coffee {
    cost(): number;
    description(): string;
}

// Componente Concreto
class EmptyCoffe implements Coffee {
    cost(): number {
        return -1
    }
    description(): string {
        return ''
    }
}

class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }

    description(): string {
        return "Simple Coffee";
    }
}

// Decorador
abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee = new EmptyCoffe();

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    abstract cost(): number;
    abstract description(): string;
}

// Decorador Concreto
class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 2;
    }

    description(): string {
        return this.coffee.description() + ", Milk";
    }
}

// Uso del patrón Decorator
let coffee: Coffee = new SimpleCoffee();
console.log(coffee.description()); // Salida: Simple Coffee
console.log(coffee.cost()); // Salida: 5

coffee = new MilkDecorator(coffee);
console.log(coffee.description()); // Salida: Simple Coffee, Milk
console.log(coffee.cost()); // Salida: 7
