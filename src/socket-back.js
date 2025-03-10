import { io } from "../server.js"
import { indexRooms, showRoom, storeRoom, updateRoom, deleteRoom } from "./config/dbScripts.js"

io.on("connection", (socket) => {
    console.log(`Connection established 🚀 id: ${socket.id}`)

    //Server side
    socket.on("index_rooms", async (returnRooms) => {
        const rooms = await indexRooms()
        if (rooms) {

            returnRooms(rooms)
        }
    })

    socket.on("show_room", async (roomName, returnText) => {
        socket.join(roomName)
        const room = await showRoom(roomName)

        if (room) {
            // socket.emit("send_text_area", room.text)

            returnText(room.text)
        }
    })

    socket.on("store_room", async (roomName) => {
        const isRoomExist = (await showRoom(roomName)) !== null
        if (isRoomExist) {
            socket.emit("room_exists", roomName)
            return
        }

        const newRoom = await storeRoom(roomName)

        if (newRoom.acknowledged) {
            io.emit("store_room_was_acknowledged", roomName)
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

    socket.on("delete_room", async (roomName) => {
        const isRoomExist = (await showRoom(roomName)) !== null
        if (isRoomExist) {
            const roomDelete = await deleteRoom(roomName)

            if (roomDelete.acknowledged) {
                io.emit("delete_room_was_acknowledged", roomName)
            }
        }

        return
    })

    socket.on("disconnect", (motive) => {
        console.log(`Cliente "${socket.id}" desconectado 💀!\nMotivo: ${motive}`);
    });
})