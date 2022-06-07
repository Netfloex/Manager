import { io, Socket } from "socket.io-client"
import create, { StoreApi, UseBoundStore } from "zustand"
import createContext from "zustand/context"

import type { ClientToServer } from "@socketTypes/ClientToServer"
import type { ServerToClient } from "@socketTypes/ServerToClient"

export interface Store {
	io: Socket<ServerToClient, ClientToServer>
}

export const { Provider, useStore } = createContext<StoreApi<Store>>()

export const createStore = (): UseBoundStore<StoreApi<Store>> =>
	create<Store>(() => ({
		io: io(
			process.env.NEXT_PUBLIC_SOCKET_PORT
				? `${location.protocol}//${location.hostname}:${process.env.NEXT_PUBLIC_SOCKET_PORT}`
				: {},
		),
	}))
