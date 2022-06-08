// @ts-check

const { join } = require("path")
const withPWA = require("next-pwa")

/**
 * @type {import('next').NextConfig}
 **/

const config = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		outputStandalone: true,
		outputFileTracingRoot: join(__dirname, "../../"),
	},
	sassOptions: {
		includePaths: [join(__dirname, "src", "styles")],
	},
	async redirects() {
		return [{ source: "/", destination: "/containers", permanent: false }]
	},
	trailingSlash: true,
}

module.exports = withPWA({
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
	},
	...config,
})
