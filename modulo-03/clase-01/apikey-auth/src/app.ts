import express from 'express';

const app = express();
const port = 3000;

// Define una clave API (reemplaza esto con tu clave real)
const apiKey = 'tu-clave-api';

// Middleware para autenticar la clave API
const authenticateApiKey = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const providedApiKey = req.headers['x-api-key'];

  if (!providedApiKey || providedApiKey !== apiKey) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }

  next();
};

// Middleware para manejar las rutas protegidas
app.use('/api/secure', authenticateApiKey);

// Ruta de prueba protegida
app.get('/api/secure/data', (req, res) => {
  res.json({ message: 'Esta es una ruta protegida por clave API' });
});

// Ruta de prueba pública
app.get('/api/public/data', (req, res) => {
  res.json({ message: 'Esta es una ruta pública' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
