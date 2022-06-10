import { useStore } from "@hooks/useStore"
import { pages } from "@pages"
import { cx } from "@utils/cx"

import styles from "./Sidebar.module.scss"

import Link from "next/link"
import type { FC } from "react"

import { ConnectionState } from "@components/ConnectionState"

import SEO from "@seo-default"

export const Sidebar: FC = () => {
	const sidebarOpen = useStore((state) => state.sidebarOpen)
	const closeSidebar = useStore((state) => state.closeSidebar)

	console.log(sidebarOpen)

	return (
		<div className={cx([styles.sidebar, sidebarOpen && styles.open])}>
			<h1>{SEO.defaultTitle}</h1>

			<div className={styles.connectionState}>
				<ConnectionState />
			</div>
			<div className={styles.hrWrapper}>
				<hr />
			</div>
			{pages.map((page) => (
				<div className={styles.link} key={page.href}>
					<Link href={page.href}>
						<a onClick={closeSidebar}>
							<div>
								<>
									{<page.icon />}
									{page.name}
								</>
							</div>
						</a>
					</Link>
				</div>
			))}
		</div>
	)
}
