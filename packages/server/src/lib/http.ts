import axios from "axios"

export const http = axios.create({
	socketPath: "/var/run/docker.sock",
})
