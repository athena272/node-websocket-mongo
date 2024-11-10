import io from "../server.js"

io.on("connection", (socket) => console.log(`Connection established 👨‍💻 id:${socket.id}`))