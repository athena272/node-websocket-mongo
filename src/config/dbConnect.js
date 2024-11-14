
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_CONNECTION_STRING)

let roomsCollection

try {
    await client.connect()
    const db = client.db('alura-websockets')
    roomsCollection = db.collection('rooms')

    console.log("Connection established with MONGO 🍃")
} catch (error) {
    console.error("Something went wrong 💀\n", error)
}

export { roomsCollection }