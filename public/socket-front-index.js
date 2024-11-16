import { insertRoomLink } from "./index.js"
const socket = io()

socket.emit("index_rooms", (rooms) => {
    rooms.forEach(room => {
        insertRoomLink(room.name)
    });
})

export function emitStoreRoom(rommName) {
    socket.emit("store_room", rommName)
}

