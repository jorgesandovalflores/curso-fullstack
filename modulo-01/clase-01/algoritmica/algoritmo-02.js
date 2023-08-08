/*
2. Calcular el mayor de tres números:
*/
function encontrarMayor(a, b, c) {
    let mayor = a;
    
    if (b > mayor) {
      mayor = b;
    }
    
    if (c > mayor) {
      mayor = c;
    }
    
    return mayor;
}
  
const num1 = 30, num2 = 25, num3 = 15;
console.log(`El mayor de los tres números es: ${encontrarMayor(num1, num2, num3)}`);