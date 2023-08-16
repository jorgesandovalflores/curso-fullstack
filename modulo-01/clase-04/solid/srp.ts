class Order {
  constructor(private items: Item[]) {}

  calculateTotal(): number {
    // Cálculo del total basado en los items
    return 0
  }
}

class Item {
  constructor(private name: string, private price: number) {}
}

// En lugar de tener la responsabilidad de cálculo en la clase Order,
// podemos crear una clase separada para el cálculo de totales.
class OrderTotalCalculator {
  calculateTotal(order: Order): number {
    // Cálculo del total basado en los items de la orden
    return 0
  }
}