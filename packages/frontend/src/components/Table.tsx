import styles from "./Table.module.scss"

import type { FC, ReactNode } from "react"

type Data = {
	id: string
} & Record<string, ReactNode>
export const Table: FC<{ data: Data[] }> = ({ data }) => {
	const keys = data.length
		? Object.keys(data[0]).filter((key) => key !== "id")
		: []

	return (
		<>
			<table className={styles.table}>
				<thead>
					<tr>
						{keys.map((key) => (
							<td key={key}>{key}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr key={row.id}>
							{keys.map((key) => (
								<td key={key}>{row[key]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
