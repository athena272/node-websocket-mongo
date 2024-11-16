import { insertRoomLink } from "./index.js"
const socket = io()

socket.emit("index_rooms", (rooms) => {
    rooms.forEach(room => {
        insertRoomLink(room.name)
    });
})

socket.on("store_room_was_acknowledged", (rommName) => insertRoomLink(rommName))

socket.on("room_exists", (roomName) => alert(`A room with name ${roomName} already exists!`))

export function emitStoreRoom(rommName) {
    socket.emit("store_room", rommName)
}

