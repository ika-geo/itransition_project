const express = require('express')
const cors = require('cors')

const mainRouter = require('./route/MainRoute')
const corsOption = require('./utils/corsOption')
const {setSocket} = require("./sockets/SetSocket");
const { Server } = require('socket.io');
const http = require("node:http");


const PORT = process.env.PORT||5000

// Middleware
const app = express()
app.use(express.json())
app.use(cors(corsOption))

// Route
app.use('/api', mainRouter)

// Socket
const server = http.createServer(app);
const io = new Server(server, {
    cors: corsOption,
    path: "/socket.io",
});
setSocket(io)

server.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`)
})