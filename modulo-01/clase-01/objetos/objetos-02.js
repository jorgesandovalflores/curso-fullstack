/**
Ejemplo 2: Crear un objeto "Coche" con atributos: marca, modelo y año.
 */
class Coche {
    constructor(marca, modelo, anio) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
    }
    
    obtenerDetalles() {
      return `${this.marca} ${this.modelo}, Año ${this.anio}`;
    }
  }
  
  const coche1 = new Coche("Toyota", "Corolla", 2022);
  console.log(coche1.obtenerDetalles());  // Salida: Toyota Corolla, Año 2022

  /*
  En este ejemplo, además de los atributos, creamos un método obtenerDetalles() que devuelve una cadena 
  con los detalles del coche. Luego, creamos una instancia de la clase Coche llamada coche1 y 
  llamamos al método para obtener los detalles.
  */