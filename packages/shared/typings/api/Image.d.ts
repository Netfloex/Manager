export interface Image {
	Id: string
	ParentId: string
	RepoTags: string[]
	RepoDigests: string[]
	Created: number
	Size: number
	VirtualSize: number
	SharedSize: number
	// Labels: {}
	Containers: number
}
