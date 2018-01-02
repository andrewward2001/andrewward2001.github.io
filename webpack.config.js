const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: './resources/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }, {
          test: /\.(png)$/,
          loader: 'file-loader',
          exclude: [
            path.resolve(__dirname, 'resources/img')
          ]
        }]
    },
    watch: false,
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
    ]
}
