import { emitTextEditor, showRoom, emitDeleteRoom } from "./socket-front-document.js"

const urlParams = new URLSearchParams(window.location.search)
const roomName = urlParams.get('roomName')
const documentTitle = document.getElementById('titulo-documento')
const textEditor = document.getElementById('editor-texto')
const deleteButton = document.getElementById('excluir-documento')

documentTitle.textContent = roomName || 'Documento sem título'
showRoom(roomName)

textEditor.addEventListener('keyup', () => {
    emitTextEditor({ text: textEditor.value, roomName })
})

deleteButton.addEventListener('click', () => {
    emitDeleteRoom(roomName)
})

export function updateTextEditor(text) {
    textEditor.value = text
}

export function alertAndRedirect(roomName) {
    alert(`The room with name ${roomName} was deleted!`)
    window.location.href = '/'
}