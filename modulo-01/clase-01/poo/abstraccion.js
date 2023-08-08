/*
1. Abstracción:
*/
class Vehiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
    
    obtenerDetalles() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
} 
  
const miAuto = new Vehiculo("Toyota", "Corolla");
console.log(miAuto.obtenerDetalles());  // Salida: Marca: Toyota, Modelo: Corolla

/*
En este ejemplo, la clase Vehiculo es una abstracción que encapsula los detalles comunes de cualquier vehículo, como la marca y el modelo.  
*/