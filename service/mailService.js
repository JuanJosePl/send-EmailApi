import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "../config/config.js";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export const sendEmail = async (name, email, message) => {
  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_USER,
    subject: `Nuevo mensaje de contacto de ${name}`,
    html: `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo Mensaje de Contacto</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f9fc; color: #333333;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        <tr>
          <td style="padding: 40px 30px;">
            <h1 style="color: #2c3e50; font-size: 28px; font-weight: 600; margin-bottom: 20px; text-align: center;">Nuevo Mensaje de Contacto</h1>
            <p style="color: #34495e; font-size: 16px; line-height: 1.6; margin-bottom: 30px; text-align: center;">Tienes un nuevo mensaje de contacto de:</p>
            <div style="background-color: #f1f8ff; border: 1px solid #e1ecf4; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
              <strong>Nombre:</strong> ${name}<br>
              <strong>Email:</strong> ${email}<br>
              <strong>Mensaje:</strong> <p>${message}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 30px; text-align: center; background-color: #ecf0f1;">
            <p style="color: #95a5a6; font-size: 14px; margin: 0;">© 2024 Portafolio-JuanDev. Todos los derechos reservados.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado correctamente");
  } catch (error) {
    console.error("Error enviando el correo:", error);
    throw new Error("Failed to send email");
  }
};