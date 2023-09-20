import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
const secretKey = 'mi_secreto_super_seguro';

// Middleware para verificar el token JWT
const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token de autorización' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    // Si el token es válido, almacenamos la información del usuario en el objeto de solicitud para su posterior uso
    next();
  });
};

// Ruta protegida con autorización basada en token JWT
app.get('/protegido', verifyToken, (req, res) => {
  res.json({ message: '¡Ruta protegida! Bienvenido ' + req});
});

// Ruta para generar un token JWT (simulación de inicio de sesión)
app.post('/login', (req, res) => {
  const username = 'Jorge';
  const userId = '12345';

  // Creamos un token JWT que expira en 1 hora
  const token = jwt.sign({ userId, username }, secretKey, { expiresIn: '1h' });

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});