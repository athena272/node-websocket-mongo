import { updateTextEditor } from "./document.js"

const socket = io()

export function selectRoom(roomName) {
    socket.emit('show_room', roomName, (text) => {
        updateTextEditor(text)
    })
}

export function emitTextEditor({ text, roomName }) {
    socket.emit("text_editor", { text, roomName })
}

socket.on("send_text_clients", (text) => updateTextEditor(text))

socket.on("disconnect", (motive) => {
    console.log(`Servidor desconectado 💀!\nMotivo: ${motive}`);
});

// socket.on("send_text_area", (text) => updateTextEditor(text))