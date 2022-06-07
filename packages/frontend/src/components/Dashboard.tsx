import { FC } from "react"

import { ConnectionState } from "@components/ConnectionState"
import { Containers } from "@components/Containers"

export const Dashboard: FC = () => {
	return (
		<>
			<ConnectionState />
			<Containers />
		</>
	)
}
