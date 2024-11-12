import { emitTextEditor } from "./socket-front-document.js"

const urlParams = new URLSearchParams(window.location.search)
const roomName = urlParams.get('roomName')
const documentTitle = document.getElementById('titulo-documento')
const textEditor = document.getElementById('editor-texto')

documentTitle.textContent = roomName || 'Documento sem título'

export function updateTextEditor(text) {
    textEditor.value = text
}

textEditor.addEventListener('keyup', () => {
    emitTextEditor(textEditor.value)
})

