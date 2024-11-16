import { insertRoomLink } from "./index.js"
const socket = io()

socket.emit("get_rooms", (rooms) => {
    rooms.forEach(room => {
        insertRoomLink(room.name)
    });
})