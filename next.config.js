const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    })

    return config
  },
}

module.exports = {
  ...withPlugins(
    [
      [
        optimizedImages,
        {
          optimizeImagesInDev: false,
          handleImages: ['jpeg', 'png'],
        },
      ],
    ],
    nextConfig
  ),
  env: {
    BASE_API_URL: process.env.BASE_API_URL || 'http://localhost:1337',
    FILESTACK_API_KEY: process.env.FILESTACK_API_KEY || '',
  },
}
