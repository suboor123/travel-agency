/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                // Match any route and rewrite to the static HTML file
                source: '/',
                destination: '/index.html',
            },
        ];
    },
};

export default nextConfig;
