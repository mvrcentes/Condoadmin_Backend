import './database.js'
import cors from 'cors'
import express from 'express'
import houses from './routes/adminHouses.routes.js'
import services from './routes/services.routes.js'
import complaints from './routes/complaints.routes.js'
import announcements from './routes/announcements.routes.js'
import login from './routes/authorization.routes.js'

const app = express()

// // Configura las opciones de CORS para permitir el acceso desde el host deseado
// const corsOptions = {
//   origin: 'https://condoadminfront.azurewebsites.net', // Reemplaza con el dominio del nuevo host
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//   credentials: true, // Habilita el envío de cookies y encabezados de autenticación
// };

app.use(cors());
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers, *, Access-Control-Allow-Origin',
    'Origin, X-Requested-with, Content_Type, Accept, Authorization',
    'https://condoadminfront.azurewebsites.net'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
app.use(express.json());

// Agrega tus rutas aquí
app.use('/api/houses', houses)
app.use('/api/services', services)
app.use('/api/complaints', complaints)
app.use('/api/announcements', announcements)
app.use('/login', login)

const PORT = 4000

const main = async () => {
  await app.listen(PORT)
  console.log(`Server running on port ${PORT}`)
}

main()
