import './socket-front-index.js'

const roomsList = document.getElementById('lista-documentos')

function insertRoomLink(roomName) {
    roomsList.innerHTML += `
     <a href="./document/document.html?roomName=${roomName}" class="list-group-item list-group-item-action">
        ${roomName}
      </a>
    `

}

insertRoomLink("JavaScript")