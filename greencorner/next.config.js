/** @type {import('next').NextConfig} */
const nextConfig = {transpilePackages: ['three'],}

module.exports = nextConfig

const withVideos = require('next-videos')
module.exports = withVideos()