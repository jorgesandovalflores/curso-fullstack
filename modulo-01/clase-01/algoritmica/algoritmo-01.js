/*
1. Determinar si un número es positivo, negativo o cero:
*/
function determinarSigno(numero) {
    if (numero > 0) {
      return "Positivo";
    } else if (numero < 0) {
      return "Negativo";
    } else {
      return "Cero";
    }
}
  
const numeroEjemplo = 0;
console.log(`El número ${numeroEjemplo} es ${determinarSigno(numeroEjemplo)}`);