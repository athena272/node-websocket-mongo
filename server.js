import 'dotenv/config'
import express from 'express'
import url from 'url'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'
import connectDatabase from './src/config/dbConnect.js'

const connection = await connectDatabase()
connection.on('error', (error) => console.error("Something went wrong 💀\n", error))
connection.once('open', () => console.log("Connection established with MONGO 🍃"))

const app = express()
const currentPath = url.fileURLToPath(import.meta.url)
const publicDirectory = path.join(currentPath, "../public")
app.use(express.static(publicDirectory))

const PORT = process.env.PORT || 3000
const httpServer = http.createServer(app)
httpServer.listen(PORT, () => console.log("Server on 🔥"))

export const io = new Server(httpServer)
// io.on("connection", (socket) => console.log(`Connection established 👨‍💻 id:${socket.id}`))

