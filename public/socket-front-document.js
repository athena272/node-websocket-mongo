import { updateTextEditor } from "./document.js"

const socket = io()

export function selectRoom(roomName) {
    socket.emit('select_room', roomName)
}

export function emitTextEditor({ text, roomName }) {
    socket.emit("text_editor", { text, roomName })
}

socket.on("send_text_clients", (text) => updateTextEditor(text))

socket.on("disconnect", (motive) => {
    console.log(`Servidor desconectado 💀!\nMotivo: ${motive}`);
});