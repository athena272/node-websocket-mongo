import './socket-front-index.js'
import { emitStoreRoom } from './socket-front-index.js'

const roomsList = document.getElementById('lista-documentos')
const form = document.getElementById('form-adiciona-documento')
const inputForm = document.getElementById('input-documento')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  emitStoreRoom(inputForm.value)
  inputForm.value = ''
})

export function insertRoomLink(roomName) {
  roomsList.innerHTML += `
     <a href="./document/?roomName=${roomName}" class="list-group-item list-group-item-action" id="room-${roomName}">
        ${roomName}
      </a>
    `
}

export function removeRoomLink(roomName) {
  const room = document.getElementById(`room-${roomName}`)
  alert(`The room with name ${roomName} was deleted!`)
  roomsList.removeChild(room)
}

// insertRoomLink("JavaScript")