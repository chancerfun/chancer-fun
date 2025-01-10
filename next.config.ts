/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site generation
  reactStrictMode: true, // Enforces strict React rules
  images: {
    unoptimized: true, // Required for static exports if you're using `next/image`
  },
  trailingSlash: true, // Adds trailing slashes to all paths
  basePath: '', // Update this if deploying to a subpath (e.g., '/my-repo')
  assetPrefix: '', // Update this if assets need a prefix (e.g., CDN)

  webpack(config: {
      module: {
        rules: {
          test: RegExp; // Matches video file extensions
          type: string; generator: { filename: string; };
        }[];
      };
    }) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi|mov|wmv)$/, // Matches video file extensions
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]', // Output directory and naming pattern
      },
    });
    return config;
  },
};

module.exports = nextConfig;
