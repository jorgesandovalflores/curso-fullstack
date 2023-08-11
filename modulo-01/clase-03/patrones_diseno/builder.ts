// Producto
class Pizza {
    private crust: string = "";
    private sauce: string = "";
    private toppings: string[] = [];

    constructor() {
        this.toppings = [];
    }

    setCrust(crust: string): void {
        this.crust = crust;
    }

    setSauce(sauce: string): void {
        this.sauce = sauce;
    }

    addTopping(topping: string): void {
        this.toppings.push(topping);
    }
}

// Builder
interface PizzaBuilder {
    buildCrust(): void;
    buildSauce(): void;
    buildToppings(): void;
    getResult(): Pizza;
}

// Builder Concreto
class HawaiianPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza = new Pizza();

    buildCrust(): void {
        this.pizza.setCrust("Corteza delgada");
    }

    buildSauce(): void {
        this.pizza.setSauce("Salsa de tomate");
    }

    buildToppings(): void {
        this.pizza.addTopping("Jamón");
        this.pizza.addTopping("Piña");
    }

    getResult(): Pizza {
        return this.pizza;
    }
}

// Director
class PizzaDirector {
    private builder: PizzaBuilder;

    constructor(builder: PizzaBuilder) {
        this.builder = builder;
    }

    construct(): Pizza {
        this.builder.buildCrust();
        this.builder.buildSauce();
        this.builder.buildToppings();
        return this.builder.getResult();
    }
}