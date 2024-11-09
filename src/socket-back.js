import { socket_io } from "../server"

socket_io.on("connection", (socket) => console.log(`Connection established 👨‍💻 id:${socket.id}`))