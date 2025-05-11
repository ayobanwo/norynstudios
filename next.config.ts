/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // ⬅️ This is what fixes it
      },
  };
  
  module.exports = nextConfig;
  