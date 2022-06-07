import { Container } from "@typings/api/Container"
import { http } from "src/lib/http"

export const containers = async (): Promise<Container[]> => {
	const { data } = await http.get<Container[]>("/containers/json")
	return data
}
