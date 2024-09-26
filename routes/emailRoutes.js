import express from 'express';
import { sendEmail } from '../service/mailService.js';

const router = express.Router();

router.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await sendEmail(name, email, message);
    res.status(200).json({ message: 'Correo enviado' });
  } catch (error) {
    console.error('Error en la ruta del email:', error);
    res.status(500).json({ message: 'Correo no enviado error: ', error: error.message });
  }
});

export default router;