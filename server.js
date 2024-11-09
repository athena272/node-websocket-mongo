import express from 'express'
import url from 'url'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const PORT = process.env.PORT || 3000
const currentPath = url.fileURLToPath(import.meta.url)
const publicDirectory = path.join(currentPath, "../public")
app.use(express.static(publicDirectory))

const httpServer = http.createServer(app)
httpServer.listen(PORT, () => console.log("Server on 🔥"))

export const socket_io = new Server(httpServer) 

// socket_io.on("connection", (socket) => console.log(`Connection established 👨‍💻 id:${socket.id}`))

