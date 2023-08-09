const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenido del archivo:', data);
});

/**
En este caso, la función readFile emite un evento cuando se completa 
la lectura del archivo, y se proporciona una función de devolución de 
llamada para manejar ese evento.
*/