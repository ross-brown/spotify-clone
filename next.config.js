/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dkcircoymvtvgskmeqgf.supabase.co',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig


// dkcircoymvtvgskmeqgf.supabase.co
