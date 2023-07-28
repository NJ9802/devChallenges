/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/app/image.ts",
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
