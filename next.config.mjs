/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // WAJIB untuk hosting cPanel/Hostinger
  images: {
    unoptimized: true, // Biar <Image /> tetap jalan di static hosting
  },
  typescript: {
    ignoreBuildErrors: true, // Optional
  },
};

export default nextConfig;
