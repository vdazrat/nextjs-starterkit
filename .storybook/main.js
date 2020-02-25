const path = require('path')
const srcPath = path.resolve(__dirname, '../')
const nodeModulesPath = path.join(__dirname, '../node_modules')

const moduleRules = [
  {
    test: /\.scss$/,
    include: [srcPath, nodeModulesPath],
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]',
          },
          sourceMap: true,
          importLoaders: 1,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          prependData:
            '@import "' + path.resolve(srcPath, 'styles/theme.scss') + '";',
        },
      },
    ],
  },
  {
    test: /\.(graphql|gql)$/,
    exclude: nodeModulesPath,
    loader: 'graphql-tag/loader',
  },
  {
    loader: require.resolve('file-loader'),
    include: [/\.(wav|WAV)/],
    options: {
      name: 'static/media/[name].[hash:8].[ext]',
    },
  },
  // ** STOP ** Are you adding a new loader?
  // Make sure to add the new loader(s) before the "file" loader.
]

module.exports = {
  stories: ['../**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
    })
    config.module.rules.push.apply(config.module.rules, moduleRules)
    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
