import { SocketContainers } from "@typings/socket/Containers"

export interface ClientToServer {
	containers: (reply: (containers: SocketContainers) => void) => void
}
