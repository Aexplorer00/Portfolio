const isPages = process.env.GITHUB_PAGES === 'true';
/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export', images: { unoptimized: true }, trailingSlash: true, ...(isPages ? { basePath: '/Portfolio', assetPrefix: '/Portfolio/' } : {}) };
export default nextConfig;
