/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.blob.core.windows.net",
        pathname: "/private/org-BpPaBRzl640xLHB7IJNrpRQk/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
