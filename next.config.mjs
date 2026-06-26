/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
      remotePatterns: [
        { protocol: 'http', hostname: 'localhost' },
        { protocol: 'http', hostname: '127.0.0.1' },
      ],
    },
    turbopack: {},
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
          },
        },
      });
  
      return config;
    },
  
  };
  
  export default nextConfig;