import styles from "./Dashboard.module.scss"

import { Sidebar } from "@components/Sidebar"

import type { FCC } from "@typings/React"

export const Dashboard: FCC = ({ children }) => {
	return (
		<div className={styles.dashboard}>
			<Sidebar />
			<div className={styles.content}>{children}</div>
		</div>
	)
}
