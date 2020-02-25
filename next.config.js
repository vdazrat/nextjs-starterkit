const withSass = require('@zeit/next-sass')
const webpack = require('webpack')
const path = require('path')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack(config) {
    // when new locales are to be supported, include them specifically
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'file-loader',
    })

    config.module.rules.push({
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: [path.resolve('./', 'styles/resources.scss')],
      },
    })

    return config
  },
  publicRuntimeConfig: {
    nodeEnv: process.env.NODE_ENV,
  },
})
