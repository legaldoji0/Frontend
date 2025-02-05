/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACK}/api/:path*`,
      },
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: '/policy/refund',
        destination: '/refunds.html',
      },
      {
        source: '/policy/terms',
        destination: '/terms.html',
      },
      {
        source: '/policy/privacy',
        destination: '/privacy.html',
      },
      {
        source: '/faq',
        destination: '/faq.html',
      },
      {
        source: '/aboutus',
        destination: '/aboutus.html',
      },
    ];
  },
};

module.exports = nextConfig;
