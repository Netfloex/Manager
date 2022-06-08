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
						<th>Port</th>
						<th>Mounts</th>
						<th>Created</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{containers &&
						containers.map((container) => (
							<tr key={container.id}>
								<td>{container.names}</td>
								<td>{container.image}</td>
								<td>{container.state}</td>
								<td>
									{container.ports.map((e, i) => (
										<div key={i}>
											{e.PublicPort}:{e.PrivatePort}/
											{e.Type}
										</div>
									))}
								</td>
								<td>
									{container.mounts.map((mount, i) => (
										<div key={i} style={{ marginTop: 10 }}>
											{mount.Source}:{mount.Destination}
										</div>
									))}
								</td>
								<td>{container.created.toLocaleString()}</td>
								<td>{container.status}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	)
}
