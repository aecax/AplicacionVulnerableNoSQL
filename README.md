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

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/aecax/AplicacionVulnerableNoSQL.git
   cd AplicacionVulnerableNoSQL
   ```

2. Instala las dependencias:
   ```bash
   npm install 
   ```

3. Configura tu URI de MongoDB Atlas en `server.js`:
   ```bash
   const uri = 'mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/loginApp?...';
   ```

4. Ejecuta el servidor
   ```bash
   node server.js
   ```

5. En tu navegador introduce la siguiente url
   ```bash
   http://localhost:3000
   ```

---

## Uso de la Aplicación
1. Ingresa un usuario y una contraseña en la interfaz web (`index.html`).
2. Al presionar "Ingresar", el formulario enviará una solicitud `POST` al backend (`server.js`) en `http://localhost:3000/login`.

### Ejemplo

Se pueden introducir los siguientes datos en los campos `username` y `password`.
```json
  {
    "username": { "$ne": null },
    "password": { "$ne": null }
  }
  ```
Esta inyección NoSQL puede leerse o interpretarse de la siguiente forma: "dame cualquier usuario cuyo nombre y contraseña no sean nulos". Esto devolverá al primer usuario registrado y esto pasará aunque no se haya iniciado sesión correctamente.
Este tipo de inyección NoSQL puede evitarse haciendo una validación y sanitización de los datos de entrada.
