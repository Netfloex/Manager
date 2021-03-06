import { useStore } from "@hooks/useStore"

import type { FC } from "react"
import { useState, useEffect } from "react"

export const ConnectionState: FC = () => {
	const io = useStore((state) => state.io)
	const [connected, setConnected] = useState(io.connected)

	useEffect(() => {
		const onDisconnect = (): void => setConnected(false)
		const onConnect = (): void => setConnected(true)
		io.on("disconnect", onDisconnect)
		io.on("connect", onConnect)

		return () => {
			io.off("disconnect", onDisconnect)
			io.off("connect", onConnect)
		}
	}, [io])

	return <>Connected: {JSON.stringify(connected)}</>
}
