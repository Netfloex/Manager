// @ts-check

const { join } = require("path")

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
}

module.exports = config
