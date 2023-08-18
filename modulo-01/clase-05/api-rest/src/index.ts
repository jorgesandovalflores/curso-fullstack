// Importar los módulos necesarios
import express, { Request, Response } from 'express';

// Crear una instancia de Express
const app = express();

// Definir una ruta GET en la API REST
app.get('/api/books', (req: Request, res: Response) => {
  const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ];

  res.json(books);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('API REST escuchando en el puerto 3000');
});
