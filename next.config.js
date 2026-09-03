/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	// Static export: the site has no server-side features, so it is published as plain HTML/CSS/JS.
	output: "export",
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
