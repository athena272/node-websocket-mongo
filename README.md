# ⚡ Node WebSocket Mongo

🚀 A real-time WebSocket application using Node.js, Express, and MongoDB. This project enables seamless, live communication between connected clients.

## 🔥 Features

- 🔄 Bi-directional WebSocket communication with Socket.io.
- 📡 Real-time event broadcasting and message handling.
- 📁 Serves static files via Express.
- 🛠 Database integration with MongoDB using Mongoose.
- 🌍 Environment variable management with Dotenv.
- ♻ Live reloading during development with Nodemon.

## 🛠 Tech Stack

- **Node.js + Express.js**: Server-side framework.
- **Socket.io**: WebSocket-based real-time communication.
- **MongoDB + Mongoose**: NoSQL database and ODM.
- **Dotenv**: Environment configuration.
- **Nodemon**: Auto-restart during development.
- **Git & GitHub**: Version control and collaboration.

## 🚀 Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/seu-usuario/node-websocket-mongo.git
cd node-websocket-mongo
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Configure environment variables
Create a `.env` file based on `.env.example` and set the necessary variables, such as MongoDB connection URL.

### 4️⃣ Run the application
Development mode:
```sh
npm run dev
```

Production mode:
```sh
node server.js
```

## 🌍 Usage
The server starts on `http://localhost:3000` (or the port specified in `.env`).

## 📂 Project Structure
```
node-websocket-mongo/
│── public/            # Static files (HTML, CSS, JS)
│── server.js          # Express and WebSocket server
│── package.json       # Project dependencies
│── .env.example       # Example environment variables
│── nodemon.json       # Nodemon configuration
```

## 📜 License
This project is licensed under the ISC License.

