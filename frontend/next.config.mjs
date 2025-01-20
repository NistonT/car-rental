/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
			},
		],
	},
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
