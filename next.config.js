/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/endsqr-fe-test' : '',
}

module.exports = nextConfig
