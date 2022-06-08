import { useEmit } from "@utils/hooks/useEmit"

import type { FC } from "react"

import { Table } from "@components/Table"

export const Containers: FC = () => {
	const containers = useEmit("containers") || []

	return (
		<>
			<Table
				data={containers.map((container) => ({
					id: container.id,
					Name: container.names,
					Image: container.image,
					State: container.state,
					Ports: container.ports.map((e, i) => (
						<div key={i}>
							{e.PublicPort}:{e.PrivatePort}/{e.Type}
						</div>
					)),
					Mounts: container.mounts.map((mount, i) => (
						<div key={i} style={{ marginTop: 10 }}>
							{mount.Source}:{mount.Destination}
						</div>
					)),
					Created: container.created.toLocaleString(),
					Status: container.status,
				}))}
			/>
		</>
	)
}
