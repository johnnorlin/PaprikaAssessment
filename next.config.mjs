/** @type {import('next').NextConfig} */
const nextConfig = {
  //allow external images from placeholder service
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
      },
    ],
  },
};

export default nextConfig;
