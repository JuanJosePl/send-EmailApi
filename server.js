import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import emailRoute from './routes/emailRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON y habilitar CORS
app.use(cors());
app.use(express.json());


// Ruta para el envío del correo electrónico
app.use('/api', emailRoute);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Hola, bienvenido al servidor!");
});

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error.message);
  }
};

startServer();

export default app;
