import "@styles/globals.scss"

import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"

import { Dashboard } from "@components/Dashboard"
import { SocketProvider } from "@components/SocketProvider"

import SEO from "@seo-default"

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<ThemeProvider defaultTheme="system" attribute="class">
		<DefaultSeo {...SEO} />
		<SocketProvider>
			<Dashboard>
				<Component {...pageProps} />
			</Dashboard>
		</SocketProvider>
	</ThemeProvider>
)

export default App
