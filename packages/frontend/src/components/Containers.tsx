import { useEmit } from "@utils/hooks/useEmit"

import type { FC } from "react"
import { FaCheck, FaCircle } from "react-icons/fa"

import { Table } from "@components/Table"

import { State } from "@apiTypes/State"
import { SocketContainer } from "@socketTypes/Containers"

type ParsedState = "healthy" | "running" | "exited" | "starting"
type ParsedStateWithState = ParsedState | State

export const ContainerStateIcon: FC<{ state: ParsedStateWithState }> = ({
	state,
}) => {
	const icons: Record<ParsedState, JSX.Element> = {
		running: <FaCircle color="green" />,
		exited: <FaCircle color="red" />,
		starting: <FaCircle color="yellow" />,
		healthy: <FaCheck color="green" />,
	}
	if (state in icons) {
		return icons[state as ParsedState]
	}

	return <>{state}</>
}

const ContainerState: FC<{ container: SocketContainer }> = ({ container }) => {
	let state: ParsedStateWithState = container.state
	if (container.status.match("healthy")) {
		state = "healthy"
	}
	if (container.status.match("starting")) {
		state = "starting"
	}
	return (
		<span title={state}>
			<ContainerStateIcon state={state} />
		</span>
	)
}

export const Containers: FC = () => {
	const containers = useEmit("containers") || []

	return (
		<>
			<Table
				data={containers.map((container) => ({
					State: <ContainerState container={container} />,
					id: container.id,
					Name: container.names,
					Image: container.image,
					Ports: container.ports.map((port) => (
						<div key={JSON.stringify(port)}>
							{port.PublicPort}:{port.PrivatePort}/{port.Type}
						</div>
					)),
					Mounts: container.mounts.map((mount) => (
						<div
							key={JSON.stringify(mount)}
							style={{ marginTop: 10 }}
						>
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
