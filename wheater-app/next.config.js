/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { loader: "custom", loaderFile: "./src/app/customImageLoader.ts" },
};

module.exports = nextConfig;
