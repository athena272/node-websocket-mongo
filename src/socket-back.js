import { io } from "../server.js"

io.on("connection", (socket) => {
    console.log(`Connection established 👨‍💻 id:${socket.id}`)

    //Server side
    socket.on("text_editor", (text) => {
        // io.emit("all_clients_text", text) MANDARIA PARA TODOS, INCLUSIVE ELA MESMO
        socket.broadcast.emit("send_text_all_clients", text)
    })

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!\nMotivo: ${motivo}`);
    });
})