import * as api from "@api"
import chalk from "chalk"
import { Server } from "socket.io"

import type { ClientToServer } from "@socketTypes/ClientToServer"
import type { SocketContainers } from "@socketTypes/Containers"
import type { ServerToClient } from "@socketTypes/ServerToClient"

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000
const io = new Server<ClientToServer, ServerToClient>(port, {})

io.on("connection", (socket) => {
	console.log(chalk`A client connected {dim ${socket.id}}`)
	socket.on("disconnect", () => {
		console.log(chalk`Disconnected {dim ${socket.id}}`)
	})

	socket.on(
		"containers",
		async (callback: (containers: SocketContainers) => void) => {
			const data = await api.containers()

			const containers: SocketContainers = data.map((container) => ({
				names: container.Names,
				image: container.Image,
				state: container.State,
				id: container.Id,
			}))

			callback(containers)
		},
	)
})

console.log("Starting...")
console.log(chalk`Listening on port {dim ${port}}`)

const main = async (): Promise<void> => {
	const containers = await api.containers()
	console.log(containers)
}

main()
