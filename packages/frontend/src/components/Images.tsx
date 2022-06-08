// import styles from "./Images.module.scss"
import { useEmit } from "@utils/hooks/useEmit"

import type { FC } from "react"

import { Table } from "@components/Table"

export const Images: FC = () => {
	const images = useEmit("images") || []

	return (
		<>
			<Table
				data={images.map((image) => ({
					id: image.id,
					Tags: image.repoTags,
					Size: image.size,
					Created: image.created.toLocaleString(),
				}))}
			/>
		</>
	)
}
