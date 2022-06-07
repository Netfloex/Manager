import chalk from "chalk"
import { Server } from "socket.io"

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000
const io = new Server(port, {})

io.on("connection", (socket) => {
	console.log(chalk`A client connected {dim ${socket.id}}`)
	socket.on("disconnect", () => {
		console.log(chalk`Disconnected {dim ${socket.id}}`)
	})
})

console.log("Starting...")
console.log(chalk`Listening on port {dim ${port}}`)
