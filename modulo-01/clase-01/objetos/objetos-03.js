/*
Ejemplo 3: Crear un objeto "Libro" con atributos: título, autor y género.
*/
class Libro {
    constructor(titulo, autor, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero;
    }
    
    esRecomendado() {
      return this.genero === "Aventura" || this.genero === "Misterio";
    }
  }
  
  const libro1 = new Libro("La Isla del Tesoro", "Robert Louis Stevenson", "Misterio");
  console.log(libro1.esRecomendado());  // Salida: true

  /*
En este ejemplo, creamos un objeto Libro con atributos y un método esRecomendado() que verifica si 
el libro es de los géneros "Aventura" o "Misterio". Luego, creamos una instancia llamada libro1 y 
usamos el método para determinar si es recomendado.
  */