/*
3. Polimorfismo:
*/
class Forma {
    calcularArea() {
        return 0;
    }
}
  
class Rectangulo extends Forma {
    constructor(ancho, altura) {
        super();
        this.ancho = ancho;
        this.altura = altura;
    }
    
    calcularArea() {
        return this.ancho * this.altura;
    }
}
  
class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}
  
const formas = [
    new Rectangulo(5, 10), 
    new Circulo(3)
]

formas.forEach(forma => {
    console.log(`Área: ${forma.calcularArea()}`);
});

/*
En este ejemplo, las clases Rectangulo y Circulo heredan de la clase Forma, 
y cada una implementa el método calcularArea. 
El polimorfismo permite tratar a las instancias de diferentes clases de manera uniforme.
*/