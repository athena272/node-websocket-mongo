import io from "../server"

io.on("connection", (socket) => console.log(`Connection established 👨‍💻 id:${socket.id}`))