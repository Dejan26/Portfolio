// /** @type {import('next').NextConfig} */
// const nextConfig = { output: 'standalone',};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // for static export
  images: {
    unoptimized: true, // disables image optimization for static sites
  },
};

export default nextConfig;
