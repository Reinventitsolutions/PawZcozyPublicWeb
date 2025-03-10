/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Ensure static export
    trailingSlash: true, // Helps with S3 deployment
    images: {
      unoptimized: true, // Since AWS S3 does not support image optimization
    },
  };
  
  export default nextConfig;
  