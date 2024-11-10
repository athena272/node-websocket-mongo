import { updateTextEditor } from "./document.js"

const socket = io()

export function emitTextEditor(text) {
    socket.emit("text_editor", text)
}

socket.on("all_clients_text", (text) => updateTextEditor(text))
