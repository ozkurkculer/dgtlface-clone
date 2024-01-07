/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dgtlface.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
