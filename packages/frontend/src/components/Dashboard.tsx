import type { SocketContainers } from "@socketTypes/Containers"
import { useStore } from "@utils/hooks/useStore"

import { FC, useEffect, useState } from "react"

import { ConnectionState } from "@components/ConnectionState"

export const Dashboard: FC = () => {
	const [containers, setContainers] = useState<SocketContainers>([])
	const io = useStore((state) => state.io)

	useEffect(() => {
		io.emit("containers", (containers) => {
			console.log(containers)

			setContainers(containers)
		})
	}, [io])
	return (
		<>
			<ConnectionState />
			{containers.length != 0 &&
				containers.map((container) => (
					<div key={container.id}>
						<div>Name: {container.names}</div>
						<div>Image {container.image}</div>
						<div>State {container.state}</div>
					</div>
				))}
		</>
	)
}
