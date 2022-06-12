import { Mount } from "@apiTypes/Mount"
import { Port } from "@apiTypes/Port"
import { State } from "@apiTypes/State"

export interface SocketContainer {
	id: string
	image: string
	names: string[]
	state: State
	ports: Port[]
	mounts: Mount[]
	created: Date
	status: string
}

export type SocketContainers = SocketContainer[]
