/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Set the maximum request body size to 10 megabytes
    },
  },
};

export default nextConfig;