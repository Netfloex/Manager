import { useEmit } from "@utils/hooks/useEmit"

import styles from "./Containers.module.scss"

import type { FC } from "react"

export const Containers: FC = () => {
	const containers = useEmit("containers")
	console.log(containers)

	return (
		<>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Image</th>
						<th>State</th>
					</tr>
				</thead>
				<tbody>
					{containers &&
						containers.map((container) => (
							<tr key={container.id}>
								<td>{container.names}</td>
								<td>{container.image}</td>
								<td>{container.state}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	)
}
