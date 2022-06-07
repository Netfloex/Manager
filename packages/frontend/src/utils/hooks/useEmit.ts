import { useStore } from "@hooks/useStore"

import { useState, useEffect } from "react"

import { ClientToServer } from "@socketTypes/ClientToServer"

export const useEmit = <
	T extends keyof ClientToServer,
	V extends Parameters<Parameters<ClientToServer[T]>[0]>[0],
>(
	ev: T,
): V | false => {
	const io = useStore((state) => state.io)
	const [data, setData] = useState<V | false>(false)

	useEffect(() => {
		// @ts-expect-errorrrr
		io.emit(ev, (data: V) => {
			setData(data)
		})
	}, [io, ev])

	return data
}
