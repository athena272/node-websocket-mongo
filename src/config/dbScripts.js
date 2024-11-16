import { roomsCollection } from "./dbConnect.js"

export async function indexRooms() {
    const rooms = await roomsCollection.find().toArray()
    return rooms
}

export async function showRoom(roomName) {
    const room = await roomsCollection.findOne({ name: roomName })
    return room
}

export async function storeRoom(roomName) {

}

export async function updateRoom({ roomName, text }) {
    const roomUpdate = await roomsCollection.updateOne(
        {
            name: roomName,
        },
        {
            $set: {
                text
            }
        }
    )

    return roomUpdate
}
