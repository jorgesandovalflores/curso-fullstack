class OrderModel {
  constructor(private items: ItemModel[], cantidad: number) {}
}

class ItemModel {
  constructor(private name: string, private price: number) {}
}

// En lugar de tener la responsabilidad de cálculo en la clase Order,
// podemos crear una clase separada para el cálculo de totales.
class TotalCalculatorUseCase {
  calculateTotal(order: OrderModel): number {
    // Cálculo del total basado en los items de la orden
    return 0
  }
}