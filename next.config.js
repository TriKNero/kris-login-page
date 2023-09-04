/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: '/',
  //     },
  //   ];
  // },
  output: "export",
};
module.exports = nextConfig
