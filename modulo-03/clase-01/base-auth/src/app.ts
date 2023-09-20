import express, { Request, Response } from 'express';
import basicAuth from 'express-basic-auth';

const app = express();
const port = 3000;

// Configuración de usuarios de ejemplo con sus contraseñas
const users: { [key: string]: string } = {
  usuario1: 'contrasena1',
  usuario2: 'contrasena2',
};

// Middleware de autenticación básica
const auth = basicAuth({
  users,
  challenge: true, // Solicitar autenticación si las credenciales son incorrectas
  unauthorizedResponse: 'Acceso no autorizado. Proporciona credenciales válidas.',
});

// Ruta protegida que requiere autenticación básica
app.get('/recurso-protegido', auth, (req: Request, res: Response) => {
  res.send('¡Acceso concedido! Este es un recurso protegido.');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
