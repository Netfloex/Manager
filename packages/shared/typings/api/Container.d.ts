import { Mount } from "@apiTypes/Mount"
import { Port } from "@apiTypes/Port"
import { State } from "@apiTypes/State"

export interface Container {
	Id: string
	Names: string[]
	Image: string
	ImageID: string
	Command: string
	Created: number
	State: State
	Status: string
	Ports: Port[]
	Labels: Record<string, string>
	SizeRw: number
	SizeRootFs: number
	// HostConfig:
	// NetworkSettings:
	Mounts: Mount[]
}
