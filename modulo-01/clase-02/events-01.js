const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola, mundo!');
});

server.listen(3000, 'localhost', () => {
  console.log('Servidor escuchando en http://localhost:3000/');
});

/*
En este ejemplo, el servidor HTTP utiliza eventos para manejar las solicitudes entrantes. 
Cada vez que llega una solicitud, se emite un evento y se invoca la función de manejo que responde a la solicitud.
*/