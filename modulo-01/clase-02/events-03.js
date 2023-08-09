const fs = require('fs');

const origen = fs.createReadStream('archivo-origen.txt');
const destino = fs.createWriteStream('archivo-destino.txt');

origen.pipe(destino);

origen.on('end', () => {
  console.log('Copia de archivo completa');
});

/**
En este caso, los eventos son utilizados por el stream de origen para informar 
cuando se ha completado la lectura y por el stream de destino 
para indicar cuando se ha completado la escritura.
*/