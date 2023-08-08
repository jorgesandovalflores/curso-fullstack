/*
Ejemplo 1: Crear un objeto "Persona" con atributos: nombre, edad y género.
*/
class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
}

const persona1 = new Persona("Ana", 30, "Femenino");
console.log(persona1.nombre);  // Salida: Ana
console.log(persona1.edad);    // Salida: 30
console.log(persona1.genero);  // Salida: Femenino

/*
En este ejemplo, creamos una clase Persona con un constructor que acepta tres parámetros 
(nombre, edad y género) y luego creamos una instancia de esta clase llamada persona1 con los valores proporcionados. 
Accedemos a los atributos usando la notación de punto.
*/