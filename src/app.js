// require('./database')
import './database.js'

// const cors = require('cors')
import cors from 'cors'
// const express = require('express')
import express from 'express'

// Routes
import houses from './routes/adminHouses.routes.js'
import services from './routes/services.routes.js'
import complaints from './routes/complaints.routes.js'
import announcements from './routes/announcements.routes.js'

//authorization route
import login from './routes/authorization.routes.js'

const app = express()

// Configura las opciones de CORS para permitir el acceso desde el host deseado
const corsOptions = {
  origin: 'https://condoadminfront.azurewebsites.net', // Reemplaza con el dominio del nuevo host
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true, // Habilita el envío de cookies y encabezados de autenticación
};

app.use(cors(corsOptions));
app.use(express.json());


//routes
app.use('/api/houses', houses)

app.use('/api/services', services)

app.use('/api/complaints', complaints)

app.use('/api/announcements', announcements)

app.use('/login', login)

export default app
