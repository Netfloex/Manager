import { SocketContainers } from "@socketTypes/Containers"
import { SocketImages } from "@socketTypes/Images"

export interface ClientToServer {
	containers: (reply: (containers: SocketContainers) => void) => void
	images: (reply: (images: SocketImages) => void) => void
}
