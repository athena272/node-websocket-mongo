import { updateTextEditor, alertAndRedirect } from "./document.js"

const socket = io()

socket.on("send_text_clients", (text) => updateTextEditor(text))

socket.on("disconnect", (motive) => {
    console.log(`Servidor desconectado 💀!\nMotivo: ${motive}`);
});

socket.on("delete_room_was_acknowledged", (roomName) => alertAndRedirect(roomName))

export function showRoom(roomName) {
    socket.emit('show_room', roomName, (text) => {
        updateTextEditor(text)
    })
}

export function emitTextEditor({ text, roomName }) {
    socket.emit("text_editor", { text, roomName })
}

export function emitDeleteRoom(roomName) {
    socket.emit('delete_room', roomName)
}

// socket.on("send_text_area", (text) => updateTextEditor(text))