class Bird {
    fly(): void {
      // Lógica de vuelo para todas las aves
    }
  }
  
  class Sparrow extends Bird {
    // Los gorriones pueden volar como todas las aves
  }
  
  class Penguin extends Bird {
    fly(): void {
      throw new Error("Los pingüinos no pueden volar.");
    }
  }
  
  // Si se usa un pingüino en lugar de un pájaro en una situación en la que
  // se espera que un pájaro vuele, habrá una violación del principio de LSP.
  