/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: 'ORB-PRUEBA',
  assetPrefix: 'ORB-PRUEBA/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig