import { emitTextEditor } from "./socket-front-document.js"

const textEditor = document.getElementById('editor-texto')

export function updateTextEditor(text) {
    textEditor.value = text
}

textEditor.addEventListener('keyup', () => {
    emitTextEditor(textEditor.value)
})

