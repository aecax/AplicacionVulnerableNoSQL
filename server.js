// Archivo: server.js
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const port = 3000;

// Configuración
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Conexión a MongoDB Atlas
const uri = 'mongodb+srv://student:dPgF0sb0ADBUZHCI@clusterunam.6pxlppf.mongodb.net/loginApp?retryWrites=true&w=majority&appName=ClusterUNAM';
const client = new MongoClient(uri);

let db;
client.connect()
  .then(() => {
    db = client.db('loginApp');
    console.log('Conectado a MongoDB Atlas');
  })
  .catch(err => console.error(err));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta de login (vulnerable a NoSQL injection)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.collection('users').findOne({
      username: username,
      password: password
    });
    if (user) {
      res.send(`<h2>Bienvenido, ${user.username}</h2>`);
    } else {
      res.send('<h2>Credenciales incorrectas</h2>');
    }
  } catch (err) {
    res.status(500).send('Error del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

