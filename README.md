# Aplicación web vulnerable a inyección NoSQL

Esta es una aplicación web con una vulnerabilidad de **inyección NoSQL**. La aplicación permite iniciar sesión con usuario y contraseña, conectándose a una base de datos MongoDB alojada en MongoDB Atlas.

---

## Tecnologias usadas

- **Frontend:** HTML
- **Backend:** JavaScript
- **Base de datos:** MongoDB en Atlas Database

---

## Caracteristicas

- Login con los campos `usuario` y `contraseña`.
- Conexión a una base de datos MongoDB en Atlas Database.
- Consultas a la base de datos sin validación ni sanitización de los datos.
- Permite realizar ataques de inyección NoSQL.

---

## 🚀 Instalación local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/aecax/AplicacionVulnerableNoSQL.git
   cd AplicacionVulnerableNoSQL

2. Instala las dependencias:
   ```bash
   npm install 

3. Configura tu URI de MongoDB Atlas en server.js:
   ```bash
   const uri = 'mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/loginApp?...';

4. Ejecuta el servidor
   ```bash
   node server.js

5. En tu navegador introduce la siguiente url
   ```bash
   http://localhost:3000

