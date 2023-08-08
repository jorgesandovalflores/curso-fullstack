/*
3. Verificar si un año es bisiesto:
*/
function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
      return true;
    } else {
      return false;
    }
}
  
const anioEjemplo = 2022;
if (esBisiesto(anioEjemplo)) {
    console.log(`${anioEjemplo} es un año bisiesto.`);
} else {
    console.log(`${anioEjemplo} no es un año bisiesto.`);
}