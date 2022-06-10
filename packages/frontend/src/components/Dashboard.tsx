import { useStore } from "@hooks/useStore"
import { cx } from "@utils/cx"

import styles from "./Dashboard.module.scss"

import { Header } from "@components/Header"
import { Sidebar } from "@components/Sidebar"

import type { FCC } from "@typings/React"

export const Dashboard: FCC = ({ children }) => {
	const sidebarOpen = useStore((state) => state.sidebarOpen)
	const closeSidebar = useStore((state) => state.closeSidebar)

	return (
		<>
			<Header />
			<Sidebar />
			<div className={styles.content}>{children}</div>
			<div
				className={cx([styles.fadeOverlay, sidebarOpen && styles.open])}
				onClick={closeSidebar}
			></div>
		</>
	)
}
