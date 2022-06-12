import { usePage } from "@utils/hooks/usePage"
import { useStore } from "@utils/hooks/useStore"

import styles from "./Header.module.scss"

import type { FC } from "react"
import { MdMenu } from "react-icons/md"

export const Header: FC = () => {
	const toggleSidebar = useStore((state) => state.toggleSidebar)
	const { name } = usePage() ?? {}

	return (
		<div className={styles.header}>
			<div className={styles.menuButton} onClick={toggleSidebar}>
				<MdMenu />
			</div>
			<div className={styles.title}>{name}</div>
		</div>
	)
}
