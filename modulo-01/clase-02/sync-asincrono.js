const fs = require('fs');

console.log('1- Inicio del proceso asíncrono ==>')

fs.readFile('archivo.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error)
    return;
  }
  console.log('2- Contenido del archivo:', data)
});

console.log('3- Fin del proceso asíncrono <==')