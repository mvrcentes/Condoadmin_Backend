// require('./database')
import './database.js'

// const cors = require('cors')
import cors from 'cors'
// const express = require('express')
import express from 'express'

// Routes
import houses from './routes/adminHouses.routes.js'
import services from './routes/services.routes.js'

const app = express()

app.use(cors())
app.use(express.json())


//routes
app.use('/api/houses', houses)

app.use('/api/services', services)

export default app
