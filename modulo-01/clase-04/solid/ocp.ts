abstract class Shape {
    abstract calculateArea(): number;
  }
  
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  // Si se desea agregar una nueva forma, como un triángulo, no es necesario
  // modificar las clases existentes. Solo necesitas crear una nueva clase que herede de Shape.
  