import { http } from "@lib/http"

import { Container } from "@apiTypes/Container"
import { SocketContainers } from "@socketTypes/Containers"

export const containers = async (): Promise<SocketContainers> => {
	const { data } = await http.get<Container[]>("/containers/json", {
		params: {
			all: true,
		},
	})

	return data.map((container) => ({
		names: container.Names,
		image: container.Image,
		state: container.State,
		id: container.Id,
		ports: container.Ports,
		mounts: container.Mounts,
		created: new Date(container.Created * 1000),
		status: container.Status,
	}))
}
