const fs = require('fs');

console.log('1- Inicio del proceso síncrono')

try {
  const data = fs.readFileSync('archivo.txt', 'utf8')
  console.log('2- Contenido del archivo:', data)
} catch (error) {
  console.error(error)
}

console.log('3- Fin del proceso síncrono')