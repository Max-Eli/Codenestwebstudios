/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The redesign replaced three service sub-pages with anchored sections on
      // /services, and renamed /blog to /insights. These keep old inbound links
      // and anything already indexed alive.
      { source: "/services/web-development", destination: "/services#web-apps", permanent: true },
      { source: "/services/mobile-app-development", destination: "/services#mobile", permanent: true },
      { source: "/services/custom-software", destination: "/services#crm", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug", destination: "/insights", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
