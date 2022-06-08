interface SocketImage {
	id: string
	repoTags: string[]
	size: number
	containers: number
	created: Date
}

export type SocketImages = SocketImage[]
