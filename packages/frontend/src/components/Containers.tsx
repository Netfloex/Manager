import { useEmit } from "@utils/hooks/useEmit"

// import styles from "./Containers.module.scss"
import type { FC } from "react"

export const Containers: FC = () => {
	const containers = useEmit("containers")
	console.log(containers)

	return (
		<>
			{containers &&
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
