import { socket_io } from "../server.js"

socket_io.on("connection", (socket) => {
    console.log(`Connection established 👨‍💻 id:${socket.id}`)

    socket.on("text_editor", (text) => console.log("🚀 ~ socket_io.on ~ text:", text))
})