import { http } from "@lib/http"

import { Image } from "@apiTypes/Image"
import { SocketImages } from "@socketTypes/Images"

export const images = async (): Promise<SocketImages> => {
	const { data } = await http.get<Image[]>("/images/json")

	return data.map((image) => ({
		id: image.Id,
		repoTags: image.RepoTags,
		size: image.Size,
		containers: image.Containers,
		created: new Date(image.Created * 1000),
	}))
}
