interface CanSwim {
    swim(): void;
  }
  
  interface CanFly {
    fly(): void;
  }
  
  class Duck implements CanSwim, CanFly {
    swim(): void {
      // Lógica de natación para el pato
    }
  
    fly(): void {
      // Lógica de vuelo para el pato
    }
  }
  
  class Fish implements CanSwim {
    swim(): void {
      // Lógica de natación para el pez
    }
  }
  
  // En lugar de tener una única interfaz grande que incluya ambos métodos swim() y fly(),
  // se han segregado en interfaces más pequeñas para que las clases solo implementen lo que necesitan.
  