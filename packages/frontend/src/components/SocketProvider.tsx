import { createStore, Provider } from "@hooks/useStore"

import { FCC } from "@typings/React"

export const SocketProvider: FCC = ({ children }) => {
	return <Provider createStore={createStore}>{children}</Provider>
}
