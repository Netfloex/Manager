import styles from "./Sidebar.module.scss"

import Link from "next/link"
import type { FC } from "react"

import { ConnectionState } from "@components/ConnectionState"

interface Page {
	name: string
	href: string
}
const pages: Page[] = [
	{
		name: "Containers",
		href: "/containers",
	},
	{
		name: "Images",
		href: "/images",
	},
]

export const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<ConnectionState />
			{pages.map((page) => (
				<div key={page.href}>
					<Link href={page.href}>{page.name}</Link>
				</div>
			))}
		</div>
	)
}
