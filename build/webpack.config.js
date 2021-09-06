const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const threadLoader = require('thread-loader');

const tsThreadOption = {
    loader: "thread-loader",
    // 有同样配置的 loader 会共享一个 worker 池
    options: {
      // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)，或者，
      // 在 require('os').cpus() 是 undefined 时回退至 1
      workers: 2,
      name: 'tsThreadOption'
    }
}

const cssThreadOption = {
    loader: "thread-loader",
    // 有同样配置的 loader 会共享一个 worker 池
    options: {
      // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)，或者，
      // 在 require('os').cpus() 是 undefined 时回退至 1
      workers: 2,
      name: 'cssThreadOption'
    }
}

threadLoader.warmup(
    {
        tsThreadOption,
        cssThreadOption
    },
    [
      // 加载模块
      // 可以是任意模块，例如
      'babel-loader',
      '@babel/preset-react',
      '@babel/preset-typescript',
      'less-loader',
    ]
);

module.exports = {
    entry: './src/app.tsx',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    tsThreadOption,
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true // babel 缓存
                        },
                    }
                ],
                
                exclude: /(node_modules|bower_components)/
            },

            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', cssThreadOption, 'less-loader']
            },

            {
                test: /\.(png|jpe?g|gif|svg)/,
                type: 'asset',
                generator: {
                    filename: 'static/[hash][ext][query]'
                },
                parser: {
                    dataUrlCondition: {
                      maxSize: 100 * 1024
                    }
                 }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html'
        })
    ],
}

