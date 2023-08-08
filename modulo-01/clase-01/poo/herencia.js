class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    sonido() {
        console.log("Haciendo algún sonido");
    }
}
  
class Perro extends Animal {
    sonido() {
        console.log("Ladra");
    }
}

class Gato extends Animal {
    sonido() {
        console.log("Maulla");
    }
}
  
const miGato = new Gato("Michi");
miGato.sonido();

//const miPerro = new Perro("Fido");
//miPerro.sonido();  // Salida: Ladra

/*
Aquí, la clase Perro hereda de la clase Animal, y el método sonido se sobrescribe en la clase Perro.  
*/