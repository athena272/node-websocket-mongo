import { io } from "../server.js"

const rooms = [
    {
        roomName: "JavaScript",
        text: "texto de javascript...",
    },
    {
        roomName: "Node",
        text: "texto de node...",
    },
    {
        roomName: "Socket.io",
        text: "texto de socket.io...",
    },
]

function findRoom(roomName) {
    const room = rooms.find(room => room.roomName === roomName)
    return room
}

io.on("connection", (socket) => {
    console.log(`Connection established 🚀 id: ${socket.id}`)

    //Server side
    socket.on("select_room", (roomName, returnText) => {
        socket.join(roomName)
        const room = findRoom(roomName)

        if (room) {
            // socket.emit("send_text_area", room.text)

            returnText(room.text)
        }
    })

    socket.on("text_editor", ({ text, roomName }) => {
        // io.emit("all_clients_text", text) MANDARIA PARA TODOS, INCLUSIVE ELA MESMO
        // socket.broadcast.emit("send_text_clients", text)
        const room = findRoom(roomName)
        if (room) {
            room.text = text
            socket.to(roomName).emit("send_text_clients", text)
        }
    })

    socket.on("disconnect", (motive) => {
        console.log(`Cliente "${socket.id}" desconectado 💀!\nMotivo: ${motive}`);
    });
})