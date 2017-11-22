const webpack = require('webpack')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  })
]

if (isProduction) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  )
}

module.exports = {
  entry: './docs/entry.js',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  plugins,

  resolve: {
    alias: {
      'react-x-ray': path.join(__dirname, 'src/XRay')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: 'docs/',
    historyApiFallback: true
  }
}

