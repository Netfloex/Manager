import { http } from "src/lib/http"

import { Container } from "@typings/api/Container"

export const containers = async (): Promise<Container[]> => {
	const { data } = await http.get<Container[]>("/containers/json")
	return data
}
