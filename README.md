# Send-Email API 📧

Este proyecto es una API sencilla para enviar correos electrónicos utilizando Node.js, Express y Nodemailer. La API permite el manejo de solicitudes para el envío de correos desde un formulario de contacto.


## ⚙️ Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Yarn](https://yarnpkg.com/) o [npm](https://www.npmjs.com/) para la gestión de paquetes.

## 🚀 Configuración

1. Clona este repositorio en tu máquina local:

   git clone https://github.com/JuanJosePl/send-EmailApi
   cd send-email-api

Instala las dependencias del proyecto:

npm install
O con Yarn:
yarn install

Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

EMAIL_USER=tuemail@gmail.com
EMAIL_PASS=tucontraseña
PORT=3000
EMAIL_USER: Correo electrónico desde el cual se enviarán los mensajes.
EMAIL_PASS: Contraseña de la cuenta de correo electrónico.

## ▶️ Uso
Para iniciar el servidor, utiliza uno de los siguientes comandos:

Con npm:
npm start

Con Yarn:
yarn start

El servidor estará disponible en: http://localhost:3000.

## 📬 Endpoints
Enviar Correo
Ruta: POST /api/send-email

Envía un correo electrónico a través de la API.

Cuerpo (JSON):

{
  "name": "Juan",
  "email": "juan@example.com",
  "message": "Este es un mensaje de prueba."
}

Respuesta Exitosa:
{
  "message": "Correo enviado correctamente"
}
Error:

{
  "error": "Error enviando el correo"
}

## 🛠️ Tecnologías Utilizadas
Node.js: Entorno de ejecución de JavaScript.
Express: Framework web minimalista para Node.js.
Nodemailer: Módulo para el envío de correos electrónicos.
dotenv: Carga de variables de entorno desde un archivo .env.
