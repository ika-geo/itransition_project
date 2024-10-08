const express = require('express')
const cors = require('cors')

const mainRouter = require('./route/MainRoute')
const corsOption = require('./utils/corsOption')

const PORT = process.env.PORT||5000

// Middleware
const app = express()
app.use(express.json())
app.use(cors(corsOption))

// Route
app.use('/api', mainRouter)

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`)
})