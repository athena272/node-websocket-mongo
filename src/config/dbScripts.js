import { roomsCollection } from "./dbConnect.js"

export async function findRoom(roomName) {
    const room = await roomsCollection.findOne({ name: roomName })
    return room
}