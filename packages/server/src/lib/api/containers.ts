import { http } from "@lib/http"

import { Container } from "@apiTypes/Container"

export const containers = async (): Promise<Container[]> => {
	const { data } = await http.get<Container[]>("/containers/json")
	return data
}
