import { State } from "@typings/api/State"

interface SocketContainer {
	names: string[]
	image: string
	state: State
	id: string
}

export type SocketContainers = SocketContainer[]
