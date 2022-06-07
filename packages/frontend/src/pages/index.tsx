import { NextPage } from "next"

import { Dashboard } from "@components/Dashboard"
import { SocketProvider } from "@components/SocketProvider"

const Home: NextPage = () => (
	<SocketProvider>
		<Dashboard />
	</SocketProvider>
)

export default Home
