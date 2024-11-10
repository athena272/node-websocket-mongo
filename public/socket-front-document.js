import { updateTextEditor } from "./document.js"

const socket = io()

export function emitTextEditor(text) {
    socket.emit("text_editor", text)
}

socket.on("send_text_all_clients", (text) => updateTextEditor(text))
