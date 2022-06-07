import { SocketContainers } from "@socketTypes/Containers"

export interface ClientToServer {
	containers: (reply: (containers: SocketContainers) => void) => void
	test: (reply: (iets: string) => void) => void
}
