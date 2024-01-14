/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/levels/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
