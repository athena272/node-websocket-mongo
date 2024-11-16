import { io } from "../server.js"
import { findAllRooms, findRoom, updateRoom } from "./config/dbScripts.js"

io.on("connection", (socket) => {
    console.log(`Connection established 🚀 id: ${socket.id}`)

    //Server side
    socket.on("get_rooms", async (returnRooms) => {
        const rooms = await findAllRooms()
        if (rooms) {

            returnRooms(rooms)
        }
    })

    socket.on("select_room", async (roomName, returnText) => {
        socket.join(roomName)
        const room = await findRoom(roomName)

        if (room) {
            // socket.emit("send_text_area", room.text)

            returnText(room.text)
        }
    })

    socket.on("text_editor", async ({ text, roomName }) => {
        // io.emit("all_clients_text", text) MANDARIA PARA TODOS, INCLUSIVE ELA MESMO
        // socket.broadcast.emit("send_text_clients", text)
        const roomUpdate = await updateRoom({ roomName, text })

        //Se houve modificacao na tabela do banco de dados
        if (roomUpdate.modifiedCount) {

            socket.to(roomName).emit("send_text_clients", text)
        }
    })

    socket.on("disconnect", (motive) => {
        console.log(`Cliente "${socket.id}" desconectado 💀!\nMotivo: ${motive}`);
    });
})