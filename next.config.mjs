/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  distDir: '.next',
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Base path for project pages like https://<user>.github.io/Steinbeis
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/Steinbeis',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '/Steinbeis/',
};

export default nextConfig;
