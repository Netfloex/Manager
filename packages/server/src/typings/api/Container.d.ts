import { Mount } from "@typings/api/Mount"
import { Port } from "@typings/api/Port"
import { State } from "@typings/api/State"

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
